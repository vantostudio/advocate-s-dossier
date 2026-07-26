import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/recognition")({
  head: () => ({
    meta: [
      { title: "Recognition — Advocate Profile" },
      { name: "description", content: "Awards, leadership, community work, and professional memberships." },
      { property: "og:title", content: "Recognition" },
      { property: "og:description", content: "Awards, leadership, and community." },
    ],
  }),
  component: Recognition,
});

const GROUPS = [
  {
    label: "Awards",
    items: [
      ["2026", "Runner-up · Jessup National Rounds"],
      ["2025", "Best Memorial (Applicant) · EA Human Rights Moot"],
      ["2025", "Dean's Commendation · Legal Research & Writing"],
      ["2024", "Chancellor's Merit Scholarship"],
    ],
  },
  {
    label: "Leadership",
    items: [
      ["2026", "Secretary · Constitutional Law Society"],
      ["2025", "Editor · The Nairobi Law Review (student)"],
      ["2024", "Convenor · First-Year Peer Mentorship"],
    ],
  },
  {
    label: "Community",
    items: [
      ["2025", "Volunteer · Kituo Cha Sheria weekend clinics"],
      ["2024", "Facilitator · Know-Your-Rights outreach, Kibera"],
    ],
  },
  {
    label: "Memberships",
    items: [
      ["2025", "Student Member · East Africa Law Society"],
      ["2024", "Student Member · Law Society of Kenya"],
      ["2024", "Associate · Kenya Model United Nations"],
    ],
  },
];

function Recognition() {
  return (
    <PageShell
      eyebrow="Chapter VII · Honours"
      title="Recognition"
      lede="Awards, leadership, and community — assembled without embellishment. The record matters more than the ribbon."
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