import type { ContentPage } from "./types";

export const fraudTypes: ContentPage[] = [
  {
    slug: "corporate-fraud",
    title: "Corporate Fraud",
    metaTitle: "Corporate Fraud Forensic Accountant",
    metaDescription:
      "Corporate fraud forensic accountant: financial statement fraud, management fraud, accounting irregularities, and board-level misconduct in civil and criminal proceedings.",
    h1: "Corporate Fraud Forensic Accountant",
    paragraphs: [
      "Corporate fraud spans management fraud, employee fraud, accounting irregularities, and board-level misconduct. A fraud forensic accountant investigates the financial evidence, quantifies losses, and produces reports for civil recovery, criminal prosecution, or regulatory enforcement.",
      "Management fraud includes directors misusing company assets, undisclosed related-party transactions, and revenue manipulation. Employee fraud at corporate scale may involve procurement kickbacks, expense fraud, or payroll manipulation. Financial statement fraud involves intentional misstatement of accounts to mislead investors, lenders, or regulators.",
      "Civil and criminal routes often run in parallel. Civil proceedings (freezing injunctions, asset tracing, recovery) focus on recovering assets; criminal proceedings address punishment and POCA confiscation. Forensic accountants must understand both frameworks and how they interact in complex corporate fraud matters.",
    ],
    faqs: [
      {
        question: "What types of corporate fraud require a forensic accountant?",
        answer:
          "Corporate fraud requiring forensic accounting expert evidence includes: financial statement fraud (intentional misstatement of accounts); management fraud (directors misusing company assets); accounting irregularities (revenue manipulation, false expense claims at corporate level); M&A fraud (misrepresentation in deal documentation); and procurement fraud at corporate scale. Forensic accountants investigate the financial evidence, quantify losses, and produce reports for civil recovery or criminal proceedings.",
      },
      {
        question: "Can a forensic accountant investigate both civil and criminal corporate fraud simultaneously?",
        answer:
          "Yes. Civil and criminal proceedings can run simultaneously, and often should, as each serves a different purpose. Civil proceedings (freezing injunctions, asset tracing, recovery) are typically faster and more focused on recovery; criminal proceedings address punishment and POCA confiscation. Forensic accountants must understand both frameworks and the interaction between them.",
      },
    ],
    relatedCaseTypes: [
      { slug: "sfo-fraud-investigation", label: "SFO Fraud Investigation" },
      { slug: "corporate-internal-investigation", label: "Corporate Internal Investigation" },
    ],
    relatedServices: ["fraud-investigation-evidence", "civil-fraud-recovery-support"],
  },
  {
    slug: "investment-fraud-ponzi",
    title: "Investment Fraud & Ponzi Schemes",
    metaTitle: "Investment Fraud & Ponzi Scheme Forensic Accountant",
    metaDescription:
      "Investment fraud and Ponzi scheme forensic accountant: investor loss quantification, fund flow tracing, FCA enforcement, and asset recovery for victims.",
    h1: "Investment Fraud & Ponzi Scheme Forensic Accountant",
    paragraphs: [
      "Investment fraud and Ponzi schemes require forensic accountants to reconstruct fund flows, quantify investor losses, and trace dissipated assets. Ponzi structures pay returns from new investor money rather than legitimate investment returns, creating complex tracing challenges when the scheme collapses.",
      "Forensic accountants produce investor loss schedules showing each investor's net loss (contributions minus returns received), total fraud quantum, and asset identification for civil recovery. FCA enforcement frequently runs alongside civil and criminal proceedings in unauthorised investment fraud cases.",
      "False accounting in investment vehicles, misrepresentation in offering documents, and unauthorised financial promotions are common features. Expert evidence on financial flows supports both victim recovery and regulatory enforcement.",
    ],
    faqs: [
      {
        question: "How does a forensic accountant quantify losses in a Ponzi scheme?",
        answer:
          "Ponzi scheme loss quantification involves reconstructing the fund: tracing all investor contributions in, all returns paid out (often from new investor money), and calculating each investor's net loss (contributions minus returns received). This produces both the total fraud quantum and individual investor loss schedules for civil recovery proceedings.",
      },
      {
        question: "What role does the FCA play in investment fraud investigations?",
        answer:
          "The FCA actively investigates and takes enforcement action on investment fraud, including fines for unauthorised financial promotions and insider dealing prosecutions. Forensic accountants assist FCA investigations by analysing financial records and producing expert evidence on the financial flows of the fraudulent scheme.",
      },
    ],
    relatedCaseTypes: [
      { slug: "fca-enforcement-investigation", label: "FCA Enforcement" },
      { slug: "civil-fraud-recovery-proceedings", label: "Civil Fraud Recovery" },
    ],
    relatedServices: ["asset-tracing-recovery", "fraud-investigation-evidence"],
  },
  {
    slug: "bribery-corruption",
    title: "Bribery & Corruption",
    metaTitle: "Bribery & Corruption Forensic Accountant | Bribery Act & SFO",
    metaDescription:
      "Bribery and corruption forensic accountant: Bribery Act 2010, SFO investigations, DPA disgorgement quantification, and failure to prevent bribery cases.",
    h1: "Bribery & Corruption Forensic Accountant | Bribery Act & SFO Investigations",
    paragraphs: [
      "Bribery and corruption investigations under the Bribery Act 2010 require forensic accountants to trace corrupt payments, quantify business benefit received, and support both criminal prosecution and DPA negotiations. Sections 1, 2, 6, and 7 (corporate failure to prevent bribery) create distinct forensic accounting challenges.",
      "The SFO has pursued corporates through DPAs and, in notable cases, jury trial on failure to prevent bribery charges. Forensic accountants establish what was paid, to whom, through what channels, and what benefit the payer obtained.",
      "International corruption cases add cross-border payment tracing, foreign subsidiary analysis, and multi-jurisdiction disclosure. Financial analysis is central to disgorgement figures in DPA negotiations.",
    ],
    faqs: [
      {
        question: "What is the forensic accountant's role in a bribery investigation?",
        answer:
          "In bribery investigations, the forensic accountant traces and quantifies the corrupt payments: establishing what was paid, to whom, through what channels, and what business benefit the payer received. This financial analysis is central to both criminal prosecution (establishing benefit for POCA purposes) and DPA negotiations (establishing the disgorgement figure).",
      },
      {
        question: "How does a DPA work in a bribery case?",
        answer:
          "A DPA is an agreement reached between a prosecutor and a corporate under the supervision of the courts. The corporate avoids prosecution in exchange for financial penalties, disgorgement of profits, enhanced compliance measures, and cooperation with the investigation. The forensic accountant quantifies the financial benefit to be disgorged, the key number around which DPA negotiation revolves.",
      },
    ],
    relatedCaseTypes: [
      { slug: "deferred-prosecution-agreement", label: "DPA Negotiation" },
      { slug: "sfo-fraud-investigation", label: "SFO Investigation" },
    ],
    relatedServices: ["dpa-preparation-support", "sfo-regulatory-support"],
  },
  {
    slug: "money-laundering-aml",
    title: "Money Laundering & AML",
    metaTitle: "Money Laundering & AML Forensic Accountant",
    metaDescription:
      "Money laundering forensic accountant: POCA ss327-329, placement-layering-integration analysis, AML regulatory investigations, and proceeds tracing.",
    h1: "Money Laundering & AML Forensic Accountant",
    paragraphs: [
      "Money laundering forensic accounting reconstructs the placement-layering-integration chain: how criminally obtained funds entered the financial system, were moved through complex transactions to obscure origin, and were integrated into the legitimate economy.",
      "POCA money laundering offences (sections 327-329) require analysis of knowledge, suspicion, and fund provenance. Forensic accountants trace laundered proceeds and produce evidence for both prosecution and defence.",
      "AML regulatory investigations by the FCA increasingly target legal, accountancy, and trust service providers. Forensic accountants analyse suspicious transaction patterns, assess control adequacy, and produce independent reports.",
    ],
    faqs: [
      {
        question: "How does a forensic accountant analyse money laundering?",
        answer:
          "Money laundering forensic analysis involves reconstructing the placement-layering-integration chain: tracing how criminally obtained funds entered the financial system (placement), were moved through complex transactions to obscure origin (layering), and were finally integrated into the legitimate economy (integration). Transaction mapping and fund flow analysis are the core forensic tools.",
      },
      {
        question: "What is the role of a forensic accountant in AML regulatory investigations?",
        answer:
          "The FCA is consolidating AML/CTF supervision of legal, accountancy, and trust and company service providers, with powers to register firms, conduct gatekeeping checks, impose civil penalties, and initiate criminal proceedings. Forensic accountants assist regulated firms facing FCA AML investigations by analysing suspicious transaction patterns, assessing the adequacy of controls, and producing independent reports for the regulator.",
      },
    ],
    relatedCaseTypes: [
      { slug: "money-laundering-proceedings", label: "Money Laundering Proceedings" },
      { slug: "poca-confiscation-defence", label: "POCA Confiscation" },
    ],
    relatedServices: ["asset-tracing-recovery", "poca-confiscation-analysis"],
  },
  {
    slug: "crypto-fraud-digital-assets",
    title: "Crypto Fraud & Digital Assets",
    metaTitle: "Crypto Fraud Forensic Accountant | Blockchain Analysis",
    metaDescription:
      "Crypto fraud forensic accountant: blockchain analysis, wallet tracing, POCA crypto recovery, and FCA cryptoasset regulation from October 2027.",
    h1: "Crypto Fraud Forensic Accountant | Blockchain Analysis & Digital Asset Recovery",
    paragraphs: [
      "Crypto fraud forensic accounting uses blockchain analysis tools to trace wallet-to-wallet transactions, following stolen cryptocurrency through potentially thousands of obfuscating transfers. Forensic accountants identify wallet addresses, map transaction history, and produce court-admissible findings on asset location and value.",
      "Part 5 POCA has been amended to allow civil recovery of crypto-assets without requiring criminal conviction. Exchange account analysis, NFT and DeFi fraud investigation, and cross-chain tracing are increasingly standard in fraud proceedings.",
      "The Treasury's cryptoasset regulatory framework brings fungible and transferable cryptoassets under full financial services regulation from October 2027, increasing compliance expectations and enforcement activity in the digital asset sector.",
    ],
    faqs: [
      {
        question: "How does a forensic accountant trace stolen cryptocurrency?",
        answer:
          "Crypto forensic accounting uses blockchain analysis tools (Chainalysis, Elliptic) to trace wallet-to-wallet transactions, following the movement of stolen cryptocurrency through potentially thousands of transactions designed to obscure the trail. The forensic accountant identifies wallet addresses associated with the respondent, maps the transaction history, and produces court-admissible findings on asset location and value.",
      },
      {
        question: "Can stolen cryptocurrency be recovered through courts?",
        answer:
          "Part 5 POCA has been specifically amended to allow for recovery of crypto-assets through civil recovery orders, targeting the property itself rather than requiring criminal conviction. Forensic accountants provide the financial evidence establishing that the crypto represents property obtained through unlawful conduct, supporting the civil recovery application.",
      },
    ],
    relatedCaseTypes: [
      { slug: "civil-fraud-recovery-proceedings", label: "Civil Fraud Recovery" },
      { slug: "money-laundering-proceedings", label: "Money Laundering" },
    ],
    relatedServices: ["crypto-fraud-investigation", "asset-tracing-recovery"],
  },
  {
    slug: "tax-fraud-hmrc",
    title: "Tax Fraud & HMRC",
    metaTitle: "Tax Fraud & HMRC Investigation Forensic Accountant",
    metaDescription:
      "Tax fraud forensic accountant: COP8 and COP9 investigations, tax evasion analysis, and HMRC Strengthened Reward Scheme whistleblower cases.",
    h1: "Tax Fraud & HMRC Investigation Forensic Accountant",
    paragraphs: [
      "HMRC fraud investigations range from COP8 civil fraud procedures to COP9 criminal investigations in the most serious cases. Forensic accountants reconstruct financial records, quantify the tax position, and support both taxpayer disclosure and defence.",
      "COP8 offers opportunity for full disclosure and payment of tax, interest, and penalties where HMRC suspects fraud. COP9 signals potential criminal prosecution. The distinction determines forensic approach and urgency.",
      "HMRC's Strengthened Reward Scheme offers informants 15-30% of tax recovered over £1.5 million in serious cases, increasing whistleblower-triggered investigations. Corporates benefit from independent forensic analysis before HMRC contact.",
    ],
    faqs: [
      {
        question: "What is the difference between COP8 and COP9 HMRC investigations?",
        answer:
          "COP8 is HMRC's civil fraud investigation procedure, used where HMRC suspects fraud but offers the taxpayer the opportunity to make a full disclosure and pay all tax, interest, and penalties. COP9 is HMRC's criminal investigation procedure, used in the most serious fraud cases where HMRC considers criminal prosecution may be appropriate. Forensic accountants assist with reconstructing financial records and quantifying the tax position in both procedures.",
      },
      {
        question: "How does the HMRC whistleblower reward scheme work?",
        answer:
          "HMRC's Strengthened Reward Scheme offers informants 15-30% of tax recovered over £1.5 million in serious tax cases, representing a significant shift from a traditionally limited approach to whistleblower rewards. Forensic accountants assist corporates facing whistleblower-triggered investigations by conducting independent financial analysis before HMRC contacts them.",
      },
    ],
    relatedCaseTypes: [
      { slug: "hmrc-fraud-investigation", label: "HMRC Investigation" },
    ],
    relatedServices: ["fraud-investigation-evidence", "sfo-regulatory-support"],
  },
  {
    slug: "procurement-fraud-public-sector",
    title: "Procurement Fraud",
    metaTitle: "Procurement Fraud Forensic Accountant | Public Sector",
    metaDescription:
      "Procurement fraud forensic accountant: contract steering, fictitious suppliers, kickback schemes, and loss quantification in public and commercial sectors.",
    h1: "Procurement Fraud Forensic Accountant | Public Sector & Commercial",
    paragraphs: [
      "Procurement fraud includes contract steering, fictitious suppliers, kickback schemes, and split orders designed to avoid tender thresholds. Forensic accountants analyse procurement records against contract awards, identify suspicious patterns, and trace kickback payment flows.",
      "Public sector procurement fraud causes significant taxpayer loss; commercial organisations face equivalent risks in supplier relationships and tender processes. Loss quantification covers overpricing, fictitious services, and diverted contract value.",
      "Civil fraud claims (freezing injunctions, asset tracing, conspiracy) can run alongside or instead of criminal prosecution. Forensic accountants quantify fraud proceeds and total organisational loss for both routes.",
    ],
    faqs: [
      {
        question: "What forensic accounting evidence is needed in procurement fraud cases?",
        answer:
          "Procurement fraud investigation involves: analysing procurement records against contract awards; identifying patterns suggesting steering (single-source awards, unusual pricing, split orders); tracing payments to identify kickback flows; and quantifying the total loss to the organisation from overpricing or fictitious services. Forensic accountants produce evidence-quality findings for civil or criminal proceedings.",
      },
      {
        question: "Can procurement fraud be pursued civilly as well as criminally?",
        answer:
          "Yes. Civil fraud claims (freezing injunctions, asset tracing, conspiracy claims) run alongside or instead of criminal prosecution for procurement fraud. Civil proceedings focus on recovery of the stolen funds and compensation for the organisation's loss. Forensic accountants quantify both the fraud proceeds and the total loss.",
      },
    ],
    relatedCaseTypes: [
      { slug: "civil-fraud-recovery-proceedings", label: "Civil Fraud Recovery" },
      { slug: "private-prosecution-fraud", label: "Private Prosecution" },
    ],
    relatedServices: ["fraud-investigation-evidence", "civil-fraud-recovery-support"],
  },
  {
    slug: "financial-statement-fraud",
    title: "Financial Statement Fraud",
    metaTitle: "Financial Statement Fraud Forensic Accountant",
    metaDescription:
      "Financial statement fraud forensic accountant: revenue recognition fraud, false accounting, Fraud Act s4, and SFO enforcement support.",
    h1: "Financial Statement Fraud Forensic Accountant",
    paragraphs: [
      "Financial statement fraud involves intentional manipulation of accounts: inflated revenue, understated liabilities, concealed losses, and improper period-end entries. Forensic accountants analyse journal entries, compare published accounts to underlying records, and quantify misstatement impact.",
      "False accounting under the Theft Act section 17 and Fraud Act 2006 section 4 (abuse of position) provide criminal routes. FCA and SFO enforcement against directors and companies for financial misstatement has intensified under the reinvigorated SFO approach.",
      "Under Nick Ephgrave's leadership, the SFO opened 8 new investigations in 2025 with 5 cases listed for trial in 2026. Forensic accountants provide independent analysis supporting or challenging prosecution financial reconstructions.",
    ],
    faqs: [
      {
        question: "How does a forensic accountant investigate financial statement fraud?",
        answer:
          "Financial statement fraud investigation involves: analysing accounting records for indicators of manipulation (journal entry analysis, variance analysis, unusual period-end entries); comparing published accounts against underlying records; identifying specific misstatements (inflated revenue, understated liabilities, concealed losses); and quantifying the impact of each misstatement on the reported financial position.",
      },
      {
        question: "What is the forensic accountant's role in SFO financial statement fraud investigations?",
        answer:
          "Under the reinvigorated SFO approach, forensic accountants play a central role in providing independent financial analysis that supports or challenges the prosecution's reconstruction of the financial misstatements. They may be instructed by defence teams, by the SFO itself, or jointly in complex cases.",
      },
    ],
    relatedCaseTypes: [
      { slug: "sfo-fraud-investigation", label: "SFO Investigation" },
      { slug: "fca-enforcement-investigation", label: "FCA Enforcement" },
    ],
    relatedServices: ["expert-witness-reports", "fraud-investigation-evidence"],
  },
];

export function getFraudType(slug: string) {
  return fraudTypes.find((f) => f.slug === slug);
}
