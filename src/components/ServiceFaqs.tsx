import type { FaqItem } from "@/lib/schema";

export function ServiceFaqs({ faqs, title = "Frequently Asked Questions" }: { faqs: FaqItem[]; title?: string }) {
  if (faqs.length === 0) return null;

  return (
    <section className="border-t border-border pt-10">
      <h2 className="text-2xl font-bold text-heading">{title}</h2>
      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-lg font-semibold text-heading">{faq.question}</h3>
            <p className="mt-2 text-body">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
