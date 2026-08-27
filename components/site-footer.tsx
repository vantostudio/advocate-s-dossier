import Link from "next/link";

import { NAV } from "./nav";

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
              Available for internships, research collaboration, moot coaching, and thoughtful legal
              conversation.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              href="/connect"
              className="group inline-flex items-center gap-4 rounded-full border border-charcoal/25 px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-charcoal transition-colors hover:border-bronze hover:bg-bronze hover:text-paper"
            >
              Write to me
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-12 md:gap-12">
          <div className="col-span-2 md:col-span-5">
            <p className="folio">About this site</p>
            <p className="mt-4 font-display text-xl leading-snug text-charcoal md:text-2xl">
              A living record — updated as coursework, research, and practice evolve.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
              Built to grow from student to advocate: a single place for academic work, writing,
              advocacy, and professional contact.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="folio">Sections</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.slice(1, 5).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-charcoal hover:text-bronze">
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
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-charcoal hover:text-bronze">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="folio">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@example.law"
                  className="link-underline text-charcoal hover:text-bronze"
                >
                  hello@example.law
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-charcoal hover:text-bronze">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-charcoal hover:text-bronze">
                  ORCID
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-5 py-6 sm:px-6 md:px-12">
          <span className="folio">Amani W. Kariuki</span>
          <span className="folio">Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}
