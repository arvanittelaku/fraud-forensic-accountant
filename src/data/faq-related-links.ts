import type { InternalLink } from "@/lib/seo/internal-links";

/** Contextual internal links below FAQ answers (SEO-ARCHITECTURE.md §3). */
export const faqRelatedLinks: Record<string, InternalLink[]> = {
  "What is a fraud forensic accountant?": [
    { href: "/what-is-a-fraud-forensic-accountant", label: "Full role definition" },
    { href: "/fraud-forensic-accounting-explained", label: "Fraud forensic accounting explained" },
  ],
  "What is the difference between civil fraud and criminal fraud?": [
    { href: "/fraud-forensic-accounting-explained", label: "Civil vs criminal comparison table" },
    { href: "/who-we-help/civil-fraud-solicitors", label: "Civil fraud solicitors" },
    { href: "/who-we-help/criminal-defence-solicitors", label: "Criminal defence" },
  ],
  "What is POCA and how does it affect fraud proceedings?": [
    { href: "/guides/poca-confiscation-guide", label: "POCA confiscation guide" },
    { href: "/case-types/poca-confiscation-defence", label: "POCA confiscation defence" },
  ],
  "What is an unexplained wealth order?": [
    { href: "/case-types/unexplained-wealth-orders", label: "UWO forensic support" },
    { href: "/glossary#unexplained-wealth-order-uwo", label: "UWO glossary term" },
  ],
  "What is a deferred prosecution agreement (DPA)?": [
    { href: "/case-types/deferred-prosecution-agreement", label: "DPA negotiation" },
    { href: "/guides/dpa-financial-quantification-guide", label: "DPA financial quantification" },
  ],
  "What is the Failure to Prevent Fraud offence?": [
    { href: "/what-is-a-fraud-forensic-accountant", label: "FTPF and forensic accountants" },
    { href: "/who-we-help/corporates-compliance", label: "Corporates and compliance" },
  ],
  "How does a forensic accountant trace cryptocurrency?": [
    { href: "/fraud-types/crypto-fraud-digital-assets", label: "Crypto fraud" },
    { href: "/guides/crypto-fraud-forensic-guide", label: "Crypto fraud guide" },
  ],
  "What is asset tracing and how does it work?": [
    { href: "/who-we-help/civil-fraud-solicitors", label: "Asset tracing for civil fraud" },
    { href: "/services/asset-tracing-recovery", label: "Asset tracing service" },
  ],
  "Should I call the SFO or conduct an internal investigation first?": [
    { href: "/guides/internal-investigation-lpp-guide", label: "Internal investigation and LPP" },
    { href: "/guides/sfo-enforcement-update-2025", label: "SFO enforcement update" },
  ],
  "What credentials should a fraud forensic accountant hold?": [
    { href: "/qualifications", label: "Qualifications and CPR Part 35" },
    { href: "/experts", label: "Our experts" },
  ],
  "How much does a fraud forensic accountant cost?": [
    { href: "/fees", label: "Fees guide" },
    { href: "/how-to-instruct", label: "How to instruct" },
  ],
  "What is legal professional privilege in fraud investigations?": [
    { href: "/guides/internal-investigation-lpp-guide", label: "LPP and internal investigations" },
    { href: "/who-we-help/corporates-compliance", label: "Corporate investigations" },
  ],
};
