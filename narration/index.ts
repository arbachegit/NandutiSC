// Narration barrel — typed entry point for the app.
// Per-locale content lives in plain TS data files (script.<locale>.ts) so that
// BOTH the Next app and scripts/generate-narration.mjs read the exact same single source.

import { scriptPtBr } from "./script.pt-br";
import { scriptPtPt } from "./script.pt-pt";
import { scriptEn } from "./script.en";
import { scriptGn } from "./script.gn";

export type Locale = "pt-br" | "pt-pt" | "en" | "gn";

export interface SlideNarration {
  id: string;
  description: string;
}

/**
 * Locale selector. Order: BR / PT / EN / GN (default BR).
 * 4 locales: Portuguese BR, Portuguese PT, English, Guarani.
 */
export const LOCALES: { code: Locale; label: string }[] = [
  { code: "pt-br", label: "BR" },
  { code: "pt-pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "gn", label: "GN" },
];

/** Default locale is BR. */
export const DEFAULT_LOCALE: Locale = "pt-br";

export const NARRATION: Record<Locale, SlideNarration[]> = {
  "pt-br": scriptPtBr,
  "pt-pt": scriptPtPt,
  en: scriptEn,
  gn: scriptGn,
};
