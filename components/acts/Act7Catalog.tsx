"use client";

import { MiniAppIcon, MINI_APPS } from "./_act-shared";
import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, { eyebrow: string; h2: string }> = {
  es: {
    eyebrow: "Nueve micro-aplicaciones",
    h2: "Cada servicio del Estado, una conversacion.",
  },
  gn: {
    eyebrow: "9 micro-app",
    h2: "Pete\u0129te\u0129 Estado mba'e, pete\u0129 \u00f1omongeta.",
  },
};

export default function Act7Catalog() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="catalogo">
      <div className="ndt-vert">
        <div className="ndt-vert-top">
          <span className="ndt-eyebrow">{t.eyebrow}</span>
          <h2 className="ndt-h2">{t.h2}</h2>
        </div>
        <div className="ndt-vert-body">
          <div className="ndt-catalog">
            {MINI_APPS.map((app, i) => (
              <div key={app.id} className="ndt-catalog-row">
                <span className="ndt-catalog-n">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className="ndt-catalog-icon"
                  style={{ background: `${app.color}18`, color: app.color }}
                >
                  <MiniAppIcon app={app.id} />
                </span>
                <div className="ndt-catalog-c">
                  <span className="ndt-catalog-name">{app.name[cl]}</span>
                  <span className="ndt-catalog-tag">{app.tag[cl]}</span>
                </div>
                <span className="ndt-catalog-arr">{">"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
