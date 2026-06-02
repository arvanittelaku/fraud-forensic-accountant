"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyGoogleConsentMode } from "@/lib/cookies/consent-mode";
import {
  getEffectiveChoices,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/cookies/storage";
import {
  ACCEPT_ALL,
  REJECT_NON_ESSENTIAL,
  type ConsentChoices,
  type StoredConsent,
} from "@/lib/cookies/types";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";
import { TrackingScripts } from "./TrackingScripts";

type CookieConsentContextValue = {
  choices: ConsentChoices;
  hasConsented: boolean;
  isReady: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (choices: ConsentChoices) => void;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

/** Safe hook for footer button when provider might not wrap (should always wrap). */
export function useCookieConsentOptional(): CookieConsentContextValue | null {
  return useContext(CookieConsentContext);
}

function persistAndApply(choices: ConsentChoices): StoredConsent {
  const stored = writeStoredConsent(choices);
  applyGoogleConsentMode(stored.choices);
  return stored;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [stored, setStored] = useState<StoredConsent | null>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const hasConsented = stored !== null;
  const choices = getEffectiveChoices(stored);

  useEffect(() => {
    const existing = readStoredConsent();
    setStored(existing);
    if (existing) {
      applyGoogleConsentMode(existing.choices);
    }
    setIsReady(true);
  }, []);

  const acceptAll = useCallback(() => {
    setStored(persistAndApply(ACCEPT_ALL));
    setPreferencesOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    setStored(persistAndApply(REJECT_NON_ESSENTIAL));
    setPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback((next: ConsentChoices) => {
    setStored(persistAndApply({ ...next, necessary: true }));
    setPreferencesOpen(false);
  }, []);

  const openPreferences = useCallback(() => {
    setPreferencesOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      choices,
      hasConsented,
      isReady,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
    }),
    [choices, hasConsented, isReady, acceptAll, rejectNonEssential, savePreferences, openPreferences]
  );

  const showBanner = isReady && !hasConsented;

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      <TrackingScripts choices={choices} hasConsented={hasConsented} />
      {showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onRejectNonEssential={rejectNonEssential}
          onCustomize={() => setPreferencesOpen(true)}
        />
      )}
      <CookiePreferencesModal
        open={preferencesOpen}
        initialChoices={choices}
        onClose={() => setPreferencesOpen(false)}
        onSave={savePreferences}
        forceShow={!hasConsented && preferencesOpen}
      />
    </CookieConsentContext.Provider>
  );
}
