"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Bot, BarChart3 } from "lucide-react";

/* ─────────────────────── Floating Orbit Icon ─────────────────────── */

interface FloatingIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: string;
}

function FloatingIcon({ icon, className, delay = "0s" }: FloatingIconProps) {
  return (
    <div
      className={cn(
        "absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm text-primary/40 transition-all duration-700",
        "animate-float",
        className,
      )}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}

/* ─────────────────────── Main CTA Banner Section ─────────────────────── */

export function CTABanner() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Full-width background glow layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.14)_0%,transparent_65%)]" />
        {/* Secondary warm glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(109,59,255,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Card Container */}
        <div className="relative rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.04] via-card to-primary/[0.02] backdrop-blur-sm p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
          {/* Inner glow effects */}
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.12)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.06)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none rounded-3xl overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          {/* Decorative top border gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            aria-hidden="true"
          />

          {/* Floating decorative icons (hidden on small screens) */}
          <FloatingIcon
            icon={<Zap className="w-5 h-5" />}
            className="hidden md:flex -top-4 left-[15%] rotate-12"
            delay="0s"
          />
          <FloatingIcon
            icon={<Bot className="w-5 h-5" />}
            className="hidden md:flex top-8 right-[10%] -rotate-6"
            delay="0.5s"
          />
          <FloatingIcon
            icon={<BarChart3 className="w-5 h-5" />}
            className="hidden lg:flex bottom-8 left-[8%] rotate-6"
            delay="1s"
          />
          <FloatingIcon
            icon={<Sparkles className="w-5 h-5" />}
            className="hidden lg:flex -bottom-2 right-[18%] -rotate-12"
            delay="1.5s"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 sm:mb-6">
              Let AI do the Work <br className="hidden sm:inline" />
              so you can <span className="text-gradient">Scale Faster</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8 sm:mb-10">
              Book a Call Today and Start Automating
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                size="xl"
                className="rounded-full w-full sm:w-auto group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-shadow duration-300"
              >
                <Sparkles className="w-4.5 h-4.5 mr-1.5" />
                Book a free call
                <ArrowRight className="w-4.5 h-4.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-full sm:w-auto group"
              >
                View services
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Trust note */}
            <p className="text-xs text-muted-foreground/50 mt-6 sm:mt-8 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
              Free consultation · No commitment · Setup in 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
