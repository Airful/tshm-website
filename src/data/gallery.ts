export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  alt_bn?: string;
  category: "campus" | "events" | "training" | "placement" | "activities";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/gallery-1.jpg", alt: "Campus Life", alt_bn: "ক্যাম্পাস জীবন", category: "campus" },
  { id: "g2", src: "/images/gallery/gallery-2.jpg", alt: "Training Session", alt_bn: "প্রশিক্ষণ সেশন", category: "training" },
  { id: "g3", src: "/images/gallery/gallery-3.jpg", alt: "Annual Event", alt_bn: "বার্ষিক অনুষ্ঠান", category: "events" },
  { id: "g4", src: "/images/gallery/gallery-4.jpg", alt: "Practical Training", alt_bn: "ব্যবহারিক প্রশিক্ষণ", category: "training" },
  { id: "g5", src: "/images/gallery/gallery-5.jpg", alt: "Placement Drive", alt_bn: "প্লেসমেন্ট ড্রাইভ", category: "placement" },
  { id: "g6", src: "/images/gallery/gallery-6.jpg", alt: "Student Activities", alt_bn: "শিক্ষার্থীদের কার্যক্রম", category: "activities" },
  { id: "g7", src: "/images/gallery/gallery-7.jpg", alt: "Campus Tour", alt_bn: "ক্যাম্পাস ভ্রমণ", category: "campus" },
  { id: "g8", src: "/images/gallery/gallery-8.jpg", alt: "Workshop", alt_bn: "কর্মশালা", category: "training" },
  { id: "g9", src: "/images/gallery/gallery-9.jpg", alt: "Cultural Event", alt_bn: "সাংস্কৃতিক অনুষ্ঠান", category: "events" },
  { id: "g10", src: "/images/gallery/gallery-10.jpg", alt: "Lab Session", alt_bn: "ল্যাব সেশন", category: "training" },
  { id: "g11", src: "/images/gallery/gallery-11.jpg", alt: "Industry Visit", alt_bn: "শিল্প পরিদর্শন", category: "activities" },
  { id: "g12", src: "/images/gallery/gallery-12.jpg", alt: "Graduation Day", alt_bn: "স্নাতক দিবস", category: "events" },
];
