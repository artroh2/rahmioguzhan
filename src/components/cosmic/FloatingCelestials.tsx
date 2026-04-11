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
  const pausedRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);
    const targetFps = isMobile ? 20 : isTablet ? 30 : 60;
    const frameInterval = 1000 / targetFps;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // Fewer objects on mobile
    const maxCount = isMobile ? 6 : isTablet ? 12 : 20;
    const objects: CelestialObject[] = [];
    for (let i = 0; i < maxCount; i++) {
      const [c1, c2] = COLORS[Math.floor(Math.random() * COLORS.length)];
      const isGalaxy = Math.random() > 0.6;
      objects.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: isGalaxy
          ? (isMobile ? 10 + Math.random() * 15 : 15 + Math.random() * 35)
          : (isMobile ? 3 + Math.random() * 6 : 4 + Math.random() * 12),
        type: isGalaxy ? 'galaxy' : 'planet',
        color1: c1,
        color2: c2,
        rotSpeed: (Math.random() - 0.5) * 0.003,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: (Math.random() - 0.5) * 0.08,
        opacity: 0.1 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frame: number;
    let lastTime = 0;

    const draw = (timestamp: number) => {
      frame = requestAnimationFrame(draw);
      const delta = timestamp - lastTime;
      if (delta < frameInterval) return;
      lastTime = timestamp - (delta % frameInterval);
      if (pausedRef.current) return;

      ctx.clearRect(0, 0, w, h);
      const t = timestamp * 0.001;

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

          // Skip spiral arms on mobile for performance
          if (!isMobile) {
            for (let arm = 0; arm < 2; arm++) {
              ctx.beginPath();
              for (let a = 0; a < Math.PI * 4; a += 0.15) {
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
          }
        } else {
          const r = obj.size * breathe;
          // Simpler glow on mobile
          if (!isMobile) {
            const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.5);
            glow.addColorStop(0, `${obj.color1}22`);
            glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(0, 0, r * 2.5, 0, Math.PI * 2);
            ctx.fill();
          }

          const bodyGrad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r);
          bodyGrad.addColorStop(0, obj.color1);
          bodyGrad.addColorStop(1, obj.color2);
          ctx.fillStyle = bodyGrad;
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
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    const onMouseDown = (e: MouseEvent) => { if (e.button === 2) pausedRef.current = true; };
    const onMouseUp = (e: MouseEvent) => { if (e.button === 2) pausedRef.current = false; };
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
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
