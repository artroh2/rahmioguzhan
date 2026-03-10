import { motion } from 'framer-motion';
import HeroCard from './HeroCard';
import ProjectCard from './ProjectCard';
import MusicCard from './MusicCard';
import SocialCard from './SocialCard';
import { Brain, Swords } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
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

      {/* Arayor */}
      <motion.div variants={item}>
        <ProjectCard
          title="arayor.com"
          subtitle="AI Automotive Oracle"
          icon={Brain}
          link="https://arayor.com"
          accentClass="accent-cyan"
        />
      </motion.div>

      {/* AIQrace */}
      <motion.div variants={item}>
        <ProjectCard
          title="AIQrace"
          subtitle="The AGI Arena"
          icon={Swords}
          link="#"
          accentClass="accent-red"
        />
      </motion.div>

      {/* Music - spans 2 cols */}
      <motion.div variants={item} className="md:col-span-2">
        <MusicCard />
      </motion.div>

      {/* Social cards */}
      <motion.div variants={item}>
        <SocialCard
          platform="Instagram"
          handle="@oguzhan"
          quote="Frames of silence"
          link="https://instagram.com/oguzhanthesecond"
          brandColor="hsl(330 70% 50%)"
        />
      </motion.div>

      <motion.div variants={item}>
        <SocialCard
          platform="X"
          handle="@oguzhan"
          quote="Disrupting in 280 chars"
          link="https://x.com"
          brandColor="hsl(210 10% 90%)"
        />
      </motion.div>

      <motion.div variants={item}>
        <SocialCard
          platform="TikTok"
          handle="@oguzhan"
          quote="Dark creativity, short form"
          link="https://tiktok.com"
          brandColor="hsl(180 80% 60%)"
        />
      </motion.div>

      <motion.div variants={item}>
        <SocialCard
          platform="Spotify"
          handle="Rahmi Oguzhan"
          quote="6 Languages, 1 Truth"
          link="https://open.spotify.com/artist/5fMkXpuritdfqjDKrJzJhT"
          brandColor="hsl(140 60% 50%)"
        />
      </motion.div>
    </motion.div>
  );
};

export default BentoGrid;
