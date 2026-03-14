import { motion } from 'framer-motion';
import HeroCard from './HeroCard';
import ProjectCard from './ProjectCard';
import MusicCard from './MusicCard';

import arayorLogo from '@/assets/arayor-logo.png';
import aiqraceLogo from '@/assets/aiqrace-logo.png';
import worldmeetsLogo from '@/assets/worldmeets-logo.png';
import mulkexLogo from '@/assets/mulkex-logo.png';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const BentoGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]"
    >
      {/* Hero - spans 2 cols & 2 rows */}
      <motion.div variants={item} className="md:col-span-2 md:row-span-2">
        <HeroCard />
      </motion.div>

      {/* Projects 2x2 grid */}
      <motion.div variants={item} className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectCard
          title="Arayor"
          subtitle="AI Otomotiv İnceleme"
          iconImage={arayorLogo}
          link="https://arayor.com"
          accentClass="accent-cyan"
        />
        <ProjectCard
          title={<>AIQ<span className="text-primary">race</span></>}
          subtitle="Yapay zeka arenası"
          iconImage={aiqraceLogo}
          link="https://aiqrace.com"
          accentClass="accent-red"
        />
        <ProjectCard
          title="Worldmeets"
          subtitle="Küresel toplantı salonu"
          iconImage={worldmeetsLogo}
          link="https://worldmeets.org"
          accentClass="accent-blue"
        />
        <ProjectCard
          title="MülkEx"
          subtitle="AI Gayrimenkul Teknolojisi"
          iconImage={mulkexLogo}
          link="https://mulkex.com"
          accentClass="accent-gold"
        />
      </motion.div>
      {/* Music - spans 2 cols */}
      <motion.div variants={item} className="md:col-span-2">
        <MusicCard />
      </motion.div>

    </motion.div>
  );
};

export default BentoGrid;
