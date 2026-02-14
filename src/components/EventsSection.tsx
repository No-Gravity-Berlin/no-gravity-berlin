import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { getPreviewEvents, getUpcomingEvents, getPastEvents } from "@/data/events";
import EventCard from "./EventCard";

const EventsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Removed autoscroll on modal opening
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [expandedPreview, setExpandedPreview] = useState<string | null>(null);
  const [expandedModal, setExpandedModal] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const previewEvents = getPreviewEvents();
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const modalEvents = activeTab === "upcoming" ? upcoming : past;

  return (
    <section id="events" className="py-24 px-6" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-nasalization text-center mb-16 text-glow-purple"
        >
          Events
        </motion.h2>
        <div className="relative">
          {/* 2x2 Preview Grid */}
          <AnimatePresence>
            {!modalOpen && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto"
              >
                {previewEvents.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Expanded overlay for grid cards */}
                    <AnimatePresence>
                      {expandedPreview === event.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-background/60 z-30"
                          onClick={() => setExpandedPreview(null)}
                        />
                      )}
                    </AnimatePresence>
                    <motion.div
                      layout
                      className={
                        expandedPreview === event.id
                          ? "relative z-40"
                          : "relative z-10"
                      }
                    >
                      <EventCard
                        event={event}
                        expanded={expandedPreview === event.id}
                        onToggle={() =>
                          setExpandedPreview(
                            expandedPreview === event.id ? null : event.id
                          )
                        }
                        variant="grid"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Expanded Modal */}
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0.85, y: 40 }}
                animate={{ opacity: 1, scaleY: 1, y: 0 }}
                exit={{ opacity: 0, scaleY: 0.85, y: 40 }}
                transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                style={{ originY: 0.1 }}
                className="overflow-hidden rounded-lg glass min-h-[80vh] max-w-[60rem] mx-auto"
              >
                <div className="p-4 md:p-6">
                  {/* Header with tabs and minimize */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      {(["upcoming", "past"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => {
                            setActiveTab(tab);
                            setExpandedModal(null);
                          }}
                          className={`px-4 py-2 rounded-md text-sm font-nasalization tracking-wider transition-all duration-300 ${
                            activeTab === tab
                              ? "bg-primary/20 text-primary neon-border-purple"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary/50"
                      aria-label="Minimize"
                    >
                      <ChevronUp className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Event list */}
                  <div className="space-y-4">
                    {modalEvents.length === 0 && (
                      <p className="text-center text-muted-foreground py-12 font-nasalization tracking-wider text-sm">
                        No {activeTab} events
                      </p>
                    )}
                    {modalEvents.map((event, i) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <EventCard
                          event={event}
                          expanded={expandedModal === event.id}
                          onToggle={() =>
                            setExpandedModal(
                              expandedModal === event.id ? null : event.id
                            )
                          }
                          variant="list"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Show All Events Button */}
          <motion.div layout className="flex justify-center mt-8">
            <motion.button
              onClick={() => {
                setModalOpen(!modalOpen);
                setExpandedPreview(null);
              }}
              className="px-8 py-3 border border-neon-purple/40 bg-neon-purple/10 text-foreground font-nasalization text-sm tracking-widest uppercase hover:bg-neon-purple/20 transition-all duration-300 rounded-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {modalOpen ? "Minimize Events" : "Show All Events"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
