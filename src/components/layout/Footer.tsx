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
  { href: "/courses#ac-technician", label: "Diploma in AC Technician" },
  { href: "/courses#spoken-english", label: "Spoken English" },
  { href: "/courses#beauty-tailoring-academy", label: "Beauty & Tailoring Academy" },
  { href: "/courses#online-degrees", label: "Online Degree Programs" },
  { href: "/courses#career-counseling", label: "Career Counseling" },
];

const socialLinks = [
  { label: "Facebook", icon: "\uD83C\uDF10", href: "#facebook" },
  { label: "Instagram", icon: "\uD83D\uDCF7", href: "#instagram" },
  { label: "YouTube", icon: "\u25B6", href: "#youtube" },
  { label: "LinkedIn", icon: "\uD83D\uDCBC", href: "#linkedin" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center font-bold text-xs">
                TSHM
              </div>
              <h3 className="text-lg font-bold">TSHM & TF</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Tarakeswar School of Hotel Management & Technical Foundation -
              Providing a positive, vibrant and inspiring culture where students
              are encouraged to succeed as an active and supportive member of
              society.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-[var(--color-accent)] transition-colors"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--color-accent)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[var(--color-accent)]">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--color-accent)]">
              Our Courses
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[var(--color-accent)]">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--color-accent)]">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg mt-0.5">&#9906;</span>
                <span>
                  College Road, Padmapukur,
                  <br />
                  Tarakeswar, Hooghly, 712410
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg">&#9742;</span>
                <a href="tel:+919635964348" className="hover:text-[var(--color-accent)] transition-colors">
                  +91 96359 64348
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg">&#9993;</span>
                <a
                  href="mailto:tshm368@gmail.com"
                  className="hover:text-[var(--color-accent)] transition-colors"
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
        <div className="container mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>
            Copyright &copy; {new Date().getFullYear()} TARAKESWAR SCHOOL OF
            HOTEL MANAGEMENT & TECHNICAL FOUNDATION. All rights reserved.
          </p>
          <p>
            Developed with care
          </p>
        </div>
      </div>
    </footer>
  );
}
