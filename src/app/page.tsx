import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import RoomsSection from "@/components/sections/RoomsSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import RestaurantSection from "@/components/sections/RestaurantSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ParallaxSection />
      <RoomsSection />
      <AmenitiesSection />
      <RestaurantSection />
      {/* <GallerySection /> */}
      <Footer />
    </>
  );
}
