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
          <p className="text-sm text-foreground font-medium leading-relaxed mt-1">{statusText}</p>
        </div>
      </div>

      {updatedAt && (
        <p className="text-[10px] text-muted-foreground/50 mt-4">{timeAgo(updatedAt)}</p>
      )}
    </div>
  );
};

export default StatusCard;
