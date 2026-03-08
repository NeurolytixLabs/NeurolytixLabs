"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ─────────────────────── FAQ Data ─────────────────────── */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can AI automation help my business?",
    answer:
      "AI automation can streamline repetitive tasks, reduce human error, improve decision-making with data-driven insights, and free up your team to focus on high-value strategic work. Whether it's automating customer support, optimizing workflows, or generating reports, AI adapts to your specific business needs and drives measurable efficiency gains.",
  },
  {
    id: "faq-2",
    question: "Is AI automation difficult to integrate?",
    answer:
      "Not at all. Our team handles the entire integration process from start to finish. We assess your current tech stack, design a seamless implementation plan, and ensure minimal disruption to your existing operations. Most integrations are completed within 2–4 weeks, and we provide full onboarding support to get your team up to speed quickly.",
  },
  {
    id: "faq-3",
    question: "What industries can benefit from AI automation?",
    answer:
      "AI automation is industry-agnostic and benefits virtually every sector. We've worked with businesses in finance, healthcare, e-commerce, logistics, SaaS, real estate, and more. Any organization that handles repetitive processes, large data volumes, or customer interactions can see significant improvements through AI-powered automation.",
  },
  {
    id: "faq-4",
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "No technical expertise is required. Our solutions are designed with user-friendly interfaces and intuitive dashboards that anyone on your team can operate. We also provide comprehensive training, documentation, and ongoing support to ensure you get the most out of your AI tools without needing a dedicated technical team.",
  },
  {
    id: "faq-5",
    question: "What kind of support do you offer?",
    answer:
      "We offer tiered support based on your plan. All customers receive email and chat support with dedicated response times. Professional plan users get priority support with faster resolution, while Enterprise clients enjoy 24/7 VIP support with a dedicated account manager and AI business consultant to ensure continuous optimization of your systems.",
  },
];

/* ─────────────────────── Main FAQ Section ─────────────────────── */

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Section Header */}
        <SectionHeading
          badge="FAQs"
          title="We've Got the Answers You're"
          highlightedText="Looking For"
          description="Quick answers to your AI automation questions."
        />

        {/* Accordion */}
        <Accordion type="single" collapsible defaultValue="faq-1">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-base sm:text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
