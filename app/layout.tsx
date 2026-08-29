import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advocate-s-dossier.vercel.app"),
  title: {
    default: "Oloo Morgan Hope — Law Graduate & Certified Professional Mediator",
    template: "%s — Oloo Morgan Hope",
  },
  description:
    "Professional dossier of Oloo Morgan Hope, a law graduate, Advocates Training Programme candidate, and Certified Professional Mediator based in Nairobi.",
  openGraph: {
    title: "Oloo Morgan Hope",
    description:
      "Law graduate, ATP candidate, legal researcher, and Certified Professional Mediator.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#1B1A18" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="min-h-dvh bg-paper text-charcoal">
          <SiteHeader />
          <div id="content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
