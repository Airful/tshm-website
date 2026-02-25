import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Upcoming Projects & New Courses",
  description:
    "Discover upcoming projects at TSHM & TF — Advanced Culinary Arts, Digital Skills Training Center, and Hospitality Training Hotel. New career opportunities coming soon in Tarakeswar.",
  keywords:
    "TSHM new courses, upcoming vocational training Tarakeswar, culinary arts course Hooghly, digital skills training West Bengal",
  openGraph: {
    title: "Upcoming Projects - TSHM & TF Tarakeswar",
    description:
      "New programs coming soon — Advanced Culinary Arts, Digital Skills, Hospitality Training Hotel.",
    url: "https://tshm.co.in/upcoming",
  },
  alternates: {
    canonical: "https://tshm.co.in/upcoming",
  },
};

const upcomingProjects = [
  {
    id: 1,
    title: "Advanced Culinary Arts Program",
    description:
      "A new specialized program focusing on international cuisine, food presentation, and modern culinary techniques. Students will learn from master chefs with hands-on experience in professional kitchens.",
    status: "Coming Soon",
    features: [
      "International cuisine modules",
      "Professional kitchen training",
      "Food photography & presentation",
      "Restaurant management basics",
    ],
  },
  {
    id: 2,
    title: "Digital Skills & IT Training Center",
    description:
      "State-of-the-art computer training facility offering courses in digital literacy, web development, graphic design, and office productivity tools for the modern workplace.",
    status: "In Planning",
    features: [
      "Computer literacy basics",
      "Web development fundamentals",
      "Graphic design & multimedia",
      "Digital marketing essentials",
    ],
  },
  {
    id: 3,
    title: "Hospitality Training Hotel",
    description:
      "An on-campus training hotel where students get real-world experience managing front desk operations, housekeeping, F&B service, and guest relations in a live environment.",
    status: "Upcoming",
    features: [
      "Live hotel operations",
      "Front office management",
      "Housekeeping standards",
      "Guest handling & service excellence",
    ],
  },
];

export default function UpcomingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
          >
            Upcoming Projects
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Exciting new initiatives and programs coming soon to expand learning
            opportunities for our students
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionTitle
            overline="WHAT&apos;S NEXT"
            title="Coming Soon"
            subtitle="We are constantly expanding to bring you more career opportunities"
          />

          <div className="space-y-8">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`md:flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
                >
                  {/* Left area */}
                  <div className="md:w-2/5 bg-[var(--elevated)] flex items-center justify-center p-10 min-h-[260px] relative">
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[var(--accent)] bg-[var(--accent-soft)] rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="md:w-3/5 p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[var(--body)] leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {project.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-[var(--body)]"
                        >
                          <span className="text-[var(--accent)] font-bold text-xs shrink-0">
                            &#10003;
                          </span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 text-sm"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] mb-4">
            Want to Know More?
          </h2>
          <p className="text-[var(--body)] mb-8 max-w-xl mx-auto">
            Contact us to learn more about our upcoming projects and how you can
            be a part of them.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
