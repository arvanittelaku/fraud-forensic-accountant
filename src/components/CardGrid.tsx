import Link from "next/link";

export function CardGrid({
  items,
}: {
  items: { title: string; description: string; href: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] transition hover:border-indigo-accent/30"
        >
          <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
          <p className="mt-2 text-sm text-body">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-indigo-accent">
            Learn more →
          </span>
        </Link>
      ))}
    </div>
  );
}
