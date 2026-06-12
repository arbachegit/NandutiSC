"use client";

import { useLocale } from "@/components/show/LocaleContext";

export type ContentLocale = "es" | "gn";

/**
 * Returns the stage content locale: "gn" when Guarani is active, "es" otherwise.
 * Spanish is the product language — PT-BR, PT-PT, EN, and ES locales all see
 * Spanish stage content. Only GN switches the on-screen text to Guarani.
 */
export function useContentLocale(): ContentLocale {
  const { locale } = useLocale();
  return locale === "gn" ? "gn" : "es";
}
