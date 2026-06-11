export interface SlidePlan {
  id: string;
  temaChave: string;
  focalSVG: string;
  layout: "side-by-side" | "visual-top" | "centered";
  priority: number;
  explanation: string;
  dataKeys: string[];
  didatica: string;
}

export const SLIDE_PLANS: SlidePlan[] = [
  {
    id: "cover",
    temaChave: "Introducao ao Nanduti",
    focalSVG: "LaceSeal (spinning, 720px, 20 rays, 6 rings)",
    layout: "side-by-side",
    priority: 1,
    explanation: "Hero com selos lace + stats + headline do super-app paraguaio",
    dataKeys: ["28 tools", "9 mini-apps", "5 idiomas"],
    didatica: "Impacto imediato: numeros reais + visual identitario",
  },
  {
    id: "persona",
    temaChave: "Demo persona Maria",
    focalSVG: "PersonaCard com badge CIC + arvore familiar",
    layout: "side-by-side",
    priority: 2,
    explanation: "Maria Gonzalez Acosta, CIC 4521846, Trinidad/Asuncion, familia 4 membros",
    dataKeys: ["mock-citizen.ts", "CIC 4521846", "jopara"],
    didatica: "Persona concretiza o app — sem persona abstrato, com persona tangivel",
  },
  {
    id: "dialogo",
    temaChave: "Fluxo conversacional",
    focalSVG: "ChatChrome com tool call wallet.balance()",
    layout: "side-by-side",
    priority: 1,
    explanation: "4 passos: cidadao fala, IA identifica, ferramenta executa, resposta humaniza",
    dataKeys: ["orchestrator.ts", "wallet.balance", "4 steps"],
    didatica: "Mostra o mecanismo interno — a magia e a orquestracao, nao o chat",
  },
  {
    id: "billetera",
    temaChave: "Carteira + USDC",
    focalSVG: "WalletDash + Tarjeta USDC card visual",
    layout: "side-by-side",
    priority: 2,
    explanation: "Gs. 4.350.000 + 247.83 USDC, Mastercard 4827, BCP 6159.41, 3 transacoes",
    dataKeys: ["mock-wallet.ts", "BCP rate", "Circle/Bancard"],
    didatica: "Dados reais de wallet + cotacao BCP — nao mockup generico",
  },
  {
    id: "estado",
    temaChave: "Governo + Saude",
    focalSVG: "Painel tramites + triagem trilingual + cartao vacinacao",
    layout: "side-by-side",
    priority: 2,
    explanation: "RUC lookup, DNIT, triagem es/gn/jopara, vacinacao Sofia BCG/Hexa/SPR",
    dataKeys: ["mock-health.ts", "tool-registry.ts", "i18n"],
    didatica: "Trilinguismo real em acao — nao so 'suportamos 5 idiomas'",
  },
  {
    id: "seguridad",
    temaChave: "Seguranca + Alertas",
    focalSVG: "Botao panico + badges severidade alertas",
    layout: "side-by-side",
    priority: 2,
    explanation: "Panico 3s, modo discreto 7 toques, 3 DEAM, 911/137/155/147, geo-alertas SEN/DINAC",
    dataKeys: ["mock-police.ts", "mock-alerts.ts", "hotlines"],
    didatica: "Seguranca cidada com UX de emergencia real (countdown, discrete mode)",
  },
  {
    id: "catalogo",
    temaChave: "9 mini-apps",
    focalSVG: "9 rows com icones SVG distintos e cores unicas",
    layout: "visual-top",
    priority: 1,
    explanation: "Catalogo completo: Billetera, Tramites, Salud, Educacion, Tarjeta USDC, Informativos, Alertas, Denuncia, Documentos",
    dataKeys: ["tool-registry.ts", "icons.tsx", "9 colors"],
    didatica: "Visao panoramica — cada mini-app e uma conversa",
  },
  {
    id: "datos",
    temaChave: "Fontes de dados + Educacao",
    focalSVG: "Feed 7 fontes + boletim Sofia + PISA 2022",
    layout: "side-by-side",
    priority: 2,
    explanation: "7 fontes oficiais, boletim Sofia 3.6-4.2/5.0, PISA 15% vs 69% OCDE, tutor bilingue",
    dataKeys: ["mock-education.ts", "info.feed", "PISA 2022"],
    didatica: "Dados educacionais reais com contexto internacional PISA",
  },
  {
    id: "arquitectura",
    temaChave: "Stack tecnica",
    focalSVG: "4 caixas: Colecta, Almacen, Orquestracao, Modelos + setas",
    layout: "visual-top",
    priority: 3,
    explanation: "7 fontes, Supabase PG+RLS, Next.js 15 + 28 tools + Redis 300s, Haiku+Sonnet DO Gradient 6x",
    dataKeys: ["orchestrator.ts", "tool-registry.ts", "DO Gradient"],
    didatica: "Arquitetura soberana — sem dependencia de big tech para dados cidadaos",
  },
  {
    id: "documentos",
    temaChave: "Credenciais W3C VC",
    focalSVG: "6 credentials list + QR share + audit trail",
    layout: "side-by-side",
    priority: 2,
    explanation: "Cedula, RUC, Antecedentes, Partida, Titulo, Carnet IPS — QR single-use TTL, audit estoniano",
    dataKeys: ["mock-documents.ts", "W3C VC", "Estonian audit"],
    didatica: "Identidade digital cidada com modelo de privacidade estoniano",
  },
  {
    id: "obrigado",
    temaChave: "Encerramento",
    focalSVG: "LaceSeal (faint, spinning) + stats",
    layout: "centered",
    priority: 1,
    explanation: "Manifesto: 'Uma infraestrutura digital se mede pelo seu respeito ao cidadao.'",
    dataKeys: ["28 tools", "9 mini-apps", "5 idiomas", "7 fontes"],
    didatica: "Fecho com proposito — nao e marketing, e principio",
  },
];
