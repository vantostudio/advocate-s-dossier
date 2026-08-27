import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Publications — Advocate Profile" },
      { name: "description", content: "Working papers, essays, and case notes — with abstracts, citations, and downloads." },
      { property: "og:title", content: "Research & Publications" },
      { property: "og:description", content: "Working papers, essays, and case notes." },
    ],
  }),
  component: Research,
});

const PAPERS = [
  { title: "Devolution and the Silent Constitution: On Article 203(1)", type: "Working Paper", year: "2026", read: 14, tags: ["Constitutional", "Devolution"], abstract: "A close reading of the equitable-share formula and the doctrinal room for judicial supervision without displacing the political branch." },
  { title: "Cross-Border Data Flows Under the DPA 2019", type: "Essay", year: "2026", read: 9, tags: ["Data Protection", "Technology"], abstract: "How Kenya's Data Protection Act interacts with regional trade frameworks — and what the Commissioner's early rulings actually decided." },
  { title: "Horizontal Rights in Privatised Utilities", type: "Case Note", year: "2025", read: 6, tags: ["Human Rights", "Constitutional"], abstract: "Reading Mitu-Bell forward: the anatomy of a socio-economic-rights claim against a private licensee." },
  { title: "Reasonable in Law, Reasonable in Fact", type: "Essay", year: "2025", read: 11, tags: ["Administrative", "Judicial Review"], abstract: "The reasonableness standard in Kenyan administrative law after Republic v Kenya Revenue Authority — a proposed doctrinal map." },
  { title: "Employment Law in the Gig Economy", type: "Working Paper", year: "2024", read: 18, tags: ["Employment", "Technology"], abstract: "Classification, control, and the missing fourth factor: what platform-worker jurisprudence borrows from ILO Recommendation 198." },
];

const TYPES = ["All", "Working Paper", "Essay", "Case Note"] as const;

function Research() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const filtered = useMemo(
    () => PAPERS.filter((p) =>
      (type === "All" || p.type === type) &&
      (q === "" || (p.title + p.abstract + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase()))
    ),
    [q, type]
  );

  return (
    <PageShell
      eyebrow="Writing"
      title="Research & Publications"
      lede="An academic journal of my own — working papers, essays, and case notes. Each piece has an abstract, a citation, and a source."
    >
      <div className="grid grid-cols-1 gap-6 border-y border-border py-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <label htmlFor="q" className="folio">Search</label>
          <input
            id="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="title, abstract, or tag"
            className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-display text-2xl outline-none placeholder:text-ink-muted focus:border-bronze"
          />
        </div>
        <div className="md:col-span-6">
          <p className="folio">Filter by form</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-full border px-4 py-1.5 text-xs tracking-wide transition-colors ${type === t ? "border-charcoal bg-charcoal text-paper" : "border-border text-ink-muted hover:border-charcoal hover:text-charcoal"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 folio">{filtered.length} of {PAPERS.length} entries</div>

      <div className="mt-8 divide-y divide-border">
        {filtered.map((p) => (
          <article key={p.title} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="folio">{p.type}</p>
              <p className="mt-2 font-mono text-sm text-bronze">{p.year}</p>
              <p className="mt-1 text-xs text-ink-muted">{p.read} min read</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl leading-snug text-charcoal md:text-4xl">
                <a href="#" className="hover:text-bronze">{p.title}</a>
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal">{p.abstract}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="folio border border-border px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <a href="#" className="border-b border-charcoal pb-0.5 hover:text-bronze">Download PDF</a>
                <a href="#" className="text-ink-muted hover:text-bronze">Citation (BibTeX)</a>
              </div>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="py-16 text-center text-ink-muted">No entries match this filter.</p>
        )}
      </div>
    </PageShell>
  );
}