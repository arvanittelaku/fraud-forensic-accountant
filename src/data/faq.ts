import type { FaqItem } from "@/lib/schema";

export const siteFaqs: FaqItem[] = [
  {
    question: "What is a fraud forensic accountant?",
    answer:
      "A fraud forensic accountant is a specialist forensic accountant who applies investigative accounting expertise specifically to fraud and financial crime. They investigate financial facts, quantify losses, trace proceeds of fraud, and provide expert evidence in civil and criminal proceedings including POCA, UWOs, and DPA negotiations.",
  },
  {
    question: "What is the difference between civil fraud and criminal fraud?",
    answer:
      "Civil fraud is brought by victims on the balance of probabilities, seeking freezing orders, asset tracing, and damages in the High Court. Criminal fraud is prosecuted by the state beyond reasonable doubt, seeking imprisonment and POCA confiscation in the Crown Court. Both can run simultaneously; forensic accountants must understand CPR Part 35 (civil) and CrPR Part 33 (criminal) expert frameworks.",
  },
  {
    question: "What is POCA and how does it affect fraud proceedings?",
    answer:
      "The Proceeds of Crime Act 2002 governs criminal confiscation (Part 2) following conviction and civil recovery (Part 5) without requiring conviction. Benefit from criminal conduct is calculated on a gross proceeds basis. Fraud forensic accountants challenge benefit calculations, assess available assets, and support civil recovery applications including crypto-assets.",
  },
  {
    question: "What is an unexplained wealth order?",
    answer:
      "A UWO is a High Court order requiring a respondent to explain how they obtained specified property worth more than £50,000 where the SFO, NCA, HMRC, CPS, or FCA has reasonable grounds to suspect insufficient legitimate income. Failure to respond adequately creates a rebuttable presumption that property is recoverable under POCA.",
  },
  {
    question: "What is a deferred prosecution agreement (DPA)?",
    answer:
      "A DPA is an agreement between a prosecutor and a corporate whereby prosecution is deferred in exchange for cooperation, remediation, and financial payment comprising disgorgement, penalty, and costs. SFO 2025 guidance states self-reporting and full cooperation can lead to DPA invitation. Forensic accountants quantify disgorgement, the foundation of DPA financial negotiation.",
  },
  {
    question: "What is the Failure to Prevent Fraud offence?",
    answer:
      "The FTPF offence under ECCTA 2023 makes large organisations criminally liable if they fail to prevent employees committing fraud for the organisation's benefit. It came into force on 1 September 2025. Organisations can rely on reasonable fraud prevention procedures. Forensic accountants assess procedure adequacy and support both compliance and defence.",
  },
  {
    question: "How does a forensic accountant trace cryptocurrency?",
    answer:
      "Crypto forensic accounting uses blockchain analysis tools to trace wallet-to-wallet transactions, identify exchange accounts, and produce court-admissible findings on asset location and value. Part 5 POCA allows civil recovery of crypto-assets. Full FCA cryptoasset regulation takes effect from October 2027.",
  },
  {
    question: "What is asset tracing and how does it work?",
    answer:
      "Asset tracing follows fraud proceeds through bank accounts, corporate structures, and jurisdictions to identify recoverable property. The methodology includes financial record analysis, entity mapping, transaction tracing, asset identification, and cross-border investigation. It supports freezing injunctions, civil recovery, and POCA proceedings.",
  },
  {
    question: "Should I call the SFO or conduct an internal investigation first?",
    answer:
      "Corporates should typically conduct an internal investigation via external legal counsel (protected by legal professional privilege) before deciding whether to self-report. Forensic accountants quantify the scope of wrongdoing so the board can make an informed decision. Self-reporting now explicitly leads to DPA invitation under 2025 guidance, but does not guarantee immunity from prosecution.",
  },
  {
    question: "What credentials should a fraud forensic accountant hold?",
    answer:
      "Core credentials include CFE (Certified Fraud Examiner), ACA or FCA (chartered accountancy), and CAMS for AML work. Experience in POCA proceedings, SFO/FCA investigations, and both CPR Part 35 and CrPR Part 33 reporting is essential. ICAEW forensic accreditation and digital forensics credentials support crypto and electronic evidence cases.",
  },
  {
    question: "How much does a fraud forensic accountant cost?",
    answer:
      "Investigation fees typically range from £150-£350/hour regionally to £300-£600/hour for senior London specialists. Expert witness reports range from £5,000-£20,000 for standard civil fraud matters to £20,000-£75,000+ for complex POCA or SFO cases. DPA financial quantification may cost £30,000-£200,000+. Emergency freezing injunction support is available at premium rates.",
  },
  {
    question: "What is legal professional privilege in fraud investigations?",
    answer:
      "Legal professional privilege protects confidential communications between a client and their lawyer, and documents created for the purpose of obtaining legal advice or litigation. Internal investigations conducted via external counsel with forensic accountants instructed by lawyers can protect investigation reports from automatic disclosure to regulators, allowing informed self-reporting decisions.",
  },
];
