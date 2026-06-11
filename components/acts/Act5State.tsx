import { Shell } from "@/components/_shared";

export default function Act5State() {
  return (
    <Shell label="estado">
      <div className="ndt-side">
        {/* Left: Tramites + RUC */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Tramites y gobierno</span>
          <div className="ndt-panel">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">Consulta RUC</span>
              <span className="ndt-panel-meta">DNIT</span>
            </div>
            <div className="ndt-ruc-result">
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">RUC</span>
                <span className="ndt-ruc-v">4521846-6</span>
              </div>
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">Razon Social</span>
                <span className="ndt-ruc-v">GONZALEZ ACOSTA, MARIA</span>
              </div>
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">Estado</span>
                <span className="ndt-ruc-v ndt-ruc-active">ACTIVO</span>
              </div>
              <div className="ndt-ruc-row">
                <span className="ndt-ruc-k">Regimen</span>
                <span className="ndt-ruc-v">IRP - Renta Personal</span>
              </div>
            </div>
          </div>
          <div className="ndt-tramite-list">
            <div className="ndt-tramite-item">
              <span className="ndt-tramite-name">Renovacion CIC</span>
              <span className="ndt-tramite-meta">Policia Nac. / 30min / Gs. 35.000</span>
            </div>
            <div className="ndt-tramite-item">
              <span className="ndt-tramite-name">Antecedentes Policiales</span>
              <span className="ndt-tramite-meta">Digital / 5min / Gs. 20.000</span>
            </div>
            <div className="ndt-tramite-item">
              <span className="ndt-tramite-name">Liquidacion IVA</span>
              <span className="ndt-tramite-meta">DNIT / Digital / Gratis</span>
            </div>
          </div>
        </div>

        {/* Right: Health triage + vaccination */}
        <div className="ndt-side-r" style={{ alignItems: "flex-start" }}>
          <span className="ndt-eyebrow">Salud trilingual</span>
          <div className="ndt-triage">
            <div className="ndt-triage-row">
              <span className="ndt-triage-lang">ES</span>
              <span className="ndt-triage-text">"Tiene fiebre y tos? Posible cuadro viral. Hidratacion y reposo."</span>
            </div>
            <div className="ndt-triage-row">
              <span className="ndt-triage-lang">GN</span>
              <span className="ndt-triage-text">"Reakua ha u'u? Ikatuhina virus. Eju'u yy ha epyta ne rogape."</span>
            </div>
            <div className="ndt-triage-row">
              <span className="ndt-triage-lang">JO</span>
              <span className="ndt-triage-text">"Che akua ha che u'u? Capaz es virus nomas. Toma liquido y reposa."</span>
            </div>
          </div>
          <div className="ndt-vacc-card">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">Vacunacion Sofia</span>
              <span className="ndt-panel-meta">CIC 5.432.109 / 8 anos</span>
            </div>
            <div className="ndt-vacc-list">
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">BCG</span>
              </div>
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">Hexavalente (3 dosis)</span>
              </div>
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">SPR</span>
              </div>
              <div className="ndt-vacc-row">
                <span className="ndt-vacc-check" aria-label="completa">{"+"}</span>
                <span className="ndt-vacc-name">COVID-19 pediatrica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
