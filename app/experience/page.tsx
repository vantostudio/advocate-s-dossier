import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Experience",
  description: "Judicial, insurance, NGO, entrepreneurial, and creative experience.",
  openGraph: { title: "Experience", description: "Legal and professional experience." },
};

const ROLES = [
  {
    period: "May — Sep 2025",
    role: "Legal Intern",
    org: "Kenindia Assurance Company",
    city: "Nairobi",
    body: "Provided legal opinions on the quantum and liability of claims, while supporting case preparation and client consultations in an insurance-law setting.",
    skills: ["Claims analysis", "Legal opinions", "Case preparation", "Client consultation"],
  },
  {
    period: "May — Aug 2024",
    role: "Judicial Intern",
    org: "Makadara & Kibera Law Courts",
    city: "Nairobi",
    body: "Attended and summarised proceedings across more than 40 court days. Conducted legal research and drafted memoranda and professional correspondence.",
    skills: ["Court procedure", "Proceedings summaries", "Legal research", "Memoranda"],
  },
  {
    period: "May — Sep 2023",
    role: "Legal Intern",
    org: "CLEAR Kenya",
    city: "Mombasa",
    body: "Organised alternative dispute resolution for parties in conflict and supported low-income clients in understanding and pursuing their legal rights.",
    skills: ["Alternative dispute resolution", "Client support", "Legal empowerment"],
  },
  {
    period: "2022 — present",
    role: "Founder & CEO",
    org: "KAMPUS KASH",
    city: "Entrepreneurial venture",
    body: "Leads microfinance operations, creative services, and business regulatory matters, combining strategic thinking with hands-on organisational leadership.",
    skills: ["Business operations", "Regulatory matters", "Leadership", "Creative services"],
  },
  {
    period: "4 years' experience",
    role: "Head Designer",
    org: "Independent Graphic Design Practice",
    city: "Remote · Pro level",
    body: "Designed more than 1,000 professional templates and visual assets—including logos, letterheads, ID cards, business cards, brochures, and digital and print materials—for companies such as Take Me Out Adventures, educational institutions, and individual clients. Advanced Canva practice supports fast, versatile delivery for branding, regulatory documents, and promotional campaigns.",
    skills: ["Canva", "Brand collateral", "Print & digital design", "Client delivery"],
  },
];

export default function Experience() {
  return (
    <PageShell
      eyebrow="Practice"
      title="Experience"
      lede="Practical legal exposure across insurance, the courts, and community justice—supported by entrepreneurial leadership and a substantial creative practice."
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
