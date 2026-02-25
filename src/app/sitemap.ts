import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const baseUrl = "https://tshm.co.in";
const locales = ["en", "bn"] as const;

function localizedEntry(
  path: string,
  opts: { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${baseUrl}/${l}${path}`]),
        ["x-default", `${baseUrl}/en${path}`],
      ]),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ...localizedEntry("", { changeFrequency: "weekly", priority: 1 }),
    ...localizedEntry("/about", { changeFrequency: "monthly", priority: 0.8 }),
    ...localizedEntry("/courses", { changeFrequency: "weekly", priority: 0.9 }),
    ...localizedEntry("/contact", { changeFrequency: "monthly", priority: 0.7 }),
    ...localizedEntry("/gallery", { changeFrequency: "monthly", priority: 0.6 }),
    ...localizedEntry("/upcoming", { changeFrequency: "monthly", priority: 0.5 }),
    ...localizedEntry("/faq", { changeFrequency: "monthly", priority: 0.7 }),
  ];

  const coursePages = courses.flatMap((course) =>
    localizedEntry(`/courses/${course.id}`, { changeFrequency: "monthly", priority: 0.8 })
  );

  return [...staticPages, ...coursePages];
}
