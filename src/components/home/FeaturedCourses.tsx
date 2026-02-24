import Link from "next/link";
import { courses } from "@/data/courses";
import SectionTitle from "@/components/common/SectionTitle";

const courseIcons: Record<string, string> = {
  "hotel-management": "\uD83C\uDFE8",
  "career-counseling": "\uD83E\uDDE0",
  "sales-marketing": "\uD83D\uDCC8",
  "beauty-tailoring-academy": "\uD83D\uDC84",
  "odd-jobs": "\uD83D\uDD27",
  "spoken-english": "\uD83D\uDCAC",
  "ac-technician": "\u2744\uFE0F",
  "transformation": "\uD83C\uDF1F",
  "online-degrees": "\uD83C\uDF93",
};

export default function FeaturedCourses() {
  const featured = courses.slice(0, 6);

  return (
    <section className="py-20 bg-[var(--color-bg-section)]">
      <div className="container mx-auto px-5">
        <SectionTitle
          title="Our Courses"
          subtitle="Explore our wide range of professional courses designed to launch your career"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-[var(--color-accent-light)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/5 transition-colors" />
                <span className="text-6xl group-hover:scale-110 transition-transform">
                  {courseIcons[course.id] || "\uD83D\uDCD6"}
                </span>
                <span className="absolute top-4 right-4 bg-[var(--color-accent)] text-white text-xs px-3 py-1 rounded-full">
                  {course.duration}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mt-2 mb-3">
                  {course.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <ul className="space-y-1 mb-5">
                  {course.highlights.slice(0, 2).map((h) => (
                    <li
                      key={h}
                      className="text-sm text-[var(--color-text-light)] flex items-center gap-2"
                    >
                      <span className="text-[var(--color-success)] text-xs">&#10003;</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/courses#${course.id}`}
                  className="text-[var(--color-accent)] font-semibold text-sm hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
