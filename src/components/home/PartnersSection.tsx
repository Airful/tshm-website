import SectionTitle from "@/components/common/SectionTitle";

export default function PartnersSection() {
  const partnerCount = 12;

  return (
    <section className="py-20 bg-[var(--color-bg-section)]">
      <div className="container mx-auto px-5">
        <SectionTitle
          title="Our Placement Partners"
          subtitle="We collaborate with leading companies to ensure the best career opportunities for our students"
        />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({ length: partnerCount }, (_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            >
              <div className="text-center text-gray-400 text-xs font-medium">
                Partner {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
