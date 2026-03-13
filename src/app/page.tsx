import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact"
import {
  ScrollReveal,
  RevealFromBottom,
  RevealFade,
} from "@/components/scroll-reveal";

function SectionDivider() {
  return (
    <RevealFade duration={900} threshold={0.5}>
      <div
        className="relative h-px w-full max-w-5xl mx-auto"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </RevealFade>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero Section — no scroll reveal needed, uses its own entry animation */}
        <Hero />

        <SectionDivider />

        {/* Services Section */}
        <ScrollReveal
          direction="up"
          duration={800}
          distance={40}
          threshold={0.08}
        >
          <Services />
        </ScrollReveal>

        <SectionDivider />

        {/* Process Section */}
        <ScrollReveal
          direction="up"
          duration={800}
          distance={40}
          threshold={0.08}
        >
          <Process />
        </ScrollReveal>

        <SectionDivider />

        {/* Case Studies Section */}
        <ScrollReveal
          direction="up"
          duration={800}
          distance={36}
          threshold={0.06}
        >
          <CaseStudies />
        </ScrollReveal>

        <SectionDivider />

        {/* Benefits Section */}
        <ScrollReveal
          direction="up"
          duration={800}
          distance={40}
          threshold={0.08}
        >
          <Benefits />
        </ScrollReveal>

        <SectionDivider />

        {/* Pricing Section */}
        <ScrollReveal
          direction="up"
          duration={800}
          distance={40}
          threshold={0.08}
        >
          <Pricing />
        </ScrollReveal>

        <SectionDivider />

        {/* Testimonials Section */}
        <ScrollReveal
          direction="up"
          duration={800}
          distance={36}
          threshold={0.08}
        >
          <Testimonials />
        </ScrollReveal>

        <SectionDivider />

        {/* FAQ Section */}
        <RevealFromBottom duration={800} distance={32} threshold={0.1}>
          <FAQ />
        </RevealFromBottom>

        <SectionDivider />

        {/* CTA Banner Section */}
        <ScrollReveal
          direction="up"
          duration={900}
          distance={44}
          threshold={0.1}
          blur={4}
        >
          <CTABanner />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={800} distance={40} threshold={0.08}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <RevealFromBottom duration={700} distance={24} threshold={0.05}>
        <Footer />
      </RevealFromBottom>
    </>
  );
}
