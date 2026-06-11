import { Shell } from "@/components/_shared";

export default function Act5Thanks() {
  return (
    <Shell label="Obrigado">
      <div className="ndt-thanks">
        <h1 className="ndt-thanks-title">Obrigado.</h1>
        <a className="logo-iconsai" href="https://iconsai.ai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <span className="logo-i">i</span>
          <span className="logo-cons">cons</span>
          <span className="logo-ai">.ai</span>
        </a>
        <span className="ndt-thanks-url">iconsai.ai</span>
      </div>
    </Shell>
  );
}
