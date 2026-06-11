import { LaceSeal } from "./_act-shared";
import { Shell } from "@/components/_shared";

export default function Act1Cover() {
  return (
    <Shell label="cover">
      <div className="ndt-side">
        {/* Left: Lace Seal */}
        <div className="ndt-side-l" style={{ alignItems: "center", justifyContent: "center" }}>
          <div className="ndt-lace" style={{ position: "relative" }}>
            <LaceSeal size={320} rays={20} rings={6} stroke="#22d3ee" opacity={0.16} spinSec={360} />
          </div>
        </div>

        {/* Right: Hero text + stats */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <span className="ndt-eyebrow">Portal ciudadano / IA-first / 2026</span>
          <h1 className="ndt-h1">
            Tu Paraguay,
            <br />
            en una conversacion.
          </h1>
          <p className="ndt-lead">
            Pedile en cualquiera de cinco idiomas. Nanduti orquesta 28 herramientas del Estado para
            resolver lo que necesites en una sola conversacion.
          </p>
          <div className="ndt-stats-badge" style={{ marginTop: "8px" }}>
            28 herramientas / 9 mini-apps / 5 idiomas
          </div>
        </div>
      </div>
    </Shell>
  );
}
