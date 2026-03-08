import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowingCTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowingCTAButton = React.forwardRef<
  HTMLButtonElement,
  GlowingCTAButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        // Base layout & shape
        "group relative h-12 min-w-[16rem] rounded-full border border-[#27272a] bg-[#0f0f14] px-8 text-left text-base font-bold text-gray-50 overflow-hidden cursor-pointer",
        // Transition durations
        "duration-500",
        // Hover border glow
        "hover:border-[#a78bfa]/60",
        
        // Origin for transforms
        "origin-left",
        // Focus ring
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d3bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
        // Active press
        "active:scale-[0.98]",

        // ── ::before pseudo-element (small orb, top-right) ──
        "before:absolute before:right-1 before:top-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-[#6d3bff] before:blur-lg before:content-['']",
        "before:duration-500",
        "hover:before:right-12 hover:before:-bottom-8 hover:before:blur",
        "hover:before:[box-shadow:20px_20px_20px_30px_rgba(109,59,255,0.35)]",

        // ── ::after pseudo-element (large orb, right) ──
        "after:absolute after:right-8 after:top-3 after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-[#a78bfa] after:blur-lg after:content-['']",
        "after:duration-500",
        "hover:after:-right-8",

        // Group hover durations for pseudo-elements
        "group-hover:before:duration-500 group-hover:after:duration-500",

        className,
      )}
      {...props}
    >
      <span className="relative z-20">{children}</span>
    </button>
  );
});

GlowingCTAButton.displayName = "GlowingCTAButton";

export { GlowingCTAButton };
