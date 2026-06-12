"use client";

import { ChatChrome, LaceSeal } from "./_act-shared";
import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrow: string; h2a: string; h2b: string; h2c: string;
  s1: string; s2: string; s3: string; s4: string;
  /* Turn 1: wallet */
  u1: string; ai1a: string; ai1b: string;
  /* Turn 2: health */
  u2: string; ai2: string;
  /* Turn 3: alerts */
  u3: string; ai3: string;
  /* Input placeholder */
  inputPlaceholder: string;
}> = {
  es: {
    eyebrow: "Dialogo / 1 prompt, 1 accion",
    h2a: "Una pregunta.", h2b: "Una herramienta.", h2c: "Una respuesta.",
    s1: "El ciudadano habla en su idioma",
    s2: "La IA identifica la intencion",
    s3: "La herramienta ejecuta (wallet, salud, tramite...)",
    s4: "La respuesta se humaniza en el idioma del ciudadano",
    u1: "Cuanto tengo en mi billetera?",
    ai1a: "Tu saldo: Gs. 4.350.000 + 247,83 USDC.",
    ai1b: "Cotizacion BCP: Gs. 6.159,41/USD.",
    u2: "Las vacunas de Sofia estan al dia?",
    ai2: "Sofia (8a) tiene BCG, Pentavalente y SPR completas. Proxima: refuerzo DPT en agosto.",
    u3: "Hay alguna alerta en mi zona?",
    ai3: "SEN emitio alerta naranja de inundacion en Chaco occidental. Tu zona (Trinidad) no esta afectada.",
    inputPlaceholder: "Escribi tu pregunta...",
  },
  gn: {
    eyebrow: "\u00d1omongeta / 1 porandu, 1 mba'apo",
    h2a: "Pete\u0129 porandu.", h2b: "Pete\u0129 tembiporu.", h2c: "Pete\u0129 \u00f1embohovai.",
    s1: "Tet\u00e3gua o\u00f1e'\u1ebd i\u00f1e'\u1ebdme",
    s2: "IA oikuaa mba'e oipotava",
    s3: "Tembiporu omba'apo (viru ryru, tesa\u0129, tramite...)",
    s4: "\u00d1embohovai o\u00f1emopor\u00e3v\u1ebd tet\u00e3gua \u00f1e'\u1ebdme",
    u1: "Mboy che rekove che viru ryrupe?",
    ai1a: "Ne saldo: Gs. 4.350.000 + 247,83 USDC.",
    ai1b: "BCP kotisasion: Gs. 6.159,41/USD.",
    u2: "Sofia poha \u00f1emohenda oimepa oi\u0303poraiteva?",
    ai2: "Sofia (8 ary) oguereko BCG, Pentavalente ha SPR opaite. Ouvaha: DPT jasypoapy.",
    u3: "Oime pa marandu\u2019i che rendape?",
    ai3: "SEN omombe\u2019u marandu naranja yguasu rehegua Chaco ypy k\u00e1rape. Ne renda (Trinidad) ndoikovei.",
    inputPlaceholder: "Ehai ne porandu...",
  },
};

export default function Act3Dialog() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="dialogo">
      <div className="ndt-side">
        {/* Left: 4-step flow */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrow}</span>
          <h2 className="ndt-h2">
            {t.h2a}
            <br />
            {t.h2b}
            <br />
            {t.h2c}
          </h2>
          <ol className="ndt-steps">
            <li className="ndt-step">
              <span className="ndt-step-n">01</span>
              <span>{t.s1}</span>
            </li>
            <li className="ndt-step">
              <span className="ndt-step-n">02</span>
              <span>{t.s2}</span>
            </li>
            <li className="ndt-step">
              <span className="ndt-step-n">03</span>
              <span>{t.s3}</span>
            </li>
            <li className="ndt-step">
              <span className="ndt-step-n">04</span>
              <span>{t.s4}</span>
            </li>
          </ol>
        </div>

        {/* Right: Multi-turn chat mockup */}
        <div className="ndt-side-r">
          <ChatChrome>
            {/* Turn 1: Wallet balance */}
            <div className="ndt-msg ndt-msg-user">{t.u1}</div>
            <div className="ndt-tool-call">
              <span className="ndt-tool-call-fn">wallet.balance()</span>
              <span className="ndt-tool-call-arrow">{"\u2192"}</span>
              <span className="ndt-tool-call-out">{"{ pyg: 4350000, usdc: 247.83 }"}</span>
            </div>
            <div className="ndt-msg ndt-msg-ai">
              <LaceSeal size={20} rays={12} rings={3} stroke="#22d3ee" opacity={0.9} className="ndt-ai-avatar" />
              <span>{t.ai1a}<br />{t.ai1b}</span>
            </div>

            {/* Turn 2: Health / vaccination */}
            <div className="ndt-msg ndt-msg-user">{t.u2}</div>
            <div className="ndt-tool-call">
              <span className="ndt-tool-call-fn">health.vacunas({'"Sofia"'})</span>
              <span className="ndt-tool-call-arrow">{"\u2192"}</span>
              <span className="ndt-tool-call-out">{"{ status: \"completas\", next: \"DPT ago\" }"}</span>
            </div>
            <div className="ndt-msg ndt-msg-ai">
              <LaceSeal size={20} rays={12} rings={3} stroke="#22d3ee" opacity={0.9} className="ndt-ai-avatar" />
              <span>{t.ai2}</span>
            </div>

            {/* Turn 3: Alerts */}
            <div className="ndt-msg ndt-msg-user">{t.u3}</div>
            <div className="ndt-tool-call">
              <span className="ndt-tool-call-fn">alerts.active({'"Trinidad"'})</span>
              <span className="ndt-tool-call-arrow">{"\u2192"}</span>
              <span className="ndt-tool-call-out">{"{ alerts: 1, zona: \"no afectada\" }"}</span>
            </div>
            <div className="ndt-msg ndt-msg-ai">
              <LaceSeal size={20} rays={12} rings={3} stroke="#22d3ee" opacity={0.9} className="ndt-ai-avatar" />
              <span>{t.ai3}</span>
            </div>

            {/* Chat input bar */}
            <div className="ndt-chat-input">
              <span className="ndt-chat-input-text">{t.inputPlaceholder}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </ChatChrome>
        </div>
      </div>
    </Shell>
  );
}
