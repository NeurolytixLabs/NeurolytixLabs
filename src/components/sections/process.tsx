"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/* ═══════════════════════════════════════════════════════════════
   HOOKS — same patterns as services.tsx
   ═══════════════════════════════════════════════════════════════ */

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
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, durationMs]);

  return value.toFixed(decimals);
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUP SHELL — shared window chrome for all illustrations
   ═══════════════════════════════════════════════════════════════ */

function MockupShell({
  title,
  statusText,
  statusColor,
  children,
  className,
}: {
  title: string;
  statusText: string;
  statusColor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-[14px] border border-white/[0.07] bg-[#0b0b14] overflow-hidden text-xs font-sans",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-[15px] py-[11px] border-b border-white/[0.06] text-[11px] text-[#5a6070]">
        <div className="flex items-center gap-[5px]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <span>{title}</span>
        <span className="text-[10px]" style={{ color: statusColor }}>
          ● {statusText}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUP 1 — Data Discovery & Audit
   ═══════════════════════════════════════════════════════════════ */

function AuditMockup({ inView }: { inView: boolean }) {
  const rows = [
    {
      emoji: "🗄️",
      label: "Sales DB — PostgreSQL",
      status: "Healthy",
      statusClass: "bg-[rgba(52,211,153,0.15)] text-[#34d399]",
      iconBg: "bg-[rgba(52,211,153,0.12)] border border-[rgba(52,211,153,0.2)]",
    },
    {
      emoji: "📋",
      label: "CRM Export — HubSpot CSV",
      status: "Healthy",
      statusClass: "bg-[rgba(52,211,153,0.15)] text-[#34d399]",
      iconBg: "bg-[rgba(52,211,153,0.12)] border border-[rgba(52,211,153,0.2)]",
    },
    {
      emoji: "📊",
      label: "Inventory Sheet — Excel",
      status: "2 Issues",
      statusClass: "bg-[rgba(251,146,60,0.15)] text-[#fb923c]",
      iconBg: "bg-[rgba(251,146,60,0.12)] border border-[rgba(251,146,60,0.2)]",
    },
    {
      emoji: "🔗",
      label: "Logistics API — Missing fields",
      status: "Fix Needed",
      statusClass: "bg-[rgba(244,114,182,0.15)] text-[#f472b6]",
      iconBg:
        "bg-[rgba(244,114,182,0.12)] border border-[rgba(244,114,182,0.2)]",
    },
    {
      emoji: "⚙️",
      label: "ERP System — SAP Export",
      status: "Scanning…",
      statusClass: "bg-[rgba(124,92,252,0.15)] text-[#a78bfa]",
      iconBg: "bg-[rgba(124,92,252,0.12)] border border-[rgba(124,92,252,0.2)]",
    },
  ];

  return (
    <MockupShell
      title="Data Source Audit"
      statusText="Scanning"
      statusColor="#a78bfa"
    >
      <div className="p-[14px_16px] flex flex-col gap-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-[10px] px-3 py-[9px] rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            )}
            style={{
              transitionDelay: inView ? `${i * 90}ms` : "0ms",
            }}
          >
            <div
              className={cn(
                "w-[26px] h-[26px] rounded-md flex items-center justify-center text-xs shrink-0",
                row.iconBg,
              )}
            >
              {row.emoji}
            </div>
            <span className="flex-1 text-xs font-medium text-white/70">
              {row.label}
            </span>
            <span
              className={cn(
                "text-[10px] font-bold px-[9px] py-[2px] rounded-full",
                row.statusClass,
              )}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUP 2 — Pipeline Engineering
   ═══════════════════════════════════════════════════════════════ */

function PipelineMockup({ inView }: { inView: boolean }) {
  const nodes = [
    {
      label: "Source ingestion (PostgreSQL + CSV)",
      time: "✓ 0.4s",
      dotColor: "#34d399",
      timeColor: "#34d399",
      active: false,
      pending: false,
    },
    {
      label: "Type inference & schema normalisation",
      time: "✓ 1.1s",
      dotColor: "#34d399",
      timeColor: "#34d399",
      active: false,
      pending: false,
    },
    {
      label: "Null imputation & duplicate removal",
      time: "✓ 2.3s",
      dotColor: "#34d399",
      timeColor: "#34d399",
      active: false,
      pending: false,
    },
    {
      label: "Feature engineering & aggregation",
      time: "Running…",
      dotColor: "#22d3ee",
      timeColor: "#22d3ee",
      active: true,
      pending: false,
    },
    {
      label: "Feature store write & model trigger",
      time: "Pending",
      dotColor: "#374151",
      timeColor: "#5a6070",
      active: false,
      pending: true,
    },
  ];

  return (
    <MockupShell
      title="Pipeline: sales_etl_v3"
      statusText="Running"
      statusColor="#22d3ee"
    >
      <div className="p-4">
        <div
          className={cn(
            "flex justify-between items-center mb-3 transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          <span className="text-xs font-semibold text-white/70">
            Execution Log
          </span>
          <span className="text-[10px] font-semibold text-[#22d3ee]">
            3 / 5 complete
          </span>
        </div>
        <div className="flex flex-col gap-[6px]">
          {nodes.map((node, i) => (
            <React.Fragment key={i}>
              <div
                className={cn(
                  "flex items-center gap-[10px] px-3 py-[9px] rounded-lg bg-white/[0.03] border border-white/[0.05] relative transition-all duration-500",
                  node.active && "border-[rgba(34,211,238,0.2)]",
                  node.pending && "opacity-45",
                  !node.pending &&
                    (inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"),
                )}
                style={{
                  transitionDelay: inView ? `${80 + i * 100}ms` : "0ms",
                }}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full shrink-0",
                    node.active && "animate-pulse",
                  )}
                  style={{
                    background: node.dotColor,
                    boxShadow: node.active
                      ? `0 0 6px ${node.dotColor}`
                      : "none",
                  }}
                />
                <span className="flex-1 text-[11.5px] text-white/65">
                  {node.label}
                </span>
                <span className="text-[10px]" style={{ color: node.timeColor }}>
                  {node.time}
                </span>
              </div>
              {i < nodes.length - 1 && (
                <div
                  className={cn(
                    "w-[1px] h-2 bg-[rgba(34,211,238,0.25)] ml-[15px] transition-all duration-500",
                    inView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0",
                  )}
                  style={{
                    transitionDelay: inView ? `${120 + i * 100}ms` : "0ms",
                    transformOrigin: "top",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUP 3 — ML Model Training
   ═══════════════════════════════════════════════════════════════ */

function TrainingMockup({ inView }: { inView: boolean }) {
  const accuracy = useCountUp(94.2, inView, 1800, 1);

  const metrics = [
    {
      label: "Accuracy",
      value: "94.2%",
      width: 94,
      gradient: "linear-gradient(90deg,#fb923c,#fbbf24)",
      color: "#fb923c",
    },
    {
      label: "Precision",
      value: "91.5%",
      width: 91,
      gradient: "linear-gradient(90deg,#a78bfa,#7c5cfc)",
      color: "#a78bfa",
    },
    {
      label: "Recall",
      value: "89.1%",
      width: 89,
      gradient: "linear-gradient(90deg,#22d3ee,#06b6d4)",
      color: "#22d3ee",
    },
    {
      label: "F1 Score",
      value: "92.3%",
      width: 92,
      gradient: "linear-gradient(90deg,#34d399,#10b981)",
      color: "#34d399",
    },
  ];

  return (
    <MockupShell
      title="Model: demand_forecast_v2"
      statusText="Training"
      statusColor="#fb923c"
    >
      <div className="p-4 flex flex-col gap-[10px]">
        {/* Header */}
        <div
          className={cn(
            "flex justify-between text-[11px] text-white/55 pb-2 border-b border-white/[0.06] transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          <span>Metric</span>
          <span>Progress</span>
          <span>Score</span>
        </div>

        {/* Metric rows — staggered reveal + bar width animation */}
        {metrics.map((m, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-[10px] transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            )}
            style={{
              transitionDelay: inView ? `${100 + i * 120}ms` : "0ms",
            }}
          >
            <span className="w-[60px] text-[10px] text-[#5a6070]">
              {m.label}
            </span>
            <div className="flex-1 h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-[width] duration-1000 ease-out"
                style={{
                  width: inView ? `${m.width}%` : "0%",
                  background: m.gradient,
                  transitionDelay: inView ? `${200 + i * 120}ms` : "0ms",
                }}
              />
            </div>
            <span
              className="w-9 text-right text-[10px] font-bold"
              style={{ color: m.color }}
            >
              {m.value}
            </span>
          </div>
        ))}

        {/* Footer — with counting number */}
        <div
          className={cn(
            "flex justify-between items-center pt-2 border-t border-white/[0.06] transition-all duration-600",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
          style={{ transitionDelay: inView ? "600ms" : "0ms" }}
        >
          <div>
            <div className="text-[22px] font-extrabold text-[#fb923c] tabular-nums">
              {accuracy}%
            </div>
            <div className="text-[10px] text-[#5a6070]">Overall Accuracy</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-white/60 font-medium">
              XGBoost · Epoch 47/50
            </div>
            <div className="text-[10px] text-[#5a6070] mt-[2px]">
              Ready to deploy
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUP 4 — Live Analytics Dashboard
   ═══════════════════════════════════════════════════════════════ */

function DashboardMockup({ inView }: { inView: boolean }) {
  const revenue = useCountUp(18.4, inView, 1600, 1);
  const churn = useCountUp(8.2, inView, 1400, 1);
  const orders = useCountUp(2841, inView, 1800, 0);
  const forecastAcc = useCountUp(94, inView, 1600, 0);
  const ordersFormatted = Number(Math.round(Number(orders))).toLocaleString();

  const kpis = [
    [
      {
        label: "Monthly Revenue",
        displayValue: `₹${revenue}L`,
        color: "#34d399",
        change: "↑ 22.3% vs last month",
        changeDir: "up" as const,
      },
      {
        label: "Churn Risk (30d)",
        displayValue: `${churn}%`,
        color: "#fb923c",
        change: "↑ 1.4% — monitor",
        changeDir: "down" as const,
      },
    ],
    [
      {
        label: "Orders Processed",
        displayValue: ordersFormatted,
        color: "#22d3ee",
        change: "↑ 340 this week",
        changeDir: "up" as const,
      },
      {
        label: "Forecast Accuracy",
        displayValue: `${forecastAcc}%`,
        color: "#a78bfa",
        change: "↑ 3% since last model",
        changeDir: "up" as const,
      },
    ],
  ];

  const bars = [
    { height: 45, highlight: false },
    { height: 60, highlight: false },
    { height: 52, highlight: false },
    { height: 75, highlight: false },
    { height: 65, highlight: false },
    { height: 85, highlight: true },
    { height: 100, highlight: true },
  ];

  return (
    <MockupShell
      title="Business Overview"
      statusText="Live"
      statusColor="#34d399"
    >
      <div className="p-4 flex flex-col gap-[10px]">
        {kpis.map((row, ri) => (
          <div key={ri} className="grid grid-cols-2 gap-2">
            {row.map((kpi, ci) => {
              const idx = ri * 2 + ci;
              return (
                <div
                  key={ci}
                  className={cn(
                    "p-[10px_12px] rounded-[10px] bg-white/[0.03] border border-white/[0.05] transition-all duration-600",
                    inView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-4 scale-95",
                  )}
                  style={{
                    transitionDelay: inView ? `${80 + idx * 100}ms` : "0ms",
                  }}
                >
                  <div className="text-[10px] text-[#5a6070] mb-1">
                    {kpi.label}
                  </div>
                  <div
                    className="text-xl font-extrabold tabular-nums"
                    style={{ color: kpi.color }}
                  >
                    {kpi.displayValue}
                  </div>
                  <div
                    className={cn(
                      "text-[10px] mt-[3px]",
                      kpi.changeDir === "up"
                        ? "text-[#34d399]"
                        : "text-[#f472b6]",
                    )}
                  >
                    {kpi.change}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Mini bar chart — bars grow from bottom */}
        <div
          className={cn(
            "flex items-end gap-1 h-10 px-3 py-2 bg-white/[0.02] border border-white/[0.04] rounded-lg transition-all duration-500",
            inView ? "opacity-100" : "opacity-0",
          )}
          style={{ transitionDelay: inView ? "450ms" : "0ms" }}
        >
          {bars.map((bar, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[3px] transition-[height] duration-700 ease-out"
              style={{
                height: inView ? `${bar.height}%` : "0%",
                background: bar.highlight
                  ? "linear-gradient(to top, #22d3ee, #7c5cfc)"
                  : "rgba(124,92,252,0.4)",
                boxShadow: bar.highlight
                  ? "0 0 8px rgba(34,211,238,0.3)"
                  : "none",
                transitionDelay: inView ? `${500 + i * 60}ms` : "0ms",
              }}
            />
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUP 5 — Decision Intelligence
   ═══════════════════════════════════════════════════════════════ */

function DecisionMockup({ inView }: { inView: boolean }) {
  const decisions = [
    {
      color: "#f472b6",
      bg: "rgba(244,114,182,0.04)",
      label: "⚡ Urgent — Inventory",
      text: "SKU-0482 hits zero stock in 4 days. Reorder 340 units from Supplier B immediately to avoid a stockout.",
      source: "Source: Demand Forecast Model",
      confidence: "97% conf.",
    },
    {
      color: "#a78bfa",
      bg: "rgba(124,92,252,0.04)",
      label: "💡 Opportunity — Retention",
      text: "14 high-value customers flagged at churn risk. Trigger personalised retention campaign within 48h.",
      source: "Source: Churn Risk Classifier",
      confidence: "91% conf.",
    },
    {
      color: "#34d399",
      bg: "rgba(52,211,153,0.03)",
      label: "✓ On Track — Revenue",
      text: "Q3 revenue forecast revised to ₹18.4L (+12% vs plan). No corrective action needed.",
      source: "Source: Analytics Engine",
      confidence: "94% conf.",
    },
  ];

  return (
    <MockupShell
      title="Decision Feed"
      statusText="2 Urgent"
      statusColor="#f472b6"
    >
      <div className="p-[14px_16px] flex flex-col gap-2">
        {decisions.map((d, i) => (
          <div
            key={i}
            className={cn(
              "p-[11px_13px] rounded-[10px] border-l-[3px] bg-white/[0.025] hover:bg-white/[0.05] transition-all duration-500",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
            )}
            style={{
              borderColor: d.color,
              background: d.bg,
              transitionDelay: inView ? `${i * 140}ms` : "0ms",
            }}
          >
            <div
              className="text-[9px] font-bold tracking-[0.1em] uppercase mb-[5px]"
              style={{ color: d.color }}
            >
              {d.label}
            </div>
            <div className="text-[11px] text-white/60 leading-[1.6]">
              {d.text}
            </div>
            <div className="flex justify-between items-center mt-[6px]">
              <span className="text-[9px] text-[#5a6070]">{d.source}</span>
              <span
                className="text-[10px] font-bold"
                style={{ color: d.color }}
              >
                {d.confidence}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP DATA
   ═══════════════════════════════════════════════════════════════ */

interface StepData {
  number: number;
  title: string;
  description: string;
  numColorClass: string;
  pillColorClass: string;
  glowGradient: string;
  /* mockup is rendered by StepCard with inView passed */
  mockupKey: "audit" | "pipeline" | "training" | "dashboard" | "decision";
}

const steps: StepData[] = [
  {
    number: 1,
    title: "Data Discovery & Audit",
    description:
      "We map every data source your business touches — spreadsheets, CRMs, ERPs, APIs, and databases. Then we audit for quality issues: gaps, duplicates, inconsistencies, and schema mismatches before a single pipeline is built.",
    numColorClass:
      "bg-[rgba(124,92,252,0.18)] text-[#a78bfa] border border-[rgba(124,92,252,0.3)]",
    pillColorClass:
      "text-[#a78bfa] border-[rgba(124,92,252,0.3)] bg-[rgba(124,92,252,0.1)]",
    glowGradient:
      "radial-gradient(ellipse at 15% 60%, rgba(124,92,252,0.07), transparent 65%)",
    mockupKey: "audit",
  },
  {
    number: 2,
    title: "Pipeline Engineering",
    description:
      "We build automated ETL pipelines that ingest, clean, transform, and load your data on a schedule. Nulls filled, types standardized, outliers flagged — your data arrives clean and model-ready, every time.",
    numColorClass:
      "bg-[rgba(34,211,238,0.14)] text-[#22d3ee] border border-[rgba(34,211,238,0.25)]",
    pillColorClass:
      "text-[#22d3ee] border-[rgba(34,211,238,0.25)] bg-[rgba(34,211,238,0.08)]",
    glowGradient:
      "radial-gradient(ellipse at 85% 60%, rgba(34,211,238,0.07), transparent 65%)",
    mockupKey: "pipeline",
  },
  {
    number: 3,
    title: "ML Model Training & Deployment",
    description:
      "We select and train models on your cleaned data — from demand forecasting to churn prediction. Models are validated, versioned, and deployed as live endpoints that update automatically as new data flows in.",
    numColorClass:
      "bg-[rgba(251,146,60,0.14)] text-[#fb923c] border border-[rgba(251,146,60,0.25)]",
    pillColorClass:
      "text-[#fb923c] border-[rgba(251,146,60,0.25)] bg-[rgba(251,146,60,0.08)]",
    glowGradient:
      "radial-gradient(ellipse at 15% 60%, rgba(251,146,60,0.07), transparent 65%)",
    mockupKey: "training",
  },
  {
    number: 4,
    title: "Live Analytics Dashboards",
    description:
      "Your data becomes a living, breathing picture of your business. KPIs, trends, forecasts, and anomalies — all in real-time dashboards built for operators, not analysts. No SQL. No waiting for reports.",
    numColorClass:
      "bg-[rgba(52,211,153,0.14)] text-[#34d399] border border-[rgba(52,211,153,0.25)]",
    pillColorClass:
      "text-[#34d399] border-[rgba(52,211,153,0.25)] bg-[rgba(52,211,153,0.08)]",
    glowGradient:
      "radial-gradient(ellipse at 85% 60%, rgba(52,211,153,0.07), transparent 65%)",
    mockupKey: "dashboard",
  },
  {
    number: 5,
    title: "Decision Intelligence Layer",
    description:
      "The step no competitor delivers. We synthesize every signal into prioritised, actionable recommendations — what to do, when to do it, and what outcome to expect. Your team acts with confidence, not guesswork.",
    numColorClass:
      "bg-[rgba(244,114,182,0.14)] text-[#f472b6] border border-[rgba(244,114,182,0.25)]",
    pillColorClass:
      "text-[#f472b6] border-[rgba(244,114,182,0.25)] bg-[rgba(244,114,182,0.08)]",
    glowGradient:
      "radial-gradient(ellipse at 15% 60%, rgba(244,114,182,0.07), transparent 65%)",
    mockupKey: "decision",
  },
];

/* ═══════════════════════════════════════════════════════════════
   STEP CARD — with inView-driven animations
   ═══════════════════════════════════════════════════════════════ */

function StepCard({ step, index }: { step: StepData; index: number }) {
  const isEven = index % 2 === 1;
  const [ref, inView] = useInView(0.1);

  /* pick the right mockup, passing inView through */
  const mockup = React.useMemo(() => {
    switch (step.mockupKey) {
      case "audit":
        return <AuditMockup inView={inView} />;
      case "pipeline":
        return <PipelineMockup inView={inView} />;
      case "training":
        return <TrainingMockup inView={inView} />;
      case "dashboard":
        return <DashboardMockup inView={inView} />;
      case "decision":
        return <DecisionMockup inView={inView} />;
    }
  }, [step.mockupKey, inView]);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
        "bg-card border border-white/[0.07] rounded-[22px] p-8 sm:p-10 lg:p-[40px_44px]",
        "mb-6 overflow-hidden transition-all duration-700",
        "hover:border-[rgba(124,92,252,0.22)] hover:-translate-y-[2px]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: inView ? `${index * 60}ms` : "0ms" }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: step.glowGradient }}
      />

      {/* Text content — swap order on even cards */}
      <div
        className={cn("flex flex-col relative z-10", isEven && "md:order-2")}
      >
        {/* Step meta — slide in */}
        <div
          className={cn(
            "flex items-center gap-[10px] mb-5 transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: inView ? "120ms" : "0ms" }}
        >
          <div
            className={cn(
              "w-9 h-9 rounded-[10px] flex items-center justify-center text-base font-extrabold shrink-0 transition-all duration-500",
              step.numColorClass,
              inView ? "scale-100" : "scale-75",
            )}
            style={{ transitionDelay: inView ? "150ms" : "0ms" }}
          >
            {step.number}
          </div>
          <span
            className={cn(
              "text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full border",
              step.pillColorClass,
            )}
          >
            Step {step.number}
          </span>
        </div>

        {/* Title — fade up */}
        <h3
          className={cn(
            "text-2xl font-bold tracking-[-0.015em] mb-[14px] text-foreground transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: inView ? "200ms" : "0ms" }}
        >
          {step.title}
        </h3>

        {/* Description — fade up */}
        <p
          className={cn(
            "text-[15px] leading-[1.8] text-[#8892a0] font-light max-w-[400px] transition-all duration-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
          style={{ transitionDelay: inView ? "300ms" : "0ms" }}
        >
          {step.description}
        </p>
      </div>

      {/* Mockup — slide in from side + gentle float on hover */}
      <div
        className={cn(
          "relative z-10 hidden md:block transition-all duration-700 group-hover:scale-[1.02]",
          isEven && "md:order-1",
          inView
            ? "opacity-100 translate-x-0"
            : isEven
              ? "opacity-0 -translate-x-8"
              : "opacity-0 translate-x-8",
        )}
        style={{ transitionDelay: inView ? "180ms" : "0ms" }}
      >
        {mockup}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PROCESS SECTION
   ═══════════════════════════════════════════════════════════════ */

export function Process() {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1160px]">
        {/* Section Header — animated */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-20 transition-all duration-700",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6",
          )}
        >
          <Badge
            variant="glow"
            className={cn(
              "text-[10.5px] tracking-[0.13em] uppercase px-4 py-[5px] mb-[26px] inline-flex items-center gap-[7px] transition-all duration-500",
              headerInView
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-3 scale-90",
            )}
            style={{ transitionDelay: headerInView ? "100ms" : "0ms" }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
            Our Process
          </Badge>

          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.1] tracking-[-0.025em] max-w-[640px] mx-auto mb-[18px] transition-all duration-600",
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: headerInView ? "200ms" : "0ms" }}
          >
            From Raw Data to <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
              Confident Decisions
            </span>
          </h2>

          <p
            className={cn(
              "text-base text-[#8892a0] font-light max-w-[500px] mx-auto leading-[1.75] transition-all duration-600",
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: headerInView ? "350ms" : "0ms" }}
          >
            A proven five-step workflow that turns your scattered, unstructured
            data into clear, evidence-backed business actions — without months
            of setup.
          </p>
        </div>

        {/* Steps wrapper with vertical connector line */}
        <div className="relative">
          {/* Vertical connector line (desktop only) */}
          <div
            className="hidden md:block absolute left-[27px] top-[60px] bottom-[60px] w-[1px] z-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(124,92,252,0.35) 15%, rgba(124,92,252,0.35) 85%, transparent)",
            }}
          />

          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
