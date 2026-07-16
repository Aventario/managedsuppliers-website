import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import CookieConsent from "./components/consent";
import { ANALYTICS } from "./lib/analytics-config";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "A better way to manage suppliers - managedsuppliers",
  "description": "Manage the full supplier lifecycle in one cloud platform: drafting SOWs, negotiation, KPI measurement, forecasting, and reporting",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/",
    "languages": {
      "en-US": "https://managedsuppliers.com/",
      "de-DE": "https://managedsuppliers.com/de/",
      "en": "https://managedsuppliers.com/",
      "de": "https://managedsuppliers.com/de/"
    }
  },
  "openGraph": {
    "title": "A better way to manage suppliers - managedsuppliers",
    "description": "Manage the full supplier lifecycle in one cloud platform: drafting SOWs, negotiation, KPI measurement, forecasting, and reporting",
    "type": "website",
    "siteName": "managedsuppliers",
    "url": "/",
    "images": [
      "https://managedsuppliers.com/assets/video/explainer-poster.jpg"
    ]
  },
  ...(ANALYTICS.searchConsoleVerification
    ? { verification: { google: ANALYTICS.searchConsoleVerification } }
    : {}),
  "twitter": {
    "card": "summary_large_image",
    "title": "A better way to manage suppliers - managedsuppliers",
    "description": "Manage the full supplier lifecycle in one cloud platform: drafting SOWs, negotiation, KPI measurement, forecasting, and reporting"
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-US"}>
      <head>
        {/* Google Consent Mode v2 — default DENIED before anything loads (GDPR/DSGVO) */}
        <script
          key="consent-default"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});",
          }}
        />
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"", "\\/\",\"url\":\"", "\\/\",\"name\":\"A better way to manage suppliers - managedsuppliers\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"about\":{\"@id\":\"", "\\/#organization\"},\"datePublished\":\"2024-05-30T08:56:57+00:00\",\"dateModified\":\"2025-08-11T08:28:22+00:00\",\"description\":\"Manage the full supplier lifecycle in one cloud platform: drafting SOWs, negotiation, KPI measurement, forecasting, and reporting\",\"breadcrumb\":{\"@id\":\"", "\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"managedsuppliers\",\"description\":\"\",\"publisher\":{\"@id\":\"", "\\/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"", "\\/#organization\",\"name\":\"managedsuppliers\",\"url\":\"", "\\/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\",\"url\":\"", "\\/wp-content\\/uploads\\/2024\\/06\\/Logo.svg\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2024\\/06\\/Logo.svg\",\"width\":162,\"height\":65,\"caption\":\"managedsuppliers\"},\"image\":{\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:'Open_Sans',_Arial,_sans-serif] text-sm font-medium not-italic leading-[1.5rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background bg-cover [background-position:50%_0%] bg-no-repeat [background-attachment:fixed]">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
