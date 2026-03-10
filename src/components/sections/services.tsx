"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Box,
  Activity,
  Radio,
  ArrowRight,
  Package,
  AlertTriangle,
} from "lucide-react";

/* ─────────────── Scroll-driven progress (0 → 100) ─────────────── */

const ScrollProgressContext = React.createContext(0);

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = rect.height + viewH;
      const scrolled = viewH - rect.top;
      const raw = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(Math.round(raw * 100));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}

/* ─────────────── InView hook for reveal animations ─────────────── */

function useInView(
  threshold = 0.15,
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ─────────────── Animated counter hook ─────────────── */

function useCountUp(
  end: number,
  active: boolean,
  durationMs = 1600,
  decimals = 0,
): string {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, durationMs]);

  return value.toFixed(decimals);
}

/* ─────────────────── Pipeline Step Mock ─────────────────── */

interface PipelineStep {
  label: string;
  status: "done" | "running" | "queued";
}

const pipelineSteps: PipelineStep[] = [
  { label: "Source ingestion", status: "done" },
  { label: "Schema normalization", status: "done" },
  { label: "Null handling & validation", status: "running" },
  { label: "Feature engineering", status: "queued" },
  { label: "Output to model layer", status: "queued" },
];

function PipelineMock() {
  const barPercent = React.useContext(ScrollProgressContext);
  const [ref, inView] = useInView(0.2);

  return (
    <div
      ref={ref}
      className="w-full max-w-[340px] mx-auto rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20 flex flex-col gap-2.5"
    >
      {/* Header */}
      <div
        className={cn(
          "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1 transition-all duration-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
      >
        Active Pipeline — Retail Dataset
      </div>

      {/* Steps — staggered reveal */}
      {pipelineSteps.map((step, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] border transition-all",
            step.status === "running"
              ? "bg-primary/10 border-primary/30 shadow-[0_0_12px_rgba(109,59,255,0.15)] animate-pulse-glow-subtle"
              : "bg-white/[0.03] border-border/50",
            // staggered reveal
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{
            transitionDuration: "500ms",
            transitionDelay: inView ? `${i * 90}ms` : "0ms",
          }}
        >
          {/* Dot */}
          <div
            className={cn(
              "w-[7px] h-[7px] rounded-full shrink-0",
              step.status === "done" && "bg-emerald-400",
              step.status === "running" && "bg-primary animate-pulse",
              step.status === "queued" && "bg-muted-foreground/40",
            )}
          />

          {/* Label */}
          <span
            className={cn(
              "flex-1 text-xs",
              step.status === "running"
                ? "text-foreground font-medium"
                : "text-muted-foreground",
            )}
          >
            {step.label}
          </span>

          {/* Badge */}
          <span
            className={cn(
              "text-[10px] font-medium px-2 py-0.5 rounded-full",
              step.status === "done" && "bg-emerald-400/10 text-emerald-400",
              step.status === "running" && "bg-primary/15 text-primary",
              step.status === "queued" &&
                "bg-white/[0.04] text-muted-foreground/50",
            )}
          >
            {step.status === "done"
              ? "Done"
              : step.status === "running"
                ? "Running"
                : "Queued"}
          </span>
        </div>
      ))}

      {/* Progress footer */}
      <div
        className={cn(
          "flex items-center gap-3 pt-1 transition-all duration-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
        style={{ transitionDelay: inView ? "500ms" : "0ms" }}
      >
        <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-[width] duration-150 ease-out"
            style={{ width: `${barPercent}%` }}
          />
        </div>
        <span className="text-[11px] text-muted-foreground/50 whitespace-nowrap tabular-nums">
          {barPercent}% complete
        </span>
      </div>
    </div>
  );
}

/* ─────────────────── Decision Insights Mock ─────────────────── */

function InsightsMock() {
  const [ref, inView] = useInView(0.2);
  const accuracy = useCountUp(94.2, inView, 1800, 1);
  const decisions = useCountUp(1840, inView, 2000, 0);

  // Format decisions with comma
  const decisionsFormatted = Number(
    Math.round(Number(decisions)),
  ).toLocaleString();

  return (
    <div
      ref={ref}
      className="w-full max-w-[340px] mx-auto rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20 flex flex-col gap-3"
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
          Decision Feed
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Metric Grid — counting numbers */}
      <div className="grid grid-cols-2 gap-2">
        <div
          className={cn(
            "flex flex-col gap-1 p-3 rounded-[10px] bg-white/[0.03] border border-border/50 transition-all duration-600",
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95",
          )}
          style={{ transitionDelay: inView ? "100ms" : "0ms" }}
        >
          <span className="text-[10px] text-muted-foreground/50">
            Forecast Accuracy
          </span>
          <span className="text-lg font-bold text-emerald-400 font-heading tabular-nums">
            {accuracy}%
          </span>
          <span className="text-[10px] font-medium text-green-400">
            ↑ 3.1% this week
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col gap-1 p-3 rounded-[10px] bg-white/[0.03] border border-border/50 transition-all duration-600",
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95",
          )}
          style={{ transitionDelay: inView ? "200ms" : "0ms" }}
        >
          <span className="text-[10px] text-muted-foreground/50">
            Decisions Triggered
          </span>
          <span className="text-lg font-bold text-primary font-heading tabular-nums">
            {decisionsFormatted}
          </span>
          <span className="text-[10px] font-medium text-green-400">
            ↑ 12% vs last mo
          </span>
        </div>
      </div>

      {/* Insight Rows — staggered */}
      <div
        className={cn(
          "flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] bg-white/[0.025] border border-border/50 transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald-400/20 cursor-default",
          inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        )}
        style={{ transitionDelay: inView ? "350ms" : "0ms" }}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-400/10 flex items-center justify-center shrink-0">
          <Package className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-foreground truncate">
            Reorder SKU-2291 — Stock at 8%
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-0.5 truncate">
            Demand surge predicted · Next 14 days
          </p>
        </div>
        <span className="text-[10px] font-medium text-primary whitespace-nowrap">
          Act →
        </span>
      </div>

      <div
        className={cn(
          "flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] bg-white/[0.025] border border-border/50 transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/20 cursor-default",
          inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        )}
        style={{ transitionDelay: inView ? "480ms" : "0ms" }}
      >
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-3.5 h-3.5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-foreground truncate">
            Churn risk: 34 accounts flagged
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-0.5 truncate">
            Engagement drop detected · High value
          </p>
        </div>
        <span className="text-[10px] font-medium text-primary whitespace-nowrap">
          Act →
        </span>
      </div>
    </div>
  );
}

/* ─────────────────── ML Models Mock ─────────────────── */

interface ModelItem {
  name: string;
  type: string;
  accuracy: number;
  highlighted?: boolean;
}

const models: ModelItem[] = [
  {
    name: "Demand Forecaster v2",
    type: "Time-series · XGBoost",
    accuracy: 93,
    highlighted: true,
  },
  {
    name: "Churn Predictor",
    type: "Classification · LightGBM",
    accuracy: 88,
  },
  {
    name: "Anomaly Detector",
    type: "Unsupervised · Isolation Forest",
    accuracy: 91,
  },
];

function MLModelsMock() {
  const [ref, inView] = useInView(0.2);

  return (
    <div
      ref={ref}
      className="w-full max-w-[340px] mx-auto rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20 flex flex-col gap-3"
    >
      {/* Header */}
      <div
        className={cn(
          "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 transition-all duration-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
      >
        Model Registry
      </div>

      {/* Model Rows — staggered reveal with animated bars */}
      {models.map((model, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-[10px] border transition-all hover:scale-[1.01]",
            model.highlighted
              ? "bg-amber-500/[0.06] border-amber-500/20 shadow-[0_0_10px_rgba(245,166,35,0.08)]"
              : "bg-white/[0.03] border-border/50 hover:border-amber-500/10",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{
            transitionDuration: "500ms",
            transitionDelay: inView ? `${100 + i * 120}ms` : "0ms",
          }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-xs text-foreground truncate">{model.name}</p>
            <p className="text-[10px] text-muted-foreground/50 mt-0.5">
              {model.type}
            </p>
          </div>
          {/* Accuracy bar — animates width from 0 */}
          <div className="w-[60px] h-1 rounded-full bg-white/[0.07] overflow-hidden shrink-0">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-[width] duration-1000 ease-out"
              style={{
                width: inView ? `${model.accuracy}%` : "0%",
                transitionDelay: inView ? `${300 + i * 120}ms` : "0ms",
              }}
            />
          </div>
          {/* Accuracy label */}
          <span className="text-sm font-bold text-amber-500 font-heading w-8 text-right shrink-0 tabular-nums">
            {model.accuracy}%
          </span>
        </div>
      ))}

      {/* Deploy button */}
      <button
        className={cn(
          "flex items-center justify-center gap-1.5 w-full py-2.5 rounded-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium transition-all hover:bg-amber-500/15 hover:shadow-[0_0_16px_rgba(245,166,35,0.12)] hover:scale-[1.02] active:scale-[0.98]",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        )}
        style={{
          transitionDuration: "500ms",
          transitionDelay: inView ? "500ms" : "0ms",
        }}
      >
        <ArrowRight className="w-3.5 h-3.5" />
        Deploy New Model
      </button>
    </div>
  );
}

/* ────────────────────── Service Card Layout ────────────────────── */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
  reverse?: boolean;
  accentColor?: "purple" | "cyan" | "amber";
  index?: number;
}

function ServiceCard({
  icon,
  title,
  description,
  tags,
  children,
  reverse = false,
  accentColor = "purple",
  index = 0,
}: ServiceCardProps) {
  const [ref, inView] = useInView(0.1);

  const glowGradient = {
    purple:
      "bg-[radial-gradient(600px_circle_at_0%_50%,rgba(138,101,255,0.06)_0%,transparent_70%)]",
    cyan: "bg-[radial-gradient(600px_circle_at_0%_50%,rgba(46,232,197,0.05)_0%,transparent_70%)]",
    amber:
      "bg-[radial-gradient(600px_circle_at_0%_50%,rgba(245,166,35,0.05)_0%,transparent_70%)]",
  };

  const iconStyles = {
    purple: "bg-primary/10 border-primary/30 text-primary",
    cyan: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8 transition-all duration-700 overflow-hidden",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        reverse && "lg:[direction:rtl]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      {/* Subtle glow on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          glowGradient[accentColor],
        )}
      />

      {/* Text content */}
      <div
        className={cn("flex flex-col gap-4", reverse && "lg:[direction:ltr]")}
      >
        {/* Icon — gentle float */}
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border transition-all duration-500 group-hover:shadow-lg",
            iconStyles[accentColor],
            accentColor === "purple" && "group-hover:shadow-primary/20",
            accentColor === "cyan" && "group-hover:shadow-emerald-400/20",
            accentColor === "amber" && "group-hover:shadow-amber-500/20",
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-90",
          )}
          style={{ transitionDelay: inView ? "150ms" : "0ms" }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-xl sm:text-2xl font-bold text-foreground leading-snug transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: inView ? "220ms" : "0ms" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: inView ? "300ms" : "0ms" }}
        >
          {description}
        </p>

        {/* Tags — staggered pop-in */}
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag, i) => (
            <Badge
              key={tag}
              variant="muted"
              className={cn(
                "text-[10px] sm:text-xs px-2.5 py-0.5 transition-all duration-400 hover:bg-muted/80",
                inView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-90",
              )}
              style={{
                transitionDelay: inView ? `${380 + i * 60}ms` : "0ms",
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Mock UI — slide in from side + gentle float on hover */}
      <div
        className={cn(
          "relative flex items-center justify-center py-4 transition-all duration-700 group-hover:scale-[1.02]",
          reverse && "lg:[direction:ltr]",
          inView
            ? "opacity-100 translate-x-0"
            : reverse
              ? "opacity-0 -translate-x-8"
              : "opacity-0 translate-x-8",
        )}
        style={{ transitionDelay: inView ? "200ms" : "0ms" }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─────────────────── Main Services Section ─────────────────── */

export function Services() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <ScrollProgressContext.Provider value={scrollProgress}>
      <section
        ref={sectionRef}
        id="services"
        className="relative py-20 sm:py-24 md:py-32 px-8 sm:px-8 lg:px-8 section-gradient"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <SectionHeading
            badge="Our Services"
            title="Intelligence Solutions That Drive"
            highlightedText="Real Decisions"
            description="We handle your entire data lifecycle — from raw ingestion to ML-powered recommendations — so you can act, not just analyse."
          />

          {/* Service Cards */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* 1 – Automated Data Pipelines */}
            <ServiceCard
              icon={<Box className="w-5 h-5" />}
              title="Automated Data Pipelines"
              description="We ingest data from any source, clean and standardize it automatically, and deliver structured, analysis-ready datasets — eliminating weeks of manual engineering work."
              tags={[
                "Multi-source Ingestion",
                "Auto-cleaning",
                "Real-time Sync",
                "Schema Validation",
              ]}
              accentColor="purple"
              index={0}
            >
              <PipelineMock />
            </ServiceCard>

            {/* 2 – Decision Intelligence Insights */}
            <ServiceCard
              icon={<Activity className="w-5 h-5" />}
              title="Decision Intelligence Insights"
              description="Beyond charts and dashboards — Neurolytix delivers specific, prioritized recommendations your team can act on immediately, driven by live analytics and contextual business logic."
              tags={[
                "Live Dashboards",
                "Actionable Alerts",
                "Priority Scoring",
                "Business Context",
              ]}
              accentColor="cyan"
              reverse
              index={1}
            >
              <InsightsMock />
            </ServiceCard>

            {/* 3 – Pre-built & Custom ML Models */}
            <ServiceCard
              icon={<Radio className="w-5 h-5" />}
              title="Pre-built & Custom ML Models"
              description="Deploy industry-specific ML models out of the box, or let us train custom models on your data. Demand forecasting, churn prediction, anomaly detection — ready when you are."
              tags={[
                "Demand Forecasting",
                "Churn Prediction",
                "Anomaly Detection",
                "Custom Training",
              ]}
              accentColor="amber"
              index={2}
            >
              <MLModelsMock />
            </ServiceCard>
          </div>
        </div>
      </section>
    </ScrollProgressContext.Provider>
  );
}
