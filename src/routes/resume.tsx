import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Advocate Profile" },
      { name: "description", content: "An interactive résumé — education, skills, and downloads." },
      { property: "og:title", content: "Resume" },
      { property: "og:description", content: "Interactive résumé and downloads." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageShell
      eyebrow="Chapter VIII · Record"
      title="Résumé"
      lede="A working record — printable on demand, but built to be read here. Updated with each new page of the dossier."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <aside className="md:col-span-4 space-y-10">
          <div>
            <p className="folio">Contact</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Nairobi, Kenya</li>
              <li><a href="mailto:hello@example.law" className="hover:text-bronze">hello@example.law</a></li>
              <li><a href="#" className="hover:text-bronze">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-bronze">ORCID ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="folio">Downloads</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="border-b border-charcoal pb-0.5 hover:text-bronze">Résumé (PDF · A4)</a></li>
              <li><a href="#" className="hover:text-bronze">Résumé (PDF · Letter)</a></li>
              <li><a href="#" className="hover:text-bronze">Academic transcript</a></li>
            </ul>
          </div>
          <div>
            <p className="folio">Languages</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between border-b border-border pb-1"><span>English</span><span className="text-ink-muted">Native</span></li>
              <li className="flex justify-between border-b border-border pb-1"><span>Kiswahili</span><span className="text-ink-muted">Native</span></li>
              <li className="flex justify-between border-b border-border pb-1"><span>French</span><span className="text-ink-muted">Working</span></li>
            </ul>
          </div>
        </aside>

        <div className="md:col-span-8 space-y-14">
          <section>
            <p className="folio">Education</p>
            <ul className="mt-4 space-y-8">
              {[
                ["2023 — 2027 (expected)", "LL.B., University of Nairobi", "First-class trajectory. Concentrations in Constitutional, Commercial, and Technology Law."],
                ["2019 — 2023", "KCSE, Alliance High School", "A minus. Debate Captain."],
              ].map(([p, t, d]) => (
                <li key={t} className="grid grid-cols-1 gap-2 md:grid-cols-12">
                  <span className="md:col-span-4 font-mono text-sm text-bronze">{p}</span>
                  <div className="md:col-span-8">
                    <p className="font-display text-2xl">{t}</p>
                    <p className="mt-1 text-sm text-ink-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="folio">Selected Experience</p>
            <ul className="mt-4 space-y-8">
              {[
                ["2026 —", "Legal Intern · Ochieng, Njoroge & Co."],
                ["2025", "Legal Aid Volunteer · Kituo Cha Sheria"],
                ["2025", "Research Assistant · Faculty of Law, UoN"],
                ["2024", "Judicial Attachment · Milimani Commercial Division"],
              ].map(([p, t]) => (
                <li key={t} className="grid grid-cols-1 gap-2 md:grid-cols-12">
                  <span className="md:col-span-4 font-mono text-sm text-bronze">{p}</span>
                  <p className="md:col-span-8 font-display text-xl">{t}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="folio">Skills</p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-3">
              {["Legal research", "Pleadings drafting", "Client interviews", "Comparative analysis", "Citation (OSCOLA)", "Case digesting", "Oral advocacy", "Bench memoranda", "Plain-language writing"].map((s) => (
                <span key={s} className="border-b border-border pb-1">{s}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}