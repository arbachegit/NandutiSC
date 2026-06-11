import { Shell } from "@/components/_shared";

const FEED = [
  { date: "10 may", title: "Presidencia anuncia plan de conectividad rural 2026-2030", byline: "Agencia IP \u00b7 2h" },
  { date: "9 may",  title: "BCP mantiene tasa de politica monetaria en 6%",             byline: "BCP \u00b7 1d" },
  { date: "8 may",  title: "MEC habilita matricula digital en 1.200 instituciones",     byline: "MEC \u00b7 2d" },
];

const TICKER = [
  { code: "USD", value: "7.389" },
  { code: "EUR", value: "8.242" },
  { code: "BRL", value: "1.338" },
  { code: "ARS", value: "6,21" },
];

const LAYERS = [
  { roman: "I",   label: "COLECTA",        headline: "7 fuentes",     sub: ["Agencia IP \u00b7 BCP", "DINAC \u00b7 DNCP", "MEC \u00b7 SEN \u00b7 MSPBS"] },
  { roman: "II",  label: "ALMACEN",        headline: "Supabase PG",   sub: ["RLS \u00b7 views SQL", "audit estoniano", "raw \u2192 staging \u2192 vistas"] },
  { roman: "III", label: "ORQUESTACION",   headline: "28 tools",      sub: ["Next.js 15 \u00b7 Redis", "MITIC identity", "cache 300s"] },
  { roman: "IV",  label: "MODELOS",        headline: "Haiku \u00b7 Sonnet", sub: ["DigitalOcean", "Gradient AI", "6x mas barato"] },
];

export default function Act4Stack() {
  return (
    <Shell label="Datos y arquitectura del Paraguay real">
      <div className="ndt-side">
        {/* Left — data sources panel */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Datos del Paraguay real</span>
          <h2 className="ndt-h2">Siete fuentes oficiales, en tiempo casi real.</h2>

          {/* Feed */}
          <div className="ndt-feed" style={{ marginTop: 8 }}>
            {FEED.map((item, i) => (
              <div key={i} className="ndt-feed-row">
                <span className="ndt-feed-date">{item.date}</span>
                <div className="ndt-feed-c">
                  <span className="ndt-feed-title">{item.title}</span>
                  <span className="ndt-feed-byline">{item.byline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* BCP ticker */}
          <div style={{ marginTop: 12 }}>
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">Cotizacion BCP</span>
              <span className="ndt-panel-meta">10 may 2026</span>
            </div>
            <div className="ndt-ticker">
              {TICKER.map((t) => (
                <div key={t.code} className="ndt-ticker-cell">
                  <span className="ndt-ticker-k">{t.code}</span>
                  <span className="ndt-ticker-v">{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — architecture diagram */}
        <div className="ndt-side-r">
          <div className="ndt-arch">
            {LAYERS.map((layer) => (
              <div key={layer.roman} className="ndt-arch-box">
                <div className="ndt-arch-label">{layer.roman} &middot; {layer.label}</div>
                <div className="ndt-arch-headline">{layer.headline}</div>
                <div className="ndt-arch-sub">
                  {layer.sub.map((s, j) => (
                    <div key={j}>{s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
