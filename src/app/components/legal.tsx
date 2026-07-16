import type { ReactNode } from "react";
import PageShell, { PageHero } from "./page-shell";
import { Container, INK } from "./art";

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <PageShell>
      <PageHero title={title} subtitle={updated ? `Last updated: ${updated}` : undefined} />
      <section className="bg-background py-16">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-[0.98rem] leading-relaxed text-foreground [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_a]:text-accent">
            {children}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold" style={{ color: INK }}>{children}</h2>;
}
