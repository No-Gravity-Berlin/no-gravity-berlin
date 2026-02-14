import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    id: "info",
    label: "Info",
    content: (
      <>
        <h3 className="font-nasalization text-xl mb-4 text-foreground">No Gravity Berlin e.V.i.G.</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          No Gravity Berlin e.V.i.G. is a registered non-profit association (eingetragener Verein in Gründung) based in Berlin,
          dedicated to promoting intercultural exchange and neurodiversity through electronic music and the arts.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          As a recognized cultural organization, we work to create inclusive spaces,
          support emerging artists, and foster community connections across Berlin and beyond.
        </p>
      </>
    ),
  },
  {
    id: "support",
    label: "Support Membership",
    content: (
      <>
        <h3 className="font-nasalization text-xl mb-4 text-foreground">Become a Supporter</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Support our mission by becoming a Fördermitglied. Your contribution helps us continue
          creating spaces for underrepresented artists and communities.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
            Priority access to all No Gravity events
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
            Exclusive members-only experiences
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
            Direct support for emerging artists
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "reports",
    label: "Annual Reports",
    content: (
      <>
        <h3 className="font-nasalization text-xl mb-4 text-foreground">Transparency</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We believe in full transparency. Our annual reports detail how funds are allocated
          and the impact of our programs.
        </p>
        <div className="space-y-3">
          {["2025", "2024", "2023"].map((year) => (
            <div
              key={year}
              className="glass rounded-lg px-5 py-3 flex items-center justify-between cursor-pointer
                hover:border-neon-purple/40 transition-all duration-300"
            >
              <span className="font-nasalization text-sm text-foreground">
                Annual Report {year}
              </span>
              <span className="text-xs text-muted-foreground">PDF</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

const VereinSection = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <section id="verein" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-nasalization text-center mb-16 text-glow-purple"
        >
          No Gravity e.V.
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 text-sm font-nasalization tracking-wider uppercase rounded-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-neon-purple/20 text-foreground neon-border-purple"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-xl p-8 md:p-10"
        >
          {tabs.find((t) => t.id === activeTab)?.content}
        </motion.div>
      </div>
    </section>
  );
};

export default VereinSection;
