"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Tarakeswar School of\nHotel Management\n& Technical Foundation",
    subtitle:
      "100% Placement Opportunity | Stipend During Training | Our Students Are Working Around India & Abroad",
    cta: "Explore Courses",
    ctaLink: "/courses",
    bg: "from-[#1b2a4a] to-[#243656]",
  },
  {
    title: "Practical & Purposeful\nEducation with\nProfessional Training",
    subtitle:
      "Hotel Management | AC Technician | Beauty & Tailoring Academy | Spoken English | Career Counseling",
    cta: "View Programs",
    ctaLink: "/courses",
    bg: "from-[#162040] to-[#1b2a4a]",
  },
  {
    title: "Online Degree Programs\nFrom Recognized Universities",
    subtitle:
      "BA | B.COM | B.SC. | BBA | MBA | B.SC. in Hotel Management and many more",
    cta: "Apply Now",
    ctaLink: "/contact",
    bg: "from-[#243656] to-[#1b3a5c]",
  },
  {
    title: "Creating Entrepreneurs\n& Corporate Leaders",
    subtitle:
      "Industry Experienced Faculty & Trainers | DMIT Career Counseling | All-Round Development",
    cta: "Know More",
    ctaLink: "/about",
    bg: "from-[#1b2a4a] to-[#1b3a5c]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br ${slide.bg} ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Subtle dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-5 h-full flex items-center">
            <div
              className={`max-w-2xl transition-all duration-700 ${
                i === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Decorative badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                <span className="text-[var(--color-accent-light)] text-sm font-medium tracking-wide">
                  Est. Tarakeswar, West Bengal
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line mb-6">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href={slide.ctaLink}
                  className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded text-lg hover:bg-[var(--color-accent-hover)] transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/about"
                  className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? "w-8 bg-[var(--color-accent)]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </section>
  );
}
