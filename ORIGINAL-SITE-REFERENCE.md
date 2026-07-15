# Original managedsuppliers.com reference (2026-07-14)

Julian's instruction: mirror the original site as closely as possible, using the ORIGINAL images (now self-hosted in /assets/original/), the real logo (/assets/brand/), and keeping the GSAP animation layer + frontend-design discipline. Do not invent imagery, do not keep the CSS ProductMockup where the original shows a real image.

## Sources
- Live homepage HTML (full Divi markup, copy text is authoritative): C:\Users\robid\AppData\Local\Temp\claude\C--Users-robid-Desktop-Aventario-Claude\9bc38102-c83f-4afd-8132-c4b2be110365\scratchpad\live-home.html
- All original images downloaded to: public/assets/original/ (serve as /assets/original/<file>)
- Real logo: /assets/brand/managedsuppliers-logo.svg (full wordmark, 186x54 viewBox) and /assets/brand/managedsuppliers-signet.svg (mark only). Replace the placeholder inline-SVG logo in components/logo.tsx with the real files (img tags, brand-correct).

## Section-to-image map (from live homepage)
- Hero: Hero.svg
- Challenges (3 cards): IconMain-1.svg, IconMain-2.svg, IconMain-3.svg (variants IconMain-1-1, IconMain-2-1, IconMain-4 also exist; match live-home.html usage)
- Collaboration / mindmap section: Illustration.svg (and Illustration-1.svg if used)
- "Single source of truth" section: it is a CAROUSEL with THREE before/after pairs (Flickity on the original; implement with our own lightweight slider: prev/next arrow buttons + page dots + slide transform, GSAP or CSS transitions, swipe optional). Exact content:
  1. Before "Lost In Documentation" (Group-1000004174.svg) / After "Peace Of Mind" (Group-633072.svg). Before copy: "Using multiple sources for your supplier-related documents and information complicates your processes for creating, updating and managing them. It may lead to errors, inconsistencies, data loss and miscommunication due to varying document versions and formats." After copy: "Store and access all your supplier-related documents and information in one central place. This simplifies the creation, updating and management of documents. You avoid issues and errors, as every click and every change in the system is logged in a traceable manner and carried out in a central, standardized format." Button: "Learn more about Measurement" -> link to /features.
  2. Before "Decision Paralysis" (Analytics.svg) / After "Objective, Data-Based Decisions" (Remote-work.svg). Before copy: "Comparing offers from various suppliers can be complex due to differences in style, structure, and wording. The challenge is to understand the content, manage any changes, and consider important agreements also for other proposals. Additionally, all information must be transparent and easily accessible." After copy: "Our solution streamlines the complexity of supplier offers by providing structured, comparable data. With a centralized repository, you can easily track changes, compare versions, and make informed decisions. The clarity and consistency of information empower you to navigate the supplier landscape with confidence, ensuring optimal choices." (NOTE: rewrite "streamlines"/"empower" per style rules: no AI vocabulary. Keep meaning, e.g. "Our solution reduces the complexity of supplier offers by providing structured, comparable data... The clarity and consistency of information lets you navigate the supplier landscape with confidence.") Button: "Learn more about Negotiation" -> /features.
  3. Before "Awaiting Escalations" (DecisionParalysis.svg) / After "Notified With Time To Spare" (DataBasedDecisions.svg). Before copy: "As supplier engagements are mostly scattered across different regions, departments and systems, it can be difficult to maintain an overview of all the durations, agreed terms & conditions and delivery quality. The result is often that management realizes too late that the quality and performance may deviate from the agreement or that follow-up SOWs should be agreed in good time. This can lead to expensive additional costs or significant delays." After copy: "With the assistance of managedsuppliers measurement and forecasting functions, management is informed at all times about suppliers with deviating performance, so that there is sufficient time to take appropriate countermeasures. In addition, all contracts and agreements, including their terms, are continuously monitored and extensions can be made in good time." Button: "Learn more about Reporting" -> /features.
- "6 key ingredients" tabs, per-feature images (replace ProductMockup everywhere):
  - Creation: Creation003.svg
  - Negotiation: Negotiation.svg
  - Measurement: Measurement.svg
  - Improvement: Improvement-001.svg
  - Forecasting: Forecasting004.svg
  - Change Requests / sixth tab: check live-home.html for which image the original pairs (Reporting-2.png or Snimka-obrazovky-2024-07-08-o-14.33.49.png are the product screenshots used in this area). Use exactly what the original uses per tab; if the original's sixth tab is Reporting, our sixth tab is Change Requests (whitepaper): use the closest original asset and note it.
- Reporting/product screenshot blocks: Reporting-2.png and Snimka-obrazovky-2024-07-08-o-14.33.49.png where the original places them.
- Video section: the original has a video teaser with poster Screenshot-posedio-video.jpg. Add this section (poster + play affordance linking to the original video if a URL exists in live-home.html, otherwise poster + "Watch a video" -> /contact).
- Banner/dark section: Test.svg.
- Blog cards: Blog-transparency-400x250.jpg, Reporting-400x250.jpg, Forecasting-400x250.jpg (full-size versions also downloaded).
- Group-1000004173/190/191.svg: check usage in live-home.html and place accordingly.

## Keep from our build
- GSAP animation layer (Reveal, hero timeline, Drift, TiltIn, stagger) - Julian explicitly wants animations.
- The added sections (Roles, Platform, FAQ) stay, restyled if needed to sit naturally in the mirrored design.
- Nav/footer structure, /faq page, blog pages.
- Style rules: no em dashes, no exclamation marks, no eyebrows, no AI words (empower, seamless, streamline...), American -ize, no invented numbers. The original copy is authoritative for content but fix its style-rule violations minimally (word swaps, not rewrites).
