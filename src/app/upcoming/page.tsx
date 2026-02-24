import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

export const metadata = {
  title: "Upcoming Projects - TSHM",
  description:
    "Discover upcoming projects and new initiatives at TSHM - expanding opportunities for students.",
};

const upcomingProjects = [
  {
    id: 1,
    title: "Advanced Culinary Arts Program",
    description:
      "A new specialized program focusing on international cuisine, food presentation, and modern culinary techniques. Students will learn from master chefs with hands-on experience in professional kitchens.",
    status: "Coming Soon",
    icon: "\uD83D\uDC68\u200D\uD83C\uDF73",
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
    icon: "\uD83D\uDCBB",
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
    icon: "\uD83C\uDFE8",
    features: [
      "Live hotel operations",
      "Front office management",
      "Housekeeping standards",
      "Guest handling & service excellence",
    ],
  },
];

const projectColors = [
  "bg-[var(--color-accent-light)]",
  "bg-[var(--color-bg-section)]",
  "bg-[var(--color-accent-light)]",
];

export default function UpcomingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Exciting new initiatives and programs coming soon to expand learning
            opportunities for our students
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container mx-auto px-5">
          <SectionTitle
            title="What&apos;s Coming Next"
            subtitle="We're constantly expanding to bring you more career opportunities"
          />

          <div className="space-y-12">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[var(--color-border)]"
              >
                <div className={`md:flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`md:w-2/5 flex items-center justify-center p-12 min-h-[300px] relative ${projectColors[index] || "bg-[var(--color-accent-light)]"}`}
                  >
                    <span className="text-8xl">
                      {project.icon}
                    </span>
                    <div className="absolute top-6 left-6">
                      <span className="bg-[var(--color-accent)] text-white text-sm px-4 py-2 rounded-full font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {project.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-[var(--color-text)]"
                        >
                          <span className="text-[var(--color-accent)] font-bold">
                            &#10003;
                          </span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded hover:bg-[var(--color-accent-hover)] transition-colors"
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
      <section className="py-20 bg-[var(--color-bg-section)]">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
            Want to Know More?
          </h2>
          <p className="text-[var(--color-text-light)] mb-8 max-w-xl mx-auto">
            Contact us to learn more about our upcoming projects and how you can
            be a part of them.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded text-lg hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
