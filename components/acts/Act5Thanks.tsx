import { Shell } from "@/components/_shared";
import { LaceSeal } from "./_act-shared";

export default function Act5Thanks() {
  return (
    <Shell label="Obrigado">
      <div className="ndt-thanks">
        {/* Background lace seal */}
        <div className="ndt-lace">
          <LaceSeal size={500} rays={20} rings={6} stroke="#22d3ee" opacity={0.06} spinSec={420} />
        </div>

        <h1 className="ndt-thanks-title">Obrigado.</h1>

        <a className="logo-iconsai" href="https://iconsai.ai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <span className="logo-i">i</span>
          <span className="logo-cons">cons</span>
          <span className="logo-ai">.ai</span>
        </a>

        <span className="ndt-thanks-url">iconsai.ai</span>

        {/* Stats row */}
        <div className="ndt-stat-row" style={{ marginTop: 8 }}>
          <div className="ndt-stat"><span className="ndt-stat-num">28</span><span className="ndt-stat-lbl">herramientas</span></div>
          <div className="ndt-stat"><span className="ndt-stat-num">9</span><span className="ndt-stat-lbl">mini-apps</span></div>
          <div className="ndt-stat"><span className="ndt-stat-num">5</span><span className="ndt-stat-lbl">idiomas</span></div>
          <div className="ndt-stat"><span className="ndt-stat-num">7</span><span className="ndt-stat-lbl">fuentes</span></div>
        </div>

        {/* Manifesto */}
        <p className="ndt-manifesto">
          Una infraestructura digital se mide por su respeto al ciudadano.
        </p>
      </div>
    </Shell>
  );
}
