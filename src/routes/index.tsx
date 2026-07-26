import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Identity — Advocate Profile" },
      { name: "description", content: "Future Advocate. Researcher. Problem Solver. Building tomorrow's legal profession." },
      { property: "og:title", content: "Identity — Advocate Profile" },
      { property: "og:description", content: "Future Advocate. Researcher. Problem Solver." },
    ],
  }),
  component: Identity,
});

function Identity() {
  // The "opening dossier" — a subtle one-time reveal.
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpened(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      {/* Dossier — signature opening */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-12 md:pt-14">
          <div className="flex items-center justify-between">
            <span className="folio">Dossier № 001 / Volume I</span>
            <span className="folio hidden sm:inline">Filed — MMXXVI</span>
          </div>

          <div className="relative mt-10 md:mt-16">
            {/* Folder */}
            <div
              className={`relative mx-auto max-w-4xl rounded-sm border border-charcoal/15 bg-[color-mix(in_oklab,var(--paper),white_30%)] p-8 shadow-[0_30px_80px_-40px_rgba(27,26,24,0.35)] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-14 ${opened ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <div className="flex items-start justify-between gap-6 border-b border-charcoal/15 pb-6">
                <div>
                  <p className="folio">Case File</p>
                  <p className="mt-2 font-display text-2xl md:text-3xl" style={{ color: "var(--bronze)" }}>
                    Amani W. Kariuki
                  </p>
                </div>
                <div className="text-right">
                  <p className="folio">Reference</p>
                  <p className="mt-2 font-mono text-sm">AWK / 2026 / LLB</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
                {[
                  ["Jurisdiction", "Republic of Kenya"],
                  ["Standing", "LL.B. Candidate"],
                  ["Class of", "2027"],
                  ["Chambers", "Nairobi"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="folio">{k}</p>
                    <p className="mt-1 text-charcoal">{v}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-ink-muted">
                Contents: identity · academic journey · moot court · research & publications · experience · practice interests · recognition · résumé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero — typography as hero */}
      <section className="mx-auto max-w-[1400px] px-6 pt-28 md:px-12 md:pt-40">
        <p className="folio">I. Identity</p>
        <h1 className="mt-8 font-display text-[13vw] leading-[0.9] tracking-[-0.02em] text-charcoal md:text-[9.5rem]">
          Future Advocate.
          <br />
          <span className="italic text-ink-muted">Researcher.</span>
          <br />
          Problem&nbsp;Solver.
        </h1>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="folio">Statement</p>
          </div>
          <p className="md:col-span-8 text-xl leading-relaxed text-charcoal md:text-2xl">
            Building tomorrow's legal profession — one carefully argued brief, one honest question, one thoughtful hour of reading at a time. This is a working record of my studies, my writing, and the quiet discipline of learning the law.
          </p>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="mx-auto mt-24 max-w-[1400px] border-y border-border px-6 md:px-12">
        <div className="grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-y-0 md:divide-x">
          {[
            ["Current", "LL.B., Year III"],
            ["Expected", "Graduation 2027"],
            ["Languages", "English · Kiswahili"],
            ["Located", "Nairobi, Kenya"],
          ].map(([k, v]) => (
            <div key={k} className="px-2 py-6 md:px-8">
              <p className="folio">{k}</p>
              <p className="mt-2 font-display text-xl md:text-2xl">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic timeline — abbreviated */}
      <section className="mx-auto mt-28 max-w-[1400px] px-6 md:px-12">
        <div className="flex items-baseline justify-between border-b border-border pb-6">
          <div>
            <p className="folio">Chapter II</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Academic Journey</h2>
          </div>
          <Link to="/academic-journey" className="hidden md:inline text-sm text-ink-muted hover:text-bronze">
            Read in full →
          </Link>
        </div>
        <ol className="mt-10 space-y-0">
          {[
            { year: "2027", title: "Bachelor of Laws (LL.B.)", place: "University of Nairobi — School of Law", note: "Expected. Coursework in Constitutional, Commercial, and Technology Law." },
            { year: "2025", title: "Dean's Commendation", place: "Legal Research & Writing", note: "For sustained excellence across three consecutive semesters." },
            { year: "2024", title: "Moot Court — Quarter-finalist", place: "East Africa Regional Rounds", note: "Best Memorial (Respondent) — Constitutional Bench." },
            { year: "2023", title: "Kenya Certificate of Secondary Education", place: "Alliance High School", note: "Debate Captain. Head of Model United Nations." },
          ].map((row) => (
            <li key={row.year} className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-2">
                <p className="font-mono text-sm text-bronze">{row.year}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-2xl leading-tight text-charcoal md:text-3xl">{row.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{row.place}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-charcoal">{row.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 md:hidden">
          <Link to="/academic-journey" className="text-sm text-ink-muted hover:text-bronze">Read in full →</Link>
        </div>
      </section>

      {/* Chapters index */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-12">
        <p className="folio">The rest of the dossier</p>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/moot-court", n: "III", t: "Moot Court", d: "Advocacy in rehearsal — competitions, memorials, and the lessons that stayed." },
            { to: "/research", n: "IV", t: "Research & Publications", d: "Working papers, essays, and case notes. Every piece with an abstract and a source." },
            { to: "/experience", n: "V", t: "Experience", d: "Internships, legal aid, and quiet work at the edge of practice." },
            { to: "/practice-interests", n: "VI", t: "Practice Interests", d: "Curiosity, not expertise — the questions I am currently learning to ask." },
            { to: "/recognition", n: "VII", t: "Recognition", d: "Awards, leadership, and community — assembled honestly." },
            { to: "/resume", n: "VIII", t: "Resume", d: "An interactive record. Printable, but built for the browser." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col justify-between gap-10 bg-paper p-8 transition-colors hover:bg-[color-mix(in_oklab,var(--paper),white_40%)] md:p-10"
            >
              <div>
                <p className="folio">Chapter {c.n}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.d}</p>
              </div>
              <span className="text-sm text-charcoal transition-transform group-hover:translate-x-1">
                Turn the page <span className="text-bronze">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 border-t border-border pt-12 md:grid-cols-12">
          <p className="folio md:col-span-3">In closing</p>
          <div className="md:col-span-9">
            <p className="font-display text-3xl leading-snug text-charcoal md:text-5xl">
              "The law is a discipline of listening carefully — to statute, to precedent, and above all, to the person in front of you."
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link to="/connect" className="group inline-flex items-baseline gap-3 border-b border-charcoal pb-1 text-sm">
                Open a correspondence <span className="text-bronze transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/resume" className="group inline-flex items-baseline gap-3 border-b border-transparent pb-1 text-sm text-ink-muted hover:border-border hover:text-charcoal">
                Download résumé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}