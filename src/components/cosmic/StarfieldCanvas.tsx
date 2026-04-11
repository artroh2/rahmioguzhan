import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  driftX: number;
  driftY: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  rotationSpeed: number;
  breatheSpeed: number;
  breathePhase: number;
}

const StarfieldCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const nebulaeRef = useRef<Nebula[]>([]);
  const timeRef = useRef(0);
  const pausedRef = useRef(false);

  const initStars = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const maxStars = isMobile ? 120 : 400;
    const count = Math.min(Math.floor((w * h) / (isMobile ? 6000 : 3000)), maxStars);
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * (isMobile ? 1.2 : 1.8) + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.08,
      });
    }
    starsRef.current = stars;
  }, []);

  const initNebulae = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const scale = isMobile ? 0.6 : 1;
    nebulaeRef.current = [
      { x: w * 0.2, y: h * 0.3, radius: Math.max(w, h) * 0.25 * scale, color: '59, 15, 110', rotationSpeed: 0.0003, breatheSpeed: 0.0008, breathePhase: 0 },
      { x: w * 0.75, y: h * 0.6, radius: Math.max(w, h) * 0.3 * scale, color: '10, 22, 40', rotationSpeed: -0.0002, breatheSpeed: 0.0006, breathePhase: 1.5 },
      { x: w * 0.5, y: h * 0.8, radius: Math.max(w, h) * 0.2 * scale, color: '107, 15, 74', rotationSpeed: 0.0004, breatheSpeed: 0.001, breathePhase: 3 },
    ];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const targetFps = isMobile ? 24 : 60;
    const frameInterval = 1000 / targetFps;
    const dprVal = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dprVal;
      canvas.height = h * dprVal;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dprVal, dprVal);
      initStars(w, h);
      initNebulae(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseDown = (e: MouseEvent) => { if (e.button === 2) pausedRef.current = true; };
    const onMouseUp = (e: MouseEvent) => { if (e.button === 2) pausedRef.current = false; };
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    let lastTime = 0;
    let isVisible = true;

    const handleVisibility = () => { isVisible = !document.hidden; };
    document.addEventListener('visibilitychange', handleVisibility);

    const draw = (timestamp: number) => {
      animFrameRef.current = requestAnimationFrame(draw);
      if (!isVisible || prefersReduced || pausedRef.current) return;

      const delta = timestamp - lastTime;
      if (delta < frameInterval) return;
      lastTime = timestamp - (delta % frameInterval);

      timeRef.current = timestamp * 0.001;
      const t = timeRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Nebulae
      for (const neb of nebulaeRef.current) {
        const breathe = 1 + Math.sin(t * neb.breatheSpeed * 6 + neb.breathePhase) * 0.08;
        const r = neb.radius * breathe;
        const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, r);
        grad.addColorStop(0, `rgba(${neb.color}, 0.12)`);
        grad.addColorStop(0.5, `rgba(${neb.color}, 0.04)`);
        grad.addColorStop(1, `rgba(${neb.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(neb.x - r, neb.y - r, r * 2, r * 2);
      }

      // Aurora bands - skip on mobile
      if (!isMobile) {
        for (let i = 0; i < 2; i++) {
          const y = h * (0.3 + i * 0.35) + Math.sin(t * 0.2 + i) * 50;
          const grad = ctx.createLinearGradient(0, y - 40, 0, y + 40);
          grad.addColorStop(0, 'rgba(74, 158, 255, 0)');
          grad.addColorStop(0.5, `rgba(74, 158, 255, ${0.015 + Math.sin(t * 0.3 + i * 2) * 0.01})`);
          grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, y - 60, w, 120);
        }
      }

      // Stars
      for (const star of starsRef.current) {
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h;
        if (star.y > h) star.y = 0;

        const twinkle = star.opacity + Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.3;
        const alpha = Math.max(0.05, Math.min(1, twinkle));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 244, 255, ${alpha})`;
        ctx.fill();
      }
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [initStars, initNebulae]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarfieldCanvas;
