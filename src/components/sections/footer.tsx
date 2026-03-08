"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Heart,
} from "lucide-react";

/* ─────────────────────── Link Data ─────────────────────── */

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Links",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Benefits", href: "#benefits" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
      { label: "404", href: "#" },
    ],
  },
];

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="w-4 h-4" />,
  },
];

/* ─────────────────────── Newsletter Form ─────────────────────── */

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border bg-surface p-1 pl-4 transition-all duration-300",
          isFocused
            ? "border-primary/40 shadow-md shadow-primary/10"
            : "border-border hover:border-primary/20",
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none min-w-0"
          required
          aria-label="Email address for newsletter"
        />
        <Button
          type="submit"
          size="sm"
          className={cn(
            "rounded-full px-4 shrink-0 transition-all duration-300",
            isSubmitted &&
              "bg-emerald-500 hover:bg-emerald-500 shadow-emerald-500/20",
          )}
          disabled={isSubmitted}
        >
          {isSubmitted ? (
            <span className="flex items-center gap-1.5 text-xs">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Subscribed
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs">
              <Send className="w-3.5 h-3.5" />
              Join
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}

/* ─────────────────────── Footer Link Column ─────────────────────── */

function FooterLinkColumn({ column }: { column: FooterColumn }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
        {column.title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={cn(
                "group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
              )}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span>{link.label}</span>
              {link.external && (
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────── Socials Column ─────────────────────── */

function SocialsColumn() {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
        Socials
      </h4>
      <ul className="flex flex-col gap-2.5">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={`Follow us on ${social.label}`}
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted/40 border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary transition-all duration-200">
                {social.icon}
              </span>
              <span>{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────── Back to Top Button ─────────────────────── */

function BackToTopButton() {
  return (
    <a
      href="#"
      className="group flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface hover:bg-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </a>
  );
}

/* ─────────────────────── Main Footer ─────────────────────── */

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(109,59,255,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {/* Logo */}
              <a
                href="#"
                className="inline-flex items-center gap-2.5 group w-fit"
              >
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 group-hover:bg-primary/25 transition-colors duration-200">
                  <Zap className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  XTRACT
                </span>
              </a>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Xtract – Automate Smarter, Optimize Faster, and Grow Stronger.
              </p>

              {/* Newsletter */}
              <div className="max-w-xs">
                <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                  Join our newsletter
                </p>
                <NewsletterForm />
              </div>
            </div>

            {/* Link Columns */}
            <div className="lg:col-span-2">
              <FooterLinkColumn column={footerColumns[0]} />
            </div>

            <div className="lg:col-span-2">
              <FooterLinkColumn column={footerColumns[1]} />
            </div>

            {/* Socials Column */}
            <div className="lg:col-span-2">
              <SocialsColumn />
            </div>

            {/* Back to Top (large screens) */}
            <div className="hidden lg:flex lg:col-span-2 items-start justify-end">
              <BackToTopButton />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left — Credits */}
            <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-xs text-muted-foreground/60">
              <span className="flex items-center gap-1">
                Visioned and Crafted with
                <Heart className="w-3 h-3 text-red-400/60 fill-red-400/60 inline-block" />
              </span>
              <span className="hidden sm:inline text-muted-foreground/30">
                ·
              </span>
              <span>Logo by flaticon</span>
            </div>

            {/* Center — Copyright */}
            <p className="text-xs text-muted-foreground/60 text-center">
              © {new Date().getFullYear()} Xtract. All rights reserved.
            </p>

            {/* Right — Mobile back to top */}
            <div className="flex lg:hidden">
              <BackToTopButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
