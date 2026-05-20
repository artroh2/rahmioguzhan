import { ExternalLink } from 'lucide-react';

interface SocialCardProps {
  platform: string;
  handle: string;
  quote: string;
  link: string;
  brandColor: string;
}

const SocialCard = ({ platform, handle, quote, link, brandColor }: SocialCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card bento-card-interactive h-full flex flex-col justify-between p-6 group"
      style={{ '--card-accent': brandColor } as React.CSSProperties}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-[var(--card-accent)] transition-colors duration-500">
          {platform}
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground italic mb-2">"{quote}"</p>
        <p className="text-xs text-muted-foreground/60">{handle}</p>
      </div>

      {/* Brand glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 40px -15px ${brandColor}`,
        }}
      />
    </a>
  );
};

export default SocialCard;
