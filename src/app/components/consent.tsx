"use client";

/**
 * GDPR/DSGVO cookie consent + Google Consent Mode v2, mirroring the aventario.com
 * pattern. Consent defaults to DENIED (set in layout head, before anything runs).
 * No Google request is made until the visitor clicks Accept. Reject is as easy
 * as Accept (equal prominence), per GDPR. Choice is remembered; visitors can
 * reopen the banner any time via the footer "Cookie settings" link
 * (window.msOpenCookieSettings()).
 */

import { useCallback, useEffect, useState } from "react";
import { ANALYTICS, CONSENT_STORAGE_KEY } from "../lib/analytics-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    msOpenCookieSettings?: () => void;
    __msGtmLoaded?: boolean;
  }
}

function loadGoogleTags() {
  if (typeof window === "undefined" || window.__msGtmLoaded) return;
  const gtag = window.gtag;
  if (gtag) {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  }
  const { gtmId, ga4Id, adsId } = ANALYTICS;
  if (!gtmId && !ga4Id && !adsId) return; // nothing configured yet
  window.__msGtmLoaded = true;

  if (gtmId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + gtmId;
    document.head.appendChild(s);
  }
  // Optional direct GA4 / Ads (normally handled inside GTM; only if set)
  const directId = ga4Id || adsId;
  if (directId) {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + directId;
    document.head.appendChild(s);
    gtag?.("js", new Date());
    if (ga4Id) gtag?.("config", ga4Id);
    if (adsId) gtag?.("config", adsId);
  }
}

/** Footer link that reopens the consent banner so visitors can change/withdraw consent. */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.msOpenCookieSettings?.()}
      className={className}
    >
      Cookie settings
    </button>
  );
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  const decide = useCallback((granted: boolean) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, granted ? "granted" : "denied");
    } catch {}
    if (granted) loadGoogleTags();
    setOpen(false);
  }, []);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {}
    if (stored === "granted") loadGoogleTags();
    else if (stored !== "denied") setOpen(true);

    window.msOpenCookieSettings = () => setOpen(true);
    return () => {
      delete window.msOpenCookieSettings;
    };
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-[100000] mx-auto max-w-md rounded-xl bg-[#243b53] p-5 text-white shadow-[0_18px_50px_-20px_rgba(0,0,0,0.55)]"
    >
      <p className="text-sm leading-relaxed">
        We use analytics and advertising cookies to understand how our site
        performs. They load only after you accept. See our{" "}
        <a href="/privacy" className="font-semibold text-[#8dccc0] underline">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => decide(true)}
          className="rounded-full bg-[#8dccc0] px-5 py-2 text-sm font-bold text-[#243b53] transition-opacity hover:opacity-90"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
