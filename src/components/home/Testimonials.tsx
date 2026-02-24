import Image from "next/image";
import { placedStudents } from "@/data/team";
import SectionTitle from "@/components/common/SectionTitle";

export default function Testimonials() {
  const featured = placedStudents.slice(0, 4);
  const remaining = placedStudents.slice(4);

  return (
    <section className="py-20 lg:py-28 bg-[var(--canvas)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionTitle
          overline="PLACEMENT SUCCESS"
          title="Our Students, Their Stories"
          subtitle="Our students are working at premier hotels and hospitality brands across India and abroad"
        />

        {/* Featured 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-[var(--border)] p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-[var(--border)]">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1">
                {student.name}
              </h4>
              <p className="text-xs text-[var(--muted)] mb-1">Placed at</p>
              <p className="text-sm text-[var(--body)] leading-snug">
                {student.placedAt}
              </p>
            </div>
          ))}
        </div>

        {/* Remaining as inline list */}
        {remaining.length > 0 && (
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {remaining.map((student, i) => (
                <span key={student.id} className="flex items-center gap-1">
                  <span className="text-sm text-[var(--foreground)] font-medium">
                    {student.name}
                  </span>
                  <span className="text-sm text-[var(--muted)]">&mdash;</span>
                  <span className="text-sm text-[var(--body)]">
                    {student.placedAt}
                  </span>
                  {i < remaining.length - 1 && (
                    <span className="ml-5 w-1 h-1 rounded-full bg-[var(--border)] hidden sm:inline-block" />
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
