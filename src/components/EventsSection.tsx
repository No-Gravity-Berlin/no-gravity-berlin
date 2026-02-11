import { motion } from "framer-motion";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";

const events = [
  { img: event1, title: "VOID", date: "15.03.2026", span: "col-span-2 row-span-1" },
  { img: event2, title: "ECLIPSE", date: "28.03.2026", span: "col-span-1 row-span-2" },
  { img: event3, title: "PULSE", date: "12.04.2026", span: "col-span-1 row-span-1" },
  { img: event4, title: "ZERO-G", date: "26.04.2026", span: "col-span-2 row-span-1" },
  { img: event5, title: "DRIFT", date: "10.05.2026", span: "col-span-1 row-span-1" },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-nasalization text-center mb-16 text-glow-purple"
        >
          Events
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${event.span}`}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-background/60 transition-all duration-500 group-hover:bg-background/30" />
              {/* Neon border on hover */}
              <div className="absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:neon-border-green rounded-lg" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-nasalization text-lg md:text-2xl tracking-wider text-foreground">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
