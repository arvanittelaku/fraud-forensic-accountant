import {
  CONSENT_MAX_AGE_MS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  DEFAULT_DENIED,
  type ConsentChoices,
  type StoredConsent,
} from "./types";

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function buildStoredConsent(choices: ConsentChoices): StoredConsent {
  const now = new Date();
  return {
    version: CONSENT_VERSION,
    choices: { ...choices, necessary: true },
    consentedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + CONSENT_MAX_AGE_MS).toISOString(),
  };
}

export function readStoredConsent(): StoredConsent | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    if (new Date(parsed.expiresAt).getTime() < Date.now()) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    return null;
  }
}

export function writeStoredConsent(choices: ConsentChoices): StoredConsent {
  const stored = buildStoredConsent(choices);
  if (isBrowser()) {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  }
  return stored;
}

export function clearStoredConsent(): void {
  if (isBrowser()) {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  }
}

export function getEffectiveChoices(stored: StoredConsent | null): ConsentChoices {
  if (!stored) return DEFAULT_DENIED;
  return { ...stored.choices, necessary: true };
}
