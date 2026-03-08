import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Xtract — Intelligent Automation for Modern Businesses",
  description:
    "Xtract brings AI automation to your fingertips. Streamline tasks, automate workflows, and scale your business with intelligent AI solutions.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "artificial intelligence",
    "AI tools",
    "business growth",
    "Xtract",
  ],
  openGraph: {
    title: "Xtract — Intelligent Automation for Modern Businesses",
    description:
      "Xtract brings AI automation to your fingertips. Streamline tasks, automate workflows, and scale your business with intelligent AI solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Xtract",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtract — Intelligent Automation for Modern Businesses",
    description:
      "Xtract brings AI automation to your fingertips. Streamline tasks, automate workflows, and scale your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
