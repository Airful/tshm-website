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

const categoryIcons: Record<string, string> = {
  campus: "\uD83C\uDFEB",
  training: "\uD83D\uDCDA",
  events: "\uD83C\uDF89",
  placement: "\uD83C\uDF93",
  activities: "\u26BD",
};

const categoryColors: Record<string, string> = {
  campus: "from-[#1b2a4a]/10 to-[#243656]/10",
  training: "from-[#c0872a]/10 to-[#a8741f]/10",
  events: "from-[#16a34a]/10 to-[#15803d]/10",
  placement: "from-[#1b2a4a]/10 to-[#c0872a]/10",
  activities: "from-[#243656]/10 to-[#1b2a4a]/10",
};

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
                    : "border border-gray-200 text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className={`group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br ${
                  categoryColors[img.category] || "from-gray-100 to-gray-200"
                } border border-[var(--color-border)] cursor-pointer hover:shadow-lg transition-shadow`}
              >
                {/* Subtle pattern background */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="text-5xl group-hover:scale-110 transition-transform">
                    {categoryIcons[img.category] || "\uD83D\uDCF7"}
                  </span>
                  <span className="text-[var(--color-text)] text-sm font-medium px-3 text-center">
                    {img.alt}
                  </span>
                  <span className="text-[var(--color-text-light)] text-xs capitalize">
                    {img.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/5 transition-colors" />
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
            className={`max-w-4xl w-full bg-gradient-to-br ${
              categoryColors[lightbox.category] || "from-gray-100 to-gray-200"
            } rounded-2xl aspect-video flex items-center justify-center border border-white/10`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <span className="text-8xl">
                {categoryIcons[lightbox.category] || "\uD83D\uDCF7"}
              </span>
              <p className="text-[var(--color-text)] mt-4 text-lg font-medium">{lightbox.alt}</p>
              <p className="text-[var(--color-text-light)] text-sm capitalize mt-1">
                {lightbox.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
