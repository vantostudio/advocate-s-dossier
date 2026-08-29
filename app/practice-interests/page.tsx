import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Practice Interests",
  description: "Legal practice interests grounded in training and practical experience.",
  openGraph: { title: "Practice Interests", description: "Fields shaped by study and experience." },
};

const INTERESTS = [
  {
    name: "Litigation & Courtroom Practice",
    why: "More than 40 days observing and summarising proceedings at Makadara and Kibera Law Courts built a practical foundation in trial preparation, court procedure, and composed work under pressure.",
    evidence: "Judicial internship · Makadara & Kibera Law Courts",
  },
  {
    name: "Insurance Law & Claims",
    why: "Experience assessing quantum and liability at Kenindia Assurance developed an interest in clear legal opinions, careful claims analysis, and well-prepared client matters.",
    evidence: "Legal internship · Kenindia Assurance Company",
  },
  {
    name: "Mediation & Dispute Resolution",
    why: "Professional mediation certification and hands-on ADR work at CLEAR Kenya support a practical, client-centred approach to resolving conflict.",
    evidence: "Certified Professional Mediator · CLEAR Kenya",
  },
  {
    name: "Data Protection",
    why: "Certified training through CIPIT at Strathmore University strengthened an interest in responsible information governance and the legal questions surrounding personal data.",
    evidence: "CIPIT Data Protection Course · Strathmore University",
  },
  {
    name: "Client Advisory & Access to Justice",
    why: "Supporting low-income clients to understand and realise their rights reinforced the importance of clear communication, patient consultation, and practical legal guidance.",
    evidence: "Legal internship · CLEAR Kenya",
  },
  {
    name: "Business & Regulatory Practice",
    why: "Leading KAMPUS KASH has provided direct exposure to microfinance operations, organisational decision-making, creative services, and business regulatory matters.",
    evidence: "Founder & CEO · KAMPUS KASH",
  },
];

export default function PracticeInterests() {
  return (
    <PageShell
      eyebrow="Interests"
      title="Practice Interests"
      lede="Fields of developing practice interest, each grounded in direct experience, professional certification, or focused legal study."
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {INTERESTS.map((it, i) => (
          <div key={it.name} className="bg-paper p-8 md:p-10">
            <div className="flex items-baseline justify-between">
              <p className="folio">{(i + 1).toString().padStart(2, "0")}</p>
              <span className="folio">Field</span>
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              {it.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal">{it.why}</p>
            <dl className="mt-6 border-t border-border pt-6 text-sm">
              <div className="flex gap-4">
                <dt className="folio w-24 shrink-0">Foundation</dt>
                <dd>{it.evidence}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
