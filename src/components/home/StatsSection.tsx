interface StatsSectionProps {
  t: { value: string; label: string }[];
}

export default function StatsSection({ t }: StatsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--canvas)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < t.length - 1
                  ? "md:border-r md:border-[var(--border)]"
                  : ""
              }`}
            >
              <div className="text-4xl font-bold text-[var(--foreground)]">
                {stat.value}
              </div>
              <p className="text-sm text-[var(--muted)] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
