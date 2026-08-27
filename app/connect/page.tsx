import type { Metadata } from "next";

import { ConnectForm } from "@/components/connect-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Open a correspondence — for mentorship, research, internships, or professional inquiry.",
  openGraph: { title: "Connect", description: "Open a correspondence." },
};

export default function ConnectPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Connect"
      lede="A short, considered message will always receive a considered reply. Please tell me a little about the reason for writing."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="folio">Direct</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a
                  className="border-b border-charcoal pb-0.5 hover:text-bronze"
                  href="mailto:hello@example.law"
                >
                  hello@example.law
                </a>
              </li>
              <li className="text-ink-muted">Replies within two working days.</li>
            </ul>
          </div>
          <div>
            <p className="folio">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-bronze" href="#">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a className="hover:text-bronze" href="#">
                  ORCID ↗
                </a>
              </li>
              <li>
                <a className="hover:text-bronze" href="#">
                  SSRN ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="folio">Based in</p>
            <p className="mt-3 text-sm leading-relaxed">Nairobi, Kenya · EAT (UTC+3)</p>
          </div>
        </div>

        <ConnectForm />
      </div>
    </PageShell>
  );
}
