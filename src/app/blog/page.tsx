import PageShell, { PageHero } from "../components/page-shell";
import Reveal from "../components/reveal";
import FigBlog from "../sections/fig-blog";
import { FigNextLevelBanner } from "../sections/fig-banners";

export const metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog | managedsuppliers",
  description:
    "Practical guidance on vendor collaboration, reporting, and getting more from every supplier relationship.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <Reveal variant="fade">
        <PageHero
          title="Insights on supplier management"
          subtitle="Practical guidance on vendor collaboration, reporting, and getting more from every supplier relationship."
        />
      </Reveal>
      <Reveal variant="fade-up">
        <FigBlog />
      </Reveal>
      <Reveal variant="fade-up">
        <FigNextLevelBanner />
      </Reveal>
    </PageShell>
  );
}
