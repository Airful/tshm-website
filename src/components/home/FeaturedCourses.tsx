import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import SectionTitle from "@/components/common/SectionTitle";

const categoryLabels: Record<string, string> = {
  diploma: "Diploma",
  certificate: "Certificate",
  academy: "Academy",
  online: "Online",
  service: "Service",
};

export default function FeaturedCourses() {
  const featured = courses.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[var(--elevated)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionTitle
          overline="OUR PROGRAMS"
          title="Courses That Launch Careers"
          subtitle="Explore our comprehensive range of professional courses designed for real-world readiness"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              {/* Top area */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-[var(--accent)] rounded-full">
                    {categoryLabels[course.category] || course.category}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-sm text-[var(--body)] line-clamp-2 mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--muted)] border border-[var(--border)] rounded-full">
                    {course.duration}
                  </span>
                  <Link
                    href={`/courses#${course.id}`}
                    className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            View All Courses
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
