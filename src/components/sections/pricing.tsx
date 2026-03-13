"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

/* ─────────────────────── Types ─────────────────────── */

interface PricingFeature {
  text: string;
  highlighted?: boolean;
  disabled?: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  tag: string;
  monthlyPrice: number;
  annualPrice: number;
  priceColor: string;
  accentColor: string;
  borderAccent: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  ctaStyle: "default" | "pro" | "enterprise";
  isPopular: boolean;
  checkColor: string;
  featuresLabelColor?: string;
}

/* ─────────────────────── Data ─────────────────────── */

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tag: "For early-stage teams",
    monthlyPrice: 135,
    annualPrice: 108,
    priceColor: "text-emerald-400",
    accentColor: "text-emerald-400",
    borderAccent: "rgba(52,211,153,0.5)",
    description:
      "Perfect for SMEs exploring data-driven decisions for the first time.",
    features: [
      { text: "Core data ingestion pipelines" },
      { text: "Standard analytics dashboards" },
      { text: "Access to 3 pre-built ML models" },
      { text: "Basic decision recommendations" },
      { text: "Standard support (48h response)" },
      { text: "Custom ML model training", disabled: true },
      { text: "Dedicated account manager", disabled: true },
    ],
    cta: "Get Started",
    ctaStyle: "default",
    isPopular: false,
    checkColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "pro",
    name: "Pro",
    tag: "Most popular",
    monthlyPrice: 175,
    annualPrice: 140,
    priceColor: "text-violet-400",
    accentColor: "text-violet-400",
    borderAccent: "rgba(124,92,252,0.6)",
    description:
      "For growing businesses ready to turn analytics into a competitive advantage.",
    features: [
      { text: "Everything in Starter", highlighted: true },
      { text: "Advanced analytics & anomaly detection", highlighted: true },
      { text: "Expanded ML model library (10+ models)", highlighted: true },
      { text: "Priority decision recommendations", highlighted: true },
      { text: "Priority support (12h response)", highlighted: true },
      { text: "Moderate customisation & add-ons", highlighted: true },
      { text: "Dedicated account manager", disabled: true },
    ],
    cta: "Choose Pro",
    ctaStyle: "pro",
    isPopular: true,
    checkColor: "text-violet-400 border-violet-500/40 bg-violet-500/10",
    featuresLabelColor: "text-violet-400/60",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tag: "For data-mature teams",
    monthlyPrice: 220,
    annualPrice: 176,
    priceColor: "text-cyan-400",
    accentColor: "text-cyan-400",
    borderAccent: "rgba(34,211,238,0.45)",
    description:
      "Full platform access, custom models, and strategic support for serious scale.",
    features: [
      { text: "Everything in Pro", highlighted: true },
      { text: "Full platform access — unlimited usage", highlighted: true },
      { text: "Custom ML model training & deployment", highlighted: true },
      { text: "Dedicated account manager", highlighted: true },
      { text: "24/7 VIP support + SLA guarantee", highlighted: true },
      { text: "Premium strategic consulting included", highlighted: true },
      { text: "Full white-labelling & API access", highlighted: true },
    ],
    cta: "Schedule a Call",
    ctaStyle: "enterprise",
    isPopular: false,
    checkColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
];

/* ─────────────────────── Compare Table Data ─────────────────────── */

interface CompareRow {
  feature: string;
  starter: { text?: string; check?: "yes" | "no" };
  pro: { text?: string; check?: "yes" | "no" };
  enterprise: { text?: string; check?: "yes" | "no" };
}

const compareRows: CompareRow[] = [
  {
    feature: "Data Ingestion Pipelines",
    starter: { check: "yes" },
    pro: { check: "yes" },
    enterprise: { check: "yes" },
  },
  {
    feature: "Pre-built ML Models",
    starter: { text: "3 models" },
    pro: { text: "10+ models" },
    enterprise: { text: "Unlimited" },
  },
  {
    feature: "Custom ML Model Training",
    starter: { check: "no" },
    pro: { check: "no" },
    enterprise: { check: "yes" },
  },
  {
    feature: "Decision Recommendations",
    starter: { text: "Basic" },
    pro: { text: "Priority" },
    enterprise: { text: "Full Suite" },
  },
  {
    feature: "Anomaly Detection & Alerts",
    starter: { check: "no" },
    pro: { check: "yes" },
    enterprise: { check: "yes" },
  },
  {
    feature: "Data Storage",
    starter: { text: "Limited" },
    pro: { text: "Extended" },
    enterprise: { text: "Unlimited" },
  },
  {
    feature: "Support Response Time",
    starter: { text: "48 hours" },
    pro: { text: "12 hours" },
    enterprise: { text: "24/7 VIP" },
  },
  {
    feature: "Dedicated Account Manager",
    starter: { check: "no" },
    pro: { check: "no" },
    enterprise: { check: "yes" },
  },
  {
    feature: "API Access & White-labelling",
    starter: { check: "no" },
    pro: { check: "no" },
    enterprise: { check: "yes" },
  },
  {
    feature: "Strategic Consulting",
    starter: { check: "no" },
    pro: { check: "no" },
    enterprise: { text: "Included" },
  },
];

/* ─────────────────────── Animated Price ─────────────────────── */

function useAnimatedPrice(target: number, duration = 380) {
  const [display, setDisplay] = React.useState(target);
  const prevRef = React.useRef(target);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const from = prevRef.current;
    const to = target;
    prevRef.current = target;
    if (from === to) return;
    const start = performance.now();
    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setDisplay(Math.round(from + (to - from) * ease));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return display;
}

/* ─────────────────────── Billing Toggle ─────────────────────── */

function BillingToggle({ isAnnual, onToggle }: { isAnnual: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-center gap-3.5 mb-13">
      <span
        className={cn("text-sm font-medium transition-colors cursor-pointer select-none",
          !isAnnual ? "text-foreground" : "text-muted-foreground")}
        onClick={() => isAnnual && onToggle()}
      >
        Monthly
      </span>

      <button
        onClick={onToggle}
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        className={cn(
          "relative inline-flex h-[26px] w-12 items-center rounded-full shrink-0 cursor-pointer",
          "transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isAnnual ? "bg-primary" : "bg-primary/25 border border-primary/40",
        )}
      >
        <span className={cn(
          "inline-block h-[18px] w-[18px] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.4)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          isAnnual ? "translate-x-[26px]" : "translate-x-[3px]",
        )} />
      </button>

      <span
        className={cn("text-sm font-medium transition-colors cursor-pointer select-none",
          isAnnual ? "text-foreground" : "text-muted-foreground")}
        onClick={() => !isAnnual && onToggle()}
      >
        Annually
      </span>

      <span className={cn(
        "text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full",
        "bg-emerald-500/[0.12] border border-emerald-500/25 text-emerald-400 transition-opacity duration-300",
        isAnnual ? "opacity-100" : "opacity-0 pointer-events-none",
      )}>
        Save 20%
      </span>
    </div>
  );
}

/* ─────────────────────── Pricing Card ─────────────────────── */

function PricingCard({ tier, isAnnual }: { tier: PricingTier; isAnnual: boolean }) {
  const price = useAnimatedPrice(isAnnual ? tier.annualPrice : tier.monthlyPrice);
  const isPro = tier.isPopular;

  return (
    <div className={cn(
      "group relative flex flex-col rounded-2xl border bg-card overflow-hidden",
      "p-7 sm:p-8 transition-all duration-300 ease-out",
      isPro
        ? ["bg-[#0d0d1e] border-primary/40 lg:-translate-y-2",
           "shadow-[0_0_0_1px_rgba(124,92,252,0.3),0_20px_60px_rgba(124,92,252,0.18),0_4px_16px_rgba(0,0,0,0.4)]",
           "hover:border-primary/60 hover:lg:-translate-y-3"]
        : ["border-border hover:border-white/[0.14] hover:-translate-y-1"],
    )}>

      {/* Pro top shimmer line */}
      {isPro && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-cyan-400 rounded-t-2xl" aria-hidden="true" />
      )}

      {/* Pro background glow */}
      {isPro && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,92,252,0.11), transparent 65%)" }}
          aria-hidden="true"
        />
      )}

      {/* Non-pro: hover accent top line */}
      {!isPro && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${tier.borderAccent}, transparent)` }}
          aria-hidden="true"
        />
      )}

      {/* ── Header ── */}
      <div className="relative z-10 mb-6">
        <div className="flex items-start justify-between mb-1">
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted-foreground/50">
            {tier.tag}
          </span>
          {isPro && (
            <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary text-white shadow-[0_0_12px_rgba(124,92,252,0.5)]">
              Popular
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">
          {tier.name}
        </h3>
      </div>

      {/* ── Price ── */}
      <div className="relative z-10 mb-5">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-semibold text-muted-foreground/60 mt-1">$</span>
          <span className={cn("text-[56px] font-extrabold tracking-tighter leading-none tabular-nums", tier.priceColor)}>
            {price}
          </span>
          <span className="text-[13px] text-muted-foreground/50 font-normal self-end mb-1.5">/mo</span>
        </div>
        {isAnnual && (
          <p className="text-[11px] text-muted-foreground/40 mt-1">
            Billed annually · saves ${(((isAnnual ? tier.monthlyPrice : tier.annualPrice) - (isAnnual ? tier.annualPrice : tier.monthlyPrice)) * 12)}
          </p>
        )}
      </div>

      {/* ── Description ── */}
      <p className="relative z-10 text-[13px] text-muted-foreground leading-relaxed font-light mb-6">
        {tier.description}
      </p>

      {/* ── CTA ── */}
      <button className={cn(
        "relative z-10 w-full py-3.5 px-5 rounded-xl text-sm font-bold mb-7",
        "flex items-center justify-center gap-2",
        "transition-all duration-200 ease-out cursor-pointer",
        tier.ctaStyle === "pro" && [
          "bg-primary text-white shadow-[0_4px_20px_rgba(124,92,252,0.35)]",
          "hover:bg-violet-400 hover:shadow-[0_6px_28px_rgba(124,92,252,0.5)] hover:-translate-y-0.5",
        ],
        tier.ctaStyle === "default" && [
          "bg-white/[0.05] border border-white/[0.09] text-foreground",
          "hover:bg-white/[0.09] hover:border-white/[0.16] hover:-translate-y-px",
        ],
        tier.ctaStyle === "enterprise" && [
          "bg-white/[0.05] border border-white/[0.09] text-foreground",
          "hover:bg-white/[0.09] hover:border-white/[0.16] hover:-translate-y-px",
        ],
      )}>
        {tier.cta}
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </button>

      {/* ── Divider ── */}
      <div className="relative z-10 h-px bg-border mb-5" />

      {/* ── Features label ── */}
      <p className={cn(
        "relative z-10 text-[10px] font-bold tracking-[0.12em] uppercase mb-3.5",
        tier.featuresLabelColor ?? "text-muted-foreground/50",
      )}>
        What&apos;s Included
      </p>

      {/* ── Feature list ── */}
      <ul className="relative z-10 flex flex-col gap-2.5">
        {tier.features.map((feature, i) => (
          <li key={i} className={cn(
            "flex items-start gap-2.5 text-[13px] leading-snug",
            feature.disabled
              ? "opacity-30"
              : feature.highlighted
                ? "text-foreground font-medium"
                : "text-white/60 font-light",
          )}>
            {/* Check mark */}
            <span className={cn(
              "flex items-center justify-center w-[17px] h-[17px] rounded-full shrink-0 mt-px",
              "text-[9px] font-bold border",
              feature.disabled
                ? "border-white/10 bg-white/[0.04] text-white/20"
                : tier.checkColor,
            )}>
              {feature.disabled ? "–" : "✓"}
            </span>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────── Compare Cell ─────────────────────── */

function CompareCellContent({ value, colorClass }: { value: { text?: string; check?: "yes" | "no" }; colorClass: string }) {
  if (value.check === "yes") return <span className={cn("text-sm font-medium", colorClass)}>✓</span>;
  if (value.check === "no") return <span className="text-sm text-muted-foreground/30">–</span>;
  if (value.text) return <span className={cn("text-xs font-medium", colorClass)}>{value.text}</span>;
  return null;
}

/* ─────────────────────── Compare Table ─────────────────────── */

function CompareTable() {
  return (
    <div className="mt-14 hidden lg:block">
      <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-muted-foreground/40 text-center mb-6">
        Full Plan Comparison
      </p>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border border-border rounded-xl overflow-hidden">
        {/* Header */}
        {["Feature", "Starter", "Pro", "Enterprise"].map((h, i) => (
          <div key={h} className={cn(
            "px-4 py-3 text-[11px] font-bold tracking-[0.08em] uppercase bg-white/[0.02] border-b border-border",
            i < 3 && "border-r",
            i === 0 ? "text-muted-foreground/50" : "",
            i === 1 ? "text-emerald-400/70 text-center" : "",
            i === 2 ? "text-violet-400/70 text-center" : "",
            i === 3 ? "text-cyan-400/70 text-center" : "",
          )}>
            {h}
          </div>
        ))}
        {/* Rows */}
        {compareRows.map((row, i) => {
          const isLast = i === compareRows.length - 1;
          return (
            <React.Fragment key={row.feature}>
              <div className={cn("px-4 py-3 text-xs text-white/50 bg-card border-r border-border", !isLast && "border-b")}>
                {row.feature}
              </div>
              <div className={cn("px-4 py-3 text-center bg-card border-r border-border", !isLast && "border-b")}>
                <CompareCellContent value={row.starter} colorClass="text-emerald-400" />
              </div>
              <div className={cn("px-4 py-3 text-center bg-primary/[0.03] border-r border-border", !isLast && "border-b")}>
                <CompareCellContent value={row.pro} colorClass="text-violet-400" />
              </div>
              <div className={cn("px-4 py-3 text-center bg-card border-border", !isLast && "border-b")}>
                <CompareCellContent value={row.enterprise} colorClass="text-cyan-400" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────── Main Section ─────────────────────── */

export function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <section id="pricing" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-primary/[0.13] blur-[140px]" />
        <div className="absolute bottom-20 -right-10 w-[350px] h-[350px] rounded-full bg-cyan-400/[0.13] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1160px]">
        <SectionHeading
          badge="Pricing"
          title="Decision Intelligence"
          highlightedText="at the Right Price"
          description="No data team required. No months of setup. Choose a plan that fits where your business is today — and scale as you grow."
        />

        <BillingToggle isAnnual={isAnnual} onToggle={() => setIsAnnual(p => !p)} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>

        <p className="text-center text-[13px] text-muted-foreground/50 font-light mt-10">
          All plans include a{" "}
          <strong className="text-muted-foreground/70 font-medium">14-day free trial</strong>.
          {" "}No credit card required. Cancel anytime.
        </p>

        <CompareTable />
      </div>
    </section>
  );
}