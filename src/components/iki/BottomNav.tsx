import { Music, PenLine, User } from 'lucide-react';

export type TabId = 'muzik' | 'siirler' | 'ben';

interface BottomNavProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: typeof Music }[] = [
  { id: 'muzik', label: 'MÜZİK', icon: Music },
  { id: 'siirler', label: 'ŞİİRLER', icon: PenLine },
  { id: 'ben', label: 'BEN', icon: User },
];

const BottomNav = ({ active, onChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex flex-col items-center gap-1 px-6 py-2 transition-colors duration-200"
            >
              <div className="relative">
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={isActive ? 'text-primary' : 'text-muted-foreground'}
                />
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
              <span
                className={`text-[10px] tracking-widest font-medium ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
