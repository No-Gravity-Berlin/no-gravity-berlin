import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Clock, Calendar } from "lucide-react";
import type { EventData } from "@/data/events";

interface EventCardProps {
  event: EventData;
  expanded: boolean;
  onToggle: () => void;
  /** "grid" = preview card on main page, "list" = inside modal */
  variant?: "grid" | "list";
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

const EventCard = ({ event, expanded, onToggle, variant = "list" }: EventCardProps) => {
  const isGrid = variant === "grid";

  return (
    <motion.div
      layout
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${
        isGrid ? "h-full" : ""
      }`}
      onClick={onToggle}
    >
      {/* Background image */}
      <motion.div layout="position" className={`relative ${expanded ? "h-48" : isGrid ? "h-full min-h-[220px]" : "h-52"}`}>
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60 transition-all duration-500 group-hover:bg-background/40" />
        <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:neon-border-green rounded-lg" />

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <div>
            <h3 className="font-nasalization text-lg md:text-xl tracking-wider text-foreground">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(event.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {event.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {event.location}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden glass"
          >
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lineup */}
              <div>
                <h4 className="font-nasalization text-sm tracking-widest text-accent mb-3">
                  Lineup
                </h4>
                <ul className="space-y-1.5">
                  {event.lineup.map((artist) => (
                    <li key={artist} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {artist}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Description */}
              <div>
                <h4 className="font-nasalization text-sm tracking-widest text-primary mb-3">
                  About
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EventCard;
