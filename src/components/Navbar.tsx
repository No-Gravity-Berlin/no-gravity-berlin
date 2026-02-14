import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Events", href: "#events" },
  { label: "Showcase", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "e.V.", href: "#verein" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navTimeoutId, setNavTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const onScroll = () => {
      // Don't hide navbar during navigation click
      if (isNavigating) return;
      
      const current = window.scrollY;
      const scrollDelta = Math.abs(current - lastScrollY);
      
      // Only hide if scrolling down by more than 5px
      if (current > lastScrollY && current > 20 && scrollDelta > 5) {
        setHidden(true);
      } else if (current < lastScrollY) {
        setHidden(false);
      }
      lastScrollY = current;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (navTimeoutId) clearTimeout(navTimeoutId);
    };
  }, [isNavigating, navTimeoutId]);

  const handleNavClick = () => {
    // Clear previous timeout if it exists
    if (navTimeoutId) {
      clearTimeout(navTimeoutId);
    }
    
    setIsNavigating(true);
    setHidden(false);
    
    // Set new timeout and store its ID
    const timeoutId = setTimeout(() => setIsNavigating(false), 1000);
    setNavTimeoutId(timeoutId);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(12,10,18,0.95)] transition-all duration-500 py-3"
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="font-nasalization text-xl tracking-widest text-foreground">
          NO GRAVITY 
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-sm tracking-wider text-foreground font-nasalization hover:text-neon-purple hover:text-glow-purple transition-colors duration-300 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[rgba(20,16,28,0.9)] md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMobileOpen(false); handleNavClick(); }}
                  className="text-sm tracking-wider text-foreground font-nasalization hover:text-neon-purple hover:text-glow-purple transition-colors uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
