const SiteFooter = () => (
  <footer className="py-16 px-6 text-center border-t border-border/40">
    <p className="font-display text-2xl text-accent/60 mb-4">2</p>
    <p className="font-display italic text-sm text-muted-foreground">
      — Rahmi Oğuzhan Hacıeyüpoğlu
    </p>
    <p className="text-[10px] tracking-[0.3em] text-muted-foreground/60 mt-2">
      {new Date().getFullYear()}
    </p>
  </footer>
);

export default SiteFooter;
