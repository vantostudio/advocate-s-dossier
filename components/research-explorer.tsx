const WORK = [
  {
    title: "Insurance Claims Analysis",
    context: "Kenindia Assurance Company",
    period: "2025",
    tags: ["Insurance law", "Quantum", "Liability"],
    summary:
      "Prepared legal opinions addressing the quantum and liability of claims, supported case preparation, and contributed to client consultations.",
  },
  {
    title: "Judicial Research & Memoranda",
    context: "Makadara & Kibera Law Courts",
    period: "2024",
    tags: ["Legal research", "Memoranda", "Court procedure"],
    summary:
      "Conducted legal research and drafted memoranda and correspondence while attending and summarising proceedings across more than 40 court days.",
  },
  {
    title: "Data Protection Study",
    context: "CIPIT · Strathmore University",
    period: "Certified",
    tags: ["Data protection", "Information law"],
    summary:
      "Completed CIPIT's certified Data Protection Course, extending legal research and analysis into privacy and information governance.",
  },
  {
    title: "The SDGs and the Law",
    context: "University of Cambridge",
    period: "Certified",
    tags: ["Sustainable development", "Law & policy"],
    summary:
      "Completed certified study examining the relationship between legal systems and the Sustainable Development Goals.",
  },
];

export function ResearchExplorer() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {WORK.map((item) => (
        <article key={item.title} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="folio">{item.context}</p>
            <p className="mt-2 font-mono text-sm text-bronze">{item.period}</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl leading-snug text-charcoal md:text-4xl">
              {item.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="folio border border-border px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
