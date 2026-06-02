"use client";

import Link from "next/link";
import { useState } from "react";
import { NavDropdown, MobileNavGroup } from "./NavDropdown";
import {
  serviceNavLinks,
  fraudTypeNavLinks,
  caseTypeNavLinks,
  resourcesNavLinks,
} from "@/data/navigation";

const serviceDropdownLinks = [
  { href: "/services", label: "All Services" },
  ...serviceNavLinks,
];

const mobileGroups = [
  {
    title: "Services",
    links: serviceDropdownLinks,
  },
  {
    title: "Who We Help",
    links: [
      { href: "/who-we-help", label: "Overview" },
      { href: "/who-we-help/criminal-defence-solicitors", label: "Criminal Defence" },
      { href: "/who-we-help/civil-fraud-solicitors", label: "Civil Fraud" },
      { href: "/who-we-help/corporates-compliance", label: "Corporates" },
    ],
  },
  {
    title: "Fraud Types",
    links: [{ href: "/fraud-types", label: "All Fraud Types" }, ...fraudTypeNavLinks],
  },
  {
    title: "Case Types",
    links: [{ href: "/case-types", label: "All Case Types" }, ...caseTypeNavLinks],
  },
  {
    title: "Resources",
    links: resourcesNavLinks,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-lg font-bold text-charcoal sm:text-xl">
          Fraud<span className="text-indigo-accent">Forensic</span>Accountant
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          <Link
            href="/"
            className="rounded-[4px] px-2 py-2 text-sm text-body hover:bg-section-alt hover:text-charcoal"
          >
            Home
          </Link>
          <NavDropdown label="Services" href="/services" links={serviceDropdownLinks} />
          <Link
            href="/fraud-forensic-accounting-explained"
            className="rounded-[4px] px-2 py-2 text-sm text-body hover:bg-section-alt hover:text-charcoal"
          >
            Fraud Explained
          </Link>
          <Link
            href="/who-we-help"
            className="rounded-[4px] px-2 py-2 text-sm text-body hover:bg-section-alt hover:text-charcoal"
          >
            Who We Help
          </Link>
          <NavDropdown label="Fraud Types" href="/fraud-types" links={fraudTypeNavLinks} />
          <NavDropdown label="Case Types" href="/case-types" links={caseTypeNavLinks} />
          <NavDropdown label="Resources" links={resourcesNavLinks} />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded-[4px] bg-indigo-accent px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-accent/90 sm:inline-flex lg:px-5"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[4px] border border-border p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-white lg:hidden">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4">
            <Link
              href="/"
              className="mb-2 flex min-h-[44px] items-center rounded-[4px] px-3 py-2 font-medium text-charcoal hover:bg-section-alt"
              onClick={closeMobile}
            >
              Home
            </Link>
            <Link
              href="/fraud-forensic-accounting-explained"
              className="mb-2 flex min-h-[44px] items-center rounded-[4px] px-3 py-2 text-body hover:bg-section-alt"
              onClick={closeMobile}
            >
              Fraud Explained
            </Link>
            {mobileGroups.map((group) => (
              <MobileNavGroup
                key={group.title}
                title={group.title}
                links={group.links}
                onNavigate={closeMobile}
              />
            ))}
            <Link
              href="/contact"
              className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-indigo-accent px-4 py-3 font-semibold text-white"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
