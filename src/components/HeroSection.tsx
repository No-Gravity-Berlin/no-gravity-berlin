import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-metallic">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-green/5 blur-[100px]" />

      <div className="relative z-10 text-center px-6">
        {/* Floating logo */}
        <motion.div
          animate={{ y: [0, -12, -6, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-nasalization tracking-[0.15em] text-foreground text-glow-purple">
            NO GRAVITY
          </h1>
          <div className="mt-2 text-lg md:text-xl font-nasalization tracking-[0.3em] text-neon-green text-glow-green">
            BERLIN
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed italic"
        >
          Defy the norm, let go, feel like you're floating on sound.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="#events"
            className="inline-block px-8 py-3 border border-neon-purple/60 text-foreground font-nasalization text-sm tracking-widest uppercase
              hover:bg-neon-purple/10 transition-all duration-300 animate-neon-pulse rounded-sm"
          >
            Explore Events
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
