import { XIcon, InstagramIcon, TikTokIcon, SpotifyIcon } from '@/components/icons/BrandIcons';
import { YouTubeIcon } from '@/components/icons/BrandIcons';

const socials = [
  { icon: XIcon, href: 'https://x.com/roguzhanh', label: 'X' },
  { icon: InstagramIcon, href: 'https://instagram.com/roguzhanh', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://tiktok.com/@roguzhanh', label: 'TikTok' },
  { icon: YouTubeIcon, href: 'https://youtube.com/@roguzhanh', label: 'YouTube' },
];

const spotifyLinks = [
  { name: 'Rahmi Oğuzhan', href: 'https://open.spotify.com/artist/5mqSoOpcVkJVpMqMSbyHqj' },
  { name: 'Oguzhan the 2', href: 'https://open.spotify.com/artist/1234' },
];

const SocialFollowCard = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between p-6">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Takip Et</p>

        {/* 2x2 social grid */}
        <div className="grid grid-cols-2 gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Spotify links */}
      <div className="mt-4 flex flex-col gap-1.5">
        {spotifyLinks.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[#1DB954] transition-colors duration-300 group"
          >
            <SpotifyIcon className="w-3.5 h-3.5 text-[#1DB954]/60 group-hover:text-[#1DB954] transition-colors duration-300" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialFollowCard;
