"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  HeartPulse,
  DollarSign,
  Rocket,
  GripHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Clock,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

/* ─────────────────────── Case Study Data ─────────────────────── */

interface ImpactMetric {
  label: string;
  value: string;
}

interface CaseStudy {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  quote: string;
  company: string;
  companyDescription: string;
  details: string;
  impactMetrics: ImpactMetric[];
  accentColor: string;
  accentBg: string;
  accentBorder: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "trailforge",
    icon: <Package className="w-5 h-5 text-emerald-400" />,
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
    quote:
      '"AI-driven forecasting cut inventory waste by 40% for TrailForge"',
    company: "TrailForge",
    companyDescription: "Suitcase & Travel Gear Brand",
    details:
      "TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
    impactMetrics: [
      { label: "Less Inventory Waste", value: "40%" },
      { label: "Faster Production", value: "35%" },
      { label: "More Accurate Forecasting", value: "20%" },
      { label: "Faster Fulfillment", value: "25%" },
    ],
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
  },
  {
    id: "medixchain",
    icon: <HeartPulse className="w-5 h-5 text-blue-400" />,
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    quote:
      '"AI-powered workflows reduced error rate by 80% in daily operations"',
    company: "MedixChain",
    companyDescription: "Healthcare Logistics",
    details:
      "MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
    impactMetrics: [
      { label: "Error Reduction", value: "80%" },
      { label: "Accuracy in Data Logs", value: "90%" },
      { label: "Faster Delivery", value: "30%" },
      { label: "Hours Saved", value: "60+" },
    ],
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
  },
  {
    id: "finsolve",
    icon: <DollarSign className="w-5 h-5 text-amber-400" />,
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/20",
    quote:
      '"Automating 50% of operations saved 20% in costs within 2 months"',
    company: "FinSolve",
    companyDescription: "Financial Services",
    details:
      "FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.",
    impactMetrics: [
      { label: "Operations Automated", value: "50%" },
      { label: "Cost Reduction", value: "20%" },
      { label: "Hours Saved/Month", value: "70+" },
      { label: "Faster Client Onboarding", value: "2x" },
    ],
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
  },
  {
    id: "scalebyte",
    icon: <Rocket className="w-5 h-5 text-violet-400" />,
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/20",
    quote:
      '"AI integration helped ScaleByte close 3x more deals in less time"',
    company: "ScaleByte",
    companyDescription: "SaaS Sales Platform",
    details:
      "ScaleByte's sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
    impactMetrics: [
      { label: "More Deals", value: "3x" },
      { label: "Faster Responses", value: "40%" },
      { label: "Lead Accuracy", value: "95%" },
      { label: "CRM Fully Synced", value: "✓" },
    ],
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
  },
];

/* ─────────────────────── Metric Icon Mapping ─────────────────────── */

function getMetricIcon(label: string): React.ReactNode {
  const lower = label.toLowerCase();
  if (lower.includes("waste") || lower.includes("reduction") || lower.includes("error"))
    return <TrendingDown className="w-3.5 h-3.5" />;
  if (lower.includes("faster") || lower.includes("production") || lower.includes("speed"))
    return <Zap className="w-3.5 h-3.5" />;
  if (lower.includes("accuracy") || lower.includes("accurate") || lower.includes("lead"))
    return <Target className="w-3.5 h-3.5" />;
  if (lower.includes("hours") || lower.includes("time") || lower.includes("onboarding"))
    return <Clock className="w-3.5 h-3.5" />;
  if (lower.includes("deals") || lower.includes("growth") || lower.includes("more"))
    return <TrendingUp className="w-3.5 h-3.5" />;
  if (lower.includes("automated") || lower.includes("operations"))
    return <BarChart3 className="w-3.5 h-3.5" />;
  if (lower.includes("synced") || lower.includes("crm"))
    return <CheckCircle2 className="w-3.5 h-3.5" />;
  return <ArrowUpRight className="w-3.5 h-3.5" />;
}

/* ─────────────────────── Case Study Card ─────────────────────── */

interface CaseStudyCardProps {
  study: CaseStudy;
  isActive: boolean;
}

function CaseStudyCard({ study, isActive }: CaseStudyCardProps) {
  return (
    <div
      className={cn(
        "group relative flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] rounded-2xl border bg-card p-5 sm:p-6 lg:p-7 transition-all duration-500 select-none overflow-hidden",
        isActive
          ? "border-primary/25 shadow-xl shadow-primary/10 scale-[1.02]"
          : "border-border hover:border-primary/15 shadow-lg shadow-black/10 hover:shadow-primary/5"
      )}
    >
      {/* Subtle background glow */}
      <div
        className={cn(
          "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
          study.accentBg
        )}
        style={{ filter: "blur(60px)" }}
        aria-hidden="true"
      />

      {/* Top row: icon + company */}
      <div className="relative z-10 flex items-center gap-3 mb-4">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-xl border",
            study.iconBg,
            study.iconBorder
          )}
        >
          {study.icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{study.company}</p>
          <p className="text-[11px] text-muted-foreground">{study.companyDescription}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="relative z-10 text-base sm:text-lg font-semibold text-foreground leading-snug mb-3">
        {study.quote}
      </blockquote>

      {/* Description */}
      <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-5">
        {study.details}
      </p>

      {/* Impact metrics */}
      <div className="relative z-10">
        <p
          className={cn(
            "text-xs font-semibold tracking-wider uppercase mb-3",
            study.accentColor
          )}
        >
          Impact :
        </p>
        <div className="grid grid-cols-2 gap-2">
          {study.impactMetrics.map((metric, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-colors duration-200",
                study.accentBg,
                study.accentBorder,
                "hover:brightness-110"
              )}
            >
              <span className={cn(study.accentColor, "shrink-0")}>
                {getMetricIcon(metric.label)}
              </span>
              <div className="min-w-0">
                <p className={cn("text-sm font-bold leading-tight", study.accentColor)}>
                  {metric.value}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight truncate">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Main CaseStudies Section ─────────────────────── */

export function CaseStudies() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateScrollState = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft: sl, scrollWidth, clientWidth } = container;
    setCanScrollLeft(sl > 10);
    setCanScrollRight(sl < scrollWidth - clientWidth - 10);

    // Determine which card is closest to center
    const containerCenter = sl + clientWidth / 2;
    const cards = container.children;
    let closestIndex = 0;
    let closestDist = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    return () => {
      container.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = "grab";
      container.style.userSelect = "";
    }
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Button navigation
  const scrollToDirection = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.children[0]
      ? (container.children[0] as HTMLElement).offsetWidth + 24
      : 400;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="case-studies"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <SectionHeading
            badge="Case Studies"
            title="See How Smart AI Automation"
            highlightedText="Transforms Businesses"
            description="See how AI automation streamlines operations, boosts efficiency, and drives growth."
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-2">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 z-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 z-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar px-6 sm:px-10 md:px-20 lg:px-32 py-4",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollSnapType: isDragging ? "none" : "x mandatory",
          }}
        >
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="scroll-snap-align-center flex-shrink-0"
              style={{ scrollSnapAlign: "center" }}
            >
              <CaseStudyCard study={study} isActive={index === activeIndex} />
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-6 mt-8 px-4">
          {/* Left arrow */}
          <button
            onClick={() => scrollToDirection("left")}
            disabled={!canScrollLeft}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 cursor-pointer",
              canScrollLeft
                ? "border-border bg-surface hover:bg-surface-light hover:border-primary/30 text-foreground"
                : "border-border/50 bg-surface/50 text-muted-foreground/30 cursor-not-allowed"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (!container || !container.children[index]) return;
                  const card = container.children[index] as HTMLElement;
                  const containerCenter = container.clientWidth / 2;
                  const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                  container.scrollTo({
                    left: cardCenter - containerCenter,
                    behavior: "smooth",
                  });
                }}
                className={cn(
                  "rounded-full transition-all duration-300 cursor-pointer",
                  index === activeIndex
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                )}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollToDirection("right")}
            disabled={!canScrollRight}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 cursor-pointer",
              canScrollRight
                ? "border-border bg-surface hover:bg-surface-light hover:border-primary/30 text-foreground"
                : "border-border/50 bg-surface/50 text-muted-foreground/30 cursor-not-allowed"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Drag to explore hint */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <GripHorizontal className="w-4 h-4 text-muted-foreground/40" />
          <span className="text-xs text-muted-foreground/40 uppercase tracking-widest font-medium select-none">
            Drag to explore
          </span>
          <GripHorizontal className="w-4 h-4 text-muted-foreground/40" />
        </div>
      </div>
    </section>
  );
}
