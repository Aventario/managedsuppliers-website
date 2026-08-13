"use client";

import { useRef, useState } from "react";
import { INK } from "./art";

type State = "idle" | "submitting" | "success" | "error";

/** Campaign attribution, first touch, kept for the length of the session so the
 *  campaign that brought someone to the site is credited rather than the page
 *  they happened to be on when they submitted. Mirrors aventario.com. */
function attribution(): Record<string, string | null> {
  const STORE = "ms-attribution";
  try {
    const saved = sessionStorage.getItem(STORE);
    if (saved) return JSON.parse(saved);
  } catch { /* private mode */ }
  const p = new URLSearchParams(location.search);
  const a = {
    utm_source: p.get("utm_source"),
    utm_medium: p.get("utm_medium"),
    utm_campaign: p.get("utm_campaign"),
    utm_term: p.get("utm_term"),
    utm_content: p.get("utm_content"),
    gclid: p.get("gclid") || p.get("wbraid") || p.get("gbraid"),
    referrer: document.referrer ? document.referrer.slice(0, 500) : null,
    landing_page: location.pathname + (location.search || ""),
  };
  try { sessionStorage.setItem(STORE, JSON.stringify(a)); } catch { /* ignore */ }
  return a;
}

/** Same lead pipeline as aventario.com: direct insert into the shared
 *  Supabase `leads` table with the publishable key (RLS: public insert only).
 *  Rows are distinguished by source = managedsuppliers.com. */
const SB_URL = "https://zpuywttjadohtxvaloyq.supabase.co";
const SB_KEY = "sb_publishable_0R1ZCaygbhIA4xY3MhpN6w_qOFeRhoa";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  // Bots fill every field they find and submit instantly. Both are cheap to catch.
  // Between 23.07.2026 and 09.08.2026 this form produced seven junk leads, each of
  // which became a task on the Asana board.
  const openedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);

    // Honeypot: a real person never sees this field, so a value means a bot.
    // Show the success state anyway, otherwise the bot learns and adapts.
    if (String(fd.get("website") ?? "").trim() !== "" || Date.now() - openedAt.current < 3000) {
      setState("success");
      return;
    }

    const name = [fd.get("firstName"), fd.get("lastName")]
      .map((v) => String(v ?? "").trim())
      .filter(Boolean)
      .join(" ");
    const payload = {
      type: "demo",
      name,
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      consent: !!fd.get("consent"),
      source: "managedsuppliers.com",
      user_agent: navigator.userAgent,
      ...attribution(),
    };
    try {
      const res = await fetch(`${SB_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: SB_KEY,
          Authorization: `Bearer ${SB_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Something went wrong. Please try again or email us directly.");
      // Conversion event for GA4 and Google Ads, through the GTM container.
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "generate_lead",
        form_location: location.pathname,
        lead_type: "demo",
      });
      setState("success");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-[#eef7f4] p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <h3 className="text-xl font-bold" style={{ color: INK }}>Thank you. We will be in touch.</h3>
        <p className="text-sm text-foreground">Your message has reached us. We usually reply within one business day.</p>
      </div>
    );
  }

  const inputCls = "rounded-lg border border-[#d8e0e4] px-3 py-2.5 text-sm outline-none focus:border-accent";

  return (
    <form className="grid gap-5 sm:grid-cols-2" onSubmit={onSubmit}>
      {/* Honeypot. Off screen rather than display:none, which some bots skip. */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-px w-px overflow-hidden opacity-0"
        style={{ left: "-9999px" }}
      />
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold" style={{ color: INK }}>First name</span>
        <input name="firstName" required className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold" style={{ color: INK }}>Last name</span>
        <input name="lastName" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-sm font-semibold" style={{ color: INK }}>Work email</span>
        <input name="email" type="email" required className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-sm font-semibold" style={{ color: INK }}>Company</span>
        <input name="company" className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-sm font-semibold" style={{ color: INK }}>How can we help?</span>
        <textarea name="message" rows={5} className={inputCls} />
      </label>
      <label className="flex items-start gap-2.5 sm:col-span-2">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#279c85]" />
        <span className="text-sm text-foreground">
          I agree that my data is stored and processed to handle my request, as described in the{" "}
          <a href="/privacy" className="font-semibold text-accent underline">privacy policy</a>.
        </span>
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "submitting"} className="inline-flex items-center rounded-lg bg-accent px-6 py-3 font-semibold text-background disabled:opacity-60">
          {state === "submitting" ? "Sending…" : "Book a demo"}
        </button>
        {state === "error" ? <p className="mt-2 text-sm text-[#b23b30]">{error}</p> : null}
      </div>
    </form>
  );
}
