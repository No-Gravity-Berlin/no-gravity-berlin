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
          <h2 className="text-4xl md:text-5xl font-nasalization mb-8 text-glow-green">
            About
          </h2>

          <div className="w-16 h-px bg-neon-green/40 mx-auto mb-10" />

          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            A platform for young, intercultural, and neurodiverse artists pushing the boundaries of electronic music.
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Born in Berlin's underground, No Gravity creates spaces where sound transcends gravity.
            We champion emerging talent, foster community across cultures, and believe electronic music
            is a universal language that connects us all.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
