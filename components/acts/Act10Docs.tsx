"use client";

import { Shell } from "@/components/_shared";
import { useContentLocale, type ContentLocale } from "@/lib/useContentLocale";

const T: Record<ContentLocale, {
  eyebrow: string; auditTrail: string;
  qrLabel: string; qrDesc: string;
  emisor: string; emision: string; expiracion: string; formato: string;
}> = {
  es: {
    eyebrow: "Documentos digitales W3C VC",
    auditTrail: "Audit trail estoniano: quien vio, cuando y por que",
    qrLabel: "Compartir via QR",
    qrDesc: "Uso unico / TTL configurable / Verificable",
    emisor: "Emisor", emision: "Emision", expiracion: "Expiracion", formato: "Formato",
  },
  gn: {
    eyebrow: "Kuatia digital W3C VC",
    auditTrail: "Audit trail estoniano: mava ohecha, araka\u2019e ha mba\u2019ere",
    qrLabel: "Mombe\u2019u QR rupive",
    qrDesc: "Peteĩ jey / TTL ojehaijey / Ojehechakuaa",
    emisor: "Ome\u2019\u1ebdhare", emision: "\u00d1emboguapy", expiracion: "Opa", formato: "Formato",
  },
};

const CREDENTIALS = [
  { name: "Cedula de Identidad Civil", issuer: "Policia Nacional", date: "2018-09-12", exp: "2028-09-12" },
  { name: "Constancia RUC 4521846-6", issuer: "DNIT", date: "2018-03-04", exp: null },
  { name: "Antecedentes Policiales", issuer: "Policia Nacional", date: "2026-04-15", exp: "2026-05-15" },
  { name: "Partida Sofia Gonzalez", issuer: "Registro Civil", date: "2017-08-28", exp: null },
  { name: "Titulo Lic. en Marketing", issuer: "UNA Fac. CCEE", date: "2014-12-10", exp: null },
  { name: "Carnet IPS - Trab. Activo", issuer: "IPS", date: "2018-09-20", exp: null },
];

export default function Act10Docs() {
  const cl = useContentLocale();
  const t = T[cl];

  return (
    <Shell label="documentos">
      <div className="ndt-side">
        {/* Left: 6 W3C VCs */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">{t.eyebrow}</span>
          <div className="ndt-cred-list">
            {CREDENTIALS.map((c) => (
              <div key={c.name} className="ndt-cred-row">
                <div className="ndt-cred-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="ndt-cred-c">
                  <span className="ndt-cred-name">{c.name}</span>
                  <span className="ndt-cred-meta">
                    {c.issuer} / {c.date}
                    {c.exp ? ` / exp ${c.exp}` : ""}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span className="ndt-byline" style={{ marginTop: "8px" }}>
            {t.auditTrail}
          </span>
        </div>

        {/* Right: QR share + credential detail */}
        <div className="ndt-side-r">
          <div className="ndt-qr-share">
            <div className="ndt-qr-placeholder" style={{ marginBottom: "8px" }}>
              <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" style={{ color: "var(--cyan)", opacity: 0.4 }}>
                <rect x="4" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="36" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="4" y="36" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="40" y="40" width="16" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="10" y="10" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="42" y="10" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="10" y="42" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
              </svg>
            </div>
            <span className="ndt-qr-label">{t.qrLabel}</span>
            <span className="ndt-byline">{t.qrDesc}</span>
          </div>
          <div className="ndt-cred-detail">
            <div className="ndt-panel-h">
              <span className="ndt-panel-name">Cedula de Identidad Civil</span>
              <span className="ndt-panel-meta">W3C VC</span>
            </div>
            <div className="ndt-cred-detail-rows">
              <div className="ndt-cred-detail-row">
                <span className="ndt-cred-detail-k">{t.emisor}</span>
                <span className="ndt-cred-detail-v">Policia Nacional del Paraguay</span>
              </div>
              <div className="ndt-cred-detail-row">
                <span className="ndt-cred-detail-k">{t.emision}</span>
                <span className="ndt-cred-detail-v">2018-09-12</span>
              </div>
              <div className="ndt-cred-detail-row">
                <span className="ndt-cred-detail-k">{t.expiracion}</span>
                <span className="ndt-cred-detail-v">2028-09-12</span>
              </div>
              <div className="ndt-cred-detail-row">
                <span className="ndt-cred-detail-k">{t.formato}</span>
                <span className="ndt-cred-detail-v">W3C Verifiable Credential v2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
