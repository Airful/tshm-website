"use client";

import { useState, type FormEvent } from "react";
import SectionTitle from "@/components/common/SectionTitle";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, connect to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with us for admissions, inquiries, or any other
            information
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-[var(--color-border)]">
              <div className="w-16 h-16 bg-[var(--color-accent-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[var(--color-accent)]">&#9906;</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                Visit Us
              </h3>
              <p className="text-[var(--color-text-light)] text-sm">
                College Road, Padmapukur,
                <br />
                Tarakeswar, Hooghly, 712410
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-[var(--color-border)]">
              <div className="w-16 h-16 bg-[var(--color-accent-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[var(--color-accent)]">&#9742;</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                Call Us
              </h3>
              <a
                href="tel:+919635964348"
                className="text-[var(--color-text-light)] text-sm hover:text-[var(--color-accent)] transition-colors"
              >
                +91 96359 64348
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-[var(--color-border)]">
              <div className="w-16 h-16 bg-[var(--color-accent-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[var(--color-accent)]">&#9993;</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                Email Us
              </h3>
              <a
                href="mailto:tshm368@gmail.com"
                className="text-[var(--color-text-light)] text-sm hover:text-[var(--color-accent)] transition-colors"
              >
                tshm368@gmail.com
              </a>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle title="Send Us a Message" />
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6">
                  Thank you! Your message has been sent successfully. We&apos;ll
                  get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Interested Course
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-white"
                  >
                    <option value="">Select a course</option>
                    <option value="hotel-management">Hotel Management</option>
                    <option value="ac-technician">AC Technician Diploma</option>
                    <option value="spoken-english">Spoken English</option>
                    <option value="sales-marketing">
                      Sales & Marketing Management
                    </option>
                    <option value="beauty-academy">
                      Makeup & Beauty Academy
                    </option>
                    <option value="tailoring">
                      Tailoring & Fashion Design
                    </option>
                    <option value="career-counseling">
                      Career Counseling (DMIT)
                    </option>
                    <option value="online-degree">Online Degree Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <SectionTitle title="Find Us" />
              <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d88.02!3d22.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzI0LjAiTiA4OMKwMDEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TSHM Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
