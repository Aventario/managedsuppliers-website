import PageShell, { PageHero } from "../components/page-shell";
import FigIngredients from "../sections/fig-ingredients";
import FigFeatures from "../sections/fig-features";
import FigSingleSource from "../sections/fig-single-source";
import { FigNextLevelBanner } from "../sections/fig-banners";
import Reveal from "../components/reveal";
import { Container, Illustration, INK } from "../components/art";
import { TiltIn } from "../components/motion";
import ScreenshotFrame from "../components/screenshot-frame";

type Benefit = {
  v: string;
  title: string;
  body: string;
  shot?: { src: string; alt: string };
};

/** Whitepaper-backed outcomes, shown below the feature walkthrough. */
const BENEFITS: Benefit[] = [
  {
    v: "reporting",
    title: "See everything, in real time",
    body: "One source of truth for every supplier, contract, and document, with dashboards at engagement, supplier, frame contract, and portfolio level.",
    shot: {
      src: "/assets/product/kpi-data-matrix.png",
      alt: "KPI Data Matrix screen showing supplier KPI status per month in green and red",
    },
  },
  { v: "after", title: "Cut errors and rework", body: "Standardized creation from templates and a single document store remove version conflicts, miscommunication, and duplicated effort." },
  { v: "before", title: "Keep every version traceable", body: "Every change to a Statement of Work is tracked and can be restored. Nothing gets overwritten, duplicated, or lost." },
  { v: "compare", title: "Make objective decisions", body: "Compare suppliers side by side on performance data and weighted ratings instead of guessing from documents in different formats." },
  {
    v: "scaling",
    title: "Forecast spend and performance",
    body: "Budget forecasts at engagement, department, or supplier level, with best-case and worst-case scenarios, deviation analysis, and AI predictions on expenses and KPI compliance.",
    shot: {
      src: "/assets/product/forecasting-dashboard.png",
      alt: "Financial forecasting dashboard showing actual and forecast fees per year",
    },
  },
  { v: "corp", title: "Scale without adding headcount", body: "Role-based access for your side and the supplier side, plus real-time co-editing, lets a small team govern many suppliers." },
];

export const metadata = {
  title: "Features and benefits | managedsuppliers",
  description:
    "The six core features of managedsuppliers, the platform-wide reporting, and the benefits they produce for supplier and contract management.",
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <Reveal>
        <PageHero
          title="Six core features cover the full engagement lifecycle"
          subtitle="Creation, Negotiation, Measurement, Improvement, Forecasting, and Change Requests carry each Statement of Work from first draft to signed change. Reporting runs across the whole platform."
        />
      </Reveal>
      <section className="bg-[#eef7f4] pb-20">
        <Container>
          <TiltIn>
            <ScreenshotFrame
              src="/assets/product/forecasting-dashboard.png"
              alt="Financial forecasting dashboard showing actual and forecast fees per year"
              className="w-full"
            />
          </TiltIn>
        </Container>
      </section>
      <FigIngredients />
      <FigSingleSource />
      <FigFeatures />

      {/* Benefits, merged from the former /benefits page */}
      <section id="benefits" className="scroll-mt-24 bg-background py-20">
        <Container>
          <Reveal>
            <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
              The benefits
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-foreground">
              Less admin, fewer errors, and a clear view of every vendor relationship.
            </p>
          </Reveal>
          <Reveal stagger className="mt-14 grid gap-12 md:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex flex-col gap-4">
                {b.shot ? (
                  <TiltIn>
                    <ScreenshotFrame src={b.shot.src} alt={b.shot.alt} className="w-full" />
                  </TiltIn>
                ) : (
                  <Illustration variant={b.v} className="h-44 w-full" />
                )}
                <h3 className="text-2xl font-extrabold tracking-tight" style={{ color: INK }}>{b.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-foreground">{b.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
      <FigNextLevelBanner />
    </PageShell>
  );
}
