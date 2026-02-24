"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Our Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/upcoming", label: "Upcoming" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 lg:h-20 flex items-center border-b border-[var(--border)] ${
        isScrolled
          ? "bg-[var(--canvas)]/95 backdrop-blur-md shadow-sm"
          : "bg-[var(--canvas)]/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-sm" />
          <div>
            <h1 className="text-xl font-bold text-[var(--foreground)] leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              TSHM
            </h1>
            <p className="text-[10px] text-[var(--muted)] leading-tight mt-0.5">
              Tarakeswar School of Hotel Management
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)] hover:text-[var(--accent)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm"
            >
              Apply Now
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-[var(--foreground)]"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[var(--canvas)] border-b border-[var(--border)] overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-[480px] shadow-sm" : "max-h-0"
        }`}
      >
        <ul className="max-w-6xl mx-auto px-6 sm:px-8 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                    : "text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              className="block text-center px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 text-sm"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
