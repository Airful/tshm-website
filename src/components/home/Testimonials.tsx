"use client";

import { useState } from "react";
import { placedStudents } from "@/data/team";
import SectionTitle from "@/components/common/SectionTitle";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-[var(--color-bg-warm)]">
      <div className="container mx-auto px-5">
        <SectionTitle
          title="Our Successful Students"
          subtitle="Our students are working around India & abroad. Here are some of our successfully placed students."
        />

        {/* Placement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placedStudents.map((student, i) => (
            <div
              key={student.id}
              className={`bg-white rounded-xl border border-[var(--color-border)] hover:shadow-lg transition-all p-6 text-center group cursor-pointer ${
                active === i ? "ring-2 ring-[var(--color-accent)] shadow-lg" : ""
              }`}
              onClick={() => setActive(i)}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-accent-light)] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <span>&#127891;</span>
              </div>
              <h4 className="font-bold text-[var(--color-primary)] text-base mb-1">
                {student.name}
              </h4>
              <p className="text-sm text-[var(--color-accent)] font-medium mb-2">
                Placed at
              </p>
              <p className="text-sm text-[var(--color-text-light)] leading-snug">
                {student.placedAt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
