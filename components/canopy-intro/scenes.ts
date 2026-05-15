import type { CanopyScene } from './CanopyIntro'

export const PRODUCT_NAME = 'Icons.ai · Ñanduti'
export const PRODUCT_TAGLINE = 'Agente educacional infanto-juvenil — guaraní, português e espanhol.'
export const PRODUCT_ACCENT = '#f97316'
export const CONTINUE_HREF = 'https://icon.iconsai.ai/icon'

const HOLD = 14000

export const SCENES: CanopyScene[] = [
  { bg: '#f6dcc4', hero: 'A criança aprende na sua língua', mockup: 'prompt', promptText: '¿Cómo se dice "amigo" en guaraní?', hold: HOLD },
  { bg: '#f9efde', hero: 'Curiosidade vira aula',            mockup: 'prompt', promptText: 'Por que a chuva cai?', hold: HOLD },
  { bg: '#1a1108', caption: 'TRI-LÍNGUE · TTS · KARAOKÊ · ABNT', mockup: 'dialog', browserUrl: 'nanduti.iconsai.ai/conversa', promptText: 'Conta uma história sobre o jaguar', hold: HOLD },
  { bg: '#f0d8b8', mockup: 'gallery', browserUrl: 'nanduti.iconsai.ai/historias', hold: HOLD },
  { bg: '#f5e2c4', mockup: 'deck-export', browserUrl: 'nanduti.iconsai.ai/painel-pai', hold: HOLD },
]
