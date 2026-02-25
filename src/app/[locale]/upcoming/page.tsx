import type { Metadata } from "next";
import Link from "next/link";
import { getPageTranslations, type Locale } from "@/app/lib/i18n";
import SectionTitle from "@/components/common/SectionTitle";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { upcoming } = await getPageTranslations(locale as Locale, ["upcoming"]);
  const meta = upcoming.meta as Record<string, string>;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: { title: meta.title, description: meta.description, url: `https://tshm.co.in/${locale}/upcoming` },
    alternates: { canonical: `https://tshm.co.in/${locale}/upcoming`, languages: { en: "/en/upcoming", bn: "/bn/upcoming", "x-default": "/en/upcoming" } },
  };
}

export default async function UpcomingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { upcoming } = await getPageTranslations(locale as Locale, ["upcoming"]);
  const hero = upcoming.hero as { title: string; subtitle: string };
  const section = upcoming.section as { overline: string; title: string; subtitle: string };
  const projects = upcoming.projects as { title: string; description: string; status: string; features: string[] }[];
  const getNotified = upcoming.getNotified as string;
  const cta = upcoming.cta as { title: string; subtitle: string; contactUs: string };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{hero.title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle overline={section.overline} title={section.title} subtitle={section.subtitle} />
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-all duration-300">
                <div className={`md:flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                  <div className="md:w-2/5 bg-[var(--elevated)] flex items-center justify-center p-10 min-h-[260px] relative">
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[var(--accent)] bg-[var(--accent-soft)] rounded-full">{project.status}</span>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3">{project.title}</h3>
                    <p className="text-[var(--body)] leading-relaxed mb-6">{project.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-[var(--body)]">
                          <span className="text-[var(--accent)] font-bold text-xs shrink-0">&#10003;</span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 text-sm">{getNotified}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] mb-4">{cta.title}</h2>
          <p className="text-[var(--body)] mb-8 max-w-xl mx-auto">{cta.subtitle}</p>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300">{cta.contactUs}</Link>
        </div>
      </section>
    </>
  );
}
