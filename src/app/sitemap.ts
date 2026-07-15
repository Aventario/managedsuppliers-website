import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";
import { POSTS } from "./lib/posts";

export const dynamic = "force-static";

const PAGES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/features", priority: 0.9 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/imprint", priority: 0.2 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((p) => ({
      url: SITE_ORIGIN + p.path,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...POSTS.map((post) => ({
      url: `${SITE_ORIGIN}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
