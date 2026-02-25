import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import SectionTitle from "@/components/common/SectionTitle";
import { getCourseField, type Locale } from "@/app/lib/i18n";

interface FeaturedCoursesProps {
  locale: string;
  t: {
    overline: string;
    title: string;
    subtitle: string;
    learnMore: string;
    viewAll: string;
    categoryLabels: Record<string, string>;
  };
}

export default function FeaturedCourses({ locale, t }: FeaturedCoursesProps) {
  const featured = courses.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[var(--elevated)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionTitle
          overline={t.overline}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => {
            const title = getCourseField<string>(course as unknown as Record<string, unknown>, 'title', locale as Locale);
            const description = getCourseField<string>(course as unknown as Record<string, unknown>, 'description', locale as Locale);
            const duration = getCourseField<string>(course as unknown as Record<string, unknown>, 'duration', locale as Locale);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-all duration-300 group"
              >
                {/* Top area */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-[var(--accent)] rounded-full">
                      {t.categoryLabels[course.category] || course.category}
                    </span>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--body)] line-clamp-2 mb-4 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--muted)] border border-[var(--border)] rounded-full">
                      {duration}
                    </span>
                    <Link
                      href={`/${locale}/courses#${course.id}`}
                      className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                    >
                      {t.learnMore} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/courses`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            {t.viewAll}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
