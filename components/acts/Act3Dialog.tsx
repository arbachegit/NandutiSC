"use client";

import { ChatChrome, LaceSeal } from "./_act-shared";
import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrow: string; h2a: string; h2b: string; h2c: string;
  s1: string; s2: string; s3: string; s4: string;
  userMsg: string; aiMsg1: string; aiMsg2: string;
}> = {
  es: {
    eyebrow: "Dialogo / 1 prompt, 1 accion",
    h2a: "Una pregunta.", h2b: "Una herramienta.", h2c: "Una respuesta.",
    s1: "El ciudadano habla en su idioma",
    s2: "La IA identifica la intencion",
    s3: "La herramienta ejecuta (wallet, salud, tramite...)",
    s4: "La respuesta se humaniza en el idioma del ciudadano",
    userMsg: "Cuanto tengo?",
    aiMsg1: "Tu saldo: Gs. 4.350.000 + 247,83 USDC.",
    aiMsg2: "Cotizacion BCP del dia: Gs. 6.159,41 por dolar.",
  },
  gn: {
    eyebrow: "\u00d1omongeta / 1 porandu, 1 mba'apo",
    h2a: "Pete\u0129 porandu.", h2b: "Pete\u0129 tembiporu.", h2c: "Pete\u0129 \u00f1embohovai.",
    s1: "Tet\u00e3gua o\u00f1e'\u1ebd i\u00f1e'\u1ebdme",
    s2: "IA oikuaa mba'e oipotava",
    s3: "Tembiporu omba'apo (viru ryru, tesa\u0129, tramite...)",
    s4: "\u00d1embohovai o\u00f1emopor\u00e3v\u1ebd tet\u00e3gua \u00f1e'\u1ebdme",
    userMsg: "Mboy che rekove?",
    aiMsg1: "Ne saldo: Gs. 4.350.000 + 247,83 USDC.",
    aiMsg2: "BCP kotisasion ko arave: Gs. 6.159,41 pete\u0129 dolar.",
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

        {/* Right: Chat mockup */}
        <div className="ndt-side-r">
          <ChatChrome>
            <div className="ndt-msg ndt-msg-user">{t.userMsg}</div>
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
                {t.aiMsg1}
                <br />
                {t.aiMsg2}
              </span>
            </div>
          </ChatChrome>
        </div>
      </div>
    </Shell>
  );
}
