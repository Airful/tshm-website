interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-[3px] after:bg-[var(--color-accent)] ${
          light ? "text-white" : "text-[var(--color-primary)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-xl mx-auto mt-5 ${
            light ? "text-gray-300" : "text-[var(--color-text-light)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
