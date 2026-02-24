const stats = [
  { value: "100%", label: "Job Assistance" },
  { value: "9+", label: "Programs Offered" },
  { value: "500+", label: "Alumni Network" },
  { value: "15+", label: "Industry Partners" },
];

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--canvas)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1
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
