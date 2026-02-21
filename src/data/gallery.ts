export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "campus" | "events" | "training" | "placement" | "activities";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/gallery-1.jpg", alt: "Campus Life", category: "campus" },
  { id: "g2", src: "/images/gallery/gallery-2.jpg", alt: "Training Session", category: "training" },
  { id: "g3", src: "/images/gallery/gallery-3.jpg", alt: "Annual Event", category: "events" },
  { id: "g4", src: "/images/gallery/gallery-4.jpg", alt: "Practical Training", category: "training" },
  { id: "g5", src: "/images/gallery/gallery-5.jpg", alt: "Placement Drive", category: "placement" },
  { id: "g6", src: "/images/gallery/gallery-6.jpg", alt: "Student Activities", category: "activities" },
  { id: "g7", src: "/images/gallery/gallery-7.jpg", alt: "Campus Tour", category: "campus" },
  { id: "g8", src: "/images/gallery/gallery-8.jpg", alt: "Workshop", category: "training" },
  { id: "g9", src: "/images/gallery/gallery-9.jpg", alt: "Cultural Event", category: "events" },
  { id: "g10", src: "/images/gallery/gallery-10.jpg", alt: "Lab Session", category: "training" },
  { id: "g11", src: "/images/gallery/gallery-11.jpg", alt: "Industry Visit", category: "activities" },
  { id: "g12", src: "/images/gallery/gallery-12.jpg", alt: "Graduation Day", category: "events" },
];
