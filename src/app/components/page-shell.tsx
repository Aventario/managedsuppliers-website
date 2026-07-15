import type { ReactNode } from "react";
import Header from "../sections/header";
import FigFooter from "../sections/fig-footer";
import { Container, INK } from "./art";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FigFooter />
    </>
  );
}

/** Simple page hero used across sub-pages. */
export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#eef7f4]">
      <Container className="py-16 text-center md:py-20">
        {eyebrow ? <p className="text-sm font-bold uppercase tracking-wide text-accent">{eyebrow}</p> : null}
        <h1 className="mx-auto mt-2 max-w-3xl [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-black leading-tight md:text-5xl" style={{ color: INK }}>
          {title}
        </h1>
        {subtitle ? <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground">{subtitle}</p> : null}
      </Container>
    </section>
  );
}
