import SectionTitle from "@/components/common/SectionTitle";

const highlights = [
  {
    icon: "\uD83C\uDFE8",
    value: "Hotels & Resorts",
    description: "Students placed across premium hotels and resort chains",
  },
  {
    icon: "\uD83C\uDF0D",
    value: "Pan-India Placements",
    description: "Our alumni work in multiple states across India and abroad",
  },
  {
    icon: "\uD83E\uDD1D",
    value: "Corporate Partners",
    description: "Industry tie-ups for internships and job placements",
  },
  {
    icon: "\uD83C\uDFC6",
    value: "100% Job Assistance",
    description: "Every student receives dedicated placement support",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-[var(--color-bg-section)]">
      <div className="container mx-auto px-5">
        <SectionTitle
          title="Placement Highlights"
          subtitle="We ensure the best career opportunities for our students through strong industry partnerships"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div
              key={item.value}
              className="bg-white rounded-xl p-8 text-center border border-[var(--color-border)] hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                {item.value}
              </h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
