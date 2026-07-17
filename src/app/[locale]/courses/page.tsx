import type { Metadata } from "next";
import { getPageTranslations, type Locale } from "@/app/lib/i18n";
import CoursesClient from "./courses-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { courses: t } = await getPageTranslations(locale as Locale, ["courses"]);
  const meta = t.meta as Record<string, string>;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: { title: meta.title, description: meta.description, url: `https://tshm.co.in/${locale}/courses` },
    alternates: { canonical: `https://tshm.co.in/${locale}/courses`, languages: { en: "/en/courses", bn: "/bn/courses", "x-default": "/en/courses" } },
  };
}

export default async function CoursesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { courses: t } = await getPageTranslations(locale as Locale, ["courses"]);
  const hero = t.hero as { title: string; subtitle: string };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{hero.title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </section>

      <CoursesClient locale={locale} t={t} />
    </>
  );
}
