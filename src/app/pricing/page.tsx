import PageShell, { PageHero } from "../components/page-shell";
import { FigNextLevelBanner } from "../sections/fig-banners";
import { Container, INK } from "../components/art";
import Reveal from "../components/reveal";

// NOTE: pricing tiers are placeholders — confirm real plans/prices with Julian.
const TIERS = [
  {
    name: "Starter",
    price: "On request",
    tagline: "For teams getting their supplier data in order.",
    features: [
      "SOW Creation from templates and frame contracts",
      "Central, secure document database",
      "Version traceability with restore",
      "Standard reporting dashboards",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "On request",
    tagline: "For organizations managing many vendors.",
    features: [
      "Everything in Starter",
      "Negotiation with real-time co-editing",
      "Measurement with KPI dashboards",
      "Change Requests with signature workflow (DocuSign)",
      "Supplier rating on weighted criteria",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "On request",
    tagline: "For complex, multinational supplier landscapes.",
    features: [
      "Everything in Professional",
      "Forecasting with best-case and worst-case scenarios",
      "AI predictions on expenses and KPI compliance",
      "Improvement plans across engagements and suppliers",
      "Role-based access for customer and supplier side",
    ],
    highlight: false,
  },
];

export const metadata = { title: "Pricing | managedsuppliers" };

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#279c85" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
  );
}

export default function PricingPage() {
  return (
    <PageShell>
      <Reveal>
        <PageHero
          title="Plans that grow with your supplier base"
          subtitle="Start with what you need today and scale as you bring more suppliers into managedsuppliers. Pricing is quoted per organization."
        />
      </Reveal>
      <section className="bg-background py-20">
        <Container>
          <Reveal stagger className="grid items-start gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <div key={t.name} className={`flex flex-col rounded-2xl border p-8 ${t.highlight ? "border-accent shadow-lg" : "border-[#e6ebee]"}`}>
                {t.highlight ? <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-background">Recommended</span> : null}
                <h3 className="text-2xl font-extrabold tracking-tight" style={{ color: INK }}>{t.name}</h3>
                <p className="mt-1 text-sm text-foreground">{t.tagline}</p>
                <p className="mt-5 text-3xl font-extrabold tracking-tight" style={{ color: INK }}>{t.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground"><span className="mt-0.5"><Check /></span>{f}</li>
                  ))}
                </ul>
                <a href="/contact" className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold no-underline ${t.highlight ? "bg-accent text-background hover:opacity-90" : "border border-accent text-accent hover:bg-[#eef7f4]"}`}>
                  Book a demo
                </a>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
      <FigNextLevelBanner />
    </PageShell>
  );
}
