import type { Metadata } from "next";
import PageShell, { PageHero } from "../components/page-shell";
import { FaqPageContent } from "../sections/fig-faq";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ | managedsuppliers",
  description:
    "Answers to common questions about managedsuppliers: the six core features, reporting, security, versioning, supplier collaboration, DocuSign, forecasting, and getting started.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <Reveal>
        <PageHero
          title="Frequently asked questions"
          subtitle="What managedsuppliers does, how it stores your data, and how you and your suppliers work in it."
        />
      </Reveal>
      <FaqPageContent />
    </PageShell>
  );
}
