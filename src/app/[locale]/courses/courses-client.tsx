"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";

export default function CoursesClient({ locale, t }: { locale: string; t: Record<string, unknown> }) {
  const categories = t.categories as Record<string, string>;
  const categoryLabels = t.categoryLabels as Record<string, string>;
  const detail = t.detail as Record<string, string>;

  const categoryList = [
    { key: "all", label: categories.all },
    { key: "diploma", label: categories.diploma },
    { key: "degree", label: categories.degree },
    { key: "certificate", label: categories.certificate },
    { key: "academy", label: categories.academy },
    { key: "online", label: categories.online },
    { key: "service", label: categories.service },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all" ? courses : courses.filter((c) => c.category === activeFilter);

  // Mirrors getCourseField from lib/i18n. Kept local so this client component
  // doesn't pull in that module's server-only imports.
  const getField = <T,>(course: Record<string, unknown>, field: string): T => {
    if (locale === "bn") {
      const bn = course[`${field}_bn`];
      if (bn !== undefined) return bn as T;
    }
    return course[field] as T;
  };

  return (
    <>
      <section className="py-4 bg-[var(--canvas)] border-b border-[var(--border)] sticky top-16 lg:top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categoryList.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                aria-pressed={activeFilter === cat.key}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="all" className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="space-y-8">
            {filtered.map((course) => {
              const courseData = course as unknown as Record<string, unknown>;
              const title = getField<string>(courseData, "title");
              const description = getField<string>(courseData, "description");
              const duration = getField<string>(courseData, "duration");
              const highlights = getField<string[]>(courseData, "highlights");

              return (
                <div key={course.id} id={course.id} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden scroll-mt-40 hover:shadow-md transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative min-h-[240px] overflow-hidden">
                      <Image src={course.image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-[var(--accent)] rounded-full">{categoryLabels[course.category] || course.category}</span>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-white border border-white/40 rounded-full bg-black/20 backdrop-blur-sm">{duration}</span>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 lg:p-10">
                      <Link href={`/${locale}/courses/${course.id}`}>
                        <h3 className="text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3 hover:text-[var(--accent)] transition-colors">{title}</h3>
                      </Link>
                      <p className="text-[var(--body)] leading-relaxed mb-6">{description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-sm text-[var(--body)]">
                            <span className="text-[var(--success)] font-bold text-xs shrink-0">&#10003;</span>
                            {h}
                          </div>
                        ))}
                      </div>
                      <Link href={`/${locale}/courses/${course.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm">{detail.learnMore}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
