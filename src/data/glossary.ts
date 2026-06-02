import type { FaqItem } from "@/lib/schema";

export const glossaryTerms: (FaqItem & { slug?: string })[] = [
  {
    question: "Asset Tracing",
    answer:
      "The forensic process of following fraud proceeds through accounts, entities, and jurisdictions to identify recoverable property. Used in freezing injunctions, civil recovery, and POCA proceedings.",
    slug: "/services#asset-tracing-recovery",
  },
  {
    question: "Benefit from Criminal Conduct (POCA)",
    answer:
      "The total value of property obtained through criminal conduct, calculated on a gross proceeds basis for confiscation purposes under POCA Part 2.",
  },
  {
    question: "Bribery Act 2010",
    answer:
      "UK legislation criminalising bribery including the corporate offence of failure to prevent bribery (section 7). Central to SFO investigations and DPA negotiations.",
  },
  {
    question: "CAMS (Certified Anti-Money Laundering Specialist)",
    answer:
      "ACAMS qualification for AML specialists, relevant for money laundering investigations and regulatory proceedings.",
    slug: "/qualifications",
  },
  {
    question: "CFE (Certified Fraud Examiner)",
    answer:
      "ACFE qualification covering fraud prevention, detection, and investigation. Primary credential for fraud forensic accountants.",
    slug: "/qualifications",
  },
  {
    question: "Civil Recovery Order (POCA Part 5)",
    answer:
      "High Court order for recovery of property obtained through unlawful conduct without requiring criminal conviction, decided on balance of probabilities.",
    slug: "/fraud-forensic-accounting-explained",
  },
  {
    question: "Confiscation Order (POCA Part 2)",
    answer:
      "Order following criminal conviction requiring payment of the lesser of benefit from criminal conduct and available assets.",
    slug: "/fraud-forensic-accounting-explained",
  },
  {
    question: "CPR Part 35",
    answer:
      "Civil Procedure Rules governing expert evidence in civil proceedings. Experts owe a primary duty to the court and must be independent and objective.",
    slug: "/qualifications",
  },
  {
    question: "Criminal Procedure Rules Part 33 (CrPR 33)",
    answer:
      "Rules governing expert evidence in criminal proceedings, requiring independence, objectivity, and declaration of duties to the court.",
    slug: "/qualifications",
  },
  {
    question: "Cryptoasset Recovery (POCA)",
    answer:
      "Part 5 POCA amended to allow civil recovery of crypto-assets as property obtained through unlawful conduct.",
    slug: "/fraud-types/crypto-fraud-digital-assets",
  },
  {
    question: "DAML (Defence Against Money Laundering)",
    answer:
      "Consent application to the NCA when a regulated firm suspects funds in its possession are criminal proceeds.",
  },
  {
    question: "Deferred Prosecution Agreement (DPA)",
    answer:
      "Agreement deferring corporate prosecution in exchange for cooperation, remediation, and financial settlement comprising disgorgement, penalty, and costs.",
    slug: "/case-types/deferred-prosecution-agreement",
  },
  {
    question: "Disgorgement",
    answer:
      "Recovery of net benefit obtained from misconduct, central to DPA financial settlements.",
    slug: "/guides/dpa-financial-quantification-guide",
  },
  {
    question: "Economic Crime and Corporate Transparency Act 2023 (ECCTA)",
    answer:
      "Legislation introducing the Failure to Prevent Fraud offence and corporate transparency reforms.",
  },
  {
    question: "Failure to Prevent Fraud (FTPF)",
    answer:
      "Offence making large organisations criminally liable for employee fraud committed for organisational benefit, in force from 1 September 2025.",
    slug: "/case-types/sfo-fraud-investigation",
  },
  {
    question: "FCA Enforcement",
    answer:
      "Financial Conduct Authority regulatory action including market abuse, insider dealing, and unauthorised financial promotions.",
    slug: "/case-types/fca-enforcement-investigation",
  },
  {
    question: "Financial Statement Fraud",
    answer:
      "Intentional misstatement of accounts including revenue manipulation and concealed liabilities.",
    slug: "/fraud-types/financial-statement-fraud",
  },
  {
    question: "Freezing Order (Mareva Injunction)",
    answer:
      "Court order preventing disposal of assets pending trial, requiring evidence of good arguable case and risk of dissipation.",
    slug: "/case-types/civil-fraud-recovery-proceedings",
  },
  {
    question: "The Ikarian Reefer Duties",
    answer:
      "Leading case establishing expert witness duties of independence, objectivity, and primary duty to the court in civil proceedings.",
  },
  {
    question: "Interim Freezing Order (UWO)",
    answer:
      "Freezing order accompanying a UWO preventing disposal of specified property while the respondent provides explanations.",
    slug: "/case-types/unexplained-wealth-orders",
  },
  {
    question: "Joint Statement (Expert Witnesses)",
    answer:
      "Document recording areas of agreement and disagreement between opposing experts, required in many civil and criminal cases.",
  },
  {
    question: "Legal Professional Privilege (LPP)",
    answer:
      "Protection for confidential legal advice and litigation documents. Essential for internal investigations conducted via external counsel.",
    slug: "/who-we-help/corporates-compliance",
  },
  {
    question: "Money Laundering (POCA ss327-329)",
    answer:
      "Offences of concealing, converting, transferring, and acquiring criminal property under POCA.",
    slug: "/fraud-types/money-laundering-aml",
  },
  {
    question: "Newton Hearing (POCA)",
    answer:
      "Judge-only hearing to determine disputed facts relevant to confiscation, including benefit and available assets.",
  },
  {
    question: "Norwich Pharmacal Order",
    answer:
      "Order requiring third parties to disclose information identifying wrongdoers, used in fraud asset tracing.",
    slug: "/who-we-help/civil-fraud-solicitors",
  },
  {
    question: "POCA 2002 (Proceeds of Crime Act)",
    answer:
      "Primary UK legislation for criminal confiscation (Part 2) and civil recovery (Part 5) of proceeds of crime.",
    slug: "/fraud-forensic-accounting-explained",
  },
  {
    question: "Private Prosecution",
    answer:
      "Criminal proceedings brought by a private individual or entity when the state declines to prosecute.",
    slug: "/case-types/private-prosecution-fraud",
  },
  {
    question: "Restraint Order",
    answer:
      "Order freezing assets during criminal investigation before conviction, under POCA.",
  },
  {
    question: "Section 2 Notice (SFO)",
    answer:
      "SFO compulsory notice requiring answers to questions or document production under the Criminal Justice Act 1987.",
    slug: "/case-types/sfo-fraud-investigation",
  },
  {
    question: "Serious Fraud Office (SFO)",
    answer:
      "UK agency investigating and prosecuting serious fraud, bribery, and corruption. Reinvigorated approach under Nick Ephgrave from 2025.",
    slug: "/case-types/sfo-fraud-investigation",
  },
  {
    question: "Tainted Gift (POCA)",
    answer:
      "Gift of property representing criminal benefit, recoverable in confiscation proceedings.",
  },
  {
    question: "Unexplained Wealth Order (UWO)",
    answer:
      "High Court order requiring explanation of property worth over £50,000 where legitimate income is suspected insufficient.",
    slug: "/case-types/unexplained-wealth-orders",
  },
  {
    question: "White Collar Crime",
    answer:
      "Non-violent financial crime typically involving fraud, bribery, money laundering, and corporate misconduct.",
  },
  {
    question: "Whistleblower Incentive (HMRC Reward Scheme)",
    answer:
      "HMRC Strengthened Reward Scheme offering informants 15-30% of tax recovered over £1.5 million in serious cases.",
  },
  {
    question: "Without Notice Application",
    answer:
      "Court application made without the respondent present, common for urgent freezing injunctions in fraud cases.",
  },
];
