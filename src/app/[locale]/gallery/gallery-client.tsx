"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, type GalleryImage } from "@/data/gallery";

export default function GalleryClient({ locale, t }: { locale: string; t: Record<string, unknown> }) {
  const filters = t.filters as Record<string, string>;
  const emptyText = t.empty as string;
  const closeLightboxLabel = t.closeLightbox as string;

  const filterList = [
    { key: "all", label: filters.all },
    { key: "campus", label: filters.campus },
    { key: "training", label: filters.training },
    { key: "events", label: filters.events },
    { key: "placement", label: filters.placement },
    { key: "activities", label: filters.activities },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  const getAlt = (img: GalleryImage) => (locale === "bn" && img.alt_bn) ? img.alt_bn : img.alt;

  return (
    <>
      <section className="py-4 bg-[var(--canvas)] border-b border-[var(--border)] sticky top-16 lg:top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex gap-3 justify-center flex-wrap">
            {filterList.map((f) => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === f.key ? "bg-[var(--accent)] text-white" : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"}`}>{f.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((img) => (
              <button key={img.id} onClick={() => setLightbox(img)} className="group relative overflow-hidden rounded-2xl aspect-square bg-[var(--elevated)] border border-[var(--border)] cursor-pointer hover:shadow-md transition-all duration-300">
                <Image src={img.src} alt={getAlt(img)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-white">{getAlt(img)}</span>
                  <span className="block text-xs text-white/70 capitalize mt-1">{img.category}</span>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-[var(--muted)] py-20">{emptyText}</p>}
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-[var(--foreground)]/95 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors" onClick={() => setLightbox(null)} aria-label={closeLightboxLabel}>&times;</button>
          <div className="max-w-4xl w-full relative aspect-video rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={getAlt(lightbox)} fill className="object-contain" sizes="90vw" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-lg font-semibold text-white">{getAlt(lightbox)}</p>
              <p className="text-sm text-white/70 capitalize">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
