import type { FaqItem } from "@/lib/schema";

export type Service = {
  id: string;
  title: string;
  short: string;
  methodology: { step: string; detail: string }[];
  fraudType: string;
  caseType: string;
  faqs: FaqItem[];
};

export const services: Service[] = [
  {
    id: "fraud-investigation-evidence",
    title: "Fraud Investigation & Evidence Building",
    short:
      "Forensic investigation of suspected fraud, evidence preservation, and prosecution-quality financial analysis.",
    methodology: [
      { step: "Intake & scoping", detail: "Define allegations, parties, period, and legal framework (civil, criminal, regulatory)." },
      { step: "Document preservation", detail: "Secure bank records, accounting systems, emails, and transaction data." },
      { step: "Financial reconstruction", detail: "Rebuild transaction flows and identify irregularities." },
      { step: "Quantification", detail: "Calculate fraud quantum and individual loss schedules." },
      { step: "Reporting", detail: "Produce investigation reports or expert reports under CPR Part 35 or CrPR Part 33." },
    ],
    fraudType: "corporate-fraud",
    caseType: "corporate-internal-investigation",
    faqs: [
      {
        question: "When should I instruct a fraud forensic accountant for an investigation?",
        answer:
          "Instruct as soon as fraud is suspected and before key evidence is destroyed or accounts are closed. Early instruction preserves transaction data, supports freezing injunction applications, and ensures investigation findings are available for civil, criminal, or regulatory decisions.",
      },
      {
        question: "What deliverables does a fraud investigation produce?",
        answer:
          "Deliverables typically include a forensic investigation report, transaction schedules, loss quantification, and where required a CPR Part 35 or CrPR Part 33 expert report suitable for court proceedings.",
      },
    ],
  },
  {
    id: "asset-tracing-recovery",
    title: "Asset Tracing & Recovery",
    short: "Tracing fraud proceeds through accounts, entities, and jurisdictions to support recovery.",
    methodology: [
      { step: "Record analysis", detail: "Bank statements, investment accounts, corporate records." },
      { step: "Entity mapping", detail: "Corporate structures, beneficial ownership, connected parties." },
      { step: "Transaction tracing", detail: "Fund flows between accounts and entities." },
      { step: "Asset identification", detail: "Properties, vehicles, investments, crypto wallets." },
      { step: "Cross-border tracing", detail: "Offshore accounts, foreign properties, MLA support." },
    ],
    fraudType: "money-laundering-aml",
    caseType: "civil-fraud-recovery-proceedings",
    faqs: [
      {
        question: "How quickly can asset tracing support a freezing injunction?",
        answer:
          "Preliminary asset tracing for without-notice freezing applications is typically delivered within 24-48 hours, identifying accounts, properties, and entities where dissipation risk exists.",
      },
      {
        question: "Can assets be traced across multiple jurisdictions?",
        answer:
          "Yes. Cross-border tracing uses corporate registry data, correspondent bank information, and mutual legal assistance to follow funds through offshore structures and foreign accounts.",
      },
    ],
  },
  {
    id: "poca-confiscation-analysis",
    title: "POCA Confiscation Analysis",
    short: "Benefit calculation, available assets assessment, and confiscation defence support.",
    methodology: [
      { step: "Benefit review", detail: "Analyse prosecution benefit calculations." },
      { step: "Legitimate source analysis", detail: "Identify receipts incorrectly included in benefit." },
      { step: "Available assets", detail: "Value assets for Section 7 POCA purposes." },
      { step: "Tainted gifts", detail: "Challenge or support alleged gifts of criminal proceeds." },
      { step: "Expert reporting", detail: "Newton hearing and appeal support." },
    ],
    fraudType: "money-laundering-aml",
    caseType: "poca-confiscation-defence",
    faqs: [
      {
        question: "How does a forensic accountant challenge POCA benefit figures?",
        answer:
          "The defence expert reviews prosecution schedules, identifies legitimate business receipts wrongly included, demonstrates alternative sources of funds, and produces a revised benefit calculation for the confiscation hearing or Newton hearing.",
      },
      {
        question: "What is included in available assets analysis?",
        answer:
          "Available assets analysis identifies all property held by the defendant that can satisfy a confiscation order, values each asset, and addresses third-party interests and tainted gifts.",
      },
    ],
  },
  {
    id: "civil-fraud-recovery-support",
    title: "Civil Fraud Recovery Support",
    short:
      "Freezing injunction evidence, proprietary tracing, and civil fraud quantum for High Court proceedings.",
    methodology: [
      { step: "Urgent quantum", detail: "Preliminary loss assessment for without-notice applications." },
      { step: "Tracing", detail: "Following and tracing claims through account chains." },
      { step: "Knowing receipt analysis", detail: "Financial evidence for accessory liability." },
      { step: "CPR Part 35 reports", detail: "Court-compliant expert evidence." },
      { step: "Trial support", detail: "Expert testimony in civil fraud trials." },
    ],
    fraudType: "corporate-fraud",
    caseType: "civil-fraud-recovery-proceedings",
    faqs: [
      {
        question: "What financial evidence is needed for a civil fraud freezing injunction?",
        answer:
          "The court requires evidence of a good arguable case, identifiable assets, and real risk of dissipation. Forensic accountants provide preliminary quantum of loss and preliminary asset identification to support the without-notice application.",
      },
      {
        question: "What is the difference between proprietary tracing and damages claims?",
        answer:
          "Proprietary tracing follows fraud proceeds into specific assets the claimant can recover. Damages claims quantify overall loss where tracing into identifiable property is not possible. Forensic accountants support both, often in parallel.",
      },
    ],
  },
  {
    id: "sfo-regulatory-support",
    title: "SFO & Regulatory Investigation Support",
    short: "Financial analysis for SFO, FCA, HMRC, and NCA investigations and defence.",
    methodology: [
      { step: "Document review", detail: "Section 2 production and disclosure analysis." },
      { step: "Financial reconstruction", detail: "Rebuild the financial picture from disclosed materials." },
      { step: "Challenge analysis", detail: "Identify weaknesses in agency financial theories." },
      { step: "Interview preparation", detail: "Financial aspects of Section 2 interviews." },
      { step: "Expert evidence", detail: "Crown Court and regulatory proceedings support." },
    ],
    fraudType: "bribery-corruption",
    caseType: "sfo-fraud-investigation",
    faqs: [
      {
        question: "How does a forensic accountant assist with SFO Section 2 notices?",
        answer:
          "Before document production, the forensic accountant reviews financial materials, flags privilege issues, and reconstructs the financial narrative the SFO will develop, allowing defence counsel to prepare effectively.",
      },
      {
        question: "Can the same expert support FCA and SFO matters?",
        answer:
          "Yes, provided there is no conflict of interest. Forensic accountants familiar with both regulatory and criminal frameworks produce analysis addressing trading records, financial promotions, or corporate accounts as required.",
      },
    ],
  },
  {
    id: "dpa-preparation-support",
    title: "DPA Preparation & Negotiation Support",
    short: "Disgorgement quantification, penalty modelling, and financial evidence for DPA negotiations.",
    methodology: [
      { step: "Scope quantification", detail: "Full financial scope of misconduct." },
      { step: "Disgorgement calculation", detail: "Net benefit to the organisation from wrongdoing." },
      { step: "Penalty modelling", detail: "Financial penalty scenarios." },
      { step: "Self-reporting pack", detail: "Financial evidence for disclosure." },
      { step: "Negotiation support", detail: "Ongoing financial analysis during DPA talks." },
    ],
    fraudType: "bribery-corruption",
    caseType: "deferred-prosecution-agreement",
    faqs: [
      {
        question: "What financial analysis is required before SFO self-reporting?",
        answer:
          "Corporates need a full quantification of misconduct scope, disgorgement exposure, and penalty scenarios before self-reporting. Forensic accountants produce the financial evidence pack underpinning the disclosure and subsequent DPA negotiation.",
      },
      {
        question: "How is disgorgement calculated in a DPA?",
        answer:
          "Disgorgement is the net benefit the organisation obtained from the misconduct. Forensic accountants trace profits or losses avoided through organisational accounts, netting legitimate costs attributable to tainted activity.",
      },
    ],
  },
  {
    id: "crypto-fraud-investigation",
    title: "Crypto Fraud Investigation",
    short: "Blockchain analysis, wallet tracing, and POCA crypto recovery support.",
    methodology: [
      { step: "Blockchain analysis", detail: "Wallet-to-wallet transaction tracing." },
      { step: "Exchange analysis", detail: "Centralised exchange account identification." },
      { step: "Valuation", detail: "Crypto asset valuation at relevant dates." },
      { step: "POCA support", detail: "Part 5 civil recovery of crypto-assets." },
      { step: "Expert reporting", detail: "Court-admissible findings on asset location." },
    ],
    fraudType: "crypto-fraud-digital-assets",
    caseType: "money-laundering-proceedings",
    faqs: [
      {
        question: "Can stolen cryptocurrency be traced and recovered in proceedings?",
        answer:
          "Yes. Blockchain analysis traces wallet flows, identifies exchange accounts, and supports Part 5 POCA civil recovery of crypto-assets as property obtained through unlawful conduct.",
      },
      {
        question: "What tools do crypto fraud forensic accountants use?",
        answer:
          "Forensic accountants use blockchain analytics platforms such as Chainalysis and Elliptic, combined with exchange subpoenas and on-chain analysis, to produce court-admissible tracing reports.",
      },
    ],
  },
  {
    id: "expert-witness-reports",
    title: "Expert Witness Reports & Testimony",
    short: "CPR Part 35 and CrPR Part 33 compliant expert reports and court testimony.",
    methodology: [
      { step: "Instructions", detail: "Clear scope, assumptions, and questions for the expert." },
      { step: "Analysis", detail: "Independent objective financial analysis." },
      { step: "Report drafting", detail: "Compliant structure, declaration, statement of truth." },
      { step: "Joint statement", detail: "Discussion with opposing expert where required." },
      { step: "Testimony", detail: "Court attendance for cross-examination." },
    ],
    fraudType: "financial-statement-fraud",
    caseType: "sfo-fraud-investigation",
    faqs: [
      {
        question: "What is the difference between CPR Part 35 and CrPR Part 33 expert reports?",
        answer:
          "CPR Part 35 governs civil expert evidence in the High Court; CrPR Part 33 governs criminal expert evidence in Crown Court proceedings. Both require independence, objectivity, and a primary duty to the court.",
      },
      {
        question: "How long does a complex fraud expert report take to produce?",
        answer:
          "Standard civil fraud reports may take 4-8 weeks. Complex POCA or SFO expert reports involving extensive document review can take 8-16 weeks or longer depending on data volume and scope.",
      },
    ],
  },
];

export function getService(id: string) {
  return services.find((s) => s.id === id);
}
