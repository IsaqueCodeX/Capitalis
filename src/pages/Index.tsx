import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PerformanceChart } from "@/components/PerformanceChart";
import { InvestmentSimulator } from "@/components/InvestmentSimulator";
import { BentoServices } from "@/components/BentoServices";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PerformanceChart />
      <InvestmentSimulator />
      <BentoServices />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
