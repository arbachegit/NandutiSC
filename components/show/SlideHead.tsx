/**
 * SlideHead — nome do projeto no centro do header (skill `showcase` §3/§4).
 * Renderizado UMA vez pelo motor de slides; fixo, fica em todo slide.
 */
export default function SlideHead() {
  return (
    <header className="slide-head">
      <span className="slide-head__kicker">Portal Ciudadano Paraguayo</span>
      <span className="slide-head__name">Nanduti</span>
    </header>
  );
}
