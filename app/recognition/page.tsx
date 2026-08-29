import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Recognition",
  description: "Credentials, leadership, community contribution, and creative achievement.",
  openGraph: { title: "Recognition", description: "Credentials, leadership, and contribution." },
};

const GROUPS = [
  {
    label: "Professional Credentials",
    items: [
      ["Ongoing", "Certified Secretaries, Advanced Level · KASNEB"],
      ["Jul 2025", "Certified Professional Mediator · IPMIS"],
      ["Certified", "CIPIT Data Protection Course · Strathmore University"],
      ["Certified", "The SDGs and the Law · University of Cambridge"],
    ],
  },
  {
    label: "Leadership",
    items: [
      ["2022 —", "Founder & CEO · KAMPUS KASH"],
      ["Current", "Head Designer · Independent remote design practice"],
      ["Awarded", "Organiser · Green Law Africa Initiative at Chuka, with BBA Advocates"],
    ],
  },
  {
    label: "Community & Service",
    items: [
      [
        "2023",
        "Supported low-income clients to understand and realise their legal rights · CLEAR Kenya",
      ],
      ["2023", "Organised alternative dispute resolution for parties in conflict · CLEAR Kenya"],
    ],
  },
  {
    label: "Creative Achievement",
    items: [
      ["1,000+", "Professional templates and visual assets delivered"],
      ["4 years", "Advanced Canva experience across web, print, and social media"],
      [
        "Portfolio",
        "Branding, regulatory documents, and campaigns for companies, schools, and individuals",
      ],
    ],
  },
];

export default function Recognition() {
  return (
    <PageShell
      eyebrow="Honours"
      title="Recognition"
      lede="Professional credentials, entrepreneurial leadership, community-facing legal work, and creative achievement — assembled from the record."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {GROUPS.map((g) => (
          <section key={g.label}>
            <div className="flex items-baseline justify-between border-b border-charcoal pb-3">
              <h2 className="font-display text-3xl">{g.label}</h2>
              <span className="folio">{g.items.length} entries</span>
            </div>
            <ul className="mt-4 divide-y divide-border">
              {g.items.map(([year, text]) => (
                <li key={text} className="flex items-baseline gap-6 py-4">
                  <span className="w-16 font-mono text-sm text-bronze">{year}</span>
                  <span className="text-base leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
