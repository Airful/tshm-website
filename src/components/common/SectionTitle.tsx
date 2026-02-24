interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      {overline && (
        <p
          className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)] mb-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {overline}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--foreground)]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[var(--body)] leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
