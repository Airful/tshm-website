export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  alt_bn?: string;
  category: "campus" | "events" | "training" | "placement" | "activities" | "associate";
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
  { id: "g13", src: "/images/gallery/gallery-events.jpeg", alt: "Gallery Events", alt_bn: "গ্যালারি ইভেন্টস", category: "events" },
  { id: "g14", src: "/images/gallery/gallery-campus.jpeg", alt: "Gallery Campus", alt_bn: "গ্যালারি ক্যাম্পাস", category: "campus" },
  { id: "g9", src: "/images/gallery/gallery-9.jpg", alt: "Apollo Multispeciality Hospitals", alt_bn: "অ্যাপোলো মাল্টিস্পেশালিটি হসপিটালস", category: "associate" },
  { id: "g10", src: "/images/gallery/gallery-10.jpg", alt: "Daikin", alt_bn: "ডাইকিন", category: "associate" },
  { id: "g11", src: "/images/gallery/gallery-11.jpg", alt: "Godrej", alt_bn: "গোদরেজ", category: "associate" },
  { id: "g12", src: "/images/gallery/gallery-12.jpg", alt: "Pride Hotels & Resorts", alt_bn: "প্রাইড হোটেলস অ্যান্ড রিসোর্টস", category: "associate" },
  { id: "a1", src: "/images/gallery/Assosiate Group/Asso 1.jpeg", alt: "Accor", alt_bn: "অ্যাকর", category: "associate" },
  { id: "a2", src: "/images/gallery/Assosiate Group/Asso 2.jpeg", alt: "The Aananda Imperial", alt_bn: "দ্য আনন্দ ইম্পেরিয়াল", category: "associate" },
  { id: "a3", src: "/images/gallery/Assosiate Group/Asso3.png", alt: "Hotel Celebration Raipur", alt_bn: "হোটেল সেলিব্রেশন রায়পুর", category: "associate" },
  { id: "a4", src: "/images/gallery/Assosiate Group/Asso4.png", alt: "Club Mahindra", alt_bn: "ক্লাব মাহিন্দ্রা", category: "associate" },
  { id: "a5", src: "/images/gallery/Assosiate Group/Asso5.png", alt: "The Fern Hotels & Resorts", alt_bn: "দ্য ফার্ন হোটেলস অ্যান্ড রিসোর্টস", category: "associate" },
  { id: "a6", src: "/images/gallery/Assosiate Group/Asso6.jpeg", alt: "Jajati Courtyard", alt_bn: "জাজাতি কোর্টইয়ার্ড", category: "associate" },
  { id: "a7", src: "/images/gallery/Assosiate Group/Asso7.png", alt: "Lemon Tree Hotels", alt_bn: "লেমন ট্রি হোটেলস", category: "associate" },
  { id: "a8", src: "/images/gallery/Assosiate Group/Asso8.jpeg", alt: "Radisson Hotels & Resorts", alt_bn: "র‍্যাডিসন হোটেলস অ্যান্ড রিসোর্টস", category: "associate" },
  { id: "a9", src: "/images/gallery/Assosiate Group/Asso9.png", alt: "Sterling Hotel", alt_bn: "স্টার্লিং হোটেল", category: "associate" },
  { id: "a10", src: "/images/gallery/Assosiate Group/Asso10.png", alt: "Taj Hotels Resorts and Palaces", alt_bn: "তাজ হোটেলস রিসোর্টস অ্যান্ড প্যালেসেস", category: "associate" },
  { id: "a11", src: "/images/gallery/Assosiate Group/Asso11.png", alt: "Icon Hotels", alt_bn: "আইকন হোটেলস", category: "associate" },
  { id: "a12", src: "/images/gallery/Assosiate Group/Asso12.png", alt: "The Deltin", alt_bn: "দ্য ডেল্টিন", category: "associate" },
  { id: "a13", src: "/images/gallery/Assosiate Group/Asso13.png", alt: "Sayaji Indore", alt_bn: "সায়াজি ইন্দোর", category: "associate" },
  { id: "a14", src: "/images/gallery/Assosiate Group/Asso14.jpeg", alt: "Grand Mercure Surya Palace", alt_bn: "গ্র্যান্ড মার্কিউর সূর্য প্যালেস", category: "associate" },
  { id: "a15", src: "/images/gallery/Assosiate Group/HOTEL LORDS.jpg.jpeg", alt: "Hotel Lords", alt_bn: "হোটেল লর্ডস", category: "associate" },
];
