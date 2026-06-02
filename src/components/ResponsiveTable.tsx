/** Wraps tables for horizontal scroll on small screens without layout shift. */
export function ResponsiveTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="table-scroll -mx-4 px-4 sm:mx-0 sm:px-0">
      {children}
    </div>
  );
}
