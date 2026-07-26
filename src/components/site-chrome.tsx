import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Identity", num: "I" },
  { to: "/academic-journey", label: "Academic Journey", num: "II" },
  { to: "/moot-court", label: "Moot Court", num: "III" },
  { to: "/research", label: "Research & Publications", num: "IV" },
  { to: "/experience", label: "Experience", num: "V" },
  { to: "/practice-interests", label: "Practice Interests", num: "VI" },
  { to: "/recognition", label: "Recognition", num: "VII" },
  { to: "/resume", label: "Resume", num: "VIII" },
  { to: "/connect", label: "Connect", num: "IX" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-500 ${scrolled ? "bg-paper/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="group flex items-baseline gap-3">
            <span className="font-display text-[1.35rem] leading-none tracking-tight">
              Advocate<span className="text-bronze">.</span>Profile
            </span>
            <span className="folio hidden sm:inline">Est. 2026 — Nairobi</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.slice(1, 6).map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-[13px] tracking-wide transition-colors ${active ? "text-charcoal" : "text-ink-muted hover:text-charcoal"}`}
                >
                  {item.label}
                  {active && (
                    <span className="ml-2 inline-block h-[6px] w-[6px] rounded-full bg-bronze align-middle" />
                  )}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase text-charcoal"
            aria-label="Open index"
          >
            <span className="hidden sm:inline">Index</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/30 transition-colors group-hover:bg-charcoal group-hover:text-paper">
              <span className="flex flex-col gap-[3px]">
                <span className="block h-[1px] w-4 bg-current" />
                <span className="block h-[1px] w-4 bg-current" />
                <span className="block h-[1px] w-4 bg-current" />
              </span>
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-paper animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex h-full max-w-[1400px] flex-col px-6 py-5 md:px-12">
            <div className="flex items-center justify-between">
              <span className="folio">Table of Contents</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.18em] uppercase text-charcoal hover:text-bronze"
                aria-label="Close index"
              >
                Close ×
              </button>
            </div>
            <div className="mt-16 grid flex-1 grid-cols-1 gap-x-16 gap-y-4 md:mt-24 md:grid-cols-2">
              {NAV.map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-baseline gap-6 border-b border-border py-5 transition-colors hover:text-bronze"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="folio w-8">{item.num}</span>
                  <span className="font-display text-3xl md:text-4xl">{item.label}</span>
                  <span className="ml-auto text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <span className="folio">Nairobi · English · Kiswahili</span>
              <span className="folio">© MMXXVI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <p className="folio">Colophon</p>
          <p className="mt-4 font-display text-2xl leading-snug text-charcoal">
            A living dossier — updated as coursework, research, and practice evolve.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
            Set in Instrument Serif and Inter. Composed on paper stock #F7F4EF, printed in charcoal and bronze. Built to grow from student to advocate.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="folio">Sections</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(1, 5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-charcoal hover:text-bronze">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="folio">Continue</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-charcoal hover:text-bronze">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="folio">Correspondence</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:hello@example.law" className="text-charcoal hover:text-bronze">hello@example.law</a></li>
            <li><a href="#" className="text-charcoal hover:text-bronze">LinkedIn</a></li>
            <li><a href="#" className="text-charcoal hover:text-bronze">ORCID</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-6 pb-8 md:px-12">
        <span className="folio">Volume I · Issue 01</span>
        <span className="folio">Nairobi, Kenya</span>
      </div>
    </footer>
  );
}

export function PageShell({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede?: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-24 md:px-12 md:pt-20">
      <div className="grid grid-cols-1 gap-8 border-b border-border pb-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="folio">{eyebrow}</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-charcoal md:text-7xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              {lede}
            </p>
          )}
        </div>
      </div>
      <div className="mt-16">{children}</div>
    </main>
  );
}