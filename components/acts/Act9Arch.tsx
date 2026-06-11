import { Shell } from "@/components/_shared";

export default function Act9Arch() {
  return (
    <Shell label="arquitectura">
      <div className="ndt-vert">
        <div className="ndt-vert-top">
          <span className="ndt-eyebrow">Stack soberana</span>
          <h2 className="ndt-h2">Cuatro capas, cero dependencia externa para datos ciudadanos.</h2>
        </div>
        <div className="ndt-vert-body">
          <div className="ndt-arch">
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">I / Colecta</span>
              <span className="ndt-arch-headline">7 fuentes</span>
              <div className="ndt-arch-sub">
                Agencia IP / BCP
                <br />
                DINAC / DNCP
                <br />
                MEC / SEN / MSPBS
              </div>
            </div>
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">II / Almacen</span>
              <span className="ndt-arch-headline">Supabase PG</span>
              <div className="ndt-arch-sub">
                Row-Level Security
                <br />
                Views SQL materializadas
                <br />
                Audit estoniano
              </div>
            </div>
            <div className="ndt-arch-box">
              <span className="ndt-arch-label">III / Orquestracion</span>
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
              <span className="ndt-arch-label">IV / Modelos</span>
              <span className="ndt-arch-headline">Haiku + Sonnet</span>
              <div className="ndt-arch-sub">
                DigitalOcean Gradient AI
                <br />
                6x mas barato
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
