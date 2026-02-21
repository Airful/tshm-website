import Link from "next/link";
import { courses } from "@/data/courses";
import SectionTitle from "@/components/common/SectionTitle";

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
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors" />
                <span className="text-white text-4xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                  {course.title[0]}
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
          <Link href="/courses" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
