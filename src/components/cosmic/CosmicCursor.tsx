import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
  vx: number;
  vy: number;
}

const CosmicCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const isHoveringRef = useRef(false);
  const frameRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return; // Skip on touch devices

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      const prev = mouseRef.current;
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (speed > 3) {
        const count = Math.min(Math.floor(speed / 8), 3);
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 8,
            y: e.clientY + (Math.random() - 0.5) * 8,
            life: 1,
            maxLife: 1,
            size: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          });
        }
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = !!(
        target.closest('a, button, [role="button"], input, textarea, select, [tabindex]')
      );
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    const draw = () => {
      frameRef.current = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x, y } = mouseRef.current;
      const hovering = isHoveringRef.current;
      const radius = hovering ? 18 : 10;

      // Glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
      glow.addColorStop(0, `rgba(74, 158, 255, ${hovering ? 0.2 : 0.1})`);
      glow.addColorStop(1, 'rgba(74, 158, 255, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(x - radius * 3, y - radius * 3, radius * 6, radius * 6);

      // Orb
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      const orbGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      orbGrad.addColorStop(0, `rgba(74, 158, 255, ${hovering ? 0.9 : 0.6})`);
      orbGrad.addColorStop(1, 'rgba(74, 158, 255, 0.1)');
      ctx.fillStyle = orbGrad;
      ctx.fill();

      // Ring
      ctx.beginPath();
      ctx.arc(x, y, radius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(74, 158, 255, ${hovering ? 0.5 : 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.025;
        p.x += p.vx;
        p.y += p.vy;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 244, 255, ${p.life * 0.6})`;
        ctx.fill();
      }
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('resize', resize);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default CosmicCursor;
