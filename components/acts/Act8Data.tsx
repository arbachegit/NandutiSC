import { Shell } from "@/components/_shared";

const SOURCES = [
  { oee: "Agencia IP", title: "Identidad Electronica supera 1M de activaciones", date: "May 26" },
  { oee: "BCP", title: "SIP-BCP habilita transferencias 24/7 entre bancos", date: "May 26" },
  { oee: "MSPyBS", title: "Cobertura Hexavalente repunta a 92% nacional", date: "May 26" },
  { oee: "MEC", title: "4.100 escuelas conectadas a internet (46% penetracion)", date: "May 26" },
  { oee: "SEN", title: "Alerta de inundaciones en el Chaco occidental", date: "May 26" },
];

export default function Act8Data() {
  return (
    <Shell label="datos">
      <div className="ndt-side">
        {/* Left: 7 sources feed */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Datos del Paraguay real</span>
          <h2 className="ndt-h2">Siete fuentes oficiales, en tiempo casi real.</h2>
          <div className="ndt-feed">
            {SOURCES.map((s) => (
              <div key={s.oee} className="ndt-feed-row">
                <span className="ndt-feed-date">{s.date}</span>
                <div className="ndt-feed-c">
                  <span className="ndt-feed-title">{s.title}</span>
                  <span className="ndt-feed-byline">{s.oee}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ndt-source-tags">
            <span className="ndt-byline">Agencia IP / BCP / DINAC / DNCP / MEC / SEN / MSPBS</span>
          </div>
        </div>

        {/* Right: Education + PISA */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">Educacion + PISA 2022</span>
          <div className="ndt-report-card">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">Boletin Sofia Gonzalez</span>
              <span className="ndt-panel-meta">3er grado / P1 2026</span>
            </div>
            <div className="ndt-grade-list">
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">Matematica</span>
                <span className="ndt-grade-val">3,6/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">Comunicacion Castellana</span>
                <span className="ndt-grade-val">3,9/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">Comunicacion Guarani</span>
                <span className="ndt-grade-val">4,2/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">Ciencias Naturales</span>
                <span className="ndt-grade-val">4,1/5,0</span>
              </div>
              <div className="ndt-grade-row">
                <span className="ndt-grade-subj">Historia y Geografia</span>
                <span className="ndt-grade-val">3,4/5,0</span>
              </div>
            </div>
            <span className="ndt-byline" style={{ marginTop: "6px" }}>Asistencia: 38/40 (95%)</span>
          </div>
          <div className="ndt-pisa">
            <span className="ndt-pisa-label">PISA 2022 / Matematica</span>
            <div className="ndt-pisa-bars">
              <div className="ndt-pisa-bar">
                <span className="ndt-pisa-country">Paraguay</span>
                <div className="ndt-pisa-track">
                  <div className="ndt-pisa-fill" style={{ width: "15%" }} />
                </div>
                <span className="ndt-pisa-pct">15%</span>
              </div>
              <div className="ndt-pisa-bar">
                <span className="ndt-pisa-country">OCDE</span>
                <div className="ndt-pisa-track">
                  <div className="ndt-pisa-fill ndt-pisa-fill--ocde" style={{ width: "69%" }} />
                </div>
                <span className="ndt-pisa-pct">69%</span>
              </div>
            </div>
            <span className="ndt-byline">% de estudiantes en nivel 2 o superior</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
