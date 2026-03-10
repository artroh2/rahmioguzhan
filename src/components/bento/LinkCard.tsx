import { LucideIcon, ExternalLink } from 'lucide-react';

interface LinkCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  glowColor: string;
}

const LinkCard = ({ icon: Icon, title, description, link, glowColor }: LinkCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card bento-card-interactive h-full flex items-center gap-4 p-5 group"
      style={{ '--link-glow': glowColor } as React.CSSProperties}
    >
      {/* Icon container */}
      <div
        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
        style={{ background: `${glowColor}15` }}
      >
        <Icon
          className="w-5 h-5 transition-colors duration-500"
          style={{ color: 'hsl(var(--muted-foreground))' }}
          strokeWidth={1.5}
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate group-hover:text-foreground/90 transition-colors duration-300">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">{description}</p>
      </div>

      {/* Arrow */}
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0" />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ boxShadow: `inset 0 0 40px -15px ${glowColor}, 0 0 20px -10px ${glowColor}40` }}
      />

    </a>
  );
};

export default LinkCard;
