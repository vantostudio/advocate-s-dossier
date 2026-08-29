import type { Metadata } from "next";

import { ConnectForm } from "@/components/connect-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Contact Oloo Morgan Hope regarding pupillage, legal work, research, mediation, or professional collaboration.",
  openGraph: { title: "Connect", description: "Open a correspondence." },
};

export default function ConnectPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Connect"
      lede="For pupillage, legal work, research, mediation, design, or another professional inquiry, reach out directly or prepare an email below."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="folio">Direct</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a
                  className="border-b border-charcoal pb-0.5 hover:text-bronze"
                  href="mailto:morganhope315@gmail.com"
                >
                  morganhope315@gmail.com
                </a>
              </li>
              <li>
                <a className="hover:text-bronze" href="tel:+254113479930">
                  011 347 9930
                </a>
                <span aria-hidden> · </span>
                <a className="hover:text-bronze" href="tel:+254705710860">
                  070 571 0860
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="folio">Professional focus</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Pupillage · legal research · insurance law · mediation · client advisory · business
              and creative services
            </p>
          </div>
          <div>
            <p className="folio">Based in</p>
            <p className="mt-3 text-sm leading-relaxed">00100, Nairobi, Kenya · EAT (UTC+3)</p>
          </div>
        </div>

        <ConnectForm />
      </div>
    </PageShell>
  );
}
