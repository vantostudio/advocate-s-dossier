"use client";

import { useEffect, useState } from "react";

const FACTS = [
  ["Country", "Kenya"],
  ["Standing", "LL.B. Candidate"],
  ["Class of", "2027"],
  ["Based in", "Nairobi"],
];

/** The "opening dossier" — a subtle one-time reveal on first paint. */
export function OpeningCard() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpened(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`surface-raised relative mx-auto max-w-4xl rounded-sm p-6 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8 md:p-14 ${
        opened ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border pb-6">
        <div className="min-w-0">
          <p className="folio">Profile</p>
          <p className="mt-2 truncate font-display text-2xl text-bronze md:text-3xl">
            Amani W. Kariuki
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="folio">Programme</p>
          <p className="mt-2 font-mono text-xs sm:text-sm">LL.B. (Hons), 2027</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 text-sm md:grid-cols-4">
        {FACTS.map(([k, v]) => (
          <div key={k} className="min-w-0">
            <p className="folio">{k}</p>
            <p className="mt-1 text-charcoal">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-ink-muted">
        Academic journey · moot court · research &amp; publications · experience · practice
        interests · recognition · résumé.
      </p>
    </div>
  );
}
