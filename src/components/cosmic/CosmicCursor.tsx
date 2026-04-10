import { useEffect, useRef } from 'react';

interface CelestialBody {
  x: number;
  y: number;
  radius: number;
  type: 'planet' | 'galaxy';
  color1: string;
  color2: string;
  color3: string;
  ringAngle: number;
  hasRing: boolean;
  rotation: number;
  rotationSpeed: number;
  spiralArms: number;
  glowSize: number;
}

const PALETTES = [
  { c1: '74, 158, 255', c2: '30, 80, 180', c3: '140, 200, 255' },   // ice blue
  { c1: '160, 80, 220', c2: '100, 30, 160', c3: '200, 140, 255' },  // cosmic purple
  { c1: '245, 158, 11', c2: '180, 100, 0', c3: '255, 210, 100' },   // gold
  { c1: '255, 80, 120', c2: '180, 30, 60', c3: '255, 160, 180' },   // nebula pink
  { c1: '40, 200, 180', c2: '20, 120, 100', c3: '120, 240, 220' },  // teal
  { c1: '255, 120, 50', c2: '180, 60, 20', c3: '255, 180, 120' },   // ember
];

function drawPlanet(ctx: CanvasRenderingContext2D, b: CelestialBody) {
  const { x, y, radius, color1, color2, color3, hasRing, ringAngle } = b;

  // Outer glow
  const glow = ctx.createRadialGradient(x, y, radius * 0.5, x, y, radius * b.glowSize);
  glow.addColorStop(0, `rgba(${color1}, 0.15)`);
  glow.addColorStop(0.5, `rgba(${color2}, 0.05)`);
  glow.addColorStop(1, `rgba(${color1}, 0)`);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, radius * b.glowSize, 0, Math.PI * 2);
  ctx.fill();

  // Planet body
  const bodyGrad = ctx.createRadialGradient(
    x - radius * 0.3, y - radius * 0.3, radius * 0.1,
    x, y, radius
  );
  bodyGrad.addColorStop(0, `rgba(${color3}, 0.9)`);
  bodyGrad.addColorStop(0.5, `rgba(${color1}, 0.8)`);
  bodyGrad.addColorStop(1, `rgba(${color2}, 0.6)`);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = bodyGrad;
  ctx.fill();

  // Surface bands
  ctx.save();
  ctx.clip();
  for (let i = 0; i < 3; i++) {
    const bandY = y - radius + (radius * 2 * (i + 1)) / 4;
    ctx.beginPath();
    ctx.ellipse(x, bandY, radius * 1.1, radius * 0.08, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color2}, ${0.15 + i * 0.05})`;
    ctx.fill();
  }
  ctx.restore();

  // Ring
  if (hasRing) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ringAngle);
    ctx.scale(1, 0.35);
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.8, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${color3}, 0.4)`;
    ctx.lineWidth = radius * 0.12;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 2.1, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${color1}, 0.2)`;
    ctx.lineWidth = radius * 0.06;
    ctx.stroke();
    ctx.restore();
  }

  // Specular highlight
  const spec = ctx.createRadialGradient(
    x - radius * 0.35, y - radius * 0.35, 0,
    x - radius * 0.35, y - radius * 0.35, radius * 0.5
  );
  spec.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
  spec.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = spec;
  ctx.fill();
}

function drawGalaxy(ctx: CanvasRenderingContext2D, b: CelestialBody, time: number) {
  const { x, y, radius, color1, color2, color3, spiralArms, rotation, rotationSpeed } = b;
  const angle = rotation + time * rotationSpeed;

  // Core glow
  const coreGlow = ctx.createRadialGradient(x, y, 0, x, y, radius * 0.4);
  coreGlow.addColorStop(0, `rgba(${color3}, 0.6)`);
  coreGlow.addColorStop(0.5, `rgba(${color1}, 0.2)`);
  coreGlow.addColorStop(1, `rgba(${color1}, 0)`);
  ctx.fillStyle = coreGlow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Spiral arms
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  for (let arm = 0; arm < spiralArms; arm++) {
    const armAngle = (arm / spiralArms) * Math.PI * 2;
    for (let i = 0; i < 60; i++) {
      const t = i / 60;
      const dist = t * radius;
      const spiral = armAngle + t * Math.PI * 2.5;
      const px = Math.cos(spiral) * dist;
      const py = Math.sin(spiral) * dist * 0.55; // flatten
      const starSize = (1 - t) * 1.8 + Math.random() * 0.8;
      const alpha = (1 - t) * 0.5 + Math.random() * 0.2;

      ctx.beginPath();
      ctx.arc(px, py, starSize, 0, Math.PI * 2);
      const c = i % 3 === 0 ? color3 : i % 3 === 1 ? color1 : color2;
      ctx.fillStyle = `rgba(${c}, ${alpha})`;
      ctx.fill();
    }
  }
  ctx.restore();

  // Outer haze
  const haze = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
  haze.addColorStop(0, `rgba(${color1}, 0.08)`);
  haze.addColorStop(1, `rgba(${color2}, 0)`);
  ctx.fillStyle = haze;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

const CosmicCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paintRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);
  const frameRef = useRef(0);
  const celestialsRef = useRef<CelestialBody[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const paint = document.createElement('canvas');
    paintRef.current = paint;
    const pctx = paint.getContext('2d')!;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const img = pctx.getImageData(0, 0, paint.width, paint.height);
      canvas.width = w;
      canvas.height = h;
      paint.width = w;
      paint.height = h;
      pctx.putImageData(img, 0, 0);
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

      if (speed > 1.5) {
        const count = Math.min(Math.floor(speed / 3), 6);
        for (let i = 0; i < count; i++) {
          const px = e.clientX + (Math.random() - 0.5) * 6;
          const py = e.clientY + (Math.random() - 0.5) * 6;
          const size = Math.random() * 2.5 + 0.8;
          pctx.beginPath();
          pctx.arc(px, py, size, 0, Math.PI * 2);
          pctx.fillStyle = `rgba(74, 158, 255, ${0.3 + Math.random() * 0.25})`;
          pctx.fill();
        }
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = !!(
        target.closest('a, button, [role="button"], input, textarea, select, [tabindex]')
      );
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only spawn on "empty" areas
      if (target.closest('a, button, [role="button"], input, textarea, select, [tabindex], form')) return;

      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const isGalaxy = Math.random() > 0.5;
      const radius = isGalaxy
        ? 25 + Math.random() * 35
        : 8 + Math.random() * 22;

      celestialsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius,
        type: isGalaxy ? 'galaxy' : 'planet',
        color1: palette.c1,
        color2: palette.c2,
        color3: palette.c3,
        ringAngle: Math.random() * Math.PI * 0.4 - 0.2,
        hasRing: !isGalaxy && Math.random() > 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        spiralArms: 2 + Math.floor(Math.random() * 3),
        glowSize: 2.5 + Math.random() * 1.5,
      });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('click', onClick);

    let time = 0;
    const draw = () => {
      frameRef.current = requestAnimationFrame(draw);
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Persistent paint layer
      ctx.drawImage(paint, 0, 0);

      // Celestial bodies
      for (const body of celestialsRef.current) {
        if (body.type === 'planet') {
          drawPlanet(ctx, body);
        } else {
          drawGalaxy(ctx, body, time);
        }
      }

      // Cursor orb
      const { x, y } = mouseRef.current;
      const hovering = isHoveringRef.current;
      const radius = hovering ? 18 : 10;

      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
      glow.addColorStop(0, `rgba(74, 158, 255, ${hovering ? 0.2 : 0.1})`);
      glow.addColorStop(1, 'rgba(74, 158, 255, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(x - radius * 3, y - radius * 3, radius * 6, radius * 6);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      const orbGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      orbGrad.addColorStop(0, `rgba(74, 158, 255, ${hovering ? 0.9 : 0.6})`);
      orbGrad.addColorStop(1, 'rgba(74, 158, 255, 0.1)');
      ctx.fillStyle = orbGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, radius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(74, 158, 255, ${hovering ? 0.5 : 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CosmicCursor;
