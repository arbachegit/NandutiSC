import { Shell } from "@/components/_shared";
import { LaceSeal } from "./_act-shared";

export default function Act1Hero() {
  return (
    <Shell label="Tu Paraguay, en una conversacion">
      <div className="ndt-side">
        {/* Left — Lace seal + stats */}
        <div className="ndt-side-l" style={{ alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div className="ndt-lace" style={{ position: "relative", transform: "none" }}>
            <LaceSeal size={340} rays={20} rings={6} stroke="#22d3ee" opacity={0.16} spinSec={360} />
          </div>
          <span className="ndt-stats-badge" style={{ marginTop: 16 }}>
            28 herramientas &middot; 9 mini-apps &middot; 5 idiomas
          </span>
        </div>

        {/* Right — headline + lead */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: "48ch" }}>
            <span className="ndt-eyebrow">Portal ciudadano &middot; IA-first &middot; 2026</span>
            <h1 className="ndt-h1">
              Tu Paraguay,<br />en una conversacion.
            </h1>
            <p className="ndt-lead">
              Pedile en cualquiera de cinco idiomas. La IA conecta tu cedula con servicios reales del Estado &mdash; tramites, salud, escuela, alertas, denuncias, billetera.
            </p>
            <span className="ndt-byline">Publicado por IconsAI &middot; Asuncion &middot; Paraguay</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
