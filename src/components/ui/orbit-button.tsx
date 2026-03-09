"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface OrbitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const OrbitButton = React.forwardRef<HTMLButtonElement, OrbitButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "orbit-btn relative cursor-pointer border-none rounded-full p-0 m-0 text-center font-semibold text-base tracking-[0.05em] leading-normal text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d3bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
          "active:scale-[0.98] transition-transform",
          className,
        )}
        {...props}
      >
        <div className="orbit-btn-wrapper">
          <span className="relative z-1 inline-block">{children}</span>
          <div className="orbit-circle orbit-circle-12" />
          <div className="orbit-circle orbit-circle-11" />
          <div className="orbit-circle orbit-circle-10" />
          <div className="orbit-circle orbit-circle-9" />
          <div className="orbit-circle orbit-circle-8" />
          <div className="orbit-circle orbit-circle-7" />
          <div className="orbit-circle orbit-circle-6" />
          <div className="orbit-circle orbit-circle-5" />
          <div className="orbit-circle orbit-circle-4" />
          <div className="orbit-circle orbit-circle-3" />
          <div className="orbit-circle orbit-circle-2" />
          <div className="orbit-circle orbit-circle-1" />
        </div>
      </button>
    );
  },
);

OrbitButton.displayName = "OrbitButton";

export { OrbitButton };
