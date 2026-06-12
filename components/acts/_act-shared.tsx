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
  const TAU = Math.PI * 2;

  const ringRadii = Array.from({ length: rings }, (_, i) =>
    r3(r0 + ((rN - r0) * (i + 1)) / rings),
  );

  /* Primary rays */
  const rayLines = Array.from({ length: rays }, (_, i) => {
    const a = (i * TAU) / rays;
    return {
      x1: r3(cx + Math.cos(a) * r0),
      y1: r3(cy + Math.sin(a) * r0),
      x2: r3(cx + Math.cos(a) * rN),
      y2: r3(cy + Math.sin(a) * rN),
    };
  });

  /* Secondary rays (half-angle between primaries, shorter) */
  const secRays = Array.from({ length: rays }, (_, i) => {
    const a = ((i + 0.5) * TAU) / rays;
    const innerR = ringRadii[1] ?? rN * 0.3;
    const outerR = ringRadii[Math.max(0, rings - 2)] ?? rN * 0.85;
    return {
      x1: r3(cx + Math.cos(a) * innerR),
      y1: r3(cy + Math.sin(a) * innerR),
      x2: r3(cx + Math.cos(a) * outerR),
      y2: r3(cy + Math.sin(a) * outerR),
    };
  });

  /* Intersection nodes */
  const nodes: Array<{ cx: number; cy: number; r: number }> = [];
  ringRadii.forEach((rr, idx) => {
    for (let i = 0; i < rays; i++) {
      const a = (i * TAU) / rays + (idx % 2 === 0 ? 0 : Math.PI / rays);
      nodes.push({ cx: r3(cx + Math.cos(a) * rr), cy: r3(cy + Math.sin(a) * rr), r: 1.0 });
    }
  });

  /* Primary filigree: cross-connects between adjacent rays */
  const filigree = Array.from({ length: rays }, (_, i) => {
    const a1 = (i * TAU) / rays;
    const a2 = ((i + 1) * TAU) / rays;
    const r1 = ringRadii[1] ?? rN * 0.4;
    const r2 = ringRadii[Math.min(2, rings - 1)] ?? rN * 0.7;
    return {
      x1: r3(cx + Math.cos(a1) * r1),
      y1: r3(cy + Math.sin(a1) * r1),
      x2: r3(cx + Math.cos(a2) * r2),
      y2: r3(cy + Math.sin(a2) * r2),
    };
  });

  /* Reverse filigree: opposite diagonal of each sector */
  const filigreeRev = Array.from({ length: rays }, (_, i) => {
    const a1 = (i * TAU) / rays;
    const a2 = ((i + 1) * TAU) / rays;
    const r1 = ringRadii[Math.min(2, rings - 1)] ?? rN * 0.7;
    const r2 = ringRadii[1] ?? rN * 0.4;
    return {
      x1: r3(cx + Math.cos(a1) * r1),
      y1: r3(cy + Math.sin(a1) * r1),
      x2: r3(cx + Math.cos(a2) * r2),
      y2: r3(cy + Math.sin(a2) * r2),
    };
  });

  /* Scalloped arcs between rays at each ring (signature nanduti lace pattern) */
  const scallops: string[] = [];
  ringRadii.forEach((rr, rIdx) => {
    if (rIdx < 1) return;
    const bulge = rIdx % 2 === 0 ? 0.7 : 1.3;
    for (let i = 0; i < rays; i++) {
      const a1 = (i * TAU) / rays;
      const a2 = ((i + 1) * TAU) / rays;
      const aMid = (a1 + a2) / 2;
      const cpR = rr * bulge;
      const sx = r3(cx + Math.cos(a1) * rr);
      const sy = r3(cy + Math.sin(a1) * rr);
      const ex = r3(cx + Math.cos(a2) * rr);
      const ey = r3(cy + Math.sin(a2) * rr);
      const cpx = r3(cx + Math.cos(aMid) * cpR);
      const cpy = r3(cy + Math.sin(aMid) * cpR);
      scallops.push(`M${sx},${sy}Q${cpx},${cpy} ${ex},${ey}`);
    }
  });

  /* Inner rosette petals (teardrop shapes near center) */
  const petals: string[] = [];
  const petalR1 = r0 * 1.5;
  const petalR2 = ringRadii[0] ?? rN * 0.2;
  const petalRMid = (petalR1 + petalR2) * 0.6;
  for (let i = 0; i < rays; i++) {
    const a = (i * TAU) / rays;
    const aOff = TAU / rays / 3.5;
    const sx = r3(cx + Math.cos(a) * petalR1);
    const sy = r3(cy + Math.sin(a) * petalR1);
    const ex = r3(cx + Math.cos(a) * petalR2);
    const ey = r3(cy + Math.sin(a) * petalR2);
    const cp1x = r3(cx + Math.cos(a - aOff) * petalRMid);
    const cp1y = r3(cy + Math.sin(a - aOff) * petalRMid);
    const cp2x = r3(cx + Math.cos(a + aOff) * petalRMid);
    const cp2y = r3(cy + Math.sin(a + aOff) * petalRMid);
    petals.push(`M${sx},${sy}Q${cp1x},${cp1y} ${ex},${ey}Q${cp2x},${cp2y} ${sx},${sy}`);
  }

  /* Outer filigree: connects between rays at outer two rings */
  const outerFil: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
  if (rings >= 4) {
    const rOuter1 = ringRadii[rings - 2];
    const rOuter2 = ringRadii[rings - 1];
    for (let i = 0; i < rays; i++) {
      const a1 = (i * TAU) / rays;
      const a2 = ((i + 1) * TAU) / rays;
      outerFil.push({
        x1: r3(cx + Math.cos(a1) * rOuter1),
        y1: r3(cy + Math.sin(a1) * rOuter1),
        x2: r3(cx + Math.cos(a2) * rOuter2),
        y2: r3(cy + Math.sin(a2) * rOuter2),
      });
      outerFil.push({
        x1: r3(cx + Math.cos(a1) * rOuter2),
        y1: r3(cy + Math.sin(a1) * rOuter2),
        x2: r3(cx + Math.cos(a2) * rOuter1),
        y2: r3(cy + Math.sin(a2) * rOuter1),
      });
    }
  }

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
        {/* Center hub */}
        <circle cx={cx} cy={cy} r={r0} />
        <circle cx={cx} cy={cy} r={r3(r0 / 2)} />
        <circle cx={cx} cy={cy} r={r3(r0 * 1.4)} strokeWidth={0.4} />
        {/* Concentric rings */}
        {ringRadii.map((rr, i) => (
          <circle key={`r${i}`} cx={cx} cy={cy} r={rr} strokeWidth={i === ringRadii.length - 1 ? 0.9 : 0.7} />
        ))}
        {/* Primary rays */}
        {rayLines.map((l, i) => (
          <line key={`l${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        ))}
        {/* Secondary rays */}
        {secRays.map((l, i) => (
          <line key={`s${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={0.35} />
        ))}
        {/* Cross filigree */}
        {filigree.map((l, i) => (
          <line key={`d${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={0.4} />
        ))}
        {filigreeRev.map((l, i) => (
          <line key={`dr${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={0.35} />
        ))}
        {/* Outer cross-hatch */}
        {outerFil.map((l, i) => (
          <line key={`of${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={0.3} />
        ))}
        {/* Scalloped arcs (lace pattern) */}
        <g strokeWidth={0.45}>
          {scallops.map((d, i) => (
            <path key={`sc${i}`} d={d} />
          ))}
        </g>
        {/* Inner rosette petals */}
        <g strokeWidth={0.5}>
          {petals.map((d, i) => (
            <path key={`pt${i}`} d={d} />
          ))}
        </g>
      </g>
      {/* Intersection dots */}
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
  { id: "wallet",  name: { es: "Billetera", gn: "Viru ryru" },      tag: { es: "Saldo PYG + USDC, transferencias, QR Hub", gn: "Saldo PYG + USDC, mondaha, QR Hub" },                                 color: "#22c55e" },
  { id: "gov",     name: { es: "Tramites", gn: "Tramite" },         tag: { es: "Tramites paraguay.gov.py \u00b7 DNIT RUC", gn: "Tramite paraguay.gov.py \u00b7 DNIT RUC" },                           color: "#0038A8" },
  { id: "health",  name: { es: "Salud", gn: "Tesa\u0129" },        tag: { es: "Triaje es/gn/jo \u00b7 USF \u00b7 vacunas familia", gn: "Triaje es/gn/jo \u00b7 USF \u00b7 poha \u00f1emohenda" },    color: "#22d3ee" },
  { id: "edu",     name: { es: "Educacion", gn: "Mbo'ehao" },      tag: { es: "Boletin \u00b7 matricula \u00b7 tutor IA bilingue", gn: "Bolet\u00edn \u00b7 matr\u00edcula \u00b7 tutor IA moko\u0129 \u00f1e'\u1ebd" }, color: "#f97316" },
  { id: "crypto",  name: { es: "Tarjeta USDC", gn: "Tarjeta USDC" }, tag: { es: "Mastercard USDC \u00b7 Bancard adq \u00b7 Circle", gn: "Mastercard USDC \u00b7 Bancard \u00b7 Circle" },             color: "#a855f7" },
  { id: "info",    name: { es: "Informativos", gn: "Marandu" },     tag: { es: "Feed del Estado \u00b7 resumen IA semanal", gn: "Estado marandu \u00b7 IA \u00f1emombyky" },                           color: "#38bdf8" },
  { id: "alerts",  name: { es: "Alertas", gn: "Marandu'i" },       tag: { es: "SEN \u00b7 DINAC \u00b7 ANDE geo-alertas", gn: "SEN \u00b7 DINAC \u00b7 ANDE geo-marandu" },                           color: "#fbbf24" },
  { id: "police",  name: { es: "Denuncia", gn: "\u00d1emombe'u" }, tag: { es: "Boton panico \u00b7 DEAM \u00b7 modo discreto", gn: "Voto\u0303 apa\u00f1u\u00e3i \u00b7 DEAM \u00b7 modo ka\u00f1y" }, color: "#ef4444" },
  { id: "docs",    name: { es: "Documentos", gn: "Kuatia" },       tag: { es: "W3C VC \u00b7 audit estoniano \u00b7 QR validacion", gn: "W3C VC \u00b7 audit estoniano \u00b7 QR \u00f1emoa\u00f1ete" }, color: "#d97706" },
];

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
