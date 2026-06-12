"use client";

import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrowL: string; panicBtn: string; panicDesc: string;
  discreteLabel: string; discreteDesc: string;
  h911: string; h137: string; h155: string; h147: string;
  eyebrowR: string;
  alertInundacion: string; alertCorte: string; alertTormenta: string;
  alertAnde: string; alertDengue: string;
  rojo: string; naranja: string; amarillo: string; verde: string;
}> = {
  es: {
    eyebrowL: "Seguridad ciudadana",
    panicBtn: "Boton panico (3s)",
    panicDesc: "Despacha 911 + SOS 137 + DEAM mas cercana",
    discreteLabel: "Modo discreto",
    discreteDesc: "7 toques rapidos: pantalla de calculadora, graba en silencio",
    h911: "Emergencia general", h137: "SOS Mujer (24h)",
    h155: "Salud mental (24h)", h147: "Bienestar infantil",
    eyebrowR: "Geo-alertas",
    alertInundacion: "Inundacion Chaco", alertCorte: "Corte Av. Espana",
    alertTormenta: "Tormenta electrica Asuncion",
    alertAnde: "Mantenimiento ANDE Trinidad",
    alertDengue: "Dengue Lambare controlado",
    rojo: "rojo", naranja: "naranja", amarillo: "amarillo", verde: "verde",
  },
  gn: {
    eyebrowL: "Tekoros\u00e3 tet\u00e3gu\u00e1pe",
    panicBtn: "Vot\u00f5 apa\u00f1u\u00e3i (3s)",
    panicDesc: "Omondo 911 + SOS 137 + DEAM o\u0129v\u00e9va",
    discreteLabel: "Modo ka\u00f1y",
    discreteDesc: "7 toque pya'e: calculadora ta'\u00e3nga, o\u00f1ongatu kirir\u0129h\u00e1me",
    h911: "Apa\u00f1u\u00e3i tuichakue", h137: "SOS Ku\u00f1a (24h)",
    h155: "Tesa\u0129 ak\u00e3 (24h)", h147: "Mit\u00e3 rekove por\u00e3",
    eyebrowR: "Geo-marandu",
    alertInundacion: "Yguasu Chaco", alertCorte: "Corte Av. Espa\u00f1a",
    alertTormenta: "Arai rendy Asunci\u00f3n",
    alertAnde: "\u00d1emyatyr\u00f5 ANDE Trinidad",
    alertDengue: "Dengue Lambar\u00e9 ojeipykueva",
    rojo: "pytaguasu", naranja: "naranja", amarillo: "sa'yju", verde: "hovyju",
  },
};

export default function Act6Safety() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="seguridad">
      <div className="ndt-side">
        {/* Left: Police */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrowL}</span>
          <div className="ndt-panic">
            <div className="ndt-panic-btn">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span>{t.panicBtn}</span>
            </div>
            <span className="ndt-byline">{t.panicDesc}</span>
          </div>
          <div className="ndt-discrete">
            <span className="ndt-discrete-label">{t.discreteLabel}</span>
            <span className="ndt-discrete-desc">{t.discreteDesc}</span>
          </div>
          <div className="ndt-hotlines">
            <div className="ndt-hotline"><span className="ndt-hotline-n">911</span><span>{t.h911}</span></div>
            <div className="ndt-hotline"><span className="ndt-hotline-n">137</span><span>{t.h137}</span></div>
            <div className="ndt-hotline"><span className="ndt-hotline-n">155</span><span>{t.h155}</span></div>
            <div className="ndt-hotline"><span className="ndt-hotline-n">147</span><span>{t.h147}</span></div>
          </div>
          <div className="ndt-deam-list">
            <span className="ndt-byline">DEAM Asuncion Centro / Iturbe e/ Eligio Ayala / 1.8km</span>
            <span className="ndt-byline">DEAM Lambare / Cerro Cora 433 / 4.2km</span>
            <span className="ndt-byline">DEAM Fernando de la Mora / Ruta Mcal. Estigarribia 4500 / 5.7km</span>
          </div>
        </div>

        {/* Right: Alerts */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">{t.eyebrowR}</span>
          <div className="ndt-alert-list">
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--rojo">{t.rojo}</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">{t.alertInundacion}</span>
                <span className="ndt-alert-meta">SEN / Pte. Hayes / 80km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--naranja">{t.naranja}</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">{t.alertCorte}</span>
                <span className="ndt-alert-meta">Caminera / Centro / 2km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--amarillo">{t.amarillo}</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">{t.alertTormenta}</span>
                <span className="ndt-alert-meta">DINAC+SEN / 15km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--amarillo">{t.amarillo}</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">{t.alertAnde}</span>
                <span className="ndt-alert-meta">ANDE / 1.5km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--verde">{t.verde}</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">{t.alertDengue}</span>
                <span className="ndt-alert-meta">MSPyBS / 5km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
