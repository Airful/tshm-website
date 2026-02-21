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
      <section className="py-20">
        <div className="container mx-auto px-5">
          <SectionTitle
            title="What&apos;s Coming Next"
            subtitle="We're constantly expanding to bring you more career opportunities"
          />

          <div className="space-y-12">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`md:flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`md:w-2/5 flex items-center justify-center p-12 min-h-[300px] relative ${
                      index === 0
                        ? "bg-gradient-to-br from-[var(--color-accent)] to-[#c0392b]"
                        : index === 1
                        ? "bg-gradient-to-br from-[#2980b9] to-[#3498db]"
                        : "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]"
                    }`}
                  >
                    <span className="text-white/10 text-8xl font-bold">
                      0{project.id}
                    </span>
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/20 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm font-medium">
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
                    <Link href="/contact" className="btn-primary">
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
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
