import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TransitionQuote from "@/components/TransitionQuote";
import ProblemSection from "@/components/ProblemSection";
import SolutionsBento from "@/components/SolutionsBento";
import TechnologySection from "@/components/TechnologySection";
import HowItWorks from "@/components/HowItWorks";
import FleetSection from "@/components/FleetSection";
import IndustriesSection from "@/components/IndustriesSection";
import SafetySection from "@/components/SafetySection";
import WhySection from "@/components/WhySection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TransitionQuote/>
      <ProblemSection />
      <SolutionsBento />
      <TechnologySection />
      <HowItWorks />
      <FleetSection />
      <IndustriesSection />
      <SafetySection />
      <WhySection />
      <AboutSection />
      <CTASection />
      <Footer />
    </>
  );
}
