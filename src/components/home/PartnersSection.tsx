import SectionTitle from "@/components/common/SectionTitle";

interface PartnersSectionProps {
  t: {
    overline: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
}

export default function PartnersSection({ t }: PartnersSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--elevated)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionTitle
          overline={t.overline}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item) => (
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
