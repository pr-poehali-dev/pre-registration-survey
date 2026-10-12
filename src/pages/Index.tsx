import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import SystemSection from "@/components/home/SystemSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F3" }}>
      <HeroSection />
      <VisionSection />
      <SystemSection />
    </div>
  );
};

export default Index;