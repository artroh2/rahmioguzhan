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
  const [phase, setPhase] = useState<'idle' | 'explode' | 'gravity' | 'landed'>('idle');
  const [nudge, setNudge] = useState({ x: 0, y: 0, rotate: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0, rotate: 0 });
  const lastMouse = useRef({ x: 0, y: 0, time: 0 });
  const gravityRef = useRef<number>(0);
  const velRef = useRef({ x: 0, y: 0 });

  // Explosion target position (clamped to screen)
  const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const screenH = typeof window !== 'undefined' ? window.innerHeight : 800;
  const explodeX = Math.cos(explodeAngle) * explodeForce;
  const explodeY = Math.sin(explodeAngle) * explodeForce;
  const explodeRotate = (Math.random() - 0.5) * 720;

  // Clamp explosion target to screen bounds
  const clampedExplodeX = Math.max(-x + 10, Math.min(screenW - x - w - 10, explodeX));
  const clampedExplodeY = Math.max(-y + 10, Math.min(screenH - y - h - 10, explodeY));

  useEffect(() => {
    // Start explosion after delay
    const t1 = setTimeout(() => setPhase('explode'), explodeDelay * 1000);
    // After explosion settles, start gravity
    const t2 = setTimeout(() => {
      setPhase('gravity');
    }, (explodeDelay + 0.8) * 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [explodeDelay]);

  // Gravity phase: animate falling with requestAnimationFrame
  useEffect(() => {
    if (phase !== 'gravity') return;
    let raf: number;
    let lastTime = performance.now();
    const startX = clampedExplodeX;
    let curX = startX;
    let curY = clampedExplodeY;
    let curRotate = explodeRotate;
    let vy = 0;
    const gravity = 600; // px/s²

    // Find footer top for floor
    const footer = document.querySelector('footer');
    const floorY = footer
      ? footer.getBoundingClientRect().top + window.scrollY - y - h - 5
      : screenH - y - h - 20;

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      vy += gravity * dt;
      curY += vy * dt;
      curRotate += vy * dt * 0.3;

      if (curY >= floorY) {
        curY = floorY;
        vy = -vy * 0.3; // bounce
        if (Math.abs(vy) < 30) {
          // Settled
          setPos({ x: curX, y: curY, rotate: curRotate });
          velRef.current = { x: 0, y: 0 };
          setPhase('landed');
          return;
        }
      }

      setPos({ x: curX, y: curY, rotate: curRotate });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // Mouse velocity tracking for interactive fling
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

  const getAnimateProps = () => {
    if (phase === 'idle') return { x: 0, y: 0, rotate: 0, opacity: 1 };
    if (phase === 'explode') return { x: clampedExplodeX, y: clampedExplodeY, rotate: explodeRotate, opacity: 1 };
    // gravity & landed use direct pos
    return {
      x: pos.x + (isLanded ? nudge.x : 0),
      y: pos.y + (isLanded ? nudge.y : 0),
      rotate: pos.rotate + (isLanded ? nudge.rotate : 0),
      opacity: 1,
    };
  };

  const getTransition = () => {
    if (phase === 'explode') return { duration: 0.5, ease: [0.2, 0.8, 0.3, 1] as [number, number, number, number] };
    if (isLanded) return { type: 'spring' as const, stiffness: 80, damping: 8, mass: 0.5 };
    return { duration: 0 };
  };

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
      }}
      initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      animate={getAnimateProps()}
      transition={getTransition()}
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
            const footerTop = getDropTarget();
            const dropTo = footerTop - letter.y - letter.h - (Math.random() * 15);
            const fallDuration = 5 + Math.random() * 3;
            const fallDelay = Math.random() * 0.8;
            const fallRotate = (Math.random() - 0.5) * 180;
            return (
              <InteractiveLetter
                key={`fall-${i}`}
                char={letter.char}
                x={letter.x}
                y={letter.y}
                w={letter.w}
                h={letter.h}
                dropTo={dropTo}
                fallDuration={fallDuration}
                fallDelay={fallDelay}
                fallRotate={fallRotate}
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
