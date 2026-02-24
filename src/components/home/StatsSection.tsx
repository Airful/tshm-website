"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: "\u2705", value: 100, suffix: "%", label: "Job Assistance" },
  { icon: "\uD83D\uDCDA", value: 9, suffix: "+", label: "Programs Offered" },
  { icon: "\uD83C\uDF93", value: 500, suffix: "+", label: "Alumni Network" },
  { icon: "\uD83E\uDD1D", value: 15, suffix: "+", label: "Industry Partners" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[var(--color-primary)]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
