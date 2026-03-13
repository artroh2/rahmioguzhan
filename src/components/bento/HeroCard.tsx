import { useNavigate } from 'react-router-dom';

const HeroCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bento-card h-full flex flex-col justify-end p-8 md:p-12 relative overflow-hidden group">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700" style={{
        background: 'radial-gradient(ellipse at 30% 70%, hsl(0 72% 51% / 0.15), transparent 60%)'
      }} />

      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none mb-1">
          Rahmi<br />Oğuzhan<br />Hacıeyüpoğlu
        </h1>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm md:text-base text-muted-foreground tracking-wide">"yapay zeka mimarı"</p>
          <button onClick={() => navigate('/manifesto')} className="text-2xl tracking-[0.4em] uppercase text-primary font-medium hover:glow-red transition-all duration-300 cursor-pointer bg-transparent border-none">"2"</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
