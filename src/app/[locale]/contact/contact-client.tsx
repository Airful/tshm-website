"use client";

import { useState, type FormEvent } from "react";
import SectionTitle from "@/components/common/SectionTitle";

interface ContactTranslations {
  cards: { visitUs: string; callUs: string; emailUs: string };
  address: string;
  phone: string;
  email: string;
  form: {
    title: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    interestedCourse: string;
    selectCourse: string;
    message: string;
    messagePlaceholder: string;
    sendMessage: string;
    successMessage: string;
    required: string;
    courseOptions: Record<string, string>;
  };
  map: { title: string };
}

export default function ContactClient({ t }: { t: Record<string, unknown> }) {
  const cards = t.cards as ContactTranslations["cards"];
  const form = t.form as ContactTranslations["form"];
  const map = t.map as ContactTranslations["map"];
  const address = t.address as string;
  const phone = t.phone as string;
  const email = t.email as string;

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const courseOptions = Object.entries(form.courseOptions);

  return (
    <>
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Visit */}
            <div className="bg-white rounded-2xl border border-[var(--border)] p-8 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">{cards.visitUs}</h3>
              <p className="text-sm text-[var(--body)]">{address}</p>
            </div>
            {/* Call */}
            <div className="bg-white rounded-2xl border border-[var(--border)] p-8 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">{cards.callUs}</h3>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sm text-[var(--body)] hover:text-[var(--accent)] transition-colors">{phone}</a>
            </div>
            {/* Email */}
            <div className="bg-white rounded-2xl border border-[var(--border)] p-8 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">{cards.emailUs}</h3>
              <a href={`mailto:${email}`} className="text-sm text-[var(--body)] hover:text-[var(--accent)] transition-colors">{email}</a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title={form.title} align="left" />
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6 text-sm">{form.successMessage}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{form.fullName} {form.required}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all" placeholder={form.fullNamePlaceholder} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{form.email} {form.required}</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all" placeholder={form.emailPlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{form.phone} {form.required}</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all" placeholder={form.phonePlaceholder} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{form.interestedCourse}</label>
                  <select value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all">
                    <option value="">{form.selectCourse}</option>
                    {courseOptions.map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{form.message}</label>
                  <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none transition-all" placeholder={form.messagePlaceholder} />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--accent)] text-white font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300">{form.sendMessage}</button>
              </form>
            </div>
            <div>
              <SectionTitle title={map.title} align="left" />
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] h-[500px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d88.02!3d22.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzI0LjAiTiA4OMKwMDEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="TSHM Location" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
