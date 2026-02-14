import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { X, Instagram, Music, Globe } from "lucide-react";

interface Member {
  name: string;
  role: string;
  bio?: string;
  socials?: { label: string; url: string; icon: "instagram" | "soundcloud" | "web" }[];
}

const teamMembers: Member[] = [
  { name: "Ayen", role: "Community Manager", bio: "Visionary behind No Gravity Berlin. Pushing the boundaries of underground electronic music culture since day one.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
  { name: "Marvin", role: "Finance Manager", bio: "Shaping the visual identity and artistic direction of every No Gravity experience.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
  { name: "FknSil", role: "Sponsoring", bio: "Curating lineups and discovering fresh talent across the electronic music spectrum.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "SoundCloud", url: "#", icon: "soundcloud" }] },
  { name: "Molly on Molly", role: "Marketing", bio: "Orchestrating immersive events from concept to execution with precision.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
  { name: "Salchikiller", role: "Support", bio: "Building and nurturing the No Gravity community across Berlin and beyond.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
   { name: "Luis", role: "Tech", bio: "Building and nurturing the No Gravity community across Berlin and beyond.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
];

// const residents: Member[] = [
//   { name: "NØIR", role: "Resident DJ", bio: "Deep, hypnotic techno journeys through shadow and sound.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "SoundCloud", url: "#", icon: "soundcloud" }] },
//   { name: "SYNKRO", role: "Resident DJ", bio: "Atmospheric bass music exploring the spaces between genres.", socials: [{ label: "SoundCloud", url: "#", icon: "soundcloud" }] },
//   { name: "ECHØ", role: "Live Act", bio: "Hardware-driven live sets channeling raw industrial energy.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "Web", url: "#", icon: "web" }] },
//   { name: "PHAZE", role: "Resident DJ", bio: "High-energy selections spanning acid, electro, and hard techno.", socials: [{ label: "SoundCloud", url: "#", icon: "soundcloud" }] },
//   { name: "VØLT", role: "Live Act", bio: "Modular synthesis performances that blur the line between noise and melody.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "SoundCloud", url: "#", icon: "soundcloud" }] },
// ];

const socialIcon = (type: "instagram" | "soundcloud" | "web") => {
  switch (type) {
    case "instagram": return <Instagram className="w-4 h-4" />;
    case "soundcloud": return <Music className="w-4 h-4" />;
    case "web": return <Globe className="w-4 h-4" />;
  }
};

const MemberCard = ({
  member,
  index,
  glowClass,
  isExpanded,
  onToggle,
}: {
  member: Member;
  index: number;
  glowClass: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, scale: isExpanded ? 1.13 : 1 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 28 }}
      className={`relative flex flex-col items-center cursor-pointer ${isExpanded ? "z-10" : "z-0"}`}
      style={{ width: 'min(100%, 18rem)', justifySelf: 'center' }}
      onClick={onToggle}
    >
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            layoutId={`panel-bg-${member.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="absolute inset-0 glass rounded-xl border border-border/40 flex flex-col items-center px-6 py-8"
            style={{ zIndex: 1, minHeight: '14rem', height: 'auto' }}
          />
        )}
      </AnimatePresence>
      <motion.div
        layout
        className={`rounded-full bg-secondary flex items-center justify-center ${glowClass}`}
        style={{
          zIndex: 2,
          width: '5.2rem',
          height: '5.2rem',
          transition: 'width 0.25s, height 0.25s',
        }}
      >
        <span className="font-nasalization text-2xl md:text-3xl text-muted-foreground">
          {member.name.charAt(0)}
        </span>
      </motion.div>
      <div className="flex flex-col items-center" style={{ zIndex: 2 }}>
        <h3 className={`font-nasalization text-sm md:text-base tracking-wider text-foreground ${isExpanded ? "mt-6" : "mt-2"}`}>
          {member.name}
        </h3>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{member.role}</p>
        <AnimatePresence initial={false}>
          {isExpanded && member.bio && (
            <motion.p
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-muted-foreground text-center leading-relaxed mt-1 mb-1"
              style={{ overflow: "hidden" }}
            >
              {member.bio}
            </motion.p>
          )}
        </AnimatePresence>
        {member.socials && member.socials.length > 0 && (
          <div className="flex gap-3 mt-2">
            {member.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary/90 flex items-center justify-center text-muted-foreground transition-colors shadow-none hover:shadow-[0_0_12px_4px_rgba(88,28,135,0.7)] hover:bg-[#2a133d]"
                onClick={e => e.stopPropagation()}
              >
                {socialIcon(s.icon)}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const MemberRow = ({
  members,
  glowClass,
}: {
  members: Member[];
  glowClass: string;
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 mx-auto place-items-center">
        {members.map((m, i) => (
          <MemberCard
            key={m.name}
            member={m}
            index={i}
            glowClass={glowClass}
            isExpanded={expandedIndex === i}
            onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-nasalization text-center mb-16 text-glow-purple"
        >
          Team
        </motion.h2>
        <MemberRow members={teamMembers} glowClass="glow-purple" />
      </div>
    </section>
  );
};

export default TeamSection;
