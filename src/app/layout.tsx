import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { buildMetadata } from "@/lib/metadata";
import { getDefaultConsentInlineScript } from "@/lib/cookies/consent-mode";
import { SITE_URL } from "@/lib/site";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A2E",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "Fraud Forensic Accountant | Civil & Criminal Fraud Investigations",
    description:
      "Find a qualified fraud forensic accountant. Expert witnesses and investigators for civil fraud recovery, criminal defence, SFO investigations, POCA, UWOs, and corporate DPA negotiations.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Google Consent Mode v2 defaults (denied) before any Google tag loads */}
        <Script id="consent-default" strategy="beforeInteractive">
          {getDefaultConsentInlineScript()}
        </Script>
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <CookieConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
