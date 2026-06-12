"use client";

import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrow: string; edad: string; ciudad: string; idioma: string;
  trabajador: string; familia: string; esposo: string; hija: string; hijo: string;
  lead: string; anos: string;
}> = {
  es: {
    eyebrow: "Demo persona",
    edad: "Edad", ciudad: "Ciudad", idioma: "Idioma",
    trabajador: "Trabajador Activo",
    familia: "Familia", esposo: "Esposo", hija: "Hija", hijo: "Hijo",
    lead: "A traves de Maria vemos cada servicio que Nanduti ofrece. Su idioma preferido es jopara, la mezcla guarani-castellano hablada por el 90% de los paraguayos.",
    anos: "anos",
  },
  gn: {
    eyebrow: "Persona demo",
    edad: "Ary", ciudad: "T\u00e1va", idioma: "\u00d1e'\u1ebd",
    trabajador: "Mba'apoh\u00e1ra O\u0129va",
    familia: "Familia", esposo: "M\u00e9na", hija: "Tajyra", hijo: "Ta'yra",
    lead: "Mar\u00eda rupive rohecha pete\u0129te\u0129 mba'e Nanduti ome'\u1ebdva. I\u00f1e'\u1ebd ha'ev\u00e9va ha'e jopara, guarani-castellano \u00f1e'\u1ebdjoja 90% paragua\u00edo o\u00f1e'\u1ebdva.",
    anos: "ary",
  },
};

export default function Act2Persona() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="persona">
      <div className="ndt-side">
        {/* Left: Persona card */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrow}</span>
          <div className="ndt-persona-card">
            <div className="ndt-persona-avatar">MG</div>
            <div className="ndt-persona-info">
              <h2 className="ndt-persona-name">Maria Gonzalez Acosta</h2>
              <span className="ndt-persona-badge">CIC 4.521.846</span>
            </div>
          </div>
          <div className="ndt-persona-details">
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">{t.edad}</span>
              <span className="ndt-persona-v">34 {t.anos}</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">{t.ciudad}</span>
              <span className="ndt-persona-v">Trinidad, Asuncion</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">{t.idioma}</span>
              <span className="ndt-persona-v">Jopara (es + gn)</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">IPS</span>
              <span className="ndt-persona-v">{t.trabajador}</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">RUC</span>
              <span className="ndt-persona-v">4521846-6 / IRP Renta Personal</span>
            </div>
          </div>
        </div>

        {/* Right: Family tree */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">{t.familia}</span>
          <div className="ndt-family">
            <div className="ndt-family-member">
              <span className="ndt-family-icon" style={{ background: "rgba(34,211,238,.15)", color: "#22d3ee" }}>JG</span>
              <div className="ndt-family-info">
                <span className="ndt-family-name">Juan Gonzalez Perez</span>
                <span className="ndt-family-meta">{t.esposo} / 36 {t.anos} / CIC 3.987.654</span>
              </div>
            </div>
            <div className="ndt-family-member">
              <span className="ndt-family-icon" style={{ background: "rgba(249,115,22,.15)", color: "#f97316" }}>SG</span>
              <div className="ndt-family-info">
                <span className="ndt-family-name">Sofia Gonzalez</span>
                <span className="ndt-family-meta">{t.hija} / 8 {t.anos} / 3er grado / ESC-234 Trinidad</span>
              </div>
            </div>
            <div className="ndt-family-member">
              <span className="ndt-family-icon" style={{ background: "rgba(34,197,94,.15)", color: "#22c55e" }}>MG</span>
              <div className="ndt-family-info">
                <span className="ndt-family-name">Mateo Gonzalez</span>
                <span className="ndt-family-meta">{t.hijo} / 3 {t.anos}</span>
              </div>
            </div>
          </div>
          <p className="ndt-lead" style={{ marginTop: "12px" }}>
            {t.lead}
          </p>
        </div>
      </div>
    </Shell>
  );
}
