import type { Metadata } from "next";
import { getPageTranslations, type Locale } from "@/app/lib/i18n";
import HeroSlider from "@/components/home/HeroSlider";
import StatsSection from "@/components/home/StatsSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Testimonials from "@/components/home/Testimonials";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { home } = await getPageTranslations(locale as Locale, ["home"]);
  const meta = home.meta as Record<string, string>;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://tshm.co.in/${locale}`,
    },
    alternates: {
      canonical: `https://tshm.co.in/${locale}`,
      languages: {
        en: "/en",
        bn: "/bn",
        "x-default": "/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { home } = await getPageTranslations(locale as Locale, ["home"]);

  const hero = home.hero as { overline: string; heading1: string; heading2: string; subtitle: string; exploreCourses: string; contactUs: string; stats: string[] };
  const stats = home.stats as { value: string; label: string }[];
  const featured = home.featured as { overline: string; title: string; subtitle: string; learnMore: string; viewAll: string; categoryLabels: Record<string, string> };
  const testimonials = home.testimonials as { overline: string; title: string; subtitle: string; placedAt: string };
  const partners = home.partners as { overline: string; title: string; subtitle: string; items: { title: string; description: string }[] };
  const cta = home.cta as { overline: string; title: string; subtitle: string; applyNow: string; browseCourses: string };

  return (
    <>
      <HeroSlider locale={locale} t={hero} />
      <StatsSection t={stats} />
      <FeaturedCourses locale={locale} t={featured} />
      <Testimonials t={testimonials} />
      <PartnersSection t={partners} />
      <CTASection locale={locale} t={cta} />
    </>
  );
}
