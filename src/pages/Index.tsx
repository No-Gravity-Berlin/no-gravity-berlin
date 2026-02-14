import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import Showcase from "@/components/Showcase";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import VereinSection from "@/components/VereinSection";
import FooterSection from "@/components/FooterSection";
import bgVideo from "@/assets/bg-video.mp4";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-90 brightness-[0.15] saturate-[0.6] contrast-[1.025]"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      {/* Fixed ambient glow effects - 4 moving head lights */}
      <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
        {/* Top Left - Green */}
        <motion.div
          animate={{ 
            x: [-300, 100, -150, 800, 1000, -200, -300],
            y: [-150, 200, -50, 600, 700, 300, -150]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: [0.43, 0.13, 0.23, 0.96],
            times: [0, 0.25, 0.35, 0.48, 0.53, 0.75, 1]
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-neon-green/[0.05] blur-[80px]"
        />
        
        {/* Top Right - Purple */}
        <motion.div
          animate={{ 
            x: [300, -100, 200, -900, -1100, 150, 300],
            y: [-150, -50, 100, 550, 800, 200, -150]
          }}
          transition={{ 
            duration: 21, 
            repeat: Infinity, 
            ease: [0.65, 0, 0.35, 1],
            times: [0, 0.22, 0.32, 0.45, 0.5, 0.7, 1]
          }}
          className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-neon-purple/[0.05] blur-[100px]"
        />
        
        {/* Bottom Right - Green */}
        <motion.div
          animate={{ 
            x: [300, 150, -50, -850, -1050, 200, 300],
            y: [150, 50, -200, -550, -750, -100, 150]
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: [0.22, 0.61, 0.36, 1],
            times: [0, 0.28, 0.38, 0.52, 0.57, 0.78, 1]
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-green/[0.05] blur-[80px]"
        />
        
        {/* Bottom Left - Purple */}
        <motion.div
          animate={{ 
            x: [-300, -150, 50, 950, 1100, -100, -300],
            y: [150, -100, 50, -600, -800, 100, 150]
          }}
          transition={{ 
            duration: 24, 
            repeat: Infinity, 
            ease: [0.83, 0, 0.17, 1],
            times: [0, 0.26, 0.36, 0.5, 0.55, 0.77, 1]
          }}
          className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-neon-purple/[0.05] blur-[100px]"
        />
      </div>
      
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
