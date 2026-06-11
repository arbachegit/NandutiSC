import { MiniAppIcon, MINI_APPS } from "./_act-shared";
import { Shell } from "@/components/_shared";

export default function Act7Catalog() {
  return (
    <Shell label="catalogo">
      <div className="ndt-vert">
        <div className="ndt-vert-top">
          <span className="ndt-eyebrow">Nueve micro-aplicaciones</span>
          <h2 className="ndt-h2">Cada servicio del Estado, una conversacion.</h2>
        </div>
        <div className="ndt-vert-body">
          <div className="ndt-catalog">
            {MINI_APPS.map((app, i) => (
              <div key={app.id} className="ndt-catalog-row">
                <span className="ndt-catalog-n">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className="ndt-catalog-icon"
                  style={{ background: `${app.color}18`, color: app.color }}
                >
                  <MiniAppIcon app={app.id} />
                </span>
                <div className="ndt-catalog-c">
                  <span className="ndt-catalog-name">{app.name}</span>
                  <span className="ndt-catalog-tag">{app.tag}</span>
                </div>
                <span className="ndt-catalog-arr">{">"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
