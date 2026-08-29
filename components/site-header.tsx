"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { NAV } from "./nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  // Close on navigation, and hand focus back to the trigger.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    // Locking the body also removes the scrollbar, which shifts the whole page
    // left on desktop. Pad by the exact width it occupied.
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;

    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;

      // Keep Tab inside the panel while it is open.
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "border-b border-border bg-[color-mix(in_oklab,var(--paper),transparent_12%)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-6 md:px-12 md:py-5">
          <Link href="/" className="group flex min-w-0 items-baseline gap-3">
            <span className="shrink-0 font-display text-[1.2rem] leading-none tracking-tight sm:text-[1.35rem]">
              Morgan<span className="text-bronze">.</span>Hope
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
              {NAV.slice(1, 6).map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
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
              ref={triggerRef}
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label="Open menu"
              className="group -mr-1 flex items-center gap-3 px-1 py-1 text-[11px] tracking-[0.18em] uppercase text-charcoal sm:mr-0 sm:text-[12px]"
            >
              <span className="hidden sm:inline">Menu</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/25 transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-paper sm:h-9 sm:w-9">
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
          ref={panelRef}
          id="site-menu"
          className="fixed inset-0 z-50 animate-fade-in overflow-y-auto overscroll-contain bg-paper grain"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="mx-auto flex min-h-full max-w-[1400px] flex-col px-5 py-3 sm:px-6 md:px-12 md:py-5">
            <div className="flex items-center justify-between">
              <span className="folio">Navigation</span>
              <button
                ref={closeRef}
                onClick={close}
                aria-label="Close menu"
                className="-mr-1 flex items-center gap-2 px-1 py-1 text-[11px] tracking-[0.18em] uppercase text-charcoal transition-colors hover:text-bronze sm:mr-0 sm:text-[12px]"
              >
                Close
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/25 text-base sm:h-9 sm:w-9">
                  ×
                </span>
              </button>
            </div>

            <nav
              aria-label="All sections"
              className="mt-8 grid flex-1 grid-cols-1 gap-x-16 md:mt-16 md:grid-cols-2"
            >
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group flex items-baseline gap-4 border-b border-border py-3.5 transition-colors hover:text-bronze md:gap-6 md:py-5"
                  >
                    <span
                      className={`min-w-0 font-display text-[1.6rem] leading-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl md:text-4xl ${
                        active ? "text-bronze" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      aria-hidden
                      className="ml-auto shrink-0 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border pt-6 pb-2">
              <span className="folio">Nairobi · English · Swahili</span>
              <span className="folio">© 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
