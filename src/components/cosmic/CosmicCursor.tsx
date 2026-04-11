import { useEffect, useRef, useCallback, useState } from 'react';
import diamondLogo from '@/assets/diamond-logo.png';

interface Moon {
  orbitRadius: number;
  size: number;
  speed: number;
  angle: number;
  color: string;
}

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
  moons: Moon[];
  opacity: number;    // for glow-up fade-in
  vx: number;         // drift velocity
  vy: number;
}

interface BackgroundStar {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;       // current opacity (glow up)
  targetOpacity: number; // target
  vx: number;
  vy: number;
}

interface SupernovaParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  type: 'spark' | 'ring' | 'debris';
}

interface Supernova {
  x: number;
  y: number;
  particles: SupernovaParticle[];
  shockwave: number;
  shockwaveMax: number;
  flash: number;
  color1: string;
  color2: string;
  color3: string;
  alive: boolean;
}

const PALETTES = [
  { c1: '74, 158, 255', c2: '30, 80, 180', c3: '140, 200, 255' },
  { c1: '160, 80, 220', c2: '100, 30, 160', c3: '200, 140, 255' },
  { c1: '245, 158, 11', c2: '180, 100, 0', c3: '255, 210, 100' },
  { c1: '255, 80, 120', c2: '180, 30, 60', c3: '255, 160, 180' },
  { c1: '40, 200, 180', c2: '20, 120, 100', c3: '120, 240, 220' },
  { c1: '255, 120, 50', c2: '180, 60, 20', c3: '255, 180, 120' },
];

function spawnCelestial(x: number, y: number, sizeScale = 1, forceType?: 'planet' | 'galaxy'): CelestialBody {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const isGalaxy = forceType === 'galaxy' ? true : forceType === 'planet' ? false : Math.random() > 0.5;
  const radius = isGalaxy
    ? (25 + Math.random() * 35) * sizeScale
    : (8 + Math.random() * 22) * sizeScale;

  const moonCount = isGalaxy ? 0 : 1 + Math.floor(Math.random() * 3);
  const moons: Moon[] = [];
  for (let m = 0; m < moonCount; m++) {
    moons.push({
      orbitRadius: radius * (1.8 + m * 0.7 + Math.random() * 0.5),
      size: 1.5 + Math.random() * 2,
      speed: (0.008 + Math.random() * 0.015) * (Math.random() > 0.5 ? 1 : -1),
      angle: Math.random() * Math.PI * 2,
      color: [palette.c1, palette.c3, '200, 200, 220'][Math.floor(Math.random() * 3)],
    });
  }

  return {
    x, y, radius,
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
    moons,
    opacity: 0,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
  };
}

function drawPlanet(ctx: CanvasRenderingContext2D, b: CelestialBody, time: number) {
  const { x, y, radius, color1, color2, color3, hasRing, ringAngle } = b;

  const glow = ctx.createRadialGradient(x, y, radius * 0.5, x, y, radius * b.glowSize);
  glow.addColorStop(0, `rgba(${color1}, 0.15)`);
  glow.addColorStop(0.5, `rgba(${color2}, 0.05)`);
  glow.addColorStop(1, `rgba(${color1}, 0)`);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, radius * b.glowSize, 0, Math.PI * 2);
  ctx.fill();

  const bodyGrad = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, radius * 0.1, x, y, radius);
  bodyGrad.addColorStop(0, `rgba(${color3}, 0.9)`);
  bodyGrad.addColorStop(0.5, `rgba(${color1}, 0.8)`);
  bodyGrad.addColorStop(1, `rgba(${color2}, 0.6)`);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = bodyGrad;
  ctx.fill();

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

  const spec = ctx.createRadialGradient(x - radius * 0.35, y - radius * 0.35, 0, x - radius * 0.35, y - radius * 0.35, radius * 0.5);
  spec.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
  spec.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = spec;
  ctx.fill();

  for (const moon of (b.moons || [])) {
    moon.angle += moon.speed;
    const mx = x + Math.cos(moon.angle) * moon.orbitRadius;
    const my = y + Math.sin(moon.angle) * moon.orbitRadius * 0.4;
    ctx.beginPath();
    ctx.ellipse(x, y, moon.orbitRadius, moon.orbitRadius * 0.4, 0, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${moon.color}, 0.08)`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
    const mg = ctx.createRadialGradient(mx, my, 0, mx, my, moon.size * 3);
    mg.addColorStop(0, `rgba(${moon.color}, 0.15)`);
    mg.addColorStop(1, `rgba(${moon.color}, 0)`);
    ctx.fillStyle = mg;
    ctx.beginPath();
    ctx.arc(mx, my, moon.size * 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mx, my, moon.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${moon.color}, 0.7)`;
    ctx.fill();
  }
}

function drawGalaxy(ctx: CanvasRenderingContext2D, b: CelestialBody, time: number) {
  const { x, y, radius, color1, color2, color3, spiralArms, rotation, rotationSpeed } = b;
  const angle = rotation + time * rotationSpeed;

  const coreGlow = ctx.createRadialGradient(x, y, 0, x, y, radius * 0.4);
  coreGlow.addColorStop(0, `rgba(${color3}, 0.6)`);
  coreGlow.addColorStop(0.5, `rgba(${color1}, 0.2)`);
  coreGlow.addColorStop(1, `rgba(${color1}, 0)`);
  ctx.fillStyle = coreGlow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  const starsPerArm = 40; // Reduced for mobile perf
  for (let arm = 0; arm < spiralArms; arm++) {
    const armAngle = (arm / spiralArms) * Math.PI * 2;
    for (let i = 0; i < starsPerArm; i++) {
      const t = i / starsPerArm;
      const dist = t * radius;
      const spiral = armAngle + t * Math.PI * 2.5;
      const px = Math.cos(spiral) * dist;
      const py = Math.sin(spiral) * dist * 0.55;
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

  const haze = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
  haze.addColorStop(0, `rgba(${color1}, 0.08)`);
  haze.addColorStop(1, `rgba(${color2}, 0)`);
  ctx.fillStyle = haze;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function spawnSupernova(x: number, y: number): Supernova {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const particles: SupernovaParticle[] = [];
  for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 6;
    particles.push({
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      size: 1 + Math.random() * 3, life: 1, maxLife: 1,
      color: [palette.c1, palette.c2, palette.c3][Math.floor(Math.random() * 3)],
      type: 'spark',
    });
  }
  for (let i = 0; i < 15; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 2;
    particles.push({
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      size: 2 + Math.random() * 4, life: 1, maxLife: 1,
      color: palette.c3, type: 'debris',
    });
  }
  return { x, y, particles, shockwave: 0, shockwaveMax: 150 + Math.random() * 100, flash: 1, color1: palette.c1, color2: palette.c2, color3: palette.c3, alive: true };
}

function drawSupernova(ctx: CanvasRenderingContext2D, sn: Supernova) {
  if (sn.flash > 0) {
    const flashGrad = ctx.createRadialGradient(sn.x, sn.y, 0, sn.x, sn.y, 120 * sn.flash);
    flashGrad.addColorStop(0, `rgba(255, 255, 255, ${sn.flash * 0.8})`);
    flashGrad.addColorStop(0.3, `rgba(${sn.color3}, ${sn.flash * 0.5})`);
    flashGrad.addColorStop(1, `rgba(${sn.color1}, 0)`);
    ctx.fillStyle = flashGrad;
    ctx.beginPath();
    ctx.arc(sn.x, sn.y, 120 * sn.flash, 0, Math.PI * 2);
    ctx.fill();
  }
  if (sn.shockwave < sn.shockwaveMax) {
    const progress = sn.shockwave / sn.shockwaveMax;
    const alpha = (1 - progress) * 0.6;
    ctx.beginPath();
    ctx.arc(sn.x, sn.y, sn.shockwave, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${sn.color1}, ${alpha})`;
    ctx.lineWidth = 2 + (1 - progress) * 4;
    ctx.stroke();
  }
  for (const p of sn.particles) {
    if (p.life <= 0) continue;
    ctx.beginPath();
    if (p.type === 'spark') {
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.vx * 0.5, p.y - p.vy * 0.5);
      ctx.strokeStyle = `rgba(${p.color}, ${p.life * 0.8})`;
      ctx.lineWidth = p.size * p.life;
      ctx.stroke();
    } else {
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.life * 0.6})`;
      ctx.fill();
    }
  }
}

function updateSupernova(sn: Supernova) {
  sn.flash *= 0.94;
  sn.shockwave += 3;
  let allDead = sn.flash < 0.01 && sn.shockwave >= sn.shockwaveMax;
  for (const p of sn.particles) {
    if (p.life <= 0) continue;
    p.x += p.vx; p.y += p.vy;
    p.vx *= 0.98; p.vy *= 0.98;
    p.life -= p.type === 'spark' ? 0.018 : 0.008;
    if (p.life > 0) allDead = false;
  }
  if (allDead) sn.alive = false;
}

const CosmicCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paintRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);
  const frameRef = useRef(0);
  const celestialsRef = useRef<CelestialBody[]>([]);
  const supernovasRef = useRef<Supernova[]>([]);
  const [hasContent, setHasContent] = useState(false);
  const isTouchDevice = useRef(false);

  const clickCountRef = useRef(0);
  const bgStarsRef = useRef<BackgroundStar[]>([]);
  const pausedRef = useRef(false);

  const clearAll = useCallback(() => {
    celestialsRef.current = [];
    supernovasRef.current = [];
    bgStarsRef.current = [];
    if (paintRef.current) {
      const pctx = paintRef.current.getContext('2d');
      if (pctx) pctx.clearRect(0, 0, paintRef.current.width, paintRef.current.height);
    }
    setHasContent(false);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isTouch = 'ontouchstart' in window;
    isTouchDevice.current = isTouch;

    const paint = document.createElement('canvas');
    paintRef.current = paint;
    const pctx = paint.getContext('2d')!;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const oldData = paint.width > 0 && paint.height > 0 ? pctx.getImageData(0, 0, paint.width, paint.height) : null;
      canvas.width = w;
      canvas.height = h;
      paint.width = w;
      paint.height = h;
      if (oldData) pctx.putImageData(oldData, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Hide cursor only on non-touch
    if (!isTouch) {
      document.body.style.cursor = 'none';
    }

    const trailColors = [
      '74, 158, 255', '255, 255, 255', '200, 220, 255',
      '160, 80, 220', '245, 158, 11', '255, 80, 120',
      '40, 200, 180', '255, 120, 50',
    ];

    // Replace paint dots with micro celestials — cursor leaves planets/galaxies/stars
    const spawnCursorTrail = (px: number, py: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        if (roll < 0.5) {
          // Micro star
          bgStarsRef.current.push({
            x: px + (Math.random() - 0.5) * 40,
            y: py + (Math.random() - 0.5) * 40,
            size: 0.8 + Math.random() * 2,
            color: trailColors[Math.floor(Math.random() * trailColors.length)],
            opacity: 0.6 + Math.random() * 0.4,
            targetOpacity: 0.5 + Math.random() * 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
          });
        } else {
          // Tiny planet or galaxy
          const ox = px + (Math.random() - 0.5) * 60;
          const oy = py + (Math.random() - 0.5) * 60;
          const scale = 0.1 + Math.random() * 0.2;
          const type = roll < 0.85 ? 'planet' : 'galaxy';
          addCelestial(ox, oy, scale, type as 'planet' | 'galaxy');
        }
      }
      if (!hasContent) setHasContent(true);
    };

    // ─── Cosmic Stampede: periodically rush hundreds of celestials from edges toward center ───
    let stampedeTimer = 0;
    const triggerStampede = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const count = isTouch ? 60 : 150;
      
      for (let i = 0; i < count; i++) {
        // Spawn from random edge
        const edge = Math.floor(Math.random() * 4);
        let sx: number, sy: number;
        switch (edge) {
          case 0: sx = Math.random() * w; sy = -50 - Math.random() * 200; break;    // top
          case 1: sx = w + 50 + Math.random() * 200; sy = Math.random() * h; break; // right
          case 2: sx = Math.random() * w; sy = h + 50 + Math.random() * 200; break; // bottom
          default: sx = -50 - Math.random() * 200; sy = Math.random() * h; break;   // left
        }
        
        // Velocity toward center with spread
        const angle = Math.atan2(cy - sy + (Math.random() - 0.5) * h * 0.3, cx - sx + (Math.random() - 0.5) * w * 0.3);
        const speed = 1.5 + Math.random() * 3;
        
        const isGalaxy = Math.random() > 0.7;
        const body = spawnCelestial(sx, sy, 0.15 + Math.random() * 0.4, isGalaxy ? 'galaxy' : 'planet');
        body.vx = Math.cos(angle) * speed;
        body.vy = Math.sin(angle) * speed;
        body.opacity = 0;
        celestialsRef.current.push(body);
      }
      
      // Also spawn a burst of stars
      for (let i = 0; i < (isTouch ? 100 : 300); i++) {
        const edge = Math.floor(Math.random() * 4);
        let sx: number, sy: number;
        switch (edge) {
          case 0: sx = Math.random() * w; sy = -Math.random() * 100; break;
          case 1: sx = w + Math.random() * 100; sy = Math.random() * h; break;
          case 2: sx = Math.random() * w; sy = h + Math.random() * 100; break;
          default: sx = -Math.random() * 100; sy = Math.random() * h; break;
        }
        const angle = Math.atan2(cy - sy, cx - sx);
        const speed = 0.5 + Math.random() * 2;
        bgStarsRef.current.push({
          x: sx, y: sy,
          size: 0.5 + Math.random() * 2.5,
          color: trailColors[Math.floor(Math.random() * trailColors.length)],
          opacity: 0,
          targetOpacity: 0.4 + Math.random() * 0.6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
      
      // Throw in a few supernovas for extra chaos
      for (let i = 0; i < 3; i++) {
        supernovasRef.current.push(spawnSupernova(
          w * 0.2 + Math.random() * w * 0.6,
          h * 0.2 + Math.random() * h * 0.6
        ));
      }
      
      if (!hasContent) setHasContent(true);
    };
    
    const stampedeInterval = setInterval(() => {
      stampedeTimer++;
      if (stampedeTimer % 3 === 0) { // every ~15s (3 x 5s base)
        triggerStampede();
      }
    }, 5000);

    const addCelestial = (x: number, y: number, sizeScale = 1, forceType?: 'planet' | 'galaxy') => {
      celestialsRef.current.push(spawnCelestial(x, y, sizeScale, forceType));
      if (!hasContent) setHasContent(true);
    };

    // ─── Desktop mouse events ───
    let moveSpawnCounter = 0;
    const onMove = (e: MouseEvent) => {
      const prev = mouseRef.current;
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (speed > 2) {
        // Spawn celestials & stars along cursor path
        const intensity = Math.min(Math.floor(speed / 3), 6);
        spawnCursorTrail(e.clientX, e.clientY, intensity);
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = !!(target.closest('a, button, [role="button"], input, textarea, select, [tabindex]'));
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [tabindex], form')) return;
      clickCountRef.current++;
      if (clickCountRef.current % 5 === 0) {
        // Every 5 clicks → huge galaxy
        addCelestial(e.clientX, e.clientY, 3, 'galaxy');
      } else {
        addCelestial(e.clientX, e.clientY);
      }
    };

    const onDblClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [tabindex], form')) return;
      supernovasRef.current.push(spawnSupernova(e.clientX, e.clientY));
      if (!hasContent) setHasContent(true);
    };

    // ─── Touch events (mobile) ───
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [tabindex], form')) return;
      clickCountRef.current++;
      if (clickCountRef.current % 5 === 0) {
        addCelestial(touch.clientX, touch.clientY, 2.5, 'galaxy');
      } else {
        addCelestial(touch.clientX, touch.clientY, 0.7);
      }
    };

    let touchSpawnCounter = 0;
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      mouseRef.current = { x: touch.clientX, y: touch.clientY };
      spawnCursorTrail(touch.clientX, touch.clientY, 3);
      touchSpawnCounter++;
      if (touchSpawnCounter % 6 === 0) {
        const offsetX = touch.clientX + (Math.random() - 0.5) * 50;
        const offsetY = touch.clientY + (Math.random() - 0.5) * 50;
        addCelestial(offsetX, offsetY, 0.2);
      }
    };

    // ─── Auto-spawn: medium planet every 5 seconds ───
    const autoSpawnInterval = setInterval(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = 40 + Math.random() * (w - 80);
      const y = 40 + Math.random() * (h - 80);
      addCelestial(x, y, isTouch ? 0.8 : 1.2, 'planet');
    }, 5000);

    // ─── Background stars: spawn many with glow-up ───
    const spawnBgStars = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = isTouch ? 300 : 800;
      for (let i = 0; i < count; i++) {
        bgStarsRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: 0.5 + Math.random() * 2,
          color: trailColors[Math.floor(Math.random() * trailColors.length)],
          opacity: 0,
          targetOpacity: 0.3 + Math.random() * 0.5,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
      // Limit
      if (bgStarsRef.current.length > (isTouch ? 120 : 250)) {
        bgStarsRef.current.splice(0, bgStarsRef.current.length - (isTouch ? 120 : 250));
      }
      if (!hasContent) setHasContent(true);
    };
    spawnBgStars();
    const bgStarInterval = setInterval(spawnBgStars, 8000);

    // ─── Right-click hold (desktop): pause animation ───
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        pausedRef.current = true;
      }
    };
    const onMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        pausedRef.current = false;
      }
    };

    // ─── Long-press (mobile/tablet): reset everything ───
    let longPressTimer: ReturnType<typeof setTimeout> | null = null;
    const longPressThreshold = 600; // ms

    const onTouchStartForLongPress = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [tabindex], form')) return;
      longPressTimer = setTimeout(() => {
        longPressTimer = null;
        clearAll();
        setTimeout(spawnBgStars, 100);
      }, longPressThreshold);
    };

    const cancelLongPress = () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    };

    // Register events
    if (!isTouch) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseover', onOver);
      window.addEventListener('click', onClick);
      window.addEventListener('dblclick', onDblClick);
      window.addEventListener('contextmenu', onContextMenu);
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStartForLongPress, { passive: true });
    window.addEventListener('touchend', cancelLongPress, { passive: true });
    window.addEventListener('touchmove', cancelLongPress, { passive: true });

    const zoomSpeed = 0.1; // how fast the universe zooms in
    let zoomSpawnTimer = 0;

    let time = 0;
    const targetFps = isTouch ? 30 : 60;
    const frameInterval = 1000 / targetFps;
    let lastTime = 0;

    const draw = (timestamp: number) => {
      frameRef.current = requestAnimationFrame(draw);

      const delta = timestamp - lastTime;
      if (delta < frameInterval) return;
      lastTime = timestamp - (delta % frameInterval);

      time++;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Persistent paint layer
      ctx.drawImage(paint, 0, 0);

      // ─── Zoom-in: expand stars outward from center ───
      for (let i = bgStarsRef.current.length - 1; i >= 0; i--) {
        const star = bgStarsRef.current[i];
        // Glow up
        if (star.opacity < star.targetOpacity) {
          star.opacity = Math.min(star.opacity + 0.005, star.targetOpacity);
        }
        // Zoom drift: move away from center + grow
        const dx = star.x - cx;
        const dy = star.y - cy;
        star.x += dx * zoomSpeed + star.vx;
        star.y += dy * zoomSpeed + star.vy;
        star.size += star.size * zoomSpeed * 0.3;
        // Remove if off-screen or too large
        if (star.x < -50 || star.x > canvas.width + 50 || star.y < -50 || star.y > canvas.height + 50 || star.size > 8) {
          bgStarsRef.current.splice(i, 1);
          continue;
        }
        // Draw
        const sg = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        sg.addColorStop(0, `rgba(${star.color}, ${star.opacity})`);
        sg.addColorStop(1, `rgba(${star.color}, 0)`);
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
        ctx.fill();
      }

      // ─── Zoom-in: expand celestials outward from center ───
      for (let i = celestialsRef.current.length - 1; i >= 0; i--) {
        const body = celestialsRef.current[i];
        if (body.opacity < 1) body.opacity = Math.min(body.opacity + 0.02, 1);
        // Zoom drift
        const dx = body.x - cx;
        const dy = body.y - cy;
        body.x += dx * zoomSpeed + body.vx;
        body.y += dy * zoomSpeed + body.vy;
        body.radius += body.radius * zoomSpeed * 0.5;
        // Remove if way off-screen or too huge
        if (body.x < -200 || body.x > canvas.width + 200 || body.y < -200 || body.y > canvas.height + 200 || body.radius > 300) {
          celestialsRef.current.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = body.opacity;
        if (body.type === 'planet') {
          drawPlanet(ctx, body, time);
        } else {
          drawGalaxy(ctx, body, time);
        }
        ctx.globalAlpha = 1;
      }

      // ─── Spawn new celestials near center for infinite depth ───
      zoomSpawnTimer++;
      if (zoomSpawnTimer % (isTouch ? 8 : 5) === 0) {
        const spawnX = cx + (Math.random() - 0.5) * canvas.width * 0.5;
        const spawnY = cy + (Math.random() - 0.5) * canvas.height * 0.5;
        const tiny = spawnCelestial(spawnX, spawnY, 0.15);
        tiny.radius *= 0.2; // start tiny (very far away)
        celestialsRef.current.push(tiny);
      }
      // Also spawn stars near center continuously
      if (zoomSpawnTimer % 2 === 0) {
        const count = isTouch ? 15 : 30;
        for (let si = 0; si < count; si++) {
          bgStarsRef.current.push({
            x: cx + (Math.random() - 0.5) * canvas.width * 0.5,
            y: cy + (Math.random() - 0.5) * canvas.height * 0.5,
            size: 0.2 + Math.random() * 0.5,
            color: trailColors[Math.floor(Math.random() * trailColors.length)],
            opacity: 0,
            targetOpacity: 0.3 + Math.random() * 0.6,
            vx: 0,
            vy: 0,
          });
        }
      }

      // Supernovas
      const snovae = supernovasRef.current;
      for (let i = snovae.length - 1; i >= 0; i--) {
        updateSupernova(snovae[i]);
        drawSupernova(ctx, snovae[i]);
        if (!snovae[i].alive) snovae.splice(i, 1);
      }

      // Idle cursor spawning — spawn celestials at cursor position even when stationary
      if (!isTouch && time % 10 === 0) {
        const { x: mx, y: my } = mouseRef.current;
        if (mx > 0 && my > 0) {
          spawnCursorTrail(mx, my, 2);
        }
      }

      // Cursor orb (desktop only)
      if (!isTouch) {
        const { x, y } = mouseRef.current;
        const hovering = isHoveringRef.current;
        // Check if scrolled to bottom empty area (last screen)
        const scrollBottom = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const inBottomZone = scrollBottom >= docHeight - window.innerHeight * 0.5;
        const sizeMultiplier = inBottomZone ? 2 : 1;
        const radius = (hovering ? 18 : 10) * sizeMultiplier;

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
        ctx.lineWidth = 1 * sizeMultiplier;
        ctx.stroke();
      }
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearInterval(autoSpawnInterval);
      clearInterval(bgStarInterval);
      clearInterval(stampedeInterval);
      cancelLongPress();
      if (!isTouch) {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseover', onOver);
        window.removeEventListener('click', onClick);
        window.removeEventListener('dblclick', onDblClick);
        window.removeEventListener('contextmenu', onContextMenu);
      }
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStartForLongPress);
      window.removeEventListener('touchend', cancelLongPress);
      window.removeEventListener('touchmove', cancelLongPress);
      window.removeEventListener('resize', resize);
      if (!isTouch) document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
      {hasContent && (
        <button
          onClick={clearAll}
          className="fixed bottom-6 right-6 z-[10000] p-3 rounded-full glass border border-border/30 hover:border-ice/30 transition-all duration-300 hover:shadow-[0_0_25px_hsl(213_100%_65%/0.2)] hover:scale-110"
          aria-label="Clear cosmic canvas"
        >
          <img src={diamondLogo} alt="Clear" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(200,220,255,0.5)] animate-[spin_8s_linear_infinite]" />
        </button>
      )}
    </>
  );
};

export default CosmicCursor;
