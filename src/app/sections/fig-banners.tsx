import { Container } from "../components/art";
import Reveal from "../components/reveal";

export function FigNextLevelBanner() {
  return (
    <section className="bg-background py-10">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-accent px-8 py-14 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-2xl font-black text-background md:text-3xl">
            Take your supplier relationships<br className="hidden md:block" /> to the next level.
          </h2>
          <a href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 font-semibold text-accent no-underline transition hover:opacity-90 active:scale-[0.98]">
            Book a demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

export function FigAdvancedBanner() {
  return (
    <section className="bg-background py-14">
      <Container>
        <Reveal className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[#243b53] px-8 py-12 md:grid-cols-2 md:px-14">
          <div>
            <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-2xl font-black text-white md:text-3xl">
              How advanced is your supplier management?
            </h2>
            <p className="mt-2 text-white/70">Take a test and find out.</p>
            <a href="/contact" className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-background no-underline transition hover:opacity-90 active:scale-[0.98]">
              Take anonymous test
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/original/Test.svg" alt="" aria-hidden="true" loading="lazy" className="h-48 w-full object-contain" />
        </Reveal>
      </Container>
    </section>
  );
}
