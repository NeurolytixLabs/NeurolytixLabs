"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  expandedItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue>({
  expandedItems: [],
  toggleItem: () => {},
  type: "single",
});

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    { className, type = "single", defaultValue, collapsible = true, children, ...props },
    ref
  ) => {
    const [expandedItems, setExpandedItems] = React.useState<string[]>(() => {
      if (!defaultValue) return [];
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    });

    const toggleItem = React.useCallback(
      (value: string) => {
        setExpandedItems((prev) => {
          const isExpanded = prev.includes(value);

          if (type === "single") {
            if (isExpanded && collapsible) return [];
            if (isExpanded && !collapsible) return prev;
            return [value];
          }

          // multiple
          if (isExpanded) {
            return prev.filter((item) => item !== value);
          }
          return [...prev, value];
        });
      },
      [type, collapsible]
    );

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, type }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue>({
  value: "",
  isExpanded: false,
});

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { expandedItems } = React.useContext(AccordionContext);
    const isExpanded = expandedItems.includes(value);

    return (
      <AccordionItemContext.Provider value={{ value, isExpanded }}>
        <div
          ref={ref}
          data-state={isExpanded ? "open" : "closed"}
          className={cn(
            "border border-border rounded-xl mb-3 overflow-hidden transition-colors duration-200",
            isExpanded
              ? "bg-surface-light border-primary/20"
              : "bg-surface hover:border-primary/10",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  const { toggleItem } = React.useContext(AccordionContext);
  const { value, isExpanded } = React.useContext(AccordionItemContext);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => toggleItem(value)}
      aria-expanded={isExpanded}
      className={cn(
        "flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-all duration-200 cursor-pointer",
        "text-foreground hover:text-foreground/90",
        "[&>svg]:transition-transform [&>svg]:duration-300",
        className
      )}
      {...props}
    >
      <span className="pr-4">{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
          isExpanded && "rotate-180 text-primary"
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isExpanded } = React.useContext(AccordionItemContext);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<number>(0);

    React.useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [children, isExpanded]);

    return (
      <div
        ref={ref}
        role="region"
        data-state={isExpanded ? "open" : "closed"}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isExpanded ? `${height}px` : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        {...props}
      >
        <div
          ref={contentRef}
          className={cn("px-5 pb-4 pt-0 text-sm text-muted-foreground", className)}
        >
          {children}
        </div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
