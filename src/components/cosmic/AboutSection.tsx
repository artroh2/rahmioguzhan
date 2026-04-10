import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AboutSectionProps {
  lang: 'tr' | 'en';
}

const PLANETS = [
  { name: 'Mercury', radius: 2.5, orbit: 22, speed: 0.025, color: '#B0B0B0', color2: '#8A8A8A' },
  { name: 'Venus', radius: 3.5, orbit: 32, speed: 0.018, color: '#E8C56D', color2: '#C9A84C' },
  { name: 'Earth', radius: 3.8, orbit: 43, speed: 0.014, color: '#4A9EFF', color2: '#2E7D32' },
  { name: 'Mars', radius: 3, orbit: 54, speed: 0.011, color: '#D84315', color2: '#BF360C' },
  { name: 'Jupiter', radius: 7, orbit: 70, speed: 0.006, color: '#D4A76A', color2: '#C49A5E' },
  { name: 'Saturn', radius: 6, orbit: 86, speed: 0.004, color: '#E8D5A3', color2: '#C9B77D', hasRing: true },
  { name: 'Uranus', radius: 4.5, orbit: 98, speed: 0.003, color: '#7FDBDA', color2: '#5BB8B6' },
  { name: 'Neptune', radius: 4.2, orbit: 110, speed: 0.002, color: '#4169E1', color2: '#2B4FC7' },
];

const SolarSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 280;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    let frame = 0;

    // Init random starting angles
    const angles = PLANETS.map(() => Math.random() * Math.PI * 2);

    const draw = () => {
      frame = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, size, size);

      const t = Date.now() * 0.001;

      // Sun glow
      const sunGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28);
      sunGlow.addColorStop(0, 'rgba(255, 200, 50, 0.9)');
      sunGlow.addColorStop(0.3, 'rgba(255, 160, 20, 0.5)');
      sunGlow.addColorStop(0.6, 'rgba(255, 120, 0, 0.15)');
      sunGlow.addColorStop(1, 'rgba(255, 100, 0, 0)');
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();

      // Sun body
      const sunPulse = 1 + Math.sin(t * 3) * 0.04;
      const sunBody = ctx.createRadialGradient(cx - 2, cy - 2, 0, cx, cy, 10 * sunPulse);
      sunBody.addColorStop(0, '#FFF8E1');
      sunBody.addColorStop(0.5, '#FFD54F');
      sunBody.addColorStop(1, '#FF8F00');
      ctx.fillStyle = sunBody;
      ctx.beginPath();
      ctx.arc(cx, cy, 10 * sunPulse, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbits and planets
      for (let i = 0; i < PLANETS.length; i++) {
        const p = PLANETS[i];
        angles[i] += p.speed;

        // Orbit path
        ctx.beginPath();
        ctx.arc(cx, cy, p.orbit, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Planet position
        const px = cx + Math.cos(angles[i]) * p.orbit;
        const py = cy + Math.sin(angles[i]) * p.orbit;

        // Planet glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, p.radius * 3);
        glow.addColorStop(0, `${p.color}33`);
        glow.addColorStop(1, `${p.color}00`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Saturn ring (behind if needed)
        if (p.hasRing) {
          ctx.save();
          ctx.translate(px, py);
          ctx.scale(1, 0.35);
          ctx.beginPath();
          ctx.arc(0, 0, p.radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = `${p.color}88`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, p.radius * 2.7, 0, Math.PI * 2);
          ctx.strokeStyle = `${p.color}44`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }

        // Planet body
        const bodyGrad = ctx.createRadialGradient(px - p.radius * 0.3, py - p.radius * 0.3, 0, px, py, p.radius);
        bodyGrad.addColorStop(0, p.color);
        bodyGrad.addColorStop(1, p.color2);
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Specular highlight
        const spec = ctx.createRadialGradient(px - p.radius * 0.3, py - p.radius * 0.3, 0, px - p.radius * 0.3, py - p.radius * 0.3, p.radius * 0.6);
        spec.addColorStop(0, 'rgba(255,255,255,0.3)');
        spec.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = spec;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Earth's moon
        if (p.name === 'Earth') {
          const moonAngle = t * 2;
          const mx = px + Math.cos(moonAngle) * 8;
          const my = py + Math.sin(moonAngle) * 8;
          ctx.beginPath();
          ctx.arc(mx, my, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = '#D0D0D0';
          ctx.fill();
        }
      }
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="w-[280px] h-[280px] mx-auto" />;
};

const AboutSection = ({ lang }: AboutSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimda" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, hsl(213 100% 65% / 0.04) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25)) drop-shadow(0 0 30px rgba(200,190,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}
          >
            {lang === 'tr' ? 'HAKKIMDA' : 'ABOUT'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cosmic portal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden"
          >
            <SolarSystem />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4"
              style={{ textShadow: '0 0 10px rgba(200,220,255,0.25)' }}>
              {lang === 'tr' ? 'Gizemler İçinde' : 'Within Mysteries'}
            </p>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            {lang === 'tr' ? (
              <div className="space-y-4">
                <p className="font-display text-lg text-foreground leading-relaxed italic" style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.15)' }}>
                  "Sessizliğin içinde bir evren var — her kelime bir yıldız, her nota bir galaksi."
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ textShadow: '0 0 8px rgba(200,220,255,0.15)' }}>
                  Rahmi Oğuzhan Hacıeyüpoğlu — şair, besteci ve dijital çağın sessiz filozofu.
                  Kelimelerle evrenler inşa eder, notalarla duyguları şekillendirir. 
                  Yapay zeka ile sanatın kesişim noktasında, yeni ifade biçimleri arar.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ textShadow: '0 0 8px rgba(200,220,255,0.15)' }}>
                  Her şiir bir kapıdır, her şarkı bir yolculuk.
                  Karanlıkta yazılan satırlar, ışığa dönüşür.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-display text-lg text-foreground leading-relaxed italic" style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.15)' }}>
                  "Within silence lies a universe — each word a star, each note a galaxy."
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ textShadow: '0 0 8px rgba(200,220,255,0.15)' }}>
                  Rahmi Oğuzhan Hacıeyüpoğlu — poet, composer, and quiet philosopher of the digital age.
                  He builds universes with words and shapes emotions through melodies.
                  At the intersection of AI and art, he seeks new forms of expression.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ textShadow: '0 0 8px rgba(200,220,255,0.15)' }}>
                  Every poem is a door, every song a journey.
                  Lines written in darkness transform into light.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
