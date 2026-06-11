import { Shell } from "@/components/_shared";
import { BrowserChrome } from "./Act1Hero";

export default function Act4Stories() {
  const cells = Array.from({ length: 6 });

  return (
    <Shell label="Galeria de historias">
      <div className="ndt-warm" style={{ padding: 0 }}>
        <div className="ndt-browser" style={{ width: "100%", height: "100%", borderRadius: 16 }}>
          <BrowserChrome url="nanduti.iconsai.ai/historias" />
          <div className="ndt-gallery">
            <div className="ndt-gallery-sidebar">
              <div className="ndt-skeleton ndt-sk-65" />
              <div className="ndt-skeleton ndt-sk-40" />
            </div>
            <div className="ndt-gallery-grid">
              {cells.map((_, i) => (
                <div key={i} className="ndt-card">
                  <div className="ndt-card-thumb" />
                  <div className="ndt-skeleton ndt-sk-70" />
                  <div className="ndt-skeleton ndt-sk-45" />
                </div>
              ))}
            </div>
            <div className="ndt-sticky ndt-sticky-yellow">Thumbnails need hover state — show last-edited preview?</div>
            <div className="ndt-sticky ndt-sticky-green">Grid feels cramped at 3-up. Try 2-up on tablet</div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
