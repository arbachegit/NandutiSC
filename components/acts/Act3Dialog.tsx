import { ChatChrome, LaceSeal } from "./_act-shared";
import { Shell } from "@/components/_shared";

export default function Act3Dialog() {
  return (
    <Shell label="dialogo">
      <div className="ndt-side">
        {/* Left: 4-step flow */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Dialogo / 1 prompt, 1 accion</span>
          <h2 className="ndt-h2">
            Una pregunta.
            <br />
            Una herramienta.
            <br />
            Una respuesta.
          </h2>
          <ol className="ndt-steps">
            <li className="ndt-step">
              <span className="ndt-step-n">01</span>
              <span>El ciudadano habla en su idioma</span>
            </li>
            <li className="ndt-step">
              <span className="ndt-step-n">02</span>
              <span>La IA identifica la intencion</span>
            </li>
            <li className="ndt-step">
              <span className="ndt-step-n">03</span>
              <span>La herramienta ejecuta (wallet, salud, tramite...)</span>
            </li>
            <li className="ndt-step">
              <span className="ndt-step-n">04</span>
              <span>La respuesta se humaniza en el idioma del ciudadano</span>
            </li>
          </ol>
        </div>

        {/* Right: Chat mockup */}
        <div className="ndt-side-r">
          <ChatChrome>
            <div className="ndt-msg ndt-msg-user">Cuanto tengo?</div>
            <div className="ndt-tool-call">
              <span className="ndt-tool-call-fn">wallet.balance()</span>
              <span className="ndt-tool-call-arrow">{"->"}</span>
              <span className="ndt-tool-call-out">
                {"{ pyg: 4350000, usdc: 247.83, rate: 6159.41 }"}
              </span>
            </div>
            <div className="ndt-msg ndt-msg-ai">
              <LaceSeal size={22} rays={12} rings={3} stroke="#22d3ee" opacity={0.9} className="ndt-ai-avatar" />
              <span>
                Tu saldo: Gs. 4.350.000 + 247,83 USDC.
                <br />
                Cotizacion BCP del dia: Gs. 6.159,41 por dolar.
              </span>
            </div>
          </ChatChrome>
        </div>
      </div>
    </Shell>
  );
}
