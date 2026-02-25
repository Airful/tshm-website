import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import { getPageTranslations, getCourseField, type Locale } from "@/app/lib/i18n";

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
  const categories = t.categories as Record<string, string>;
  const categoryLabels = t.categoryLabels as Record<string, string>;
  const detail = t.detail as Record<string, string>;

  const categoryList = [
    { key: "all", label: categories.all },
    { key: "diploma", label: categories.diploma },
    { key: "certificate", label: categories.certificate },
    { key: "academy", label: categories.academy },
    { key: "online", label: categories.online },
    { key: "service", label: categories.service },
  ];

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{hero.title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </section>

      <section className="py-4 bg-[var(--canvas)] border-b border-[var(--border)] sticky top-16 lg:top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categoryList.map((cat) => (
              <a key={cat.key} href={cat.key === "all" ? "#all" : `#cat-${cat.key}`} className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300">{cat.label}</a>
            ))}
          </div>
        </div>
      </section>

      <section id="all" className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="space-y-8">
            {courses.map((course) => {
              const courseData = course as unknown as Record<string, unknown>;
              const title = getCourseField<string>(courseData, "title", locale as Locale);
              const description = getCourseField<string>(courseData, "description", locale as Locale);
              const duration = getCourseField<string>(courseData, "duration", locale as Locale);
              const highlights = getCourseField<string[]>(courseData, "highlights", locale as Locale);

              return (
                <div key={course.id} id={course.id} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden scroll-mt-40 hover:shadow-md transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative min-h-[240px] overflow-hidden">
                      <Image src={course.image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-[var(--accent)] rounded-full">{categoryLabels[course.category] || course.category}</span>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-white border border-white/40 rounded-full bg-black/20 backdrop-blur-sm">{duration}</span>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 lg:p-10">
                      <Link href={`/${locale}/courses/${course.id}`}>
                        <h3 className="text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3 hover:text-[var(--accent)] transition-colors">{title}</h3>
                      </Link>
                      <p className="text-[var(--body)] leading-relaxed mb-6">{description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-sm text-[var(--body)]">
                            <span className="text-[var(--success)] font-bold text-xs shrink-0">&#10003;</span>
                            {h}
                          </div>
                        ))}
                      </div>
                      <Link href={`/${locale}/courses/${course.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm">{detail.learnMore}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
