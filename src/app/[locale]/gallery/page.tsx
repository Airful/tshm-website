import type { Metadata } from "next";
import { getPageTranslations, type Locale } from "@/app/lib/i18n";
import GalleryClient from "./gallery-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { gallery } = await getPageTranslations(locale as Locale, ["gallery"]);
  const meta = gallery.meta as Record<string, string>;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: { title: meta.title, description: meta.description, url: `https://tshm.co.in/${locale}/gallery` },
    alternates: { canonical: `https://tshm.co.in/${locale}/gallery`, languages: { en: "/en/gallery", bn: "/bn/gallery", "x-default": "/en/gallery" } },
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { gallery } = await getPageTranslations(locale as Locale, ["gallery"]);
  const hero = gallery.hero as { title: string; subtitle: string };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{hero.title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </section>
      <GalleryClient locale={locale} t={gallery} />
    </>
  );
}
