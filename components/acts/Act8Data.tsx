"use client";

import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const SOURCES: Record<ContentLocale, Array<{ oee: string; title: string; date: string }>> = {
  es: [
    { oee: "Agencia IP", title: "Identidad Electronica supera 1M de activaciones", date: "May 26" },
    { oee: "BCP", title: "SIP-BCP habilita transferencias 24/7 entre bancos", date: "May 26" },
    { oee: "MSPyBS", title: "Cobertura Hexavalente repunta a 92% nacional", date: "May 26" },
    { oee: "MEC", title: "4.100 escuelas conectadas a internet (46% penetracion)", date: "May 26" },
    { oee: "SEN", title: "Alerta de inundaciones en el Chaco occidental", date: "May 26" },
  ],
  gn: [
    { oee: "Agencia IP", title: "Identidad Electr\u00f3nica ohasava 1M activaci\u00f3n", date: "May 26" },
    { oee: "BCP", title: "SIP-BCP omoneĩ mondaha 24/7 banco apyt\u00e9pe", date: "May 26" },
    { oee: "MSPyBS", title: "Hexavalente ojoguatava 92% tetã tuich\u00e1pe", date: "May 26" },
    { oee: "MEC", title: "4.100 mbo'ehao ojuajuva internet-pe (46%)", date: "May 26" },
    { oee: "SEN", title: "Yguasu marandu Chaco ypy k\u00e1rape", date: "May 26" },
  ],
};

const T: Record<ContentLocale, {
  eyebrowL: string; h2: string; sourcesLabel: string;
  eyebrowR: string; boletinTitle: string; boletinMeta: string;
  matematica: string; comCastellana: string; comGuarani: string;
  ciencias: string; historia: string;
  asistencia: string; pisaLabel: string; pisaFooter: string;
}> = {
  es: {
    eyebrowL: "Datos del Paraguay real",
    h2: "Siete fuentes oficiales, en tiempo casi real.",
    sourcesLabel: "Agencia IP / BCP / DINAC / DNCP / MEC / SEN / MSPBS",
    eyebrowR: "Educacion + PISA 2022",
    boletinTitle: "Boletin Sofia Gonzalez", boletinMeta: "3er grado / P1 2026",
    matematica: "Matematica", comCastellana: "Comunicacion Castellana",
    comGuarani: "Comunicacion Guarani", ciencias: "Ciencias Naturales",
    historia: "Historia y Geografia",
    asistencia: "Asistencia: 38/40 (95%)",
    pisaLabel: "PISA 2022 / Matematica",
    pisaFooter: "% de estudiantes en nivel 2 o superior",
  },
  gn: {
    eyebrowL: "Paraguay marandu añete",
    h2: "Poko\u0129 ykuaaty tenondegua, ndaipukumem\u00e9i.",
    sourcesLabel: "Agencia IP / BCP / DINAC / DNCP / MEC / SEN / MSPBS",
    eyebrowR: "Mbo'ehao + PISA 2022",
    boletinTitle: "Bolet\u00edn Sofia Gonzalez", boletinMeta: "3er grado / P1 2026",
    matematica: "Matem\u00e1tika", comCastellana: "\u00d1e'\u1ebdjoja Castellana",
    comGuarani: "\u00d1e'\u1ebdjoja Guarani", ciencias: "Ciencia Naturale",
    historia: "Historia ha Geograf\u00eda",
    asistencia: "\u00d1emboja: 38/40 (95%)",
    pisaLabel: "PISA 2022 / Matem\u00e1tika",
    pisaFooter: "% temimbo'e nivel 2 ter\u00e3 yvatev\u00e9pe",
  },
};

export default function Act8Data() {
  const cl = useContentLocale();
  const t = T[cl];
  const sources = SOURCES[cl];

  return (
    <Shell label="datos">
      <div className="ndt-side">
        {/* Left: 7 sources feed */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrowL}</span>
          <h2 className="ndt-h2">{t.h2}</h2>
          <div className="ndt-feed">
            {sources.map((s) => (
              <div key={s.oee} className="ndt-feed-row">
                <span className="ndt-feed-date">{s.date}</span>
                <div className="ndt-feed-c">
                  <span className="ndt-feed-title">{s.title}</span>
                  <span className="ndt-feed-byline">{s.oee}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ndt-source-tags">
            <span className="ndt-byline">{t.sourcesLabel}</span>
          </div>
        </div>

        {/* Right: Education + PISA */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">{t.eyebrowR}</span>
          <div className="ndt-report-card">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">{t.boletinTitle}</span>
              <span className="ndt-panel-meta">{t.boletinMeta}</span>
            </div>
            <div className="ndt-grade-list">
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">{t.matematica}</span>
                <span className="ndt-grade-val">3,6/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">{t.comCastellana}</span>
                <span className="ndt-grade-val">3,9/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">{t.comGuarani}</span>
                <span className="ndt-grade-val">4,2/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">{t.ciencias}</span>
                <span className="ndt-grade-val">4,1/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">{t.historia}</span>
                <span className="ndt-grade-val">3,4/5,0</span>
              </div>
            </div>
            <span className="ndt-byline" style={{ marginTop: "6px" }}>{t.asistencia}</span>
          </div>
          <div className="ndt-pisa">
            <span className="ndt-pisa-label">{t.pisaLabel}</span>
            <div className="ndt-pisa-bars">
              <div className="ndt-pisa-bar">
                <span className="ndt-pisa-country">Paraguay</span>
                <div className="ndt-pisa-track">
                  <div className="ndt-pisa-fill" style={{ width: "15%" }} />
                </div>
                <span className="ndt-pisa-pct">15%</span>
              </div>
              <div className="ndt-pisa-bar">
                <span className="ndt-pisa-country">OCDE</span>
                <div className="ndt-pisa-track">
                  <div className="ndt-pisa-fill ndt-pisa-fill--ocde" style={{ width: "69%" }} />
                </div>
                <span className="ndt-pisa-pct">69%</span>
              </div>
            </div>
            <span className="ndt-byline">{t.pisaFooter}</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
