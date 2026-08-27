import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internships, legal aid, and research work at the edge of practice.",
  openGraph: { title: "Experience", description: "Internships, legal aid, and research work." },
};

const ROLES = [
  {
    period: "2026 — present",
    role: "Legal Intern",
    org: "Ochieng, Njoroge & Co. Advocates",
    city: "Nairobi",
    body: "Drafting pleadings and research memoranda for commercial disputes. Attending High Court mentions with supervising counsel.",
    skills: ["Commercial drafting", "Case research", "Client interviews"],
    ref: "Reference on request — Managing Partner",
  },
  {
    period: "2025 · 12 weeks",
    role: "Legal Aid Volunteer",
    org: "Kituo Cha Sheria",
    city: "Nairobi & Mombasa",
    body: "Front-desk intake for pro-bono clients; drafting demand letters and small-claims filings; participating in weekend outreach clinics.",
    skills: ["Client intake", "Plain-language drafting", "Community outreach"],
  },
  {
    period: "2025",
    role: "Research Assistant",
    org: "University of Nairobi, Faculty of Law",
    city: "Prof. J. Otieno",
    body: "Comparative constitutional research on Bills of Rights in East Africa. Curated a working bibliography of 240 sources.",
    skills: ["Comparative research", "Citation management", "Editing"],
  },
  {
    period: "2024 · summer",
    role: "Judicial Attachment",
    org: "High Court of Kenya — Milimani Commercial Division",
    city: "Nairobi",
    body: "Observed proceedings, prepared case digests for chambers, and shadowed the Registrar on case-management sessions.",
    skills: ["Court procedure", "Case digesting", "Chambers etiquette"],
  },
];

export default function Experience() {
  return (
    <PageShell
      eyebrow="Practice"
      title="Experience"
      lede="Not yet an advocate. But not idle either. These are the rooms in which I have been quietly useful — and what they taught me."
    >
      <div className="space-y-0">
        {ROLES.map((r) => (
          <article
            key={r.role + r.period}
            className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-sm text-bronze">{r.period}</p>
              <p className="folio mt-2">{r.city}</p>
            </div>
            <div className="md:col-span-6">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">{r.role}</h2>
              <p className="mt-2 text-lg italic text-ink-muted">{r.org}</p>
              <p className="mt-5 text-base leading-relaxed">{r.body}</p>
              {r.ref && <p className="mt-4 text-xs text-ink-muted">{r.ref}</p>}
            </div>
            <div className="md:col-span-3">
              <p className="folio">Skills sharpened</p>
              <ul className="mt-3 space-y-1 text-sm">
                {r.skills.map((s) => (
                  <li key={s} className="border-b border-border pb-1">
                    {s}
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
