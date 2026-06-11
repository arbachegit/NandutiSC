import { Shell } from "@/components/_shared";
import { ChatChrome, LaceSeal } from "./_act-shared";

export default function Act2Dialog() {
  return (
    <Shell label="Una pregunta, una herramienta, una respuesta">
      <div className="ndt-side">
        {/* Left — text + steps */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Dialogo &middot; 1 prompt, 1 accion</span>
          <h2 className="ndt-h2">Una pregunta. Una herramienta. Una respuesta.</h2>
          <p className="ndt-lead">
            El ciudadano pregunta en su idioma. La IA decide que tool llamar y devuelve datos reales del Estado paraguayo.
          </p>
          <ol className="ndt-steps">
            <li className="ndt-step"><span className="ndt-step-n">01</span> Ciudadano pregunta</li>
            <li className="ndt-step"><span className="ndt-step-n">02</span> IA elige tool</li>
            <li className="ndt-step"><span className="ndt-step-n">03</span> Banco responde</li>
            <li className="ndt-step"><span className="ndt-step-n">04</span> IA humaniza</li>
          </ol>
        </div>

        {/* Right — chat mockup */}
        <div className="ndt-side-r">
          <ChatChrome>
            {/* User message */}
            <div className="ndt-msg ndt-msg-user">Cuanto tengo?</div>

            {/* Tool call */}
            <div className="ndt-tool-call">
              <span className="ndt-tool-call-fn">wallet.balance()</span>
              <span className="ndt-tool-call-arrow">&rarr;</span>
              <span className="ndt-tool-call-out">
                {'{ pyg_balance: 4_350_000, usdc_balance: 247.83,'}{"\n"}
                {'  cotacao_usd_pyg: { rate: 6159.41, fonte: "BCP" } }'}
              </span>
            </div>

            {/* AI response */}
            <div className="ndt-msg ndt-msg-ai">
              <span style={{ flexShrink: 0, marginTop: 2 }}>
                <LaceSeal size={22} rays={12} rings={3} stroke="#22d3ee" opacity={0.9} />
              </span>
              <span>Tu saldo: Gs. 4.350.000 + 247,83 USDC. Cotizacion BCP de hoy: Gs. 6.159,41 por dolar.</span>
            </div>
          </ChatChrome>
        </div>
      </div>
    </Shell>
  );
}
