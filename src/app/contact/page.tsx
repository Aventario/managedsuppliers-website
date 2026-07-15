import PageShell, { PageHero } from "../components/page-shell";
import ContactForm from "../components/contact-form";
import { Container, INK } from "../components/art";
import Reveal from "../components/reveal";

export const metadata = { title: "Contact | managedsuppliers" };

const NEXT_STEPS = [
  { step: "1", title: "You get a reply", body: "A person from our team reads your message and answers it. No automated funnel." },
  { step: "2", title: "A product walkthrough", body: "We show you managedsuppliers against your own supplier setup: your contracts, your engagements, your reporting needs." },
  { step: "3", title: "You decide", body: "After the walkthrough you know whether managedsuppliers fits. No obligation either way." },
];

export default function ContactPage() {
  return (
    <PageShell>
      <Reveal>
        <PageHero title="Talk to us about your suppliers" subtitle="Book a demo or send us a note. We reply personally to every message." />
      </Reveal>
      <section className="bg-background py-20">
        <Container className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal variant="slide-right">
            <ContactForm />
          </Reveal>
          <Reveal variant="slide-left">
            <div className="rounded-2xl bg-[#eef7f4] p-8">
              <h3 className="text-lg font-bold" style={{ color: INK }}>Managed Suppliers</h3>
              <div className="mt-4 space-y-4 text-sm text-foreground">
                <p><span className="font-semibold" style={{ color: INK }}>Address</span><br />Aventario Solutions GmbH<br />Friedstraße 11<br />Vienna, Austria</p>
                <p><span className="font-semibold" style={{ color: INK }}>Email</span><br />office@aventario.com</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-[#eef7f4] py-16">
        <Container>
          <Reveal>
            <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-extrabold tracking-tight md:text-[2.75rem]" style={{ color: INK }}>What happens after you send</h2>
          </Reveal>
          <Reveal stagger className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
            {NEXT_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl bg-background p-7">
                <p className="text-2xl font-black text-accent">{s.step}</p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight" style={{ color: INK }}>{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
