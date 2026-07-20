"use client";

import { useEffect, useRef } from "react";

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

const HIDDEN: Record<string, string> = {
  "fade-up": "translateY(40px)",
  fade: "none",
  scale: "scale(0.94)",
  "slide-left": "translateX(48px)",
  "slide-right": "translateX(-48px)",
};

/**
 * Scroll-triggered reveal wrapper. Uses IntersectionObserver (not GSAP) so it
 * can never leave content stuck hidden: content is visible by default, the
 * hidden -> visible transition only runs client-side, a failsafe timer reveals
 * regardless, and prefers-reduced-motion skips the motion entirely.
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
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return; // content stays visible, no motion
    }

    const targets = (stagger ? Array.from(el.children) : [el]) as HTMLElement[];

    const show = () =>
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });

    // Apply the hidden start state + transition.
    targets.forEach((t, i) => {
      const d = delay + (stagger ? i * staggerEach : 0);
      t.style.willChange = "opacity, transform";
      t.style.transition = `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${d}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${d}s`;
      t.style.opacity = "0";
      t.style.transform = HIDDEN[variant];
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Failsafe: if the observer never fires for any reason, reveal anyway.
    const failsafe = window.setTimeout(show, 1400);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
