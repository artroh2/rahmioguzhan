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
            <div className="flex items-center gap-2 mt-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-muted-foreground"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="text-muted-foreground text-[10px]">+</span>
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
