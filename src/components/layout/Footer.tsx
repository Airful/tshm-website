import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Our Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/upcoming", label: "Upcoming Projects" },
];

const courseLinks = [
  { href: "/courses#hotel-management", label: "Hotel Management" },
  { href: "/courses#ac-technician", label: "AC Technician Diploma" },
  { href: "/courses#spoken-english", label: "Spoken English" },
  { href: "/courses#beauty-tailoring-academy", label: "Beauty & Tailoring" },
  { href: "/courses#online-degrees", label: "Online Degrees" },
  { href: "/courses#career-counseling", label: "Career Counseling" },
];

export default function Footer() {
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
              Tarakeswar School of Hotel Management &amp; Technical Foundation
              &mdash; providing a positive, vibrant and inspiring culture where
              students are encouraged to succeed.
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
              Quick Links
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
              Our Courses
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              Contact
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
            &copy; {new Date().getFullYear()} Tarakeswar School of Hotel
            Management &amp; Technical Foundation. All rights reserved.
          </p>
          <p>Developed with care</p>
        </div>
      </div>
    </footer>
  );
}
