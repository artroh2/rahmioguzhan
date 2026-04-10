import { useEffect, useRef } from 'react';

const CosmicCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paintRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);
  const frameRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Offscreen canvas for persistent paint
    const paint = document.createElement('canvas');
    paintRef.current = paint;
    const pctx = paint.getContext('2d')!;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Save paint content before resize
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

      // Paint directly onto the persistent canvas
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

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    const draw = () => {
      frameRef.current = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw persistent paint layer
      ctx.drawImage(paint, 0, 0);

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
