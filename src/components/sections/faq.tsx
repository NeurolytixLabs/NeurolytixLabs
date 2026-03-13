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
    question: "What exactly does Neurolytix do?",
    answer:
      "Neurolytix is a Decision Intelligence platform — we take your raw, fragmented business data and transform it into clear, actionable recommendations. That means we handle the full data lifecycle: ingesting data from your CRM, ERP, spreadsheets, and APIs; cleaning and structuring it; training ML models on it; and finally surfacing specific decisions your team should take — not just dashboards to stare at.",
  },
  {
    id: "faq-2",
    question: "How long does it take to go live?",
    answer:
      "Most clients have their first live dashboard within 5–7 business days and their first ML model deployed within 2–3 weeks. The timeline depends on how many data sources you're connecting and how clean your existing data is. Our team handles the entire setup — you don't need a data engineer or technical resource on your side to get started.",
  },
  {
    id: "faq-3",
    question: "Do I need a data team or technical knowledge to use Neurolytix?",
    answer:
      "No. Neurolytix is built specifically for business operators, not data scientists. Your team interacts with a plain-language decision feed, KPI dashboards, and automated alerts — no SQL queries, no Python notebooks, no BI tool expertise required. We handle all the technical infrastructure on our end.",
  },
  {
    id: "faq-4",
    question: "How is Neurolytix different from tools like Tableau or Power BI?",
    answer:
      "Tableau and Power BI show you what happened. Neurolytix tells you what to do about it. Traditional BI tools are built for analysts to explore data. Neurolytix is built for operators to make decisions — every output includes a recommended action, a confidence score, and a plain-language explanation. We also handle data ingestion and ML model training, which BI tools don't touch.",
  },
  {
    id: "faq-5",
    question: "What data sources can Neurolytix connect to?",
    answer:
      "We support a wide range of sources including PostgreSQL, MySQL, MongoDB, Google Sheets, Excel, HubSpot, Salesforce, Shopify, WooCommerce, SAP exports, REST APIs, and CSV uploads. If you use a source that's not listed, reach out — we build custom connectors as part of the Enterprise onboarding process.",
  },
  {
    id: "faq-6",
    question: "Are the ML models generic or trained on my data?",
    answer:
      "They're trained on your data. Generic models built on public datasets produce generic results. Neurolytix trains every model — whether it's demand forecasting, churn prediction, or anomaly detection — on your historical business data, your customers, and your operational patterns. This is why our clients see 88–96% model accuracy rather than the 60–70% you'd get from off-the-shelf tools.",
  },
  {
    id: "faq-7",
    question: "How is my data kept secure?",
    answer:
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We operate on SOC 2 compliant infrastructure and follow strict data isolation practices — your data is never used to train models for other clients. We also support private cloud deployments and on-premise options for Enterprise clients with stricter data residency requirements.",
  },
  {
    id: "faq-8",
    question: "What happens after I sign up?",
    answer:
      "After signup, you'll be paired with an onboarding specialist within 24 hours. They'll run a data discovery call, map your sources, and begin pipeline setup. You'll receive weekly progress updates during onboarding. Once live, you'll have access to your dashboard, the decision feed, and our support team — with response times based on your plan tier.",
  },
];

/* ─────────────────────── Main FAQ Section ─────────────────────── */

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(109,59,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Section Header */}
        <SectionHeading
          badge="FAQs"
          title="We've Got the Answers You're"
          highlightedText="Looking For"
          description="Everything you need to know about getting started with Neurolytix."
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