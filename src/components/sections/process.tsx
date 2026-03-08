"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Code2,
  Plug,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Settings,
  BarChart3,
  Activity,
  CircleDot,
  Loader2,
} from "lucide-react";

/* ─────────────────── Step 1 Illustration: Smart Analyzing ─────────────────── */

function AnalyzingIllustration() {
  const checks = [
    { label: "System check", status: "done" },
    { label: "Process check", status: "done" },
    { label: "Speed check", status: "loading" },
    { label: "Manual work", status: "warning" },
    { label: "Repetitive task", status: "warning" },
  ];

  return (
    <div className="w-full max-w-[280px] mx-auto rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-[11px] font-medium text-primary">
          Analyzing current workflow..
        </span>
      </div>

      {/* Check items */}
      <div className="flex flex-col gap-2">
        {checks.map((check, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all duration-300",
              check.status === "done" &&
                "bg-emerald-500/5 border-emerald-500/15",
              check.status === "loading" &&
                "bg-primary/5 border-primary/15",
              check.status === "warning" &&
                "bg-amber-500/5 border-amber-500/15"
            )}
          >
            {check.status === "done" && (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            )}
            {check.status === "loading" && (
              <Loader2 className="w-3.5 h-3.5 text-primary shrink-0 animate-spin" />
            )}
            {check.status === "warning" && (
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            )}
            <span
              className={cn(
                "text-[11px] font-medium",
                check.status === "done" && "text-emerald-300/80",
                check.status === "loading" && "text-foreground/80",
                check.status === "warning" && "text-amber-300/80"
              )}
            >
              {check.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── Step 2 Illustration: AI Development ─────────────────── */

function DevelopmentIllustration() {
  const codeLines = [
    { indent: 0, text: "class AutomationTrigger:", color: "text-violet-400" },
    {
      indent: 1,
      text: "def __init__(self, threshold):",
      color: "text-blue-400",
    },
    {
      indent: 2,
      text: "self.threshold = threshold",
      color: "text-foreground/60",
    },
    {
      indent: 2,
      text: 'self.status = "inactive"',
      color: "text-foreground/60",
    },
    { indent: 0, text: "", color: "" },
    {
      indent: 1,
      text: "def check_trigger(self, value):",
      color: "text-blue-400",
    },
    {
      indent: 2,
      text: "if value > self.threshold:",
      color: "text-amber-400",
    },
    {
      indent: 3,
      text: 'self.status = "active"',
      color: "text-emerald-400",
    },
    {
      indent: 3,
      text: 'return "Automation triggered!"',
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="w-full max-w-[310px] mx-auto rounded-xl border border-border bg-surface shadow-lg shadow-black/20 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-background/60">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="text-[9px] text-muted-foreground ml-2 font-mono">
          automation_trigger.py
        </span>
      </div>

      {/* Code block */}
      <div className="p-3 font-mono text-[10px] leading-[1.7] overflow-hidden">
        {codeLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-5 text-right text-muted-foreground/30 select-none mr-3 shrink-0">
              {line.text ? i + 1 : ""}
            </span>
            <span className={cn(line.color)} style={{ paddingLeft: `${line.indent * 14}px` }}>
              {line.text}
              {i === codeLines.length - 1 && (
                <span className="inline-block w-[5px] h-3 bg-primary/80 ml-0.5 animate-blink align-middle" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── Step 3 Illustration: Seamless Integration ─────────────────── */

function IntegrationIllustration() {
  const leftIcons = [
    <Zap key="zap" className="w-3.5 h-3.5 text-primary" />,
    <BarChart3 key="bar" className="w-3.5 h-3.5 text-violet-400" />,
    <Settings key="set" className="w-3.5 h-3.5 text-blue-400" />,
    <Activity key="act" className="w-3.5 h-3.5 text-emerald-400" />,
  ];

  const rightIcons = [
    <Code2 key="code" className="w-3.5 h-3.5 text-amber-400" />,
    <Plug key="plug" className="w-3.5 h-3.5 text-pink-400" />,
    <TrendingUp key="trend" className="w-3.5 h-3.5 text-cyan-400" />,
    <RefreshCw key="refresh" className="w-3.5 h-3.5 text-orange-400" />,
  ];

  return (
    <div className="w-full max-w-[300px] mx-auto rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-primary font-medium mb-1">
            Our solution
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {leftIcons.map((icon, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Connection arrows */}
        <div className="flex flex-col items-center gap-1 px-3">
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-[1px] bg-gradient-to-r from-primary/60 to-primary/20" />
            <ArrowRight className="w-3 h-3 text-primary/50" />
          </div>
          <div className="flex items-center gap-0.5">
            <ArrowRight className="w-3 h-3 text-emerald-400/50 rotate-180" />
            <div className="w-6 h-[1px] bg-gradient-to-l from-emerald-400/60 to-emerald-400/20" />
          </div>
          <CircleDot className="w-3.5 h-3.5 text-primary/40 animate-pulse" />
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-[1px] bg-gradient-to-r from-primary/60 to-primary/20" />
            <ArrowRight className="w-3 h-3 text-primary/50" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-muted-foreground font-medium mb-1">
            Your stack
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {rightIcons.map((icon, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/60 border border-border"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15 mt-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span className="text-[10px] text-emerald-300/80 font-medium">
          Integration successful — 0 disruptions
        </span>
      </div>
    </div>
  );
}

/* ─────────────── Step 4 Illustration: Continuous Optimization ─────────────── */

function OptimizationIllustration() {
  const systems = [
    {
      name: "Chatbot system",
      status: "Efficiency will increase by 20%",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/15",
      icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />,
      progress: 85,
    },
    {
      name: "Workflow system",
      status: "Update available..",
      color: "text-amber-400",
      bgColor: "bg-amber-500/5",
      borderColor: "border-amber-500/15",
      icon: <AlertCircle className="w-3.5 h-3.5 text-amber-400" />,
      progress: 60,
    },
    {
      name: "Sales system",
      status: "Up to date",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/15",
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-primary" />,
      progress: 95,
    },
  ];

  return (
    <div className="w-full max-w-[280px] mx-auto rounded-xl border border-border bg-surface p-4 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-2.5">
        {systems.map((system, i) => (
          <div
            key={i}
            className={cn(
              "rounded-lg border p-3 transition-all duration-200",
              system.bgColor,
              system.borderColor
            )}
          >
            <div className="flex items-center gap-2 mb-1.5">
              {system.icon}
              <span className="text-[11px] font-semibold text-foreground">
                {system.name}
              </span>
            </div>
            <p className={cn("text-[10px] font-medium mb-2", system.color)}>
              {system.status}
            </p>
            {/* Mini progress bar */}
            <div className="w-full h-1 rounded-full bg-muted/40 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  i === 0 && "bg-emerald-400",
                  i === 1 && "bg-amber-400",
                  i === 2 && "bg-primary"
                )}
                style={{ width: `${system.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── Step Card Component ─────────────────── */

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  children: React.ReactNode;
  isLast?: boolean;
}

function ProcessStep({
  stepNumber,
  title,
  description,
  children,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative">
      {/* Connector line for desktop (vertical between cards) */}
      {!isLast && (
        <div className="hidden md:block absolute left-8 top-full w-[1px] h-8 bg-gradient-to-b from-primary/30 to-transparent z-10" />
      )}

      <div className="group relative grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-center rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
        {/* Subtle hover glow */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(109,59,255,0.03)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Text content */}
        <div className="flex flex-col gap-3 relative z-10">
          {/* Step badge */}
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 text-primary text-sm font-bold shrink-0">
              {stepNumber}
            </div>
            <Badge variant="purple" className="text-[10px] tracking-wider uppercase px-2.5 py-0.5">
              Step {stepNumber}
            </Badge>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Illustration */}
        <div className="relative flex items-center justify-center py-2">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Main Process Section ─────────────────── */

export function Process() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeading
          badge="Our Process"
          title="Our Simple, Smart, and"
          highlightedText="Scalable Process"
          description="We design, develop, and implement automation tools that help you work smarter, not harder"
        />

        {/* Steps */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <ProcessStep
            stepNumber={1}
            title="Smart Analyzing"
            description="We assess your needs and identify AI solutions to streamline workflows and improve efficiency."
          >
            <AnalyzingIllustration />
          </ProcessStep>

          <ProcessStep
            stepNumber={2}
            title="AI Development"
            description="Our team builds intelligent automation systems tailored to your business processes."
          >
            <DevelopmentIllustration />
          </ProcessStep>

          <ProcessStep
            stepNumber={3}
            title="Seamless Integration"
            description="We smoothly integrate AI solutions into your existing infrastructure with minimal disruption."
          >
            <IntegrationIllustration />
          </ProcessStep>

          <ProcessStep
            stepNumber={4}
            title="Continuous Optimization"
            description="We refine performance, analyze insights, and enhance automation for long-term growth."
            isLast
          >
            <OptimizationIllustration />
          </ProcessStep>
        </div>
      </div>
    </section>
  );
}
