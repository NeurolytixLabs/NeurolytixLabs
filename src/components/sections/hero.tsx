"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { GlowingCTAButton } from "@/components/ui/glowing-cta-button";
import { OrbitButton } from "@/components/ui/orbit-button";
import { NeuralParticles } from "@/components/ui/neural-particles";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-4 pb-34 sm:pt-28 sm:pb-28 md:pt-20 md:pb-32 px-6 sm:px-6 lg:px-8"
    >
      {/* ── Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] sm:w-[1200px] sm:h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.12)_0%,transparent_70%)]" />
        {/* Secondary subtle glows */}
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

      {/* ── Neural Particles Canvas (behind everything) ── */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <NeuralParticles
          className="w-full h-full"
          particleCount={50}
          connectionDistance={140}
          particleColor="109, 59, 255"
          lineColor="139, 92, 246"
          maxOpacity={0.5}
          speed={0.25}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Hero badge */}
        <Badge
          variant="glow"
          className="mb-6 sm:mb-8 px-4 py-1.5 text-xs sm:text-sm tracking-wide cursor-default gap-1.5 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Beyond Analytics Dashboards</span>
        </Badge>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-5 animate-fade-in-up"
          style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
        >
          Turning Data <br className="hidden sm:inline" />
          into <span className="text-gradient">Decisions.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground/70 leading-relaxed mb-8 sm:mb-10 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
        >
          A modern decision intelligence platform that turns operational data
          into clear business actions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          <a href="#process" className="w-full sm:w-auto">
            <GlowingCTAButton className="w-full">
              See How It Works
              <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
            </GlowingCTAButton>
          </a>
          <a href="#services" className="w-full sm:w-auto">
            <OrbitButton className="w-full">View Our Services</OrbitButton>
          </a>
        </div>

        {/* Social Proof */}
        <div
          className="mt-8 sm:mt-10 flex items-center gap-2 animate-fade-in-up"
          style={{ animationDelay: "450ms", animationFillMode: "backwards" }}
        >
          <ShieldCheck className="w-4 h-4 text-[#6d3bff]/60 shrink-0" />
          <p className="text-xs sm:text-sm text-muted-foreground/50 tracking-wide">
            Trusted by growing startups and data-driven teams
          </p>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
    </section>
  );
}
