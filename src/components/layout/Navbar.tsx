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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-primary)] shadow-lg py-2"
          : "bg-[var(--color-primary)]/95 py-4"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-tight leading-none">
            <span className="text-center">TSHM</span>
          </div>
          <div className="text-white">
            <h1 className="text-lg font-bold leading-tight">TSHM</h1>
            <p className="text-[10px] text-gray-300 leading-tight">
              Tarakeswar School of Hotel Management
              <br />& Technical Foundation
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-accent)]"
                    : "text-white hover:text-[var(--color-accent)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[var(--color-accent)] text-white rounded text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Apply Now
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform ${
                isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform ${
                isMobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-5 pb-5 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded text-sm font-medium ${
                  pathname === link.href
                    ? "text-[var(--color-accent)] bg-white/10"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="block text-center mt-2 px-5 py-3 bg-[var(--color-accent)] text-white rounded text-sm font-semibold"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
