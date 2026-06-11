import type { ReactNode } from "react";

export function Shell({ children, label }: { children: ReactNode; label: string }) {
  return (
    <section className="relative w-full h-full flex items-stretch" aria-label={label}>
      <div className="relative w-full h-full flex flex-col justify-center px-3 sm:px-6 lg:px-12">{children}</div>
    </section>
  );
}
