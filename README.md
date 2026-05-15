# iconsaiNandutiShowCase

Página showcase do **Icons.ai · Ñanduti** — agente educacional infanto-juvenil em guaraní, português e espanhol.

- **Stack:** Next.js 15 + React 19 + TypeScript strict
- **basePath:** `/nanduti` (rota final `icon.iconsai.ai/nanduti`)
- **Porta dev:** `3105`
- **Accent:** `#f97316` (laranja)

## Desenvolvimento

```bash
npm install
npm run dev
# http://localhost:3105/nanduti
```

## Deploy

1. `npm run build`
2. `rsync .next/standalone/ .next/static/ public/ root@<droplet>:/opt/iconsai-nanduti-showcase/app/ --delete`
3. systemd unit + Caddy `icon.iconsai.ai/nanduti/*` → `127.0.0.1:3105/nanduti/*`

## Cenas (5)

1. "A criança aprende na sua língua" (guaraní/PT/ES)
2. "Curiosidade vira aula"
3. Dialog overlay — "TRI-LÍNGUE · TTS · KARAOKÊ · ABNT"
4. Browser gallery — biblioteca de histórias
5. Deck + painel para pais

CanopyIntro é compartilhado entre 6 ShowCases.
