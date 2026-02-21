import Link from "next/link";
import { courses } from "@/data/courses";
import SectionTitle from "@/components/common/SectionTitle";

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

export default function CoursesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of professional courses and
            start building your future today
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-6 bg-white border-b sticky top-[72px] z-30">
        <div className="container mx-auto px-5">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.key}
                href={cat.key === "all" ? "#all" : `#${cat.key}`}
                className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section id="all" className="py-20">
        <div className="container mx-auto px-5">
          <SectionTitle
            title="All Programs"
            subtitle="Comprehensive courses designed to make you industry-ready"
          />

          <div className="space-y-16">
            {courses.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-40"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center p-12 min-h-[250px] relative">
                    <span className="text-white text-7xl font-bold opacity-10">
                      {course.title[0]}
                    </span>
                    <div className="absolute top-6 left-6">
                      <span className="bg-[var(--color-accent)] text-white text-xs px-3 py-1 rounded-full font-medium">
                        {course.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-white/10 text-white text-sm px-4 py-2 rounded backdrop-blur-sm">
                        Duration: {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10">
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                      {course.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                      {course.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {course.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2 text-sm text-[var(--color-text)]"
                        >
                          <span className="text-[var(--color-success)] font-bold">
                            &#10003;
                          </span>
                          {h}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary inline-block"
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
