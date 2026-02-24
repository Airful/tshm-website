import SectionTitle from "@/components/common/SectionTitle";

const valueProps = [
  {
    title: "100% Job Assistance",
    description: "Every graduate receives dedicated placement support to launch their career in hospitality and beyond.",
  },
  {
    title: "Stipend During Training",
    description: "Earn while you learn with stipend-supported industrial training at leading hotels and companies.",
  },
  {
    title: "Industry Faculty",
    description: "Learn from faculty drawn from top B-schools and the hospitality industry with real-world expertise.",
  },
  {
    title: "Career Counseling",
    description: "DMIT-based scientific career guidance helps students identify their innate strengths and ideal path.",
  },
  {
    title: "All-Round Development",
    description: "Physical, intellectual, and moral growth through discipline, creativity, and character building.",
  },
  {
    title: "Recognized Degrees",
    description: "Pursue BA, B.COM, BBA, MBA, B.SC. in Hotel Management and more from reputed universities online.",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--elevated)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionTitle
          overline="WHY TSHM"
          title="Built for Your Success"
          subtitle="We combine practical education with career support to ensure every student thrives"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-[var(--border)] border-t-2 border-t-[var(--accent)] p-8 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--body)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
