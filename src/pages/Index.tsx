import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import VereinSection from "@/components/VereinSection";
import FooterSection from "@/components/FooterSection";
import bgVideo from "@/assets/bg-video.mp4";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed background video with filters */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'brightness(0.45) saturate(0.7) contrast(0.85) blur(1.5px)',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Ambient vignette glow on edges */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px 60px hsl(240 20% 4% / 0.85), inset 0 0 300px 120px hsl(240 20% 4% / 0.5)',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <EventsSection />
        <AboutSection />
        <TeamSection />
        <VereinSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
