import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { ResearchExplorer } from "@/components/research-explorer";

export const metadata: Metadata = {
  title: "Research & Writing",
  description: "Legal research, opinions, memoranda, correspondence, and focused legal study.",
  openGraph: {
    title: "Research & Writing",
    description: "Evidence of legal research, analysis, and professional writing.",
  },
};

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Writing"
      title="Research & Writing"
      lede="A source-backed record of legal analysis and professional writing developed through court, insurance, and client-facing work."
    >
      <ResearchExplorer />
    </PageShell>
  );
}
