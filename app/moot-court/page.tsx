import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Advocacy & ADR",
  description:
    "Courtroom exposure, case preparation, mediation, and client-centred dispute resolution.",
  openGraph: { title: "Advocacy & ADR", description: "Courtroom exposure and dispute resolution." },
};

const ADVOCACY = [
  {
    name: "Courtroom Exposure",
    year: "2024",
    role: "Judicial Intern · Makadara & Kibera Law Courts",
    marker: "40+ court days",
    work: "Attended and summarised proceedings across more than 40 court days, building a practical understanding of trial preparation, court procedure, and the disciplined documentation of judicial proceedings.",
    capabilities: ["Proceedings summaries", "Court procedure", "Composure under pressure"],
  },
  {
    name: "Claims & Case Preparation",
    year: "2025",
    role: "Legal Intern · Kenindia Assurance Company",
    marker: "Insurance law",
    work: "Prepared legal opinions on quantum and liability, supported case preparation, and participated in client consultations—experience that connected careful analysis with practical dispute work.",
    capabilities: ["Legal opinions", "Claims analysis", "Client consultation"],
  },
  {
    name: "Alternative Dispute Resolution",
    year: "2023 · 2025",
    role: "CLEAR Kenya · Certified Professional Mediator",
    marker: "Client-centred resolution",
    work: "Organised ADR for parties in conflict at CLEAR Kenya and later earned Certified Professional Mediator status through IPMIS in July 2025.",
    capabilities: ["Mediation", "Conflict facilitation", "Access to justice"],
  },
];

export default function MootCourt() {
  return (
    <PageShell
      eyebrow="Advocacy"
      title="Advocacy & ADR"
      lede="A practical foundation in courtroom procedure, case preparation, claims analysis, and mediation—developed across judicial, corporate, and NGO environments."
    >
      <div className="space-y-16">
        {ADVOCACY.map((item) => (
          <article
            key={item.name}
            className="grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <p className="folio">{item.year}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{item.name}</h2>
              <p className="mt-4 text-sm italic text-ink-muted">{item.role}</p>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--bronze)" }}>
                {item.marker}
              </p>
            </div>
            <div className="md:col-span-8 md:pl-10 md:border-l md:border-border">
              <p className="folio">Experience</p>
              <p className="mt-3 text-lg leading-relaxed text-charcoal">{item.work}</p>
              <p className="folio mt-8">Capabilities developed</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.capabilities.map((capability) => (
                  <li key={capability} className="folio border border-border px-3 py-1">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
