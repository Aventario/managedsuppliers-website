"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type WrapProps = {
  children: React.ReactNode;
  className?: string;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Gentle scroll-scrubbed parallax for section illustrations.
 * The wrapped element drifts from +amount to -amount px on y while the
 * element passes through the viewport. No-ops under prefers-reduced-motion
 * (content stays fully visible in place).
 */
export function Drift({ children, amount = 24, className }: WrapProps & { amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        el,
        { y: amount },
        {
          y: -amount,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Perspective tilt-in entrance for product screenshots: rises 40px with a
 * slight rotateX and settles flat. Plays once on scroll into view.
 * No-ops under prefers-reduced-motion.
 */
export function TiltIn({ children, className }: WrapProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return;

      gsap.from(el, {
        autoAlpha: 0,
        y: 40,
        rotateX: 6,
        transformPerspective: 900,
        transformOrigin: "center bottom",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
