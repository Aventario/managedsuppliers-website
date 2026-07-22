import { Container, ArrowLink, INK } from "../components/art";
import Reveal from "../components/reveal";
import { Drift } from "../components/motion";
import { ARROW_FX } from "../components/screenshot-frame";

/** "The solution to all your supplier management challenges" — mirrors the
 *  original managedsuppliers.com section: heading, the wide Group-1000004173
 *  stakeholder illustration, paragraph, View benefits link. Original copy with
 *  "seamless" dropped per the style rules. */
export default function FigCollaboration() {
  return (
    <section className="bg-background py-10">
      <Container>
        <Reveal className="rounded-3xl bg-[#f5f6f7] px-6 py-14 md:px-16">
          <h2 className="mx-auto max-w-3xl text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[1.7rem] font-black leading-tight tracking-tight md:text-[2.2rem]" style={{ color: INK }}>
            The solution to all your supplier management challenges
          </h2>

          <Drift amount={14} className="mt-12 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/original/Group-1000004173.svg"
              alt="Diagram connecting suppliers and internal stakeholders through the managedsuppliers platform"
              width={869}
              height={186}
              loading="lazy"
              className="mx-auto w-full max-w-[900px]"
            />
          </Drift>

          <p className="mx-auto mt-12 max-w-3xl text-center text-[0.95rem] leading-relaxed text-foreground">
            managedsuppliers is a comprehensive solution that enables digital collaboration with your suppliers throughout the relationship lifecycle. It connects all relevant stakeholders (internal and external) and facilitates contract creation, negotiation, execution, management, and evaluation.
          </p>
          <div className="mt-6 flex justify-center">
            <ArrowLink href="/features#benefits" className={ARROW_FX}>View benefits</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
