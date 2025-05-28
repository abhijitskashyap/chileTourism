import HeroSection from "@/components/sections/hero-section";
import DestinationsSection from "@/components/sections/destinations-section";
import InteractiveMapSection from "@/components/sections/interactive-map-section";
import CultureSection from "@/components/sections/culture-section";
import TravelTipsSection from "@/components/sections/travel-tips-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DestinationsSection />
      <InteractiveMapSection />
      <CultureSection />
      <TravelTipsSection />
    </div>
  );
}