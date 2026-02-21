import HeroSlider from "@/components/home/HeroSlider";
import StatsSection from "@/components/home/StatsSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Testimonials from "@/components/home/Testimonials";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

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
