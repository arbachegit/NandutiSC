import { LaceSeal } from "./_act-shared";

export default function Act1Cover() {
  return (
    <div className="ndt-cover">
      {/* Full-screen background lace seal */}
      <div className="ndt-cover-seal">
        <LaceSeal size={900} rays={20} rings={6} stroke="#22d3ee" opacity={0.14} spinSec={360} />
      </div>

      {/* Content overlaid on top */}
      <div className="ndt-cover-content">
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
  );
}
