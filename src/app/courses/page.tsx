import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata = {
  title: "Our Courses - TSHM",
  description:
    "Explore TSHM's wide range of courses - Hotel Management, AC Technician, Beauty Academy, Spoken English, Online Degrees, and more.",
};

const categories = [
  { key: "all", label: "All Courses" },
  { key: "diploma", label: "Diploma" },
  { key: "certificate", label: "Certificate" },
  { key: "academy", label: "Academy" },
  { key: "online", label: "Online Degrees" },
  { key: "service", label: "Services" },
];

const categoryLabels: Record<string, string> = {
  diploma: "Diploma",
  certificate: "Certificate",
  academy: "Academy",
  online: "Online",
  service: "Service",
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
          >
            Our Courses
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of professional courses and
            start building your future today
          </p>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <section className="py-4 bg-[var(--canvas)] border-b border-[var(--border)] sticky top-16 lg:top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <a
                key={cat.key}
                href={cat.key === "all" ? "#all" : `#cat-${cat.key}`}
                className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses - Vertical Stack */}
      <section id="all" className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="space-y-8">
            {courses.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden scroll-mt-40 hover:shadow-md transition-all duration-300"
              >
                <div className="md:flex">
                  {/* Left image placeholder */}
                  <div className="md:w-2/5 bg-[var(--elevated)] flex items-center justify-center p-10 min-h-[240px] relative">
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] rounded-full">
                        {categoryLabels[course.category] || course.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--muted)] border border-[var(--border)] rounded-full bg-white">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="md:w-3/5 p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3">
                      {course.title}
                    </h3>
                    <p className="text-[var(--body)] leading-relaxed mb-6">
                      {course.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {course.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2 text-sm text-[var(--body)]"
                        >
                          <span className="text-[var(--success)] font-bold text-xs shrink-0">
                            &#10003;
                          </span>
                          {h}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
