"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { GlowingCTAButton } from "@/components/ui/glowing-cta-button";
import { GlowButton } from "@/components/ui/glow-button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const trustLogos = [
  "Accenture",
  "Deloitte",
  "McKinsey",
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Notion",
  "Slack",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] sm:w-[1200px] sm:h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.12)_0%,transparent_70%)]" />
        {/* Secondary subtle glow */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(109,59,255,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Hero badge */}
        <Badge
          variant="glow"
          className="mb-6 sm:mb-8 px-4 py-1.5 text-xs sm:text-sm tracking-wide cursor-default gap-1.5 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Not another Dashboard</span>
        </Badge>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 animate-fade-in-up"
          style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
        >
          Turning Data <br className="hidden sm:inline" />
          into <span className="text-gradient">Decisions.</span>
        </h1>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          <GlowingCTAButton className="w-full sm:w-auto">
            See How It Works
            <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
          </GlowingCTAButton>
        </div>
      </div>

      {/* Trust Marquee */}
      <div
        className="relative z-10 w-full mt-16 sm:mt-20 md:mt-28 animate-fade-in-up"
        style={{ animationDelay: "500ms", animationFillMode: "backwards" }}
      >
        <p className="text-center text-xs sm:text-sm text-muted-foreground/60 tracking-wider uppercase mb-6 sm:mb-8">
          Over 50+ business trust us
        </p>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          {/* Scrolling track */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-12 md:gap-16 w-max">
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex items-center justify-center h-10 sm:h-12 px-4 sm:px-6"
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-muted-foreground/30 tracking-wide whitespace-nowrap select-none transition-colors duration-300 hover:text-muted-foreground/50">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
