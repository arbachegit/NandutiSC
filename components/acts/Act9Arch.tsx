"use client";

import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrow: string; h2: string;
  colecta: string; fuentes: string;
  almacen: string; views: string; audit: string;
  orquestracion: string;
  modelos: string; barato: string;
}> = {
  es: {
    eyebrow: "Stack soberana",
    h2: "Cuatro capas, cero dependencia externa para datos ciudadanos.",
    colecta: "Colecta", fuentes: "7 fuentes",
    almacen: "Almacen", views: "Views SQL materializadas", audit: "Audit estoniano",
    orquestracion: "Orquestracion",
    modelos: "Modelos", barato: "6x mas barato",
  },
  gn: {
    eyebrow: "Stack soberana",
    h2: "Irundy ñemboja, mamove ndoikoi heta oñondive tetãgua datos rehegua.",
    colecta: "\u00d1embyaty", fuentes: "7 ykuaaty",
    almacen: "\u00d1ongatu", views: "Views SQL materializadas", audit: "Audit estoniano",
    orquestracion: "Orquestaci\u00f3n",
    modelos: "Modelo", barato: "6x hepy'ive",
  },
};

export default function Act9Arch() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="arquitectura">
      <div className="ndt-vert">
        <div className="ndt-vert-top">
          <span className="ndt-eyebrow">{t.eyebrow}</span>
          <h2 className="ndt-h2">{t.h2}</h2>
        </div>
        <div className="ndt-vert-body">
          <div className="ndt-arch">
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">I / {t.colecta}</span>
              <span className="ndt-arch-headline">{t.fuentes}</span>
              <div className="ndt-arch-sub">
                Agencia IP / BCP
                <br />
                DINAC / DNCP
                <br />
                MEC / SEN / MSPBS
              </div>
            </div>
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">II / {t.almacen}</span>
              <span className="ndt-arch-headline">Supabase PG</span>
              <div className="ndt-arch-sub">
                Row-Level Security
                <br />
                {t.views}
                <br />
                {t.audit}
              </div>
            </div>
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">III / {t.orquestracion}</span>
              <span className="ndt-arch-headline">28 tools</span>
              <div className="ndt-arch-sub">
                Next.js 15 + Redis
                <br />
                MITIC OAuth
                <br />
                Cache 300s
              </div>
            </div>
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">IV / {t.modelos}</span>
              <span className="ndt-arch-headline">Haiku + Sonnet</span>
              <div className="ndt-arch-sub">
                DigitalOcean Gradient AI
                <br />
                {t.barato}
                <br />
                es / gn / jopara / pt / en
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
