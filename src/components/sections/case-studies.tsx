"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────── Case Study Data ─────────────────────── */

interface ImpactMetric {
  label: string;
  value: string;
  icon: string;
}

interface CaseStudy {
  id: string;
  emoji: string;
  emojiBg: string;
  emojiBorder: string;
  company: string;
  sector: string;
  quote: string;
  story: string;
  impactMetrics: ImpactMetric[];
  accentVar: string;
  glowColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "retailnest",
    emoji: "🛍️",
    emojiBg: "rgba(52,211,153,.12)",
    emojiBorder: "rgba(52,211,153,.22)",
    company: "RetailNest",
    sector: "Fashion Retail Chain · 12 stores",
    quote:
      "\u201CNeurolytix cut our inventory waste by 38% and eliminated weekly stockout crises.\u201D",
    story:
      "RetailNest was over-ordering slow SKUs while running out of bestsellers every weekend. Their team was managing inventory from weekly Excel reports with a 5-day lag. Neurolytix connected their POS, supplier, and warehouse data into a live demand forecasting system that now auto-flags reorder triggers 10 days in advance.",
    impactMetrics: [
      { label: "Less Inventory Waste", value: "38%", icon: "📉" },
      { label: "Faster Reorder Decisions", value: "10×", icon: "⚡" },
      { label: "Forecast Accuracy", value: "94%", icon: "🎯" },
      { label: "Monthly Cost Saved", value: "₹6.2L", icon: "💸" },
    ],
    accentVar: "#34d399",
    glowColor: "rgba(52,211,153,.09)",
  },
  {
    id: "swiftroute",
    emoji: "🚚",
    emojiBg: "rgba(34,211,238,.12)",
    emojiBorder: "rgba(34,211,238,.22)",
    company: "SwiftRoute Logistics",
    sector: "Last-Mile Delivery · 8 city ops",
    quote:
      "\u201CDelivery delays dropped by 44% in the first 6 weeks after going live with Neurolytix.\u201D",
    story:
      "SwiftRoute was losing clients due to unpredictable delivery windows \u2014 their dispatch team had no visibility into route efficiency or driver performance until end-of-day. Neurolytix built a real-time operations intelligence layer that surfaces delay risks, optimal route suggestions, and capacity bottlenecks 2\u20133 hours before they become problems.",
    impactMetrics: [
      { label: "Fewer Delivery Delays", value: "44%", icon: "🕐" },
      { label: "Route Cost Reduction", value: "28%", icon: "🗺️" },
      { label: "Earlier Risk Alerts", value: "3hrs", icon: "📦" },
      { label: "Client Satisfaction Score", value: "4.8", icon: "⭐" },
    ],
    accentVar: "#22d3ee",
    glowColor: "rgba(34,211,238,.09)",
  },
  {
    id: "kartco",
    emoji: "🛒",
    emojiBg: "rgba(251,146,60,.12)",
    emojiBorder: "rgba(251,146,60,.22)",
    company: "Kart&Co",
    sector: "D2C E-commerce · 40K monthly orders",
    quote:
      "\u201CChurn dropped 31% after we finally understood which customers were about to leave \u2014 and why.\u201D",
    story:
      "Kart&Co had solid acquisition numbers but a leaky retention problem \u2014 customers were quietly churning and the team only found out on monthly review calls. Neurolytix built a churn prediction model on top of their order, support, and engagement data, triggering personalised retention campaigns 2 weeks before predicted churn events.",
    impactMetrics: [
      { label: "Churn Reduction", value: "31%", icon: "🔁" },
      { label: "Retention Campaign ROI", value: "2.4×", icon: "💰" },
      { label: "Churn Model Accuracy", value: "89%", icon: "🧠" },
      { label: "Customer LTV Growth", value: "+18%", icon: "📈" },
    ],
    accentVar: "#fb923c",
    glowColor: "rgba(251,146,60,.09)",
  },
  {
    id: "opsgrid",
    emoji: "💼",
    emojiBg: "rgba(124,92,252,.14)",
    emojiBorder: "rgba(124,92,252,.25)",
    company: "OpsGrid",
    sector: "Field Service Management · B2B SaaS",
    quote:
      "\u201CWe replaced 3 separate BI tools with one Neurolytix dashboard and finally have one source of truth.\u201D",
    story:
      "OpsGrid was juggling Tableau, Metabase, and a custom Google Data Studio setup \u2014 none of which talked to each other. Their ops managers were spending 6+ hours a week manually merging reports in Excel. Neurolytix consolidated all data sources into a single intelligence layer with auto-refreshing KPIs and anomaly alerts for SLA breaches.",
    impactMetrics: [
      { label: "Saved Per Manager/Week", value: "6hrs", icon: "⏱️" },
      { label: "BI Tools Consolidated", value: "3→1", icon: "🔧" },
      { label: "Fewer SLA Breaches", value: "52%", icon: "🚨" },
      { label: "Decision Alerts", value: "Real-time", icon: "💡" },
    ],
    accentVar: "#a78bfa",
    glowColor: "rgba(124,92,252,.09)",
  },
  {
    id: "forkline",
    emoji: "🍽️",
    emojiBg: "rgba(244,114,182,.12)",
    emojiBorder: "rgba(244,114,182,.22)",
    company: "ForkLine",
    sector: "Cloud Kitchen Chain · 22 outlets",
    quote:
      "\u201CFood waste fell by 29% and our busiest outlets finally stopped running out of top menu items.\u201D",
    story:
      "ForkLine was managing 22 cloud kitchens with no centralised data on demand patterns, prep waste, or menu performance. Every outlet operated on gut feel. Neurolytix built a demand forecasting model using order history, weather data, and local event calendars \u2014 giving each kitchen manager a daily prep recommendation before service starts.",
    impactMetrics: [
      { label: "Food Waste Reduction", value: "29%", icon: "♻️" },
      { label: "Prep Recommendations", value: "Daily", icon: "📋" },
      { label: "Demand Forecast Accuracy", value: "91%", icon: "📊" },
      { label: "Gross Margin Improvement", value: "+14%", icon: "💹" },
    ],
    accentVar: "#f472b6",
    glowColor: "rgba(244,114,182,.09)",
  },
];

/* ─────────────────────── Case Study Card ─────────────────────── */

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <div
      className="cs-card group"
      style={
        {
          animationDelay: `${0.1 + index * 0.1}s`,
        } as React.CSSProperties
      }
    >
      {/* Accent glow overlay */}
      <div
        className="cs-card-glow"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${study.glowColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Company header */}
      <div className="flex items-center gap-3 relative z-[1]">
        <div
          className="cs-company-icon"
          style={{
            background: study.emojiBg,
            border: `1px solid ${study.emojiBorder}`,
          }}
        >
          {study.emoji}
        </div>
        <div>
          <div className="cs-company-name">{study.company}</div>
          <div className="cs-company-sector">{study.sector}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="cs-card-divider" />

      {/* Quote */}
      <p className="cs-card-quote">{study.quote}</p>

      {/* Story */}
      <p className="cs-card-story">{study.story}</p>

      {/* Impact metrics */}
      <div className="relative z-[1]">
        <div className="cs-impact-label" style={{ color: study.accentVar }}>
          Impact
        </div>
        <div className="cs-impact-grid">
          {study.impactMetrics.map((metric, i) => (
            <div key={i} className="cs-impact-chip">
              <span className="cs-chip-icon">{metric.icon}</span>
              <div className="min-w-0">
                <div className="cs-chip-val" style={{ color: study.accentVar }}>
                  {metric.value}
                </div>
                <div className="cs-chip-lbl">{metric.label}</div>
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
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [current, setCurrent] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const startXRef = React.useRef(0);
  const startTranslateRef = React.useRef(0);
  const currentTranslateRef = React.useRef(0);
  const total = caseStudies.length;
  const GAP = 24;

  const getCardWidth = React.useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return 380 + GAP;
    return (
      (track.children[0] as HTMLElement).getBoundingClientRect().width + GAP
    );
  }, []);

  const getTranslateFor = React.useCallback(
    (index: number) => {
      return -(index * getCardWidth());
    },
    [getCardWidth],
  );

  const goTo = React.useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, total - 1));
      const translate = getTranslateFor(clamped);
      currentTranslateRef.current = translate;
      track.style.transition = "transform .45s cubic-bezier(.25,.46,.45,.94)";
      track.style.transform = `translateX(${translate}px)`;
      setCurrent(clamped);
    },
    [total, getTranslateFor],
  );

  /* ── Mouse drag ── */
  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startTranslateRef.current = currentTranslateRef.current;
    track.style.transition = "none";
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const track = trackRef.current;
      if (!track) return;
      const delta = e.clientX - startXRef.current;
      track.style.transform = `translateX(${
        startTranslateRef.current + delta
      }px)`;
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging) return;
      setIsDragging(false);
      const delta = e.clientX - startXRef.current;
      if (delta < -60) goTo(current + 1);
      else if (delta > 60) goTo(current - 1);
      else goTo(current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, current, goTo]);

  /* ── Touch drag ── */
  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    startXRef.current = e.touches[0].clientX;
    startTranslateRef.current = currentTranslateRef.current;
    track.style.transition = "none";
  }, []);

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const delta = e.touches[0].clientX - startXRef.current;
    track.style.transform = `translateX(${
      startTranslateRef.current + delta
    }px)`;
  }, []);

  const handleTouchEnd = React.useCallback(
    (e: React.TouchEvent) => {
      const delta = e.changedTouches[0].clientX - startXRef.current;
      if (delta < -50) goTo(current + 1);
      else if (delta > 50) goTo(current - 1);
      else goTo(current);
    },
    [current, goTo],
  );

  /* ── Keyboard ── */
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, goTo]);

  return (
    <section
      id="case-studies"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden z-[1]"
    >
      {/* Ambient orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: -100,
          left: -100,
          background: "#7c5cfc",
          filter: "blur(130px)",
          opacity: 0.14,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: 0,
          right: -60,
          background: "#22d3ee",
          filter: "blur(130px)",
          opacity: 0.14,
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Case Studies"
            title="See How Decision Intelligence"
            highlightedText="Transforms Real Businesses"
            description="From retail stockouts to logistics delays — see how Neurolytix turns fragmented data into measurable outcomes for growing businesses."
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Track wrapper */}
        <div
          className={cn(
            "overflow-hidden py-2 pb-6 select-none",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          )}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="cs-carousel-track"
            style={{
              gap: `${GAP}px`,
              transition: "transform .45s cubic-bezier(.25,.46,.45,.94)",
            }}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-6">
          {/* Prev button */}
          <button
            onClick={() => goTo(current - 1)}
            className="cs-nav-btn"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={cn("cs-dot", index === current && "cs-dot-active")}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => goTo(current + 1)}
            className="cs-nav-btn"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Global scoped styles so child components receive them ── */}
      <style jsx global>{`
        /* ── Carousel Track ── */
        .cs-carousel-track {
          display: flex;
          padding: 0 max(32px, calc((100vw - 1160px) / 2));
          will-change: transform;
        }

        /* ── Card ── */
        .cs-card {
          flex: 0 0 380px;
          background: #0f0f19;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          padding: 30px 30px 26px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition:
            border-color 0.3s ease,
            transform 0.3s ease,
            background 0.3s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: csFadeUp 0.6s ease both;
        }

        .cs-card:hover {
          border-color: rgba(255, 255, 255, 0.13);
          background: #131320;
          transform: translateY(-4px);
        }

        /* ── Card glow overlay ── */
        .cs-card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 20px;
          z-index: 0;
        }

        .cs-card:hover .cs-card-glow {
          opacity: 1;
        }

        /* ── Company header ── */
        .cs-company-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .cs-company-name {
          font-size: 15px;
          font-weight: 700;
          color: #f0f0ff;
          line-height: 1.3;
        }

        .cs-company-sector {
          font-size: 11.5px;
          color: #828a9a;
          margin-top: 2px;
          font-weight: 300;
        }

        /* ── Divider ── */
        .cs-card-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.07);
          position: relative;
          z-index: 1;
        }

        /* ── Quote ── */
        .cs-card-quote {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.45;
          letter-spacing: -0.01em;
          color: #f0f0ff;
          position: relative;
          z-index: 1;
        }

        /* ── Story ── */
        .cs-card-story {
          font-size: 13.5px;
          color: #828a9a;
          line-height: 1.75;
          font-weight: 300;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        /* ── Impact ── */
        .cs-impact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cs-impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .cs-impact-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 11px;
          border-radius: 9px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.03);
          transition: background 0.2s;
        }

        .cs-card:hover .cs-impact-chip {
          background: rgba(255, 255, 255, 0.05);
        }

        .cs-chip-icon {
          font-size: 13px;
          flex-shrink: 0;
        }

        .cs-chip-val {
          font-size: 16px;
          font-weight: 800;
          line-height: 1;
        }

        .cs-chip-lbl {
          font-size: 10px;
          color: #828a9a;
          margin-top: 2px;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Nav buttons ── */
        .cs-nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: #0f0f19;
          color: #828a9a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            border-color 0.25s,
            background 0.25s,
            color 0.25s,
            transform 0.2s;
          flex-shrink: 0;
        }

        .cs-nav-btn:hover {
          border-color: rgba(124, 92, 252, 0.4);
          background: rgba(124, 92, 252, 0.12);
          color: #a78bfa;
          transform: scale(1.08);
        }

        /* ── Dots ── */
        .cs-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          border: none;
          padding: 0;
          cursor: pointer;
          transition:
            width 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .cs-dot-active {
          width: 28px;
          background: #a78bfa;
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
        }

        /* ── Entrance animation ── */
        @keyframes csFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
