import { Container, Illustration, ArrowLink, INK } from "../components/art";
import Reveal from "../components/reveal";
import { Drift } from "../components/motion";
import { ARROW_FX } from "../components/screenshot-frame";

const SIDES = [
  {
    title: "Your side",
    tone: "#d7efe7",
    items: [
      "Create SOWs from predefined templates and frame contracts",
      "Assign people to roles and approve clauses, KPIs, and fee components",
      "Negotiate, compare suppliers, and accept or reject changes",
      "Monitor performance, budgets, and improvement plans",
    ],
  },
  {
    title: "Supplier side",
    tone: "#f7e7b8",
    items: [
      "Review the contract version and make suggestions",
      "Negotiate content directly in the shared draft",
      "Enter actual performance data such as KPIs",
      "Align on change requests and improvement measures",
    ],
  },
];

export default function FigRoles() {
  return (
    <section id="roles" className="scroll-mt-24 bg-[#eef7f4] py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="slide-right">
            <Drift amount={22}>
              <Illustration variant="scaling" className="h-72 w-full" />
            </Drift>
          </Reveal>
          <Reveal variant="slide-left">
            <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
              Both sides work in the same place
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              An individual role concept connects the knowledge bearers and contacts on your side and on the supplier side. Customizable role assignment means each person sees and does exactly what their responsibility requires, on the same draft, in real time.
            </p>
            <div className="mt-5"><ArrowLink href="/features" className={ARROW_FX}>Learn more</ArrowLink></div>
          </Reveal>
        </div>

        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {SIDES.map((side) => (
            <div key={side.title} className="rounded-2xl bg-background p-7">
              <span className="inline-block rounded-full px-4 py-1.5 text-[0.85rem] font-semibold" style={{ background: side.tone, color: INK }}>
                {side.title}
              </span>
              <ul className="mt-5 flex flex-col gap-3">
                {side.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-foreground">
                    {/* KPI chip motif as bullet */}
                    <span aria-hidden="true" className="mt-[7px] h-2.5 w-5 shrink-0 rounded-md" style={{ background: i % 2 === 0 ? "#7fd0b6" : "#8dccc0" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
