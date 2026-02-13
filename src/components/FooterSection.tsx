import { Instagram, Music2, Youtube } from 'lucide-react';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/nogravityberlin/', icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@nogravityberlin', icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15Z"/></svg>
  )},
  { label: 'YouTube', href: 'https://www.youtube.com/@nogravityberlin', icon: Youtube },
  { label: 'SoundCloud', href: 'https://soundcloud.com/nogravityberlin', icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35-.34 0-.67.05-.98.15A5.15 5.15 0 0 0 14.18 6c-1.05 0-2.03.32-2.84.87h.22ZM9.56 9.75V17h1V9.34a5.04 5.04 0 0 0-1 .41ZM7.56 11.5V17h1v-5.96c-.35.13-.68.29-1 .46ZM5.56 17h1v-4.5a7.7 7.7 0 0 0-1 .69V17ZM3.56 17h1v-2.84c-.36.36-.69.76-1 1.19V17ZM1.56 17h1v-.56a10.3 10.3 0 0 0-1 .56Z"/></svg>
  )},
  { label: 'Bandcamp', href: '#', icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/></svg>
  )},
  { label: 'Resident Advisor', href: 'https://ra.co/promoters/148216', icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><text x="2" y="18" fontSize="16" fontWeight="bold" fontFamily="sans-serif">RA</text></svg>
  )},
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <span className="font-nasalization text-sm tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} No Gravity Berlin e.V.
          </span>

          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Impressum
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
