import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/menu", priority: 0.9, changeFrequency: "weekly" },
  { path: "/our-history", priority: 0.6, changeFrequency: "monthly" },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" },
  { path: "/fundraisers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/merchandise", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
