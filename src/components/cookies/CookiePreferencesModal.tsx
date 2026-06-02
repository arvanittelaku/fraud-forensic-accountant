"use client";

import { COOKIE_CATEGORIES, type ConsentChoices } from "@/lib/cookies/types";
import { useEffect, useId, useRef, useState } from "react";

type CookiePreferencesModalProps = {
  open: boolean;
  initialChoices: ConsentChoices;
  onClose: () => void;
  onSave: (choices: ConsentChoices) => void;
  /** When true, backdrop click does not close (first visit customize flow). */
  forceShow?: boolean;
};

export function CookiePreferencesModal({
  open,
  initialChoices,
  onClose,
  onSave,
  forceShow = false,
}: CookiePreferencesModalProps) {
  const titleId = useId();
  const [draft, setDraft] = useState<ConsentChoices>(initialChoices);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setDraft(initialChoices);
      document.body.style.overflow = "hidden";
      panelRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, initialChoices]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !forceShow) onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, forceShow]);

  if (!open) return null;

  function toggleCategory(id: keyof ConsentChoices, checked: boolean) {
    if (id === "necessary") return;
    setDraft((prev) => ({ ...prev, [id]: checked }));
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        aria-label="Close cookie preferences"
        onClick={forceShow ? undefined : onClose}
        tabIndex={-1}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-labelledby={titleId}
        aria-modal="true"
        tabIndex={-1}
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)] animate-[fadeIn_0.25s_ease-out]"
      >
        <div className="border-b border-border bg-charcoal px-5 py-4">
          <h2 id={titleId} className="text-lg font-bold text-white">
            Cookie Preferences
          </h2>
          <p className="mt-1 text-sm text-white/75">
            Manage how we use cookies. Necessary cookies cannot be disabled.
          </p>
        </div>

        <div className="space-y-4 p-5">
          {COOKIE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex gap-4 rounded-[8px] border border-border p-4"
            >
              <div className="flex-1">
                <p className="font-semibold text-heading">{cat.title}</p>
                <p className="mt-1 text-sm text-body">{cat.description}</p>
              </div>
              <label className="flex shrink-0 items-start gap-2">
                <span className="sr-only">
                  {cat.required ? `${cat.title} always enabled` : `Enable ${cat.title}`}
                </span>
                <input
                  type="checkbox"
                  checked={draft[cat.id]}
                  disabled={cat.required}
                  onChange={(e) => toggleCategory(cat.id, e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-border text-indigo-accent focus:ring-indigo-accent"
                />
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-border bg-section-alt p-5 sm:flex-row sm:justify-end">
          {!forceShow && (
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] rounded-[4px] border border-border bg-white px-5 py-2.5 text-sm font-semibold text-heading hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-indigo-accent"
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={() => onSave(draft)}
            className="min-h-[44px] rounded-[4px] bg-indigo-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-accent/90 focus:outline-none focus:ring-2 focus:ring-indigo-accent focus:ring-offset-2"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
