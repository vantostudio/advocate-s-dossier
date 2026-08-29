import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Academic Journey",
  description: "Oloo Morgan Hope's legal education, professional training, and certifications.",
  openGraph: { title: "Academic Journey", description: "Education and professional training." },
};

const ENTRIES = [
  {
    year: "Ongoing",
    tag: "Professional training",
    title: "Advocates Training Programme",
    place: "Kenya School of Law · Nairobi",
    body: "Currently undertaking the Advocates Training Programme. Pupillage is pending.",
  },
  {
    year: "Ongoing",
    tag: "Professional studies",
    title: "Certified Secretaries · Advanced Level",
    place: "KASNEB",
    body: "Pursuing advanced-level Certified Secretaries studies alongside professional legal training.",
  },
  {
    year: "2025",
    tag: "Degree",
    title: "Bachelor of Laws (LL.B.)",
    place: "Chuka University · Kenya",
    body: "Completed in April 2025 with Second Class Honours, Upper Division.",
  },
  {
    year: "July 2025",
    tag: "Certification",
    title: "Certified Professional Mediator (CPM)",
    place: "International Professional Mediation Innovate Services (IPMIS)",
    body: "Completed professional mediation training, strengthening practical dispute-resolution and facilitation skills.",
  },
  {
    year: "Certified",
    tag: "Short course",
    title: "CIPIT Data Protection Course",
    place: "Strathmore University",
    body: "Certified short-course study in data protection through the Centre for Intellectual Property and Information Technology Law.",
  },
  {
    year: "Certified",
    tag: "Short course",
    title: "The SDGs and the Law",
    place: "University of Cambridge",
    body: "Certified short-course study connecting legal practice and the Sustainable Development Goals.",
  },
  {
    year: "2020",
    tag: "Secondary education",
    title: "Kenya Certificate of Secondary Education",
    place: "Shimo-la-Tewa School · Kenya",
    body: "Achieved a mean grade of B+, with an A− in English.",
  },
];

export default function AcademicJourney() {
  return (
    <PageShell
      eyebrow="Education"
      title="Academic Journey"
      lede="A record of formal legal education, professional qualification, and focused study — from an upper-division LL.B. to the Advocates Training Programme."
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
