"use client";

import { useState } from "react";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import SectionTitle from "@/components/common/SectionTitle";

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
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A glimpse into life at TSHM - our campus, events, training, and
            student activities
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-b sticky top-[72px] z-30">
        <div className="container mx-auto px-5">
          <div className="flex gap-3 justify-center flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? "bg-[var(--color-accent)] text-white"
                    : "border border-gray-200 text-[var(--color-text)] hover:border-[var(--color-accent)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-6xl font-bold group-hover:text-white/20 transition-colors">
                    {img.alt[0]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                    <p className="text-white/60 text-xs capitalize">
                      {img.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-text-light)] py-20">
              No images found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div
            className="max-w-4xl w-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl aspect-video flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <span className="text-white/20 text-8xl font-bold">
                {lightbox.alt[0]}
              </span>
              <p className="text-white mt-4 text-lg">{lightbox.alt}</p>
              <p className="text-white/50 text-sm capitalize mt-1">
                {lightbox.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
