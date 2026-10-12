import HeroSection from "@/components/home/HeroSection";
import SystemSection from "@/components/home/SystemSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F3" }}>
      <HeroSection />
      <SystemSection />
    </div>
  );
};

export default Index;