import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Academic Journey",
  description: "A chronological record of education, scholarships, and academic milestones.",
  openGraph: { title: "Academic Journey", description: "Education, scholarships, and milestones." },
};

const ENTRIES = [
  {
    year: "2027",
    tag: "Expected",
    title: "Bachelor of Laws (LL.B.)",
    place: "University of Nairobi — School of Law",
    body: "Concentrations forming in Constitutional Law, Commercial Law, and emerging Technology & Data Protection frameworks. Independent research on judicial reasoning in devolution disputes.",
  },
  {
    year: "2026",
    tag: "Milestone",
    title: "Research Assistant — Faculty of Law",
    place: "Prof. J. Otieno · Comparative Constitutional Studies",
    body: "Assisting on a working paper examining the Bill of Rights in three East African constitutions.",
  },
  {
    year: "2025",
    tag: "Award",
    title: "Dean's Commendation",
    place: "Legal Research & Writing",
    body: "Recognised for sustained excellence across three consecutive semesters. Featured in the faculty's annual honours list.",
  },
  {
    year: "2024",
    tag: "Scholarship",
    title: "Chancellor's Merit Award",
    place: "University of Nairobi",
    body: "Partial tuition scholarship awarded on academic performance and leadership.",
  },
  {
    year: "2024",
    tag: "Certificate",
    title: "Certificate in Legal Research Methods",
    place: "Strathmore Institute of Advanced Studies",
    body: "Six-week intensive on Kenyan and comparative research databases, citation, and empirical methods.",
  },
  {
    year: "2023",
    tag: "Milestone",
    title: "Called to University",
    place: "University of Nairobi — School of Law",
    body: "Admitted to the LL.B. programme with distinction in the entry examination.",
  },
  {
    year: "2023",
    tag: "Milestone",
    title: "Kenya Certificate of Secondary Education",
    place: "Alliance High School",
    body: "A minus. Debate Captain. Head of Model United Nations. Editor of the school journal.",
  },
];

export default function AcademicJourney() {
  return (
    <PageShell
      eyebrow="Education"
      title="Academic Journey"
      lede="A chronological ledger of the years that shaped the beginnings of a legal mind — degrees, scholarships, and the quieter certificates that mattered."
    >
      <ol className="relative">
        <span
          className="absolute left-[calc(16.6667%-0.5px)] top-0 hidden h-full w-px bg-border md:block"
          aria-hidden
        />
        {ENTRIES.map((e, i) => (
          <li
            key={i}
            className="relative grid grid-cols-1 gap-4 border-b border-border py-10 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-2">
              <p className="font-mono text-sm text-bronze">{e.year}</p>
              <p className="folio mt-1">{e.tag}</p>
            </div>
            <span
              className="absolute left-[calc(16.6667%-4px)] top-12 hidden h-2 w-2 rounded-full bg-bronze md:block"
              aria-hidden
            />
            <div className="md:col-span-6 md:pl-8">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">{e.title}</h2>
              <p className="mt-2 text-sm italic text-ink-muted">{e.place}</p>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm leading-relaxed">{e.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
