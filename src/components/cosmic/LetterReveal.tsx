import { motion } from 'framer-motion';

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

const LetterReveal = ({ text, className = '', delay = 0, stagger = 0.03 }: LetterRevealProps) => {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block">
          {word.split('').map((char, ci) => {
            const totalIdx = words.slice(0, wi).join(' ').length + ci + (wi > 0 ? 1 : 0);
            return (
              <motion.span
                key={`${wi}-${ci}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: delay + totalIdx * stagger, ease: 'easeOut' }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default LetterReveal;
