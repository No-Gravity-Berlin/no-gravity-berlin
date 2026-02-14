import { motion } from "framer-motion";
import { Instagram, Music2, Youtube } from "lucide-react";
import logo from "@/assets/nogravity_logo_green.png";

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

const bandcampItem = {
  label: "Bandcamp",
  href: "#",
  icon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
    </svg>
  ),
};

const socials: { label: string; href: string; icon: IconComponent }[] = [
  { label: "Instagram", href: "https://www.instagram.com/nogravityberlin/", icon: (props) => <Instagram {...props} /> },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nogravityberlin",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15Z" />
      </svg>
    ),
  },
  { label: "YouTube", href: "https://www.youtube.com/@nogravityberlin", icon: (props) => <Youtube {...props} /> },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/nogravityberlin",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35-.34 0-.67.05-.98.15A5.15 5.15 0 0 0 14.18 6c-1.05 0-2.03.32-2.84.87h.22ZM9.56 9.75V17h1V9.34a5.04 5.04 0 0 0-1 .41ZM7.56 11.5V17h1v-5.96c-.35.13-.68.29-1 .46ZM5.56 17h1v-4.5a7.7 7.7 0 0 0-1 .69V17ZM3.56 17h1v-2.84c-.36.36-.69.76-1 1.19V17ZM1.56 17h1v-.56a10.3 10.3 0 0 0-1 .56Z" />
      </svg>
    ),
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6">
        {/* Floating logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={logo}
            alt="No Gravity Berlin"
            animate={{ y: [0, -12, -6, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-5xl mx-auto mb-8 brightness-70 drop-shadow-[0_0_60px_rgba(168,85,247,0.4)]"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.0, duration: 0.05 }}
          className="max-w-2xl mx-auto text-foreground/85 text-lg md:text-xl leading-relaxed italic font-nasalization"
        >
          Defy the norm of gravity, feel like you're floating on sound.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mt-28 flex flex-wrap justify-center gap-6"
        >
          <a
            href="#events"
            className="inline-flex justify-center min-w-[180px] px-8 py-3 border border-neon-purple/40 bg-neon-purple/10 text-foreground font-nasalization text-sm tracking-widest uppercase
              hover:bg-neon-purple/20 transition-all duration-300 rounded-sm"
          >
            EVENTS
          </a>
          <a
            href="#showcase"
            className="inline-flex justify-center min-w-[180px] px-8 py-3 border border-neon-purple/40 bg-neon-purple/10 text-foreground font-nasalization text-sm tracking-widest uppercase
              hover:bg-neon-purple/20 transition-all duration-300 rounded-sm"
          >
            SHOWCASE
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-full border border-neon-purple/40 bg-neon-purple/10 text-foreground hover:border-neon-purple/70 hover:bg-neon-purple/20 transition-all duration-300 flex items-center justify-center"
            >
              <s.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
