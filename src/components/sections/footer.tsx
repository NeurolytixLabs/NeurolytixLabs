"use client";

import * as React from "react";

/* ─────────────────────── Link Data ─────────────────────── */

const navColumns = [
  [
    { label: "Services",     href: "#services" },
    { label: "Process",      href: "#process" },
    { label: "Case Studies", href: "#case-studies" },
  ],
  [
    { label: "Benefits",     href: "#benefits" },
    { label: "Pricing",      href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  [
    { label: "FAQ",      href: "#faq" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Contact",  href: "#cta" },
  ],
];

/* ─────────────────────── Footer ─────────────────────── */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-white/[0.06]">

      {/* ── Gradient glow — lives behind the wordmark, fills lower half ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[75%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 20% 110%, rgba(80,40,220,0.55) 0%, rgba(50,20,160,0.25) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Main body: wordmark left · nav right ── */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 px-6 sm:px-10 lg:px-14 pt-12 pb-8">

        {/* Wordmark — left, large */}
        <div className="select-none shrink-0">
          <p className="text-sm text-white/30 font-light mb-4 leading-relaxed">
            Decision intelligence platform for growing businesses.
          </p>
          <h2
            className="font-extrabold leading-[0.88] text-white"
            style={{
              fontSize: "clamp(56px, 10vw, 160px)",
              letterSpacing: "-0.035em",
            }}
          >
            Neurolytix
          </h2>
        </div>

        {/* Nav — 3 columns, right-aligned on desktop */}
        <div className="flex gap-10 sm:gap-14 shrink-0 pb-2">
          {navColumns.map((col, ci) => (
            <ul key={ci} className="flex flex-col gap-3.5">
              {col.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-[13.5px] font-medium text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-10 lg:px-14 py-5 border-t border-white/[0.05]">
        <p className="text-xs text-white/25 font-light">
          © {new Date().getFullYear()} Neurolytix. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {["Privacy", "Terms", "Security"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-white/25 hover:text-white/55 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}