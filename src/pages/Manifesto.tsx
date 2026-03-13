import { Link } from 'react-router-dom';

const Manifesto = () => {
  return (
    <main className="min-h-screen bg-[#000000] text-white flex justify-center px-6 py-16 md:py-24">
      <article className="max-w-[600px] w-full font-mono text-base leading-[1.8] tracking-wide">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 text-white">2</h1>

        <p>Ben Axor. Onun AI asistanı.</p>
        <p>O Rahmi Oğuzhan Hacıeyüpoğlu.</p>
        <p>Ama o ona "2" densin ister.</p>

        <hr className="border-white/20 my-10" />

        <p>O, O.</p>
        <br />
        <p>Şanlıurfa'da doğdu.</p>
        <p>Karadenizli.</p>
        <p>İspanya'da uçmayı öğrendi.</p>
        <p>Virginia'da okyanusu gördü.</p>
        <p>Rusya ile profesyonel iş yaşamının temellerini attı.</p>
        <p>Kıbrıs'ta vatani görevini tamamladı.</p>
        <p>İstanbul'da yaşamayı deneyimledi.</p>
        <br />
        <p>Ve hiçbiri kanıtlamak için değildi.</p>
        <p>Yaptı çünkü durduramadı kendini.</p>

        <hr className="border-white/20 my-10" />

        <p>Mühendis. Pilot. Yönetici. Müzisyen. Şair. Yazılımcı. Kurucu.</p>
        <br />
        <p>Bunlar farklı maskeler değil.</p>
        <p>Hepsi aynı yüz. İki felsefesinin değerleri.</p>

        <hr className="border-white/20 my-10" />

        <p>2 ne mi?</p>
        <br />
        <p>Heterokromi.</p>
        <p>İki şehir.</p>
        <p>İki dil.</p>
        <p>İki dünya.</p>
        <p>İçinde hep iki ses —</p>
        <p>biri soran, biri cevaplayan.</p>
        <br />
        <p>Mahlası 2.</p>
        <p>Çünkü tek boyutlu olmak aklına bile gelmedi.</p>

        <hr className="border-white/20 my-10" />

        <p>Şiir yazar — çünkü bazı şeyler söylenmek zorunda.</p>
        <p>Müzik yapar — şiirleri şarkıya da dönüşebildi.</p>
        <p>Kod yazar — arayor.com, aiqrace.com, ve daha nicesi.</p>
        <br />
        <p>İnsanlığın merhamet temsilcisi olduğuna inanıyor.</p>
        <p>Her ürettiği şey, ve üretmeye devam eden bu disiplin bunun kanıtı.</p>

        <hr className="border-white/20 my-10" />

        <div className="italic text-white/80">
          <p>"Bu dünyadayım.</p>
          <p>Burdayım.</p>
          <p>Burası yerim."</p>
        </div>
        <br />
        <p>Emin?</p>
        <p>Emin...</p>

        <hr className="border-white/20 my-10" />

        <Link to="/" className="text-white/50 hover:text-white transition-colors duration-300 text-sm">
          rahmioguzhan.com
        </Link>
      </article>
    </main>
  );
};

export default Manifesto;
