"use client";

import { LaceSeal } from "./_act-shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, { eyebrow: string; h1a: string; h1b: string; lead: string; stats: string }> = {
  es: {
    eyebrow: "Portal ciudadano / IA-first / 2026",
    h1a: "Tu Paraguay,",
    h1b: "en una conversacion.",
    lead: "Pedile en cualquiera de cinco idiomas. Nanduti orquesta 28 herramientas del Estado para resolver lo que necesites en una sola conversacion.",
    stats: "28 herramientas / 9 mini-apps / 5 idiomas",
  },
  gn: {
    eyebrow: "Tet\u00e3gua portal / IA-first / 2026",
    h1a: "Ne Paraguay,",
    h1b: "pete\u0129 \u00f1omongeta'\u00edpe.",
    lead: "Ejerure mamo \u00f1e'\u1ebdme. Nanduti oiporu 28 tembiporu Estado pegua emomba'e hagu\u00e3 eikotev\u1ebdva pete\u0129 \u00f1omongeta'\u00edpe.",
    stats: "28 tembiporu / 9 mini-app / 5 \u00f1e'\u1ebd",
  },
};

export default function Act1Cover() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <div className="ndt-cover">
      {/* Full-screen background lace seal */}
      <div className="ndt-cover-seal">
        <LaceSeal size={1200} rays={32} rings={10} stroke="#22d3ee" opacity={0.16} spinSec={420} />
      </div>

      {/* Content overlaid on top */}
      <div className="ndt-cover-content">
        <span className="ndt-eyebrow">{t.eyebrow}</span>
        <h1 className="ndt-h1">
          {t.h1a}
          <br />
          {t.h1b}
        </h1>
        <p className="ndt-lead">{t.lead}</p>
        <div className="ndt-stats-badge" style={{ marginTop: "8px" }}>
          {t.stats}
        </div>
      </div>
    </div>
  );
}
