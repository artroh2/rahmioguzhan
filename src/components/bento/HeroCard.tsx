const HeroCard = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-end p-8 md:p-12 relative overflow-hidden group">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700" style={{
        background: 'radial-gradient(ellipse at 30% 70%, hsl(0 72% 51% / 0.15), transparent 60%)'
      }} />

      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none mb-4">
          Rahmi<br />Oğ<span className="relative inline-block">u<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.4em]">"2"</span></span>zhan<br />Hacıeyüpoğlu
        </h1>
      </div>
    </div>
  );
};

export default HeroCard;
