import { Shell } from "@/components/_shared";

export default function Act6Safety() {
  return (
    <Shell label="seguridad">
      <div className="ndt-side">
        {/* Left: Police */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Seguridad ciudadana</span>
          <div className="ndt-panic">
            <div className="ndt-panic-btn">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span>Boton panico (3s)</span>
            </div>
            <span className="ndt-byline">Despacha 911 + SOS 137 + DEAM mas cercana</span>
          </div>
          <div className="ndt-discrete">
            <span className="ndt-discrete-label">Modo discreto</span>
            <span className="ndt-discrete-desc">7 toques rapidos: pantalla de calculadora, graba en silencio</span>
          </div>
          <div className="ndt-hotlines">
            <div className="ndt-hotline"><span className="ndt-hotline-n">911</span><span>Emergencia general</span></div>
            <div className="ndt-hotline"><span className="ndt-hotline-n">137</span><span>SOS Mujer (24h)</span></div>
            <div className="ndt-hotline"><span className="ndt-hotline-n">155</span><span>Salud mental (24h)</span></div>
            <div className="ndt-hotline"><span className="ndt-hotline-n">147</span><span>Bienestar infantil</span></div>
          </div>
          <div className="ndt-deam-list">
            <span className="ndt-byline">DEAM Asuncion Centro / Iturbe e/ Eligio Ayala / 1.8km</span>
            <span className="ndt-byline">DEAM Lambare / Cerro Cora 433 / 4.2km</span>
            <span className="ndt-byline">DEAM Fernando de la Mora / Ruta Mcal. Estigarribia 4500 / 5.7km</span>
          </div>
        </div>

        {/* Right: Alerts */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">Geo-alertas</span>
          <div className="ndt-alert-list">
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--rojo">rojo</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">Inundacion Chaco</span>
                <span className="ndt-alert-meta">SEN / Pte. Hayes / 80km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--naranja">naranja</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">Corte Av. Espana</span>
                <span className="ndt-alert-meta">Caminera / Centro / 2km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--amarillo">amarillo</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">Tormenta electrica Asuncion</span>
                <span className="ndt-alert-meta">DINAC+SEN / 15km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--amarillo">amarillo</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">Mantenimiento ANDE Trinidad</span>
                <span className="ndt-alert-meta">ANDE / 1.5km</span>
              </div>
            </div>
            <div className="ndt-alert-row">
              <span className="ndt-alert-badge ndt-alert--verde">verde</span>
              <div className="ndt-alert-c">
                <span className="ndt-alert-title">Dengue Lambare controlado</span>
                <span className="ndt-alert-meta">MSPyBS / 5km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
