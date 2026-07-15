import { Container, ArrowLink, INK } from "../components/art";
import Reveal from "../components/reveal";
import { Drift } from "../components/motion";
import { ARROW_FX } from "../components/screenshot-frame";

/** Two feature splits mirroring the original managedsuppliers.com pairings:
 *  Illustration.svg with the real-time reporting split and Illustration-1.svg
 *  with the corporation/experience split (per live-home.html). */
export default function FigFeatures() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-background py-20">
      <Container className="flex flex-col gap-20">
        {/* Real-time reporting — illustration left, text right (original pairing) */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="slide-right" className="order-1">
            <Drift amount={20}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/original/Illustration.svg"
                alt="Illustration of a supplier reporting dashboard with charts"
                loading="lazy"
                className="mx-auto w-full max-w-[520px]"
              />
            </Drift>
          </Reveal>
          <Reveal variant="slide-left" className="order-2">
            <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.4rem]" style={{ color: INK }}>
              Real-time reporting,<br />at your fingertips
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              Performance data from all SOWs feeds dynamic dashboards with real-time facts and historical trends. Reporting is available at every level, from a single SOW to a supplier, a frame contract, or your entire vendor landscape, and a personalized dashboard flags underperforming KPIs and SOWs from the moment you log in.
            </p>
            <div className="mt-5"><ArrowLink href="/features" className={ARROW_FX}>Learn more</ArrowLink></div>
          </Reveal>
        </div>

        {/* Built for the modern corporation — text left, illustration right */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="slide-right" className="order-2 md:order-1">
            <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.4rem]" style={{ color: INK }}>
              Built for the modern corporation
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              managedsuppliers is a cloud SaaS solution ready for implementation into any large organization. Its structured design, intuitive operation, and comprehensive search function keep navigation quick, detail look-up fast, and onboarding of new users immediate, for your employees and your suppliers.
            </p>
            <div className="mt-5"><ArrowLink href="/features" className={ARROW_FX}>Learn more</ArrowLink></div>
          </Reveal>
          <Reveal variant="slide-left" className="order-1 md:order-2">
            <Drift amount={20}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/original/Illustration-1.svg"
                alt="Illustration of a team building on decades of supplier management experience"
                loading="lazy"
                className="mx-auto w-full max-w-[520px]"
              />
            </Drift>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
