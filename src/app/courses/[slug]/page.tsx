import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);
  if (!course) return {};

  return {
    title: course.seoTitle || course.title,
    description: course.seoDescription || course.description,
    keywords: course.seoKeywords,
    openGraph: {
      title: course.seoTitle || course.title,
      description: course.seoDescription || course.description,
      url: `https://tshm.co.in/courses/${course.id}`,
      images: [{ url: course.image, width: 800, height: 600, alt: course.title }],
    },
    alternates: {
      canonical: `https://tshm.co.in/courses/${course.id}`,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);
  if (!course) notFound();

  const categoryLabels: Record<string, string> = {
    diploma: "Diploma",
    certificate: "Certificate",
    academy: "Academy",
    online: "Online",
    service: "Service",
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.longDescription || course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "Tarakeswar School of Hotel Management & Technical Foundation",
      sameAs: "https://tshm.co.in",
    },
    timeRequired: course.duration,
    educationalLevel: course.eligibility || "Open to all",
    occupationalCategory: course.careerProspects?.join(", "),
    offers: {
      "@type": "Offer",
      category: "Paid",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.category === "online" ? "online" : "onsite",
      location: {
        "@type": "Place",
        name: "TSHM & TF Campus",
        address: {
          "@type": "PostalAddress",
          streetAddress: "College Road, Padmapukur",
          addressLocality: "Tarakeswar",
          addressRegion: "West Bengal",
          postalCode: "712410",
          addressCountry: "IN",
        },
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tshm.co.in" },
      { "@type": "ListItem", position: 2, name: "Courses", item: "https://tshm.co.in/courses" },
      { "@type": "ListItem", position: 3, name: course.title, item: `https://tshm.co.in/courses/${course.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white/70 transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white/70">{course.title}</span>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-3/5">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-white/10 rounded-full mb-4">
                {categoryLabels[course.category] || course.category} &middot; {course.duration}
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
              >
                {course.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {course.longDescription || course.description}
              </p>
            </div>
            <div className="md:w-2/5 mt-8 md:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Key Highlights */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                Course Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 bg-white rounded-xl border border-[var(--border)] p-5 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-[var(--success)] font-bold text-sm mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <span className="text-sm text-[var(--body)]">{h}</span>
                  </div>
                ))}
              </div>

              {course.careerProspects && course.careerProspects.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                    Career Prospects
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.careerProspects.map((cp) => (
                      <div
                        key={cp}
                        className="flex items-center gap-3 text-sm text-[var(--body)]"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shrink-0" />
                        {cp}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-2xl border border-[var(--border)] p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
                  Quick Info
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">Duration</span>
                    <span className="font-medium text-[var(--foreground)]">{course.duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">Category</span>
                    <span className="font-medium text-[var(--foreground)]">{categoryLabels[course.category]}</span>
                  </div>
                  {course.eligibility && (
                    <div className="border-b border-[var(--border)] pb-3">
                      <span className="text-[var(--muted)] block mb-1">Eligibility</span>
                      <span className="text-[var(--foreground)] text-xs leading-relaxed">{course.eligibility}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">Job Assistance</span>
                    <span className="font-medium text-[var(--success)]">100%</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span className="text-[var(--muted)]">Entrance Exam</span>
                    <span className="font-medium text-[var(--foreground)]">Not Required</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm"
                >
                  Enquire Now
                </Link>
                <a
                  href="tel:+919635964348"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 text-sm"
                >
                  Call +91 96359 64348
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[var(--elevated)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[var(--foreground)] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[var(--body)] mb-8 max-w-xl mx-auto">
            Take the first step towards a rewarding career. Contact us today for
            admission details and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300"
            >
              Apply Now
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
