# managedsuppliers design pass, 2026-07-13

Subject: cloud platform for supplier and contract lifecycle management (SOWs, KPIs, forecasting).
Audience: procurement, IT and vendor managers in enterprises. Single job of the site: book a demo.
Julian's direction (verbatim intent): "streamlined website, with all sorts of animations and cool sections, use inspirations from award winning websites". Management dislikes small pre-headlines (eyebrows are banned).

## Tokens (derive everything from these)

Color (matches product UI and existing site):
- ink `#243b53` (headings, primary text)
- teal `#2f9e8f` (accent, CTAs — the existing site accent stays authoritative if it differs slightly)
- mint `#8dccc0` (secondary surfaces, chips)
- mist `#eef7f4` (tinted section backgrounds)
- signal yellow `#f2c14e` (ONE sparing highlight per view, from the product charts)
- kpi green `#7fd0b6` / kpi red `#e07a72` (ONLY inside KPI-motif graphics, never for text/UI)

Type: keep the existing font stack (no new fonts, no CDN fonts). H1/H2: weight 800, tracking-tight, larger than current. Body stays. No eyebrows/kickers.

## Signature element: the KPI status grid

The product's most characteristic artifact is the red/green KPI matrix (see /assets/product/kpi-data-matrix.png). Use it as the site's one memorable motif:
- Hero: a compact animated strip of KPI chips (small rounded rectangles in kpi green/red/yellow) that pop in one-by-one after the headline settles. Pure CSS/JSX elements, GSAP-staggered, back.out ease. Ambient afterwards: every few seconds one random chip crossfades color (disable under reduced motion).
- Elsewhere: echo the chip shape (rounded-md small blocks) as list bullets / status accents in the Platform and Roles sections. Quiet, not loud.

## Real product screenshots (all in /assets/product/)

- forecasting-dashboard.png (832x541, polished Financial Forecasting dashboard) → HERO visual (replaces the illustration as the primary hero image; frame it in a minimal browser chrome: rounded-xl card, top bar with three dots, soft shadow, thin mint ring) AND the Forecasting tab of the 6-features section.
- kpi-data-matrix.png (830x485, KPI Data Matrix screen) → Measurement tab of the 6-features section AND/OR the Real-time reporting split in fig-features (pick the better fit per layout).
- kpi-table.png / kpi-table-wide.png / kpi-table-alt.png (styled KPI tables on mint blob) → Improvement tab, and one may appear in the reporting split.
- Tabs without a real screenshot (Creation, Negotiation, Change Requests) keep the existing CSS ProductMockup.
- Illustrations stay for concept sections (challenges, single-source before/after, roles, about) — they are brand illustrations, not product proof. Hero illustration (hero.png) is retired from the hero.
- Every screenshot img: alt text describing the screen ("Financial forecasting dashboard showing actual and forecast fees per year"), loading="lazy" except hero (eager), rounded corners, subtle border.

## Motion plan (GSAP + @gsap/react installed; Reveal component exists at src/app/components/reveal.tsx)

One orchestrated hero moment, disciplined scroll reveals elsewhere:
1. Hero load timeline (new client component): headline words/lines rise+fade in stagger (y 32, 0.08 stagger), subline, CTAs, then the framed dashboard rises (y 48, scale 0.97→1) and the KPI chip strip pops chip-by-chip. Total under 1.6s, power3.out.
2. Scroll reveals: keep Reveal wrappers. Upgrade image/text splits so image and text arrive from opposite sides (already partly done).
3. Parallax drift: section illustrations get a gentle scrub parallax (y ±24 over the section's scroll range, scrub: true). New tiny component (e.g. Drift) in reveal.tsx or motion.tsx.
4. Screenshots entrance: perspective tilt-in on scroll (rotateX ~6deg, y 40, opacity 0 → flat), once.
5. Header: on scroll past 8px add shadow + slightly translucent background (ScrollTrigger toggleClass or a scroll listener) — orchestrator owns header.tsx, agents skip it.
6. Accordion (FAQ) keeps its CSS transition. Micro-interactions: buttons get scale 0.98 on active, ArrowLink arrow slides 4px on hover (CSS only).
7. prefers-reduced-motion: every GSAP effect skips (content visible immediately). Reveal already handles this; new components must too.

## Hard rules

- No invented numbers, stats, prices, client names (whitepaper has none).
- No em dashes, no exclamation marks, no eyebrows, no AI vocabulary, American -ize.
- No new npm deps, no CDN assets, no Google Fonts.
- Restraint: the hero sequence + KPI chip motif are the boldness budget. Everything else stays quiet. Do not add marquees, cursors, scroll-jacking, or particle effects.
