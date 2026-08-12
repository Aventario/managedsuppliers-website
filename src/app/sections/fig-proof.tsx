"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container, INK } from "../components/art";
import Reveal from "../components/reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Credibility section: Aventario's standing proof points behind the
 *  product. Numbers count up on scroll (skipped under reduced motion). */
const STATS: Array<{ prefix?: string; value: number; suffix: string; label: string; display?: string }> = [
  { value: 25, suffix: "+", label: "Years of industry experience" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { prefix: "€", value: 3, suffix: "B+", label: "Negotiated contract volume" },
  { display: "10-40", value: 40, suffix: "%", label: "Sustainable cost savings" },
];

export default function FigProof() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const display = el.dataset.display;
        const obj = { n: 0 };
        gsap.to(obj, {
          n: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            const n = Math.round(obj.n);
            el.textContent = display ? `10-${Math.max(10, n)}` : String(n);
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-background py-20">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <Reveal variant="slide-right">
          <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            Built by the people who negotiate these contracts
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
            Companies have long outsourced activities and bought in expertise. Most underestimated what it takes to manage those suppliers in return. managedsuppliers is built on Aventario&apos;s consulting practice, turned into software.
          </p>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-foreground/80">
            managedsuppliers is the product arm of Aventario, a Vienna-based consultancy for cost and value optimization in IT and supply chain.
          </p>
        </Reveal>
        <Reveal stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-clr-0 bg-background p-7 shadow-[0_10px_30px_-18px_rgba(36,59,83,0.25)]">
              <p className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.4rem] font-black leading-none tracking-tight" style={{ color: INK }}>
                {s.prefix && <span>{s.prefix}</span>}
                <span data-count={s.value} data-display={s.display ? "range" : undefined}>
                  {s.display ?? s.value}
                </span>
                <span>{s.suffix}</span>
              </p>
              <p className="mt-3 text-[0.95rem] font-semibold text-foreground">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
