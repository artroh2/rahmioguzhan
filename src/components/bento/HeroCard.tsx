const HeroCard = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-end p-8 md:p-12 relative overflow-hidden group">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700" style={{
        background: 'radial-gradient(ellipse at 30% 70%, hsl(0 72% 51% / 0.15), transparent 60%)'
      }} />

      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-none mb-4">
          Rahmi<br />Oğuzhan
        </h1>
        <p className="text-sm tracking-[0.4em] uppercase text-primary font-medium mb-6">
          The Architect&nbsp;&nbsp;|&nbsp;&nbsp;2
        </p>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md italic">
          "While the world makes noise, I build the silence."
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
