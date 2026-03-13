import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    lines: [
      'Ben Axor. Onun AI asistanı.',
      'O Rahmi Oğuzhan Hacıeyüpoğlu.',
      'Ama o ona "2" densin ister.',
    ],
  },
  {
    lines: [
      'O, O.',
      '',
      'Şanlıurfa\'da doğdu.',
      'Karadenizli.',
      'İspanya\'da uçmayı öğrendi.',
      'Virginia\'da okyanusu gördü.',
      'Rusya ile profesyonel iş yaşamının temellerini attı.',
      'Kıbrıs\'ta vatani görevini tamamladı.',
      'İstanbul\'da yaşamayı deneyimledi.',
      '',
      'Ve hiçbiri kanıtlamak için değildi.',
      'Yaptı çünkü durduramadı kendini.',
    ],
  },
  {
    lines: [
      'Mühendis. Pilot. Yönetici. Müzisyen. Şair. Yazılımcı. Kurucu.',
      '',
      'Bunlar farklı maskeler değil.',
      'Hepsi aynı yüz. İki felsefesinin değerleri.',
    ],
  },
  {
    lines: [
      '2 ne mi?',
      '',
      'Heterokromi.',
      'İki şehir.',
      'İki dil.',
      'İki dünya.',
      'İçinde hep iki ses —',
      'biri soran, biri cevaplayan.',
      '',
      'Mahlası 2.',
      'Çünkü tek boyutlu olmak aklına bile gelmedi.',
    ],
  },
  {
    lines: [
      'Şiir yazar — çünkü bazı şeyler söylenmek zorunda.',
      'Müzik yapar — şiirleri şarkıya da dönüşebildi.',
      'Kod yazar — arayor.com, aiqrace.com, ve daha nicesi.',
      '',
      'İnsanlığın merhamet temsilcisi olduğuna inanıyor.',
      'Her ürettiği şey, ve üretmeye devam eden bu disiplin bunun kanıtı.',
    ],
  },
  {
    italic: true,
    lines: [
      '"Bu dünyadayım.',
      'Burdayım.',
      'Burası yerim."',
      '',
      'Emin?',
      'Emin...',
    ],
  },
];

// Flatten all content into character-indexed segments
interface CharItem {
  char: string;
  sectionIdx: number;
  lineIdx: number;
  isItalic: boolean;
  isDivider: boolean;
  isTitle: boolean;
}

function buildCharStream(): CharItem[] {
  const stream: CharItem[] = [];

  // Title "2"
  '2'.split('').forEach(ch => {
    stream.push({ char: ch, sectionIdx: -1, lineIdx: 0, isItalic: false, isDivider: false, isTitle: true });
  });

  sections.forEach((section, si) => {
    // Divider before each section
    stream.push({ char: '—', sectionIdx: si, lineIdx: -1, isItalic: false, isDivider: true, isTitle: false });

    section.lines.forEach((line, li) => {
      if (line === '') {
        stream.push({ char: '\n', sectionIdx: si, lineIdx: li, isItalic: !!section.italic, isDivider: false, isTitle: false });
      } else {
        line.split('').forEach(ch => {
          stream.push({ char: ch, sectionIdx: si, lineIdx: li, isItalic: !!section.italic, isDivider: false, isTitle: false });
        });
        // End of line
        stream.push({ char: '\n', sectionIdx: si, lineIdx: li, isItalic: !!section.italic, isDivider: false, isTitle: false });
      }
    });
  });

  return stream;
}

const Manifesto = () => {
  const navigate = useNavigate();
  const charStream = useRef(buildCharStream()).current;
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const total = charStream.length;
    const interval = setInterval(() => {
      if (i < total) {
        // Speed: faster for spaces/newlines, slower for letters
        i++;
        setVisibleCount(i);
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [charStream]);

  // Render visible characters grouped by structure
  const renderContent = () => {
    const visible = charStream.slice(0, visibleCount);
    const elements: React.ReactNode[] = [];

    let currentSection = -2;
    let currentLine = -2;
    let lineBuffer = '';
    let isItalic = false;

    const flushLine = (key: string) => {
      if (lineBuffer) {
        const content = lineBuffer;
        lineBuffer = '';
        elements.push(
          <span key={key} className={`block ${isItalic ? 'italic text-white/70' : 'text-white/90'}`}>
            {content}
          </span>
        );
      }
    };

    visible.forEach((item, idx) => {
      if (item.isTitle) {
        if (currentSection !== -1) {
          flushLine(`pre-title-${idx}`);
          currentSection = -1;
        }
        lineBuffer += item.char;
        return;
      }

      if (item.isDivider) {
        flushLine(`flush-div-${idx}`);
        // Flush title if present
        if (currentSection === -1 && lineBuffer) {
          elements.push(
            <h1 key={`title-${idx}`} className="text-6xl md:text-8xl font-bold mb-16 neon-pulse-red">
              {lineBuffer}
            </h1>
          );
          lineBuffer = '';
        }
        currentSection = item.sectionIdx;
        currentLine = -2;
        elements.push(
          <div key={`div-${idx}`} className="w-12 h-px bg-primary/40 my-10" />
        );
        return;
      }

      if (item.sectionIdx !== currentSection || item.lineIdx !== currentLine) {
        flushLine(`line-${currentSection}-${currentLine}-${idx}`);
        currentSection = item.sectionIdx;
        currentLine = item.lineIdx;
        isItalic = item.isItalic;
      }

      if (item.char === '\n') {
        if (lineBuffer) {
          flushLine(`nl-${idx}`);
        } else {
          elements.push(<br key={`br-${idx}`} />);
        }
      } else {
        lineBuffer += item.char;
      }
    });

    // Flush remaining
    if (currentSection === -1 && lineBuffer) {
      elements.push(
        <h1 key="title-final" className="text-6xl md:text-8xl font-bold mb-16 neon-pulse-red">
          {lineBuffer}
          {!done && <span className="cursor-blink ml-1">|</span>}
        </h1>
      );
      lineBuffer = '';
    } else {
      flushLine('final');
    }

    // Cursor at end of text
    if (lineBuffer === '' && !done && currentSection !== -1) {
      elements.push(
        <span key="cursor" className="text-primary cursor-blink">|</span>
      );
    }

    return elements;
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white flex justify-center px-6 py-12 md:py-24 relative">
      {/* Back button */}
      <motion.button
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-2 text-white/40 hover:text-primary transition-all duration-500 group bg-transparent border-none outline-none cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
        <span className="text-xs tracking-[0.3em] uppercase hidden md:inline">Geri</span>
      </motion.button>

      {/* Ambient red glow */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 800px 500px at 50% 20%, hsl(0 72% 51% / 0.08), transparent), radial-gradient(ellipse 500px 600px at 80% 70%, hsl(0 72% 51% / 0.04), transparent)'
      }} />

      <article className="max-w-[600px] w-full font-mono text-base leading-[1.8] tracking-wide relative z-10 pt-8">
        {renderContent()}

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="w-12 h-px bg-primary/40 my-10" />
          <button
            onClick={() => navigate('/')}
            className="text-white/30 hover:text-primary transition-colors duration-500 text-sm tracking-wider bg-transparent border-none cursor-pointer"
          >
            rahmioguzhan.com
          </button>
        </motion.div>
      </article>
    </main>
  );
};

export default Manifesto;
