import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import EightSection from "@/components/EightSection";
import NinethSection from "@/components/NinethSection";
import NewsletterPopup from "@/components/NewsletterPopup";
import TenthSection from "@/components/tenthsection";

export default function Home() {
  return (
    <div className="main-wrapper relative w-full overflow-hidden bg-[#0d1326] selection:bg-orange-500/30">
      <NewsletterPopup />
      <div id="top" />
      <HeroSection />
      <div id="about">
        <StorySection />
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <div id="services">
        <SixthSection />
      </div>
      <div id="case-studies">
        <SeventhSection />
      </div>
      <WorkWithUsSection />
      <EightSection />
      <div id="blog">
        <NinethSection />
      </div>
      <div id="contact">
        <TenthSection />
      </div>
    </div>
  );
}
