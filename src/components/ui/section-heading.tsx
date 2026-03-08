import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  highlightedText,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12 md:mb-16",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <Badge
          variant="glow"
          className="text-xs tracking-wider uppercase px-3 py-1"
        >
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          align === "center" && "max-w-3xl"
        )}
      >
        {title}{" "}
        {highlightedText && (
          <span className="text-gradient">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-muted-foreground text-base sm:text-lg leading-relaxed",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
