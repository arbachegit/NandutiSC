/**
 * SlideFoot — bloco de marca no centro do footer (skill `showcase` §3/§4).
 * Renderizado UMA vez pelo motor de slides; fixo, fica em todo slide.
 * Logo icons.ai + linha legal IDENTICA nos 4 idiomas (nomes proprios nao traduzem).
 */
export default function SlideFoot() {
  return (
    <footer className="slide-foot">
      <a className="logo-foot" href="https://iconsai.ai" target="_blank" rel="noopener noreferrer">
        <span className="logo-i">i</span>
        <span className="logo-cons">cons</span>
        <span className="logo-ai">.ai</span>
      </a>
      <span className="slide-foot__legal">
        © 2026 IconsAI · Kendall Square · CIC · Cambridge, MA · MIT · Harvard
      </span>
    </footer>
  );
}
