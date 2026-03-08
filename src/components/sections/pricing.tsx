"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Sparkles,
  ArrowRight,
  Phone,
  Zap,
  Crown,
  Building2,
} from "lucide-react";

/* ─────────────────────── Pricing Data ─────────────────────── */

interface PricingFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  icon: React.ReactNode;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceLabel?: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  isPopular: boolean;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentGlow: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    icon: <Zap className="w-5 h-5" />,
    monthlyPrice: 37,
    annualPrice: 29,
    description: "Perfect for small businesses starting with AI automation.",
    features: [
      { text: "Basic workflow automation" },
      { text: "AI-powered personal assistant" },
      { text: "Standard analytics & reporting" },
      { text: "Email & chat support" },
      { text: "Up to 3 AI integrations" },
    ],
    cta: "Choose this plan",
    isPopular: false,
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    accentGlow: "rgba(52, 211, 153, 0.08)",
  },
  {
    id: "professional",
    name: "Professional",
    icon: <Crown className="w-5 h-5" />,
    monthlyPrice: 75,
    annualPrice: 59,
    description: "Perfect for growing teams that need advanced AI tools.",
    features: [
      { text: "Advanced workflow automation", highlighted: true },
      { text: "AI-driven sales & marketing tools", highlighted: true },
      { text: "Enhanced data analytics & insights" },
      { text: "Priority customer support" },
      { text: "Up to 10 AI integrations", highlighted: true },
    ],
    cta: "Choose this plan",
    isPopular: true,
    accentColor: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "border-primary/20",
    accentGlow: "rgba(109, 59, 255, 0.10)",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: <Building2 className="w-5 h-5" />,
    monthlyPrice: null,
    annualPrice: null,
    priceLabel: "Custom",
    description: "Perfect for large organizations needing full customization.",
    features: [
      { text: "Fully customizable AI automation", highlighted: true },
      { text: "Dedicated AI business consultant", highlighted: true },
      { text: "Enterprise-grade compliance" },
      { text: "24/7 VIP support", highlighted: true },
      { text: "Unlimited AI integrations", highlighted: true },
    ],
    cta: "Schedule a call",
    isPopular: false,
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentGlow: "rgba(251, 191, 36, 0.08)",
  },
];

/* ─────────────────────── Billing Toggle ─────────────────────── */

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: () => void;
}

function BillingToggle({ isAnnual, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-200 cursor-pointer",
          !isAnnual ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={() => isAnnual && onToggle()}
      >
        Monthly
      </span>

      {/* Toggle switch */}
      <button
        onClick={onToggle}
        className={cn(
          "relative inline-flex h-7 w-[52px] items-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer",
          isAnnual
            ? "bg-primary shadow-md shadow-primary/30"
            : "bg-muted border border-border"
        )}
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
      >
        <span
          className={cn(
            "inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ease-out",
            isAnnual ? "translate-x-[27px]" : "translate-x-[3px]"
          )}
        />
      </button>

      <span
        className={cn(
          "text-sm font-medium transition-colors duration-200 cursor-pointer",
          isAnnual ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={() => !isAnnual && onToggle()}
      >
        Annually
      </span>

      {/* Savings badge */}
      <Badge
        variant="glow"
        className={cn(
          "text-[10px] px-2 py-0.5 transition-all duration-300",
          isAnnual
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 pointer-events-none"
        )}
      >
        <Sparkles className="w-3 h-3 mr-0.5" />
        Save 20%
      </Badge>
    </div>
  );
}

/* ─────────────────────── Pricing Card ─────────────────────── */

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
  index: number;
}

function PricingCard({ tier, isAnnual, index }: PricingCardProps) {
  const currentPrice = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const isCustom = currentPrice === null;

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-card transition-all duration-500 overflow-hidden",
        tier.isPopular
          ? "border-primary/30 shadow-xl shadow-primary/10 lg:scale-[1.04] z-10"
          : "border-border hover:border-primary/15 shadow-lg shadow-black/10 hover:shadow-primary/5"
      )}
    >
      {/* Popular badge — absolutely positioned at top-right */}
      {tier.isPopular && (
        <div className="absolute top-4 right-4 z-20">
          <Badge
            variant="default"
            className="text-[10px] px-2.5 py-0.5 tracking-wider uppercase font-semibold shadow-md shadow-primary/20"
          >
            Popular
          </Badge>
        </div>
      )}

      {/* Top glow accent for popular card */}
      {tier.isPopular && (
        <div
          className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Hover glow background */}
      <div
        className={cn(
          "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-500",
          tier.isPopular ? "opacity-60" : "opacity-0 group-hover:opacity-100"
        )}
        style={{ backgroundColor: tier.accentGlow }}
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-7 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-xl border transition-transform duration-300 group-hover:scale-110",
              tier.accentBg,
              tier.accentBorder,
              tier.accentColor
            )}
          >
            {tier.icon}
          </div>
          <span className="text-lg font-bold text-foreground">{tier.name}</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          {isCustom ? (
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                {tier.priceLabel}
              </span>
            </div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                ${currentPrice}
              </span>
              <span className="text-base text-muted-foreground font-medium">
                /month
              </span>
            </div>
          )}

          {/* Annual savings hint */}
          {!isCustom && isAnnual && (
            <p className="text-xs text-primary mt-1.5 font-medium">
              Billed ${(currentPrice! * 12).toLocaleString()}/year — you save $
              {((tier.monthlyPrice! - currentPrice!) * 12).toLocaleString()}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {tier.description}
        </p>

        {/* CTA Button */}
        {tier.isPopular ? (
          <Button
            size="lg"
            className="w-full rounded-xl group/btn mb-7"
          >
            {tier.cta}
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Button>
        ) : isCustom ? (
          <Button
            variant="secondary"
            size="lg"
            className="w-full rounded-xl group/btn mb-7"
          >
            <Phone className="w-4 h-4 mr-1.5" />
            {tier.cta}
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-xl group/btn mb-7"
          >
            {tier.cta}
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Button>
        )}

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Features */}
        <div className="flex flex-col gap-3.5 flex-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            What&apos;s Included:
          </p>
          {tier.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div
                className={cn(
                  "flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 transition-colors duration-200",
                  feature.highlighted
                    ? cn(tier.accentBg, tier.accentBorder, "border")
                    : "bg-muted/60"
                )}
              >
                <Check
                  className={cn(
                    "w-3 h-3",
                    feature.highlighted
                      ? tier.accentColor
                      : "text-muted-foreground"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-sm leading-snug",
                  feature.highlighted
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Main Pricing Section ─────────────────────── */

export function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-gradient"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(109,59,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(109,59,255,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeading
          badge="Pricing"
          title="The Best AI Automation, at the"
          highlightedText="Right Price"
          description="Choose a plan that fits your business needs and start automating with AI"
        />

        {/* Billing Toggle */}
        <BillingToggle
          isAnnual={isAnnual}
          onToggle={() => setIsAnnual((prev) => !prev)}
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-5 items-start max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              isAnnual={isAnnual}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground/60 mt-8 sm:mt-10">
          All plans include a 14-day free trial. No credit card required.
          Cancel anytime.
        </p>
      </div>
    </section>
  );
}
