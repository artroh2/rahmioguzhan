import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPhoto from '@/assets/hero-photo.png';

// ─── Draggable letter with physics explosion + drag-to-arrange ───
const DraggableLetter = ({
  char, originX, originY, w, h,
  explodeAngle, explodeForce, explodeDelay,
  onPositionUpdate, letterId, resetToOrigin,
}: {
  char: string; originX: number; originY: number; w: number; h: number;
  explodeAngle: number; explodeForce: number; explodeDelay: number;
  onPositionUpdate: (id: number, absX: number, absY: number) => void;
  letterId: number;
  resetToOrigin: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<'idle' | 'physics' | 'landed' | 'returning'>('idle');
  const [pos, setPos] = useState({ x: 0, y: 0, rotate: 0 });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const screenH = typeof window !== 'undefined' ? window.innerHeight : 800;

  // Physics explosion + gravity
  useEffect(() => {
    if (resetToOrigin) return; // don't start physics during reset
    const startDelay = setTimeout(() => {
      setPhase('physics');
      const speed = explodeForce * 2.5;
      let vx = Math.cos(explodeAngle) * speed;
      let vy = Math.sin(explodeAngle) * speed - 200;
      let vr = (Math.random() - 0.5) * 600;
      let cx = 0, cy = 0, cr = 0;

      const gravity = 980;
      const airDrag = 0.995;
      const bounceDamping = 0.4;
      const floorFriction = 0.92;
      const rotationDamping = 0.97;

      const footer = document.querySelector('footer');
      const floorY = footer
        ? footer.getBoundingClientRect().top + window.scrollY - originY - h - 2
        : screenH - originY - h - 20;
      const wallLeft = -originX + 5;
      const wallRight = screenW - originX - w - 5;

      let lastTime = performance.now();
      let settled = 0;
      let rafId: number;

      const step = (now: number) => {
        const dt = Math.min((now - lastTime) / 1000, 0.033);
        lastTime = now;
        vy += gravity * dt;
        vx *= airDrag; vy *= airDrag; vr *= rotationDamping;
        cx += vx * dt; cy += vy * dt; cr += vr * dt;

        if (cy >= floorY) { cy = floorY; vy = -Math.abs(vy) * bounceDamping; vx *= floorFriction; vr *= 0.7; }
        if (cx <= wallLeft) { cx = wallLeft; vx = Math.abs(vx) * bounceDamping; }
        else if (cx >= wallRight) { cx = wallRight; vx = -Math.abs(vx) * bounceDamping; }

        setPos({ x: cx, y: cy, rotate: cr });

        const totalSpeed = Math.abs(vx) + Math.abs(vy) + Math.abs(vr);
        if (cy >= floorY - 1 && totalSpeed < 15) {
          settled++;
          if (settled > 10) {
            const finalPos = { x: cx, y: floorY, rotate: 0 };
            setPos(finalPos);
            setPhase('landed');
            onPositionUpdate(letterId, originX + cx, originY + floorY);
            return;
          }
        } else { settled = 0; }
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }, explodeDelay * 1000);
    return () => clearTimeout(startDelay);
  }, [explodeAngle, explodeForce, explodeDelay, originX, originY, w, h, screenW, screenH, letterId, onPositionUpdate, resetToOrigin]);

  // When resetToOrigin becomes true, animate back to original position
  useEffect(() => {
    if (resetToOrigin && phase === 'landed') {
      setPhase('returning');
      // Animate to 0,0,0 with CSS transition
      setPos({ x: 0, y: 0, rotate: 0 });
    }
  }, [resetToOrigin, phase]);

  // Drag handlers
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (phase !== 'landed') return;
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    const el = ref.current;
    if (el) el.setPointerCapture(e.pointerId);
    dragOffset.current = {
      x: e.clientX - (originX + pos.x),
      y: e.clientY - (originY + pos.y),
    };
  }, [phase, originX, originY, pos.x, pos.y]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    const newAbsX = e.clientX - dragOffset.current.x;
    const newAbsY = e.clientY - dragOffset.current.y;
    setPos(prev => ({
      ...prev,
      x: newAbsX - originX,
      y: newAbsY - originY,
    }));
  }, [originX, originY]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    const el = ref.current;
    if (el) el.releasePointerCapture(e.pointerId);
    onPositionUpdate(letterId, originX + pos.x, originY + pos.y);
  }, [letterId, originX, originY, pos.x, pos.y, onPositionUpdate]);

  const isLanded = phase === 'landed';
  const isReturning = phase === 'returning';

  return (
    <span
      ref={ref}
      className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient inline-block select-none"
      style={{
        position: 'absolute',
        left: originX,
        top: originY,
        width: w,
        height: h,
        pointerEvents: isLanded ? 'auto' : 'none',
        cursor: isLanded ? 'grab' : 'default',
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
        transition: dragging.current ? 'none' : isReturning ? 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)' : undefined,
        zIndex: isLanded ? 10000 : 9999,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
};

// ─── Main Hero Section ───
const HeroSection = () => {
  const { t } = useLanguage();
  const [gameKey, setGameKey] = useState(0);
  const [lettersFalling, setLettersFalling] = useState(false);
  const [resetToOrigin, setResetToOrigin] = useState(false);
  const [allLanded, setAllLanded] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [letterRects, setLetterRects] = useState<{ char: string; x: number; y: number; w: number; h: number }[]>([]);
  const letterPositions = useRef<Map<number, { x: number; y: number }>>(new Map());
  const landedCount = useRef(0);
  const checkTimeout = useRef<ReturnType<typeof setTimeout>>();

  const name = t('hero.title');

  // Capture letter positions and start explosion
  useEffect(() => {
    letterPositions.current.clear();
    landedCount.current = 0;
    setLettersFalling(false);
    setResetToOrigin(false);
    setAllLanded(false);
    const fallTimer = setTimeout(() => {
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
  }, [gameKey]);

  // Check if letters are arranged in the correct order (left-to-right)
  const checkNameCompletion = useCallback(() => {
    if (checkTimeout.current) clearTimeout(checkTimeout.current);
    if (resetToOrigin) return;
    checkTimeout.current = setTimeout(() => {
      const positions = letterPositions.current;
      const nonSpaceIndices: number[] = [];
      letterRects.forEach((l, i) => {
        if (l.char.trim() !== '') nonSpaceIndices.push(i);
      });
      if (positions.size < nonSpaceIndices.length) return;

      // Check if sorted by x position matches original order
      const sortedByX = [...nonSpaceIndices].sort((a, b) => {
        const posA = positions.get(a);
        const posB = positions.get(b);
        if (!posA || !posB) return 0;
        return posA.x - posB.x;
      });

      const isCorrectOrder = nonSpaceIndices.every((idx, i) => sortedByX[i] === idx);

      if (isCorrectOrder) {
        const yValues = nonSpaceIndices.map(i => positions.get(i)?.y || 0);
        const minY = Math.min(...yValues);
        const maxY = Math.max(...yValues);
        // More forgiving: 150px vertical tolerance
        if (maxY - minY < 150) {
          // Animate letters back to original positions
          setResetToOrigin(true);
          // After animation completes, hide falling letters and show original h1
          setTimeout(() => {
            setLettersFalling(false);
            letterPositions.current.clear();
            // Re-trigger explosion after a pause
            setTimeout(() => {
              setResetToOrigin(false);
              setGameKey(k => k + 1);
            }, 2000);
          }, 1500);
        }
      }
    }, 500);
  }, [letterRects, resetToOrigin]);

  const handlePositionUpdate = useCallback((id: number, absX: number, absY: number) => {
    letterPositions.current.set(id, { x: absX, y: absY });
    checkNameCompletion();
  }, [checkNameCompletion]);

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
                      {firstLine.split('').map((char) => {
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
                      {secondLine.split('').map((char) => {
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

      {/* Exploding & draggable letters */}
      {lettersFalling && letterRects.length > 0 && createPortal(
        <div key={gameKey} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, overflow: 'visible', pointerEvents: 'none' }}>
          {letterRects.map((letter, i) => {
            const explodeAngle = (Math.PI * 2 * i) / letterRects.length + (Math.random() - 0.5) * 0.8;
            const explodeForce = 200 + Math.random() * 400;
            const explodeDelay = Math.random() * 0.3;
            return (
              <DraggableLetter
                key={`${gameKey}-${i}`}
                letterId={i}
                char={letter.char}
                originX={letter.x}
                originY={letter.y}
                w={letter.w}
                h={letter.h}
                explodeAngle={explodeAngle}
                explodeForce={explodeForce}
                explodeDelay={explodeDelay}
                onPositionUpdate={handlePositionUpdate}
                resetToOrigin={resetToOrigin}
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
