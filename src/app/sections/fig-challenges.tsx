import { Container, INK } from "../components/art";
import Reveal from "../components/reveal";

/** The Challenges — three cards mirroring the original managedsuppliers.com.
 *  The original pairs every card with Featured-Icon.svg (the IconMain-* icons
 *  belong to the feature tabs, per live-home.html). Copy is the original's,
 *  with minimal style-rule fixes. */
const ITEMS = [
  {
    title: "Lots Of Suppliers",
    body: "Although many companies are reducing the complexity of their procurement activities and concentrating on a few key strategic partners to drive economies of scale, global companies still have dozens to hundreds of suppliers in different locations worldwide.",
  },
  {
    title: "Increasing Engagements And Complexity",
    body: "Each engagement must be mutually agreed with the supplier by means of a contract or Statement of Work (SOW). Depending on requirements and service type, this results in numerous individual contracts with various attachments. The complexity of the documents varies by structure and granularity, often requiring unique tracking methods.",
  },
  {
    title: "Lack Of Overview And Transparency",
    body: "The individual engagements and therefore also the data are often spread across different regions, departments and, above all, people. The multitude of data, the use of different tools and the involvement of many parties make it very time-consuming to maintain an overview and transparency.",
  },
];

export default function FigChallenges() {
  return (
    <section id="challenges" className="scroll-mt-24 bg-background py-20">
      <Container>
        <Reveal>
          <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            The Challenges
          </h2>
        </Reveal>
        <Reveal stagger className="mt-14 grid gap-10 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/original/Featured-Icon.svg" alt="" aria-hidden="true" width={48} height={48} loading="lazy" className="h-12 w-12" />
              <h3 className="mt-5 text-lg font-bold" style={{ color: INK }}>{it.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">{it.body}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
