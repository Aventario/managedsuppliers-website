import PageShell, { PageHero } from "../components/page-shell";
import { FigNextLevelBanner } from "../sections/fig-banners";
import { Container, Illustration, INK } from "../components/art";
import Reveal from "../components/reveal";
import { Drift } from "../components/motion";

const TEAM = [
  { name: "Markus Kern", role: "CEO", photo: "/assets/figma/team/markus-kern.jpg" },
  { name: "Markus Jaksch", role: "COO", photo: "/assets/figma/team/markus-jaksch.jpg" },
  { name: "Margit Györfi", role: "CPO", photo: "/assets/figma/team/margit-gyorfi.jpg" },
];

const VALUES = [
  { title: "Pragmatic", body: "We build tools that solve the supplier problems teams actually have, not the ones that look good in a demo." },
  { title: "Structured", body: "One source of truth, consistent processes, and clear governance across every vendor relationship." },
  { title: "Outcome-driven", body: "Success is measured in errors avoided, hours saved, and better decisions, not features shipped." },
];

export const metadata = { title: "About | managedsuppliers" };

export default function AboutPage() {
  return (
    <PageShell>
      <Reveal>
        <PageHero
          title="A new company, built on decades of experience"
          subtitle="managedsuppliers is a spin-off of Aventario, turning years of hands-on supplier and contract management into software any large organization can run."
        />
      </Reveal>

      {/* Company history */}
      <section className="bg-background py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="slide-right">
            <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1]" style={{ color: INK }}>Company history</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              Although we are a new company launching into the market, we are not new to the business. managedsuppliers is a spin-off of Aventario, a consulting company with over two decades of experience delivering solutions across industries and continents.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              We inherited Aventario&apos;s knowledge, network, and reputation, and we bring our own vision and values to the market as an independent product company.
            </p>
          </Reveal>
          <Reveal variant="slide-left">
            <Drift>
              <Illustration variant="research" className="h-72 w-full" />
            </Drift>
          </Reveal>
        </Container>
      </section>

      {/* Based on experience */}
      <section className="bg-[#eef7f4] py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="slide-right" className="order-1">
            <Drift>
              <Illustration variant="corp" className="h-72 w-full" />
            </Drift>
          </Reveal>
          <Reveal variant="slide-left" className="order-2">
            <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1]" style={{ color: INK }}>Based on experience</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              We draw on real consulting experience delivered across many industries and four continents, turning proven methods and hard-won lessons into a product teams can rely on every day.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
              That means managedsuppliers is not a theoretical framework. It is the way experienced practitioners actually manage suppliers, made repeatable.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Management team */}
      <section className="bg-background py-20">
        <Container>
          <Reveal>
            <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: INK }}>Management team</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-foreground">Three experienced leaders who share the same vision and values.</p>
          </Reveal>
          <Reveal stagger className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-2xl bg-[#eef7f4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.photo} alt={m.name} className="aspect-square w-full object-cover" />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold" style={{ color: INK }}>{m.name}</h3>
                  <p className="text-sm font-semibold text-accent">{m.role}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-[#eef7f4] py-20">
        <Container>
          <Reveal>
            <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-extrabold tracking-tight md:text-[2.75rem]" style={{ color: INK }}>What we value</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-background p-7">
                <h3 className="text-lg font-bold" style={{ color: INK }}>{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground">{v.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <FigNextLevelBanner />
    </PageShell>
  );
}
