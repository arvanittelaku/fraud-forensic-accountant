import type { ContentPage } from "./types";

export const caseTypes: ContentPage[] = [
  {
    slug: "sfo-fraud-investigation",
    title: "SFO Fraud Investigation",
    metaTitle: "SFO Fraud Investigation Forensic Accountant",
    metaDescription:
      "SFO fraud investigation forensic accountant: Section 2 notices, defence support, 2025 reinvigoration, and self-reporting implications.",
    h1: "SFO Fraud Investigation Forensic Accountant",
    paragraphs: [
      "The Serious Fraud Office investigates and prosecutes serious or complex fraud, bribery, and corruption. Section 2 notices under the Criminal Justice Act 1987 compel document production and answers to questions. Forensic accountants assist defence teams by reviewing financial materials before production and reconstructing the financial picture from disclosure.",
      "Under Director Nick Ephgrave, the SFO has adopted a more proactive approach: 8 new investigations opened in 2025 and 5 cases listed for trial in 2026. Corporates facing SFO interest must understand both investigation defence and self-reporting pathways.",
      "Updated 2025 SFO/CPS corporate self-reporting guidance states that where a corporate self-reports and fully cooperates, it can expect to be invited to negotiate a DPA rather than face prosecution. Forensic accountants quantify wrongdoing before self-reporting so companies negotiate from an informed position.",
    ],
    faqs: [
      {
        question: "What is a Section 2 notice and how does a forensic accountant assist?",
        answer:
          "A Section 2 notice under the Criminal Justice Act 1987 compels the recipient to answer questions or produce documents to the SFO. Forensic accountants assist defence teams by reviewing financial documents before production, identifying privileged materials, and reconstructing the financial picture that will emerge from disclosure.",
      },
      {
        question: "Should a corporate self-report to the SFO and what does a forensic accountant do?",
        answer:
          "Where a corporate self-reports and fully cooperates, it can now expect to be invited to negotiate a DPA rather than face prosecution. Forensic accountants quantify the scope of wrongdoing before self-reporting so the company knows its financial exposure and can negotiate from an informed position.",
      },
    ],
    relatedFraudTypes: [
      { slug: "bribery-corruption", label: "Bribery & Corruption" },
      { slug: "financial-statement-fraud", label: "Financial Statement Fraud" },
    ],
    relatedServices: ["sfo-regulatory-support", "dpa-preparation-support"],
  },
  {
    slug: "poca-confiscation-defence",
    title: "POCA Confiscation Defence",
    metaTitle: "POCA Confiscation Defence Forensic Accountant",
    metaDescription:
      "POCA confiscation defence forensic accountant: benefit calculation challenges, available assets, tainted gifts, and Newton hearings.",
    h1: "POCA Confiscation Defence Forensic Accountant",
    paragraphs: [
      "Following conviction, the court may make a confiscation order under POCA Part 2. Benefit from criminal conduct is calculated on a gross proceeds basis (all payments from criminal activity, not net gain). Available assets are assessed; the order equals the lesser of benefit and available assets.",
      "Defence forensic accountants challenge prosecution benefit figures by identifying legitimate business receipts incorrectly included, demonstrating legitimate fund sources, and challenging attribution of corporate receipts to individuals.",
      "Tainted gifts, third-party interests, and Newton hearings on disputed financial facts require specialist forensic accounting expert evidence under CrPR Part 33.",
    ],
    faqs: [
      {
        question: "How does a forensic accountant challenge the prosecution's POCA benefit figure?",
        answer:
          "The prosecution calculates benefit from criminal conduct by identifying all payments and transfers to the defendant arising from criminal activity. Defence forensic accountants challenge this by: identifying legitimate business receipts incorrectly included; demonstrating funds had a legitimate source; and challenging the attribution of corporate receipts to individuals.",
      },
      {
        question: "What is a Newton hearing in POCA confiscation?",
        answer:
          "A Newton hearing is a hearing before the judge (without a jury) to determine disputed facts relevant to the confiscation order, including the amount of benefit and the value of available assets. Forensic accountants give expert evidence at Newton hearings on the financial calculations underpinning the confiscation order.",
      },
    ],
    relatedFraudTypes: [{ slug: "money-laundering-aml", label: "Money Laundering" }],
    relatedServices: ["poca-confiscation-analysis", "expert-witness-reports"],
  },
  {
    slug: "civil-fraud-recovery-proceedings",
    title: "Civil Fraud Recovery",
    metaTitle: "Civil Fraud Recovery Forensic Accountant",
    metaDescription:
      "Civil fraud recovery forensic accountant: freezing injunctions, proprietary tracing, knowing receipt, and CPR Part 35 expert evidence.",
    h1: "Civil Fraud Recovery Forensic Accountant",
    paragraphs: [
      "High Court civil fraud proceedings include proprietary claims (tracing fraudulently taken assets), personal claims (compensatory damages), knowing receipt, and dishonest assistance. Forensic accountants trace assets and quantify loss for both claim types.",
      "Freezing injunction applications require evidence of a good arguable case, identifiable assets, and real risk of dissipation. Forensic accountants provide urgent preliminary quantum evidence and preliminary asset tracing, typically within 24-48 hours.",
      "CPR Part 35 expert reports must comply with the expert's primary duty to the court. Fraud forensic accountants produce independent objective analysis for Chancery and Commercial Court civil fraud trials.",
    ],
    faqs: [
      {
        question: "What is the difference between proprietary and personal claims in civil fraud recovery?",
        answer:
          "A proprietary claim asserts that the claimant still owns the fraudulently taken assets, tracing them into the defendant's hands. A personal claim seeks compensatory damages for the loss suffered. Forensic accountants trace the assets for proprietary claims and quantify the loss for personal claims. Both typically run together.",
      },
      {
        question: "How does a forensic accountant support a freezing injunction application in civil fraud?",
        answer:
          "Freezing injunction applications require evidence of: a good arguable case on the merits; identifiable assets; and a real risk of dissipation. Forensic accountants provide urgent preliminary quantum evidence (the good arguable case financial component) and preliminary asset tracing to identify assets at risk, typically within 24-48 hours.",
      },
    ],
    relatedFraudTypes: [{ slug: "corporate-fraud", label: "Corporate Fraud" }],
    relatedServices: ["civil-fraud-recovery-support", "asset-tracing-recovery"],
  },
  {
    slug: "unexplained-wealth-orders",
    title: "Unexplained Wealth Orders",
    metaTitle: "Unexplained Wealth Order Forensic Accountant",
    metaDescription:
      "UWO forensic accountant: £50,000 threshold, interim freezing orders, SFO enforcement, and forensic rebuttal methodology.",
    h1: "Unexplained Wealth Order Forensic Accountant",
    paragraphs: [
      "Unexplained Wealth Orders (UWOs) require respondents to explain how they obtained specified property worth more than £50,000 where enforcement agencies have reasonable grounds to suspect insufficient legitimate income. The SFO, NCA, HMRC, CPS, and FCA may apply.",
      "Failure to provide an adequate explanation creates a rebuttable presumption that property is recoverable under POCA. Early forensic accounting to trace the audit trail of acquisition funds is essential for effective response.",
      "The UWO annual report published in February 2026 confirms active enforcement. The SFO obtained a UWO in January 2025. Forensic accountants assist both applicants building financial evidence and respondents proving legitimate wealth sources.",
    ],
    faqs: [
      {
        question: "What must a respondent do when served with a UWO?",
        answer:
          "A UWO requires the respondent to produce a statement of their interest in the specified property, the nature and extent of that interest, and explain how the property was obtained. Forensic accountants work with solicitors to reconstruct the financial history proving that wealth is derived from legitimate sources, tracing the audit trail of the funds used for the acquisition.",
      },
      {
        question: "What happens if you don't respond to a UWO?",
        answer:
          "Failure to provide an explanation in response to a UWO creates a rebuttable presumption that the property is recoverable property under POCA, making it significantly easier for the enforcement authority to obtain a civil recovery order. Early forensic accounting analysis is essential to mount an effective response.",
      },
    ],
    relatedFraudTypes: [{ slug: "money-laundering-aml", label: "Money Laundering" }],
    relatedServices: ["asset-tracing-recovery", "civil-fraud-recovery-support"],
  },
  {
    slug: "deferred-prosecution-agreement",
    title: "Deferred Prosecution Agreement",
    metaTitle: "DPA Negotiation Forensic Accountant | Financial Settlement",
    metaDescription:
      "DPA negotiation forensic accountant: disgorgement calculation, penalty modelling, and SFO self-reporting financial evidence.",
    h1: "DPA Negotiation Forensic Accountant | Quantifying the Financial Settlement",
    paragraphs: [
      "A Deferred Prosecution Agreement (DPA) defers prosecution of a corporate in exchange for cooperation, remediation, and financial payment under court supervision. The financial settlement comprises disgorgement, financial penalty (typically equal to or greater than disgorgement), and costs.",
      "SFO 2025 guidance explicitly links self-reporting and full cooperation to DPA invitation. Forensic accountants quantify the scope of misconduct and model disgorgement before disclosure, establishing the foundation for negotiation.",
      "Disgorgement represents net benefit the organisation obtained from misconduct. Forensic accountants trace financial benefit through organisational accounts, netting legitimate costs from tainted activity.",
    ],
    faqs: [
      {
        question: "How is the disgorgement figure in a DPA calculated?",
        answer:
          "Disgorgement represents the net benefit the organisation obtained from the misconduct: profits made or losses avoided as a direct result of the fraudulent or corrupt conduct. Forensic accountants calculate this by tracing the financial benefit through the organisation's accounts, netting off legitimate costs and revenue from the tainted activity.",
      },
      {
        question: "Is the DPA financial penalty always equal to the disgorgement?",
        answer:
          "No. The financial penalty is typically equal to or greater than the disgorgement figure, reflecting both the disgorgement and an additional punitive element. Forensic accountants assist in negotiating the disgorgement base figure, which then drives the penalty calculation.",
      },
    ],
    relatedFraudTypes: [{ slug: "bribery-corruption", label: "Bribery & Corruption" }],
    relatedServices: ["dpa-preparation-support", "sfo-regulatory-support"],
  },
  {
    slug: "fca-enforcement-investigation",
    title: "FCA Enforcement Investigation",
    metaTitle: "FCA Enforcement Investigation Forensic Accountant",
    metaDescription:
      "FCA enforcement forensic accountant: market abuse, insider dealing, unauthorised promotions, and DEPP proceedings support.",
    h1: "FCA Enforcement Investigation Forensic Accountant",
    paragraphs: [
      "The Financial Conduct Authority enforces market abuse, insider dealing, unauthorised financial promotions, and firm conduct requirements. Forensic accountants analyse trading records, financial promotions, and firm financial positions underlying FCA cases.",
      "Recent enforcement includes action against former Carillion executives and influencers for unauthorised financial promotions. Expert reports address the specific financial analysis on which the FCA's case rests.",
      "DEPP (Decision Procedure and Penalties) proceedings before the Upper Tribunal require expert evidence challenging market impact calculations, profit quantification, and penalty methodology.",
    ],
    faqs: [
      {
        question: "What forensic accounting evidence is needed in FCA enforcement proceedings?",
        answer:
          "FCA enforcement typically requires forensic accounting analysis of: trading records (for market abuse/insider dealing); financial promotions (for authorisation breaches); or financial position (for capital adequacy cases). Forensic accountants produce expert reports addressing the specific financial analysis the FCA's case rests on.",
      },
      {
        question: "Can a forensic accountant help with FCA DEPP proceedings?",
        answer:
          "Yes. The FCA's Decision Procedure and Penalties (DEPP) process involves contested regulatory proceedings before the Upper Tribunal. Forensic accountants provide expert evidence challenging the FCA's financial analysis of alleged misconduct, including market impact calculations, profit quantification, and penalty methodology.",
      },
    ],
    relatedFraudTypes: [
      { slug: "investment-fraud-ponzi", label: "Investment Fraud" },
      { slug: "financial-statement-fraud", label: "Financial Statement Fraud" },
    ],
    relatedServices: ["sfo-regulatory-support", "expert-witness-reports"],
  },
  {
    slug: "hmrc-fraud-investigation",
    title: "HMRC Fraud Investigation",
    metaTitle: "HMRC Fraud Investigation Forensic Accountant",
    metaDescription:
      "HMRC fraud investigation forensic accountant: COP8, COP9, tax reconstruction, and whistleblower reward scheme cases.",
    h1: "HMRC Fraud Investigation Forensic Accountant",
    paragraphs: [
      "HMRC's Fraud Investigation Service handles serious tax fraud through COP8 civil procedures and COP9 criminal investigations. Forensic accountants reconstruct financial records and quantify tax liabilities in both pathways.",
      "COP8 allows disclosure and settlement; COP9 signals potential criminal prosecution. The choice of procedure determines engagement strategy and urgency of forensic response.",
      "HMRC's Strengthened Reward Scheme offers 15-30% of tax recovered over £1.5 million to informants, increasing whistleblower-driven investigations. Independent forensic analysis before HMRC contact helps corporates understand exposure.",
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
          "HMRC's Strengthened Reward Scheme offers informants 15-30% of tax recovered over £1.5 million in serious tax cases. Forensic accountants assist corporates facing whistleblower-triggered investigations by conducting independent financial analysis before HMRC contacts them.",
      },
    ],
    relatedFraudTypes: [{ slug: "tax-fraud-hmrc", label: "Tax Fraud" }],
    relatedServices: ["fraud-investigation-evidence", "sfo-regulatory-support"],
  },
  {
    slug: "private-prosecution-fraud",
    title: "Private Prosecution for Fraud",
    metaTitle: "Private Prosecution Fraud Forensic Accountant",
    metaDescription:
      "Private prosecution fraud forensic accountant: financial evidence packages for Crown Court fraud prosecutions when police decline to act.",
    h1: "Private Prosecution Fraud Forensic Accountant",
    paragraphs: [
      "Private prosecution allows fraud victims to bring criminal proceedings when police decline to investigate or progress cases too slowly. Forensic accountants build prosecution-quality financial evidence packages equivalent to CPS standards.",
      "The route suits complex fraud exceeding police resource capacity and cases requiring faster action than typical criminal timelines allow. Clear documentary evidence, loss quantification, and defendant linkage are essential.",
      "Expert forensic accounting evidence must meet Crown Court standards under CrPR Part 33, including independence declaration and primary duty to the court.",
    ],
    faqs: [
      {
        question: "When should a fraud victim consider private prosecution?",
        answer:
          "Private prosecution is appropriate when: the police have declined to investigate or are taking too long; the fraud is too complex for police resources; or the victim needs faster action than criminal proceedings typically allow. Forensic accountants build the financial evidence package equivalent to what a CPS prosecutor would present.",
      },
      {
        question: "What financial evidence does a private prosecution require?",
        answer:
          "A private prosecution for fraud requires: clear documentary evidence of the fraudulent conduct; forensic analysis establishing the financial loss; evidence linking the defendant to the fraud; and expert forensic accounting evidence presented to Crown Court standards (CrPR Part 33).",
      },
    ],
    relatedFraudTypes: [{ slug: "corporate-fraud", label: "Corporate Fraud" }],
    relatedServices: ["fraud-investigation-evidence", "expert-witness-reports"],
  },
  {
    slug: "money-laundering-proceedings",
    title: "Money Laundering Proceedings",
    metaTitle: "Money Laundering Proceedings Forensic Accountant",
    metaDescription:
      "Money laundering proceedings forensic accountant: POCA ss327-329, DAML consent, NCA investigations, and proceeds tracing.",
    h1: "Money Laundering Proceedings Forensic Accountant",
    paragraphs: [
      "POCA money laundering offences (sections 327-329) criminalise concealing, converting, transferring, and acquiring criminal property. Defence requires showing lack of knowledge or suspicion, or legitimate fund provenance.",
      "DAML (Defence Against Money Laundering) consent applications arise when regulated firms suspect held funds are criminal proceeds. Forensic accountants analyse transactions and trace suspicious flows for NCA consent decisions.",
      "NCA-led investigations and AML regulatory proceedings both require transaction mapping and fund flow reconstruction as core forensic deliverables.",
    ],
    faqs: [
      {
        question: "What is a DAML consent and when is it needed?",
        answer:
          "A Defence Against Money Laundering (DAML) consent is applied for when a regulated firm suspects that funds it is holding are the proceeds of crime. It cannot deal with those funds without NCA consent. Forensic accountants assist by analysing the financial transactions to establish whether funds are suspicious and tracing any suspicious flows.",
      },
      {
        question: "What evidence is needed to defend a money laundering allegation under POCA?",
        answer:
          "To rebut a money laundering allegation, the defendant must show either that they did not know or suspect the funds were criminal proceeds (knowledge/suspicion defence) or that the funds came from a legitimate source. Forensic accountants trace the origin of funds through financial records to establish or rebut legitimate provenance.",
      },
    ],
    relatedFraudTypes: [{ slug: "money-laundering-aml", label: "Money Laundering" }],
    relatedServices: ["asset-tracing-recovery", "poca-confiscation-analysis"],
  },
  {
    slug: "corporate-internal-investigation",
    title: "Corporate Internal Investigation",
    metaTitle: "Corporate Internal Investigation Forensic Accountant",
    metaDescription:
      "Corporate internal investigation forensic accountant: LPP protection, scope methodology, and SFO self-reporting preparation.",
    h1: "Corporate Internal Investigation Forensic Accountant",
    paragraphs: [
      "Corporate internal investigations begin with suspicion, tip-offs, or regulatory enquiries before full scope is clear. Conducting via external legal counsel protects investigation findings under legal professional privilege.",
      "Forensic accountants preserve and analyse financial evidence, quantify wrongdoing, and produce investigation reports advising on self-reporting to SFO or FCA. SFO 2025 cooperation guidance includes facilitating overseas data access and waiving privilege over factual accounts.",
      "Before self-reporting, corporates must understand full misconduct scope, financial benefit to the organisation, victim loss quantum, and adequacy of prevention procedures including FTPF compliance from 1 September 2025.",
    ],
    faqs: [
      {
        question: "Why must an internal investigation be conducted via external legal counsel?",
        answer:
          "An internal investigation conducted via external legal counsel (rather than directly by the company) is protected by legal professional privilege, meaning the investigation findings and forensic accounting reports are not automatically disclosable to the SFO, FCA, or other regulators. This protection is essential to allow the company to understand its exposure before deciding whether to self-report.",
      },
      {
        question: "What should a corporate investigation cover before SFO self-reporting?",
        answer:
          "Before self-reporting, a corporate should understand: the full scope of the misconduct (which individuals were involved and over what period); the financial benefit to the organisation; the quantum of loss to any victims; and the adequacy of its current prevention procedures. Forensic accountants establish the financial picture, the foundation of an informed self-reporting decision.",
      },
    ],
    relatedFraudTypes: [{ slug: "corporate-fraud", label: "Corporate Fraud" }],
    relatedServices: ["fraud-investigation-evidence", "dpa-preparation-support"],
  },
];

export function getCaseType(slug: string) {
  return caseTypes.find((c) => c.slug === slug);
}
