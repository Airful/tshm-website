import Link from "next/link";

interface FooterProps {
  locale: string;
  nav: Record<string, string>;
  footer: Record<string, string>;
}

const courseLinks = [
  { href: "/courses/hotel-management", label: "Hotel Management" },
  { href: "/courses/ac-technician", label: "AC Technician Diploma" },
  { href: "/courses/spoken-english", label: "Spoken English" },
  { href: "/courses/beauty-tailoring-academy", label: "Beauty & Tailoring" },
  { href: "/courses/online-degrees", label: "Online Degrees" },
  { href: "/courses/career-counseling", label: "Career Counseling" },
];

export default function Footer({ locale, nav, footer }: FooterProps) {
  const quickLinks = [
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/courses`, label: nav.courses },
    { href: `/${locale}/gallery`, label: nav.gallery },
    { href: `/${locale}/contact`, label: nav.contact },
    { href: `/${locale}/faq`, label: nav.faq },
    { href: `/${locale}/upcoming`, label: nav.upcoming },
  ];

  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <h3
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
            >
              TSHM &amp; TF
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-4 text-sm text-white/50">
              <a href="#facebook" className="hover:text-white/90 transition-colors">
                Facebook
              </a>
              <a href="#instagram" className="hover:text-white/90 transition-colors">
                Instagram
              </a>
              <a href="#youtube" className="hover:text-white/90 transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              {footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              {footer.ourCourses}
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-white/60 text-sm hover:text-white/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              {footer.contact}
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="leading-relaxed">
                College Road, Padmapukur,
                <br />
                Tarakeswar, Hooghly, 712410
              </li>
              <li>
                <a
                  href="tel:+919635964348"
                  className="hover:text-white/90 transition-colors"
                >
                  +91 96359 64348
                </a>
              </li>
              <li>
                <a
                  href="mailto:tshm368@gmail.com"
                  className="hover:text-white/90 transition-colors"
                >
                  tshm368@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <p>{footer.developedWith}</p>
        </div>
      </div>
    </footer>
  );
}
