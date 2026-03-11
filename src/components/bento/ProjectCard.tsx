import { ExternalLink, LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  iconImage?: string;
  link: string;
  accentClass: string;
}

const ProjectCard = ({ title, subtitle, icon: Icon, iconImage, link, accentClass }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-card bento-card-interactive h-full flex flex-col justify-between p-6 md:p-8 group ${accentClass}`}
    >
      <div className="flex items-start justify-between">
        {iconImage ? (
          <img src={iconImage} alt="" className="w-[210px] h-[210px] object-contain" />
        ) : Icon ? (
          <Icon className="w-7 h-7 text-muted-foreground group-hover:text-[var(--card-accent)] transition-colors duration-500" strokeWidth={1.5} />
        ) : null}
        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-[var(--card-accent)] transition-colors duration-500">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 tracking-wide">{subtitle}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
