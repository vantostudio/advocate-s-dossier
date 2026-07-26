import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/moot-court")({
  head: () => ({
    meta: [
      { title: "Moot Court — Advocate Profile" },
      { name: "description", content: "Competitions, memorials, and lessons from advocacy in rehearsal." },
      { property: "og:title", content: "Moot Court" },
      { property: "og:description", content: "Competitions, memorials, and lessons." },
    ],
  }),
  component: MootCourt,
});

const COMPETITIONS = [
  {
    name: "Philip C. Jessup International Law Moot",
    year: "2026",
    role: "Oralist · Respondent Bench 2",
    award: "Runner-up · National Rounds",
    case: "State of Aurora v. State of Rovinia — territorial jurisdiction, cyber-operations, and the customary threshold of use of force.",
    lesson: "Elegance of argument is not decoration. It is the discipline of removing everything the bench does not need to hear.",
  },
  {
    name: "East Africa Human Rights Moot",
    year: "2025",
    role: "Lead Counsel · Applicant",
    award: "Best Memorial (Applicant)",
    case: "On the horizontal application of socio-economic rights in privatised utilities.",
    lesson: "Written pleadings survive after the oralist sits down. Write for the reader who will not hear you speak.",
  },
  {
    name: "Kenya National Constitutional Moot",
    year: "2024",
    role: "Second Speaker · Respondent",
    award: "Quarter-finalist",
    case: "Devolution and revenue allocation — Article 203(1) contested formulas.",
    lesson: "The bench asks the question you feared. Answer it first, then continue.",
  },
];

function MootCourt() {
  return (
    <PageShell
      eyebrow="Chapter III · Advocacy"
      title="Moot Court"
      lede="Advocacy in rehearsal. Every competition below was, first, hundreds of hours of quiet reading — and then, briefly, a room in which to make it count."
    >
      <div className="space-y-16">
        {COMPETITIONS.map((c) => (
          <article key={c.name} className="grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="folio">{c.year}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{c.name}</h2>
              <p className="mt-4 text-sm italic text-ink-muted">{c.role}</p>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--bronze)" }}>{c.award}</p>
            </div>
            <div className="md:col-span-8 md:pl-10 md:border-l md:border-border">
              <p className="folio">The Case</p>
              <p className="mt-3 text-lg leading-relaxed text-charcoal">{c.case}</p>
              <p className="folio mt-8">What it taught</p>
              <blockquote className="mt-3 border-l-2 border-bronze pl-5 font-display text-2xl italic leading-snug text-charcoal">
                {c.lesson}
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href="#" className="border-b border-charcoal pb-0.5 hover:text-bronze">Read the memorial (PDF)</a>
                <a href="#" className="text-ink-muted hover:text-bronze">Certificate</a>
                <a href="#" className="text-ink-muted hover:text-bronze">Bench notes</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}