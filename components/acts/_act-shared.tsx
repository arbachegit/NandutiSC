import type { ReactNode, SVGProps } from "react";

/* ─── Parametric Lace Seal (from real app's Lace.tsx, simplified for static showcase) ─── */

const r3 = (n: number) => Math.round(n * 1000) / 1000;

export function LaceSeal({
  size = 480,
  rays = 16,
  rings = 5,
  stroke = "currentColor",
  opacity = 0.18,
  spinSec = 0,
  className,
}: {
  size?: number;
  rays?: number;
  rings?: number;
  stroke?: string;
  opacity?: number;
  spinSec?: number;
  className?: string;
}) {
  const r0 = 6;
  const rN = size / 2 - 4;
  const cx = size / 2;
  const cy = size / 2;

  const ringRadii = Array.from({ length: rings }, (_, i) =>
    r3(r0 + ((rN - r0) * (i + 1)) / rings),
  );

  const rayLines = Array.from({ length: rays }, (_, i) => {
    const a = (i * Math.PI * 2) / rays;
    return {
      x1: r3(cx + Math.cos(a) * r0),
      y1: r3(cy + Math.sin(a) * r0),
      x2: r3(cx + Math.cos(a) * rN),
      y2: r3(cy + Math.sin(a) * rN),
    };
  });

  const nodes: Array<{ cx: number; cy: number; r: number }> = [];
  ringRadii.slice(0, rings - 1).forEach((rr, idx) => {
    for (let i = 0; i < rays; i += 2) {
      const a = (i * Math.PI * 2) / rays + (idx % 2 === 0 ? 0 : Math.PI / rays);
      nodes.push({
        cx: r3(cx + Math.cos(a) * rr),
        cy: r3(cy + Math.sin(a) * rr),
        r: 1.2,
      });
    }
  });

  const filigree = Array.from({ length: rays }, (_, i) => {
    const a1 = (i * Math.PI * 2) / rays;
    const a2 = ((i + 1) * Math.PI * 2) / rays;
    const r1 = ringRadii[1] ?? rN * 0.4;
    const r2 = ringRadii[Math.min(2, rings - 1)] ?? rN * 0.7;
    return {
      x1: r3(cx + Math.cos(a1) * r1),
      y1: r3(cy + Math.sin(a1) * r1),
      x2: r3(cx + Math.cos(a2) * r2),
      y2: r3(cy + Math.sin(a2) * r2),
    };
  });

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        color: stroke,
        opacity,
        ...(spinSec > 0
          ? { animation: `ndt-spin ${spinSec}s linear infinite`, willChange: "transform" }
          : {}),
      }}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth={0.7}>
        <circle cx={cx} cy={cy} r={r0} />
        <circle cx={cx} cy={cy} r={r3(r0 / 2)} />
        {ringRadii.map((rr, i) => (
          <circle key={`r${i}`} cx={cx} cy={cy} r={rr} strokeWidth={i === ringRadii.length - 1 ? 0.5 : 0.7} />
        ))}
        {rayLines.map((l, i) => (
          <line key={`l${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        ))}
        {filigree.map((l, i) => (
          <line key={`d${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={0.4} />
        ))}
      </g>
      <g fill="currentColor">
        {nodes.map((n, i) => (
          <circle key={`n${i}`} cx={n.cx} cy={n.cy} r={n.r} />
        ))}
      </g>
    </svg>
  );
}

/* ─── Mini-app SVG icons (from real app's icons.tsx) ─── */

const bp: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconWallet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="17" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconGov(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <path d="M3 9l9-5 9 5" />
      <path d="M5 9v9M19 9v9M9 9v9M15 9v9" />
      <path d="M3 19h18" />
    </svg>
  );
}
function IconHealth(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 8.5v7M8.5 12h7" />
    </svg>
  );
}
function IconEdu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <path d="M4 6v12l8-3 8 3V6l-8 3-8-3z" />
      <path d="M12 9v9" />
    </svg>
  );
}
function IconCrypto(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18" />
      <rect x="6" y="14" width="4" height="3" rx="0.5" />
      <path d="M14 16h4" />
    </svg>
  );
}
function IconInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 8h8M8 12h8M8 16h6" />
    </svg>
  );
}
function IconAlerts(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <path d="M12 3l9.5 17H2.5L12 3z" />
      <path d="M12 10v5" />
      <circle cx="12" cy="17.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconPolice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconDocs(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...bp} {...props}>
      <path d="M3 7c0-1 1-2 2-2h5l2 2h7c1 0 2 1 2 2v9c0 1-1 2-2 2H5c-1 0-2-1-2-2V7z" />
      <path d="M3 11h18" />
    </svg>
  );
}

const APP_ICON: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
  wallet: IconWallet,
  gov: IconGov,
  health: IconHealth,
  edu: IconEdu,
  crypto: IconCrypto,
  info: IconInfo,
  alerts: IconAlerts,
  police: IconPolice,
  docs: IconDocs,
};

export function MiniAppIcon({ app, ...rest }: { app: string } & SVGProps<SVGSVGElement>) {
  const Comp = APP_ICON[app];
  if (!Comp) return null;
  return <>{Comp(rest)}</>;
}

/* ─── Canonical mini-app data ─── */

export const MINI_APPS = [
  { id: "wallet",  name: "Billetera",      tag: "Saldo PYG + USDC, transferencias, QR Hub",          color: "#22c55e" },
  { id: "gov",     name: "Tramites",        tag: "Tramites paraguay.gov.py \u00b7 DNIT RUC",          color: "#0038A8" },
  { id: "health",  name: "Salud",           tag: "Triagem es/gn/jo \u00b7 USF \u00b7 vacunas familia", color: "#22d3ee" },
  { id: "edu",     name: "Educacion",       tag: "Boletin \u00b7 matricula \u00b7 tutor IA bilingue",  color: "#f97316" },
  { id: "crypto",  name: "Tarjeta USDC",    tag: "Mastercard USDC \u00b7 Bancard adq \u00b7 Circle",  color: "#a855f7" },
  { id: "info",    name: "Informativos",    tag: "Feed del Estado \u00b7 resumen IA semanal",          color: "#38bdf8" },
  { id: "alerts",  name: "Alertas",         tag: "SEN \u00b7 DINAC \u00b7 ANDE geo-alertas",           color: "#fbbf24" },
  { id: "police",  name: "Denuncia",        tag: "Boton panico \u00b7 DEAM \u00b7 modo discreto",      color: "#ef4444" },
  { id: "docs",    name: "Documentos",      tag: "W3C VC \u00b7 audit estoniano \u00b7 QR validacion", color: "#d97706" },
] as const;

/* ─── Chat chrome wrapper ─── */

export function ChatChrome({ children }: { children: ReactNode }) {
  return (
    <div className="ndt-chat" role="img" aria-label="conversation demo">
      <div className="ndt-chat-bar">
        <span className="ndt-chat-dot" />
        <span className="ndt-chat-dot" />
        <span className="ndt-chat-dot" />
        <span className="ndt-chat-title">nanduti \u00b7 chat</span>
        <span className="ndt-chat-live">live</span>
      </div>
      <div className="ndt-chat-body">{children}</div>
    </div>
  );
}
