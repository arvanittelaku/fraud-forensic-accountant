export function ContentSection({
  children,
  alt = false,
  className = "",
  wide = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section className={`py-12 md:py-16 ${alt ? "bg-section-alt" : "bg-white"} ${className}`}>
      <div
        className={`prose-content mx-auto px-4 sm:px-6 lg:px-8 ${
          wide ? "max-w-6xl" : "max-w-4xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
