"use client";

import { useState } from "react";
import { galleryImages, type GalleryImage } from "@/data/gallery";

const filters = [
  { key: "all", label: "All" },
  { key: "campus", label: "Campus" },
  { key: "training", label: "Training" },
  { key: "events", label: "Events" },
  { key: "placement", label: "Placement" },
  { key: "activities", label: "Activities" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

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

      {/* Filter Pills */}
      <section className="py-4 bg-[var(--canvas)] border-b border-[var(--border)] sticky top-16 lg:top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex gap-3 justify-center flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === f.key
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-[var(--elevated)] border border-[var(--border)] cursor-pointer hover:shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                  <span className="text-sm font-medium text-[var(--foreground)] text-center">
                    {img.alt}
                  </span>
                  <span className="text-xs text-[var(--muted)] capitalize px-3 py-1 border border-[var(--border)] rounded-full">
                    {img.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[var(--foreground)]/0 group-hover:bg-[var(--foreground)]/5 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--muted)] py-20">
              No images found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[var(--foreground)]/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div
            className="max-w-3xl w-full bg-[var(--elevated)] rounded-2xl aspect-video flex items-center justify-center border border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center p-8">
              <p className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {lightbox.alt}
              </p>
              <p className="text-sm text-[var(--muted)] capitalize">
                {lightbox.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
