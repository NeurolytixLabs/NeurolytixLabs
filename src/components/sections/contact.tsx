"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────── Form Field ─────────────────────── */

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

function Field({ label, required, className, ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-medium text-white/50 tracking-wide">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      <input
        className={cn(
          "w-full rounded-xl border border-white/[0.08] bg-white/[0.03]",
          "px-4 py-3 text-[13.5px] text-white placeholder:text-white/20",
          "outline-none transition-all duration-200",
          "focus:border-primary/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(109,59,255,0.1)]",
          "hover:border-white/[0.13]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

function TextAreaField({
  label,
  required,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-medium text-white/50 tracking-wide">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      <textarea
        className={cn(
          "w-full rounded-xl border border-white/[0.08] bg-white/[0.03]",
          "px-4 py-3 text-[13.5px] text-white placeholder:text-white/20",
          "outline-none transition-all duration-200 resize-none",
          "focus:border-primary/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(109,59,255,0.1)]",
          "hover:border-white/[0.13]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

/* ─────────────────────── Service Checkboxes ─────────────────────── */

const services = [
  "Data Pipeline Setup",
  "ML Model Training",
  "Decision Intelligence",
  "Analytics Dashboards",
  "Custom Integration",
  "Strategic Consulting",
];

/* ─────────────────────── Contact Form ─────────────────────── */

function ContactForm() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [submitted, setSubmitted] = React.useState(false);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center px-8">
        <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-white">Message received.</h3>
        <p className="text-sm text-white/45 font-light leading-relaxed max-w-xs">
          We'll review your request and reach out within 1 business day to
          schedule your free onboarding call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="First Name" required placeholder="Arjun" />
        <Field label="Last Name" required placeholder="Rao" />
      </div>

      {/* Email */}
      <Field
        label="Work Email"
        required
        type="email"
        placeholder="arjun@company.com"
      />

      {/* Company + website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Company Name" placeholder="RetailNest" />
        <Field label="Company Website" placeholder="https://retailnest.in" />
      </div>

      {/* Services */}
      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-medium text-white/50 tracking-wide">
          What are you interested in?
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggle(s)}
              className={cn(
                "text-[11.5px] font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer",
                selected.includes(s)
                  ? "bg-primary/20 border-primary/50 text-primary"
                  : "bg-white/[0.03] border-white/[0.08] text-white/45 hover:border-white/20 hover:text-white/70",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <TextAreaField
        label="Message"
        required
        placeholder="Tell us about your data setup, team size, and what decisions you're trying to improve..."
        rows={4}
      />

      {/* Submit */}
      <div className="flex flex-col gap-3 pt-1">
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-white text-black text-sm font-bold cursor-pointer border-0 transition-all duration-200 hover:bg-white/90 hover:-translate-y-px active:scale-[0.98]"
        >
          Send Message →
        </button>
        <p className="text-[11px] text-white/25 text-center font-light">
          By submitting you agree to our{" "}
          <a href="#" className="underline hover:text-white/50 transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-white/50 transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}

/* ─────────────────────── Main Contact Section ─────────────────────── */

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(109,59,255,0.09)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,211,238,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: copy ── */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">

            {/* Headline */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary/70 mb-4">
                Contact Us
              </p>
              <h2
                className="font-extrabold text-white leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                Book a free 1:1
                <br />
                with our experts.
              </h2>
              <p className="text-[15px] text-white/45 font-light leading-relaxed max-w-[380px]">
                Discover how Neurolytix can transform your operational data into
                decisions that actually move your business forward.
              </p>
            </div>

            {/* Testimonial quote */}
            <div className="border-l-2 border-white/[0.1] pl-5 py-1">
              <p className="text-[13.5px] text-white/55 font-light leading-relaxed italic mb-4">
                "Neurolytix replaced our entire BI stack and gave us live
                decision recommendations we actually act on. Setup took less
                than a week."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-[11px] font-bold text-violet-400">
                  SM
                </div>
                <div>
                  <p className="text-[12.5px] font-semibold text-white/80">
                    Siddharth Mehta
                  </p>
                  <p className="text-[11px] text-white/35 font-light">
                    CEO, OpsGrid
                  </p>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/25">
                What to expect
              </p>
              {[
                "Free 30-min discovery call within 24 hours",
                "Data audit & pipeline assessment",
                "Custom roadmap for your business",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                  <span className="text-[13px] text-white/45 font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Client logos row */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/25 mb-4">
                Trusted by teams at
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {[
                  "RetailNest",
                  "SwiftRoute",
                  "OpsGrid",
                  "ForkLine",
                  "Kart&Co",
                ].map((name) => (
                  <span
                    key={name}
                    className="text-[12px] font-semibold text-white/20 tracking-wide"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
