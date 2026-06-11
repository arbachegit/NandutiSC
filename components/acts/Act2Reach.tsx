import { Shell } from "@/components/_shared";
import { PromptBox } from "./Act1Hero";

export default function Act2Reach() {
  return (
    <Shell label="Onde a escola nao chega">
      <div className="ndt-warm ndt-warm--light">
        <h1 className="ndt-hero">Onde a escola nao chega</h1>
        <PromptBox text="Por que a chuva cai?" />
      </div>
    </Shell>
  );
}
