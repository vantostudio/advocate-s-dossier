"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV } from "./nav";

export function SiteHeader() {
  const pathname = usePathname();
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
          <Link href="/" className="group flex min-w-0 items-baseline gap-3">
            <span className="shrink-0 font-display text-[1.2rem] leading-none tracking-tight sm:text-[1.35rem]">
              Advocate<span className="text-bronze">.</span>Profile
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <nav className="hidden items-center gap-7 xl:flex">
              {NAV.slice(1, 6).map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
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

            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-charcoal sm:text-[12px]"
              aria-label="Open menu"
            >
              <span className="hidden sm:inline">Menu</span>
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
              <span className="folio">Navigation</span>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-charcoal transition-colors hover:text-bronze"
                aria-label="Close menu"
              >
                Close
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/25">
                  ×
                </span>
              </button>
            </div>

            <div className="mt-10 grid flex-1 grid-cols-1 gap-x-16 md:mt-16 md:grid-cols-2">
              {NAV.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-baseline gap-4 border-b border-border py-4 transition-colors hover:text-bronze md:gap-6 md:py-5"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
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
              <span className="folio">© 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
