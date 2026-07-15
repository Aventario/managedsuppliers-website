// Semantic page content extracted from recognized recipe sections.

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/2025/01", label: "January 2025" },
    { href: "/2024/12", label: "December 2024" },
    { href: "/2024/11", label: "November 2024" },
    { href: "/2024/10", label: "October 2024" },
    { href: "/2024/08", label: "August 2024" },
    { href: "/2024/07", label: "July 2024" },
    { href: "/2024/06", label: "June 2024" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "#", label: "Facebook" },
    { href: "#", label: "X" },
    { href: "#", label: "Instagram" },
    { href: "/feed", label: "RSS" }
];

export type CtaSectionContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSectionContent = {
  title?: string;
  actions: CtaSectionContentAction[];
};
export const ctaSectionContent: CtaSectionContent = {
  "title": "The 6 key ingredients",
  "actions": [
    {
      "label": "Learn more about Creation",
      "href": "/?page_id=358047"
    }
  ]
};

export type CtaSection2ContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSection2Content = {
  title?: string;
  actions: CtaSection2ContentAction[];
};
export const ctaSection2Content: CtaSection2Content = {
  "title": "Real-Time Reporting,",
  "actions": [
    {
      "label": "Learn more about Reporting",
      "href": "/?page_id=358137"
    },
    {
      "label": "Learn more about Reporting",
      "href": "/?page_id=358137"
    },
    {
      "label": "Aventario",
      "href": "https://www.aventario.com/"
    },
    {
      "label": "Meet the team",
      "href": "/?page_id=366"
    },
    {
      "label": "Aventario",
      "href": "https://www.aventario.com/"
    },
    {
      "label": "Meet the team",
      "href": "/?page_id=366"
    },
    {
      "label": "Book a demo",
      "href": "/?page_id=358205"
    }
  ]
};

