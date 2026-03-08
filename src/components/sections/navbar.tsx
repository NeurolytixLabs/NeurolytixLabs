"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/glow-button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsScrolled(currentScrollY > 20);

          // Don't hide if mobile menu is open
          if (!isMobileMenuOpen) {
            if (currentScrollY < 50) {
              // Always show near top
              setIsVisible(true);
            } else if (
              currentScrollY > lastScrollY.current &&
              currentScrollY > 100
            ) {
              // Scrolling down & past threshold — hide
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
              // Scrolling up — show
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]",
        )}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-4">
          <nav
            className={cn(
              "rounded-2xl border transition-all duration-300",
              isScrolled
                ? "bg-background/80 backdrop-blur-xl border-border shadow-lg shadow-black/10"
                : "bg-background/60 backdrop-blur-lg border-border/50 shadow-md shadow-black/5",
            )}
          >
            <div className="px-4 sm:px-6">
              <div className="flex h-14 sm:h-16 items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center group">
                  <Image
                    src="/neurolytixlogo.png"
                    alt="Neurolytix"
                    width={140}
                    height={32}
                    className="h-5 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                    priority
                  />
                </a>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                  <GlowButton>Request Early Access</GlowButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <div className="relative w-5 h-5">
                    <Menu
                      className={cn(
                        "w-5 h-5 absolute inset-0 transition-all duration-300",
                        isMobileMenuOpen
                          ? "opacity-0 rotate-90 scale-75"
                          : "opacity-100 rotate-0 scale-100",
                      )}
                    />
                    <X
                      className={cn(
                        "w-5 h-5 absolute inset-0 transition-all duration-300",
                        isMobileMenuOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 -rotate-90 scale-75",
                      )}
                    />
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer so content isn't hidden behind floating nav */}
      <div className="h-[calc(3.5rem+2rem)] sm:h-[calc(4rem+2rem)]" />

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[min(80vw,320px)] bg-background/95 backdrop-blur-2xl border-l border-border shadow-2xl shadow-black/20 transition-transform duration-300 ease-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-border">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center px-3 py-3 text-base text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5 transition-all duration-200",
                    isMobileMenuOpen && "animate-fade-in-up",
                  )}
                  style={{
                    animationDelay: `${index * 50 + 100}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer CTAs */}
          <div className="p-5 border-t border-border space-y-3">
            <GlowButton
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Early Access
            </GlowButton>
          </div>
        </div>
      </div>
    </>
  );
}
