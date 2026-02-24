import Link from "next/link";

const stats = [
  "100% Job Assistance",
  "9+ Programs",
  "500+ Alumni",
  "12+ Faculty",
];

export default function HeroSlider() {
  return (
    <section className="relative bg-[var(--foreground)] min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
      {/* Subtle diagonal decorative line */}
      <div
        className="absolute top-0 right-0 w-[1px] h-[200%] bg-white/5 origin-top-right"
        style={{ transform: "rotate(-30deg)", transformOrigin: "top right" }}
      />
      <div
        className="absolute top-[20%] right-[15%] w-[1px] h-[200%] bg-white/[0.03] origin-top-right"
        style={{ transform: "rotate(-30deg)", transformOrigin: "top right" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Overline */}
          <p
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)] mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Practical &amp; Purposeful Education
          </p>

          {/* Main heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Where Every Student
            <br />
            Finds Their Path
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Tarakeswar School of Hotel Management &amp; Technical Foundation
            &mdash; building careers through hands-on training, industry
            mentorship, and 100% placement support.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--foreground)] font-medium rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Explore Courses
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-0.5">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-full hover:border-white/60 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stat pills at bottom */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full pb-12 lg:pb-16">
        <div className="flex items-center gap-0 flex-wrap">
          {stats.map((stat, i) => (
            <span key={stat} className="flex items-center">
              <span className="text-sm text-white/50 font-medium whitespace-nowrap">
                {stat}
              </span>
              {i < stats.length - 1 && (
                <span className="mx-4 lg:mx-6 w-px h-4 bg-white/20 hidden sm:block" />
              )}
              {i < stats.length - 1 && (
                <span className="mx-3 text-white/20 sm:hidden">/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Angled white SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
          fill="var(--canvas)"
        >
          <polygon points="0,60 1440,60 1440,0" />
        </svg>
      </div>
    </section>
  );
}
