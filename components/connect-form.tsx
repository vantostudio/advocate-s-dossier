"use client";

import { useState } from "react";

const REASONS = [
  "Pupillage opportunity",
  "Professional inquiry",
  "Research collaboration",
  "Mediation & ADR",
  "Design services",
];

export function ConnectForm() {
  const [reason, setReason] = useState<string>(REASONS[0]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const message = String(data.get("message") ?? "");
        const subject = encodeURIComponent(`${reason} — ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
        window.location.href = `mailto:morganhope315@gmail.com?subject=${subject}&body=${body}`;
      }}
      className="md:col-span-7 space-y-8 border border-border p-8 md:p-10"
    >
      <div>
        <label htmlFor="name" className="folio">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-display text-2xl outline-none focus:border-bronze"
        />
      </div>
      <div>
        <label htmlFor="email" className="folio">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 font-display text-2xl outline-none focus:border-bronze"
        />
      </div>
      <div>
        <p className="folio">Reason for writing</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {REASONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setReason(r)}
              className={`min-h-11 rounded-full border px-4 py-2 text-xs tracking-wide transition-colors ${reason === r ? "border-charcoal bg-charcoal text-paper" : "border-border text-ink-muted hover:border-charcoal hover:text-charcoal"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="msg" className="folio">
          Message
        </label>
        <textarea
          id="msg"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-2 text-base leading-relaxed outline-none focus:border-bronze"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="folio">Opens your email application</span>
        <button
          type="submit"
          className="group inline-flex min-h-11 items-center gap-3 border-b border-charcoal text-sm tracking-wide"
        >
          Send correspondence
          <span className="text-bronze transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </form>
  );
}
