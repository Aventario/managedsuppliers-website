"use client";

/** Page header. Nav: Features (features + benefits merged), Resources.
 *  Pricing and FAQ are intentionally not in the menu (FAQ lives on the
 *  landing page; pricing is parked). Language switcher is a dropdown. */
import { useEffect, useRef, useState } from "react";
import { Logo } from "../components/logo";

const NAV = [
  { label: "Features", href: "/features" },
  { label: "Resources", href: "/blog" },
];

const LANGUAGES = [
  { code: "en", label: "English", active: true },
  { code: "de", label: "Deutsch", active: false },
];

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-[0.85rem] font-semibold text-[#243b53] transition-colors hover:bg-[#eef7f4]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
        </svg>
        EN
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className={`absolute z-50 mt-2 w-40 overflow-hidden rounded-lg border border-clr-0 bg-background py-1 shadow-[0_12px_32px_rgba(36,59,83,0.14)] ${mobile ? "left-0" : "right-0"}`}
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.active}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={!l.active}
                title={l.active ? undefined : "Coming soon"}
                className={`flex w-full items-center justify-between px-4 py-2 text-left text-[0.9rem] font-semibold ${
                  l.active ? "text-[#243b53] hover:bg-[#eef7f4]" : "cursor-default text-[#243b53]/40"
                }`}
              >
                {l.label}
                {l.active && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[99999] w-full border-b border-clr-0 transition-shadow duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_6px_24px_rgba(36,59,83,0.10)]"
          : "bg-background shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      }`}
      id="main-header"
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[26px] md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[0.95rem] font-semibold text-[#243b53] no-underline transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
          <a href="/contact" className="text-[0.95rem] font-semibold text-[#243b53] no-underline transition-colors hover:text-accent">
            Log in
          </a>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-accent px-5 py-2.5 text-[0.95rem] font-semibold text-background no-underline transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-[#243b53] md:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-[16px] border-t border-clr-0 bg-background px-6 py-4 md:hidden" aria-label="Primary mobile">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-[#243b53] no-underline"
            >
              {n.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="text-base font-semibold text-[#243b53] no-underline">
            Log in
          </a>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block rounded-lg bg-accent px-5 py-2.5 text-center text-base font-semibold text-background no-underline"
          >
            Get in touch
          </a>
          <LanguageSwitcher mobile />
        </nav>
      )}
    </header>
  );
}
