import { useEffect, useRef } from 'react';

interface CelestialObject {
  x: number;
  y: number;
  size: number;
  type: 'planet' | 'galaxy';
  color1: string;
  color2: string;
  rotSpeed: number;
  driftX: number;
  driftY: number;
  opacity: number;
  phase: number;
}

const COLORS = [
  ['#4A9EFF', '#2E5CB8'],
  ['#A855F7', '#7C3AED'],
  ['#F59E0B', '#D97706'],
  ['#EC4899', '#BE185D'],
  ['#06B6D4', '#0891B2'],
  ['#10B981', '#059669'],
  ['#EF4444', '#B91C1C'],
  ['#8B5CF6', '#6D28D9'],
];

const FloatingCelestials = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = document.documentElement.scrollHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // Generate random celestial objects
    const count = Math.floor(w * h / 200000);
    const objects: CelestialObject[] = [];
    for (let i = 0; i < Math.min(count, 25); i++) {
      const [c1, c2] = COLORS[Math.floor(Math.random() * COLORS.length)];
      const isGalaxy = Math.random() > 0.6;
      objects.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: isGalaxy ? 15 + Math.random() * 35 : 4 + Math.random() * 12,
        type: isGalaxy ? 'galaxy' : 'planet',
        color1: c1,
        color2: c2,
        rotSpeed: (Math.random() - 0.5) * 0.003,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.1,
        opacity: 0.15 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frame: number;
    const draw = () => {
      frame = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);
      const t = Date.now() * 0.001;

      for (const obj of objects) {
        obj.x += obj.driftX;
        obj.y += obj.driftY;
        if (obj.x < -50) obj.x = w + 50;
        if (obj.x > w + 50) obj.x = -50;
        if (obj.y < -50) obj.y = h + 50;
        if (obj.y > h + 50) obj.y = -50;

        const breathe = 1 + Math.sin(t * 0.5 + obj.phase) * 0.1;
        const alpha = obj.opacity * (0.8 + Math.sin(t * 0.3 + obj.phase) * 0.2);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(obj.x, obj.y);

        if (obj.type === 'galaxy') {
          // Draw spiral galaxy
          const rot = t * obj.rotSpeed * 10;
          ctx.rotate(rot);
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, obj.size * breathe);
          grad.addColorStop(0, `${obj.color1}88`);
          grad.addColorStop(0.3, `${obj.color2}44`);
          grad.addColorStop(0.7, `${obj.color1}18`);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, obj.size * breathe, obj.size * breathe * 0.5, 0, 0, Math.PI * 2);
          ctx.fill();

          // Spiral arms
          for (let arm = 0; arm < 2; arm++) {
            ctx.beginPath();
            for (let a = 0; a < Math.PI * 4; a += 0.1) {
              const r = (a / (Math.PI * 4)) * obj.size * breathe * 0.9;
              const px = Math.cos(a + arm * Math.PI) * r;
              const py = Math.sin(a + arm * Math.PI) * r * 0.5;
              if (a === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.strokeStyle = `${obj.color1}30`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else {
          // Draw planet
          const r = obj.size * breathe;
          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.5);
          glow.addColorStop(0, `${obj.color1}22`);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(0, 0, r * 2.5, 0, Math.PI * 2);
          ctx.fill();

          const bodyGrad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
          bodyGrad.addColorStop(0, obj.color1);
          bodyGrad.addColorStop(1, obj.color2);
          ctx.fillStyle = bodyGrad;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();

          // Specular
          const spec = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, -r * 0.3, -r * 0.3, r * 0.5);
          spec.addColorStop(0, 'rgba(255,255,255,0.25)');
          spec.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = spec;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    };

    frame = requestAnimationFrame(draw);

    const handleResize = () => {
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{ opacity: 0.6 }}
    />
  );
};

export default FloatingCelestials;
