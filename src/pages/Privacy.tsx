import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-12 max-w-2xl mx-auto">
    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10">
      <ArrowLeft size={16} />
      <span className="text-sm">Geri Dön</span>
    </Link>

    <h1 className="text-3xl font-bold text-primary mb-8">Gizlilik Politikası</h1>

    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>Bu uygulama kullanıcılardan herhangi bir kişisel veri toplamamaktadır.</p>
      <p>Üçüncü taraf bağlantılar (Spotify, Instagram, Apple Music) kendi gizlilik politikalarına tabidir.</p>
      <p>
        İletişim:{' '}
        <a href="mailto:roh@rahmioguzhan.com" className="text-primary hover:underline">
          roh@rahmioguzhan.com
        </a>
      </p>
      <p className="text-sm">Son güncelleme: Mart 2026</p>
    </div>
  </div>
);

export default Privacy;
