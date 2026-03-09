import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPhoto from '@/assets/hero-photo.png';

// ─── Physics Letter ───
// Each letter knows its "origin" (where it was in the h1), and maintains an offset (pos).
// Commands: 'explode' → physics sim, 'assemble' → animate to assembleTarget, 'idle' → draggable
interface LetterCommand {
  type: 'explode';
  angle: number;
  force: number;
  delay: number;
  epoch: number; // unique id to distinguish repeated explosions
}

const PhysicsLetter = ({
  char, originX, originY, w, h, letterId,
  command, assembleTarget, onLanded, onDragEnd,
}: {
  char: string; originX: number; originY: number; w: number; h: number; letterId: number;
  command: LetterCommand | null;
  assembleTarget: { x: number; y: number } | null;
  onLanded: (id: number) => void;
  onDragEnd: (id: number, absX: number, absY: number) => void;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<'waiting' | 'physics' | 'landed' | 'assembling'>('waiting');
  const [pos, setPos] = useState({ x: 0, y: 0, rotate: 0 });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const explodeEpoch = useRef(0);

  const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const screenH = typeof window !== 'undefined' ? window.innerHeight : 800;

  // React to new explode commands
  useEffect(() => {
    if (!command) return;

    if (command.type === 'explode') {
      const timeout = setTimeout(() => {
        setPhase('physics');
        const speed = command.force * 2.5;
        let vx = Math.cos(command.angle) * speed;
        let vy = Math.sin(command.angle) * speed - 200;
        let vr = (Math.random() - 0.5) * 600;
        // Start from current position
        let cx = pos.x, cy = pos.y, cr = pos.rotate;

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
              setPos({ x: cx, y: floorY, rotate: 0 });
              setPhase('landed');
              onLanded(letterId);
              return;
            }
          } else { settled = 0; }
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, command.delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [command]);

  // React to assemble target
  useEffect(() => {
    if (assembleTarget && (phase === 'landed' || phase === 'waiting')) {
      setPhase('assembling');
      setPos({
        x: assembleTarget.x - originX,
        y: assembleTarget.y - originY,
        rotate: 0,
      });
      // After animation, mark as landed
      const t = setTimeout(() => {
        setPhase('landed');
        onLanded(letterId);
      }, 1600);
      return () => clearTimeout(t);
    }
  }, [assembleTarget]);

  // Drag
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (phase !== 'landed') return;
    e.preventDefault(); e.stopPropagation();
    dragging.current = true;
    ref.current?.setPointerCapture(e.pointerId);
    dragOffset.current = { x: e.clientX - (originX + pos.x), y: e.clientY - (originY + pos.y) };
  }, [phase, originX, originY, pos.x, pos.y]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    setPos(prev => ({
      ...prev,
      x: e.clientX - dragOffset.current.x - originX,
      y: e.clientY - dragOffset.current.y - originY,
    }));
  }, [originX, originY]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    ref.current?.releasePointerCapture(e.pointerId);
    onDragEnd(letterId, originX + pos.x, originY + pos.y);
  }, [letterId, originX, originY, pos.x, pos.y, onDragEnd]);

  const isLanded = phase === 'landed';
  const isAssembling = phase === 'assembling';

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
        transition: dragging.current ? 'none' : isAssembling ? 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : undefined,
        zIndex: isLanded || isAssembling ? 10000 : 9999,
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
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [letterRects, setLetterRects] = useState<{ char: string; x: number; y: number; w: number; h: number }[]>([]);
  const [active, setActive] = useState(false); // letters portal is active
  const [commands, setCommands] = useState<(LetterCommand | null)[]>([]);
  const [assembleTargets, setAssembleTargets] = useState<({ x: number; y: number } | null)[]>([]);
  const [showButtons, setShowButtons] = useState(false);
  const [isAssembled, setIsAssembled] = useState(false);
  const landedCount = useRef(0);
  const commandEpoch = useRef(0); // to create unique command objects

  const name = t('hero.title');

  // Initial capture + first explosion after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
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
        setActive(true);
        // Trigger first explosion
        triggerExplode(rects.length);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const triggerExplode = useCallback((count: number) => {
    commandEpoch.current += 1;
    const epoch = commandEpoch.current;
    landedCount.current = 0;
    setShowButtons(false);
    setIsAssembled(false);
    setAssembleTargets([]);
    const cmds: LetterCommand[] = [];
    for (let i = 0; i < count; i++) {
      cmds.push({
        type: 'explode',
        angle: (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8,
        force: 200 + Math.random() * 400,
        delay: Math.random() * 0.3,
      });
    }
    setCommands(cmds);
  }, []);

  const handleLanded = useCallback(() => {
    landedCount.current += 1;
    if (landedCount.current >= letterRects.length && letterRects.length > 0) {
      setShowButtons(true);
    }
  }, [letterRects.length]);

  const handleDragEnd = useCallback((_id: number, _absX: number, _absY: number) => {
    // Could be used for manual puzzle detection in the future
  }, []);

  // "Düzelt" - assemble letters into name near footer
  const handleFix = useCallback(() => {
    setShowButtons(false);
    setCommands([]); // clear explode commands

    const footer = document.querySelector('footer');
    const assembleY = footer
      ? footer.getBoundingClientRect().top + window.scrollY - 80
      : window.innerHeight - 80;

    const totalWidth = letterRects.reduce((sum, l) => sum + l.w, 0);
    const screenW = window.innerWidth;
    let startX = (screenW - totalWidth) / 2;

    const targets: ({ x: number; y: number } | null)[] = [];
    let curX = startX;
    letterRects.forEach((letter) => {
      targets.push({ x: curX, y: assembleY });
      curX += letter.w;
    });

    landedCount.current = 0;
    setAssembleTargets(targets);
    setIsAssembled(true);
  }, [letterRects]);

  // "Patlat" - re-explode
  const handleExplode = useCallback(() => {
    setShowButtons(false);
    setAssembleTargets([]);
    setIsAssembled(false);
    triggerExplode(letterRects.length);
  }, [letterRects.length, triggerExplode]);

  // Calculate button position
  const getButtonY = () => {
    const footer = document.querySelector('footer');
    return footer
      ? footer.getBoundingClientRect().top + window.scrollY - 50
      : window.innerHeight - 60;
  };

  const buttonStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    pointerEvents: 'auto',
    padding: '8px 24px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.2s',
    ...extra,
  });

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

        {/* Content - Name (visible until first explosion) */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1
              ref={nameRef}
              className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight ${active ? 'invisible' : ''}`}
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

      {/* Letters portal - always active once triggered */}
      {active && letterRects.length > 0 && createPortal(
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, overflow: 'visible', pointerEvents: 'none' }}>
          {letterRects.map((letter, i) => (
            <PhysicsLetter
              key={`letter-${i}`}
              letterId={i}
              char={letter.char}
              originX={letter.x}
              originY={letter.y}
              w={letter.w}
              h={letter.h}
              command={commands[i] || null}
              assembleTarget={assembleTargets[i] || null}
              onLanded={handleLanded}
              onDragEnd={handleDragEnd}
            />
          ))}

          {/* Buttons */}
          {showButtons && (() => {
            const btnY = getButtonY();
            return (
              <div style={{
                position: 'absolute',
                left: '50%',
                top: btnY,
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                zIndex: 10001,
                pointerEvents: 'auto',
              }}>
                {!isAssembled && (
                  <button
                    onClick={handleFix}
                    className="text-gradient-button"
                    style={buttonStyle({
                      color: 'hsl(var(--background))',
                      background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)), hsl(var(--primary)))',
                    })}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    {t('hero.fix')}
                  </button>
                )}
                {isAssembled && (
                  <button
                    onClick={handleExplode}
                    className="text-gradient-button"
                    style={buttonStyle({
                      color: 'hsl(var(--background))',
                      background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)), hsl(var(--primary)))',
                    })}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    {t('hero.explode')}
                  </button>
                )}
              </div>
            );
          })()}
        </div>,
        document.body
      )}
    </>
  );
};

export default HeroSection;
