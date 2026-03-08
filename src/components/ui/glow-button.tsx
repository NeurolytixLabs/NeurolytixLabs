import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative cursor-pointer rounded-2xl border-none p-[2px] text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]",
          className,
        )}
        style={{
          background:
            "radial-gradient(circle 80px at 80% -10%, rgba(255,255,255,0.15), #181b1b)",
        }}
        {...props}
      >
        {/* Outer glow pseudo-element */}
        <span
          className="pointer-events-none absolute right-0 top-0 z-[-1] h-[60%] w-[65%] rounded-[120px] transition-all duration-300 group-hover:opacity-100"
          style={{
            boxShadow: "0 0 20px rgba(109, 59, 255, 0.22)",
          }}
          aria-hidden="true"
        />

        {/* Bottom-left blob glow */}
        <span
          className="pointer-events-none absolute bottom-0 left-0 h-full w-[70px] rounded-2xl transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle 60px at 0% 100%, #6d3bff, rgba(109, 59, 255, 0.5), transparent)",
            boxShadow: "-10px 10px 30px rgba(109, 59, 255, 0.18)",
          }}
          aria-hidden="true"
        />

        {/* Inner content area */}
        <span
          className="relative z-[3] flex items-center justify-center gap-2 rounded-[14px] px-6 py-2 text-white transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle 80px at 80% -50%, #333338, #0f1111)",
          }}
        >
          {/* Inner purple overlay glow */}
          <span
            className="pointer-events-none absolute inset-0 rounded-[14px] transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle 60px at 0% 100%, rgba(109, 59, 255, 0.1), rgba(109, 59, 255, 0.07), transparent)",
            }}
            aria-hidden="true"
          />
          <span className="relative z-[1]">{children}</span>
        </span>
      </button>
    );
  },
);

GlowButton.displayName = "GlowButton";

export { GlowButton };
