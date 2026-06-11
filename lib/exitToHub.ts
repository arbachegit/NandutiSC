// Saida frame-aware do deck (skill `showcase` §3.1 / §7).
// O deck roda em iframe no hub em fullscreen. Quando emoldurado (mesma origem),
// Sair/Esc saem do fullscreen do TOPO (o hub fecha o overlay) — NUNCA navegam o
// proprio iframe. Acesso DIRETO (nao-emoldurado) navega pro hub normalmente.
// Deterministico: link explicito, NUNCA history.back().
export const HUB = 'https://iconsai.ai/intelligenceHub'

type ExitEvt = { preventDefault?: () => void } | null | undefined

export function exitToHub(e?: ExitEvt): void {
  const framed = typeof window !== 'undefined' && window.self !== window.top
  if (framed) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault()
    const top = window.top
    try {
      if (top && top.document && top.document.fullscreenElement && top.document.exitFullscreen) {
        top.document.exitFullscreen().catch(() => {
          top.location.href = HUB
        })
      } else if (top) {
        top.location.href = HUB
      }
    } catch {
      window.location.href = HUB
    }
  } else {
    window.location.href = HUB
  }
}
