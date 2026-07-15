import { Container, ArrowLink, INK } from "../components/art";
import Reveal from "../components/reveal";
import { ARROW_FX } from "../components/screenshot-frame";
import { POSTS } from "../lib/posts";

/** Original blog thumbnails from managedsuppliers.com, mapped by slug so
 *  lib/posts.ts stays untouched (blog detail pages keep their own images). */
const THUMBS: Record<string, string> = {
  "how-transparency-can-make-or-break-supplier-relationships": "/assets/original/Blog-transparency-400x250.jpg",
  "feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers": "/assets/original/Reporting-400x250.jpg",
  "feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers": "/assets/original/Forecasting-400x250.jpg",
};

export default function FigBlog() {
  return (
    <section id="resources" className="scroll-mt-24 bg-background py-20">
      <Container>
        <Reveal>
          <h2 className="text-center [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-[2.05rem] font-black leading-tight tracking-tight md:text-[2.6rem]" style={{ color: INK }}>
            Blog
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-8 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-2xl border border-[#eceff1] bg-background transition-shadow hover:shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={THUMBS[p.slug] ?? p.img} alt={p.title} loading="lazy" className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{p.date}</p>
                <h3 className="mt-2 text-base font-bold leading-snug" style={{ color: INK }}>{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{p.excerpt}</p>
                <div className="mt-4"><ArrowLink href={`/blog/${p.slug}`} className={`text-sm ${ARROW_FX}`}>Read more</ArrowLink></div>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
