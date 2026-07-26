import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/practice-interests")({
  head: () => ({
    meta: [
      { title: "Practice Interests — Advocate Profile" },
      { name: "description", content: "Fields of curiosity, current reading, and future directions." },
      { property: "og:title", content: "Practice Interests" },
      { property: "og:description", content: "Curiosity, not yet expertise." },
    ],
  }),
  component: PracticeInterests,
});

const INTERESTS = [
  { name: "Technology Law", why: "Courts are being asked to reason about systems their doctrine did not anticipate. That gap is where the best law will be written this decade.", reading: "Cohen — Between Truth and Power", course: "Cyberlaw · Data Protection Seminar" },
  { name: "Constitutional Law", why: "It is the grammar of every other subject. A confident constitutional argument is often the shortest line between injustice and remedy.", reading: "Ghai & Cottrell — Kenya's Constitution", course: "Advanced Constitutional Law" },
  { name: "Commercial Law", why: "Because ordinary people build their lives on ordinary contracts — and the drafting of those contracts is real welfare work.", reading: "McKendrick — Contract Law", course: "Sales & Agency" },
  { name: "Data Protection", why: "A young statute, a young regulator, and a very old question about dignity. The doctrine is still being made.", reading: "ODPC Determinations 2024", course: "Data Protection Seminar" },
  { name: "Human Rights", why: "The discipline that keeps every other one honest.", reading: "Sen — The Idea of Justice", course: "Human Rights in Africa" },
  { name: "Environmental Law", why: "Public-trust doctrine deserves a serious jurisprudence in Kenya. I would like to help write it.", reading: "Environmental Management and Co-ordination Act", course: "Natural Resources Law" },
  { name: "Employment Law", why: "Where the state, the market, and the person meet — and rarely on equal terms.", reading: "ILO Recommendation 198", course: "Labour Relations" },
  { name: "Intellectual Property", why: "The most philosophical part of the syllabus. Who owns an idea, and who owes it back?", reading: "Drahos — Philosophy of IP", course: "IP Foundations" },
];

function PracticeInterests() {
  return (
    <PageShell
      eyebrow="Chapter VI · Curiosity"
      title="Practice Interests"
      lede="Not fields of expertise — fields of curiosity. Each is a set of questions I am currently learning to ask well, and the reading that got me there."
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {INTERESTS.map((it, i) => (
          <div key={it.name} className="bg-paper p-8 md:p-10">
            <div className="flex items-baseline justify-between">
              <p className="folio">№ {(i + 1).toString().padStart(2, "0")}</p>
              <span className="folio">Field</span>
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">{it.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal">{it.why}</p>
            <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
              <div className="flex gap-4">
                <dt className="folio w-24 shrink-0">Reading</dt>
                <dd className="italic">{it.reading}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="folio w-24 shrink-0">Coursework</dt>
                <dd>{it.course}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </PageShell>
  );
}