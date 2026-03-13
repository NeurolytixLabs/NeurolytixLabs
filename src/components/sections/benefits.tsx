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
  icon: string;
  title: string;
  description: string;
  metric: string;
  theme: {
    iconBg: string;
    iconBorder: string;
    metricColor: string;
    metricBorder: string;
    metricBg: string;
    accentBarFrom: string;
    accentBarTo: string;
    glowColor: string;
  };
}

const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Decisions in Hours, Not Weeks",
    description:
      "Most businesses wait days for reports that are already outdated. Neurolytix delivers real-time intelligence so your team acts on what's happening now — not what happened last Monday.",
    metric: "⏱ 10× faster time-to-decision",
    theme: {
      iconBg: "bg-violet-500/[0.14]",
      iconBorder: "border-violet-500/25",
      metricColor: "text-violet-400",
      metricBorder: "border-violet-500/30",
      metricBg: "bg-violet-500/10",
      accentBarFrom: "from-violet-500",
      accentBarTo: "to-violet-400",
      glowColor: "rgba(124,92,252,0.07)",
    },
  },
  {
    icon: "🔗",
    title: "All Your Data, One Intelligence Layer",
    description:
      "CRM, ERP, spreadsheets, APIs — Neurolytix connects every source into a single, unified intelligence layer. No more switching between tools or reconciling conflicting numbers across five reports.",
    metric: "🔄 Single source of truth",
    theme: {
      iconBg: "bg-cyan-500/[0.12]",
      iconBorder: "border-cyan-500/[0.22]",
      metricColor: "text-cyan-400",
      metricBorder: "border-cyan-500/25",
      metricBg: "bg-cyan-500/[0.08]",
      accentBarFrom: "from-cyan-400",
      accentBarTo: "to-cyan-500",
      glowColor: "rgba(34,211,238,0.07)",
    },
  },
  {
    icon: "📉",
    title: "Cut Costs Without Cutting Teams",
    description:
      "Eliminate inefficiencies before they become losses. From inventory overstock to delivery bottlenecks, Neurolytix surfaces cost-saving opportunities automatically — no analyst required to find them.",
    metric: "💸 Avg. 28% cost reduction",
    theme: {
      iconBg: "bg-emerald-500/[0.12]",
      iconBorder: "border-emerald-500/[0.22]",
      metricColor: "text-emerald-400",
      metricBorder: "border-emerald-500/25",
      metricBg: "bg-emerald-500/[0.08]",
      accentBarFrom: "from-emerald-400",
      accentBarTo: "to-emerald-500",
      glowColor: "rgba(52,211,153,0.07)",
    },
  },
  {
    icon: "🧠",
    title: "ML That Works on Your Data, Not Demo Data",
    description:
      "Generic ML tools are trained on generic data. Neurolytix builds and trains models on your actual business data — your customers, your products, your seasonality. The predictions actually make sense.",
    metric: "🎯 94% avg. forecast accuracy",
    theme: {
      iconBg: "bg-orange-500/[0.12]",
      iconBorder: "border-orange-500/[0.22]",
      metricColor: "text-orange-400",
      metricBorder: "border-orange-500/25",
      metricBg: "bg-orange-500/[0.08]",
      accentBarFrom: "from-orange-400",
      accentBarTo: "to-amber-400",
      glowColor: "rgba(251,146,60,0.07)",
    },
  },
  {
    icon: "📈",
    title: "Grow Without Growing Your Data Team",
    description:
      "Hiring a data scientist costs ₹12–20L/year. Neurolytix delivers the same analytical firepower at a fraction of the cost — and scales as your data volume grows without adding headcount.",
    metric: "👥 No data team needed",
    theme: {
      iconBg: "bg-pink-500/[0.12]",
      iconBorder: "border-pink-500/[0.22]",
      metricColor: "text-pink-400",
      metricBorder: "border-pink-500/25",
      metricBg: "bg-pink-500/[0.08]",
      accentBarFrom: "from-pink-400",
      accentBarTo: "to-rose-400",
      glowColor: "rgba(244,114,182,0.07)",
    },
  },
  {
    icon: "🛡️",
    title: "Recommendations You Can Trust & Explain",
    description:
      "Every decision recommendation includes a confidence score and a plain-language explanation. No black-box outputs. Your managers understand why the system is recommending something before they act on it.",
    metric: "✅ Explainable AI outputs",
    theme: {
      iconBg: "bg-amber-500/[0.12]",
      iconBorder: "border-amber-500/[0.22]",
      metricColor: "text-amber-400",
      metricBorder: "border-amber-500/25",
      metricBg: "bg-amber-500/[0.08]",
      accentBarFrom: "from-amber-400",
      accentBarTo: "to-yellow-500",
      glowColor: "rgba(251,191,36,0.07)",
    },
  },
];

/* ─────────────────────── Stat Cell ─────────────────────── */

function StatCell({ stat }: { stat: Stat }) {
  return (
    <div className="group bg-card text-center py-7 px-6 transition-colors duration-300 hover:bg-[#131322]">
      <div
        className={cn(
          "text-[38px] font-bold leading-none mb-1.5 tracking-tight",
          stat.color,
        )}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {stat.value}
      </div>
      <div className="text-xs text-muted-foreground leading-snug whitespace-pre-line">
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
        "group relative flex flex-col gap-4 rounded-[20px] border border-border bg-card",
        "p-7 sm:p-8",
        "transition-all duration-300 ease-out",
        "hover:border-white/[0.13] hover:-translate-y-1 hover:bg-[#131322]",
        "overflow-hidden",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar on hover */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-out",
          "bg-gradient-to-r",
          benefit.theme.accentBarFrom,
          benefit.theme.accentBarTo,
        )}
        aria-hidden="true"
      />

      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 10% 0%, ${benefit.theme.glowColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-[14px] border text-[22px] shrink-0",
          benefit.theme.iconBg,
          benefit.theme.iconBorder,
        )}
      >
        {benefit.icon}
      </div>

      {/* Card body */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-foreground tracking-tight mb-2.5 leading-snug">
          {benefit.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-[1.8] font-light">
          {benefit.description}
        </p>
      </div>

      {/* Metric pill */}
      <div
        className={cn(
          "relative z-10 inline-flex items-center gap-1.5 w-fit",
          "px-3 py-1.5 rounded-full text-[11px] font-semibold border mt-auto",
          benefit.theme.metricColor,
          benefit.theme.metricBorder,
          benefit.theme.metricBg,
        )}
      >
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
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-0 -right-20 w-[500px] h-[500px] rounded-full bg-primary/[0.13] blur-[140px]" />
        <div className="absolute bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.13] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1160px]">
        {/* Section Header */}
        <SectionHeading
          badge="Why Neurolytix"
          title="The Business Growth Engine"
          highlightedText="Built Into Your Data"
          description="Stop leaving decisions to intuition. Neurolytix gives growing businesses the same data intelligence advantage that Fortune 500 companies pay millions to build internally."
        />

        {/* Stats Banner */}
        <div
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-px",
            "bg-border border border-border rounded-[18px] overflow-hidden",
            "mb-14",
          )}
        >
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
