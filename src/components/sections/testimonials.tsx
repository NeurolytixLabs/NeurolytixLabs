"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Quote, Star } from "lucide-react";

/* ─────────────────────── Testimonial Data ─────────────────────── */

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
  accentGlow: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "james-carter",
    quote:
      "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
    name: "James Carter",
    role: "CEO",
    company: "TechFlow Solutions",
    avatarInitials: "JC",
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    accentGlow: "rgba(52, 211, 153, 0.06)",
    rating: 5,
  },
  {
    id: "sophia-martinez",
    quote:
      "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
    name: "Sophia Martinez",
    role: "Operations Manager",
    company: "NexaCorp",
    avatarInitials: "SM",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    accentGlow: "rgba(96, 165, 250, 0.06)",
    rating: 5,
  },
  {
    id: "david-reynolds",
    quote:
      "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
    name: "David Reynolds",
    role: "Head of Sales",
    company: "GrowthPeak",
    avatarInitials: "DR",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    accentGlow: "rgba(167, 139, 250, 0.06)",
    rating: 5,
  },
  {
    id: "emily-wong",
    quote:
      "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to Xtract.",
    name: "Emily Wong",
    role: "Customer Success Lead",
    company: "SupportHive",
    avatarInitials: "EW",
    accentColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentGlow: "rgba(251, 191, 36, 0.06)",
    rating: 5,
  },
];

/* ─────────────────────── Star Rating ─────────────────────── */

function StarRating({
  rating,
  accentColor,
}: {
  rating: number;
  accentColor: string;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5 transition-colors duration-200",
            i < rating
              ? cn(accentColor, "fill-current")
              : "text-muted-foreground/20"
          )}
        />
      ))}
    </div>
  );
}

/* ─────────────────────── Testimonial Card ─────────────────────── */

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7",
        "transition-all duration-300 ease-out",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        "hover:-translate-y-1",
        "overflow-hidden"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: testimonial.accentGlow }}
        aria-hidden="true"
      />

      {/* Quote icon */}
      <div className="relative z-10 mb-4">
        <div
          className={cn(
            "flex items-center justify-center w-9 h-9 rounded-xl border transition-transform duration-300 group-hover:scale-110",
            testimonial.accentBg,
            testimonial.accentBorder,
            testimonial.accentColor
          )}
        >
          <Quote className="w-4 h-4" />
        </div>
      </div>

      {/* Star rating */}
      <div className="relative z-10 mb-4">
        <StarRating
          rating={testimonial.rating}
          accentColor={testimonial.accentColor}
        />
      </div>

      {/* Quote text */}
      <blockquote className="relative z-10 flex-1 text-sm sm:text-base text-foreground/90 leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="relative z-10 h-px bg-border mb-5" />

      {/* Author info */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Avatar */}
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border text-xs font-bold tracking-wide transition-all duration-300 group-hover:scale-105 group-hover:shadow-md shrink-0",
            testimonial.accentBg,
            testimonial.accentBorder,
            testimonial.accentColor
          )}
        >
          {testimonial.avatarInitials}
        </div>

        {/* Name & role */}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {testimonial.role} at{" "}
            <span className={cn("font-medium", testimonial.accentColor)}>
              {testimonial.company}
            </span>
          </p>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div
          className={cn(
            "h-full w-full transition-transform duration-500 ease-out origin-left scale-x-0 group-hover:scale-x-100",
            testimonial.accentColor === "text-emerald-400" &&
              "bg-emerald-400/50",
            testimonial.accentColor === "text-blue-400" && "bg-blue-400/50",
            testimonial.accentColor === "text-violet-400" &&
              "bg-violet-400/50",
            testimonial.accentColor === "text-amber-400" && "bg-amber-400/50"
          )}
        />
      </div>
    </div>
  );
}

/* ─────────────────────── Main Testimonials Section ─────────────────────── */

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeading
          badge="Testimonials"
          title="Why Businesses Love Our"
          highlightedText="AI Solutions"
          description="Real businesses, real results with AI automation."
        />

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
