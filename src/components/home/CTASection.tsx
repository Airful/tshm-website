import Link from "next/link";

interface CTASectionProps {
  locale: string;
  t: {
    overline: string;
    title: string;
    subtitle: string;
    applyNow: string;
    browseCourses: string;
  };
}

export default function CTASection({ locale, t }: CTASectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)] mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.overline}
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
        >
          {t.title}
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--foreground)] font-medium rounded-full hover:bg-white/90 transition-all duration-300"
          >
            {t.applyNow}
          </Link>
          <Link
            href={`/${locale}/courses`}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-full hover:border-white/60 transition-all duration-300"
          >
            {t.browseCourses}
          </Link>
        </div>
      </div>
    </section>
  );
}
