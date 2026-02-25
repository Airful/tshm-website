import type { Metadata } from "next";
import Link from "next/link";
import { getPageTranslations, type Locale } from "@/app/lib/i18n";
import SectionTitle from "@/components/common/SectionTitle";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { faq } = await getPageTranslations(locale as Locale, ["faq"]);
  const meta = faq.meta as Record<string, string>;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: { title: meta.title, description: meta.description, url: `https://tshm.co.in/${locale}/faq` },
    alternates: { canonical: `https://tshm.co.in/${locale}/faq`, languages: { en: "/en/faq", bn: "/bn/faq", "x-default": "/en/faq" } },
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { faq } = await getPageTranslations(locale as Locale, ["faq"]);
  const hero = faq.hero as { title: string; subtitle: string };
  const categories = faq.categories as { category: string; items: { q: string; a: string }[] }[];
  const cta = faq.cta as { overline: string; title: string; subtitle: string; contactUs: string; callUs: string };

  // FAQ JSON-LD — always English for search engines
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{hero.title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {categories.map((section, sIdx) => (
            <div key={sIdx} className={sIdx > 0 ? "mt-16" : ""}>
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[var(--accent-soft)] rounded-full flex items-center justify-center text-sm font-bold text-[var(--accent)]">{sIdx + 1}</span>
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, qIdx) => (
                  <details key={qIdx} className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                      <h3 className="text-[var(--foreground)] font-medium pr-4 text-[15px]">{item.q}</h3>
                      <span className="text-[var(--muted)] group-open:rotate-45 transition-transform duration-300 text-xl shrink-0">+</span>
                    </summary>
                    <div className="px-6 pb-6 -mt-1">
                      <p className="text-[var(--body)] leading-relaxed text-sm">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <SectionTitle overline={cta.overline} title={cta.title} subtitle={cta.subtitle} />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300">{cta.contactUs}</Link>
            <a href="tel:+919635964348" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300">{cta.callUs}</a>
          </div>
        </div>
      </section>
    </>
  );
}
