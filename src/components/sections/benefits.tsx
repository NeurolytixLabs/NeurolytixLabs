"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  BarChart3,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

/* ─────────────────────── Benefit Data ─────────────────────── */

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentGlow: string;
}

const benefits: Benefit[] = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Increased Productivity",
    description:
      "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    accentGlow: "rgba(52, 211, 153, 0.06)",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Better Customer Experience",
    description:
      "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    accentGlow: "rgba(96, 165, 250, 0.06)",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24/7 Availability",
    description:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    accentGlow: "rgba(167, 139, 250, 0.06)",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Cost Reduction",
    description:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentGlow: "rgba(251, 191, 36, 0.06)",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data-Driven Insights",
    description:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    accentColor: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    accentGlow: "rgba(34, 211, 238, 0.06)",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Scalability & Growth",
    description:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    accentColor: "text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/20",
    accentGlow: "rgba(244, 114, 182, 0.06)",
  },
];

/* ─────────────────────── Benefit Card ─────────────────────── */

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7",
        "transition-all duration-300 ease-out",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        "hover:-translate-y-1",
        "overflow-hidden"
      )}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: benefit.accentGlow }}
        aria-hidden="true"
      />

      {/* Subtle corner gradient accent on hover */}
      <div
        className={cn(
          "absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          "bg-[radial-gradient(circle_at_top_right,var(--glow-color)_0%,transparent_70%)]"
        )}
        style={
          {
            "--glow-color": benefit.accentGlow,
          } as React.CSSProperties
        }
        aria-hidden="true"
      />

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className={cn(
            "flex items-center justify-center w-11 h-11 rounded-xl border transition-all duration-300",
            benefit.accentBg,
            benefit.accentBorder,
            benefit.accentColor,
            "group-hover:scale-110 group-hover:shadow-md"
          )}
          style={{
            boxShadow: "none",
          }}
        >
          {benefit.icon}
        </div>

        {/* Arrow icon that appears on hover */}
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300",
            "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
            benefit.accentBorder,
            benefit.accentColor
          )}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-lg sm:text-xl font-bold text-foreground leading-snug transition-colors duration-200 group-hover:text-foreground">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
        {benefit.description}
      </p>

      {/* Bottom accent line that appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div
          className={cn(
            "h-full w-full transition-transform duration-500 ease-out origin-left scale-x-0 group-hover:scale-x-100",
            benefit.accentColor === "text-emerald-400" && "bg-emerald-400/50",
            benefit.accentColor === "text-blue-400" && "bg-blue-400/50",
            benefit.accentColor === "text-violet-400" && "bg-violet-400/50",
            benefit.accentColor === "text-amber-400" && "bg-amber-400/50",
            benefit.accentColor === "text-cyan-400" && "bg-cyan-400/50",
            benefit.accentColor === "text-pink-400" && "bg-pink-400/50"
          )}
        />
      </div>
    </div>
  );
}

/* ─────────────────────── Main Benefits Section ─────────────────────── */

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeading
          badge="Benefits"
          title="The Key Benefits of AI for Your"
          highlightedText="Business Growth"
          description="Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes."
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
