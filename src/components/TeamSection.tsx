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
  { name: "Alex K.", role: "Founder", bio: "Visionary behind No Gravity Berlin. Pushing the boundaries of underground electronic music culture since day one.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
  { name: "Mira S.", role: "Creative Director", bio: "Shaping the visual identity and artistic direction of every No Gravity experience.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
  { name: "Jonas R.", role: "A&R", bio: "Curating lineups and discovering fresh talent across the electronic music spectrum.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "SoundCloud", url: "#", icon: "soundcloud" }] },
  { name: "Leyla M.", role: "Events Lead", bio: "Orchestrating immersive events from concept to execution with precision.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
  { name: "Tomás V.", role: "Community", bio: "Building and nurturing the No Gravity community across Berlin and beyond.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }] },
];

const residents: Member[] = [
  { name: "NØIR", role: "Resident DJ", bio: "Deep, hypnotic techno journeys through shadow and sound.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "SoundCloud", url: "#", icon: "soundcloud" }] },
  { name: "SYNKRO", role: "Resident DJ", bio: "Atmospheric bass music exploring the spaces between genres.", socials: [{ label: "SoundCloud", url: "#", icon: "soundcloud" }] },
  { name: "ECHØ", role: "Live Act", bio: "Hardware-driven live sets channeling raw industrial energy.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "Web", url: "#", icon: "web" }] },
  { name: "PHAZE", role: "Resident DJ", bio: "High-energy selections spanning acid, electro, and hard techno.", socials: [{ label: "SoundCloud", url: "#", icon: "soundcloud" }] },
  { name: "VØLT", role: "Live Act", bio: "Modular synthesis performances that blur the line between noise and melody.", socials: [{ label: "Instagram", url: "#", icon: "instagram" }, { label: "SoundCloud", url: "#", icon: "soundcloud" }] },
];

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
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 relative"
      style={{ zIndex: isExpanded ? 50 : 1 }}
    >
      {/* Circle avatar */}
      <motion.div
        layout
        onClick={onToggle}
        className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary flex items-center justify-center cursor-pointer relative ${glowClass}`}
        animate={isExpanded ? { scale: 1.3 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ zIndex: isExpanded ? 52 : 2 }}
      >
        <span className="font-nasalization text-2xl md:text-3xl text-muted-foreground">
          {member.name.charAt(0)}
        </span>
      </motion.div>

      {/* Expanded panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0, height: 0 }}
            animate={{ opacity: 1, scaleY: 1, height: "auto" }}
            exit={{ opacity: 0, scaleY: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{ originY: 0, zIndex: 51 }}
            className="absolute top-[5.5rem] md:top-[7rem] w-56 md:w-64 glass rounded-xl border border-border/40 overflow-hidden"
          >
            <div className="pt-6 pb-4 px-4 flex flex-col items-center gap-3">
              {/* Close */}
              <button
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Name & role */}
              <h3 className="font-nasalization text-sm md:text-base tracking-wider text-foreground text-center">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{member.role}</p>

              {/* Bio */}
              {member.bio && (
                <p className="text-xs text-muted-foreground text-center leading-relaxed mt-1">
                  {member.bio}
                </p>
              )}

              {/* Socials */}
              {member.socials && member.socials.length > 0 && (
                <div className="flex gap-3 mt-2">
                  {member.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                    >
                      {socialIcon(s.icon)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static name/role (hidden when expanded) */}
      {!isExpanded && (
        <>
          <h3 className="font-nasalization text-sm md:text-base tracking-wider text-foreground">
            {member.name}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{member.role}</p>
        </>
      )}
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
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative" style={{ minHeight: 180 }}>
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
  );
};

const TeamSection = () => {
  return (
    <>
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

      <section id="residents" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-nasalization text-center mb-16 text-glow-green"
          >
            Residents
          </motion.h2>
          <MemberRow members={residents} glowClass="glow-green" />
        </div>
      </section>
    </>
  );
};

export default TeamSection;
