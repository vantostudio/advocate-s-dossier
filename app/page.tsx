import type { Metadata } from "next";
import Link from "next/link";

import { OpeningCard } from "@/components/opening-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: { absolute: "Identity — Advocate Profile" },
  description: "Future Advocate. Researcher. Problem Solver. Building tomorrow's legal profession.",
  openGraph: {
    title: "Identity — Advocate Profile",
    description: "Future Advocate. Researcher. Problem Solver.",
  },
};

const QUICK_FACTS = [
  ["Current", "LL.B., Year III"],
  ["Expected", "Graduation 2027"],
  ["Languages", "English · Kiswahili"],
  ["Located", "Nairobi, Kenya"],
];

const TIMELINE = [
  {
    year: "2027",
    title: "Bachelor of Laws (LL.B.)",
    place: "University of Nairobi — School of Law",
    note: "Expected. Coursework in Constitutional, Commercial, and Technology Law.",
  },
  {
    year: "2025",
    title: "Dean's Commendation",
    place: "Legal Research & Writing",
    note: "For sustained excellence across three consecutive semesters.",
  },
  {
    year: "2024",
    title: "Moot Court — Quarter-finalist",
    place: "East Africa Regional Rounds",
    note: "Best Memorial (Respondent) — Constitutional Bench.",
  },
  {
    year: "2023",
    title: "Kenya Certificate of Secondary Education",
    place: "Alliance High School",
    note: "Debate Captain. Head of Model United Nations.",
  },
];

const SECTIONS = [
  {
    href: "/moot-court",
    t: "Moot Court",
    d: "Advocacy in rehearsal — competitions, memorials, and the lessons that stayed.",
  },
  {
    href: "/research",
    t: "Research & Publications",
    d: "Working papers, essays, and case notes. Every piece with an abstract and a source.",
  },
  {
    href: "/experience",
    t: "Experience",
    d: "Internships, legal aid, and quiet work at the edge of practice.",
  },
  {
    href: "/practice-interests",
    t: "Practice Interests",
    d: "Curiosity, not expertise — the questions I am currently learning to ask.",
  },
  {
    href: "/recognition",
    t: "Recognition",
    d: "Awards, leadership, and community — assembled honestly.",
  },
  {
    href: "/resume",
    t: "Resume",
    d: "An interactive record. Printable, but built for the browser.",
  },
];

export default function Identity() {
  return (
    <main>
      {/* Profile card — signature opening */}
      <section className="relative overflow-hidden grain">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--bronze-soft), transparent)" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 pt-8 sm:px-6 md:px-12 md:pt-14">
          <div className="relative mt-8 md:mt-14">
            <OpeningCard />
          </div>
        </div>
      </section>

      {/* Hero — typography as hero */}
      <section className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-6 md:px-12 md:pt-36">
        <Reveal>
          <p className="folio">Identity</p>
          <h1
            className="mt-6 font-display leading-[0.9] tracking-[-0.02em] text-charcoal md:mt-8"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9.5rem)" }}
          >
            Future Advocate.
            <br />
            <span className="italic text-ink-muted">Researcher.</span>
            <br />
            Problem&nbsp;Solver.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="folio">Statement</p>
            </div>
            <p className="text-lg leading-relaxed text-charcoal md:col-span-8 md:text-2xl">
              Building tomorrow&apos;s legal profession — one carefully argued brief, one honest
              question, one thoughtful hour of reading at a time. This is a working record of my
              studies, my writing, and the quiet discipline of learning the law.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Quick facts strip */}
      <section className="mt-20 border-y border-border md:mt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {QUICK_FACTS.map(([k, v], i) => (
              <div
                key={k}
                className={`px-1 py-6 md:px-8 ${i % 2 === 1 ? "border-l border-border md:border-l" : ""} ${i > 1 ? "border-t border-border md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
              >
                <p className="folio">{k}</p>
                <p className="mt-2 font-display text-lg leading-tight sm:text-xl md:text-2xl">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic timeline — abbreviated */}
      <section className="mx-auto mt-20 max-w-[1400px] px-5 sm:px-6 md:mt-28 md:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="folio">Education</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-6xl">Academic Journey</h2>
          </div>
          <Link
            href="/academic-journey"
            className="link-underline hidden text-sm text-ink-muted hover:text-bronze md:inline"
          >
            Read in full →
          </Link>
        </div>
        <ol className="mt-8 md:mt-10">
          {TIMELINE.map((row, i) => (
            <Reveal key={row.year} delay={i * 70}>
              <li className="group grid grid-cols-1 gap-3 border-b border-border py-7 transition-colors hover:bg-[color-mix(in_oklab,var(--paper-raised),transparent_35%)] md:grid-cols-12 md:gap-8 md:py-8">
                <div className="md:col-span-2">
                  <p className="font-mono text-sm text-bronze">{row.year}</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-xl leading-tight text-charcoal sm:text-2xl md:text-3xl">
                    {row.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{row.place}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm leading-relaxed text-charcoal">{row.note}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 md:hidden">
          <Link
            href="/academic-journey"
            className="link-underline text-sm text-ink-muted hover:text-bronze"
          >
            Read in full →
          </Link>
        </div>
      </section>

      {/* Sections index */}
      <section className="mx-auto mt-24 max-w-[1400px] px-5 sm:px-6 md:mt-32 md:px-12">
        <p className="folio">More sections</p>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col justify-between gap-8 bg-paper p-7 transition-colors duration-500 hover:bg-paper-raised md:gap-10 md:p-10"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-bronze transition-transform duration-500 group-hover:scale-x-100"
              />
              <div>
                <h3 className="font-display text-2xl leading-tight text-charcoal md:text-3xl">
                  {c.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.d}</p>
              </div>
              <span className="text-sm text-charcoal">
                View section{" "}
                <span className="inline-block text-bronze transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto mt-24 max-w-[1400px] px-5 sm:px-6 md:mt-32 md:px-12">
        <div className="grid grid-cols-1 gap-6 border-t border-border pt-12 md:grid-cols-12 md:gap-8">
          <p className="folio md:col-span-3">In closing</p>
          <div className="md:col-span-9">
            <p className="font-display text-2xl leading-snug text-charcoal sm:text-3xl md:text-5xl">
              &ldquo;The law is a discipline of listening carefully — to statute, to precedent, and
              above all, to the person in front of you.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="/connect"
                className="group inline-flex items-baseline gap-3 border-b border-charcoal pb-1 text-sm"
              >
                Open a correspondence{" "}
                <span className="text-bronze transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/resume"
                className="group inline-flex items-baseline gap-3 border-b border-transparent pb-1 text-sm text-ink-muted hover:border-border hover:text-charcoal"
              >
                Download résumé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
