import { Home, Music, PenLine, Mail } from 'lucide-react';

export type TabId = 'home' | 'muzik' | 'siirler' | 'ben';
interface BottomNavProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: typeof Music }[] = [
  { id: 'home', label: 'ANA SAYFA', icon: Home },
  { id: 'muzik', label: 'MÜZİK', icon: Music },
  { id: 'siirler', label: 'ŞİİRLER', icon: PenLine },
  { id: 'ben', label: 'İLETİŞİM', icon: Mail },
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
              className="flex flex-col items-center gap-1 px-3 py-2 transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <div className="relative">
                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/70'}`}
                />
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
              <span
                className={`text-[8px] tracking-widest font-medium transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/70'
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
