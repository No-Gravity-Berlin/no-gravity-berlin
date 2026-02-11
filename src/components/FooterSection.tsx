const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-nasalization text-sm tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} No Gravity Berlin e.V.
          </span>

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
