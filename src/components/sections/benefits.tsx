"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

/* ─────────────────────── Stats Data ─────────────────────── */

interface Stat {
  value: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: "38%",
    label: "Average reduction in\noperational waste",
    color: "text-emerald-400",
  },
  {
    value: "10×",
    label: "Faster decisions vs\nmanual reporting",
    color: "text-cyan-400",
  },
  {
    value: "94%",
    label: "Average ML model\naccuracy achieved",
    color: "text-violet-400",
  },
  {
    value: "6hrs",
    label: "Saved per manager\nper week",
    color: "text-orange-400",
  },
];

/* ─────────────────────── Benefit Data ─────────────────────── */

interface Benefit {
  tag: string;
  title: string;
  description: string;
  metric: string;
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  glowColor: string;
  barFrom: string;
  barTo: string;
}

const benefits: Benefit[] = [
  {
    tag: "Speed",
    title: "Decisions in Hours, Not Weeks",
    description:
      "Most businesses wait days for reports that are already outdated. Neurolytix delivers real-time intelligence so your team acts on what's happening now — not what happened last Monday.",
    metric: "10× faster time-to-decision",
    accentColor: "text-violet-400",
    accentBorder: "border-violet-500/25",
    accentBg: "bg-violet-500/[0.08]",
    glowColor: "rgba(124,92,252,0.07)",
    barFrom: "from-violet-500",
    barTo: "to-violet-400",
  },
  {
    tag: "Unification",
    title: "All Your Data, One Intelligence Layer",
    description:
      "CRM, ERP, spreadsheets, APIs — Neurolytix connects every source into a single, unified intelligence layer. No more switching between tools or reconciling conflicting numbers across five reports.",
    metric: "Single source of truth",
    accentColor: "text-cyan-400",
    accentBorder: "border-cyan-500/25",
    accentBg: "bg-cyan-500/[0.08]",
    glowColor: "rgba(34,211,238,0.07)",
    barFrom: "from-cyan-400",
    barTo: "to-cyan-500",
  },
  {
    tag: "Cost",
    title: "Cut Costs Without Cutting Teams",
    description:
      "Eliminate inefficiencies before they become losses. From inventory overstock to delivery bottlenecks, Neurolytix surfaces cost-saving opportunities automatically — no analyst required.",
    metric: "Avg. 28% cost reduction",
    accentColor: "text-emerald-400",
    accentBorder: "border-emerald-500/25",
    accentBg: "bg-emerald-500/[0.08]",
    glowColor: "rgba(52,211,153,0.07)",
    barFrom: "from-emerald-400",
    barTo: "to-emerald-500",
  },
  {
    tag: "Accuracy",
    title: "ML That Works on Your Data, Not Demo Data",
    description:
      "Generic ML tools are trained on generic data. Neurolytix builds and trains models on your actual business data — your customers, your products, your seasonality. The predictions actually make sense.",
    metric: "94% avg. forecast accuracy",
    accentColor: "text-orange-400",
    accentBorder: "border-orange-500/25",
    accentBg: "bg-orange-500/[0.08]",
    glowColor: "rgba(251,146,60,0.07)",
    barFrom: "from-orange-400",
    barTo: "to-amber-400",
  },
  {
    tag: "Scale",
    title: "Grow Without Growing Your Data Team",
    description:
      "Hiring a data scientist costs ₹12–20L/year. Neurolytix delivers the same analytical firepower at a fraction of the cost — and scales as your data volume grows without adding headcount.",
    metric: "No data team needed",
    accentColor: "text-pink-400",
    accentBorder: "border-pink-500/25",
    accentBg: "bg-pink-500/[0.08]",
    glowColor: "rgba(244,114,182,0.07)",
    barFrom: "from-pink-400",
    barTo: "to-rose-400",
  },
  {
    tag: "Trust",
    title: "Recommendations You Can Trust & Explain",
    description:
      "Every decision recommendation includes a confidence score and a plain-language explanation. No black-box outputs. Your managers understand why the system is recommending something before they act on it.",
    metric: "Explainable AI outputs",
    accentColor: "text-amber-400",
    accentBorder: "border-amber-500/25",
    accentBg: "bg-amber-500/[0.08]",
    glowColor: "rgba(251,191,36,0.07)",
    barFrom: "from-amber-400",
    barTo: "to-yellow-500",
  },
];

/* ─────────────────────── Stat Cell ─────────────────────── */

function StatCell({ stat }: { stat: Stat }) {
  return (
    <div className="group bg-card text-center py-8 px-6 transition-colors duration-300 hover:bg-[#131322]">
      <div className={cn("text-[40px] font-extrabold leading-none mb-2 tracking-tight tabular-nums", stat.color)}>
        {stat.value}
      </div>
      <div className="text-xs text-muted-foreground/60 leading-snug whitespace-pre-line font-light">
        {stat.label}
      </div>
    </div>
  );
}

/* ─────────────────────── Benefit Card ─────────────────────── */

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-5 rounded-2xl border border-border bg-card",
        "p-7 sm:p-8",
        "transition-all duration-300 ease-out",
        "hover:border-white/[0.12] hover:-translate-y-1 hover:bg-[#0f0f1a]",
        "overflow-hidden",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar — revealed on hover */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-gradient-to-r",
          benefit.barFrom,
          benefit.barTo,
        )}
        aria-hidden="true"
      />

      {/* Ambient glow — revealed on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 10% 0%, ${benefit.glowColor}, transparent 65%)` }}
        aria-hidden="true"
      />

      {/* Tag — replaces icon */}
      <div className="relative z-10">
        <span className={cn(
          "text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full border",
          benefit.accentColor,
          benefit.accentBorder,
          benefit.accentBg,
        )}>
          {benefit.tag}
        </span>
      </div>

      {/* Title + description */}
      <div className="relative z-10 flex flex-col gap-2.5">
        <h3 className="text-[17px] font-bold text-foreground tracking-tight leading-snug">
          {benefit.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-[1.8] font-light">
          {benefit.description}
        </p>
      </div>

      {/* Metric — pinned to bottom, no emoji */}
      <div className={cn(
        "relative z-10 mt-auto pt-1 flex items-center gap-2",
        "text-[11.5px] font-semibold",
        benefit.accentColor,
      )}>
        {/* Small colored dash instead of emoji */}
        <span className={cn(
          "inline-block w-4 h-[2px] rounded-full flex-shrink-0 bg-gradient-to-r",
          benefit.barFrom,
          benefit.barTo,
        )} />
        {benefit.metric}
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
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-0 -right-20 w-[500px] h-[500px] rounded-full bg-primary/[0.13] blur-[140px]" />
        <div className="absolute bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.13] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1160px]">

        <SectionHeading
          badge="Why Neurolytix"
          title="The Business Growth Engine"
          highlightedText="Built Into Your Data"
          description="Stop leaving decisions to intuition. Neurolytix gives growing businesses the same data intelligence advantage that Fortune 500 companies pay millions to build internally."
        />

        {/* Stats Banner */}
        <div className={cn(
          "grid grid-cols-2 lg:grid-cols-4 gap-px mb-14",
          "bg-border border border-border rounded-[18px] overflow-hidden",
        )}>
          {stats.map((stat) => (
            <StatCell key={stat.value} stat={stat} />
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}