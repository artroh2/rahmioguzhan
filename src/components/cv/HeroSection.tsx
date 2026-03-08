import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPhoto from '@/assets/hero-photo.png';

// Interactive letter component - becomes draggable/hoverable after landing
const InteractiveLetter = ({ char, x, y, w, h, dropTo, fallDuration, fallDelay, fallRotate }: {
  char: string; x: number; y: number; w: number; h: number;
  dropTo: number; fallDuration: number; fallDelay: number; fallRotate: number;
}) => {
  const [landed, setLanded] = useState(false);
  const [nudge, setNudge] = useState({ x: 0, y: 0, rotate: fallRotate });
  const lastMouse = useRef({ x: 0, y: 0, time: 0 });
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const landTime = (fallDuration + fallDelay) * 1000;
    const timer = setTimeout(() => setLanded(true), landTime);
    return () => clearTimeout(timer);
  }, [fallDuration, fallDelay]);

  // Track mouse velocity globally
  useEffect(() => {
    if (!landed) return;
    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY, time: Date.now() };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [landed]);

  const handleHover = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!landed) return;

    // Calculate mouse velocity for force
    const now = Date.now();
    const dt = now - lastMouse.current.time;
    let velocityX = 0;
    let velocityY = 0;

    if (dt > 0 && dt < 100) {
      const clientX = 'clientX' in e ? e.clientX : (e as React.TouchEvent).touches[0]?.clientX || 0;
      const clientY = 'clientY' in e ? e.clientY : (e as React.TouchEvent).touches[0]?.clientY || 0;
      velocityX = (clientX - lastMouse.current.x) / dt;
      velocityY = (clientY - lastMouse.current.y) / dt;
    }

    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    // Scale force based on speed: gentle hover = small nudge, fast swipe = big fling
    const force = Math.min(Math.max(speed * 80, 40), 800);

    const angle = speed > 0.5
      ? Math.atan2(velocityY, velocityX) // fling in mouse direction
      : Math.random() * Math.PI * 2;     // random if slow

    const flingX = Math.cos(angle) * force * (0.8 + Math.random() * 0.4);
    const flingY = Math.sin(angle) * force * (0.8 + Math.random() * 0.4);
    const spin = (Math.random() - 0.5) * force * 2;

    setNudge(prev => ({
      x: prev.x + flingX,
      y: prev.y + flingY,
      rotate: prev.rotate + spin,
    }));
  }, [landed]);

  return (
    <motion.span
      ref={spanRef}
      className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient inline-block cursor-grab active:cursor-grabbing select-none"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        pointerEvents: landed ? 'auto' : 'none',
      }}
      initial={{ y: 0, rotate: 0, opacity: 1 }}
      animate={landed ? {
        y: dropTo + nudge.y,
        rotate: nudge.rotate,
        x: nudge.x,
        opacity: 1,
      } : {
        y: dropTo,
        rotate: fallRotate,
        opacity: 1,
      }}
      transition={landed ? {
        type: 'spring',
        stiffness: 80,
        damping: 8,
        mass: 0.5,
      } : {
        duration: fallDuration,
        delay: fallDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={handleHover}
      onTouchStart={handleHover}
      whileHover={landed ? { scale: 1.15 } : undefined}
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
