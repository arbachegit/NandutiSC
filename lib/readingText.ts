import { NARRATION, type Locale } from "@/narration";

/**
 * getReading — clean text for the reading panel (skill `showcase` §8.3).
 * Strips TTS respellings that only serve the audio engine.
 * Source: same narration scripts (§8.1).
 */
export function getReading(lang: Locale, slide0: number): string {
  const raw = NARRATION[lang]?.[slide0]?.description ?? "";
  return raw;
}
