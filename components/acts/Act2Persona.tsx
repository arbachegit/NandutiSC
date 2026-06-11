import { Shell } from "@/components/_shared";

export default function Act2Persona() {
  return (
    <Shell label="persona">
      <div className="ndt-side">
        {/* Left: Persona card */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Demo persona</span>
          <div className="ndt-persona-card">
            <div className="ndt-persona-avatar">MG</div>
            <div className="ndt-persona-info">
              <h2 className="ndt-persona-name">Maria Gonzalez Acosta</h2>
              <span className="ndt-persona-badge">CIC 4.521.846</span>
            </div>
          </div>
          <div className="ndt-persona-details">
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">Edad</span>
              <span className="ndt-persona-v">34 anos</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">Ciudad</span>
              <span className="ndt-persona-v">Trinidad, Asuncion</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">Idioma</span>
              <span className="ndt-persona-v">Jopara (es + gn)</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">IPS</span>
              <span className="ndt-persona-v">Trabajador Activo</span>
            </div>
            <div className="ndt-persona-row">
              <span className="ndt-persona-k">RUC</span>
              <span className="ndt-persona-v">4521846-6 / IRP Renta Personal</span>
            </div>
          </div>
        </div>

        {/* Right: Family tree */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">Familia</span>
          <div className="ndt-family">
            <div className="ndt-family-member">
              <span className="ndt-family-icon" style={{ background: "rgba(34,211,238,.15)", color: "#22d3ee" }}>JG</span>
              <div className="ndt-family-info">
                <span className="ndt-family-name">Juan Gonzalez Perez</span>
                <span className="ndt-family-meta">Esposo / 36 anos / CIC 3.987.654</span>
              </div>
            </div>
            <div className="ndt-family-member">
              <span className="ndt-family-icon" style={{ background: "rgba(249,115,22,.15)", color: "#f97316" }}>SG</span>
              <div className="ndt-family-info">
                <span className="ndt-family-name">Sofia Gonzalez</span>
                <span className="ndt-family-meta">Hija / 8 anos / 3er grado / ESC-234 Trinidad</span>
              </div>
            </div>
            <div className="ndt-family-member">
              <span className="ndt-family-icon" style={{ background: "rgba(34,197,94,.15)", color: "#22c55e" }}>MG</span>
              <div className="ndt-family-info">
                <span className="ndt-family-name">Mateo Gonzalez</span>
                <span className="ndt-family-meta">Hijo / 3 anos</span>
              </div>
            </div>
          </div>
          <p className="ndt-lead" style={{ marginTop: "12px" }}>
            A traves de Maria vemos cada servicio que Nanduti ofrece.
            Su idioma preferido es jopara, la mezcla guarani-castellano hablada por el 90% de los paraguayos.
          </p>
        </div>
      </div>
    </Shell>
  );
}
