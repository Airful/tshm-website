import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us - Admissions & Enquiries",
  description:
    "Contact Tarakeswar School of Hotel Management & Technical Foundation for admissions, course enquiries, and campus visits. Located at College Road, Padmapukur, Tarakeswar, Hooghly 712410. Call +91 96359 64348.",
  keywords:
    "TSHM contact, hotel management admission Tarakeswar, vocational training enquiry Hooghly, TSHM phone number, TSHM address, admission form Tarakeswar",
  openGraph: {
    title: "Contact TSHM & TF - Admissions & Enquiries",
    description:
      "Get in touch for admissions, course details, and campus visit. College Road, Padmapukur, Tarakeswar, Hooghly 712410.",
    url: "https://tshm.co.in/contact",
  },
  alternates: {
    canonical: "https://tshm.co.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
          >
            Contact Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get in touch with us for admissions, inquiries, or any other
            information
          </p>
        </div>
      </section>
      <ContactClient />
    </>
  );
}
