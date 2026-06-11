"use client";

/**
 * AudioControl — fixed dock top-right (skill `showcase` §8.2/§8.3).
 * Five controls in order: (0) Sair, (1) PDF, (2) language selector BR/PT/EN,
 * (3) reading button "Aa", (4) speaker narration toggle.
 * All three content controls share the SAME locale state.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useSlideContext } from "./SlideEngine";
import { useLocale } from "./LocaleContext";
import { LOCALES, type Locale } from "@/narration";
import { exitToHub, HUB } from "@/lib/exitToHub";
import { getReading } from "@/lib/readingText";

const PREFIX =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/nanduti" : "");

function trackUrl(lang: Locale, slide0: number): string {
  const nn = String(slide0 + 1).padStart(2, "0");
  return `${PREFIX}/audio/${lang}/slide-${nn}.mp3`;
}

export default function AudioControl() {
  const { currentSlide } = useSlideContext();
  const { locale: lang, setLocale: setLang } = useLocale();
  const [enabled, setEnabled] = useState(false);
  const [reading, setReading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!enabled) {
      el.pause();
      return;
    }
    el.src = trackUrl(lang, currentSlide);
    el.currentTime = 0;
    el.play().catch(() => {
      /* degrade silently if track missing or autoplay blocked */
    });
  }, [enabled, lang, currentSlide]);

  const text = getReading(lang, currentSlide);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeReading = useCallback(() => setReading(false), []);

  useEffect(() => {
    if (!reading) return;
    const el = dialogRef.current;
    if (el) {
      const closeBtn = el.querySelector<HTMLButtonElement>("button");
      closeBtn?.focus();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeReading();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [reading, closeReading]);

  return (
    <>
      <div className="audio-dock" role="group" aria-label="Narracao e leitura">
        {/* (0) Sair */}
        <a
          className="exit-btn"
          href={HUB}
          onClick={exitToHub}
          aria-label="Sair para o hub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Sair</span>
        </a>

        {/* (1) PDF */}
        <button
          type="button"
          className="pdf-btn"
          onClick={() => window.print()}
          aria-label="Exportar PDF"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <polyline points="9 15 12 18 15 15" />
          </svg>
          <span>PDF</span>
        </button>

        {/* (2) Language selector */}
        <div className="lang-select" role="radiogroup" aria-label="Idioma">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              className="lang-btn"
              data-active={lang === l.code}
              role="radio"
              aria-checked={lang === l.code}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* (3) Reading "Aa" */}
        <button
          type="button"
          className="reading-btn"
          data-active={reading}
          onClick={() => setReading((v) => !v)}
          aria-pressed={reading}
          aria-label="Leitura do slide"
        >
          Aa
        </button>

        {/* (4) Speaker narration */}
        <button
          type="button"
          className="speaker-btn"
          data-active={enabled}
          onClick={() => setEnabled((v) => !v)}
          aria-pressed={enabled}
          aria-label={enabled ? "Silenciar narracao" : "Ouvir narracao"}
        >
          {enabled ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="3 9 7 9 12 4 12 20 7 15 3 15" />
              <path d="M16 8a4 4 0 0 1 0 8" />
              <path d="M18.5 5.5a8 8 0 0 1 0 13" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="3 9 7 9 12 4 12 20 7 15 3 15" />
              <line x1="16" y1="9" x2="22" y2="15" />
              <line x1="22" y1="9" x2="16" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Reading panel */}
      {reading && (
        <div
          ref={dialogRef}
          className="reading-panel"
          role="dialog"
          aria-label="Leitura do slide"
          aria-modal="true"
        >
          <button
            type="button"
            className="reading-close"
            onClick={closeReading}
            aria-label="Fechar leitura"
          >
            ×
          </button>
          <p className="reading-text">{text}</p>
        </div>
      )}

      <audio ref={audioRef} preload="none" />
    </>
  );
}
