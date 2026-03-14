import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

/* ─────────────────────── Fonts ─────────────────────── */

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

/* ─────────────────────── Site constants ─────────────────────── */

const SITE_URL = "https://neurolytix.in";
const SITE_NAME = "Neurolytix";
const SITE_TITLE =
  "Neurolytix — Decision Intelligence Platform for Growing Businesses";
const SITE_DESCRIPTION =
  "Neurolytix transforms fragmented business data into clear, actionable decisions using automated pipelines, custom ML models, and a live decision intelligence feed. No data team required.";
const SITE_KEYWORDS = [
  "decision intelligence",
  "business intelligence platform",
  "ML models for SMEs",
  "data pipeline automation",
  "AI analytics platform",
  "actionable business insights",
  "demand forecasting",
  "churn prediction",
  "real-time KPI dashboard",
  "data-driven decisions",
  "machine learning SaaS",
  "decision intelligence India",
  "SME data platform",
  "retail analytics",
  "logistics analytics",
  "Neurolytix",
];

/* ─────────────────────── Viewport ─────────────────────── */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#09090b" },
  ],
};

/* ─────────────────────── Metadata ─────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Core ── */
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Neurolytix", url: SITE_URL }],
  creator: "Neurolytix",
  publisher: "Neurolytix",

  /* ── Canonical ── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neurolytix — Decision Intelligence Platform",
        type: "image/png",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    site: "@neurolytix",
    creator: "@neurolytix",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        alt: "Neurolytix — Decision Intelligence Platform",
      },
    ],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  /* ── Web app manifest ── */
  manifest: "/site.webmanifest",

  /* ── Verification (add your tokens when ready) ── */
  verification: {
    // google: "your-google-search-console-token",
    // yandex: "your-yandex-token",
  },

  /* ── Category ── */
  category: "technology",
};

/* ─────────────────────── Structured Data (JSON-LD) ─────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/neurolytixlogo.png`,
        width: 280,
        height: 64,
      },
      description: SITE_DESCRIPTION,
      foundingDate: "2024",
      founders: [
        { "@type": "Person", name: "Snehasis Das" },
        { "@type": "Person", name: "Md Zafir Hasan" },
        { "@type": "Person", name: "Subhadeep Mandal" },
        { "@type": "Person", name: "Neelabhra Das" },
      ],
      areaServed: "IN",
      knowsAbout: [
        "Decision Intelligence",
        "Machine Learning",
        "Data Pipelines",
        "Business Analytics",
        "Demand Forecasting",
        "Churn Prediction",
      ],
      sameAs: ["https://linkedin.com/company/neurolytix"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      name: "Neurolytix",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "135",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "135",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "175",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "175",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "220",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "220",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "50",
      },
    },
  ],
};

/* ─────────────────────── Root Layout ─────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${syne.variable} ${dmSans.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-foreground"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
