"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LaceSeal } from "./_act-shared";
import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

/* ── Turn data (bilingual) ─────────────────────────────────────── */

type Turn = {
  user: string;
  toolFn: string;
  toolOut: string;
  ai: string[];
};

const TURNS: Record<ContentLocale, Turn[]> = {
  es: [
    {
      user: "Cuanto tengo en mi billetera?",
      toolFn: "wallet.balance()",
      toolOut: "{ pyg: 4350000, usdc: 247.83 }",
      ai: ["Tu saldo: Gs. 4.350.000 + 247,83 USDC.", "Cotizacion BCP: Gs. 6.159,41/USD."],
    },
    {
      user: "Las vacunas de Sofia estan al dia?",
      toolFn: 'health.vacunas("Sofia")',
      toolOut: '{ status: "completas", next: "DPT ago" }',
      ai: ["Sofia (8a) tiene BCG, Pentavalente y SPR completas.", "Proxima: refuerzo DPT en agosto."],
    },
    {
      user: "Hay alguna alerta en mi zona?",
      toolFn: 'alerts.active("Trinidad")',
      toolOut: '{ alerts: 1, zona: "no afectada" }',
      ai: ["SEN emitio alerta naranja de inundacion en Chaco occidental.", "Tu zona (Trinidad) no esta afectada."],
    },
  ],
  gn: [
    {
      user: "Mboy che rekove che viru ryrupe?",
      toolFn: "wallet.balance()",
      toolOut: "{ pyg: 4350000, usdc: 247.83 }",
      ai: ["Ne saldo: Gs. 4.350.000 + 247,83 USDC.", "BCP kotisasion: Gs. 6.159,41/USD."],
    },
    {
      user: "Sofia poha \u00f1emohenda oimepa oi\u0303poraiteva?",
      toolFn: 'health.vacunas("Sofia")',
      toolOut: '{ status: "completas", next: "DPT ago" }',
      ai: ["Sofia (8 ary) oguereko BCG, Pentavalente ha SPR opaite.", "Ouvaha: DPT jasypoapy."],
    },
    {
      user: "Oime pa marandu\u2019i che rendape?",
      toolFn: 'alerts.active("Trinidad")',
      toolOut: '{ alerts: 1, zona: "no afectada" }',
      ai: ["SEN omombe\u2019u marandu naranja yguasu rehegua Chaco ypy k\u00e1rape.", "Ne renda (Trinidad) ndoikovei."],
    },
  ],
};

const T: Record<ContentLocale, {
  eyebrow: string; h2a: string; h2b: string; h2c: string;
  s1: string; s2: string; s3: string; s4: string;
  inputPlaceholder: string;
}> = {
  es: {
    eyebrow: "Dialogo / 1 prompt, 1 accion",
    h2a: "Una pregunta.", h2b: "Una herramienta.", h2c: "Una respuesta.",
    s1: "El ciudadano habla en su idioma",
    s2: "La IA identifica la intencion",
    s3: "La herramienta ejecuta (wallet, salud, tramite...)",
    s4: "La respuesta se humaniza en el idioma del ciudadano",
    inputPlaceholder: "Escribi tu pregunta...",
  },
  gn: {
    eyebrow: "\u00d1omongeta / 1 porandu, 1 mba'apo",
    h2a: "Pete\u0129 porandu.", h2b: "Pete\u0129 tembiporu.", h2c: "Pete\u0129 \u00f1embohovai.",
    s1: "Tet\u00e3gua o\u00f1e'\u1ebd i\u00f1e'\u1ebdme",
    s2: "IA oikuaa mba'e oipotava",
    s3: "Tembiporu omba'apo (viru ryru, tesa\u0129, tramite...)",
    s4: "\u00d1embohovai o\u00f1emopor\u00e3v\u1ebd tet\u00e3gua \u00f1e'\u1ebdme",
    inputPlaceholder: "Ehai ne porandu...",
  },
};

/* ── Chat item types ───────────────────────────────────────────── */

type ChatItem =
  | { id: number; kind: "user"; text: string }
  | { id: number; kind: "tool"; fn: string; out: string }
  | { id: number; kind: "ai"; lines: string[] }
  | { id: number; kind: "dots" };

/* ── Component ─────────────────────────────────────────────────── */

export default function Act3Dialog() {
  const cl = useContentLocale();
  const t = T[cl];

  const [items, setItems] = useState<ChatItem[]>([]);
  const [inputText, setInputText] = useState("");
  const [sending, setSending] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    const nextId = () => ++idRef.current;
    const wait = (ms: number) => new Promise<void>((res) => { setTimeout(res, ms); });
    const check = () => { if (cancelled) throw new Error("cancel"); };
    const turns = TURNS[cl];

    const run = async () => {
      while (!cancelled) {
        check();
        setItems([]);
        setInputText("");
        setSending(false);
        await wait(800);

        for (const turn of turns) {
          check();

          /* 1 — Type characters into input */
          for (let i = 1; i <= turn.user.length; i++) {
            check();
            setInputText(turn.user.slice(0, i));
            await wait(turn.user[i - 1] === " " ? 30 : 45);
          }
          await wait(400);

          /* 2 — Send flash */
          check();
          setSending(true);
          await wait(300);
          setSending(false);

          /* 3 — User bubble appears */
          check();
          setInputText("");
          setItems((prev) => [...prev, { id: nextId(), kind: "user", text: turn.user }]);
          await wait(80);
          scrollToBottom();
          await wait(300);

          /* 4 — Typing dots */
          check();
          const dotsId = nextId();
          setItems((prev) => [...prev, { id: dotsId, kind: "dots" }]);
          await wait(80);
          scrollToBottom();
          await wait(1400);

          /* 5 — Replace dots with tool call */
          check();
          setItems((prev) => {
            const next = prev.filter((it) => it.id !== dotsId);
            next.push({ id: nextId(), kind: "tool", fn: turn.toolFn, out: turn.toolOut });
            return next;
          });
          await wait(80);
          scrollToBottom();
          await wait(600);

          /* 6 — AI response */
          check();
          setItems((prev) => [...prev, { id: nextId(), kind: "ai", lines: turn.ai }]);
          await wait(80);
          scrollToBottom();
          await wait(2000);
        }

        /* Pause after full conversation, then restart */
        await wait(4000);
      }
    };

    run().catch(() => { /* cancelled */ });
    return () => { cancelled = true; };
  }, [cl, scrollToBottom]);

  return (
    <Shell label="dialogo">
      <div className="ndt-side">
        {/* Left: 4-step flow */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrow}</span>
          <h2 className="ndt-h2">
            {t.h2a}<br />{t.h2b}<br />{t.h2c}
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

        {/* Right: Animated chat */}
        <div className="ndt-side-r">
          <div className="ndt-chat" role="img" aria-label="conversation demo">
            <div className="ndt-chat-bar">
              <span className="ndt-chat-dot" />
              <span className="ndt-chat-dot" />
              <span className="ndt-chat-dot" />
              <span className="ndt-chat-title">nanduti {"\u00b7"} chat</span>
              <span className="ndt-chat-live">live</span>
            </div>

            <div ref={bodyRef} className="ndt-chat-body">
              {items.map((item) => {
                switch (item.kind) {
                  case "user":
                    return (
                      <div key={item.id} className="ndt-msg ndt-msg-user ndt-msg-enter">
                        {item.text}
                      </div>
                    );
                  case "tool":
                    return (
                      <div key={item.id} className="ndt-tool-call ndt-msg-enter">
                        <span className="ndt-tool-call-fn">{item.fn}</span>
                        <span className="ndt-tool-call-arrow">{"\u2192"}</span>
                        <span className="ndt-tool-call-out">{item.out}</span>
                      </div>
                    );
                  case "ai":
                    return (
                      <div key={item.id} className="ndt-msg ndt-msg-ai ndt-msg-enter">
                        <LaceSeal size={20} rays={12} rings={3} stroke="#22d3ee" opacity={0.9} className="ndt-ai-avatar" />
                        <span>
                          {item.lines.map((line, j) => (
                            <span key={j}>{j > 0 && <br />}{line}</span>
                          ))}
                        </span>
                      </div>
                    );
                  case "dots":
                    return (
                      <div key={item.id} className="ndt-typing-dots ndt-msg-enter">
                        <span className="ndt-typing-dot" />
                        <span className="ndt-typing-dot" />
                        <span className="ndt-typing-dot" />
                      </div>
                    );
                }
              })}
            </div>

            {/* Input bar */}
            <div className="ndt-chat-input" data-sending={sending || undefined}>
              {inputText ? (
                <span className="ndt-chat-input-typed">
                  {inputText}
                  <span className="ndt-chat-cursor" />
                </span>
              ) : (
                <span className="ndt-chat-input-text">{t.inputPlaceholder}</span>
              )}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
