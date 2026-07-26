import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Advocate Profile" },
      { name: "description", content: "Open a correspondence — for mentorship, research, internships, or professional inquiry." },
      { property: "og:title", content: "Connect" },
      { property: "og:description", content: "Open a correspondence." },
    ],
  }),
  component: Connect,
});

const REASONS = [
  "Professional inquiry",
  "Mentorship",
  "Research collaboration",
  "Internship opportunity",
  "Speaking invitation",
];

function Connect() {
  const [reason, setReason] = useState<string>(REASONS[0]);
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="Chapter IX · Correspondence"
      title="Connect"
      lede="A short, considered message will always receive a considered reply. Please tell me a little about the reason for writing."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="folio">Direct</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><a className="border-b border-charcoal pb-0.5 hover:text-bronze" href="mailto:hello@example.law">hello@example.law</a></li>
              <li className="text-ink-muted">Replies within two working days.</li>
            </ul>
          </div>
          <div>
            <p className="folio">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-bronze" href="#">LinkedIn ↗</a></li>
              <li><a className="hover:text-bronze" href="#">ORCID ↗</a></li>
              <li><a className="hover:text-bronze" href="#">SSRN ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="folio">Chambers</p>
            <p className="mt-3 text-sm leading-relaxed">Nairobi, Kenya · EAT (UTC+3)</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 space-y-8 border border-border p-8 md:p-10"
        >
          <div>
            <label htmlFor="name" className="folio">Your name</label>
            <input id="name" required className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-display text-2xl outline-none focus:border-bronze" />
          </div>
          <div>
            <label htmlFor="email" className="folio">Email</label>
            <input id="email" type="email" required className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-display text-2xl outline-none focus:border-bronze" />
          </div>
          <div>
            <p className="folio">Reason for writing</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {REASONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setReason(r)}
                  className={`rounded-full border px-4 py-1.5 text-xs tracking-wide transition-colors ${reason === r ? "border-charcoal bg-charcoal text-paper" : "border-border text-ink-muted hover:border-charcoal hover:text-charcoal"}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="msg" className="folio">Message</label>
            <textarea id="msg" required rows={5} className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-2 text-base leading-relaxed outline-none focus:border-bronze" />
          </div>
          <div className="flex items-center justify-between">
            <span className="folio">{sent ? "Received — thank you." : "Signed & sealed"}</span>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 border-b border-charcoal pb-1 text-sm tracking-wide"
            >
              Send correspondence
              <span className="text-bronze transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </form>
      </div>
    </PageShell>
  );
}