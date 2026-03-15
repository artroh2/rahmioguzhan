import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const StatusCard = () => {
  const [emoji, setEmoji] = useState('📱');
  const [statusText, setStatusText] = useState('Mobil Uygulama üzerinde çalışılıyor');
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await supabase
        .from('current_status' as any)
        .select('*')
        .limit(1)
        .single();
      if (data) {
        const row = data as any;
        setEmoji(row.emoji);
        setStatusText(row.status_text);
        setUpdatedAt(row.updated_at);
      }
    };
    fetchStatus();
  }, []);

  const timeAgo = (dateStr: string | null) => {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'az önce güncellendi';
    if (mins < 60) return `${mins} dakika önce güncellendi`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} saat önce güncellendi`;
    const days = Math.floor(hours / 24);
    return `${days} gün önce güncellendi`;
  };

  return (
    <div className="bento-card h-full flex flex-col justify-between p-6 relative">
      {/* Pulsing green dot */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
        </span>
      </div>

      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Şu An</p>
        <div className="flex items-start gap-3">
          <span className="text-3xl">{emoji}</span>
          <div className="mt-1">
            <p className="text-sm text-foreground font-medium leading-relaxed">{statusText}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-muted-foreground"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-muted-foreground"><path d="M17.523 2c-.104.135-1.834 2.596-1.834 5.304 0 3.08 2.109 4.16 2.168 4.183-.012.047-.336 1.166-1.113 2.32-.672 1.002-1.37 2-2.461 2-.537 0-.9-.176-1.277-.358-.398-.192-.812-.392-1.453-.392-.683 0-1.122.208-1.544.408-.36.17-.706.334-1.186.358-1.055.036-1.858-1.082-2.541-2.078-1.383-2.036-2.446-5.75-1.02-8.258C6.026 4.121 7.47 3.13 9.055 3.107c.575-.012 1.124.213 1.618.415.39.16.746.306 1.042.306.26 0 .603-.14.998-.302.558-.228 1.228-.502 1.94-.428.49.02 1.87.198 2.754 1.49l.116.174zM14.04 1.008C14.63.316 15.61-.054 16.455 0c.134 1.008-.293 2.027-.884 2.752-.602.737-1.542 1.326-2.508 1.248a2.657 2.657 0 0 1-.023-.304c0-.876.389-1.827 1-2.688z"/></svg>
              <span className="text-muted-foreground mx-0.5 text-[10px]">+</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-muted-foreground"><path d="M17.523 15.341a5.048 5.048 0 0 1-.607.735c-.557.557-1.18.835-1.87.835-.39 0-.814-.1-1.269-.3a4.065 4.065 0 0 0-1.434-.3c-.52 0-1.025.1-1.516.3-.49.2-.88.3-1.168.3-.712 0-1.347-.29-1.905-.87A12.575 12.575 0 0 1 5.7 12.564c-.735-1.401-1.103-2.757-1.103-4.068 0-1.512.362-2.736 1.085-3.674A4.905 4.905 0 0 1 7.44 3.398a4.69 4.69 0 0 1 2.374-.628c.415 0 .957.115 1.628.345.669.23 1.097.345 1.283.345.14 0 .616-.134 1.428-.402.768-.249 1.416-.352 1.947-.313 1.438.116 2.518.684 3.236 1.707-1.285.78-1.923 1.872-1.912 3.276.01 1.093.407 2.003 1.192 2.729.354.337.75.597 1.19.782-.096.278-.197.544-.305.8zM14.288 1.137c0 .857-.312 1.657-.934 2.396-.75.879-1.657 1.387-2.64 1.306a2.674 2.674 0 0 1-.02-.326c0-.823.357-1.702.99-2.422.316-.363.72-.666 1.21-.907.49-.238.953-.37 1.39-.393.013.115.019.23.019.346H14.288z"/><path d="M3 20.5v-6a1 1 0 0 1 1-1h2l2.27-1.514a.5.5 0 0 1 .73.443V21.07a.5.5 0 0 1-.73.443L6 20H4.5A1.5 1.5 0 0 1 3 18.5z" opacity="0"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-muted-foreground"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V7H6v11zM3.5 7C2.67 7 2 7.67 2 8.5v7c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-7C5 7.67 4.33 7 3.5 7zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 0c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 6h12c0-2.12-1.1-3.98-2.47-4.84zM10 4H9V3h1v1zm5 0h-1V3h1v1z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {updatedAt && (
        <p className="text-[10px] text-muted-foreground/50 mt-4">{timeAgo(updatedAt)}</p>
      )}
    </div>
  );
};

export default StatusCard;
