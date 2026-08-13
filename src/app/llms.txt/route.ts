export const dynamic = "force-static";

// llms.txt tells AI answer engines what this site is and where the substance sits.
// The previous version was left over from the WordPress scrape: it announced the
// site as "a generated ditto.site clone", listed one route, and pasted a wall of
// navigation text from the old homepage. Rewritten 13.08.2026 against the real
// route list in the sitemap.
const BODY = `# managedsuppliers

> Vendor and supplier management software from Aventario, a Vienna-based
> consultancy for cost and value optimization in IT and supply chain.
> managedsuppliers covers the supplier lifecycle in one place: contracts and
> statements of work, service and performance data, forecasting, and reporting
> across every vendor.

managedsuppliers is the product arm of Aventario Solutions GmbH. It grew out of
consulting work on enterprise supplier landscapes, so the model follows how
vendor managers actually work rather than a generic CRM shape.

## What it does

Six core features carry a Statement of Work from first draft to signed change,
with reporting running across all of them.

- Creation: generate a new SOW from templates, assign people to roles, and reuse
  agreements, clauses, text blocks, KPIs and fee components from the frame contract.
- Negotiation: agree the terms with the supplier on one shared draft.
- Measurement: hold suppliers to what was agreed, with every change logged.
- Improvement: act on what the measurement shows.
- Forecasting: project ahead per supplier instead of reacting at renewal.
- Change Requests: handle changes against the signed agreement rather than beside it.

The point of the platform is a single source of truth for everything vendor
related, replacing documents spread across mailboxes, drives and spreadsheets.

## Who it is for

IT directors, CIOs, procurement leads and vendor managers in organizations that
work with dozens to hundreds of suppliers across multiple countries. Typically
enterprises of 5,000 employees and up, and mid-sized companies from 500 up.

## Pages

- [Home](https://www.managedsuppliers.com/): what the product is and who it is for.
- [Features](https://www.managedsuppliers.com/features): the capability detail, module by module.
- [About](https://www.managedsuppliers.com/about): the company behind the product.
- [FAQ](https://www.managedsuppliers.com/faq): answers on scope, data and rollout.
- [Contact](https://www.managedsuppliers.com/contact): request a demo.
- [Blog](https://www.managedsuppliers.com/blog): supplier management practice and feature detail.

## Blog articles

- [How transparency can make or break supplier relationships](https://www.managedsuppliers.com/blog/how-transparency-can-make-or-break-supplier-relationships)
- [Reporting: how to create unified vendor reports](https://www.managedsuppliers.com/blog/feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers)
- [Forecasting: predict the future with managedsuppliers](https://www.managedsuppliers.com/blog/feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers)

## The company

Aventario Solutions GmbH, Tuchlauben 7a, 1010 Vienna, Austria.
Consulting site: https://www.aventario.com
Contact: office@aventario.com
`;

export function GET() {
  return new Response(BODY, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
