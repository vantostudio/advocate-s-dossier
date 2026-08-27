import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-5 pt-10 pb-20 sm:px-6 md:px-12 md:pt-20 md:pb-24">
      <div className="grid grid-cols-1 gap-6 border-b border-border pb-10 md:grid-cols-12 md:gap-8 md:pb-12">
        <div className="md:col-span-3">
          <p className="folio">{eyebrow}</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-charcoal sm:text-5xl md:text-7xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl">
              {lede}
            </p>
          )}
        </div>
      </div>
      <div className="mt-12 md:mt-16">{children}</div>
    </main>
  );
}
