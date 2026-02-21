import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-accent)] to-[#c0392b] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-5 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Career Journey?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join TSHM & TF today. We provide practical and purposeful education
          with professional training, 100% job assistance, and stipend during
          training. Your future starts here.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[var(--color-accent)] font-bold rounded hover:bg-gray-100 transition-colors text-lg"
          >
            Apply Now
          </Link>
          <Link
            href="/courses"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-[var(--color-accent)] transition-colors text-lg"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
