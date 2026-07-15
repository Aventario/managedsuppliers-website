"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  /** fade-up (default) | fade | scale | slide-left | slide-right */
  variant?: "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: boolean;
  /** Seconds between staggered children. */
  staggerEach?: number;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "span" | "ul";
};

const FROM: Record<string, gsap.TweenVars> = {
  "fade-up": { autoAlpha: 0, y: 40 },
  fade: { autoAlpha: 0 },
  scale: { autoAlpha: 0, scale: 0.94 },
  "slide-left": { autoAlpha: 0, x: 48 },
  "slide-right": { autoAlpha: 0, x: -48 },
};

/**
 * Scroll-triggered reveal wrapper. Animates once when ~80% of the viewport
 * reaches the element. Respects prefers-reduced-motion (content simply shows).
 */
export default function Reveal({
  children,
  variant = "fade-up",
  stagger = false,
  staggerEach = 0.12,
  delay = 0,
  duration = 0.8,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger ? Array.from(el.children) : el;
      gsap.set(targets, FROM[variant]);
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ? staggerEach : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
