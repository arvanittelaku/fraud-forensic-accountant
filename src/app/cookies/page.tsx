import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Cookie Policy | FraudForensicAccountant.com",
  description:
    "How FraudForensicAccountant.com uses cookies and similar technologies, your choices under UK GDPR, and how to manage consent.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Last updated: June 2026. This policy explains how we use cookies and how you can control them."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />
      <ContentSection>
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. We also use
          similar technologies (local storage for consent records, pixels, and tags) where
          described below.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          FraudForensicAccountant.com uses cookies to operate the site securely, remember your
          cookie choices, understand aggregated traffic (if you consent), and measure marketing
          effectiveness (if you consent). We do not sell your personal data.
        </p>

        <h2>Cookie Categories</h2>

        <h3>1. Necessary Cookies (always active)</h3>
        <p>
          Required for core functionality: security, load balancing, and storing your cookie consent
          decision. These cannot be switched off via our banner because the site would not function
          correctly without them.
        </p>
        <ul>
          <li>
            <strong>ffa_cookie_consent_v1</strong> (local storage): stores your consent preferences
            and expiry (12 months).
          </li>
        </ul>

        <h3>2. Analytics Cookies (optional)</h3>
        <p>
          Help us understand how visitors use the site (pages viewed, approximate location, device
          type). Loaded only if you consent. May include:
        </p>
        <ul>
          <li>Google Analytics (Google LLC)</li>
          <li>Google Tag Manager (Google LLC)</li>
          <li>Hotjar (Hotjar Ltd.)</li>
        </ul>

        <h3>3. Marketing Cookies (optional)</h3>
        <p>
          Used to measure advertising and campaign performance. Loaded only if you consent. May
          include:
        </p>
        <ul>
          <li>Meta Pixel (Meta Platforms, Inc.)</li>
          <li>LinkedIn Insight Tag (LinkedIn Corporation)</li>
        </ul>

        <h3>4. Preferences Cookies (optional)</h3>
        <p>
          Remember choices that improve your experience on return visits. Loaded only if you
          consent.
        </p>

        <h2>Legal Basis (UK / EEA)</h2>
        <p>
          Necessary cookies are used based on legitimate interests in providing a secure, functional
          website. Analytics, marketing, and preferences cookies are used only with your consent
          (UK GDPR Article 6(1)(a) and PECR/ePrivacy rules on storing/accessing information on your
          device).
        </p>

        <h2>Google Consent Mode</h2>
        <p>
          Where Google services are enabled, we use Google Consent Mode v2. Non-essential Google
          storage remains denied until you accept the relevant categories. You can change your mind
          at any time via Cookie Settings.
        </p>

        <h2>International Transfers</h2>
        <p>
          Some third-party providers (e.g. Google, Meta, LinkedIn) may process data in the United
          States or other countries. Where required, providers rely on appropriate safeguards such as
          Standard Contractual Clauses.
        </p>

        <h2>California Residents (CCPA/CPRA basics)</h2>
        <p>
          We do not sell personal information. You may opt out of non-essential cookies using Reject
          Non-Essential or Customize Preferences. For privacy requests, contact {SITE_EMAIL}.
        </p>

        <h2>How to Manage Cookies</h2>
        <p>
          Use the banner on your first visit, or reopen preferences anytime:{" "}
          <CookieSettingsButton className="font-medium text-indigo-accent underline" />.
          You can also clear cookies via your browser settings.
        </p>

        <h2>Retention</h2>
        <p>
          Consent records are stored for 12 months before the banner is shown again. Individual
          third-party cookies follow each provider&apos;s retention policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-indigo-accent hover:underline">
            {SITE_EMAIL}
          </a>
          . See also our{" "}
          <Link href="/privacy" className="text-indigo-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </ContentSection>
    </>
  );
}
