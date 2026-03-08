"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────── Types ─────────────────────── */

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  scale?: number;
  blur?: number;
  stagger?: number;
  as?: React.ElementType;
}

interface ScrollRevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: React.ElementType;
}

/* ─────────────── Stagger Context for Groups ─────────────── */

const StaggerContext = createContext<{
  stagger: number;
  getIndex: () => number;
} | null>(null);

/* ─────────────────── ScrollReveal Component ─────────────────── */

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 32,
  threshold = 0.15,
  once = true,
  scale,
  blur,
  as: Component = "div",
  ...rest
}: ScrollRevealProps & Record<string, unknown>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const indexRef = useRef<number | null>(null);

  // Pull stagger context if inside a ScrollRevealGroup
  const staggerCtx = useContext(StaggerContext);

  if (staggerCtx && indexRef.current === null) {
    indexRef.current = staggerCtx.getIndex();
  }

  const computedDelay =
    delay + (staggerCtx && indexRef.current !== null ? indexRef.current * staggerCtx.stagger : 0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: Math.min(Math.max(threshold, 0), 1),
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once]);

  // Build initial transform values based on direction
  const getInitialTransform = (): string => {
    const parts: string[] = [];

    switch (direction) {
      case "up":
        parts.push(`translateY(${distance}px)`);
        break;
      case "down":
        parts.push(`translateY(-${distance}px)`);
        break;
      case "left":
        parts.push(`translateX(${distance}px)`);
        break;
      case "right":
        parts.push(`translateX(-${distance}px)`);
        break;
      case "none":
        break;
    }

    if (scale !== undefined) {
      parts.push(`scale(${scale})`);
    }

    return parts.length > 0 ? parts.join(" ") : "none";
  };

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform: getInitialTransform(),
    filter: blur ? `blur(${blur}px)` : undefined,
    transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${computedDelay}ms, transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${computedDelay}ms, filter ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${computedDelay}ms`,
    willChange: "opacity, transform, filter",
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
    filter: "blur(0px)",
    transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${computedDelay}ms, transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${computedDelay}ms, filter ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${computedDelay}ms`,
    willChange: "auto",
  };

  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={isVisible ? visibleStyle : hiddenStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* ──────────────── ScrollRevealGroup (Staggered) ──────────────── */

export function ScrollRevealGroup({
  children,
  className,
  stagger = 100,
  as: Component = "div",
  ...rest
}: ScrollRevealGroupProps & Record<string, unknown>) {
  const counterRef = useRef(0);

  // Reset counter each render so children get fresh sequential indices
  counterRef.current = 0;

  const contextValue = {
    stagger,
    getIndex: () => counterRef.current++,
  };

  return (
    <StaggerContext.Provider value={contextValue}>
      <Component className={cn(className)} {...rest}>
        {children}
      </Component>
    </StaggerContext.Provider>
  );
}

/* ──────────────── Presets for Common Patterns ──────────────── */

export function RevealFromBottom({
  children,
  ...props
}: Omit<ScrollRevealProps, "direction">) {
  return (
    <ScrollReveal direction="up" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function RevealFromTop({
  children,
  ...props
}: Omit<ScrollRevealProps, "direction">) {
  return (
    <ScrollReveal direction="down" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function RevealFromLeft({
  children,
  ...props
}: Omit<ScrollRevealProps, "direction">) {
  return (
    <ScrollReveal direction="left" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function RevealFromRight({
  children,
  ...props
}: Omit<ScrollRevealProps, "direction">) {
  return (
    <ScrollReveal direction="right" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function RevealFade({
  children,
  ...props
}: Omit<ScrollRevealProps, "direction" | "distance">) {
  return (
    <ScrollReveal direction="none" distance={0} {...props}>
      {children}
    </ScrollReveal>
  );
}

export function RevealScale({
  children,
  scale = 0.92,
  ...props
}: Omit<ScrollRevealProps, "direction">) {
  return (
    <ScrollReveal direction="none" distance={0} scale={scale} {...props}>
      {children}
    </ScrollReveal>
  );
}

export function RevealBlur({
  children,
  blur = 8,
  ...props
}: Omit<ScrollRevealProps, "direction">) {
  return (
    <ScrollReveal direction="up" blur={blur} distance={20} {...props}>
      {children}
    </ScrollReveal>
  );
}
