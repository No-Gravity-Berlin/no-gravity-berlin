import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
}

const teamMembers: Member[] = [
  { name: "Alex K.", role: "Founder" },
  { name: "Mira S.", role: "Creative Director" },
  { name: "Jonas R.", role: "A&R" },
  { name: "Leyla M.", role: "Events Lead" },
  { name: "Tomás V.", role: "Community" },
];

const residents: Member[] = [
  { name: "NØIR", role: "Resident DJ" },
  { name: "SYNKRO", role: "Resident DJ" },
  { name: "ECHØ", role: "Live Act" },
  { name: "PHAZE", role: "Resident DJ" },
  { name: "VØLT", role: "Live Act" },
];

const MemberCard = ({ member, index, glowClass }: { member: Member; index: number; glowClass: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col items-center gap-3"
  >
    <div
      className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary flex items-center justify-center ${glowClass}`}
    >
      <span className="font-nasalization text-2xl md:text-3xl text-muted-foreground">
        {member.name.charAt(0)}
      </span>
    </div>
    <h3 className="font-nasalization text-sm md:text-base tracking-wider text-foreground">
      {member.name}
    </h3>
    <p className="text-xs text-muted-foreground uppercase tracking-wider">{member.role}</p>
  </motion.div>
);

const TeamSection = () => {
  return (
    <>
      {/* Team */}
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
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {teamMembers.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} glowClass="glow-purple" />
            ))}
          </div>
        </div>
      </section>

      {/* Residents */}
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
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {residents.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} glowClass="glow-green" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
