import type { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery - Campus, Events & Student Life",
  description:
    "Explore TSHM & TF's photo gallery — campus life, training sessions, cultural events, student activities, and placement celebrations at Tarakeswar School of Hotel Management.",
  keywords:
    "TSHM gallery, Tarakeswar school photos, hotel management training photos, campus life Hooghly, student activities TSHM",
  openGraph: {
    title: "Gallery - TSHM & TF Campus Life",
    description:
      "A glimpse into life at TSHM — our campus, events, training, and student activities in Tarakeswar.",
    url: "https://tshm.co.in/gallery",
  },
  alternates: {
    canonical: "https://tshm.co.in/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[var(--foreground)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: "1.15" }}
          >
            Gallery
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A glimpse into life at TSHM &mdash; our campus, events, training,
            and student activities
          </p>
        </div>
      </section>
      <GalleryClient />
    </>
  );
}
