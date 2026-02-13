import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import Showcase from "@/components/Showcase";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import VereinSection from "@/components/VereinSection";
import FooterSection from "@/components/FooterSection";
import bgVideo from "@/assets/bg-video.mp4";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <EventsSection />
        <Showcase />
        <AboutSection />
        <TeamSection />
        <VereinSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
