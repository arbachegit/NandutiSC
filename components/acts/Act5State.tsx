"use client";

import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrowL: string; consultaRuc: string; razonSocial: string;
  estado: string; activo: string; regimen: string;
  renovacion: string; antecedentes: string; liquidacion: string;
  eyebrowR: string; vaccTitle: string;
}> = {
  es: {
    eyebrowL: "Tramites y gobierno",
    consultaRuc: "Consulta RUC", razonSocial: "Razon Social",
    estado: "Estado", activo: "ACTIVO", regimen: "Regimen",
    renovacion: "Renovacion CIC", antecedentes: "Antecedentes Policiales",
    liquidacion: "Liquidacion IVA",
    eyebrowR: "Salud trilingual",
    vaccTitle: "Vacunacion Sofia",
  },
  gn: {
    eyebrowL: "Tr\u00e1mite ha gobierno",
    consultaRuc: "Consulta RUC", razonSocial: "T\u00e9ra",
    estado: "O\u0129h\u00e1icha", activo: "O\u0128VA", regimen: "Regimen",
    renovacion: "CIC \u00f1embopyahu", antecedentes: "Antecedentes Policiales",
    liquidacion: "Liquidaci\u00f3n IVA",
    eyebrowR: "Tesa\u0129 \u00f1e'\u1ebd mbohapy",
    vaccTitle: "Poh\u00e3 \u00f1emohenda Sofia",
  },
};

export default function Act5State() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="estado">
      <div className="ndt-side">
        {/* Left: Tramites + RUC */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrowL}</span>
          <div className="ndt-panel">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">{t.consultaRuc}</span>
              <span className="ndt-panel-meta">DNIT</span>
            </div>
            <div className="ndt-ruc-result">
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">RUC</span>
                <span className="ndt-ruc-v">4521846-6</span>
              </div>
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">{t.razonSocial}</span>
                <span className="ndt-ruc-v">GONZALEZ ACOSTA, MARIA</span>
              </div>
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">{t.estado}</span>
                <span className="ndt-ruc-v ndt-ruc-active">{t.activo}</span>
              </div>
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">{t.regimen}</span>
                <span className="ndt-ruc-v">IRP - Renta Personal</span>
              </div>
            </div>
          </div>
          <div className="ndt-tramite-list">
            <div className="ndt-tramite-item">
              <span className="ndt-tramite-name">{t.renovacion}</span>
              <span className="ndt-tramite-meta">Policia Nac. / 30min / Gs. 35.000</span>
            </div>
            <div className="ndt-tramite-item">
              <span className="ndt-tramite-name">{t.antecedentes}</span>
              <span className="ndt-tramite-meta">Digital / 5min / Gs. 20.000</span>
            </div>
            <div className="ndt-tramite-item">
              <span className="ndt-tramite-name">{t.liquidacion}</span>
              <span className="ndt-tramite-meta">DNIT / Digital / Gratis</span>
            </div>
          </div>
        </div>

        {/* Right: Health triage + vaccination */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">{t.eyebrowR}</span>
          <div className="ndt-triage">
            <div className="ndt-triage-row">
              <span className="ndt-triage-lang">ES</span>
              <span className="ndt-triage-text">&quot;Tiene fiebre y tos? Posible cuadro viral. Hidratacion y reposo.&quot;</span>
            </div>
            <div className="ndt-triage-row">
              <span className="ndt-triage-lang">GN</span>
              <span className="ndt-triage-text">&quot;Reakua ha u&apos;u? Ikatuhina virus. Eju&apos;u yy ha epyta ne rogape.&quot;</span>
            </div>
            <div className="ndt-triage-row">
              <span className="ndt-triage-lang">JO</span>
              <span className="ndt-triage-text">&quot;Che akua ha che u&apos;u? Capaz es virus nomas. Toma liquido y reposa.&quot;</span>
            </div>
          </div>
          <div className="ndt-vacc-card">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">{t.vaccTitle}</span>
              <span className="ndt-panel-meta">CIC 5.432.109 / 8 {cl === "gn" ? "ary" : "anos"}</span>
            </div>
            <div className="ndt-vacc-list">
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">BCG</span>
              </div>
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">Hexavalente (3 dosis)</span>
              </div>
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">SPR</span>
              </div>
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">COVID-19 pediatrica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
