import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import StatsSection from "@/components/home/StatsSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Testimonials from "@/components/home/Testimonials";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "TSHM & TF - Best Vocational Training Institute in Tarakeswar, Hooghly",
  description:
    "Tarakeswar School of Hotel Management & Technical Foundation — the leading vocational training institute in Tarakeswar, Hooghly, West Bengal. Hotel Management, AC Technician, Beauty Academy, Spoken English, Online Degrees. 100% job assistance, stipend during training. No entrance exam required. Admissions open.",
  keywords:
    "hotel management course Tarakeswar, TSHM Tarakeswar, vocational training Hooghly, hotel management West Bengal, AC technician course near me, beauty academy Tarakeswar, spoken english course Hooghly, diploma after 10th West Bengal, no entrance exam hotel management, best hotel management institute Hooghly",
  openGraph: {
    title: "TSHM & TF - Best Vocational Training Institute in Tarakeswar",
    description:
      "Hotel Management, AC Technician, Beauty Academy & more. 100% job assistance, stipend during training. Our students work across India & abroad.",
    url: "https://tshm.co.in",
  },
  alternates: {
    canonical: "https://tshm.co.in",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <FeaturedCourses />
      <Testimonials />
      <PartnersSection />
      <CTASection />
    </>
  );
}
