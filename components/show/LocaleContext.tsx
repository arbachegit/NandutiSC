"use client";

/**
 * LocaleContext — shared language state between audio control and slides
 * (skill `showcase` §8: switching locale changes audio, reading, AND screen content).
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/narration";

const LANG_MAP: Record<Locale, string> = {
  "pt-br": "pt-BR",
  "pt-pt": "pt-PT",
  en: "en",
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleCtx = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleCtx);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  // Keep <html lang> in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = LANG_MAP[locale] ?? locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}
