import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AboutSectionProps {
  lang: 'tr' | 'en';
}

const CosmicPortal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 240;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    let frame = 0;

    const particles: { angle: number; dist: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        dist: 35 + Math.random() * 30,
        speed: 0.005 + Math.random() * 0.01,
        size: 1 + Math.random() * 1.5,
      });
    }

    const draw = () => {
      frame = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, size, size);

      const t = Date.now() * 0.001;

      // Outer ring glow
      const ringGrad = ctx.createRadialGradient(cx, cy, 40, cx, cy, 60);
      ringGrad.addColorStop(0, 'rgba(74, 158, 255, 0)');
      ringGrad.addColorStop(0.5, 'rgba(74, 158, 255, 0.1)');
      ringGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = ringGrad;
      ctx.fillRect(0, 0, size, size);

      // Rotating ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.3);
      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(74, 158, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Second ring
      ctx.rotate(-t * 0.2);
      ctx.beginPath();
      ctx.arc(0, 0, 55, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Orbiting particles
      for (const p of particles) {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 244, 255, ${0.3 + Math.sin(t + p.angle) * 0.2})`;
        ctx.fill();
      }

      // Center star
      const centerPulse = 0.8 + Math.sin(t * 2) * 0.2;
      ctx.beginPath();
      ctx.arc(cx, cy, 6 * centerPulse, 0, Math.PI * 2);
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 8);
      centerGrad.addColorStop(0, 'rgba(245, 158, 11, 0.9)');
      centerGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.fillStyle = centerGrad;
      ctx.fill();
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="w-60 h-60 mx-auto" />;
};

const AboutSection = ({ lang }: AboutSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimda" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, hsl(213 100% 65% / 0.04) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-accent mb-3">
            {lang === 'tr' ? 'hakkımda' : 'about'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Kim?' : 'Who?'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cosmic portal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden"
          >
            <div className="absolute inset-0 animate-pulse opacity-20" style={{
              animationDuration: '8s',
              background: 'conic-gradient(from 180deg at 50% 50%, hsl(213 100% 65% / 0.2), hsl(263 70% 58% / 0.2), hsl(38 92% 50% / 0.15), hsl(213 100% 65% / 0.2))'
            }} />
            <CosmicPortal />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rahmi Oğuzhan Hacıeyüpoğlu — şair, besteci ve dijital çağın sessiz filozofu. 
                  Kelimelerle evrenler inşa eder, notalarla duyguları şekillendirir. 
                  Yapay zeka ile sanatın kesişim noktasında, yeni ifade biçimleri arar.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Her şiir bir kapıdır, her şarkı bir yolculuk. 
                  Karanlıkta yazılan satırlar, ışığa dönüşür.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-display text-lg text-foreground leading-relaxed italic" style={{ textShadow: '0 0 20px rgba(245, 158, 11, 0.15)' }}>
                  "Within silence lies a universe — each word a star, each note a galaxy."
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rahmi Oğuzhan Hacıeyüpoğlu — poet, composer, and quiet philosopher of the digital age.
                  He builds universes with words and shapes emotions through melodies.
                  At the intersection of AI and art, he seeks new forms of expression.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
