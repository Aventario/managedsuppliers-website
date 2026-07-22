"use client";

type WrapProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Illustration wrapper. Previously a GSAP scroll-scrubbed parallax, but the
 * GSAP tweens weren't advancing in this build, so it left elements stuck at a
 * partial transform (shifting images off-centre). Now a plain passthrough so
 * wrapped illustrations sit exactly where their layout classes place them.
 */
export function Drift({
  children,
  className,
}: WrapProps & { amount?: number }) {
  return <div className={className}>{children}</div>;
}

/**
 * Product-screenshot wrapper. Previously a GSAP tilt-in entrance; same freeze
 * issue left screenshots transformed/offset. Now a plain passthrough.
 */
export function TiltIn({ children, className }: WrapProps) {
  return <div className={className}>{children}</div>;
}
