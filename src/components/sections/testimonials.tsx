"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

/* ─────────────────────── Types ─────────────────────── */

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  starColor: string;
}

/* ─────────────────────── Data ─────────────────────── */

const row1: Testimonial[] = [
  {
    id: "arjun-rao",
    quote:
      "Before Neurolytix, our inventory decisions were based on gut feel and weekly Excel exports. Now we get daily reorder alerts with actual confidence scores. We cut stockouts by over 40% in two months.",
    name: "Arjun Rao",
    role: "Head of Operations",
    company: "RetailNest",
    avatarInitials: "AR",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    starColor: "#34d399",
  },
  {
    id: "priya-krishnan",
    quote:
      "Our dispatch team used to find out about delivery delays at end of day. Neurolytix flags route risks 3 hours before they happen. Our client satisfaction score went from 3.9 to 4.8 in 6 weeks.",
    name: "Priya Krishnan",
    role: "COO",
    company: "SwiftRoute Logistics",
    avatarInitials: "PK",
    accentColor: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    starColor: "#22d3ee",
  },
  {
    id: "siddharth-mehta",
    quote:
      "We were paying for Tableau, Metabase, and a custom dashboard — and still had no single source of truth. Neurolytix replaced all three and gave our ops managers actual recommendations, not just charts.",
    name: "Siddharth Mehta",
    role: "CEO",
    company: "OpsGrid",
    avatarInitials: "SM",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    starColor: "#a78bfa",
  },
  {
    id: "nisha-verma",
    quote:
      "The churn model Neurolytix built actually works. It flagged 14 high-risk accounts we would have missed entirely. We ran a targeted campaign and retained 11 of them. The ROI paid for a year of the platform.",
    name: "Nisha Verma",
    role: "Growth Lead",
    company: "Kart&Co",
    avatarInitials: "NV",
    accentColor: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
    starColor: "#fb923c",
  },
  {
    id: "rahul-desai",
    quote:
      "Running 22 kitchens on spreadsheets was a nightmare. Neurolytix now sends each kitchen a prep recommendation every morning before service. Food waste is down 29% and we stopped running out of bestsellers.",
    name: "Rahul Desai",
    role: "Founder",
    company: "ForkLine",
    avatarInitials: "RD",
    accentColor: "text-rose-400",
    accentBg: "bg-rose-500/10",
    accentBorder: "border-rose-500/20",
    starColor: "#f472b6",
  },
  {
    id: "tanvi-shah",
    quote:
      "What surprised me most was how fast the onboarding was. We had our first dashboard live in under a week and our first ML model deployed in three. No data engineer needed on our side.",
    name: "Tanvi Shah",
    role: "Product Manager",
    company: "LogiStack",
    avatarInitials: "TS",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    starColor: "#fbbf24",
  },
];

const row2: Testimonial[] = [
  {
    id: "kavya-iyer",
    quote:
      "I was skeptical that a platform could replace a data analyst. Six months later, I'm a believer. Neurolytix surfaces things my team would never have spotted manually — and explains why in plain language.",
    name: "Kavya Iyer",
    role: "Director of Strategy",
    company: "PeakScale",
    avatarInitials: "KI",
    accentColor: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    starColor: "#22d3ee",
  },
  {
    id: "vikram-reddy",
    quote:
      "The decision feed is genuinely different. It's not just an alert saying something happened — it tells you what to do about it, with a confidence score. My team actually trusts the output now.",
    name: "Vikram Reddy",
    role: "VP of Product",
    company: "NexaOps",
    avatarInitials: "VR",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    starColor: "#a78bfa",
  },
  {
    id: "meera-agarwal",
    quote:
      "Setup was genuinely fast. We connected our Shopify store, CRM, and warehouse data in a day. The first meaningful insight came within 48 hours. That's unheard of with traditional analytics projects.",
    name: "Meera Agarwal",
    role: "Co-Founder",
    company: "UrbanCart",
    avatarInitials: "MA",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    starColor: "#34d399",
  },
  {
    id: "dhruv-malhotra",
    quote:
      "We were spending ₹8L/month on a data consultancy that delivered monthly reports. Neurolytix costs a fraction of that and gives us live intelligence every single day. The switch was obvious in hindsight.",
    name: "Dhruv Malhotra",
    role: "CFO",
    company: "Fieldstack",
    avatarInitials: "DM",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    starColor: "#fbbf24",
  },
  {
    id: "sneha-bose",
    quote:
      "The ML models Neurolytix deployed are trained on our actual data — not a generic demo dataset. The demand forecast for our seasonal products is frighteningly accurate. We've cut overproduction by 22%.",
    name: "Sneha Bose",
    role: "Head of Supply Chain",
    company: "CraftNova",
    avatarInitials: "SB",
    accentColor: "text-rose-400",
    accentBg: "bg-rose-500/10",
    accentBorder: "border-rose-500/20",
    starColor: "#f472b6",
  },
  {
    id: "ankit-gupta",
    quote:
      "Every SME owner I know is drowning in data but starving for answers. Neurolytix finally bridges that gap. It doesn't just show you what happened — it tells you what to do next. That's the product I've been waiting for.",
    name: "Ankit Gupta",
    role: "Founder",
    company: "BizPulse",
    avatarInitials: "AG",
    accentColor: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
    starColor: "#fb923c",
  },
];

/* ─────────────────────── Testimonial Card ─────────────────────── */

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className={cn(
        "group relative flex-shrink-0 w-[340px] flex flex-col gap-4",
        "rounded-[20px] border border-border bg-card p-6",
        "transition-all duration-300 ease-out",
        "hover:border-white/[0.13] hover:-translate-y-[3px] hover:bg-[#131322]",
        "overflow-hidden cursor-default",
      )}
    >
      {/* Top accent bar — revealed on hover */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        )}
        style={{
          background: `linear-gradient(90deg, ${t.starColor}, ${t.starColor}99)`,
        }}
        aria-hidden="true"
      />

      {/* Ambient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-[20px]"
        style={{
          background: `radial-gradient(ellipse at 10% 0%, ${t.starColor}11, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Quote icon */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center w-9 h-9 rounded-[10px] border",
          "font-serif text-base font-black leading-none select-none",
          t.accentBg,
          t.accentBorder,
          t.accentColor,
        )}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="relative z-10 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-sm" style={{ color: t.starColor }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="relative z-10 flex-1 text-sm text-foreground/70 leading-[1.75] font-light italic">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="relative z-10 h-px bg-border" />

      {/* Author */}
      <div className="relative z-10 flex items-center gap-3">
        <div
          className={cn(
            "flex items-center justify-center w-9 h-9 rounded-full border shrink-0",
            "text-xs font-bold",
            t.accentBg,
            t.accentBorder,
            t.accentColor,
          )}
        >
          {t.avatarInitials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-foreground truncate">{t.name}</p>
          <p className="text-xs text-muted-foreground truncate font-light">
            {t.role} ·{" "}
            <span className={cn("font-medium", t.accentColor)}>
              {t.company}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Marquee Row ─────────────────────── */

interface MarqueeRowProps {
  items: Testimonial[];
  reverse?: boolean;
  duration?: number;
}

function MarqueeRow({ items, reverse = false, duration = 38 }: MarqueeRowProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex gap-5 w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── Trust Bar ─────────────────────── */

const trustItems = [
  { icon: "⭐", strong: "4.9 / 5", text: "average rating" },
  { icon: "🏢", strong: "50+", text: "businesses onboarded" },
  { icon: "🌍", strong: "Retail, Logistics & SaaS", text: "industries served" },
  { icon: "🔒", strong: "SOC 2", text: "compliant infrastructure" },
];

function TrustBar() {
  return (
    <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 mt-14">
      <div
        className={cn(
          "flex flex-wrap items-center justify-around gap-6",
          "rounded-2xl border border-border bg-card px-8 py-6",
        )}
      >
        {trustItems.map((item, i) => (
          <React.Fragment key={item.strong}>
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <span className="text-lg">{item.icon}</span>
              <span>
                <strong className="text-foreground font-semibold">
                  {item.strong}
                </strong>{" "}
                {item.text}
              </span>
            </div>
            {i < trustItems.length - 1 && (
              <div className="hidden sm:block w-px h-8 bg-border" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── Main Testimonials Section ─────────────────────── */

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-[60%] w-[500px] h-[500px] rounded-full bg-primary/[0.12] blur-[140px]" />
        <div className="absolute bottom-16 right-[5%] w-[350px] h-[350px] rounded-full bg-cyan-400/[0.12] blur-[140px]" />
      </div>

      {/* Header */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Why Businesses Trust"
          highlightedText="Neurolytix With Their Data"
          description="Real teams. Real decisions. Real outcomes — from businesses that stopped guessing and started knowing."
        />
      </div>

      {/* Marquee rows — full-bleed with edge fade masks */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-48 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-48 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div className="flex flex-col gap-5 px-4">
          <MarqueeRow items={row1} duration={38} />
          <MarqueeRow items={row2} reverse duration={42} />
        </div>
      </div>

      {/* Trust bar */}
      <TrustBar />
    </section>
  );
}