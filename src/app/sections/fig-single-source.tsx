"use client";

import { useCallback, useState } from "react";
import { Container, PrimaryButton, INK } from "../components/art";
import Reveal from "../components/reveal";
import { BTN_FX } from "../components/screenshot-frame";

/** "Single Source of Truth" — three before/after pairs as a carousel, mirroring
 *  the original managedsuppliers.com (Flickity there; own lightweight slider
 *  here: transform-based track, prev/next arrows, dots, keyboard accessible).
 *  Copy is the original's with minimal style-rule fixes (no dashes in labels,
 *  "streamlines" -> "reduces the complexity of", "empower" -> "lets you"). */

type Slide = {
  beforeTitle: string;
  beforeImg: string;
  beforeAlt: string;
  beforeCopy: string;
  afterTitle: string;
  afterImg: string;
  afterAlt: string;
  afterCopy: string;
  cta: string;
};

const SLIDES: Slide[] = [
  {
    beforeTitle: "Lost In Documentation",
    beforeImg: "/assets/original/Group-1000004174.svg",
    beforeAlt: "Illustration of a person surrounded by scattered documents",
    beforeCopy:
      "Using multiple sources for your supplier-related documents and information complicates your processes for creating, updating and managing them. It may lead to errors, inconsistencies, data loss and miscommunication due to varying document versions and formats.",
    afterTitle: "Peace Of Mind",
    afterImg: "/assets/original/Group-633072.svg",
    afterAlt: "Illustration of organized documents in one central place",
    afterCopy:
      "Store and access all your supplier-related documents and information in one central place. This simplifies the creation, updating and management of documents. You avoid issues and errors, as every click and every change in the system is logged in a traceable manner and carried out in a central, standardized format.",
    cta: "Learn more about Measurement",
  },
  {
    beforeTitle: "Decision Paralysis",
    beforeImg: "/assets/original/Analytics.svg",
    beforeAlt: "Illustration of a person comparing inconsistent analytics and offers",
    beforeCopy:
      "Comparing offers from various suppliers can be complex due to differences in style, structure, and wording. The challenge is to understand the content, manage any changes, and consider important agreements also for other proposals. Additionally, all information must be transparent and easily accessible.",
    afterTitle: "Objective, Data-Based Decisions",
    afterImg: "/assets/original/Remote-work.svg",
    afterAlt: "Illustration of a person working with structured, comparable data",
    afterCopy:
      "Our solution reduces the complexity of supplier offers by providing structured, comparable data. With a centralized repository, you can easily track changes, compare versions, and make informed decisions. The clarity and consistency of information lets you navigate the supplier landscape with confidence.",
    cta: "Learn more about Negotiation",
  },
  {
    beforeTitle: "Awaiting Escalations",
    beforeImg: "/assets/original/DecisionParalysis.svg",
    beforeAlt: "Illustration of a manager surprised by a late escalation",
    beforeCopy:
      "As supplier engagements are mostly scattered across different regions, departments and systems, it can be difficult to maintain an overview of all the durations, agreed terms & conditions and delivery quality. The result is often that management realizes too late that the quality and performance may deviate from the agreement or that follow-up SOWs should be agreed in good time. This can lead to expensive additional costs or significant delays.",
    afterTitle: "Notified With Time To Spare",
    afterImg: "/assets/original/DataBasedDecisions.svg",
    afterAlt: "Illustration of a dashboard flagging supplier performance early",
    afterCopy:
      "With the assistance of managedsuppliers measurement and forecasting functions, management is informed at all times about suppliers with deviating performance, so that there is sufficient time to take appropriate countermeasures. In addition, all contracts and agreements, including their terms, are continuously monitored and extensions can be made in good time.",
    cta: "Learn more about Reporting",
  },
];

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-[#243b53] shadow-md ring-1 ring-[#e2ebe7] transition hover:bg-[#eef7f4] active:scale-[0.96]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "prev" ? <path d="M19 12H5M11 18l-6-6 6-6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

export default function FigSingleSource() {
  const [active, setActive] = useState(0);
  const count = SLIDES.length;

  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    }
  };

  return (
    <section id="single-source" className="scroll-mt-24 bg-background py-20">
      <Container>
        <Reveal>
          <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            Single Source of Truth
          </h2>
          <p className="mt-2 text-center text-lg font-semibold text-accent">for everything vendor related</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Before and after using managedsuppliers"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="relative mt-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-4"
          >
            <div className="overflow-hidden">
              {/* transform-based track, 0.4s ease; no transition under reduced motion */}
              <div
                className="flex transition-transform duration-[400ms] ease-[ease] motion-reduce:transition-none"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {SLIDES.map((s, i) => {
                  const current = i === active;
                  return (
                    <div
                      key={s.beforeTitle}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${i + 1} of ${count}`}
                      aria-hidden={!current}
                      className={`w-full shrink-0 px-1 ${current ? "" : "pointer-events-none"}`}
                    >
                      <div className="grid gap-8 md:grid-cols-2">
                        {/* Before */}
                        <div className="flex flex-col rounded-2xl p-8">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.beforeImg} alt={s.beforeAlt} loading="eager" className="h-56 w-full object-contain" />
                          <h3 className="mt-6 text-xl font-bold" style={{ color: INK }}>
                            Before: {s.beforeTitle}
                          </h3>
                          <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">{s.beforeCopy}</p>
                        </div>
                        {/* After */}
                        <div className="flex flex-col rounded-2xl bg-[#e7f4ef] p-8">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.afterImg} alt={s.afterAlt} loading="eager" className="h-56 w-full object-contain" />
                          <h3 className="mt-6 text-xl font-bold" style={{ color: INK }}>
                            After: {s.afterTitle}
                          </h3>
                          <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">{s.afterCopy}</p>
                          <div className="mt-5">
                            <PrimaryButton href="/features" className={`${BTN_FX} ${current ? "" : "invisible"}`}>
                              {s.cta}
                            </PrimaryButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <ArrowButton dir="prev" onClick={() => go(active - 1)} />
              <div className="flex items-center gap-2.5" role="group" aria-label="Choose slide">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.beforeTitle}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}: ${s.beforeTitle}`}
                    aria-current={i === active}
                    className={`h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                      i === active ? "w-7 bg-accent" : "w-2.5 bg-[#cfe2db] hover:bg-[#a9cfc3]"
                    }`}
                  />
                ))}
              </div>
              <ArrowButton dir="next" onClick={() => go(active + 1)} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
