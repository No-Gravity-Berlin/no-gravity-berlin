import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-purple/3 blur-[150px]" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-nasalization mb-8 text-glow-purple">
            About
          </h2>

          <div
            className="w-20 h-px mx-auto mb-10 relative bg-foreground"
            style={{ boxShadow: '0 0 6px 1.5px #a855f7, 0 0 1px 0 #a855f7' }}
          />

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            <>
              We are a platform for young, intercultural, and neurodiverse artists to develop their talents and collectively push the boundaries of electronic music as an universal language that connects cultures and generations.
            </>
          </p>

          <h3 className="text-2xl md:text-3xl font-nasalization mb-6 text-glow-purple">
            The Vision
          </h3>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            <>
              We respect everything — except the law of gravity! <br /> Defy the norm, and feel like you're floating on sound. <br /> We combine innovative electronic sounds, astral visuals,<br /> and creative freedom.
            </>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
