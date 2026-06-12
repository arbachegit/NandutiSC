// Narration barrel — typed entry point for the app.
// Per-locale content lives in plain TS data files (script.<locale>.ts) so that
// BOTH the Next app and scripts/generate-narration.mjs read the exact same single source.

import { scriptPtBr } from "./script.pt-br";
import { scriptPtPt } from "./script.pt-pt";
import { scriptEn } from "./script.en";
import { scriptEs } from "./script.es";
import { scriptGn } from "./script.gn";

export type Locale = "pt-br" | "pt-pt" | "en" | "es" | "gn";

export interface SlideNarration {
  id: string;
  description: string;
}

/**
 * Locale selector. Order: ES / GN / BR / PT / EN (default ES).
 * 5 locales: Spanish, Guarani, Portuguese BR, Portuguese PT, English.
 */
export const LOCALES: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "gn", label: "GN" },
  { code: "pt-br", label: "BR" },
  { code: "pt-pt", label: "PT" },
  { code: "en", label: "EN" },
];

/** Default locale is ES (product language). */
export const DEFAULT_LOCALE: Locale = "es";

export const NARRATION: Record<Locale, SlideNarration[]> = {
  es: scriptEs,
  gn: scriptGn,
  "pt-br": scriptPtBr,
  "pt-pt": scriptPtPt,
  en: scriptEn,
};
