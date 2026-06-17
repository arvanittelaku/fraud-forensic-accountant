import Link from "next/link";

export function BottomCTA({
  title = "Instruct a Qualified Fraud Forensic Accountant",
  description = "Submit your case details and we will match you with a fraud forensic accountant for civil fraud, criminal defence, or corporate investigation. Response within 1 business day.",
  buttonText = "Instruct an Expert",
  buttonHref = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-indigo-accent py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-lg text-white/90">{description}</p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[4px] bg-white px-8 py-3 text-base font-semibold text-indigo-accent transition hover:bg-white/95"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
