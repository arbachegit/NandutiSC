import { Shell } from "@/components/_shared";
import { MiniAppIcon, MINI_APPS } from "./_act-shared";

export default function Act3Catalog() {
  return (
    <Shell label="Nueve micro-aplicaciones del Estado">
      <div className="ndt-vert">
        <div className="ndt-vert-top">
          <span className="ndt-eyebrow">Nueve micro-aplicaciones</span>
          <h2 className="ndt-h2">Cada servicio del Estado, una conversacion.</h2>
          <p className="ndt-lead">
            Cada mini-app encapsula un dominio. La IA orquesta tools sin que el ciudadano sienta la frontera.
          </p>
        </div>

        <div className="ndt-vert-body">
          <div className="ndt-catalog">
            {MINI_APPS.map((app, i) => (
              <div key={app.id} className="ndt-catalog-row">
                <span className="ndt-catalog-n">{(i + 1).toString().padStart(2, "0")}</span>
                <span
                  className="ndt-catalog-icon"
                  style={{ background: `${app.color}22`, color: app.color }}
                >
                  <MiniAppIcon app={app.id} width={16} height={16} />
                </span>
                <div className="ndt-catalog-c">
                  <span className="ndt-catalog-name">{app.name}</span>
                  <span className="ndt-catalog-tag">{app.tag}</span>
                </div>
                <span className="ndt-catalog-arr">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
