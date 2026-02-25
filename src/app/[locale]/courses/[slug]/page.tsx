import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import { getPageTranslations, getCourseField, locales, type Locale } from "@/app/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    courses.map((course) => ({ locale, slug: course.id }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const course = courses.find((c) => c.id === slug);
  if (!course) return {};
  const courseData = course as unknown as Record<string, unknown>;
  const title = getCourseField<string>(courseData, "seoTitle", locale as Locale) || getCourseField<string>(courseData, "title", locale as Locale);
  const description = getCourseField<string>(courseData, "seoDescription", locale as Locale) || getCourseField<string>(courseData, "description", locale as Locale);
  const keywords = getCourseField<string>(courseData, "seoKeywords", locale as Locale);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://tshm.co.in/${locale}/courses/${course.id}`,
      images: [{ url: course.image, width: 800, height: 600, alt: getCourseField<string>(courseData, "title", locale as Locale) }],
    },
    alternates: {
      canonical: `https://tshm.co.in/${locale}/courses/${course.id}`,
      languages: { en: `/en/courses/${course.id}`, bn: `/bn/courses/${course.id}`, "x-default": `/en/courses/${course.id}` },
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const course = courses.find((c) => c.id === slug);
  if (!course) notFound();

  const { courses: t } = await getPageTranslations(locale as Locale, ["courses"]);
  const categoryLabels = t.categoryLabels as Record<string, string>;
  const detail = t.detail as Record<string, string>;

  const courseData = course as unknown as Record<string, unknown>;
  const title = getCourseField<string>(courseData, "title", locale as Locale);
  const description = getCourseField<string>(courseData, "description", locale as Locale);
  const longDescription = getCourseField<string>(courseData, "longDescription", locale as Locale);
  const duration = getCourseField<string>(courseData, "duration", locale as Locale);
  const highlights = getCourseField<string[]>(courseData, "highlights", locale as Locale);
  const eligibility = getCourseField<string>(courseData, "eligibility", locale as Locale);
  const careerProspects = getCourseField<string[]>(courseData, "careerProspects", locale as Locale);

  // JSON-LD stays in English for search engines
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.longDescription || course.description,
    provider: { "@type": "EducationalOrganization", name: "Tarakeswar School of Hotel Management & Technical Foundation", sameAs: "https://tshm.co.in" },
    timeRequired: course.duration,
    educationalLevel: course.eligibility || "Open to all",
    occupationalCategory: course.careerProspects?.join(", "),
    offers: { "@type": "Offer", category: "Paid", availability: "https://schema.org/InStock" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.category === "online" ? "online" : "onsite",
      location: { "@type": "Place", name: "TSHM & TF Campus", address: { "@type": "PostalAddress", streetAddress: "College Road, Padmapukur", addressLocality: "Tarakeswar", addressRegion: "West Bengal", postalCode: "712410", addressCountry: "IN" } },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://tshm.co.in/${locale}` },
      { "@type": "ListItem", position: 2, name: "Courses", item: `https://tshm.co.in/${locale}/courses` },
      { "@type": "ListItem", position: 3, name: course.title, item: `https://tshm.co.in/${locale}/courses/${course.id}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">{detail.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={`/${locale}/courses`} className="hover:text-white/70 transition-colors">{detail.breadcrumbCourses}</Link>
            <span>/</span>
            <span className="text-white/70">{title}</span>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-3/5">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-white/10 rounded-full mb-4">
                {categoryLabels[course.category] || course.category} &middot; {duration}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{title}</h1>
              <p className="text-white/70 text-lg leading-relaxed">{longDescription || description}</p>
            </div>
            <div className="md:w-2/5 mt-8 md:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image src={course.image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">{detail.courseHighlights}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 bg-white rounded-xl border border-[var(--border)] p-5 hover:shadow-md transition-all duration-300">
                    <span className="text-[var(--success)] font-bold text-sm mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-sm text-[var(--body)]">{h}</span>
                  </div>
                ))}
              </div>
              {careerProspects && careerProspects.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">{detail.careerProspects}</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {careerProspects.map((cp) => (
                      <div key={cp} className="flex items-center gap-3 text-sm text-[var(--body)]">
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shrink-0" />
                        {cp}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="bg-white rounded-2xl border border-[var(--border)] p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">{detail.quickInfo}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">{detail.duration}</span>
                    <span className="font-medium text-[var(--foreground)]">{duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">{detail.category}</span>
                    <span className="font-medium text-[var(--foreground)]">{categoryLabels[course.category]}</span>
                  </div>
                  {eligibility && (
                    <div className="border-b border-[var(--border)] pb-3">
                      <span className="text-[var(--muted)] block mb-1">{detail.eligibility}</span>
                      <span className="text-[var(--foreground)] text-xs leading-relaxed">{eligibility}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">{detail.jobAssistance}</span>
                    <span className="font-medium text-[var(--success)]">{detail.jobAssistanceValue}</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span className="text-[var(--muted)]">{detail.entranceExam}</span>
                    <span className="font-medium text-[var(--foreground)]">{detail.entranceExamValue}</span>
                  </div>
                </div>
                <Link href={`/${locale}/contact`} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm">{detail.enquireNow}</Link>
                <a href="tel:+919635964348" className="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 text-sm">{detail.callUs}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] mb-4">{detail.readyToStart}</h2>
          <p className="text-[var(--body)] mb-8 max-w-xl mx-auto">{detail.readySubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300">{detail.applyNow}</Link>
            <Link href={`/${locale}/courses`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300">{detail.viewAllCourses}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
