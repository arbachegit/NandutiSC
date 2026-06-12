"use client";

/**
 * PdfDocument — print-friendly document revealed by @media print (skill §8.6).
 * Hidden in screen; shown when the user hits Ctrl+P or clicks the PDF dock button.
 * Content reorganized from slides into a linear A4 document format.
 */
import { useLocale } from "./show/LocaleContext";
import { NARRATION, type Locale } from "@/narration";
import { SLIDE_PLANS } from "@/narration/slidePlan";

const COVER: Record<Locale, { title: string; subtitle: string; desc: string }> = {
  "pt-br": {
    title: "Nanduti",
    subtitle: "Portal Ciudadano Paraguayo",
    desc: "9 mini-apps, 28 ferramentas, 5 idiomas. Super-app do cidadao paraguaio impulsionado por IA.",
  },
  "pt-pt": {
    title: "Nanduti",
    subtitle: "Portal Ciudadano Paraguayo",
    desc: "9 mini-aplicacoes, 28 ferramentas, 5 idiomas. Super-aplicacao do cidadao paraguaio impulsionada por IA.",
  },
  en: {
    title: "Nanduti",
    subtitle: "Paraguayan Citizen Portal",
    desc: "9 mini-apps, 28 tools, 5 languages. AI-powered Paraguayan citizen super-app.",
  },
  gn: {
    title: "Nanduti",
    subtitle: "Portal Ciudadano Paraguayo",
    desc: "9 mini-app, 28 tembiporu, 5 ne'e. Tetaguasu paraguaigua super-app IA omba'apo ukava.",
  },
};

const SECTION_LABEL: Record<Locale, string> = {
  "pt-br": "Secao",
  "pt-pt": "Seccao",
  en: "Section",
  gn: "Mba'e",
};

const CLOSING: Record<Locale, string> = {
  "pt-br": "Uma infraestrutura digital se mede pelo seu respeito ao cidadao.",
  "pt-pt": "Uma infraestrutura digital mede-se pelo respeito ao cidadao.",
  en: "A digital infrastructure is measured by its respect for the citizen.",
  gn: "Infraestructura digital ojekuaa ciudadano respetope.",
};

function LogoMark() {
  return (
    <span
      className="pdf-logo"
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        fontWeight: 700,
        fontSize: "1.3rem",
        letterSpacing: "-.02em",
      }}
    >
      <span style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: "#f97316", fontSize: "1.55em" }}>i</span>
      <span style={{ fontWeight: 800 }}>cons</span>
      <span style={{ fontWeight: 800, color: "#ef4444" }}>.ai</span>
    </span>
  );
}

export default function PdfDocument() {
  const { locale } = useLocale();
  const cover = COVER[locale];
  const narrations = NARRATION[locale] ?? [];

  return (
    <div className="pdf-doc">
      {/* Cover page (dark) */}
      <div className="pdf-page pdf-page--cover">
        <LogoMark />
        <h1 className="pdf-cover-title">{cover.title}</h1>
        <p className="pdf-cover-sub">{cover.subtitle}</p>
        <p className="pdf-cover-desc">{cover.desc}</p>
        <p className="pdf-cover-meta">IconsAI / 2026</p>
      </div>

      {/* Content pages (light, one per slide) */}
      {narrations.map((n, i) => {
        const plan = SLIDE_PLANS[i];
        return (
          <div key={n.id} className="pdf-page pdf-page--body">
            <header className="pdf-section-head">
              <span className="pdf-mono">
                {SECTION_LABEL[locale]} {String(i + 1).padStart(2, "0")}
              </span>
              <span className="pdf-mono">{plan?.temaChave ?? n.id}</span>
            </header>
            <p className="pdf-body-text">{n.description}</p>
            {plan?.dataKeys && plan.dataKeys.length > 0 && (
              <div className="pdf-evidence">
                <span className="pdf-mono" style={{ fontSize: ".65rem", color: "#666" }}>
                  Fontes: {plan.dataKeys.join(" / ")}
                </span>
              </div>
            )}
            <footer className="pdf-page-footer">
              <span className="pdf-mono">{i + 1}</span>
            </footer>
          </div>
        );
      })}

      {/* Closing page (dark) */}
      <div className="pdf-page pdf-page--closing">
        <LogoMark />
        <p className="pdf-closing-quote">{CLOSING[locale]}</p>
        <p className="pdf-closing-link">iconsai.ai/nanduti</p>
      </div>
    </div>
  );
}
