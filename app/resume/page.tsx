import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Resume",
  description: "The professional résumé of Oloo Morgan Hope.",
  openGraph: { title: "Resume", description: "Education, experience, credentials, and skills." },
};

const EXPERIENCE = [
  {
    period: "May — Sep 2025",
    title: "Legal Intern · Kenindia Assurance Company",
    place: "Nairobi",
    points: [
      "Provided legal opinions on the quantum and liability of claims.",
      "Supported case preparation and client consultations.",
    ],
  },
  {
    period: "May — Aug 2024",
    title: "Judicial Intern · Makadara & Kibera Law Courts",
    place: "Nairobi",
    points: [
      "Attended and summarised proceedings across more than 40 court days.",
      "Conducted legal research and drafted memoranda and correspondence.",
    ],
  },
  {
    period: "May — Sep 2023",
    title: "Legal Intern · CLEAR Kenya",
    place: "Mombasa",
    points: [
      "Organised alternative dispute resolution for parties in conflict.",
      "Supported low-income clients to understand and achieve their legal rights.",
    ],
  },
  {
    period: "2022 — present",
    title: "Founder & CEO · KAMPUS KASH",
    place: "Entrepreneurial leadership",
    points: [
      "Manages microfinance operations, creative services, and business regulatory matters.",
    ],
  },
  {
    period: "4 years",
    title: "Head Designer · Independent Graphic Design Practice",
    place: "Remote · Pro level",
    points: [
      "Designed 1,000+ professional templates and visuals, including logos, letterheads, ID cards, business cards, brochures, and digital and print assets.",
      "Delivered work for companies including Take Me Out Adventures, educational institutions, and individual clients.",
      "Uses advanced Canva expertise to streamline branding, regulatory-document, and promotional workflows for entrepreneurial and corporate needs.",
    ],
  },
];

const SKILLS = [
  "Analytical legal research & writing",
  "Trial preparation & court procedure",
  "Computer literacy",
  "Legal analysis & legal reasoning",
  "Strategic thinking & creativity",
  "Teamwork & organisation",
  "Attention to detail",
  "Technical & organisational skills",
  "Mediation & dispute resolution",
  "Communication & consultation",
];

const REFERENCES = [
  {
    name: "Beatrice Achieng’",
    role: "CEO · Berimo Ltd.",
    phone: "+254 72356-4997",
    email: "bolooeng@gmail.com",
  },
  {
    name: "Dr. Wycliffe Nyachoti",
    role: "Dean · Chuka School of Law",
    phone: "+254 72159-1620",
    email: "wotiso@chuka.ac.ke",
  },
  {
    name: "Joram Mutsotso",
    role: "CLEAR Kenya / Kidscare Kenya",
    phone: "+254 72538-2255",
    email: "jmutsotso@gmail.com",
  },
];

export default function Resume() {
  return (
    <PageShell
      eyebrow="Professional record"
      title="Résumé"
      lede="Law graduate and Advocates Training Programme candidate with practical experience in insurance law, court procedure, alternative dispute resolution, legal research, drafting, and client advisory work."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <aside className="space-y-10 md:col-span-4">
          <section>
            <p className="folio">Contact</p>
            <address className="mt-3 space-y-1 text-sm not-italic">
              <p>00100, Nairobi, Kenya</p>
              <p>
                <a href="tel:+254113479930" className="hover:text-bronze">
                  011 347 9930
                </a>
                <span aria-hidden> · </span>
                <a href="tel:+254705710860" className="hover:text-bronze">
                  070 571 0860
                </a>
              </p>
              <p>
                <a href="mailto:morganhope315@gmail.com" className="hover:text-bronze">
                  morganhope315@gmail.com
                </a>
              </p>
            </address>
          </section>

          <section>
            <p className="folio">Download</p>
            <a
              href="/oloo-morgan-hope-resume.pdf"
              download
              className="mt-3 inline-flex min-h-11 items-center border-b border-charcoal text-sm hover:text-bronze"
            >
              Original résumé (PDF) ↓
            </a>
          </section>

          <section>
            <p className="folio">Languages</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between gap-4 border-b border-border pb-1">
                <span>English</span>
                <span className="text-right text-ink-muted">Native</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-1">
                <span>Swahili</span>
                <span className="text-right text-ink-muted">Advanced · all four skills</span>
              </li>
            </ul>
          </section>

          <section>
            <p className="folio">Activities & interests</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="border-b border-border pb-1">Professional photography</li>
              <li className="border-b border-border pb-1">Art & design</li>
              <li className="border-b border-border pb-1">Poetry & novel writing</li>
            </ul>
          </section>
        </aside>

        <div className="space-y-14 md:col-span-8">
          <section>
            <p className="folio">Professional objective</p>
            <p className="mt-4 text-lg leading-relaxed">
              Seeking an opportunity within a dynamic legal practice to apply strong research,
              analytical, and dispute-resolution skills; deliver value to clients and colleagues;
              and deepen advocacy, drafting, and courtroom practice under experienced counsel.
            </p>
          </section>

          <section>
            <p className="folio">Education</p>
            <ul className="mt-4 space-y-8">
              <li className="grid grid-cols-1 gap-2 md:grid-cols-12">
                <span className="font-mono text-sm text-bronze md:col-span-4">Ongoing</span>
                <div className="md:col-span-8">
                  <p className="font-display text-2xl">Advocates Training Programme</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    Kenya School of Law · Nairobi · Pupillage pending
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 gap-2 md:grid-cols-12">
                <span className="font-mono text-sm text-bronze md:col-span-4">
                  Completed Apr 2025
                </span>
                <div className="md:col-span-8">
                  <p className="font-display text-2xl">Bachelor of Laws (LL.B.)</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    Chuka University · Second Class Honours, Upper Division
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 gap-2 md:grid-cols-12">
                <span className="font-mono text-sm text-bronze md:col-span-4">2020</span>
                <div className="md:col-span-8">
                  <p className="font-display text-2xl">Kenya Certificate of Secondary Education</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    Shimo-la-Tewa School · Mean grade B+ · English A−
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <p className="folio">Experience</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {EXPERIENCE.map((entry) => (
                <li key={entry.title} className="grid grid-cols-1 gap-3 py-7 md:grid-cols-12">
                  <span className="font-mono text-sm text-bronze md:col-span-4">
                    {entry.period}
                  </span>
                  <div className="md:col-span-8">
                    <p className="font-display text-2xl leading-tight">{entry.title}</p>
                    <p className="mt-1 text-sm italic text-ink-muted">{entry.place}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                      {entry.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="folio">Qualifications & credentials</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li className="border-b border-border pb-3">
                Pursuing Certified Secretaries, Advanced Level, with KASNEB.
              </li>
              <li className="border-b border-border pb-3">
                Certified Professional Mediator (CPM), International Professional Mediation Innovate
                Services (IPMIS), July 2025.
              </li>
              <li className="border-b border-border pb-3">
                Awarded a certificate for organising the Green Law Africa Initiative at Chuka in
                collaboration with BBA Advocates.
              </li>
              <li className="border-b border-border pb-3">
                Three certified short courses are recorded, including CIPIT&apos;s Data Protection
                Course at Strathmore University and The SDGs and the Law at the University of
                Cambridge.
              </li>
            </ul>
          </section>

          <section>
            <p className="folio">Skills</p>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="border-b border-border pb-1">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <p className="folio">References</p>
            <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
              {REFERENCES.map((reference) => (
                <address key={reference.name} className="bg-paper p-5 text-sm not-italic">
                  <p className="font-display text-xl">{reference.name}</p>
                  <p className="mt-1 text-ink-muted">{reference.role}</p>
                  <p className="mt-4">{reference.phone}</p>
                  <a className="mt-1 block hover:text-bronze" href={`mailto:${reference.email}`}>
                    {reference.email}
                  </a>
                </address>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
