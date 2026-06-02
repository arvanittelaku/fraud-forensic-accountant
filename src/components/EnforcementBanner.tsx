import Link from "next/link";

export function EnforcementBanner() {
  return (
    <div className="bg-crimson px-4 py-4 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium leading-relaxed sm:text-base">
          <span aria-hidden="true">⚠ </span>
          2025–2026 Enforcement: SFO lists 5 cases for trial in 2026. FTPF offence in force September
          2025. Updated self-reporting guidance: self-reporting now explicitly leads to DPA invitation.
        </p>
        <Link
          href="/guides/sfo-enforcement-update-2025"
          className="shrink-0 text-sm font-semibold underline hover:no-underline"
        >
          Read the enforcement update →
        </Link>
      </div>
    </div>
  );
}
