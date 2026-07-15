/** Placeholder artwork + shared UI bits for the Figma-matched homepage.
 *  The Illustration panels are intentional stand-ins for the custom Figma
 *  illustrations (which live only in the Figma file). Swap `<Illustration/>`
 *  slots for the exported SVGs when available. */
import type { ReactNode } from "react";

export const INK = "#243b53";
export const MINT = "#eaf5f1";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-6 ${className}`}>{children}</div>;
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`inline-flex items-center gap-1.5 font-semibold text-accent no-underline hover:opacity-80 ${className}`}>
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

export function PrimaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-background no-underline transition-opacity hover:opacity-90 ${className}`}>
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

/** Real illustrations exported from the Managed Suppliers Figma
 *  (public/assets/figma/Illustration). `variant` maps to the chosen file. */
const ART_BASE = "/assets/figma/Illustration";
const ART: Record<string, string> = {
  network: "hero.png",
  hero: "hero.png",
  before: "man-on-a-computer.png",
  after: "business-model.png",
  reporting: "charts.png",
  corp: "networking.png",
  test: "test.png",
  research: "market-research.png",
  scaling: "scaling-plan.png",
  compare: "competitive-analysis.png",
  man: "man.png",
};

export function Illustration({ variant = "network", className = "" }: { variant?: string; className?: string }) {
  const file = ART[variant] ?? "hero.png";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`${ART_BASE}/${file}`} alt="" aria-hidden="true" className={`object-contain ${className}`} />
  );
}
