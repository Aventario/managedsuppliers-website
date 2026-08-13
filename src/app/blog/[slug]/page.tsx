import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/page-shell";
import Reveal from "../../components/reveal";
import { Container, ArrowLink, INK } from "../../components/art";
import { FigNextLevelBanner } from "../../sections/fig-banners";
import { POSTS, getPost } from "../../lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | managedsuppliers", alternates: { canonical: "/blog" } };
  return {
    title: `${post.title} | managedsuppliers`,
    description: post.body[0],
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.body[0],
    image: post.img,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Julian Robida",
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-background py-16 md:py-20">
        <Container className="max-w-[760px]">
          <Reveal variant="fade-up">
            <ArrowLink href="/blog" className="text-sm">Back to blog</ArrowLink>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <span className="font-semibold uppercase tracking-wide text-accent">{post.date}</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#c3ccd4]" />
              <span className="text-foreground">
                By <span className="font-semibold" style={{ color: INK }}>Julian Robida</span>
              </span>
            </div>
            <h1 className="mt-4 [font-family:Lato,_Helvetica,_Arial,_sans-serif] text-4xl font-extrabold leading-tight tracking-tight md:text-5xl" style={{ color: INK }}>
              {post.title}
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.img} alt={post.title} className="mt-10 aspect-[16/8] w-full rounded-2xl object-cover" />
          </Reveal>
          <Reveal variant="fade" delay={0.15}>
            <div className="mt-10 space-y-7">
              {post.body.map((para, i) => (
                <p key={i} className="text-[1.06rem] leading-[1.8] text-foreground">{para}</p>
              ))}
            </div>
            <div className="mt-12 border-t border-[#eceff1] pt-6 text-sm text-foreground">
              Written by <span className="font-semibold" style={{ color: INK }}>Julian Robida</span>
            </div>
          </Reveal>
        </Container>
      </article>

      {related.length > 0 ? (
        <section className="bg-[#f6faf8] py-16">
          <Container>
            <Reveal variant="fade-up">
              <h2 className="[font-family:Lato,_Helvetica,_Arial,_sans-serif] text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: INK }}>
                More from the blog
              </h2>
            </Reveal>
            <Reveal variant="fade-up" stagger className="mt-10 grid gap-8 md:grid-cols-2">
              {related.map((p) => (
                <article key={p.slug} className="overflow-hidden rounded-2xl border border-[#eceff1] bg-background transition-shadow hover:shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">{p.date}</p>
                    <h3 className="mt-2 text-base font-bold leading-snug" style={{ color: INK }}>{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{p.excerpt}</p>
                    <div className="mt-4"><ArrowLink href={`/blog/${p.slug}`} className="text-sm">Read more</ArrowLink></div>
                  </div>
                </article>
              ))}
            </Reveal>
          </Container>
        </section>
      ) : null}

      <FigNextLevelBanner />
    </PageShell>
  );
}
