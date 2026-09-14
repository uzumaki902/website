import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import BioSection from "@/components/BioSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import HonoringSection from "@/components/HonoringSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import OfficeSection from "@/components/OfficeSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <BioSection />
        <WhoWeHelpSection />
        <QuoteBanner />
        <ExpertiseSection />
        <HowWeWorkSection />
        <HonoringSection />
        <SpecialtiesSection />
      <OfficeSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
