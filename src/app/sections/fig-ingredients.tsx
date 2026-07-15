"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Container, ArrowLink, INK } from "../components/art";
import ScreenshotFrame, { ARROW_FX } from "../components/screenshot-frame";
import Reveal from "../components/reveal";

gsap.registerPlugin(useGSAP);

type Tab = { key: string; label: string; problem: string; solution: string };

const TABS: Tab[] = [
  {
    key: "creation",
    label: "Creation",
    problem: "Contract creation starts email chains and poorly documented coordination meetings. Drafting a Statement of Work from scratch for every engagement is slow, and important sections are easy to overlook.",
    solution: "The contract manager generates a new SOW from predefined templates and assigns people to their roles. Everyone works on the same draft in real time, reusing agreements, clauses, text blocks, KPIs, and fee components from the frame contract.",
  },
  {
    key: "negotiation",
    label: "Negotiation",
    problem: "Keeping track of the documents and versions being worked on by suppliers and internal teams is difficult. When SOW versions diverge, details and suggestions from one party get overlooked.",
    solution: "Each supplier receives a version of the contract and every change stays traceable, accepted only by authorized personnel. A supplier rating based on requested changes, time to agree, and stakeholder satisfaction supports an objective vendor comparison.",
  },
  {
    key: "measurement",
    label: "Measurement",
    problem: "Performance data for each contract must be collected, checked, and monitored with a different mix of methods and tools per supplier, which costs time and money.",
    solution: "The performance criteria agreed in the SOW and frame contract appear automatically in the measurement section. KPIs and expenses are captured in a standardized way and compared with budget and agreed criteria in real time.",
  },
  {
    key: "improvement",
    label: "Improvement",
    problem: "Assessing issues, tracking agreed measures, and evaluating their effect takes effort, especially across multiple engagements with the same supplier.",
    solution: "A centralized improvement hub lets every authorized person initiate improvement plans, assigned by responsibility and task. Measures can be viewed per engagement or consolidated at supplier level, and completed initiatives move to the archive.",
  },
  {
    key: "forecasting",
    label: "Forecasting",
    problem: "Budget information is dispersed across contracts, tools, and departments, so building and updating budget reports is time-consuming and reactive.",
    solution: "Forecasts are generated from historical values, actuals, and contract volumes at engagement, department, or global supplier level. Best-case and worst-case scenarios and deviation analysis support pricing decisions and early countermeasures.",
  },
  {
    key: "change-requests",
    label: "Change Requests",
    problem: "Changes to agreed contracts trigger discussions, new documents, and version floods that need to be tracked and processed. Without a central collaboration tool, this is where errors start.",
    solution: "The SOW is already in the software as the baseline. Both parties align on proposed changes, you accept, reject, or counter, and after signature the SOW, KPIs, expenses, and timeline update automatically across dashboards and reports.",
  },
];

/** Per-tab visuals from the original managedsuppliers.com (live-home.html):
 *  Creation003 / Negotiation / Measurement / Improvement-001 / Forecasting004
 *  product illustrations, and Reporting-2.png for the sixth slot (the
 *  original's sixth tab is Reporting; ours is Change Requests per the
 *  whitepaper, so it reuses the original's sixth-slot asset). */
const PANELS: Record<string, { src: string; alt: string; screenshot?: boolean }> = {
  creation: { src: "/assets/original/Creation003.svg", alt: "Contract creation screen with SOW template and assigned roles" },
  negotiation: { src: "/assets/original/Negotiation.svg", alt: "Negotiation screen with traceable contract versions per supplier" },
  measurement: { src: "/assets/original/Measurement.svg", alt: "Measurement screen with KPIs compared against agreed criteria" },
  improvement: { src: "/assets/original/Improvement-001.svg", alt: "Improvement hub with initiatives assigned by responsibility and task" },
  forecasting: { src: "/assets/original/Forecasting004.svg", alt: "Forecasting screen with budget scenarios per engagement and supplier" },
  "change-requests": { src: "/assets/original/Reporting-2.png", alt: "Reporting dashboard reflecting updated SOWs, KPIs and expenses", screenshot: true },
};

/** Tab icons from the original: IconMain-* per live-home.html pairing. */
const TAB_ICONS: Record<string, string> = {
  creation: "/assets/original/IconMain-4.svg",
  negotiation: "/assets/original/IconMain-1-1.svg",
  measurement: "/assets/original/IconMain-2-1.svg",
  improvement: "/assets/original/IconMain-3.svg",
  forecasting: "/assets/original/IconMain-2.svg",
  "change-requests": "/assets/original/IconMain-1.svg",
};

export default function FigIngredients() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const panel = PANELS[tab.key];
  const panelRef = useRef<HTMLDivElement>(null);

  // Quick fade/slide on tab swap. Skipped under prefers-reduced-motion.
  useGSAP(
    () => {
      const el = panelRef.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(el, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" });
    },
    { dependencies: [active] }
  );

  return (
    <section id="features" className="scroll-mt-24 bg-[#eef7f4] py-20">
      <Container>
        <Reveal>
          <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            The 6 core features
          </h2>
          <p className="mt-2 text-center text-lg font-semibold text-foreground">
            covering the entire engagement lifecycle, with <span className="text-accent underline">reporting</span> across all of them
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[0.9rem] font-semibold transition-colors ${
                  i === active ? "bg-accent text-background" : "bg-background text-[#243b53] hover:bg-[#dceee8]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TAB_ICONS[t.key]} alt="" aria-hidden="true" width={20} height={20} className={`h-5 w-5 ${i === active ? "brightness-0 invert" : ""}`} />
                {t.label}
              </button>
            ))}
          </div>

          {/* Panel: product view + problem/solution, swapped together */}
          <div ref={panelRef}>
            <div className="mt-10">
              {panel.screenshot ? (
                <ScreenshotFrame src={panel.src} alt={panel.alt} className="mx-auto max-w-[900px]" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={panel.src} alt={panel.alt} loading="lazy" className="mx-auto w-full max-w-[900px]" />
              )}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-background p-6">
                <h3 className="flex items-center gap-2 text-base font-bold" style={{ color: INK }}>
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ef6a5f]" /> Problem
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">{tab.problem}</p>
              </div>
              <div className="rounded-2xl bg-background p-6">
                <h3 className="flex items-center gap-2 text-base font-bold" style={{ color: INK }}>
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" /> Solution
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">{tab.solution}</p>
                <div className="mt-4"><ArrowLink href="#" className={ARROW_FX}>Learn more about {tab.label}</ArrowLink></div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
