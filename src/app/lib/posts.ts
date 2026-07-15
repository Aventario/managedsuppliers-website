export type Post = {
  slug: string;
  title: string;
  date: string;
  img: string;
  excerpt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "how-transparency-can-make-or-break-supplier-relationships",
    title: "How Transparency Can Make or Break Supplier Relationships",
    date: "Jan 15, 2025",
    img: "/assets/cloned/images/ac09c38b7024.jpg",
    excerpt:
      "You and your team manage dozens or even hundreds of supplier contracts across different regions. A major project deadline is approaching, and everything seems on track. Then you get an urgent message.",
    body: [
      "You and your team manage dozens or even hundreds of supplier contracts across different regions. A major project deadline is approaching, and everything seems on track. Then you get an urgent message: one of your key suppliers has missed a critical milestone.",
      "When information lives in scattered documents, spreadsheets, and inboxes, problems surface late and cost more to fix. Transparency is the difference between reacting to a crisis and preventing one.",
      "A single, shared source of truth means everyone, internal stakeholders and suppliers alike, works from the same numbers, the same terms, and the same status. That is the foundation of a healthy supplier relationship.",
      "With managedsuppliers, every contract, document, and performance signal sits in one place, visible to the people who need it. No surprises, no version conflicts, and no scrambling when a deadline is at risk.",
    ],
  },
  {
    slug: "feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers",
    title: "Feature Presentation #6, Reporting: How to create unified Vendor Reports",
    date: "Dec 16, 2024",
    img: "/assets/cloned/images/b94f79b18135.jpg",
    excerpt:
      "In complex supplier networks, having access to detailed and reliable data is crucial for maintaining strong vendor relationships and driving strategic decisions.",
    body: [
      "In complex supplier networks, having access to detailed and reliable data is crucial for maintaining strong vendor relationships and driving strategic decisions.",
      "managedsuppliers' Reporting function pulls performance data from across your supplier base and turns it into unified, real-time reports: no manual exports, no reconciling spreadsheets.",
      "Compare suppliers on a like-for-like basis, spot trends before they become problems, and give leadership a clear, current picture whenever they ask for one.",
    ],
  },
  {
    slug: "feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers",
    title: "Feature Presentation #5, Forecasting: Predict the Future with managedsuppliers",
    date: "Dec 16, 2024",
    img: "/assets/cloned/images/53ecd87d44ca.jpg",
    excerpt:
      "Effective supplier management goes beyond tracking current performance. It is about predicting future trends, optimizing budgets, and preparing for change.",
    body: [
      "Effective supplier management goes beyond tracking current performance. It is about predicting future trends, optimizing budgets, and preparing for change.",
      "The Forecasting feature brings spend, contract volumes, and renewals into one view, so you can plan ahead instead of reacting to renewals as they land on your desk.",
      "The result: fewer surprises at budget time, better-timed negotiations, and a supplier base that scales with the business.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
