import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import HonoringSection from "@/components/HonoringSection";
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
        <QuoteBanner />
        <ExpertiseSection />
        <HowWeWorkSection />
        <HonoringSection />
        <SpecialtiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
