import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { ResearchExplorer } from "@/components/research-explorer";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Working papers, essays, and case notes — with abstracts, citations, and downloads.",
  openGraph: {
    title: "Research & Publications",
    description: "Working papers, essays, and case notes.",
  },
};

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Writing"
      title="Research & Publications"
      lede="An academic journal of my own — working papers, essays, and case notes. Each piece has an abstract, a citation, and a source."
    >
      <ResearchExplorer />
    </PageShell>
  );
}
