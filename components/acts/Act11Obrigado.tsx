"use client";

import { LaceSeal } from "./_act-shared";
import { useLocale } from "@/components/show/LocaleContext";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const THANKS: Record<string, string> = {
  es: "Gracias.",
  gn: "Aguyje.",
  "pt-br": "Obrigado.",
  "pt-pt": "Obrigado.",
  en: "Thank you.",
};

const T: Record<ContentLocale, {
  herramientas: string; idiomas: string; fuentes: string; manifesto: string;
}> = {
  es: {
    herramientas: "herramientas",
    idiomas: "idiomas",
    fuentes: "fuentes",
    manifesto: "\u201cUna infraestructura digital se mide por su respeto al ciudadano.\u201d",
  },
  gn: {
    herramientas: "tembiporu",
    idiomas: "\u00f1e'\u1ebd",
    fuentes: "ykuaaty",
    manifesto: "\u201cPete\u0129 infraestructura digital ojehechakuaa omboet\u00e9hagui tet\u00e3guape.\u201d",
  },
};

export default function Act11Obrigado() {
  const { locale } = useLocale();
  const cl = useContentLocale();
  const t = T[cl];
  const thanksWord = THANKS[locale] ?? THANKS.es;

  return (
    <div className="ndt-thanks">
      <LaceSeal size={400} rays={20} rings={6} stroke="#22d3ee" opacity={0.07} spinSec={420} className="ndt-thanks-seal" />
      <h1 className="ndt-thanks-title">{thanksWord}</h1>
      <a
        className="logo-iconsai"
        href="https://iconsai.ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="logo-i">i</span>
        <span className="logo-cons">cons</span>
        <span className="logo-ai">.ai</span>
      </a>
      <span className="ndt-thanks-url">iconsai.ai/nanduti</span>
      <div className="ndt-stat-row">
        <div className="ndt-stat">
          <span className="ndt-stat-num">28</span>
          <span className="ndt-stat-lbl">{t.herramientas}</span>
        </div>
        <div className="ndt-stat">
          <span className="ndt-stat-num">9</span>
          <span className="ndt-stat-lbl">mini-apps</span>
        </div>
        <div className="ndt-stat">
          <span className="ndt-stat-num">5</span>
          <span className="ndt-stat-lbl">{t.idiomas}</span>
        </div>
        <div className="ndt-stat">
          <span className="ndt-stat-num">7</span>
          <span className="ndt-stat-lbl">{t.fuentes}</span>
        </div>
      </div>
      <p className="ndt-manifesto">
        {t.manifesto}
      </p>
    </div>
  );
}
