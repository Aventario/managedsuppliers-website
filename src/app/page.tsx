import Header from "./sections/header";
import FigHero from "./sections/fig-hero";
import FigChallenges from "./sections/fig-challenges";
import FigCollaboration from "./sections/fig-collaboration";
import FigSingleSource from "./sections/fig-single-source";
import FigIngredients from "./sections/fig-ingredients";
import FigFeatures from "./sections/fig-features";
import FigRoles from "./sections/fig-roles";
import FigHowPlatform from "./sections/fig-how-platform";
import { FigNextLevelBanner, FigAdvancedBanner } from "./sections/fig-banners";
import FigBlog from "./sections/fig-blog";
import FigVideo from "./sections/fig-video";
import FigProof from "./sections/fig-proof";
import FigFaq from "./sections/fig-faq";
import FigFooter from "./sections/fig-footer";

export const metadata = { alternates: { canonical: "/" } };

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Mirrored original flow: hero, challenges, solution, single source
            carousel, feature tabs, splits, banner, video, blog. */}
        <FigHero />
        <FigChallenges />
        <FigCollaboration />
        <FigSingleSource />
        <FigIngredients />
        <FigFeatures />
        <FigProof />
        <FigNextLevelBanner />
        <FigVideo />
        <FigBlog />
        {/* Our additional sections, after the mirrored originals. */}
        <FigRoles />
        <FigHowPlatform />
        <FigFaq />
        <FigAdvancedBanner />
      </main>
      <FigFooter />
    </>
  );
}
