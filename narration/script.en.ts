import type { SlideNarration } from ".";

export const scriptEn: SlideNarration[] = [
  {
    id: "cover",
    description:
      "Nanduti is the Paraguayan citizen super-app. The name comes from nhanduti, the traditional Paraguayan lace: beautiful patterns woven from simple threads, just as the app weaves digital services into a unified citizen experience. It packs 9 mini-apps, 28 tools, and 5 languages into a single conversational interface.",
  },
  {
    id: "persona",
    description:
      "Meet Maria Gonzalez Acosta, our demo citizen. CIC 4521846, lives in Trinidad, Asuncion, with her husband Juan aged 36, daughter Sofia aged 8 in third grade, and son Mateo aged 3. Her preferred language is jopara, the Guarani-Spanish mix spoken by 90 percent of Paraguayans. Through Maria we see every service Nanduti offers.",
  },
  {
    id: "dialogo",
    description:
      "One prompt, one action. Maria types 'Cuanto tengo?' and the orchestrator routes to wallet.balance, returning her PYG and USDC balances with the BCP exchange rate. The 4-step flow: citizen speaks, AI identifies intent, tool executes, response humanizes in the citizen's language.",
  },
  {
    id: "billetera",
    description:
      "Maria's wallet shows 4,350,000 guaranies plus 247.83 USDC on her Mastercard 4827. BCP rate: 6,159.41 guaranies per dollar. Recent transactions include her salary, ANDE electricity bill, and a QR pharmacy purchase. The USDC card runs on Circle with Bancard as acquirer.",
  },
  {
    id: "estado",
    description:
      "Government services and health in one place. RUC lookup returns Maria's tax status instantly. Health triage responds in 3 languages: formal Spanish, Guarani for comfort, jopara for natural speech. Sofia's vaccination card shows BCG, Hexavalent, and MMR complete.",
  },
  {
    id: "seguridad",
    description:
      "The panic button dispatches 911 and SOS 137 with a 3-second hold. Discrete mode activates with 7 quick taps. The screen shows a calculator while silently recording. Three DEAM addresses in Asuncion. Geo-alerts from SEN, DINAC, and ANDE show severity-coded warnings for storms, blackouts, and dengue.",
  },
  {
    id: "catalogo",
    description:
      "Nine mini-apps, each one a conversation. From Billetera with PYG and USDC payments through Documentos with W3C Verifiable Credentials and Estonian-model audit trail. Every service the Paraguayan state offers, accessible in the citizen's language of choice.",
  },
  {
    id: "datos",
    description:
      "Seven official data sources feed Nanduti in near-real-time: Agencia IP, BCP, DINAC, DNCP, MEC, SEN, and MSPBS. The education module shows Sofia's report card with PISA 2022 context: Paraguay has 15 percent reaching level 2 in math versus 69 percent OECD average. The bilingual tutor teaches multiplication in Guarani.",
  },
  {
    id: "arquitectura",
    description:
      "Sovereign stack in 4 stages. Collection: 7 autonomous scrapers. Storage: Supabase PostgreSQL with RLS and Estonian-model audit. Orchestration: Next.js 15 with 28 registered tools and 300-second Redis cache. Models: Haiku 3.5 and Sonnet 4 on DigitalOcean Gradient AI, 6 times cheaper than direct API.",
  },
  {
    id: "documentos",
    description:
      "Six W3C Verifiable Credentials: Cedula, RUC, Police Record, Birth Certificate, University Diploma, and IPS Health Card. Each shareable via single-use QR with configurable TTL. The Estonian audit trail logs every access: who viewed which document, when, and why.",
  },
  {
    id: "obrigado",
    description:
      "A digital infrastructure is measured by its respect for the citizen. Nanduti: 28 tools, 9 mini-apps, 5 languages, 7 data sources. Paraguayan citizen portal, powered by IconsAI.",
  },
];
