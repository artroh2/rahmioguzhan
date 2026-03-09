import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPhoto from '@/assets/hero-photo.png';

// Interactive letter component - becomes draggable/hoverable after landing
const InteractiveLetter = ({ char, x, y, w, h, explodeAngle, explodeForce, explodeDelay }: {
  char: string; x: number; y: number; w: number; h: number;
  explodeAngle: number; explodeForce: number; explodeDelay: number;
}) => {
  const [phase, setPhase] = useState<'idle' | 'physics' | 'landed'>('idle');
  const [pos, setPos] = useState({ x: 0, y: 0, rotate: 0 });
  const [nudge, setNudge] = useState({ x: 0, y: 0, rotate: 0 });
  const lastMouse = useRef({ x: 0, y: 0, time: 0 });
  const physicsRef = useRef({ vx: 0, vy: 0, vr: 0 });

  const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const screenH = typeof window !== 'undefined' ? window.innerHeight : 800;

  // Full physics simulation: explosion → arc → gravity → bounce → settle
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setPhase('physics');

      // Initial explosion velocity
      const speed = explodeForce * 2.5;
      let vx = Math.cos(explodeAngle) * speed;
      let vy = Math.sin(explodeAngle) * speed - 200; // upward bias for arc
      let vr = (Math.random() - 0.5) * 600;
      let cx = 0, cy = 0, cr = 0;

      const gravity = 980;
      const airDrag = 0.995;
      const bounceDamping = 0.4;
      const floorFriction = 0.92;
      const rotationDamping = 0.97;

      const footer = document.querySelector('footer');
      const floorY = footer
        ? footer.getBoundingClientRect().top + window.scrollY - y - h - 2
        : screenH - y - h - 20;
      const wallLeft = -x + 5;
      const wallRight = screenW - x - w - 5;

      let lastTime = performance.now();
      let settled = 0;

      const step = (now: number) => {
        const dt = Math.min((now - lastTime) / 1000, 0.033);
        lastTime = now;

        // Apply gravity
        vy += gravity * dt;

        // Air resistance
        vx *= airDrag;
        vy *= airDrag;
        vr *= rotationDamping;

        // Update position
        cx += vx * dt;
        cy += vy * dt;
        cr += vr * dt;

        // Floor collision with bounce
        if (cy >= floorY) {
          cy = floorY;
          vy = -Math.abs(vy) * bounceDamping;
          vx *= floorFriction;
          vr *= 0.7;
          // Add slight random spin on bounce
          vr += (Math.random() - 0.5) * 50;
        }

        // Wall collisions
        if (cx <= wallLeft) {
          cx = wallLeft;
          vx = Math.abs(vx) * bounceDamping;
          vr += (Math.random() - 0.5) * 80;
        } else if (cx >= wallRight) {
          cx = wallRight;
          vx = -Math.abs(vx) * bounceDamping;
          vr += (Math.random() - 0.5) * 80;
        }

        setPos({ x: cx, y: cy, rotate: cr });

        // Check if settled
        const totalSpeed = Math.abs(vx) + Math.abs(vy) + Math.abs(vr);
        if (cy >= floorY - 1 && totalSpeed < 15) {
          settled++;
          if (settled > 10) {
            setPos({ x: cx, y: floorY, rotate: cr });
            setPhase('landed');
            return;
          }
        } else {
          settled = 0;
        }

        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, explodeDelay * 1000);
    return () => clearTimeout(startDelay);
  }, [explodeAngle, explodeForce, explodeDelay, x, y, w, h, screenW, screenH]);

  // Mouse tracking for interactive fling
  useEffect(() => {
    if (phase !== 'landed') return;
    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY, time: Date.now() };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [phase]);

  const handleHover = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (phase !== 'landed') return;
    const now = Date.now();
    const dt = now - lastMouse.current.time;
    let velocityX = 0, velocityY = 0;
    if (dt > 0 && dt < 100) {
      const clientX = 'clientX' in e ? e.clientX : (e as React.TouchEvent).touches[0]?.clientX || 0;
      const clientY = 'clientY' in e ? e.clientY : (e as React.TouchEvent).touches[0]?.clientY || 0;
      velocityX = (clientX - lastMouse.current.x) / dt;
      velocityY = (clientY - lastMouse.current.y) / dt;
    }
    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    const force = Math.min(Math.max(speed * 80, 40), 800);
    const angle = speed > 0.5 ? Math.atan2(velocityY, velocityX) : Math.random() * Math.PI * 2;
    setNudge(prev => ({
      x: prev.x + Math.cos(angle) * force * (0.8 + Math.random() * 0.4),
      y: prev.y + Math.sin(angle) * force * (0.8 + Math.random() * 0.4),
      rotate: prev.rotate + (Math.random() - 0.5) * force * 2,
    }));
  }, [phase]);

  const isLanded = phase === 'landed';

  return (
    <motion.span
      className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient inline-block cursor-grab active:cursor-grabbing select-none"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        pointerEvents: isLanded ? 'auto' : 'none',
        transform: phase !== 'idle'
          ? `translate(${pos.x + (isLanded ? nudge.x : 0)}px, ${pos.y + (isLanded ? nudge.y : 0)}px) rotate(${pos.rotate + (isLanded ? nudge.rotate : 0)}deg)`
          : undefined,
      }}
      initial={{ opacity: 1 }}
      animate={isLanded ? {
        x: pos.x + nudge.x,
        y: pos.y + nudge.y,
        rotate: pos.rotate + nudge.rotate,
      } : undefined}
      transition={isLanded ? { type: 'spring', stiffness: 80, damping: 8, mass: 0.5 } : undefined}
      onMouseEnter={handleHover}
      onTouchStart={handleHover}
      whileHover={isLanded ? { scale: 1.15 } : undefined}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();
  const [lettersFalling, setLettersFalling] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [letterRects, setLetterRects] = useState<{ char: string; x: number; y: number; w: number; h: number }[]>([]);

  const name = t('hero.title');

  useEffect(() => {
    const fallTimer = setTimeout(() => {
      // Capture each letter's position before falling
      if (nameRef.current) {
        const spans = nameRef.current.querySelectorAll('span[data-letter]');
        const rects: { char: string; x: number; y: number; w: number; h: number }[] = [];
        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          rects.push({
            char: span.textContent || '',
            x: rect.left,
            y: rect.top + window.scrollY,
            w: rect.width,
            h: rect.height,
          });
        });
        setLetterRects(rects);
      }
      setLettersFalling(true);
    }, 5000);
    return () => clearTimeout(fallTimer);
  }, []);

  // Calculate drop target: just above the footer's top border
  const getDropTarget = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      return footer.getBoundingClientRect().top + window.scrollY;
    }
    return document.documentElement.scrollHeight;
  };

  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroPhoto}
            alt="Rahmi Oğuzhan Hacıeyüpoğlu"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/60" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 60% 50%, transparent 30%, hsl(220 25% 7% / 0.7) 100%)'
          }} />
        </div>

        {/* Bokeh-like decorative dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[15%] w-3 h-3 rounded-full bg-accent/40 blur-[2px]"
          />
          <motion.div
            animate={{ y: [5, -8, 5], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-primary/30 blur-[1px]"
          />
          <motion.div
            animate={{ y: [-3, 6, -3], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] right-[22%] w-2 h-2 rounded-full bg-accent/30 blur-[2px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1
              ref={nameRef}
              className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight ${lettersFalling ? 'invisible' : ''}`}
            >
              {(() => {
                const parts = name.split(' ');
                const firstLine = parts.length >= 3 ? parts.slice(0, 2).join(' ') : parts[0];
                const secondLine = parts.length >= 3 ? parts.slice(2).join(' ') : parts.slice(1).join(' ');
                let charIndex = 0;
                return (
                  <>
                    <span className="inline lg:inline">
                      {firstLine.split('').map((char, i) => {
                        const idx = charIndex++;
                        return (
                          <span key={idx} data-letter className="text-gradient inline-block" style={{ minWidth: char === ' ' ? '0.3em' : undefined }}>
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        );
                      })}
                    </span>
                    <br className="lg:hidden" />
                    <span className="hidden lg:inline">
                      {(() => { charIndex++; return (
                        <span data-letter className="text-gradient inline-block" style={{ minWidth: '0.3em' }}>{'\u00A0'}</span>
                      ); })()}
                    </span>
                    <span className="inline lg:inline">
                      {secondLine.split('').map((char, i) => {
                        const idx = charIndex++;
                        return (
                          <span key={idx} data-letter className="text-gradient inline-block" style={{ minWidth: char === ' ' ? '0.3em' : undefined }}>
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        );
                      })}
                    </span>
                  </>
                );
              })()}
            </h1>
          </motion.div>
        </div>

        {/* Warm glow line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Falling letters - rendered as fixed overlay so they can travel across the entire page */}
      {lettersFalling && letterRects.length > 0 && createPortal(
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, overflow: 'visible', pointerEvents: 'none' }}>
          {letterRects.map((letter, i) => {
            const explodeAngle = (Math.PI * 2 * i) / letterRects.length + (Math.random() - 0.5) * 0.8;
            const explodeForce = 200 + Math.random() * 400;
            const explodeDelay = Math.random() * 0.3;
            return (
              <InteractiveLetter
                key={`fall-${i}`}
                char={letter.char}
                x={letter.x}
                y={letter.y}
                w={letter.w}
                h={letter.h}
                explodeAngle={explodeAngle}
                explodeForce={explodeForce}
                explodeDelay={explodeDelay}
              />
            );
          })}
        </div>,
        document.body
      )}
    </>
  );
};

export default HeroSection;
