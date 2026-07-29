import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = NAV.find((n) => n.to === pathname) ?? NAV[0];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "border-b border-border bg-[color-mix(in_oklab,var(--paper),transparent_12%)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6 md:px-12 md:py-5">
          <Link to="/" className="group flex min-w-0 items-baseline gap-3">
            <span className="truncate font-display text-[1.2rem] leading-none tracking-tight sm:text-[1.35rem]">
              Advocate<span className="text-bronze">.</span>Profile
            </span>
            <span className="folio hidden shrink-0 md:inline">Est. 2026 — Nairobi</span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <nav className="hidden items-center gap-7 xl:flex">
              {NAV.slice(1, 6).map((item) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`link-underline text-[13px] tracking-wide transition-colors ${
                      active ? "text-charcoal" : "text-ink-muted hover:text-charcoal"
                    }`}
                    data-status={active ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <span className="hidden h-5 w-px bg-border xl:block" />

            <ThemeToggle />

            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-charcoal sm:text-[12px]"
              aria-label="Open index"
            >
              <span className="hidden sm:inline">
                <span className="text-ink-muted">{current.num}</span> Index
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/25 transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-paper">
                <span className="flex flex-col gap-[3px]">
                  <span className="block h-[1px] w-4 bg-current transition-transform duration-300 group-hover:-translate-y-[1px]" />
                  <span className="block h-[1px] w-4 bg-current" />
                  <span className="block h-[1px] w-4 bg-current transition-transform duration-300 group-hover:translate-y-[1px]" />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full origin-left bg-bronze transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 animate-fade-in overflow-y-auto bg-paper grain"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex min-h-full max-w-[1400px] flex-col px-5 py-4 sm:px-6 md:px-12 md:py-5">
            <div className="flex items-center justify-between">
              <span className="folio">Table of Contents</span>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-charcoal transition-colors hover:text-bronze"
                aria-label="Close index"
              >
                Close
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/25">×</span>
              </button>
            </div>

            <div className="mt-10 grid flex-1 grid-cols-1 gap-x-16 md:mt-16 md:grid-cols-2">
              {NAV.map((item, i) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex items-baseline gap-4 border-b border-border py-4 transition-colors hover:text-bronze md:gap-6 md:py-5"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span className="folio w-6 shrink-0 md:w-8">{item.num}</span>
                    <span
                      className={`min-w-0 truncate font-display text-2xl transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl md:text-4xl ${
                        active ? "text-bronze" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="ml-auto shrink-0 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
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
    <footer className="mt-24 border-t border-border bg-paper grain md:mt-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-12">
        {/* Call to action band */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-border py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-8">
            <p className="folio">Correspondence</p>
            <p className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
              Open a file with me.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
              Available for internships, research collaboration, moot coaching, and thoughtful legal conversation.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/connect"
              className="group inline-flex items-center gap-4 rounded-full border border-charcoal/25 px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-charcoal transition-colors hover:border-bronze hover:bg-bronze hover:text-paper"
            >
              Write to me
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-12 md:gap-12">
          <div className="col-span-2 md:col-span-5">
            <p className="folio">Colophon</p>
            <p className="mt-4 font-display text-xl leading-snug text-charcoal md:text-2xl">
              A living dossier — updated as coursework, research, and practice evolve.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
              Set in Instrument Serif and Inter. Composed on paper stock #F7F4EF, printed in charcoal and bronze. Built to grow from student to advocate.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="folio">Sections</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.slice(1, 5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline text-charcoal hover:text-bronze">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="folio">Continue</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.slice(5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline text-charcoal hover:text-bronze">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="folio">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="mailto:hello@example.law" className="link-underline text-charcoal hover:text-bronze">hello@example.law</a></li>
              <li><a href="#" className="link-underline text-charcoal hover:text-bronze">LinkedIn</a></li>
              <li><a href="#" className="link-underline text-charcoal hover:text-bronze">ORCID</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-5 py-6 sm:px-6 md:px-12">
          <span className="folio">Volume I · Issue 01</span>
          <span className="folio">Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede?: string; children: ReactNode }) {
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
