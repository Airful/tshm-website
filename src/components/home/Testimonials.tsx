"use client";

import { useState } from "react";
import { placedStudents } from "@/data/team";
import SectionTitle from "@/components/common/SectionTitle";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const half = Math.ceil(placedStudents.length / 2);
  const firstRow = placedStudents.slice(0, half);
  const secondRow = placedStudents.slice(half);

  return (
    <section className="py-20">
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
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center group cursor-pointer ${
                active === i ? "ring-2 ring-[var(--color-accent)] shadow-xl" : ""
              }`}
              onClick={() => setActive(i)}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                {student.name.split(" ").map((n) => n[0]).join("")}
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
