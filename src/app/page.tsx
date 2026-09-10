import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <WhoWeHelpSection />
        <HowWeWorkSection />
        <ExpertiseSection />
        <SpecialtiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
