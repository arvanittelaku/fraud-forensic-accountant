import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { serviceNavLinks, fraudTypeNavLinks } from "@/data/navigation";

const col2 = [
  ...fraudTypeNavLinks.slice(0, 5),
  { href: "/fraud-types", label: "View all fraud types" },
];

const col3 = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/glossary", label: "Glossary" },
  { href: "/fraud-forensic-accounting-explained", label: "Fraud Accounting Explained" },
];

const col4 = [
  { href: "/who-we-help/criminal-defence-solicitors", label: "Criminal Defence" },
  { href: "/who-we-help/civil-fraud-solicitors", label: "Civil Fraud Solicitors" },
  { href: "/who-we-help/corporates-compliance", label: "Corporates & Compliance" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceNavLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Fraud Types</h3>
          <ul className="space-y-2 text-sm">
            {col2.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            {col3.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Who We Help</h3>
          <ul className="space-y-2 text-sm">
            {col4.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs text-white/60 sm:text-left">
            FraudForensicAccountant.com connects solicitors and corporates with fraud forensic accountants.
            We are not a law firm and do not provide legal advice.
          </p>
          <p className="mt-2 text-center text-xs text-white/50 sm:text-left">
            &copy; 2025 FraudForensicAccountant. England and Wales.{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy
            </Link>
            {" · "}
            <Link href="/cookies" className="underline hover:text-white">
              Cookies
            </Link>
            {" · "}
            <Link href="/terms" className="underline hover:text-white">
              Terms
            </Link>
            {" · "}
            <CookieSettingsButton className="underline hover:text-white" />
          </p>
        </div>
      </div>
    </footer>
  );
}
