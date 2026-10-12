import HeroSection from "@/components/home/HeroSection";
import PromiseSection from "@/components/home/PromiseSection";
import SystemSection from "@/components/home/SystemSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F3" }}>
      <HeroSection />
      <PromiseSection />
      <SystemSection />
    </div>
  );
};

export default Index;