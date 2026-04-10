export interface Poem {
  id: number;
  title: string;
  body: string;
  category: string;
}

export const POEM_CATEGORIES = [
  { key: "ask", label: "Aşk Şiirleri", icon: "heart", count: 87 },
  { key: "en_iyiler", label: "En İyiler", icon: "star", count: 508 },
  { key: "english", label: "English Poems", icon: "globe", count: 0 },
  { key: "iyiler", label: "Alternatifler", icon: "sparkles", count: 219 },
  { key: "kisalar", label: "Kısalar", icon: "zap", count: 0 },
  { key: "sarki", label: "Şarkı Sözleri", icon: "music", count: 52 },
] as const;

export const POEMS: Poem[] = [
  {
    "id": 1,
    "title": "Sinsi gecelerim",
    "body": "Sinsi gecelerim\nHuzursuz bir mavi \nCüretkarca davetkar her saniyesinde \nTam vazgeçerken \nTam direnirken yenik düşlerim\nYorgun ve asi durur gururlu\nGeride kalmaz maziside\nTam önümde avuçlarını kavuşturup\nNe şehit ne gazi\nÖylece ölüp durur son kez namağlup\n\nSisli sabahlarım\nOnursuz bu hali\nAşklarından nefret etmiş her seferinde\nTam affedecekken\nTam imrenirken mutlu düşlere\nYorgun ve asi durur gururlu\nSönmesin diye sokak lambaları\nGöz gözü görmez diye umudu\nTam alnına düşer çiğ damlaları\nNe aydınlık ne zifiri\nÖylece düşünüp durur ilk kez bu kadar mağlup\n\n2",
    "category": "iyiler"
  },
  {
    "id": 2,
    "title": "Ben istemem sen düşün aklımdan geçenleri",
    "body": "Ben istemem sen düşün aklımdan geçenleri\nAnılarımı yakalamak nasıl ? Zor mu birer birer ?\nPişmanlıklarım ve mutluluklar\nNasıl sarıyor değil mi ?\nAnlatsana bi yok mu dinleyen ?",
    "category": "iyiler"
  },
  {
    "id": 3,
    "title": "Üstüne üstlük yalan söylemiş yüzüne baka baka",
    "body": "Üstüne üstlük yalan söylemiş yüzüne baka baka\nOna arkası karanlık bir tek yön yol seçmiş\nYolda neresi olduğunu söyleyecek birisi de yok\nAğlamaktan içi geçmiş",
    "category": "iyiler"
  },
  {
    "id": 4,
    "title": "Madem öyle sen söyle bütün bu olanların suçlusu kim ?",
    "body": "Madem öyle sen söyle bütün bu olanların suçlusu kim ?\nAynaya baktın mı hiç dün ?\nGözlerinin sokaklarında gezmiş misin hatırladın mı ?\nÖleceğim gün yarın mı ?",
    "category": "iyiler"
  },
  {
    "id": 5,
    "title": "Burası benim çatımın altı",
    "body": "Burası benim çatımın altı\nÖzgürüm dilim döndüğünce farklı\nSen \nSense ıslanıyorsun bile bile tatlı tatlı\n\nBağırıyor muyum fısıldıyor muyum uykun mu var ?\nAğlıyor muyum düşünüyor muyum çok mu zor ?\nBen\nBen seni ıskalıyorum gerçeği göre göre haklı haklı.",
    "category": "iyiler"
  },
  {
    "id": 6,
    "title": "Yalnızlığım yokluğundan mı varlığının saklı oluşundan mı bilmem",
    "body": "Yalnızlığım yokluğundan mı varlığının saklı oluşundan mı bilmem\nAnsızın bir görünsen , bir sen belirse gökyüzümde\nNasıl mutlu olurdum bir bilsen\nKelimeler seçiyorum sanki bin yıllardır bunu anlatmak için ta en başından\nIsrarla yıldızlara benzetmeye çalışmam seni gecemin karanlığı yüzünden",
    "category": "iyiler"
  },
  {
    "id": 7,
    "title": "Neden oluyordur dersin bütün bu yaşananlar ?",
    "body": "Neden oluyordur dersin bütün bu yaşananlar ?\nNe sebeple hatırlıyoruz geçmişi ?\nArkasından bir sigara yakıyor bazımız\nBazımız unutuyor işte güzel zamanları \n\nÇünkü olmak zorunda",
    "category": "iyiler"
  },
  {
    "id": 8,
    "title": "Alışmayı öğrenmekle geçen bir ömür",
    "body": "Alışmayı öğrenmekle geçen bir ömür\nTanışa tanışa insanlarla\nBuluşa buluşa dudaklar\nSessiz gözlerini kısıp\nHayret etmeden onlara\nEllerinde gümüş\nKahramanlıklarla\nBarışa gidiyor hayat\nYaşanmışlıklara doğru\nYaşanmamışlıklarla",
    "category": "iyiler"
  },
  {
    "id": 9,
    "title": "Herşey heryerde",
    "body": "Herşey heryerde\nHeryer karışmış\nAlnım buruşmuş\nParmak uçlarımda nasır\nŞiirlerimi terketmiş nesir\nAyaklarımı bir hasıra basıp\nGeçmişi düşünüyorum geleceği hazır sanıp\nEskiyi özlüyorum\n\nHeryerde herşey\nBir karış gibi biliyorum , bunu biliyor gittiğim her yer\nPaketinden yeni çıkmış jilet gibiyim\nParmak uçlarımda tenin\nŞiirlerime ilham vermişsin\nUçuyorum adeta ve hava serin\nGeleceği düşünmüyorum boşverip\nÖzlüyorum seni\nBir 65im bir 27\nDoğarken ki gibi ölüyorum\nÖlürken doğarken gibi",
    "category": "iyiler"
  },
  {
    "id": 10,
    "title": "Sana seni hatırlatan o şarkı",
    "body": "Sana seni hatırlatan o şarkı\nGel kendine diye bağıran o melodiler\nÜzgün değil ancak\nAşk için yazılmadığı belli ne yapsın giden\n\nSen gel kulak ver yine belki ne diyor anlarsın\nKafiyelerde gizli o haklı nakaratların ricası\nSebep arama hiç , bu senin dünyan\nEşlik et ve o sana tapsın\nKoşarak gelsin duyan.",
    "category": "iyiler"
  },
  {
    "id": 11,
    "title": "Her şey sana inanmakla başladı",
    "body": "Her şey sana inanmakla başladı\nGerçeklerle recm edip beni taşladın\nBeni kurmaktan alıkoyduğunuz hayallerim\nBir kuru ekmek ile aşla mı ?\n\nBirden bire yeniden doğmak aşkla mı ?\nHerkese olduğundan farklı başla mı ?\nSeni bilmem benim içim tertemiz\nGözlerin yeterince yaşlı mı ?",
    "category": "iyiler"
  },
  {
    "id": 12,
    "title": "Aklınıza her geldiğimde bir düğüm atın tembelliğinize",
    "body": "Aklınıza her geldiğimde bir düğüm atın tembelliğinize\nBen dışardan gördüğünüz ben değilim\nSelam veriyorum herkese\nBelki biraz olmayana eğilim",
    "category": "iyiler"
  },
  {
    "id": 13,
    "title": "Denedim de olmadı bir türlü",
    "body": "Denedim de olmadı bir türlü\nSeni aradığım aklım çıkaramıyor kararlarımı aydınlığa\nYeter bu nasıl bir büyü\nYeter artık bitmeyen hislerim geçirmiyor zulmümü\nÇıkarmıyor bi türlü ateşten gömleği üstümden\nKarşı koyamıyorum tepeme yumruk doludan damlalara\nCeza gibi\n\nYeryüzünde bir tek ben kalmışım sanki\nArıyorum da bulamıyorum seni zor zamanlarım\nKeder,  bu nasıl bir oyun\nSon hak için ya ver ödülümü ya al bu canımı\nCanım çıkmıyor sona ulaşamadan bir türlü\nGalip gelemiyorum aklımdan geçen sorulara\nKatlanıyorum eziyet gibi\n\n2",
    "category": "iyiler"
  },
  {
    "id": 14,
    "title": "Benim derdimi benden başkası kaldırabilir mi emin değilim",
    "body": "Benim derdimi benden başkası kaldırabilir mi emin değilim\nKoyvermişim aklımı , sözler vermişim almak için kendime haklarımı\nBen derdimi dengimden başkasına anlatabilirmiydim emin değilim\nDemir almışım limanlardan , sözler vermişim dalgalara vurmak için kıyıya , vermek için canımı\nÖldürmek için karın ağrımı\n\nBir sır taşırım ağır\nDilim sağır\nKaynar sular içmişim söz etmemek için söze\nGönlüm diyor ki bağır\nDökül herşeyin üzerine\nÖmrüm bir türkü kadar kısa\nÜlküsü kıssadan hisse\nAnlayan olsa keşke ama gerçekten\nAklımı benden emanet isteyebileceğinizden emin değilim.",
    "category": "iyiler"
  },
  {
    "id": 15,
    "title": "Durdurulmaz mı zaman ?",
    "body": "Durdurulmaz mı zaman ?\nHer dakika ,  her saniye , her rüya\nDur desen durulmaz mı zaman ?\nHatırlamaya çalışıyorum\nİğneliktemiydi saman ?\nTamam , tamam.\n\nBizde şans olsaydı böyle bir şansın ortasına doğmazdık\nBüyük dertlerin küçük devaları olurdu\nKolay kolay kolay soru sormazdık\nCevaplar kolay olurdu\nZaman dururdu ve durulurdu\nSevginin, aşkın ve barışın karşısında hazır olda durulurdu\nÇareler bulunurdu\nFazlası umulurdu\nİğnemiydi samanlıkta olan ?\nTamam.\nBulundu.\nBatınca var oldu.",
    "category": "iyiler"
  },
  {
    "id": 16,
    "title": "Ruhum bulur etrafını",
    "body": "Ruhum bulur etrafını\nGeldimi gitmez bir gönül meselesi bu \nYakalandığında şehrin en ücra sokaklarından birinde o gecenin köründe trafik ışığının kırmızısına\nBasar geçer \nTarafını kendi seçer\nKorkmaz ölümden\n\nVermez ömründen alır kendine bir kaç dakika sürecek milyarlarca an\nİkiye bölebilse kendini diğer yarısının saçlarını okşardı beşer\nOlmazsa olmaz bir demin meselesi bu\nSaklandığında dünyanın en kalabalık kavgasından o sabah hangi mazlumun camından girse dediği güneşin hüzmesinden\nKendinden geçer\nİyisinden bir dua seçip\nHayatı seçer\nKorkmaz önünden",
    "category": "iyiler"
  },
  {
    "id": 17,
    "title": "Aşık mı olsam nefret mi etsem",
    "body": "Aşık mı olsam nefret mi etsem\nSana mı gelsem senden mi gitsem\nÖzlediğim bütün duyguların hepsi sende\nVarlığın hem gökyüzü hem hapishane\n\nFarklılıklar mı tat katıyor\nYanlışlar doğruları hatırlatıyor\nBirbirimizi anlamamız mümkün değil bence\nAsıl yaramaması gereken sensin bedende\nCevaplar arama nedende",
    "category": "iyiler"
  },
  {
    "id": 18,
    "title": "Müzik çalacak birazdan ya sen isterken ya başkası hediye etmişken…",
    "body": "Müzik çalacak birazdan ya sen isterken ya başkası hediye etmişken onu bir başkasına\nBir kadın konuşacak muhtemelen\nYaralarından bahsedecek \nKırıklarından\nKuraklarından\nSon duraklarından\nSüresi dolmuş anılarından\nHatıralarından\nYanlış adamlardan\nSon selamlardan belki\nİlk defalardan\nAğlayacak şarkısını bağırırken o acılara\nKatlanacak sancılara\nBaşkalarına dokunacak kelimeleri\nBaşka bedenlerde ürpertecek nağmeleri bam telini\nO kadar güzel gitti ki sona\nO kadar inanmıştı ki ona\nO kadar acıdı ki kanatları\nUçmaya korkuyor artık kainatları\nDün o kadar geride kaldı ki\nBugün yarına veriyor talimatları\nSevme diyor temkini\nO da şarkı söylüyor garibim\nVarla yok gibi\nSessiz ve içine\nİçine içine atar gibi\nDeğil mi ?",
    "category": "iyiler"
  },
  {
    "id": 19,
    "title": "Madem olmuyor yükseklerden düşmek",
    "body": "Madem olmuyor yükseklerden düşmek\nMadem yasak kış günü üşümek\nMadem dokunmuyor okunmayınca şiirlerin\nŞarkılar söyle üzen\nÖyle biri ol ki gözlerden düşen\nHemde en yükseklerden\nOluyor sansınlar\nBuz kesilsin huzurları\nOkunsun şiirlerin\nDokunsun\nSöylediğin şarkılar söylensin sen düşerken gönüllerden\nEn yükseklerden\nOlmuyor sansınlar\nİçleri ısınsın varsınlar\nOkunmasın şiirlerin\nDokunmasın kimse yükseklerine\nSoğuğuna karışılmasın.\nOrda en çok kalbine kızmalısın.\nAklınla.",
    "category": "iyiler"
  },
  {
    "id": 20,
    "title": "Ben geçtim benden",
    "body": "Ben geçtim benden\nSen unuttun sendeledini\nGörmedin gözünü kapattığında ki gerçeği\nKalakaldın , çıkamadın bedenden\n\nBen geçtim feleğin ateşli çemberinden\nSen kimsin Allasen ?\nGörmedin zifiri karanlıklarda herşeyi\nYemedi , gözyaşların dökülmedi kederden\nYapamadın \nÇıkamadın kederden",
    "category": "iyiler"
  },
  {
    "id": 21,
    "title": "Anlaşılan kadar sözüm",
    "body": "Anlaşılan kadar sözüm\nAğlanılan kadar güz\nArbededen fısıltılar yüzümde\nGerçek doğru , doğru gerçek hani nerde ?\nElimi tutup beni götürsene yalnızlığa\nKulağımdan çekip kaldırsana en fezaya\nBırakınca korksana hani acır diye canım\nGerek var mı bi bakalım mı beraber cezaya\nSonu gelsin mi bütün kötülüklerin\n\nBoyu ersin mi tama , ermişlerden yarımın\nSelam selâ , aleykümselamda varmı ezânım\nFarkettim mi geride kalmış kör kütükleri\nAnladığım kadar köle\nAnlattığın kadar hürüm\nVe ağlanılan kadar güz.\nBu bahar son mu sanki gökyüzünde.\nDoğru yöne dönük mü bu yüz ?\nOrdamısın ?\n\n2",
    "category": "iyiler"
  },
  {
    "id": 22,
    "title": "Bana sensin diyen ben kadar açıksözlü bir yalancı görmedim.",
    "body": "Bana sensin diyen ben kadar açıksözlü bir yalancı görmedim.\nVazgeçiyorum zahiri rüyalardan\nAnında bu kadar özledim\nÜç gün sonra ne olacak ?\nHangi birisi olacaklardan\nKaçınca mı köşe bucak ?",
    "category": "iyiler"
  },
  {
    "id": 23,
    "title": "Be ukte",
    "body": "Be ukte\nBüyümesen olmaz , olmazsan olmaz\nBu yükte\nOmuzlarımda sen , sırtımda sen\nRazıyım ağırlığına \nŞarkılar söylerim , dinlesen olmaz",
    "category": "iyiler"
  },
  {
    "id": 24,
    "title": "Sessizce uzaklaş gönlümden",
    "body": "Sessizce uzaklaş gönlümden\nHep baktığın manzaradaki karlı dağlara tırman\nKatılma bana , alıp gitme biraz ömrümden\nGürültünü bastırabileceğin en güzel yer o orman\n\nGünahlar işleme bana şarkılar söyleyerek\nSözlerinde boğma beni çağlayan nehirlerin\nÖrnek verme bana kuşların sesini göstererek\nGönlümde kimseye ayıracak bir yer yok artık benim.",
    "category": "iyiler"
  },
  {
    "id": 25,
    "title": "Nerde hata varsa orda ben varım kalemimi kırar yeni bir kağıt alıp…",
    "body": "Nerde hata varsa orda ben varım kalemimi kırar yeni bir kağıt alıp yazarım kalanıyla aklımın\nVarsınlar duymasınlar ağıdımı mürekkebimin ağırdır , ve yakar , helalidir hakkımın\n\nSorununuz ne \nSorunuz yok\nSoru sor\nZoru bul\nSonu bul\nSoyu kurur\nZorumuz ne\nNiye kolay vazgeçmek insanlıktan?\n\nTemsil ediyorlar sandığımız liderlerimiz\nYalancı\nMecburi kelimeler , sözde demokrasi, yanlış hareketlere satılmış bürokrasi\nRezil ediyorlar ülkelerce dünyayı\nBaksana temiz olan her şey kirli şimdi\nEskiden uslu olan her şey asi",
    "category": "iyiler"
  },
  {
    "id": 26,
    "title": "Zaman kazanıyor hep",
    "body": "Zaman kazanıyor hep \nZaman yaratıyor kendi kendine\nBir öğüdün unutulması\nBir cümlenin son bulması\nBir insanın yok olması\nZaman içinde",
    "category": "iyiler"
  },
  {
    "id": 27,
    "title": "Farkında olmadan umrumda olmadığını farkettim.",
    "body": "Farkında olmadan umrumda olmadığını farkettim.\nBelki de beni size bağlayan herşeyden vazgeçtim.\nKafiye gözetmeden bu sefer herşeyim ortoda\nBen kendimden kaç defa geçtim , sen kendine kal",
    "category": "iyiler"
  },
  {
    "id": 28,
    "title": "Ne güzel bir mutluluktur yaşamak",
    "body": "Ne güzel bir mutluluktur yaşamak\nDelirmeyeceğinizi bilsem intahar ederdim\nBu da böyle bir aşama\nBöyle olmamasını bende isterdim\nBenimde gitmedi hoşuma",
    "category": "iyiler"
  },
  {
    "id": 29,
    "title": "Döner durur güneş sabahtan geceye",
    "body": "Döner durur güneş sabahtan geceye\nAy peşinde\nKardeşine\nGökyüzüyle aramdaki bulutlar\nYarına uyanmak istediğimi de nerden çıkardınız ?\nÖper güneş her sabah\nÖrter karanlık üstümü\nHüznümü\nÜzüntümü\nGözlerimi açtığımda da karanlık olsa\nKaranlıklar varmısınız ?\nBu şu an mı ?",
    "category": "iyiler"
  },
  {
    "id": 30,
    "title": "Azdan çoğa bir çok zaman var teselliyle anlatılan",
    "body": "Azdan çoğa bir çok zaman var teselliyle anlatılan\nDün bugün yarınlar\nGerekince anılan anılar\nGözünün ön",
    "category": "iyiler"
  },
  {
    "id": 31,
    "title": "İlaçlar neye fayda edecek bir bak bakalım",
    "body": "İlaçlar neye fayda edecek bir bak bakalım \nYüzlercesine varım\nGör içindeki iyi ölümlü mü sonsuzlukta\nAcıtacak her bir haresi seçtiğim bu hastalığın\nAnlatılacak boşlukta\nBirilerine son defa\nKendinden muaf.\n\nŞans tanıyorum genişliğe\nMilyarlarcasına darım\nKopsun diye içimdeki kötü içindeki fani hayattan\nAtlatılacak her bir çaresi seçtiğimiz zorbalığın\ndinlenilecek yoklukta\nHerkese\nİlk defa\nTuhaf.",
    "category": "iyiler"
  },
  {
    "id": 32,
    "title": "Vicdanın küsecek sana hiç beklemediğin bir anda",
    "body": "Vicdanın küsecek sana hiç beklemediğin bir anda\nDehşete kapılma , bil ki yanılmışsın\nNefse mecburiyetlerin aklını almışken orda\nGöz yaşı dökerken hatırlayabilirsen seçimlerini\nİçindeki tarafsız sen , sorar sana ?\nSen kimsin mesela ?\nYeniden bir merhaba...",
    "category": "iyiler"
  },
  {
    "id": 33,
    "title": "Göz torbalarımda birikmiş hüzün",
    "body": "Göz torbalarımda birikmiş hüzün\nSevinç gözyaşlarım üzgün , buruk , yalnız\nKarşıma aldığım her derdin suratı asık\nNe gülebildim ne ağlayabildim yıllardır\nNe güneşe dokunabildim\nNe güneş beni ısıtabildi",
    "category": "iyiler"
  },
  {
    "id": 34,
    "title": "Gelde aklımdan çıkar şu düşünceyi",
    "body": "Gelde aklımdan çıkar şu düşünceyi\nYavaş yavaş sinsi sinsi\nKemiriyor beynimi\nHer bir zerresi\nÖteki bir afet",
    "category": "iyiler"
  },
  {
    "id": 35,
    "title": "Işıl ışıldı gökyüzü o gün",
    "body": "Işıl ışıldı gökyüzü o gün\nBir toz kadar kirliydi ömür\nBir toz kadardı zulüm\n\nKelimeler zordu o gün\nKifayetsizdi sözüm\nDöküldü içim,dışım,özüm\nElimden gelen kadar çok özrüm\nDilerimde fayda etmez affa\n\nBaşım dertte bugün\nGünahlarımla sevapların savaşı büsbütün\nMeşkle aşkın buluşması ve kördüğüm\nRüzgarlarda dalgalanıp gelmiştim halbuki\nSözümü yerine getirmiştim uğruna öldüğüm\nSahiden yanacakmıyım şimdi cehennemin kayalıklarında\nBir ihtimal karışacakmıyım yalancı kalabalıklara\nYanıp yanıp yeniden söndüğüm\nHarlayacakmı ateş bütün zorbalıkları\nZorlayacakmı nefes ?\nFayda edecek mi affa ?",
    "category": "iyiler"
  },
  {
    "id": 36,
    "title": "Gökyüzü öksüz kalır gece",
    "body": "Gökyüzü öksüz kalır gece\nNe gökkuşağı bekler ne de mutlu bir hece\nŞarkılar söyler yakamozlara\nŞafak söker öylece\nUsulca ışır sona\nSessizce ,",
    "category": "iyiler"
  },
  {
    "id": 37,
    "title": "Musibet mi ?",
    "body": "Musibet mi ?\n\nYıllar sonra sana kendini hatırlatan bir arkadaştır Allah\nAlır başını yerden yere vurur\nYüzüne bir tokat kondurur",
    "category": "iyiler"
  },
  {
    "id": 38,
    "title": "Ne yüzünü görebildim ne de yüzünü görmemi istemediğinin",
    "body": "Ne yüzünü görebildim ne de yüzünü görmemi istemediğinin\nMerak ediyorum beni neden böyle bir yola koydun ?\nKendimi neden bana benzettin ?\nBeni bana hapsettin...",
    "category": "iyiler"
  },
  {
    "id": 39,
    "title": "Neden imkansız geliyor aşk ?",
    "body": "Neden imkansız geliyor aşk ?\nNeden +1 kalabalık gürültülü ve çok ?",
    "category": "iyiler"
  },
  {
    "id": 40,
    "title": "Bir yanda dünyan",
    "body": "Bir yanda dünyan\nDiğer yanda hatıralarımla bedenim üryan\nBir seferlik elveda mı manidar\nTek başına yolculuklar var her yanda\nHer yanda göçmüş sebil sübyan\nYanıp tutuşan geçmişin maruzatı var\nCennetinden sualim var ki cehennemin dar\nKırık dökük duvarlarını sarmış sarmaşıklar\nNerde zaferin\n\nBir yanda dünyam\nDiğer yanda yaşanmışlıklar\nTek seferlik merhabalar mı güya\nZoraki yolculuklarım mı var ?\nKorkularımı düşlerime sokuyorsun bak\nCennetine ateş cehenneminde su olunca alnım ak\nYıkık dökük hayallarimi bağlamışlar\nNedir hedefin \n\n2",
    "category": "iyiler"
  },
  {
    "id": 41,
    "title": "Ben hep üşüyorum aslında , ruhum derinlerinde kendini birazcık ya…",
    "body": "Ben hep üşüyorum aslında , ruhum derinlerinde kendini birazcık ya , bir an için ısıtacak bir cümle arıyor her zaman\n\nDerdimi anlatabilecek tek nefeslik bir nida ,\n\nAnlayabilecek tanıdık bir sima...",
    "category": "iyiler"
  },
  {
    "id": 42,
    "title": "Seni affediyorum kendim",
    "body": "Seni affediyorum kendim\nNe kadar eziyet etsen de ruhuma\nUmrumda değil bu saatten sonra\nAma şikayet de etme bence buna\nKendini dipsiz bir kuyuda bulma sakın \nAman !\n\nBeni sorarsan ben artık iyiyim\nAma artık eskisi gibi de değilim\nTamam ?",
    "category": "iyiler"
  },
  {
    "id": 43,
    "title": "Yolculuklardan yolculuk beğensene",
    "body": "Yolculuklardan yolculuk beğensene\nNe tarafa istersen\nO o tarafa götürürken dilemesini bilirsen sen\nDinlemesini öğrenirsin\n\nSon duraklardan birinde ineceksen bu sefer\nGeri dönmesi imkansız olacaksa güzel kader\nSen tavırlarına ağ ör ister sen\nKayıp gider ertelersen\nKaybolup gitmemeyi öğrenirsin\n\nPeki ya terk ederse ruhun bedelini \nMerak etmeyecek mi sebebini\nSormayacak mı son kelimesini\nYormayacak mı talebesini\nTerletmeyecek mi amelesini\nÇektirmeyecek mi ceremesini\nDert etmeyecek mi lamelifini\nBir kere geldin dünyaya\nAratmayacak mı halifesini\nAratmayacak\nDert etmeyecek\nÇektirtmeyecek\nYormayacak\nSormayacak\nMerak etmeyecek\nTerk etmeyecek seni\nKaybolup gitmeyeceksin\nDinlemesini öğreneceksin içindekini\nO kavuşacak sevgilisine\nSen çürüyeceksin \nBöcekler yiyecek gövdeni\nYolculuklardan yolculuk beğen\nHangisini beğenirsen\nÖlüm o tarafa götürür seni\n\n2",
    "category": "iyiler"
  },
  {
    "id": 44,
    "title": "Çaktırmadan bir ıslık çalar hayat",
    "body": "Çaktırmadan bir ıslık çalar hayat\nNerden geldiğini şaşırırsın\nNereye gideceğini şaşırırsın\nNerden geldiğini şaşırırsın\nNereye gideceğini şaşırırsın\nFiyt",
    "category": "iyiler"
  },
  {
    "id": 45,
    "title": "Bir gecenin sabahında",
    "body": "Bir gecenin sabahında\nBir çiğ tanesiyim taç yaprakların\nBir kaç saatlik bir fani\nToprağın dostuyum , vedam sabah ezanında\nİlk ezanım kulağımda\nSesi soluğu çıkmaz feryadımın\nSahi ?\n\nBir sabahın ayazında\nBir yalnızım kaldırımda\nArkamda uzunca bir gölge gölgesi\nBenim için yürüyor\nSessizliğin böylesi\nBir kuşku düştü içime gitmiyor\nHer adımda adımı tekrar ediyorum\nBir yaprak bağırıyor kilit taşlarının arasından\nEzecekler seni.\nSahi..",
    "category": "iyiler"
  },
  {
    "id": 46,
    "title": "O bir an için yavaşladığında zaman , kudretin gazabıydı sevgisi",
    "body": "O bir an için yavaşladığında zaman , kudretin gazabıydı sevgisi\nMahfederek ve kahrederek affedecek herkesi\nÇekin !\nTam yerinde tam vaktine yetişcektir nefesin\nSon bulacak , o yol senin\nKesin !\nSor kendine\n\nAcelesi var gibi durmaz , döner kainat gider boşlukta sonsuza , saklar mı derken geçmişi..\nCan alarak can vererek\nÖmürden bir kaç milyar an seçerek\nSon nefeste hatırlatıp seçmişi\nBuraya geldi cenk ederek\nEn başında nasıl , en sonunda asıl\nYan vaktinde başka seçenek yok.\nKatıl kendine",
    "category": "iyiler"
  },
  {
    "id": 47,
    "title": "Bir yer beğen kendine benden uzaklarda",
    "body": "Bir yer beğen kendine benden uzaklarda\nSesim kulağından silinsin\nHer değen sendine bir kibrit çak tuzaklarda\nÖnce Allaha sonra kendine emanetsin",
    "category": "iyiler"
  },
  {
    "id": 48,
    "title": "Ümitlerden yapılmış bir kaleyim ben",
    "body": "Ümitlerden yapılmış bir kaleyim ben\nKocamanım , devasa bir ev\nFatihler kaşımda\nYapayalnız kalmışım ben\nTek başıma\n\nDireniyorum düşmanlığa\nSırt oluyorum , omuz oluyorum ağlama\nBüyüyen kötülüğün zulmü\nÖlen insanlığın imdadına\nYetişiyorum , yetişiyorum\nTek başıma\nDim dik\n\n2",
    "category": "iyiler"
  },
  {
    "id": 49,
    "title": "Gördün mü gününü ?",
    "body": "Gördün mü gününü ?\nSaklamadığın sırlarımın beteri nasılda gelip seni de buldu ?\nŞimdi hangisini düşünür pişmanlıkların\nDüğünü ? Ölümü ?\nBugün geri kalan yarınların bir önceki bölümü.",
    "category": "iyiler"
  },
  {
    "id": 50,
    "title": "Kalan ömrüm ve sessizlik",
    "body": "Kalan ömrüm ve sessizlik\nBunun için verilmiş bir yemin\nBu Tanrısal hissizlik\nGeri kalan ne varsa hepsi senin olsun\nBen susuyorum\n\nDemeyi çok isterdim ama mazlumlar için çok korkuyorum.",
    "category": "iyiler"
  },
  {
    "id": 51,
    "title": "Düşündüklerimden kaçıyorum aslında",
    "body": "Düşündüklerimden kaçıyorum aslında\nEn kötü senaryoda başka ne olabilir ki ?\nGerçi bütün hücrelerim bile bunun farkında\nBen , ölebilirim...",
    "category": "iyiler"
  },
  {
    "id": 52,
    "title": "Tanıdık gelmeye başka baştan başlar",
    "body": "Tanıdık gelmeye başka baştan başlar\nİçinde bir yerdedir , biraz zorlarsa hatırlarsın sahibini\nİki kişilik bir kalabalıktır bu hayat\nÖnce 'o' ,sonra sen\nBiraz da teferruat\nİyi bilirsin\n\nUçsuz bucaksız bir manzarada tan !\nVe sonu gelsin istemediğin bir roman gibi gönlünde ağırlarsın safirini\nSuçsuz günahsız bir şeytan gibidir zaman\n'O' , 'an' asıl\nSen misafirsin",
    "category": "iyiler"
  },
  {
    "id": 53,
    "title": "Yeni bir hayat gibi bayat",
    "body": "Yeni bir hayat gibi bayat\nÖncesinden de beter , baştan aşağı zaiyat\nHiç kimseye haber vermemiş Tanrı\nKendini buluvermiş insan ortada bak\nBirinci şans mı ikinci mi sonuncu mu hangisi ?\nSen anca git bunlara kafayı yak\nAklına kat\nAklına tak.",
    "category": "iyiler"
  },
  {
    "id": 54,
    "title": "Çok yakından gelen bir yardım çığlığı",
    "body": "Çok yakından gelen bir yardım çığlığı\nBir yangın ! Bir deprem ! Bir üzüntü !\nKırmızı renkte bir gökyüzünde can sağlığı\nSesini kısın tüm seslerin , bu seferki sulu gürültü.",
    "category": "iyiler"
  },
  {
    "id": 55,
    "title": "Aklımda bir düğüm",
    "body": "Aklımda bir düğüm\nSoğuk ve donuk bakışlarım\nYeryüzünde tek başınayım sanki\nTek başına bu düğün\n\nKırık bir aynanın karşısında kendim ile başbaşayım hüzün\nİnadıma kopacak kıyamet\nİnadından kopacaktır elbet\nBen inadına kusacağım her öğün\n\nSavaşımın tam ortasındayım cephesiz\nHer bir yandan açığım \nSüngüm hedefsiz\nİlelebet\nBelki hayatımın en sonundayım belki sessiz\nBelki geleceğim bir akıl hastanesinde müebbet belkisiz\nBen derdimi anlatırdım da soluksuz\nBakışlarım donuk ve bu sana göre huzursuz\n\n2",
    "category": "iyiler"
  },
  {
    "id": 56,
    "title": "Milyarlarca yüz geldi geçti hayat caddesinden tıklım tıklım hevesleri",
    "body": "Milyarlarca yüz geldi geçti hayat caddesinden tıklım tıklım hevesleri\nMilyonlarcasına küstü yol\nBinlercesine kızgın kaldı kaldırım \nOnlarcasına yazık olmuş lambaların hüzmesi\nSadece birisine ait fırsat , gülmesi gerekiyor gülmesi\nAynadaki kendisinden haberi olmuş\nAynadaki kendisinde kendisindeki aynayı görmüş abisi\n\nGöğüs germeye germeye , göğüs germeye göğüs lazım oluverdi ve epey zor oldu kalabalıklardan sıyrılmak \nOmuzlara çarpa çarpa koşmaya çalışmak oldu hayat\nÖmür demek zor sonsuzu anmadan \nOlay o , zaman bile bitmez tamamlanmadan \nYitmez paylaştığın yaşamadığın o günahların\nBoşa geçirdiğin o an bile gitmez bir yere\nZaman daralıyorken geçiyor bre\nBir bardak serin su gibi \nGenzini okşaya okşaya ruhunu serinletiyor derinlerini\nDinleniyor dinlerken \nSeni , ama içindeki seni.\nBeni.",
    "category": "iyiler"
  },
  {
    "id": 57,
    "title": "Gitmek kolay diye mi zor sana varmak ?",
    "body": "Gitmek kolay diye mi zor sana varmak ?\nVazgeçmek \" ne kadar büyük \" bir olay ?\nVazgeçememektir alışkanlığıma\nAlışkınlığım kadar zararlısın yarama\nBen sana hastayım sen bahtsızlığıma\nVarmak kolay diye senle en sondaki olaya\nZorlaştırmak zorundamıyız acaba ?\nBen yastayım , arayıştayım sen + 1 sin sorularıma\nYakışıyoruz mübaalaya\nCevaplar veriyoruz sorulara\nAnnelerimizden bahsediyoruz birbirimize \nAklım anneme anne demeni isteyebiliyorken o yavruma anne olsun diyebiliyor da gönlüm\nAlışıyoruz birbirimizi mütealaya\nTanışıyoruz ya\nO yüzden yarışmıyoruz işte zamanla\nKelimelerden yollar inşaa ediyoruz\nYokuş yukarı bir yokuş aşağı\nBelki yardımı olur ömür boyu gönlün onu almama\nKarşı karşıya\n\nOğuzhan",
    "category": "iyiler"
  },
  {
    "id": 58,
    "title": "Düşünüyorum , düşünüyorum da mantığını anlayamıyorum bu düşün",
    "body": "Düşünüyorum , düşünüyorum da mantığını anlayamıyorum bu düşün\nHer şey aslına uygun olabildiğince aydınlık\nYakınlarda bir ihanet tiyatrosu\n\nÇabalıyorum , çabalıyorum da çıkamıyorum içinden bu işin\nSonumuz öylesine karanlık ki\nAkıllarda bir kıyamet senaryosu",
    "category": "iyiler"
  },
  {
    "id": 59,
    "title": "Düşünülsün",
    "body": "Düşünülsün\nSarpa sarsın her biri\nNefes almak kadar kolay\nElbet gelecek bir gün biri\n\nHer ölüm bana ölümü hatırlatır\nKendi ölümü",
    "category": "iyiler"
  },
  {
    "id": 60,
    "title": "Gecenin gökyüzü",
    "body": "Gecenin gökyüzü\nAh o güzelim yıldızları boşu boşuna mı saymışım ?\nKaranlıktı gerçi ayın diğer yüzü , nasıl farketmem ?\nBir yoku bin var da aslında\nAsıl nasıldı güneşi farzetmem ?\nDileklerim gerçek olur sanmıştım.",
    "category": "iyiler"
  },
  {
    "id": 61,
    "title": "Kuru kalabalık",
    "body": "Kuru kalabalık\nVe milyarlarca insanın arasında yaşadığım fantastik yalnızlık\nGönlüm zengin\nZihnim sopalık\n\nNeden geceler her zaman karanlık ?\nNeden aynalar tanıdık ?\nRuhum alık",
    "category": "iyiler"
  },
  {
    "id": 62,
    "title": "Bir bilsen yokluğunun bende var ettiği sinsi sancıyı",
    "body": "Bir bilsen yokluğunun bende var ettiği sinsi sancıyı\nBir bilebilsen yanımbaşımdaki derin yokluğu\nBir dileyebilsen benimle bir sonsuzluğu\nBir daha daha da nefret eder miydin benden\nSever miydin bu soğukluğu",
    "category": "iyiler"
  },
  {
    "id": 63,
    "title": "Bana seni sor !",
    "body": "Bana seni sor !\nBeni al götür buralardan uzaklara\nHatıralar ücra köşelerde kalmadan gidelim düşmeden kendi kurduğumuz tuzaklara\nDokunabilir misin gözyaşlarıma ellerinle ?\nHerşeyi anlatabilir misin herşeye susanlara",
    "category": "iyiler"
  },
  {
    "id": 64,
    "title": "Gökyüzünden yağıyor yine düşünceler ıslak",
    "body": "Gökyüzünden yağıyor yine düşünceler ıslak\nKaranlığımı ıslatıyor kelimeler ılık \nEllerinde gümüş tepsiler \nBeni bekliyor zifirinin nedimeleri\n\nGözlerimi kapatmak istedim izin vermediler\nSon mısrasında yakaladı şerefsizler",
    "category": "iyiler"
  },
  {
    "id": 65,
    "title": "Sana seni yok yere susturanların inadına",
    "body": "Sana seni yok yere susturanların inadına\nKötülüğü karşısına koyduğun iyiliğin hatrına\nBunca emek bunya amaç bunca haya\nSenin için senin sesin olacağım\nBiliyorum bu rüyalar asla değil boşuna\nVe biliyorum yine bunla asla gitmeyecek hoşlarına",
    "category": "iyiler"
  },
  {
    "id": 66,
    "title": "Geçmişe umut olur muymuş hiç ?",
    "body": "Geçmişe umut olur muymuş hiç ?\nSoruyorum işte nerden geliyor peki bu bu kadar ?\nNeden bitmiyor bu kavgalar ?\nÖlmüyorsun içimde , yaşıyor gibi de değilsin \nYok var",
    "category": "iyiler"
  },
  {
    "id": 67,
    "title": "Durma devam et koş ayakların çıplak yerler yaş",
    "body": "Durma devam et koş ayakların çıplak yerler yaş\nÖyle bir yakından biliyorsun ki bu hissi\nÖylesine değişik ki pisliği\nRüya görüyor olmalısın\nAktarmıyor gerçeği\nGerçeği anlatmıyor\n\nOlmaz de\nHissetmiyorum de\nKabul etmiyorum bu lanet derdi\nAl beni\nYanına , yada öbür yanına\nZamanı gelmedi mi ?",
    "category": "iyiler"
  },
  {
    "id": 68,
    "title": "Gitmek gerekmiş demek ki hiç gitmediğimden",
    "body": "Gitmek gerekmiş demek ki hiç gitmediğimden\n\nSevmeyi anlamak için uzaktan bakmak gerekiyormuş aşka\n\nBiliyorsun , sevmedin sen.",
    "category": "iyiler"
  },
  {
    "id": 69,
    "title": "Kelimeleri yanyana geliyor da insanın",
    "body": "Kelimeleri yanyana geliyor da insanın\nBir lisanla anlatmaya çalışınca bocalanıyor böyle\nYağmur veda edip buluta son bir düşerken duanın yükselmeye başladığı avcuna\nKonuşamıyorsan onun dilinden madem dinle",
    "category": "iyiler"
  },
  {
    "id": 70,
    "title": "Neden mağlup olunca dimdik durmaz insanlar ?",
    "body": "Neden mağlup olunca dimdik durmaz insanlar ?\nKaybetmek ölmek kadar zor mu ?\nBilenler bilmeyenlere sorsunlar\nKabullenmek uzunca bir yol mu ?\n\nAğlamak hangi durumlarda geçerli \nBiri bana öğretsin bunu",
    "category": "iyiler"
  },
  {
    "id": 71,
    "title": "Ilık , ıslak , siyah , sessiz",
    "body": "Ilık , ıslak , siyah , sessiz\nGözyaşlarım , timsah , tuzlu , sebepsiz\nDuvarlar var aşmamız gereken\nVe biz dizboyu nefretle boyandık",
    "category": "iyiler"
  },
  {
    "id": 72,
    "title": "Anılarımı kaybetmişken gelsen sen",
    "body": "Anılarımı kaybetmişken gelsen sen\nİzlerini toplasan ışıkların\nSözüne kavuştursan aydınlıkları\nHatıraların kıymetini bilsen\nAlsan sorumlulukları\nKarşılıklarını versen\n\nÇiçeklerim yeniden açsın diye gelsen\nİzlerini kapasan yaralarımın\nÖzüne kavuştursan baharı\nZamanla geçse zaman\nHatıra olarak kalsa acım\nAlsan beni\nKendine versen\nNefes bulsa canım\n\n2",
    "category": "iyiler"
  },
  {
    "id": 73,
    "title": "Gel gidelim kalbimi ısıttığın gün batımlarına",
    "body": "Gel gidelim kalbimi ısıttığın gün batımlarına\nGözlerimiz kısık bakalım \nKırmızısına hayran kalalım\nSessizce dalakalalım ufka\nÖylece içime doğ",
    "category": "iyiler"
  },
  {
    "id": 74,
    "title": "Ben istemiyorum kimseyi.",
    "body": "Ben istemiyorum kimseyi.\nBu kimseye özel bir vazgeçiş değil\nBir yangından kurtarırmış gibi canını\nZar zor taşıyorum ileri her yaşımı\n\nİstemeden mümkün mü böyle bir delilik\nDünya'ya bakıyorum da baştan aşağı gereksinim zaman aşımı\nKuşlar gibi gökyüzünde,  özgürce ufka kanat çırpmak varken\nPanik bir yeryüzünde orası senin burası benim\nSinsi kahkaha , mazlum gözyaşı\nZengin patron fakir uşağı",
    "category": "iyiler"
  },
  {
    "id": 75,
    "title": "Sensiz ömrü geride bıraktığım an oldum",
    "body": "Sensiz ömrü geride bıraktığım an oldum\nKalan sağlar bizim oldu\nBen zamanın geçtiği o anda ki sürattim\nDualarım kabul oldu birden yeniden doğdum\n\nSoğuk rüzgarlar ufka doğru dalgaların tersine\nSahilde gönlüm bir akşamüstü sevdiğimin elinde\nCanı sıkkın olsa bir türlü olmasa bir türlü niye \nBen onun yanında kendim oldum bakmadım geriye\ngeriye",
    "category": "iyiler"
  },
  {
    "id": 76,
    "title": "Kral çıplak !",
    "body": "Kral çıplak !\n\nKral bugün dünden daha da farkındaylen bunun\nBuna ses çıkarmayan sensin alçak\nUmrunda mı bu durum ?",
    "category": "iyiler"
  },
  {
    "id": 77,
    "title": "Bugünlerimizi düşünüyorum aha",
    "body": "Bugünlerimizi düşünüyorum aha\nYarın hala burda , buna geç değilken\nElimdekileri düşürüyorum daha\nYine akşamüstü oldu derken ufka\n\nDönüp dönüp üşümüyorum\nRuhum özgür aklım ferah gönlüm hoş\nBenimkisi de demiyorum\nBu sadece halime yorumuna sorunum.",
    "category": "iyiler"
  },
  {
    "id": 78,
    "title": "Bana dertlerimden bahsedin !",
    "body": "Bana dertlerimden bahsedin !\nNe kadar uzun yollarım\nVazgeçtiğim sol yanım\nTuzağına düşmüşüm kendimin\nTepeleri karlı dağlarımın , sebebini bul",
    "category": "iyiler"
  },
  {
    "id": 79,
    "title": "Gözlerimin içinde seni arıyorum",
    "body": "Gözlerimin içinde seni arıyorum\nYıllardır merhaba dediğim kişi sen miymişsin ?\nYarın olunca gidecek misin ?\nYerine gelecek mi yeniler ?",
    "category": "iyiler"
  },
  {
    "id": 80,
    "title": "Sen söyleyince ağzına ben söyleyince yüzüme öyle bön bön bakıyorlar…",
    "body": "Sen söyleyince ağzına ben söyleyince yüzüme öyle bön bön bakıyorlar işte\n\nSoruyorlar bu anlamadığım şey aslında bir saçmalık mıdır ?\nKorkuyorlar bu saçmaladığın şey aslında gerçeğin ta kendisi midir ?\nYokluyorlar bu gerçeklik hakkımda az kalan mıdır ?\nSusuyorlar inim inim , bu sessizlik benim midir ?\n\nSenin midir ?",
    "category": "iyiler"
  },
  {
    "id": 81,
    "title": "Bir arada durmuyor parçaları bu resmin",
    "body": "Bir arada durmuyor parçaları bu resmin\nHeveslerin ardı arkası kesilmiyor\nİzleri geçmiyor hislerin\nBir türlü olmuyor işte istediklerim\nBir yolunu bulup gerçekleşmiyor\n\nArayıp bulmak için kahrolduğum gerçekleri\nİçimin en derinlerine baktım zifiri\nEllerini tuttum elimin\nHep mi daha beteri\nGün geçmiyor ki uslansın ruhumun neferi\nKendine bir yol bulup o şeyleri bitirmiyor\n\nİnan ki ölsem sevinirim\nÇünkü ruhum doymadı , doymayacak , doymuyor.",
    "category": "iyiler"
  },
  {
    "id": 82,
    "title": "Bazen o düğümü makasla kesmek istemezsin",
    "body": "Bazen o düğümü makasla kesmek istemezsin\nBırak öyle kalsındır karışığı\nEngel olursa kaldırır atarsın bir köşeye\nBiraz yalnız kalsındır alışığı\nGörmek istemezsin ama yerleşmiş bi kere gönlüne\nÖzlersin yine de hakkındaki sarmaşığı\nKap karışık ,bum buruşuk eski çağlardan bile önce gelen bir gelenektir bu\nİnsan insanı özlerde , insan kendi kendinin aşığıdır\nÖyle işte..",
    "category": "iyiler"
  },
  {
    "id": 83,
    "title": "Senin de bir yarının var.",
    "body": "Senin de bir yarının var.\n\nHayatından çıkanlar ve hala orda olanlar da orada !\n \nDurma koş !\n\nSanki senin gözlerine bakıp gitmeyeceğim dememiş miydi o da bir zamanlar ?\n\nYalan !\n\nBak bir daha ne kadar değerli kalanlar  ?\n\nGünler günleri kovalar\n\nZaman oyun mudur ?",
    "category": "iyiler"
  },
  {
    "id": 84,
    "title": "Uçuyorum ayaklarım yerde",
    "body": "Uçuyorum ayaklarım yerde\nAklım almış başını gitmiş\nFikirlerim yerlerde\nHakkım nerde ?\n\nHuzuru bulmak için ne gerek\nHayatta kal ne demek\nBu kadar emek\nAklım nerde ?\n\nKader ölsem sevinir\nSonum geldiğimde nefesim kesilir\nBeklediği gibi yalanları\nYardım nerde ?",
    "category": "iyiler"
  },
  {
    "id": 85,
    "title": "Arkama bakamıyorum giderken bu kalpten",
    "body": "Arkama bakamıyorum giderken bu kalpten\nBildiğin gibi olsun , uzaklaştım ben herşeyden\nHer yangın çıktığında içinde bir yudum senden içerdimç",
    "category": "iyiler"
  },
  {
    "id": 86,
    "title": "Bahçedemde sarı yapraklı çınarlar",
    "body": "Bahçedemde sarı yapraklı çınarlar\nGel gönlümün en güzel şiiri uyuyakal göğsümde \nAklımızdan geçsin olanlar\nNeler neler var , ne yok ki..\nNe güzel olur bende kapatsam gözlerimi gölgesinde\nHuzura dalsak öylesine\nGüzel olmazmıydı ?\n\nYeni bir çınar tohumu dikeriz biraz ötesine\nBir kaç çocuğumuzun olacağı günlere\nDüşen yapraklarında koşup oynasın keratalar\nRüyamıza dokunuşu gerçek olur\nBiz sular dururuz o fideleri\nHayatımız bir virgül bulur , bir soluk\nBüyüyor diyeceğiz biz yaşlanırken o bir gün kimbilir kaç yaşına girecek\nGaliba hep bir hüzün olacak geçerken zaman\nOnun lehine bizim aleyhimizde seyredecek \nMutlu başlayan hikayeler mutlu bitermiş\nBütün mutlu hikayeler bizim için gelecek",
    "category": "iyiler"
  },
  {
    "id": 87,
    "title": "Neden karışsın neden ?",
    "body": "Neden karışsın neden ?\nDertlerin dağlarını mı devirdi ufacık\nYapamadın mı , üstesinden gelemedi mi şansın ?\nYetmedi mi bedel ?",
    "category": "iyiler"
  },
  {
    "id": 88,
    "title": "Güneş bugün sessiz batmış olmalı gönlünün en sevdiği bahçesinde",
    "body": "Güneş bugün sessiz batmış olmalı gönlünün en sevdiği bahçesinde\nSoğuk üşütmemiş seni\nKabanın da ısıtmamış\nÖyle garip\n\nSavaş bugün bitmiş olmalı ömrünün en sevdiği evresinde\nIşık düşmemiş üzerine\nMerakta zifiri karanlık",
    "category": "iyiler"
  },
  {
    "id": 89,
    "title": "Uyumuyorum",
    "body": "Uyumuyorum\nUyanmıyorum\nİstemiyorum\nOnu bana ver\nYağmurlar yağsın\nGüneş açsın\nGökkuşağında sallanmak istiyorum ben\n\nRüyalar görüyorum çünkü \nBüyüdüğümü hissediyorum\nDaha dün geldim Dünyaya\nEmir gibi ülküler\nBeni bana bırakın yanlız kalmak istiyorum\nYanlışı doğruyu görebiliyorum \nİstemiyorumlar , onu bana verler bu yüzden\nHayallerimdeki oyunlarım\nOyunlarımdaki hikayeler \nGüneş batsın\nYağmurlar dursun\nKörebe oynamak istiyorum ben\n\n2",
    "category": "iyiler"
  },
  {
    "id": 90,
    "title": "Dünyam etrafında dönüyor sanki",
    "body": "Dünyam etrafında dönüyor sanki \nBütün dualarım yeminle\nZor geliyor her birinden vazgeçmesi gelecekler bu an iken\nBiraz sonra deminle tanışacak derin\nÖylesine senin öylesine benim ki\nTüylerimiz diken diken.",
    "category": "iyiler"
  },
  {
    "id": 91,
    "title": "Pişmanlığından ölüp bittiğiniz",
    "body": "Pişmanlığından ölüp bittiğiniz\nŞarkılar söyleyip acılar çektiğiniz\nOnu ayrılıkla anıp gerçekti sanıp\nUğruna ruhunuzdan vazgeçtiğiniz aşk nedir ?",
    "category": "iyiler"
  },
  {
    "id": 92,
    "title": "Sana zorsa bana da zor",
    "body": "Sana zorsa bana da zor\nBana da sor sorularını\nAnlamı sor\nBeni yor\nBir şans ver belki doğrudur cevaplarım\nHatırlarım ağır günahları\nBirikmiş sevaplarımı\nSonu gelmez aflarım var ahlarım var benim\nÖfkemden ağlarım hep  ta içime içime \nBiriktiğim derinde\nYağmur gibi \nBir nehri beslerken\nBirine seslenircesine\nSana.\n\nElbet diner fırtınalar\nBiter bu garip şey\nÇözülür bu kördüğüm\nBelki ilk kez mutlu sonla ölürürüz\nYarım kalırız yarına ama olsun\nBelki bahardır öbür günümüz\nYeter çünkü yaprakları döktüğümüz.",
    "category": "iyiler"
  },
  {
    "id": 93,
    "title": "Güldürmeden ağlattı bu sefer çare",
    "body": "Güldürmeden ağlattı bu sefer çare\nGöz gözü görmüyor , öyle bir karanlık\nNefes alınmıyor , bu nasıl bir kalabalık ?\nSahibi gelsin alsın bari\nGelmedi , geçmiyor tarih\nŞimdi ne olacak , sonra ne olacak ?",
    "category": "iyiler"
  },
  {
    "id": 94,
    "title": "Yarın öleceğimi bilsen",
    "body": "Yarın öleceğimi bilsen\nDünün inadını bugüne taşır mıydın ?\nOrta yerde bir ben bir de sen\nDüşün bakalım yokluğuma alışır mıydın ?\nBu kadar kolay mı unutmak ?",
    "category": "iyiler"
  },
  {
    "id": 95,
    "title": "Talihsiz bir kural",
    "body": "Talihsiz bir kural\n\nTalihsiz bir akıl oyunu\nBoşa dönen bir pedal\nBaşa dönen bir hayat\nBir zarda sen at\nDüşüncelerinde bir zat",
    "category": "iyiler"
  },
  {
    "id": 96,
    "title": "Hayat yardım ediyor görmüyormusun yeni terfi ettim yürümeye",
    "body": "Hayat yardım ediyor görmüyormusun yeni terfi ettim yürümeye\nTutmuyor ellerimi gururlu bir baba gibi \nBiliyor düşeceğimi öğrenmemi bekliyor gibi\nSürünerek sürünmeyi öğrenmeye çalışmıştım dimi ?\nŞimdi yerin dibinden seslendiğim için sizleri hikayeme aldığım.\nTutup ellerimi kaldırın , acıtıyor kaldırım.\n\nHayat yardım ediyor görmüyormusun yeni başladım susmaya herkese\nYetişkin ninnileriyle öğretiyor zaman zamanı\nDuygulanmış bir annenin sessizliğindeki feryadını\nBiliyor göğüs geriyorum fırtınalara\nTercih ettiğim yola döndürmek için hayatımı\nGelmiş ve geleceğin tamamını\nTutup kaldırın vicdanı , içinize aldırın.\nYarım kalmışlara yardım edin\nHikayeleri mutlu sonla bitirin\nÇocuklara düşünmeyi öğretin bir baba gibi\nSize konuşmayı öğretsin anneniz\nŞarkılar söyleyerek\nDüşe kalka , kendimize gelin.",
    "category": "iyiler"
  },
  {
    "id": 97,
    "title": "Sonsuza kadar şiir yazsam farkeder mi beni",
    "body": "Sonsuza kadar şiir yazsam farkeder mi beni\nYazlar kışlar ve baharlar",
    "category": "iyiler"
  },
  {
    "id": 98,
    "title": "Bomboş bembeyaz bir oda",
    "body": "Bomboş bembeyaz bir oda\nTek başına ben\nAk kefen.\nÜmitlerim.\n\nŞaşkınım\nAnlık yoklukların üzerine yemin ederim\nVolta gezen\nBen değildim.\n\n2",
    "category": "iyiler"
  },
  {
    "id": 99,
    "title": "Karıştır aklını karışsın renkleri",
    "body": "Karıştır aklını karışsın renkleri \nKarış karıştır her saniyesi hatıraların\nKar kış güneş yaz parmak ucunlabas suyun yüzeyine bas elini\nSana vicdanın versin talimatları\nDakikalarını harcama boşa , boşa gitmesin zamanlıkların\n\nAraştır hakkını ara her yerde benzerini\nArafın telaşıdır her an değerli gidip kalamayanlar\nZar zor güç bela yaz akıl kuyuna kovasını at 2 metreden üzerine hevasına\nSana irfanın söylesin olacakları\nSaatlerini harcamıştım boşa hatırla\nHoşuna gitmesin azaldıkların",
    "category": "iyiler"
  },
  {
    "id": 100,
    "title": "Aaaaaaaaaaaaaaaaaaaa !",
    "body": "Aaaaaaaaaaaaaaaaaaaa !\n\nDön bi haline bak !\n\nYasak ne varsa çiğnemişsin\nTükürüp atmışsın yaşlı bir ağacın köküne köküne\n\nDünya !\nOlanları biraz olsun kafana tak !\nGüzel ne varsa inat dilinden döküle döküle.",
    "category": "iyiler"
  },
  {
    "id": 101,
    "title": "Fır döndüğün etrafında ruhunu besler hızının yavaşlığı",
    "body": "Fır döndüğün etrafında ruhunu besler hızının yavaşlığı\nZor seversin artık zor da olsa seçerken yalnızlığı\nGeride kalanlara son bir bakıp vazgeçersin\nBırakırsın o sinsi alışkanlığı\nZaptedersin.\n\nSor , seçerek içinden geleni söylemeyen evvel barış sandığın o ikileme\nBin iki türlü huyu var onun bir bakışla farkedersin\nBu oyundaki tek kural belli ki hile yapma serbestliği için\nNiçin mi ?\nYalan söylersen dilediğini , \nSonra son bir defa daha dönerken etrafında kendi kendinin sonu için zahmet edersin.\n\nBırak gitsin.",
    "category": "iyiler"
  },
  {
    "id": 102,
    "title": "Bir dert ki yanyana gelmeyen aklımdan peşi sıra geçenlerin dağınık…",
    "body": "Bir dert ki yanyana gelmeyen aklımdan peşi sıra geçenlerin dağınık kalabalığı\nAsi farazi karanlığı\nAnlatmayı istiyorken kalem , kağıt oynamıyor yerinden\nDüşünceler derinden\nAlt üst olmuş geçmişimden gelenler geleceğe giderken onursuz\nArd arda birikiyor elemler\nKekeliyor \n\nBir iki ki anlatması imkansız gibi yardıma muhtaç bir onsuz\nSokakları insansız bu yokluğunun\nAdımları ıssız\nCevapları ister olumsuz sevaplarının\nZamansız\n\nBu bahsetmesi anlamsız hataların insafsız yalnızlığının\nTadı tadsız\nSonu renksiz\nBaşı yolsuz \nİbaresiz sonsuz.\nCeremesi günahlarımın.\nA a a a a a a a a a a a amansız.\n\n**SUNO FORMATI:**\n\n───\n\n[Verse 1]\nBir dert ki yanyana gelmeyen aklımdan peşi sıra geçenlerin dağınık kalabalığı\nAsi farazi karanlığı\nAnlatmayı istiyorken kalem, kağıt oynamıyor yerinden\nDüşünceler derinden\nAlt üst olmuş geçmişimden gelenler geleceğe giderken onursuz\nArd arda birikiyor elemler\nKekeliyor\n\n[Chorus]\nBir iki ki anlatması imkansız gibi yardıma muhtaç bir onsuz\nSokakları insansız bu yokluğunun\nAdımları ıssız\nCevapları ister olumsuz sevaplarının\nZamansız\n\n[Chorus]\nBir iki ki anlatması imkansız gibi yardıma muhtaç bir onsuz\nSokakları insansız bu yokluğunun\nAdımları ıssız\nCevapları ister olumsuz sevaplarının\nZamansız\n\n[Verse 2]\nBu bahsetmesi anlamsız hataların insafsız yalnızlığının\nTadı tadsız\nSonu renksiz\nBaşı yolsuz\nİbaresiz sonsuz\nCeremesi günahlarımın\n\n[Chorus]\nBir iki ki anlatması imkansız gibi yardıma muhtaç bir onsuz\nSokakları insansız bu yokluğunun\nAdımları ıssız\nCevapları ister olumsuz sevaplarının\nZamansız\n\n[Chorus]\nBir iki ki anlatması imkansız gibi yardıma muhtaç bir onsuz\nSokakları insansız bu yokluğunun\nAdımları ıssız\nCevapları ister olumsuz sevaplarının\nZamansız\n\n[Outro]\nA a a a a a a a a a a a amansız\n\n───\n\n**SUNO PROMPT:**\n\n`Cinematic Indie Folk, melancholic male vocal, slow tempo 65 BPM, acoustic guitar and piano, intimate and raw, minor key, emotional build-up toward the outro, voice breaks slightly on the final \"amansız\", no autotune, singer-songwriter, film score influence`\n\n───\n\n\"voice breaks slightly on the final amansız\" kısmı kritik — o son çığlığı Suno'nun hissetmesini istiyoruz. 🎵",
    "category": "iyiler"
  },
  {
    "id": 103,
    "title": "Dünyanın bir yerinde aynı cümle var diğer dilde",
    "body": "Dünyanın bir yerinde aynı cümle var diğer dilde\nAynı doğrular\nAynı sorular \nAynı yalanlar çalıyor aynı telden",
    "category": "iyiler"
  },
  {
    "id": 104,
    "title": "Gök gürültüsünden ürken bir ben miyim ?",
    "body": "Gök gürültüsünden ürken bir ben miyim ?\nBeklemek zor değil mi yıldırımlardan sonra korkmadan\nYağmur taneleri düşerken yer yüzüne çok yükseklerden\nEl bebek gül bebek değil mi her şey bir an bile sormadan\nUyanıvermek komadan",
    "category": "iyiler"
  },
  {
    "id": 105,
    "title": "Öteki rüyada",
    "body": "Rüyalarımdan hangisinde daha mutlu olduğumu göreceksiniz bu dünyada\n### Sanki her zamanın bir kurtarıcısı varmış gibi\n`Her türlü günahın bir bedeli olacaktır tabi sevabına`\n## Gel derim gelmezsin , git derim gitmezsin\n### Al beni kat kendine , sır verip ser vermezsin",
    "category": "iyiler"
  },
  {
    "id": 106,
    "title": "Geceler mi daha soğuk",
    "body": "Geceler mi daha soğuk\nYoksa nefesin mi tersi avuçlarımda ?\nYüzümü okşadığın bu yokluk ;\nBuna alışamadım daha\nBu , yorgunluk...\n\nDüşler düşler\nYeni bir sensizliği zihnimde taşırdım\nNe olursa olsun gözlerine baktığında benimkiler\nAklımı başımdan alırdın , şaşırırdım.",
    "category": "iyiler"
  },
  {
    "id": 107,
    "title": "Uzun muydu yol ?",
    "body": "Uzun muydu yol ? \nGiderken arkanda bıraktığın dayanamayışların..\nKatlanmak mı zor ?\nAlıp başını giderken anlattığın her şey , o sessizlik",
    "category": "iyiler"
  },
  {
    "id": 108,
    "title": "Bu benim için yeni",
    "body": "Bu benim için yeni\nYeterli mi değil \nSorsan git o bilenlerin önünde eğil\nÇıktığım bu seyir\nBelki bir kaç kişiye dokunur\nBenim hayatımı değiştirir\n\nFarzedelim yolun sonu uzak burdan\nÖğreniyorum işte bilmiyorum yordam\nAklımın kapıları yarım açık \nEsmiyor mu soldan",
    "category": "iyiler"
  },
  {
    "id": 109,
    "title": "Varsın diye yandı durdu Güneş",
    "body": "Varsın diye yandı durdu Güneş\nGeçen günlerin hatrına açtı çiçek",
    "category": "iyiler"
  },
  {
    "id": 110,
    "title": "İstediğim kadar yağsaydı yağmurlar",
    "body": "İstediğim kadar yağsaydı yağmurlar\nSaklandığım kadar kolay olsaydı\nGizlendiğim kadar yayılsaydı bulutlar\nSöz verdiği gibi sözünde dursaydı o\nNe güneş kalırdı utancından\nNe ay\nBir an\nO\n\nSustuğum kadar sessiz kalsaydı şarkılar\nPuslu sabahlarda çalsaydı\nİzlendiğim kadar apaçıksa galibiyet\nAz verdiği gibi geç kaldıysa sevaplar\nNe sebep kalırdı hicabından\nNe olay\nNe an\nNe O \n\n2",
    "category": "iyiler"
  },
  {
    "id": 111,
    "title": "Çok yüksekten düşüyorum",
    "body": "Çok yüksekten düşüyorum\nBir kaç şeyi daha düşünmeye zamanım vardır umarım\nYüzümden üşüyorum , gözümde rüzgar yaşı\nKorkmuyorum \nZihnimi yokluyorum\nBu daha her şeyin en başı\n\nUnut herşeyi \nBir tek beni gör\nBir tek beni duy\nSana geliyorum yere yaklaşarak\nBunun için vazgeçtiğim şey yaşamak\nSabırsızlığımı mazur gör\nAnlatacağım şeyleri sor\n\nYa ölüyorken doğuyorsam kalan her saniye\nYanıyorken soğuyorsam\nYa dönmüyorsa dilim sana\nDüşüncelerime sızsana\nDuy düşüncelerimi\nAnlatacağım her şeyi\nAnlayacaksın\nHayret edeceksin \nSonra gayret edeceksin\nİster istemez inanacaksın bana \nEminim buna\nDinleyeceksin verdiklerini bana\nBelki sadece bana\nBir kaç şey daha düşünmeye zamanım kalmıştır umarım\n\n2",
    "category": "iyiler"
  },
  {
    "id": 112,
    "title": "Galip misin sahiden ?",
    "body": "Galip misin sahiden ?\nGelir misin benimle ?\nGider misin her yere ?\nMesela her savaşın ortasında sevişebilirmiyiz seninle ?\nYenilebilir misin istesen ?\nYeminlerle sözler verip ,\nMağlubiyeti kutlarmısın 2 elinde zillerle\nDanslar ederek\nŞarkılar söyleyerek , bağırarak hemde\nNeşe saçıp etrafcağızına sevincinden ağlaya ağlaya gülerek kurtuldum diye \nBitti diye bu rüya\nÖlürmüsün benimle ?\nÖlüme dek yaşar mısın kalbimde ?\nNe garip..\nNa mağlup hemde..\n\n2",
    "category": "iyiler"
  },
  {
    "id": 113,
    "title": "Herşey bitti",
    "body": "Herşey bitti\nEli kulağında bekleyişlere kavuştuk bugüne\nKorktuğun için hızlı geçti ömür\nKorktuğun için değer vermedin ölüme\n\nBen taş değilim ki ısıtayım seni\nBen hoş değilim ki sevemezdim de seni\nBen kaş değilim ki gözün üstündeki \nBen boş değilim ki bunları söyleyecek cürretim var\n\nVay benim halime\nVay bana sana bize\nHerşey bitti\nKorkarak koştuğum için tökezledim gönüle\n\nAl şimdi senin olsun herşey\nSöz de suç\nVermekte \nGeri almakta\nYalvarmakta\nAğlamakta\nBitti artık herşey\nBugün gün bile sona varmakta\n\n2",
    "category": "iyiler"
  },
  {
    "id": 114,
    "title": "Gece mi zor ?",
    "body": "Gece mi zor ?\nGülersin gündüzlerimin aydınlığına\nO kadar vakti sıkıştı ki kalan zamanımın\nBirbirlerini kovalıyorlar hala\nOyun mu bu be ?",
    "category": "iyiler"
  },
  {
    "id": 115,
    "title": "Kimse dinlemesin kimseyi",
    "body": "Kimse dinlemesin kimseyi\nBu bir oyun galiba ve anlatıyor herkesi\nÖlmekten daha beter bu his\nHatırlamaya çalışıyorum var mıydı bir benzeri\nYok.\n\nEllerim soğuk mu\nGözlerim donuk mu\nTenim nasıl\nKurak mı ılık mı\nBilmiyorum\nYok",
    "category": "iyiler"
  },
  {
    "id": 116,
    "title": "Gülerek bakıyorsa gözlerin",
    "body": "Gülerek bakıyorsa gözlerin\nBir mevzuya ağlıyordur için\nHangi hatayı kafaya taktın ?\nHangi yanlış pencereden baktın ?\nDünyayı gördüğün gibi mi sandın ?\nNeden sormadın ne için diye\nBoşu boşuna gönlünü yaktın.",
    "category": "iyiler"
  },
  {
    "id": 117,
    "title": "Sen sormadan ben söyleyim",
    "body": "Sen sormadan ben söyleyim\nYarına dünden daha fazla yakınız\nİstediğin kadar inkar et , yada et son hakkınmış gibi bir yemin",
    "category": "iyiler"
  },
  {
    "id": 118,
    "title": "Senden öğrendiğim her şeyi",
    "body": "Senden öğrendiğim her şeyi\nEnder karşılaştığım her bir fikri\nBir bilsen..\n\nHatalar yapmak için kurtaracaksan eğer\nİşin sonunda sen varsan eğer\nBuna değer",
    "category": "iyiler"
  },
  {
    "id": 119,
    "title": "Korkuyorum korkusuzluğundan",
    "body": "Korkuyorum korkusuzluğundan \nKorkusuz cesaretine imreniyorum bi yandan\nBir yandan tiksiniyorum maymun iştahından\nKendine esir düşmeyi düşünüyorsan\nPes etmeyi istiyorsan\nÇelme takıp yerlere düşürüyorsak birbirimizi\nAvuçları birleştirip kalkıyorsak ayağa\nKorkuyoruz korkusuzluğumuzdan\nEsaretlere kelimeler veriyoruz özgür olmaya\nBir yandan olmazsa olmaz gibiyiz\nBir yandan sikeyim böyle işiyiz\nSana esir düşüyorum ben bile bile\nPes etmeye bile üşeniyorum ile\nDüşüp düşüp kalkıyorum yerimde\nHakkaten geçerler böyle gidişi\nAkıl ile , ilim ile , ta en başından son bulduğu yere \nSorun ne ?\n\n2",
    "category": "iyiler"
  },
  {
    "id": 120,
    "title": "Sen beni benim seni unutuşumdan daha çabuk unutursun",
    "body": "Sen beni benim seni unutuşumdan daha çabuk unutursun\nÇünkü ben Tanrıyım , sen insan oğlusun.\nElinden geleni ardına koymak\nAklından geçenin farkına varmak\nİki kelam edip sonra susmak\nDerdin büyük , mutlu mutsuzsun.",
    "category": "iyiler"
  },
  {
    "id": 121,
    "title": "O kadar tanıdık ki",
    "body": "O kadar tanıdık ki\nBir o kadar yalnızlık\nİçime doğan güneş\nGözlerimden aydınlık",
    "category": "iyiler"
  },
  {
    "id": 122,
    "title": "Unut o bildiğin yanlışlardan kalanı",
    "body": "Unut o bildiğin yanlışlardan kalanı\nGörme bir daha bırak giderken ölsünler\nİster iste ister isteme bir şekilde yok et olanı\nSen git onu arkana bakmıyorken gömsünler\n\nGüçlü olmaya çalışmaya gerek yok yorma soranı\nAlıcaksan karşına al Dünyayı kimsen kimsin kimsin sen\nGöklerle konuşmayı bırakıp vazgeçince kendinden\nYer yüzünde birileri seni bulup çıkarsın derinden",
    "category": "iyiler"
  },
  {
    "id": 123,
    "title": "Zihnimin en derinlerinde bir şey var sanki okyanusun dibine yolculuk…",
    "body": "Zihnimin en derinlerinde bir şey var sanki okyanusun dibine yolculuk etmeyi bekleyen\nCiğerlerinin patlaması umrunda olmayan bir yunus balığı gibisin gerçi neticede\nBambaşkasın diğerlerinden\nFarkın olsun",
    "category": "iyiler"
  },
  {
    "id": 124,
    "title": "Gel hadi konuşalım artık gelmediğin her günü",
    "body": "Gel hadi konuşalım artık gelmediğin her günü\nDünya dönüyor olabilir\nGüneşin etrafında dönebilir\nUnutma dünü\nBu ruh bile bir gün ölebilir\n\nSana yalan söyleyebilir\nSeni toprağa gömebilir\nBizi yakabilir bu soğuk\nKi bu ısı kaybı önlenebilir",
    "category": "iyiler"
  },
  {
    "id": 125,
    "title": "yine de",
    "body": "Yine de be...\n\nBeni al bu çukurun karanlığından kurtar !\nSana her şeyimi veririm\nYeter ki beni de\nBen sana uçurumlardan atlar sular getiririm.\nO uçurumlar benden korkar.\nYanı başında oluveririm hatırla\nSana sen harikasın\n\n...\n\n;)",
    "category": "iyiler"
  },
  {
    "id": 126,
    "title": "Savaşlarınız da barışlarınız da sizin olsun",
    "body": "Savaşlarınız da barışlarınız da sizin olsun\nBen yarattığınız bu düzene sığamıyorum\nKendinizi kandırdığınız yetmezmiş gibi Dünya'ı yalanlarla doldurdunuz\nPes",
    "category": "iyiler"
  },
  {
    "id": 127,
    "title": "Gün aydınlanır gece batar ben başlarım biterken sen başından gelirken…",
    "body": "Gün aydınlanır gece batar ben başlarım biterken sen başından gelirken 24 saati doldurmuş\nNerden başladın nerde biteceksin nerde kaybolacak o yolun birinden yardım isteyerek gelirken akşamı üzerine doğdurmuş\nKavgalar ederiz diye düşünüyorum her gün batımında güneş yeniden doğacakmı diye ben sorarken şaşırmış\nVerdiğin cevaplara kanar gibi davranıp soruları biriktireceğim öyle sahilde düz bir karaya oturmuş.\nGüpegündüz.\n\nBen ki benden geçmeyi geçtim bedenim sağlam ruhum yorulmuş\nBen ki senden beni seçtiğini ilan bekliyorum kafam yanmış içim soğurulmuş\nBen ki bizden başka kimsem yok diyorum kelimelerden kaleler yaptım sığınmaya kötülüklerden korunmuş\nBen ki benim demekten yorulmaya başlamışım , karanlığa yüz tutmuş\nYapayalnızım sen yokken Allahım\nAvuçlarım biatıyla , nizamı mecbur yüzüme kavuşmuş.\nCanı sıkkın.\nCevaplar arayan bir kulmuş ömrüm uçmak isteyen bir kuş .",
    "category": "iyiler"
  },
  {
    "id": 128,
    "title": "Bir imtiyaz",
    "body": "Bir imtiyaz\nBir dinleyiş için canımı verirdim\nİki hala iki\nGaliba delirdim..",
    "category": "iyiler"
  },
  {
    "id": 129,
    "title": "Bir türlü bir araya gelemeyen süslü kelimelerim",
    "body": "Bir türlü bir araya gelemeyen süslü kelimelerim\nKalbimle anlatmaya çalıştığım şeylerden niceleri\nAslında bir yolu var da usulen imkansız\nSuskunluğu yanlış anlıyor insan insafsız\n\nMerhamet nerede aşk nerede peki ya sevgi ?\nSöylesene bana bu siyah hangi rengin rengi ?\nAslında bir an için olmak gerekirken vicdansız\nKaldım yalnız.",
    "category": "iyiler"
  },
  {
    "id": 130,
    "title": "Çocuktum bilemedim",
    "body": "Çocuktum bilemedim\nGerçeklerin neden gökyüzünde saklı olduğunu\nSerçelerin neden telaş içinde uçtuğunu\nKaderimin benden önde koştuğunu\nKelimelerle sihir yapmanın mümkün olduğunu\nBilemedim\nBilemezdim",
    "category": "iyiler"
  },
  {
    "id": 131,
    "title": "İstersen günahlarımızı konuşalım bugün birlikte",
    "body": "İstersen günahlarımızı konuşalım bugün birlikte\nSen bana kaç defa başkasından gül aldığını anlat\nBen sana kaç defa yok olduğumu anlatayım hiçlikte...\nBoşu boşuna hemde.",
    "category": "iyiler"
  },
  {
    "id": 132,
    "title": "Ooof of...",
    "body": "Ooof of...\nGenzime takılıyor dertler\nİçine kapanmış etrafımdaki her yer\nAçamıyorum kilidi\nGerçekler !",
    "category": "iyiler"
  },
  {
    "id": 133,
    "title": "Adımlarını ölçüyordu adam",
    "body": "Adımlarını ölçüyordu adam\n2 metre varmıydı topukları arası\nYorgunmuydu öyle varsayılan\nHakikaten kaç santime basmıştı \nBu hayatındaki kaçıncı adımdı\nKaçıncı taktir\n\nAyaklarına bakıyordu adam\nDüşman gibi \nHasiktir.",
    "category": "iyiler"
  },
  {
    "id": 134,
    "title": "Yorgun düşüncelerimin dinginliği",
    "body": "Yorgun düşüncelerimin dinginliği\nÇok üstüne gitmişim enginliğin\nÇok sormuşum akıbetimi\nAzalmışım bildiğin\nBoşa gitmiş zenginliğim\nHoşa heveslerle kendimi bitirmişim\nYorgun düşünce farkına vardım dingilliğimin\n\nNeler kaybettim\nNeler için nelerden vazgeçtim\nNefisler uğruna kendimden geçtim\nÇarptığım zaman duvara , kapılar daraldı geçtiğim\nGençliğimi tutamadan elimde\nYaşım 30 oldu vay anam vay\n27 idi ilk tercihim",
    "category": "iyiler"
  },
  {
    "id": 135,
    "title": "Her son defada aklıma takılır bitişler",
    "body": "Her son defada aklıma takılır bitişler\nÇabalarım elimden geldiği kadar unutmaya\nSon bahar gibi son\nKış gibi ılığa yeltenişler\nZamanla geçer",
    "category": "iyiler"
  },
  {
    "id": 136,
    "title": "Alışabilir misin mesela kaygılara ?",
    "body": "Alışabilir misin mesela kaygılara ?\nMesela hangi gün öleceğini bilsen yaşayabilir misin bi 100 yıl ?\nYapmadıkların gelmeye başladı mı yavaş yavaş aklına ?\nBıkmadın hala mı aynı şeyi yaşamaktan ?\n\nAzar azar...\n\nDaha daha...",
    "category": "iyiler"
  },
  {
    "id": 137,
    "title": "Bazen hatırlatıyor kendini",
    "body": "Bazen hatırlatıyor kendini\nÇiçekli hayaller kuruyorum kafamda\nHerkes şarkılara sırtını vermiş\nİnanıyorlar bana\n\nDünya kadar büyük mütevazı bir dava\nGörmüyor",
    "category": "iyiler"
  },
  {
    "id": 138,
    "title": "Beni al buralardan götür bildiğin en uzak yerlere",
    "body": "Beni al buralardan götür bildiğin en uzak yerlere\n\nOrada başbaşa bir ayrılık şarkısı söyleyelim birbirimize\n\nKaranlıkta ve hiçlikte\n\nBirbirimize son bir sır verelim bu eşikte\n\nUyuyamıyorum bu beşikte",
    "category": "iyiler"
  },
  {
    "id": 139,
    "title": "Gökyüzünde bir mucize",
    "body": "Gökyüzünde bir mucize\nErtesi gün bir mucize\n2 ve 2 mucize\nBirinde gezegenler dizili ip ip\nDiğerinde peygamber göklerde \n\nKötülük istiyor bu savaşı iyilik değil\nİyilik kötülüğün olduğu gibi deli değil\nİçimde bir huzur ve bin iki tip\nGitmek istiyorum saniyeler içinde evrendeki en uzak yere bir daha geri dönmeyip\n\nBulutların arkasındaki sen , düşman !\nBelki de yaverlerin hallerinden pişman\nFarketmiyor bomba ve füzelerin peşinden uçman\nZaten hepsi düğmeleri gömleğinin",
    "category": "iyiler"
  },
  {
    "id": 140,
    "title": "Sen beni susturamazsın dilim",
    "body": "Sen beni susturamazsın dilim\nYa gönlümden geçenlere ne olacak ?\nGülümsüyorum inim inim\nHüngür hüngür ağlıyorum kahkalahalar atarak\n\nSende beni susturamazsın gönül\nYa aklımdan geçenler ne olacak ?\nHiç ölmeyecek gibi önemsetiyor onunla bir ömür\nZangır zangır titretiyor aşk , kendine katarak\n\nAma sende beni susturamazsın akıl\nYa mantığımı alt üst eden aşk ne olacak ?\nBir daha yanlış yapmayacak gibi kalmış son hakkım\nAvaz avaz olmuş olacak.\nKaderin böylesi.\nCilvesinin güzelliğine bak.\n\nHayat herşeyi almıştı elimden dilim\nGönlüm yalnız kalmıştı ki ben ben değildim en çok buna eminim\nBir renge büründüm , deliydim daha da delirdim galiba\nÖyle bir renk ki kırmızısına imrenirsin\nSözlerin bile üstünde , verebilsen dünyaları verirsin\n\nBurası sana\n\nGel gir aklıma ,aklımı al , aklım senin olsun şakaklarımdaki nabızlarımla oyna\nGökkuşağımın altından geç\nAl dilimi , kendine söyle seni ne kadar sevdiğimi\nAl gönlümü kendine ver\nAklımın ücra köşelerinden bir hikaye seç\nBen susturamıyorum ellerimi \nAl bu şiiri yüreğinde sakla sevgili sevgimin sahibi\nAğır gelmem emin ol.",
    "category": "iyiler"
  },
  {
    "id": 141,
    "title": "Sana ben diye seslenirdim bir bilebilseydim umudu",
    "body": "Sana ben diye seslenirdim bir bilebilseydim umudu\nO zaman zapt ederdim içimde kopan fırtınalı küçük bulutu\nGöğe su serperdim.",
    "category": "iyiler"
  },
  {
    "id": 142,
    "title": "4 duvar içinde 2 kişiyiz",
    "body": "4 duvar içinde 2 kişiyiz\nKapı üzerimize ömürlük kilitli\nBilmiyorum , son 10 senedir biraz değiştik\nBu dost biraz inatçı\nBiraz savaşçı\nBiraz sanatçı\nBiraz alaycı\nBiraz düzensiz\nBiraz güleryüz\nOrtak noktamızsa\nİkimizde ümitliyiz ama hüzünlüyüz\nVe buna biraz üzgünüz",
    "category": "iyiler"
  },
  {
    "id": 143,
    "title": "Ölümün olmadığına inansaydım keşke",
    "body": "Ölümün olmadığına inansaydım keşke\nÖlümü düşündürmeseydin tanrım\nÖlüm yok deseydin bize\nÖlü bedenleri gömmeseydik\nÖl demeseydin ol yerine\nO zaman özgür kalırdık",
    "category": "iyiler"
  },
  {
    "id": 144,
    "title": "Uzun bir yolculuğun bir kaç saat sonrası",
    "body": "Uzun bir yolculuğun bir kaç saat sonrası\nCam kenarı\nAklından geçenler tek tek\nGeçtiğiniz her ağaç\nSaydığın her kilometre tabelası\nRadyoda çalan tanıdık şarkı\nRuhunu kavrayışı sımsıkı\nRuhunun beni bırak diyen haykırışı",
    "category": "iyiler"
  },
  {
    "id": 145,
    "title": "Acaba gerçekten aldatıldığı gibi mi zaman ?",
    "body": "Acaba gerçekten aldatıldığı gibi mi zaman ?\nRadyolarda şarkılar çalıyor bir yanda insanlar cenaze namazlarında\nSahnede ölmek isteyen insanlar var\nBunu istiyolarlar kendi aralarında\nHerşey tamam bir şey eksik",
    "category": "iyiler"
  },
  {
    "id": 146,
    "title": "Mevsimlerden kış hala ruhumda",
    "body": "Mevsimlerden kış hala ruhumda\nSığınacak limanlarımda kimse yok\nVe ay loş\n\nNe çok isterdim Mayıslarınızdan bir dondurma\nAğlayacak bir omzumda yok\nSokaklar boş",
    "category": "iyiler"
  },
  {
    "id": 147,
    "title": "Sesimi duyan var mı ?",
    "body": "Sesimi duyan var mı ?\nHer bağırdığımda bir satır\nHer biri daha dertli bir diğer kahırdan\nAlamıyorum ağırdan",
    "category": "iyiler"
  },
  {
    "id": 148,
    "title": "Sona yakınım ona yakınırım bize sadece özlem",
    "body": "Sona yakınım ona yakınırım bize sadece özlem\nSensiz ne kadar boş her yer bir bilsen , bir görsen\nBir defaya mahsus hakkını helal ettiğini duysam belki geçer\nYa bu böyle olmalı ya da ben bir şekilde ölsem",
    "category": "iyiler"
  },
  {
    "id": 149,
    "title": "İnsan özlüyor zaten yalnızlığı",
    "body": "İnsan özlüyor zaten yalnızlığı\nMesela kalabalıklar arasında bir kalabilmek\nSanki gözlüyoruz bir yerlerde azınlığı\nMesele olasılıklar arasından ikiye düşebilmek",
    "category": "iyiler"
  },
  {
    "id": 150,
    "title": "Kısık gözlerimden içeri hücum eden hüzmeler",
    "body": "Kısık gözlerimden içeri hücum eden hüzmeler\nYazıklar olsun mu bu karanlığa karşı koymayan gölgelere ?\nKaybolan ve hapsolan\nHer geçen an daha da bir mahfolan\nBiraz daha yokolan bu hiçlikle\n\nCesaretim yok\nBu yüzden mi olmayan gerçekle ?",
    "category": "iyiler"
  },
  {
    "id": 151,
    "title": "Onlar senden neler neler isterler...",
    "body": "Onlar senden neler neler isterler...\nNeler neler beklerler...\nNeler neler dilerler...\nNeler neler ?\nNeler ?\nNe !\n\nSöyle ,\n\nBanane !",
    "category": "iyiler"
  },
  {
    "id": 152,
    "title": "İnsan özler mi hoyrat ?",
    "body": "İnsan özler mi hoyrat ?\nNeler bekliyordun diye kimbilir kapalı kapıların ardında\nÇoktan soldun diye mi bakmıyorum hatrına \nGeçme artık buralardan , kendini kandırma artık yeter.\n\nYetişir mi sanıyorsun yeni bir orman burada ?\nHadi oradan , buralar eskisinden de beter.",
    "category": "iyiler"
  },
  {
    "id": 153,
    "title": "Gündüzler karanlık , gecede renkler rüyalardan muzdarip",
    "body": "Gündüzler karanlık , gecede renkler rüyalardan muzdarip\nKaç kişi kalmış olabilir \nKaçtığın için kaçmış \n\nGöz gözü görebilir\nAydınlık sanabilirsin\nKaç kişi varmış hayatında\nEtrafına mutluluk saçmış",
    "category": "iyiler"
  },
  {
    "id": 154,
    "title": "00:22",
    "body": "00:22 \nGel seninle şöyle bir zaman yolculuğuna çıkalım beraber \nEl ele\nSonunu gördüğümüz şeye ulaşırkenki hayal kırıklıklarını yaşayalım\nHep beraber\nGönül gönüle\n\nAğlayarak yazmak istiyorumda bu mısraları gözlerim çöl\nKurudu pınarlarım bir + bir 2’yi gör\nBana durma devam et diye rica etsen bir kere \nBaşına şahit olduğumuz şeyi hatırlarkenki sevinci yaşayalım\nHer beraber\nGönül gönüle\nEl ele\n00:24\n\n2",
    "category": "iyiler"
  },
  {
    "id": 155,
    "title": "Uzun bir yolculukla uzak bir diyara gidiyorsun demek bu sefer..",
    "body": "Uzun bir yolculukla uzak bir diyara gidiyorsun demek bu sefer..\nKelimelerin bittiği yerdeyim nerde olduğumu merak ediyorsan eğer\nSeni her gördüğümde yanıbaşımdan birazcık ötede\nYıllar ne kadar çabuk geçiyor öylece\n\nBir kelime etmeyeli , bir bakış atmayalı , bir soru sormayalı kaç dakika oldu ?\nBen kendime geldiğimden beri acaba kaç milyar kez gözlerim doldu...\nBu sefer ki gerçekten ziyadesiyle yordu.\n\nSeni özledim , merak ediyorum nerdesin\nKim bilir hangi zamanda kime güvendin kimlesin\nBen ardımıza değil önümüze bakalım derim\nBiz kardeşiz ve sen ömür boyu benimsin",
    "category": "iyiler"
  },
  {
    "id": 156,
    "title": "Aldanırdım yalanlara",
    "body": "Aldanırdım yalanlara\nSusardım\nSaklanırdım ardına gönlümün\nYarına bırakırdım ömür işimi\nİnanırdım geçmiş zamanlara\nÖyle geçip giderlerdi geriye bakmadan\nBen mecburen önümdeki manzaramda\nBazen karanlık bazen flu olanlarda\n\nSırtıma yüklenmişim bir türkü\nHep aynı türkü ve karanlıkta\nNe olursun der başında\nİyi ile kötünün savaşında\nİyi ol der kaybedecek olsanda\nKötüyü de sev der bi yandan\nOnu kazan o sana bir adım atmasada\nBir çuval tuz yesen de söyleme susuzluğunu\nÖlsende umutsuzluktan\nCüret etmesin başka yollara\n1. defa dönsede yollarından\n\nSil at geçmişinin uğursuzluğunu\nYalvarırım der bitirir en sonunda\nKaranlığımı aydınlatır\n\n2",
    "category": "iyiler"
  },
  {
    "id": 157,
    "title": "İçimde bir deniz kenarında",
    "body": "İçimde bir deniz kenarında\nŞehrin uzağında bir kasabada\nUfuğu izliyorum , yolumu gözlüyorum\nGüneş her gün batmasada\n2 tane Ay var daha yakınımda\nBakıp görebiliyorum gözlerim kamaşmadan\nİhtişamdan etkilenmeyi özlüyorum ger gün\nŞahşahaları o kadar büyüleyici ki..\n\nKitaplarım küskün bana\nŞarkılarım uzaktan\nKeşke alışabilseydim\nVar olmaya çalışamasamda\nAlışabilseydim keşke şu hayata\nKaranlıktan korkuyorum peşpeşe\nÖnüme serilen yollara bakıyorum\nBu nasıl bir çıkmaz ?\nTek tek başa çıkmaya çalışmıştım oysa\n\nDalgalar dalgalar dalgalar\nGeri getirin artık beni bana\nBurdaki ben çok üzgün\nDurgun ve arayışta bu aralar\nSoruları dinliyor\nCevabını bileni bekliyor\nBekliyor\nDaralan zamanda sıkışıyor\nSıkılıyor\n\nGörmek istiyorum önümü\nGöz kırptığını gördüm ölümün\nGideceğim buralardan bir sabaha karşı\nKalacağım  burda geldiğinde gündönümü\nYerle yeksan\n\nŞarkılar başkalarına yazılacak o saatten sonra\nSözler verilecek nakaratlarda\nŞairler kadınlara susacak kağıtlarda\nGöz pınarları kuruyacak kiminin\nKiminin eşi o an kahvaltıya çağıracak çocuklarının yanına\nNe güzel değil mi bensiz bir Dünya\n\nKızgınım çok\nYere düştüm kaldıranım yok\nLinç bu açıkça\nBen yazıyorum tamam da \nOkuyan yok.\n\nBen susuyorum tamam da\nYuttum mu dilimi soran yok\nÇeyrek bir aklım var\nKalan 3 parçasını kaybettim , en azından 3 saat dinlenilmeye ihtiyacım var\nBir sen varsın sevgilim\nAma benim mecalim yok anlatmaya\nŞiir konuşabiliyorum ben artık\nDilim böyle dönüyor anca\n\nBir hayal dünyası dediler\nHayal kurma dediler\nİstemediler !\nDeli dedi deliler..\nHalbuki 2 tane ay'ım olsun istemiştim\nBen kendim alacaktım vermediler\n\nİhanet var dedim\nDinlemediler..",
    "category": "iyiler"
  },
  {
    "id": 158,
    "title": "Vay be babam",
    "body": "Vay be babam\nSen yaşlandın ben büyüdüm bir ara\nŞimdi kim demleyecek çayı\nAramıza fitne fesat sokmadan\n\nYıllar geçmiş sen hep benim olduğum yaşın 30 fazlası\nSaniyelerle aramız kötü , dakikalarsa alası\nŞimdi kim yol yapacak seninkisiyle uzaklara\nBilemiyorum çünkü bu ikimizin de arabası",
    "category": "iyiler"
  },
  {
    "id": 159,
    "title": "Bir şiir gibi eski günlerin",
    "body": "Bir şiir gibi eski günlerin\nİki defa okuyunca anlamıştım karşını\nSoğuk bir rüzgar ile savrulunca saçların\nAyrı düşmüştük aynı zamanda aynı mekanda adı Dünya\nŞimdi sen düşün kafiyelerin bir anlamı mı olmalı ?\nGözlerimi kırptığımda mı gerçeksin güya ?\n\nŞiir bu ya , hep bir kıvranıştan ibaret\nSeçemiyorum en olur kelimeleri alt alta\nYine de hapsoluyorum bir kaç anıya, yön veriyor\nÖyle ya , sol yanımın firari misafirisin\nOlmaya olmaya daha da soğutmuşuz duvarları\nŞimdi geç kalsak ne farkeder\nEzberledik şimdiki geçmiş zamanları\nDünyaları dönüyor herkesin\nTam anlamı",
    "category": "iyiler"
  },
  {
    "id": 160,
    "title": "Dinlemek herkesin içinden geçenleri",
    "body": "Dinlemek herkesin içinden geçenleri\nAnlamak gerçeği\nKoskoca evreni\nİçimdeki çekirdeği\n\nDinlemek sessizliğin içindeki gerçeği\nSorular sormak için herşeye\nKoskaca evrene\nİçindeki bir şeye\nZamanın peşindeki kim ?",
    "category": "iyiler"
  },
  {
    "id": 161,
    "title": "Gönlümden bir el uzanıyor sana",
    "body": "Gönlümden bir el uzanıyor sana\nKalbine dokunmak istiyor ruhum\nFarkında olmadan aşık olmak istiyor adeta",
    "category": "iyiler"
  },
  {
    "id": 162,
    "title": "Yolun yarısındayım başı çok uzak sonu belki huzur",
    "body": "Yolun yarısındayım başı çok uzak sonu belki huzur\nHerkes çıldırmıştı , bir ben kalmıştım",
    "category": "iyiler"
  },
  {
    "id": 163,
    "title": "Razı olsun bütün anıların anılarım hatrına",
    "body": "Razı olsun bütün anıların anılarım hatrına\nAylar geçmiş henüz varamadan farkına\nAl aşkını koy üzerine aşkıma\nÖldür beni\nTak canıma",
    "category": "iyiler"
  },
  {
    "id": 164,
    "title": "Akıllanmış bir delinin sessizliği bu",
    "body": "Akıllanmış bir delinin sessizliği bu\nÖtekine serzenişi\nÖzleyişi İstanbul'u\nDüşüncelerini kontrol edemeyişi\nPes edişi\nTeslim oluşu",
    "category": "iyiler"
  },
  {
    "id": 165,
    "title": "Bu hayatımın yazısı",
    "body": "Bu hayatımın yazısı\nAlın yazım yürek sızısı\nGüneş gibi yakınca ısısı\nGün dönümünü hatırla\nEtrafında dönüşünü\n\nBana zaman kazandır\nAman hazandır , zarar azandır\nHesabı kesecek zannının\nAlın yazısını hatırla\nSonunu hatırla\nAlnından öpüşünü\n\n2",
    "category": "iyiler"
  },
  {
    "id": 166,
    "title": "Beni şaşırtan her şey bir anda yanıverirdi aklımda",
    "body": "Beni şaşırtan her şey bir anda yanıverirdi aklımda \nAsıl mesele gerçeği görmek , olur musun farkında ?\nDoğru yanlış birbirine karışmış , düşman dostlar\nVerebilir misin bir öğüt ? İşte duruyorum karşında\nYanı başında..",
    "category": "iyiler"
  },
  {
    "id": 167,
    "title": "Vazgeçebilmek her şey için bir şeyden",
    "body": "Vazgeçebilmek her şey için bir şeyden\nÖmrümü adadığım gençliğim bir yalan mıymış ?",
    "category": "iyiler"
  },
  {
    "id": 168,
    "title": "Gel dün geceme gündüzümden geç geri",
    "body": "Gel dün geceme gündüzümden geç geri\nSabit bir an yakaladım zor tutuyorum\nKaçacak bir deliği var mı bilmiyorum\nLazımsın , çok istiyorum seni\nÂlem şahit olsun , ben unutuyorum\nSöz veriyorum son veriyorum bu gidişe\nBir yer beni çağırıyor eve\nGitmeden de seni çağırıyorum\nKorkma,\nBana olan sana ters\nSana olan bana ders\nNeler oluyor ?\nNeler yapıyorum ?",
    "category": "iyiler"
  },
  {
    "id": 169,
    "title": "Gönlümü bir ateşle sıcak basmış ruhum ter",
    "body": "Gönlümü bir ateşle sıcak basmış ruhum ter\nYakıyoruz göğün misafirlerini\nAcaba ne olacak daha beter ?\nKim kime veriyor haberlerimi\nUnutlar , umutlar , uyuklar gibi bir ömrü\nKim uyandıracak yeter !\nGüneşe sığdıracak kadar büyük\nGüneşi ısıtacak kadar harı gür\nGüneşe sor\nBugün olmazsa diğeri öbür\nHayra yor\n\nYarın olacaksa ve bugün tek şanssa tek günlük ömür\nDünyaları veririm sevgi için kendimden vazgeçerim\nYeter ki muhtaç kalmasın hiçbir kul\nRıza göstersin akıl\nMutlu olsun gönül umudu olsun zaferlerin.\n\n2",
    "category": "iyiler"
  },
  {
    "id": 170,
    "title": "Geliyorum gümbür",
    "body": "Geliyorum gümbür\nO gündür bu gündür görmüyordu gözlerim\nKırık bir kalp \nBuruk bir hoşçakal\nTaşan denizler",
    "category": "iyiler"
  },
  {
    "id": 171,
    "title": "Gırtlağımıza kadar aşk şarkısıyla dolduk",
    "body": "Gırtlağımıza kadar aşk şarkısıyla dolduk\nBirisi artık yeter buna demesin mi ?\nNasıl bir sevda bu , nasıl bir yoksunluk ?\nBu gittiğimiz yol hangi yolculuk için ?\n\nBence bir kadeh su için",
    "category": "iyiler"
  },
  {
    "id": 172,
    "title": "Adım senin için",
    "body": "Adım senin için\nSeslenebil diye göz bebeklerime\nKonuşabil diye arkamdan , seslen diye ruhumun da içine\nNefret et diye vermişler o ismi ben seçmemiştim\nSevebil diye resmimi\nSeç birini\nİkincisini tercih ederim.\n\nEpeyce duymuşumdur kastlarını\nSöyleyince uymuşumdur ah o haslarını bildiğim yalanlara\nNe yollardan geçti bu beden \nNe deriler değiştirdi bu günlere gelene kadar ah..\nNe yalanlar söylemişti soranlara\nİyiyim\nÇok iyiyim\nElhamdülillah\n\nSen bana beni hatırlatman içindin\nBen sana seni bana hatırlatman içindim\nEyvah !\n\nR",
    "category": "iyiler"
  },
  {
    "id": 173,
    "title": "Sanki her şey üstüme geliyor",
    "body": "Sanki her şey üstüme geliyor \nHerkes bana bakıyor\nNefesim daralıyor\nGözlerim kararıyor gibiydi\n\nBana bunları yaşatan\nNeydi ?",
    "category": "iyiler"
  },
  {
    "id": 174,
    "title": "Artık gözlerimden sıyrılıverip kaçan milyarlarca hatıra kadar çoksun",
    "body": "Artık gözlerimden sıyrılıverip kaçan milyarlarca hatıra kadar çoksun\nDünyalarla ölçülür , boşluklarımı doldurursun\nUzun uzun bana benim hikayemi anlat\nBana bizden bahset hep , ne olursun.\n\nSesini duyarcasına özlediğim gönlümün misafiri\nBen dağlara , denizlere ve gökyüzüne şahidim\nBen sana gülen umut dolu gözlerle içini döken biri\nBen hayatımın geri kalanında her nefesine aidim.",
    "category": "iyiler"
  },
  {
    "id": 175,
    "title": "Elinde ne varsa uçur göğe",
    "body": "Elinde ne varsa uçur göğe\nÇok ağır olsa da\nKalbine sığmasa da bu\nBakabilsin diye yüzün yüzüne\n\nGökte ne varsa sığdır şimdi hepsini iki eline\nYok hayır olmaz ama\nKalbine sığarsa bu yük\nÇıkabilirsin onun karşısına , baksın diye yüzüne",
    "category": "iyiler"
  },
  {
    "id": 176,
    "title": "Senin için ben gitsem bu sefer uzaklara ?",
    "body": "Senin için ben gitsem bu sefer uzaklara ?\nGeri dönmeyeceğimi bile bile buna müsade eder misin ?\nSırf sen düşme diye artık yalancı tuzaklara\nBana teşekkür edip yolcu eder misin ?\n\nEmanet eder misin  susanlara ?",
    "category": "iyiler"
  },
  {
    "id": 177,
    "title": "Neredeysen orada yoksun",
    "body": "Neredeysen orada yoksun\nBilmiyor kimse nerede olduğunu\nGözümde canlanır gökyüzünde bir yıldızın yok oluşu\nDoğru mu bu ?",
    "category": "iyiler"
  },
  {
    "id": 178,
    "title": "Sonu gelenler bugün oldu dün",
    "body": "Sonu gelenler bugün oldu dün\nDünden farkı yok bugünün yalnızca yalnızlığımı görmüşüm\nSadece önüme dönmüşüm\nYanıp yanıp yeniden sönmüşüm\nHayat hesap sorarken halime hatrıma nerde ölmüşüm\nCümle kurmak için geç kaldığım zalim aklım buydu\nAyıp günah mübah değil \nSayıp gelmişime geçmişime şimdi ileri uç\nSonuç çok fena ki sahip olduklarımda huydu\nAma sebep karşı koyma hissi , cümle alem bile duydu\nSağırdı hepsi\nAğırdı sancıları\nElimde tuttuğum zirvelerde çektiğim o restleri\nBağırdı bazıları , geçemediler testleri\nAlırdı ağrıları\nKalırdı yarın adı\nSabırdı süt limanı",
    "category": "iyiler"
  },
  {
    "id": 179,
    "title": "Ne kadar uzağa bakarsam bakayım görebildiğim tek yer içim",
    "body": "Ne kadar uzağa bakarsam bakayım görebildiğim tek yer içim\nBu ne biçim düzen böyle\nBu hunharca savaş niçin ?\n\nBarış orda işte\nSinsi oyunlar eğlendirmiyor artık işte\nKendi kendimize yok olacağız bu gidişle\nAllahın lütfuna uğrayacağımız için\nNedense",
    "category": "iyiler"
  },
  {
    "id": 180,
    "title": "Ben kendimi ne kadar çok anlatmaya çalışsam sen beni o kadar az anladın…",
    "body": "Ben kendimi ne kadar çok anlatmaya çalışsam sen beni o kadar az anladın.\n\nNe zaman bir karar alsam o kadar karşımda durdun\n\nBeni yalanladın... ve yordun.\n\nŞimdi dur yine karşımda sor tuhaf sorularını \n\nBen susacağım ta ki sen çatıncaya dek kaşlarını.\n\nO zaman belki anlarsın çaresiz haykırışlarımı.",
    "category": "iyiler"
  },
  {
    "id": 181,
    "title": "Gidiyorsun tanıdık olmayan yollardan",
    "body": "Gidiyorsun tanıdık olmayan yollardan\nNe bulmayı düşünüyorsun buradan uzaklardan\nDikkat et hile olabilir tuzaklarda\nBen olsam kendime geri dönerdim\n\nKadere soralım istersen iki ne demekmiş\nOn yıla varacak o kelimelerden emeklermiş\nÖzür dilerim , iki ucu pis değnekmiş\nSen olsam aldığın nefesin bedelini öderdim",
    "category": "iyiler"
  },
  {
    "id": 182,
    "title": "Aynı derde ortağız seninle biz",
    "body": "Aynı derde ortağız seninle biz\nBen gökkuşağına hasretim\nSen yağmuruna vurgunsun güneşin\n\nYine kelimelerle oynuyorum gördüğün gibi\nBir yanım seni özlüyordu demin\nİki yanım dur diyor söyleme hemen peşin peşin",
    "category": "iyiler"
  },
  {
    "id": 183,
    "title": "Geldiğim yoldan geri mi döneyim ?",
    "body": "Geldiğim yoldan geri mi döneyim ?\nBaşı neresi bu yolculuğun , doğumuma mı öleyim ?\nGözlerimi kapattığımda hep bir karmaşıklık\nZihnimden geçenlere inanacak mısın ?\nSöyleyeyim...\n\nBu işte bir yanlışlık var\nBu iş yapayalnız ve bir o kadar emektar\nVefalar var yanlışlara doğrularla minnettar\nBir kapı ki bu sanki sadece benim elimde anahtar.\nOlmayacak gibi değil , gelsin işte günahlar\nHaklılarla haksızlar haklı iken haksızlar\nTaş var ellerinde ya bir savaş çıkar yada duvarlar\nKoş bak kim var yerimde , kim sırtımı sıvazlar\nBu aklı bana veren Allah er geç sunacaktır , yalvar\nDağıtma zihnindekileri ellerinde kılıçlar\nSana bir tek sen yetersin , gerisi sana bile dar\nSen en iyisi bu şiiri başa sar\n\nZihnimden geçenlere inanmadın değil mi ?\nSor !",
    "category": "iyiler"
  },
  {
    "id": 184,
    "title": "Hani gelir derdin arkasına ' o \"son bir \"der gibi bakarak",
    "body": "Hani gelir derdin arkasına ' o \"son bir \"der gibi bakarak\nZincirlerimi kırdım ben sana uçacakken\nNefesimi ruhumdan ayırdında geldim kaçarak\nHenüz erken ,\nBiraz dinlen ,\nSonra öğren.",
    "category": "iyiler"
  },
  {
    "id": 185,
    "title": "Bütün Dünya etrafımda",
    "body": "Bütün Dünya etrafımda\nBir kendime bakarım bir de sana ayna\nBana söyleyecek o kadar çok şey var ki\nHangi birini dinlesem , ölüm olanı mı mesela ?",
    "category": "iyiler"
  },
  {
    "id": 186,
    "title": "Sen büyük depremlerden defalarca sağ çıkmış bir binanın yosunlu kuzey…",
    "body": "Sen büyük depremlerden defalarca sağ çıkmış bir binanın yosunlu kuzey cephesinin güneşe hasretisin\n\nVe ben dualarını yok yere unutmuş bir neslin en beyefendisiyim.",
    "category": "iyiler"
  },
  {
    "id": 187,
    "title": "Basitmiş gibi sahip oldukların",
    "body": "Basitmiş gibi sahip oldukların\nYokuş yukarı yuvarlanmaların var\nZar zor kavuşuyor kollarıma kolların\nAramızdan insanlar geçen mesafeler var\nOysa çok güzel bildiğim herşeyin\nVe tehlikeliydi merhabalar\n\nAzimmiş gibi söylediğim her kelimem\nYoka yürüyoruz fotoğraflarımızda\nEtrafında papatyalar yolların\nYüzümüzde serin mi serin meltemler var \nOysa çok özeldi kalbimin her şeyi\nGünaydını olduğun gibi sabahların\nÇok değerliydi saniyelerimizin her biri\n\n2",
    "category": "iyiler"
  },
  {
    "id": 188,
    "title": "Zaman zaman boyumdan büyük işlere kalkıştım",
    "body": "Zaman zaman boyumdan büyük işlere kalkıştım\nTek isteğim kendime bi çift alkıştı\nHerkes ama herkes bir şey öğütlemeye kalkıştı\nSonunda yine kendi kendime kalmıştım",
    "category": "iyiler"
  },
  {
    "id": 189,
    "title": "Beklemekten bitap düştü zaman",
    "body": "Beklemekten bitap düştü zaman\nZaman zaman zaman kaybetti\nZaman zaman zaman kazandığını zannetti\nO zaman farkına vardı işte yorgunluğun hazzının\nGiden gitti\nKalan kendi \nZaman , zaman geri gelir farzetti\nBazen durmak istedi\nBazen dönmek istedi\nBazen ölmek istedi\nÖlemedi zaman\nAman dilemeyi hikayesiyle arz etti\nBir ileri , iki geri , üç ileri , dört geri\n\n2",
    "category": "iyiler"
  },
  {
    "id": 190,
    "title": "Yine , yine , yine !",
    "body": "Yine , yine , yine !\nYazıyorum işte oku diye içimden geçenleri\nBu kadar şey niye ?\nBunca satır , özenle seçtiğim kelimeler ve niceleri\nTaşıyorum sana ruhumun içinden en güzel cümleleri",
    "category": "iyiler"
  },
  {
    "id": 191,
    "title": "Bugün aldığım tüm nefesler",
    "body": "Bugün aldığım tüm nefesler\nDuyduğum bütün hevesler\nNiyetlerim ve iyi dileklerim\nGünahkar düşünceler\nGüpegündüz üşüyüşler\nKendime yürüyüşler\nAnlam aramadığım gülüşler\nYan bakışlar\nTam aldanışlar\nHepsi yalanmış\nHalim talanmış",
    "category": "iyiler"
  },
  {
    "id": 192,
    "title": "Düşüncelerini böldüğüm için özür dilerim",
    "body": "Düşüncelerini böldüğüm için özür dilerim\nBiliyorum fonda akıyor yağmur damlaları\nRüzgarın şarkıları eşliğinde\nAffedemiyordun geçmişindeki adamları\nAvutamıyordun unutamadıklarını\nSaymaya çalışıyordun sayamadıklarını\nİstemiyordun alışkanlıklarını\nHissetmiyordun aşkı\nHissedemiyordun\nİstiyordun\nSayıyordun\nAvutuyordun\nAffediyordun\nRüzgarın şarkıları\nFon\nÖzür dilerim\nBölmek istememiştim\nSadece hissedememiştin..\n\n2",
    "category": "iyiler"
  },
  {
    "id": 193,
    "title": "Gece güler aynanın karşısında gözlerini kırptığında",
    "body": "Gece güler aynanın karşısında gözlerini kırptığında\nNe yazık ki örseler yaşanmışlıkları\nSana kaç kere tembihledi yapma diye aynısını\nSen kendim nasıldım diye baktığında\nGözlerin söyler sana aynasını\nBak , gördün mü şimdi faydasını ?",
    "category": "iyiler"
  },
  {
    "id": 194,
    "title": "Küçülüp küçücük kayboldu göz bebeklerim",
    "body": "Küçülüp küçücük kayboldu göz bebeklerim\nIşık o kadar aydınlık ki karanlığın sonunda\nO beni bekler ben onu beklerim\nBir bildiği vardır elbet onunda\nSöyleyecek sözleri vardır emeklerin\nÜstünden geçilecek anıları vardır herşey yolunda\nBu anlamsız oyunda bu karanlık gökyüzüde düşman \nYıldızları parlak onunda\nDolunaya göz kırpar sanki görebilecekmişim gibi\nEtrafında dönebilecekmişim gibi\n\nÜzülüp üzülüp daracık kaldım ağuşumda\nHüzünler o kadar karanlık ki ümitlerin başında\nO beni ister ben onu isterim\nBir dilek hakkı vardır illaki onunda\nÜstesinden gelinecek afları vardır solunda\nBu anlamsız oyunda artık bitsin bir zahmet tadında\nAydınlığın sahibi , güneşte düşman\nBulutları var onunda\nEtrafımda dönebilecekmiş gibi.",
    "category": "iyiler"
  },
  {
    "id": 195,
    "title": "Koşacağım en uzaklara",
    "body": "Koşacağım en uzaklara\nVaracağım en sondaki sorulara\nAlacağım ellerinden cevabı\nÇarpacağım surlara\n\nYitirip de gideceğim gidenleri\nArmağanlar vereceğim soranlara\nKavuşacağım en güzel sona bir gün\nGönlünden gönlüme yol kuranlara\n\nHerşey bitti diyeceğim yalanlara\nBitti diyeceğim savaşlar\nGeldiğini haykıracağım yarınların\nDoğdu güneş batıdan\nDoğu yetim kaldı diyeceğim soranlara\n\nSon sözüme güvenen adamlara\nYavrulara , analara\nBitkilere , hayvanlara\nTaşa , dağa\nSelam olsun son perşembe akşamına\nYarın bir defaya mahsus gelmeyecek bir daha\n\n2",
    "category": "iyiler"
  },
  {
    "id": 196,
    "title": "Düşünsene barışmışız",
    "body": "Düşünsene barışmışız\nBu düzensiz düzene alışmış\nBu dümensiz yelkenliyi batırmış\nBirbirimize danışmış\nDiğerimize karışmışız\n\nHatırla ne kadar ucuzdu kavgalar\nNe kadar büyüktü dalgalar\nİnfaz için yargılar\nNe kadar da varlar",
    "category": "iyiler"
  },
  {
    "id": 197,
    "title": "Belki bir süre daha tutunurum düşüncelere",
    "body": "Belki bir süre daha tutunurum düşüncelere\nOnlar dönmemek üzere kovduğum haddini aşmış birer misafirlermiş meğer\nDüşünüyorum da arkadaşarından su dökmek gerekir mi bir süre\nGelmelerini istemiyorsam eğer\n\nBuna değer.",
    "category": "iyiler"
  },
  {
    "id": 198,
    "title": "Kendim için düşündüğüm tek bir harf yok ki bana yol göstermesin",
    "body": "Kendim için düşündüğüm tek bir harf yok ki bana yol göstermesin\nKulaklarımdan çeken heceler\nKelimelerden tekme\nTek başına dağ gibi bir cümle.\n\nHayatımın özeti de işte bu şekilde\nBir şekilde böyle ve söyleyebiliyorum çekinmeden.\nSıra bende.",
    "category": "iyiler"
  },
  {
    "id": 199,
    "title": "Hayır , tam ortasındayken bu unutulmuşluğun",
    "body": "Hayır , tam ortasındayken bu unutulmuşluğun\nAklımın en ücra köşelerinde bir yer seçmiş kendine birkaç anı\nKaranlıktan korkmayan bir kandil kadar saklı\nKaybedecek bir şeyi olmayacak kadar yaşama bağlı\nGel de kaldır yerlerden o geçen zamanı\nBen affetmeyi atlamışım sen de yolları yürüttün.\nBen farketmeyerek ağlamışım günlerce\nSen beni o yerlerde süründürttün\nTamam mı ?",
    "category": "iyiler"
  },
  {
    "id": 200,
    "title": "Geri dönemeyecek kadar yorgun",
    "body": "Geri dönemeyecek kadar yorgun\nZamanda yolculuk yapamayacak kadar da olgunsun\n33 yaşında ihtiyar\n2 yaşınca bahtiyar yaşa\nOlsun\nBaş kaldırma , hâşâ !",
    "category": "iyiler"
  },
  {
    "id": 201,
    "title": "Takvimlerde vardım ben",
    "body": "Takvimlerde vardım ben\nBir sırdım içinde\nGünlerce aylarda\nYıllarda asırlardır\nBirer birer veda edip sonlara\nHer gün yeniden doğduğum\nHer anım baştan sona\nSondan başa dönüp durduğum\n\nFarkına varmak da güçtü\nYa düşüncelerimde konuşuyorlarsa benimle\nYa hislerimde gerçekse\nEn içimde\nBir ses var zar zor duyduğum\nBir telkin \nEn içimde nefesimde soluduğum\nBir görev \nTek bir ödev\nTakvimlerce\n\n2",
    "category": "iyiler"
  },
  {
    "id": 202,
    "title": "Çıkar bir yol buldum sonunda evreka !",
    "body": "Çıkar bir yol buldum sonunda evreka !\nKalbim ile beynimin ahengi bir harika !\nAt olup koşasım var resmen",
    "category": "iyiler"
  },
  {
    "id": 203,
    "title": "Bak , bu senin söylediklerinin , başkalarından duyduklarınınla hiçbir…",
    "body": "Bak , bu senin söylediklerinin , başkalarından duyduklarınınla hiçbir alakası yok , aklını karıştırmasın .\nBu iyi değil.\n\nBak , gözümün önündekiler gözükmüyor diye katlandığın şeylere mağlup olma sakın.\nBu sen değilsin.\n\nBak , hissedebiliyorken bundan vazgeçirmeye çalışıyorlarsa bir sürü pansumanla bunu karşına alma\nBunlar anlamaz çünkü onlar onlar değil.\n\nBak bir süre daha geçince içine attıkların birikip coşunca bir kaç zaman dilimi sonra olaylardan olay beğen\nEminim ki çok eğleneceksin\n\nİnsanların nefretinden , gözyaşından , varoluşundan yok oluşunda sonsuz bir yalnızlığa doğru ıslık çala çala yürüyüp ders alışından.\n\nİflah olmaz bir düzene çomak sokarken buna bayılan milyarlarcasından\n\nOlası bir bir şarkının daha sana yazılmış olmasından\n\nNefret edeceksin geçmiş günahlarından , onların. Affedilsinler diye beni al demiştin\nNe şekilde nerede ne zaman bilmiyor kimse\nAma orda işte !\n\nUzun bir şiir mi olacak\nHarbe bir şarkı mı\nKahpe bir tuzak mı\nHissettiklerin yasak mı ?\n\nBak , bu şekilde artık hayatın . Daha fazla itmeye çalışma\nSana kimse sormayacak nasıldı diye , sorsak mı ?\n\nSormasak mı ?",
    "category": "iyiler"
  },
  {
    "id": 204,
    "title": "Gerçeği sahtesinden ayırırken o",
    "body": "Gerçeği sahtesinden ayırırken o\nİçindeki olan şeye anlam veremiyor bu\nHer gördüğüne inanıyor , yanıyor su\nDualarım kendimle\n\nGündüzü gecesi birbirine aşık\nSağındaki soluna maşuk",
    "category": "iyiler"
  },
  {
    "id": 205,
    "title": "Bir yanlışa batar gibi güneş",
    "body": "Bir yanlışa batar gibi güneş\nAkşamında yatsısında hüzün verir çabalar\nBir ağıt gibi göğe yalvarırken ezanlar\nSuyu serin bir cennet , harlısından bir ateş\nBir de yüzleri yere bakan fezalar",
    "category": "iyiler"
  },
  {
    "id": 206,
    "title": "En uzağa yolculuğumun en başında çıktın karşıma",
    "body": "En uzağa yolculuğumun en başında çıktın karşıma \nUçuşturdu gökyüzümü kuşların\nEn erken saatinde içimin\nDaha serinken semâm\nAnlamı var artık umutlarımın",
    "category": "iyiler"
  },
  {
    "id": 207,
    "title": "Hayat bir an için dursa",
    "body": "Hayat bir an için dursa\nBirisi konuşsa\nZorunlu şeyler zoruma gidiyor\nZaman bir an için orda\nKıyametim oysa\nBirileri ordan geliyor",
    "category": "iyiler"
  },
  {
    "id": 208,
    "title": "Bir an için hatırlanınca geç kalınmış hatıralar",
    "body": "Bir an için hatırlanınca geç kalınmış hatıralar\nO an için kalbini verirsin\nZaten kaybolmuşum gökyüzünde bir yerlerde\nKendimi zor tutmuşum yerde \nBelki hakkımı verirsin\n\nGelen gelecekse gelsin artık bu ev sıcak değil\nAlışırım soğuğuna kendimin ısıtırım kendimi\nİnanamıyorum bu olana bu rüya mı gerçek mi \nTabi zar zor uyandım ben uyutmuş beni bir doz zehir",
    "category": "iyiler"
  },
  {
    "id": 209,
    "title": "Gözlerim görmüyor olabilir",
    "body": "Gözlerim görmüyor olabilir\nBelki kulaklarım da sağır\nEllerimi kullanamıyorum\nYürüyüşüm seninkinden ağır\n\nÖnce güneş doğabilir\nAy yerinde ağır\nKoklayabilirsen gece gökyüzünü\nDuyamazsam seni sen yine de bağır",
    "category": "iyiler"
  },
  {
    "id": 210,
    "title": "Gönlümün karşısına koyduğun lütuf etme hadisesi",
    "body": "Gönlümün karşısına koyduğun lütuf etme hadisesi\n\nYakışıyor mu sana sana yalan söylemek\n\nSustuğun yetmiyormuş gibi gülümsemeler de Allah'a emanet malesef , sanki bu bir veda haysiyeti\n\nSanki gözlerinde o öfkeyi hala görebiliyorum ey \n\ninsanlığın en can acıtan mesafesi\n\nNe güzel olurdu bir sabah öperek uyandırsan Güneş'i\n\nSon buldu desem bu saçma sapan bölüm nihayet\n\nAnıların hatrı kalmamış\nKapılar kapanırken aralık\nBen, senin bana değil senden sana bir mektubum...\nAma o kağıt yaza yaza simsiyah artık ve o odan gözün gözü görmediği zavallı bir karanlık.",
    "category": "iyiler"
  },
  {
    "id": 211,
    "title": "Sus dinle kalbimdeki sesleri",
    "body": "Sus dinle kalbimdeki sesleri\nAdını haykırıyor sonsuzluğa\nOnsuzluğa dayanamaz dedim ah zavallı \nyüreğim bir türlü vazgeçmedin onsuzluğa\n\nSus konuşma yalan sarar\nMeyilliyim sana inanmaya\nYolun benim kalbimdeki izlerin\nAh seni içimde gizlerim\n\nBak dumana yanıyorum\nBulut oldum yağıyorum\nKaybettim arıyorum\nKendimi sende buluyorum",
    "category": "iyiler"
  },
  {
    "id": 212,
    "title": "Yıllar seni eskitememiş en kadim dostum !",
    "body": "Yıllar seni eskitememiş en kadim dostum !\nMilyarlarcasından yine en iyisi sensin .\nHer defasında da buna bir anlam arardım doğrusu... \nO kabullenmesi zor imkansızlık duygusu dokunurdu yersiz .\nGele gele niye yine rüyamda geldin ki şimdi ?\nBeni neden beklettiğini anlat seni aşağılık piç kurusu ! \nBeni neden bıraktın bu kadar habersiz ?\nBu seferki hangi gafletimin uykusu ?",
    "category": "iyiler"
  },
  {
    "id": 213,
    "title": "Kulaklarımda usul bir çınlama",
    "body": "Kulaklarımda usul bir çınlama\nDünyanın öbür ucundan geliyormuş gibi bir ses\nLütfen , beni yanlış anlama ama\nSadece bu sefer mevzuyu biraz kısa kes.\n\nDuyuyorum seni bağırma\nYanımdasın zaten , korkma , ağlama\nHiçbir şey engel olamaz seni anlamama\nDağılma , ben hala aynıyım ama ,\nBeni üzemezsin artık daha fazla\n\nEllerinden tutmadım mı ?\nGözlerine bakmadım mı ?\nSana söyledim , takmadın mı ?\nBunu yapma , bıkmadın mı ?",
    "category": "iyiler"
  },
  {
    "id": 214,
    "title": "Güzellikler ülkesinin müdavimi misin ?",
    "body": "Güzellikler ülkesinin müdavimi misin ?\n\nSende sık sık gelir misin buralara ?\n\nÖzellikle ilk kalabalıkta mı yalnızsın ?\n\nOlanlara mı dargınsın diye sor seni soranlara ?\n\nBir sebebi var var oluşunun belli ki bir yüzdensin\n\nBiraz daha var sabır , en azından ayırt edebilenlerdensin.",
    "category": "iyiler"
  },
  {
    "id": 215,
    "title": "Düşünürken derdimi",
    "body": "Düşünürken derdimi\nUzaklara dalakamış buluyorum kendimi\nBazen Güneşi sıvıyorum balçıkla\nBazen bir dağın sisli iklimini bana açıkla",
    "category": "iyiler"
  },
  {
    "id": 216,
    "title": "Isınmak güneşle",
    "body": "Isınmak güneşle \nAydınlık bir ay\nNe kadar güzelsiniz bir bilseniz\nKıskanıyorum Tanrımı\n\nKalanlar oldu gidenler oldu\nYaşandı yaşanabilecek bütün olaylar\nKoskaca evrende arkadaşsınız Dünyamla\nBense herkesle sizli bizli bir rüyada\n\nSürem mi doluyor \nKorkuyorum gerçekten bir görseniz \nNe haldeyiz hiçbirimiz\nO kadar emek o kadar barış o kadar çaba boşa \nİlan ediyorum gizli gizli\nBütün insanlık kıyameti bekliyor",
    "category": "iyiler"
  },
  {
    "id": 217,
    "title": "En ortasında merkezin",
    "body": "En ortasında merkezin \nKoca bir boşuğu dolduran \nDokunmayıp öylece bırakıp giden bir sen\nBütün bir insanlığın hakkı var üzerinde\nHERKESİN !\n\nBelli ki iyi mi değil mi belli değil.",
    "category": "iyiler"
  },
  {
    "id": 218,
    "title": "Korkma artık",
    "body": "Korkma artık\nKoşsun ayakların \nYetiş en büyük korkularının imdadına\nSeninle beraber nefes alsın hayatın\nKorkma artık\nEn azından yürü\nGeçiş hakkı üstün olanların yanına\nSeninle beraber heves etsin yardımlara\nKorkma artık\nHarekete geç.\n\n2",
    "category": "iyiler"
  },
  {
    "id": 219,
    "title": "Fazlası az gelir bana yetinemem sorunsuz",
    "body": "Fazlası az gelir bana yetinemem sorunsuz\nBir akıl var ki bende her şey karmakarışık\nÇoğu şey olumsuz\n\nZaten her güzel şeyin sonu var\nHer çirkin şey o yerde başlar\nİnsanoğlu geçer gider\nKelimeler uyumsuz\nCümleleri doyumsuz\nHuysuz",
    "category": "iyiler"
  },
  {
    "id": 220,
    "title": "Until yet !",
    "body": "Until yet !\nHow dare you are fighting to us\nLets make a deal\nLets not see each other in rest of our lifes",
    "category": "diger"
  },
  {
    "id": 221,
    "title": "Nasılsa bir son var",
    "body": "Nasılsa bir son var\nGeri dönüşü olmayan o yola yolculuk\nBen söyleyince muhteşem bir oyunculuk\nSen farkedince geç kalacak artık umutlar",
    "category": "ask"
  },
  {
    "id": 222,
    "title": "Yavaşlıyor zaman son zamanlarda sık sık",
    "body": "Yavaşlıyor zaman son zamanlarda sık sık\nGözlerimi kapattığımda ne çok şey hayal ettiğimi tahmin edebiliyorsundur artık az çok canım\nDünya'nın en güzel kadını olduğunun da acaba bir tek ben mi farkındayım ?\nO son gülüşün geliyor aklıma ,sen bile dayanamazsın !\nGüldüğümü görsün diyorsun ama gözlerin başka şeyler de anlatıyor, anlatayım...\n\"Benim de koşasım var ama ya tökezler ve düşersem diye korkuyorum bayım\"\n\" Yakalar mısın ? \"",
    "category": "ask"
  },
  {
    "id": 223,
    "title": "Ya da böyle bir şey olmalıydı sevmek.",
    "body": "Ya da böyle bir şey olmalıydı sevmek.\nAnsızın bastıran bir yağmurda heyecanlı,\nNasılsa bir şekilde kuruturum saçlarımı demek rüzgarda,\nKuru yer kalmayacak olsa bile demek bile bile,\nIpıslak , sırılsıklam teslim olmak gökyüzüne başı dik !",
    "category": "ask"
  },
  {
    "id": 224,
    "title": "Gözünün gördüğünü bilirsin",
    "body": "Gözünün gördüğünü bilirsin\nKulağın duyar\nParmak uçlarında benimsin",
    "category": "ask"
  },
  {
    "id": 225,
    "title": "Tut beni",
    "body": "Tut beni\nTut beni yoksa uçarım\nGökyüzünde , bulutlarda bir yer açıp gittiğim yerde sana çok uzaktan bakarım",
    "category": "ask"
  },
  {
    "id": 226,
    "title": "Sensizlik biraz yazda üşümek",
    "body": "Sensizlik biraz yazda üşümek\nBiraz ölümü düşünmek\nBir oda küçük bir eve taşınmak\nYalnız yaşlanmak\nÜşenmek",
    "category": "ask"
  },
  {
    "id": 227,
    "title": "Kısa cümleler kurmak kolay",
    "body": "Kısa cümleler kurmak kolay\nMevzu bir şiir olup anlatabilmek seni ne kadar çok özlediğimi\nKahveler birikti fincanlarca yanyana\nBilmiyorsun adalara bakıp yolunu nasıl gözlediğimi\n\nHatırlıyor musun ?\nSeni çok sevdiğimi söylediğimi ?\nBu olay böylesine kolay\nVe öyle sıradan bir mesele değildi.",
    "category": "ask"
  },
  {
    "id": 228,
    "title": "Seni gücendirdiysem de affet güzel çiçek",
    "body": "Seni gücendirdiysem de affet güzel çiçek\n\nSana gül vermeyen goncalardan bahsettiysem bunun sebebi bunu bilmek zorunda olmandı\n\nYoksa gönlümde sana ayırmak istediğim yer uçsuz bucaksız sonsuz bir ormandı.\n\nBil , ki böylece de bir düşün.\n\nÖnemli olan bu konuyu kendine de sormandı.",
    "category": "ask"
  },
  {
    "id": 229,
    "title": "Ağlayınca yaz",
    "body": "Ağlayınca yaz\nGülünce kış olsun kavuştuğumuz\nAnlatınca yaz gönlüne sözlerimi\nBen unutuyorum.\n\nAllahım bundan sert dert vermesin başka bişey istemem\nDüşürdü aşka \nGöğsüme yasladı seni\nUykuya dalakaladın orda\nGüneş vurdu gelip yeryüzünde buldu nur yüzünü\nBu yüzden sessizce okşayacağım gökyüzünü avuçlarımı yüzüme bir değdirip\n \nSonsuza kadar diyor geride bırakıp bütün derdi hüznü\nKırpma gözünü\n\nAğlayacağım yaz gülünce kış olsun diyeceğim\nBunları hatırla\nÖmrüne nakış nakış olsun tarihleri\nBen unutuyorum.",
    "category": "ask"
  },
  {
    "id": 230,
    "title": "Ben sana iyi geceler dileyeyim",
    "body": "Ben sana iyi geceler dileyeyim\nSen bana iyi heceler\nGecen güzel geçsin ki\nŞiirlerim renk bulsun",
    "category": "ask"
  },
  {
    "id": 231,
    "title": "Her an susabilirim sorularına gözlerime bakarken sen Kaderini baştan…",
    "body": "Her an susabilirim sorularına gözlerime bakarken sen Kaderini baştan yazarım bakışlarımla\nİkinci bir güyayım ben anca hatıralarımla \nBiliyorum ilk kelimemde kalbini kırarım\nVe o yüzden güzel sana susmak kalp atışlarımla\nSesizliğim bu yüzden",
    "category": "ask"
  },
  {
    "id": 232,
    "title": "Öyle birden yapayalnız kalsak vicdanınla",
    "body": "Öyle birden yapayalnız kalsak vicdanınla\nBir selamın ardından konuşabilsem iki kelam bizi\nO selamın hatrına bir iki şey sorsam ona\nAnlamak için hızı , dinlemek için sızı\n\nEl miyiz yoksa\nYar gibimiyim \nFerah bir yudum su gibimiyim göğsünde yoksa\nTerli sırtına esen bir yelmiyim?\n\n2",
    "category": "ask"
  },
  {
    "id": 233,
    "title": "Yeniden yazmak gibi bir şarkıyı",
    "body": "Yeniden yazmak gibi bir şarkıyı\nSondaki bir heceyi silip atmak ne kadar çok şey değiştiriyor\nSanki ondaki bir şey bana yeniden hatırlatıyor Tanrıyı\nİçimdeki kötü huylu ne varsa dans ediyor\nBunu görmezden gelmeye çalışıyorum\nKelime kifayetsiz kalıyor\nKendime kendine yine dert arıyor\nBulamıyor-sun.",
    "category": "ask"
  },
  {
    "id": 234,
    "title": "Senden vazgeçmemi sen istedin",
    "body": "Senden vazgeçmemi sen istedin\nYani artık bütün şarkılar senin.",
    "category": "ask"
  },
  {
    "id": 235,
    "title": "Bir dilek tut yalnız kaldıysan",
    "body": "Bir dilek tut yalnız kaldıysan\nKalabalıklar içinden tek bir \"değer\" iste eğer nefesini tutmadan son bir soluk aldıysan\nOlasılıklardan en güzeli böyle seni bulabilir işte ve sanki Tanrı o an sadece bunu dinliyor hissedersin...\n\nDüşüncelerini yaslayabilirsin omzuna\nBu seni çok mutlu edecek, dinle eğer heveslerini yormadan onsuz bir gün bile geçirmeyeceksen...\n\nBelki hakikaten Tanrı o an sadece bunları bekliyordur sizden\nBelki bu hikayenin baş kahramanları mutlu bir sonda dans edebilsin diye ,\nO an bir şarkı iner üstümüze gökyüzünden\n\nDüşüncelerini yaslayabilirsin omzuna\nBu seni çok mutlu edecek, dinle eğer heveslerini yormadan onsuz bir gün bile geçirmeyeceksen...\n\nDüşüncelerini yaslayabilirsin omzuna\nBu seni çok mutlu edecek, dinle eğer heveslerini yormadan onsuz bir gün bile geçirmeyeceksen...",
    "category": "ask"
  },
  {
    "id": 236,
    "title": "Gökyüzümde bir yerlerdesin şimdi",
    "body": "Gökyüzümde bir yerlerdesin şimdi\nBelki gönlümden geçenler de okuyordur yüreğin\nBelki hala seviyorsundur sonu olmayan bu filmi\nSessiz sedasız nasılda bitmişti değil mi",
    "category": "ask"
  },
  {
    "id": 237,
    "title": "Ya canın yansaydı ben sana bakarken",
    "body": "Ya canın yansaydı ben sana bakarken\nYa kalbin dursaydı\nBu gönül davasında ben suçlu sen savcı\nBu ömür mevzusunda sen gülücüksün ben sancı\n\nAğlamak istiyorum da geçiştiriyorum zamanı\nÇekmiyorum burnumu , gözlerime bir şey kaçtı\nAldım rüzgarı arkama , arkama bakmadan\nBir çocuk değilim ben , ya yarım , ya tamamı.",
    "category": "en_iyiler"
  },
  {
    "id": 238,
    "title": "Hepsiyle aynı masada yıllardır",
    "body": "Hepsiyle aynı masada yıllardır\nAynı kefede sesimi sessizce duyuruyorum\nNe okuduğunu anlayan var\nNe de deli",
    "category": "ask"
  },
  {
    "id": 239,
    "title": "Güneş batıyor bak",
    "body": "Güneş batıyor bak \nYine aklımın ücra köşelerinden kovmaya çalışıyorum seni\nKızıl bulutlar , ufuk sıcak , gözlerimle bu ana şahit olmak\nBir kaç dakika sonra başka bir diyarda var olacakmışsın gibi özlüyorum seni \nAma sıcağını kaybediyorum varlığının\nBu yeni\nSebebi bu gönül darlığımın\nDargınlığımın değil",
    "category": "ask"
  },
  {
    "id": 240,
    "title": "Sana ait olmayan bir şey söyleyeyim ruhum",
    "body": "Sana ait olmayan bir şey söyleyeyim ruhum\nGemisindesin Nuhun\nHer yağmur tanesinde ürküyor\nHer dalgada sendeliyor\nHer gözlerine baktığında aynalarda \nHer seferinde aynı takla\n\nBi kendine sor.\n\nGeliyorsun\nGidiyorsun\nÖlüyorsun.",
    "category": "ask"
  },
  {
    "id": 241,
    "title": "Karanlıkta yürüyebilmek köşelere çarpmadan",
    "body": "Karanlıkta yürüyebilmek köşelere çarpmadan\nVe parmak uçlarında ilerleyebilmek sessizce\nBirini sevebilmek gibi bunu ona sormadan\nBunu yapabilmek delice yormadan\n\nNe kadar özlemişim bunu bilsen\nNasıl yaşamışım bu titrek heyecan olmadan",
    "category": "ask"
  },
  {
    "id": 242,
    "title": "Evet evet",
    "body": "## Evet evet \n## Bu şiir sana.\n\nBaşka da bir işe yaramazdı zaten",
    "category": "ask"
  },
  {
    "id": 243,
    "title": "Bahçeme girme sakın",
    "body": "Bahçeme girme sakın\nDikenlerim sevmez seni\nYabani otlarımdan yer bulamazsan kendine\nHer ne kadar güvensen de çiçeklerinin taç yapraklarına\nÇitlerim boyunu aşar senin\nGölgede kalırsın\nSolarsın\n\nBen seni en güzel hayallerde en güzel saksılarda seveyim belki orada sonsuza kadar yaşarsın",
    "category": "ask"
  },
  {
    "id": 244,
    "title": "Sana o kadar kırgınım ki",
    "body": "Sana o kadar kırgınım ki \nSeni ancak gönlümden affedebiliyorum , dilim sessiz\nİnan sadece şarkı dinlerken senden bahsediyor\nŞiirlerimdeki hissiz hiç.",
    "category": "ask"
  },
  {
    "id": 245,
    "title": "Sen ilk kez süzülürken gökyüzümde",
    "body": "Sen ilk kez süzülürken gökyüzümde\nKirpiklerime değdiğinde geceydi\nBiz bir hüzünlü hikayeymişiz özünde\nSessiz kalalım bi süre , seni düşüneceğim\n\nBir kaç günlük ömründe bir kaç saatlikmiş gönlün\nSanki kaçıp göçecek mişsin gibi\nSanki üzülecek mişsin gibi\nSanki kıracaklarmış kalbini , neden sözünden döndün ?\n\nUçup gideceksin kelebek kadın\nÜzecekler seni\nDokunmaya kıyamadığım kanatlarını kıracaklar belki...",
    "category": "ask"
  },
  {
    "id": 246,
    "title": "Sen kesin şarkılara aldandın...",
    "body": "Sen kesin şarkılara aldandın...\nGecenin bir yarısı derdini şakıyan bir kadının huzursuz cümlelerine kandın\nHiç sevmemişti diyordu değil mi ?\nYoksa nergisler de mi yalandı ?",
    "category": "ask"
  },
  {
    "id": 247,
    "title": "Seni de özlüyor merak etme",
    "body": "Seni de özlüyor merak etme\nKalbim bunca işin gücün arasında \nBunca kalabalığın içinde\nBöylesi bir yalnızlıkta seni de düşünüyor\n\nEn acısı da ne biliyor musun ?\nNe canımı kanatan ?\n\nSen de mutsuzsun.",
    "category": "ask"
  },
  {
    "id": 248,
    "title": "Birden gelir dokunur çenene eli hafifmi hafif bir sevgili",
    "body": "Birden gelir dokunur çenene eli hafifmi hafif bir sevgili\nBir sen susarsın o el konuşur seni seninle yaşar gibi\n\nGözlerin kapanır nefesin durur aklın başlar şarkı söylemeye\nİçinden gelen bi ses sana dokunur der o hiç bırakmasın seni\n\nYaşamak ne güzel yaşamak seninle kalan ömür bile artık bizim\nYaşasın hayat yaşasın neşe yaşasın herşey bunlar ikimizin\n\nÇok alışacağım sana söz kendime söz herşeyinde üzerine\nKalan her şey bizim için eli hafif mi hafif canım sevgilim",
    "category": "ask"
  },
  {
    "id": 249,
    "title": "Varlığın yokluğundan daha acı",
    "body": "Varlığın yokluğundan daha acı\nVe bitiyor bazen kelimeler\nPiano çello ve ney ruhumun ilacı\nSonu bitmesin istiyorum o zaman o delirmelerin\nEninde sonunda alıyorum virajı",
    "category": "ask"
  },
  {
    "id": 250,
    "title": "Olur olur",
    "body": "Olur olur\nSen dokunursan goncama açar gülüm\nSen okursan hayatımı\nSen istersen hayatımı\nSenin olur\nSensiz olmaz\n\nYollar gidelim seninle \nMüzikleri sen seç\nBulutları sen benzet kaplumbağalara\nDikenlerim dökülür mutluluktan\nSen örersen ağlarımı\nSen istersen hayatımı \nSenin olurum\nSensiz olmam",
    "category": "ask"
  },
  {
    "id": 251,
    "title": "O mavi gölün kıyısındaki kırmızı boyalı ahşap eve imrenmiştik aynı…",
    "body": "O mavi gölün kıyısındaki kırmızı boyalı ahşap eve imrenmiştik aynı anda\nAz sonra bembeyaz bulutlarda şekiller belirmişti gökyüzüne de dikkatli baktığımızda\nO gün çocuğumuza yazdığım şarkıyı ezberletmiştim sana\nHayat ne kadar da renklenmişti\nBaksana nelere göz kırpmışız o an\n\nGelde bir bak şimdi bana\n\nO ev yanmış\nYağmur yağmış\nŞarkı bitmiş simsiyah",
    "category": "ask"
  },
  {
    "id": 252,
    "title": "Ben bugün bir günah işledim gözlerine bakarken",
    "body": "Ben bugün bir günah işledim gözlerine bakarken\nGözlerinden gönlüne akarken bir suça karıştım\nHer bir göz kırpışımda kirpiklerini yakarken\nBir an öncesiyle tanışmak için kendimle yarıştım\nVe buna alıştım.",
    "category": "ask"
  },
  {
    "id": 253,
    "title": "Sana söylemek istediğim o kadar çok şey var ki",
    "body": "Sana söylemek istediğim o kadar çok şey var ki\nSanki okyanusları denedim defalarca\nSanki gökyüzünü istedim avuçlarımdan\nSanki her bir yaprak aynı anda sallandı bir rüzgarda\nSanki içime doğru bir gözyaşı süzüldü , yutkundum\nSanki kainatta bir tek sen varmışsın aslında\n\nSeni öyle sevmek istiyorum ki bundan sonra\nSanki denizlerle boğuşmak\nSanki bulutlardan yağmuru anmak\nSanki ağaçlardan meyveler toplamak\nSanki hüngür hüngür ağlamak mutluluktan\nSanki nefesimi alan benmişim veren senmişsin gibi adeta",
    "category": "en_iyiler"
  },
  {
    "id": 254,
    "title": "Bir dilek daha diliyorum",
    "body": "Bir dilek daha diliyorum\nGit.\nGit ki gökyüzüyle yapayalnız kalabilelim.\nHayal dediğin düşüncelerim\nBana inanmadığın her bir kelime\nBeni , benim seni sevdiğim gibi sevmeyecek kimse\nOlsun.\nBen yine rüyalarda seni hecelerim\nÇünkü en güzelleri geceleri.",
    "category": "ask"
  },
  {
    "id": 255,
    "title": "Birbirimizi düşünüyoruz aynı zamanda farklı zamanlarda",
    "body": "Birbirimizi düşünüyoruz aynı zamanda farklı zamanlarda\nBen pişmanım sen kızgın\nBen varım sen yoksun\nGönlün bana gerçekten bu kadar mı argın ?\n\nBirbirimizi özlüyoruz bazen,  her zaman \nBen ölmüşüm sen ağır yaralı\nBen yokum sen varsın\nYokluğuma da alışmışsın , gönlün gerçekten bu kadar mı dargın ?\n\nBirbirimizi özlüyoruz bazen,  her zaman \nBen ölmüşüm sen ağır yaralı\nBen yokum sen varsın\nYokluğuma da alışmışsın , gönlün gerçekten bu kadar mı dargın ?\n\nBirbirimize dönmeyeceğiz belki hiçbir zaman \nSen orda ben burda\nYakın ve uzak ve uzak ve yakının farkında\nYanında sensizim\nSensizliğine de mecbur kaldım , gönlün gerçekten bu kadar mı yorgun ?\n\nAlamaz mı beni yeniden içeri ?\n\nBirbirimizi düşünüyoruz aynı zamanda farklı zamanlarda\nBen pişmanım sen kızgın\nBen varım sen yoksun\nGönlün bana gerçekten bu kadar mı argın ?\n\nBirbirimizi özlüyoruz bazen,  her zaman \nBen ölmüşüm sen ağır yaralı\nBen yokum sen varsın\nYokluğuma da alışmışsın , gönlün gerçekten bu kadar mı dargın ?\n\nBirbirimizi özlüyoruz bazen,  her zaman \nBen ölmüşüm sen ağır yaralı\nBen yokum sen varsın\nYokluğuma da alışmışsın , gönlün gerçekten bu kadar mı dargın ?\n\nBirbirimize dönmeyeceğiz belki hiçbir zaman \nSen orda ben burda\nYakın ve uzak ve uzak ve yakının farkında\nYanında sensizim\nSensizliğine de mecbur kaldım , gönlün gerçekten bu kadar mı yorgun ?\n\nAlamaz mı beni yeniden içeri ?\nAlamaz mı beni yeniden içeri ?\nAlamaz mı beni yeniden içeri ?\nAlamaz mı beni yeniden içeri ?",
    "category": "ask"
  },
  {
    "id": 256,
    "title": "Sana anlatabilmek için dışımdan geçenleri",
    "body": "Sana anlatabilmek için dışımdan geçenleri\nGözlerine bakıp ruhunun içinde uzun bir yolculuğa çıkmam lazım\nGönlünün tuvaline vurabilmek için fırçamı\nBembeyazına hazım\n\nSana gelebilmek için yolumdan çılgınlar gibi çıkıp\nBir oraya bir buraya sağ ve sol da dahil her yere sapıp\nGörebilmen için kalbimi ellerine alıp\nGökyüzünde aynı bulutun içinde uçmamız lazım\nKanatsız.",
    "category": "ask"
  },
  {
    "id": 257,
    "title": "Yıllardır aynı yerde aynı saatte seni bekliyorum",
    "body": "Yıllardır aynı yerde aynı saatte seni bekliyorum\nKutsalım oldun artık\nYazdığım her bir şiir kalıyor kursağımda\nKaderimin bana yazdığı metni ezberliyorum\nYarın yakın\nKaldığım darmadağın o tutsağım da\nAzat etmeni temenni ediyorum beni de\nGelde aklıma bunu anlat\nAma şunu unutma sakın\nYeniden başlamak çok zor \nÜzerine titre ; soğuğun üzerinden atlat",
    "category": "ask"
  },
  {
    "id": 258,
    "title": "Bir uzun zaman zaman",
    "body": "Bir uzun zaman zaman\nMilyarlarca kelimeyi nasıl güzel sığdırabilirdik ?\nGözlerime baktığın yetmezmiş gibi\nBirlikte de ağlayabilirdik.",
    "category": "ask"
  },
  {
    "id": 259,
    "title": "Seni özlemekle meşgulüm şu ne kadar sürecek bilmediğim ömrümde",
    "body": "Seni özlemekle meşgulüm şu ne kadar sürecek bilmediğim ömrümde\nBir kaç an dışında her halimde sen\nHer sevincimde , her üzüntümde her hevesimde her dur dediğimde kendime\nOrdasın işte\nUzaktasın belki tenime ama aynı zamanda aklımın en ücra köşelerindesin\nDudaklarımın üzerinde ve nefesimde\n\nSeni geçen her an daha çok özlüyorum sevgilim\nBütün hayatımda sen\nHer güldüğümde her hüznümde her seferinde gel dediğimde kendime\nBurdasın işte\nKalbimin attığı yerin yanında ve aynı zamanda ruhumda bir nabız gibisin tabiri caizse\nGözlerimin içinde ben seni özlüyorum.\nHer seferinde.",
    "category": "ask"
  },
  {
    "id": 260,
    "title": "Ne kadar kolay değil mi ayrılığı seçmek",
    "body": "Ne kadar kolay değil mi ayrılığı seçmek",
    "category": "ask"
  },
  {
    "id": 261,
    "title": "Bu bir şiir değil",
    "body": "Bu bir şiir değil\nBu , sana aşkımı anlatmamın çabası\nBu , seni ne kadar çok sevdiğimi sana bir yol bulup ifade edebilme telaşı\nÖyle farklı , öyle güzel , öyle özel ki\nRuhumun toprağına Rabbim seni ekmiş ve sende filizlerini göstermişsin gibi\nMutluluk gözyaşlarım var\nDudaklarımının kenarlarındaki tutamadığım kasılmalar da cabası\nBilerek , isteyerek , farkında ve aklı başında seviyorum seni\nBir beklentim yok hatta \nBeni sevmesen bile olur.\nSenden bir dileğim de yok.\nBelki bir şey geçiyorsa içimden\nSeni gönlüme düşüren Rabbim zamanı geldiğinde seni cennetine alsın.\nBu dünyada da sana cenneti yaşatsın.\nZorluk görmeyesin , Saçların dökülmesin.\nRuhun incinmesin.\nGönlündeki merhamet devam etsin.\nBüyümeye devam et\nBen elimde su seni büyütmeye hazırım.\nAdın da bundan böyle\nAşk olsun ve Bırakalım bu sefer bu akıntı bizi okyanuslara kavuştursun. 🌸🕊️",
    "category": "ask"
  },
  {
    "id": 262,
    "title": "Aşk mı ?",
    "body": "Aşk mı ?\nAman ben almayayım \nBir kadına gönlümü vermek için çıldırmış olmalıyım.",
    "category": "ask"
  },
  {
    "id": 263,
    "title": "Hala aynı yalan aynı oyunlar aynı hile",
    "body": "Hala aynı yalan aynı oyunlar aynı hile\nFarkındayım biliyorsun ama inanamıyorsun bile\nZaman sana dakikalarla mı geçiyor yoksa saniyelerle mi\nSaatlerde aylar yıllar mı mesele\nBende bir an yok ki artık başka bir şey düşünebileyim\nDevam et 2 ama sadede gel , kısa kes ve yeter !\n\n Şarkılardayım , şiirlerim üzgün boynu bükük dargın\nKanatlarım yola çıkabilecek kadar sağlam\nKaslarım bitiremeyecek kadar mı yorgun\nBilemiyorum hangisini gönlümde taşıdığımı\nŞimdilik sadece olgun\nBiraz da göz altlarım solgun",
    "category": "ask"
  },
  {
    "id": 264,
    "title": "Sana beni sana hatırlatsın diye bir hediye vereceğim olsa",
    "body": "Sana beni sana hatırlatsın diye bir hediye vereceğim olsa\nBana nedir diye sorsan\nHakkımdaki her şey, geleceğim\nBir gün sana geri döneceğim\nYarım kalmış umutlarla\nHala seni seveceğim.\nAç paketi.",
    "category": "ask"
  },
  {
    "id": 265,
    "title": "O her mevsim çiçek açan narin bir kardelen",
    "body": "O her mevsim çiçek açan narin bir kardelen\nO gözlerinden cenneti okuyabileceğin bir melek\nO dokunmaya kıyamadığımız en kıymetlimiz\nO artık sana emanet",
    "category": "ask"
  },
  {
    "id": 266,
    "title": "Seni özlemenin artık acı verdiği bir yerdeyim",
    "body": "Seni özlemenin artık acı verdiği bir yerdeyim\nYanı başında\nSanki yüzüme söylesen aklından geçenleri\nAklım başıma geri dönecek\nÇıldırmak üzereyim\nBana son sarılman ne güzeldi",
    "category": "ask"
  },
  {
    "id": 267,
    "title": "Uzak düştü yakın iki kalp",
    "body": "Uzak düştü yakın iki kalp\nSarp kayalıklara çarptı dalgaları , kırıldılar\nSen gel yalanı olmasında diye elinden geleni yap\nSonra zapt olasılıklara kalsın kaygılar\nSaygılar...",
    "category": "ask"
  },
  {
    "id": 268,
    "title": "Bilsem ki dinleyeceksin anlatırdım herşeyi",
    "body": "Bilsem ki dinleyeceksin anlatırdım herşeyi\nBeni yapayalnız bırakacaksan\nGörmek istemeyeceksin gerçeği\n\nDokunmayacaksan içimdeki asırların sessizliğine\nOkumayacaksın bana derdimi satırlarımdan\nYarımın çeyreğini\nOnca emeği ve gereği\nDinlemeyeceksin beni\n\nBilsem ki dinleyeceksin herşeyi\nTamam, tutuyorum bu dileği\nBiraz zaman geçince alırım seni biraz içeri\nBir yerinden başlarız",
    "category": "ask"
  },
  {
    "id": 269,
    "title": "Senden bir haber yaşıyorum",
    "body": "Senden bir haber yaşıyorum\nYok mu bir haber ?\nDaha lavanta bahçelerinde koşturuşunu izleyeceğimiz bir evladımız\nHer sabah istisnasız milatlarımız var bizi bekleyen",
    "category": "ask"
  },
  {
    "id": 270,
    "title": "Cuma sabahı uyanıp dinlediğim ilk şarkı gibiydin sen",
    "body": "Cuma sabahı uyanıp dinlediğim ilk şarkı gibiydin sen\nO kadar hoşgelmiştin günaydınıma\nYüzümde esen\nYalnızlığıma\n\nBüyük bir haberin habercisiymiş pazartesi\nÖylesine boşvermişim hayatıma\nÖylesine boş geçmişin\nEnsesinde gezen\nYapayalnızlığına\n\n2",
    "category": "ask"
  },
  {
    "id": 271,
    "title": "Seninle sonbaharın yağmurlu bir akşamında buluşmayı dilemeliydim",
    "body": "Seninle sonbaharın yağmurlu bir akşamında buluşmayı dilemeliydim\nBen sana şiirlerimi okumalı sende elinde bir kadeh su beni pür dikkat dinlemeliydin\nHayatı değerlendirmeliydik\nSessizliğimizi değil",
    "category": "ask"
  },
  {
    "id": 272,
    "title": "Senden vazgeçmek mi ?",
    "body": "Senden vazgeçmek mi ?\nSen kendini ne zannediyorsun ?\nGecenin bir yarısı bulutların arkasına saklanmış dolunaysın sen\nDaha sıcaksın Güneşten",
    "category": "ask"
  },
  {
    "id": 273,
    "title": "Sana her akşam güzel konuşabilirim güzel çiçek",
    "body": "Sana her akşam güzel konuşabilirim güzel çiçek\n\nBen bana emanet her çiçeğe çok güzel davrandığım gibi sana da her gün batımında en güzel şarkılardan çalıp söylerim\n\nHer sabah bir çay bardağı su ile günaydın derim. Yaprakların çok sevinir.\n\nAma küsmüştüm de buna,\nAşk artık uzaklarda bir dahil kasabasında yazılması gereken bir şiirdi aslına bakarsan\nBen , sahip olduğum hayat sevgisini seninle paylaşabilirim ;\nKalbim kalbine denkse , ve bu sırrı bir ömür boyu saklarsan",
    "category": "ask"
  },
  {
    "id": 274,
    "title": "Seni görebilmek için iki gözümü de kapatmam gerekiyorken",
    "body": "` `\n`\n`\n`\n`\n`\n`\n`Seni görebilmek için iki gözümü de kapatmam gerekiyorken`\n`\n`\n`O kadar yakınsın ki orda burdan bu kadar uzakken`\n`\n`\n`Deliriyorum ayarlarımla oynuyorken farkında değilsin `\n`\n`\n`Hayallerimdesin yokken`\n`\n`\n`\n`\n`\n`\n`Orda kal sonken.`",
    "category": "ask"
  },
  {
    "id": 275,
    "title": "Bir savaş ki en öndeki safta tam ortada",
    "body": "Bir savaş ki en öndeki safta tam ortada\nBir savaş ki en arkada son cemaat\nÖyle bir savaş ki bu içimde verdiğim\nÖyle bir savaş ki diyor içim yer yer değişsin",
    "category": "ask"
  },
  {
    "id": 276,
    "title": "Yüzlerce irili ufaklı ip tutuyorum elimde",
    "body": "Yüzlerce irili ufaklı ip tutuyorum elimde\nHer biri en az 2 santim eninde",
    "category": "ask"
  },
  {
    "id": 277,
    "title": "Ben dalgalı bir denizim",
    "body": "Ben dalgalı bir denizim\nSense uçurumlarsın adeta bir tek bana kıyısı olan\nİkimiz de durup düşünmeliyiz bir an için\nBirisi gelip senden bana atlamadan.",
    "category": "ask"
  },
  {
    "id": 278,
    "title": "Oysa ki tam reddetmiştim bu şehrin ışıklarını",
    "body": "Oysa ki tam reddetmiştim bu şehrin ışıklarını\nVar ya ne kadar yaklaşmıştım sona\nSen geldin\nVerdiği sözleri tutabilecek gibi\nŞarkılar söyleyecektim düşerken sana\nSığdırır gibi bir ömrü bir ana\nBakıp gözlerine isteyecektim senden seni\n\nHerkes gibi benimde var bir rengim\nHikayemsi , yarımyamalak\nKatılaşmış yanak ağrıtan sahte bir gülümsemenin gönülden gülümseyesi var ağlayarak\nHüzünleri biten sevinçlerin üzülleri sebepsiz \nŞiirler okuyacağım hayatım boyunca üşüyen aklımdan sana anlatan beni\nGeleceksen sessizce söndüğünde civar şehirlerin de ışıkları ,\nBakıp gözlerime son güneş gibi bana batıdan doğ.\nTamamla yarımı",
    "category": "ask"
  },
  {
    "id": 279,
    "title": "İnkar etmeyelim",
    "body": "İnkar etmeyelim\nSen siyahsın ben gri\nSen yarım akıllı ben deli\nSen yana ben geri\nSen 1.5 ben 2\nSen püskü ben yeni\nBu dünya hepimize yetermiş belli\nOlmak gerekmiş hep senli benli\nKimler kimlere boyun eğmiş bu denli\nHerkes aciz herkes kelli felli\nHerkes mutlu herkes adil\nHerkesin gözü yükseklerle muadil\nAnlattıklarımı anlamıyorsun sanki yabancı dil\nGöremiyorum sonumu hanginiz fail\nHepinize sesleniyorum evet sen de dahil\nTüm okulları kapatın kalsın herkes cahil\nBırakalım sonumuzu belirlesin kahin\nBırakalım ölülerimizi kıyılara vursun sahil\nBırakalım mümkünü olmasın artık tamiri\nYanılmadan keşfedelim zamiri\nBen terketmezdim de yarimi\nAnlamadı halimi\nSevdi zalimi\nAldı kalbimi\nVerdi derdini\nKaybettim derbimi\nYoksaydım kendimi",
    "category": "ask"
  },
  {
    "id": 280,
    "title": "Sen kendini yalnız hissedersin",
    "body": "Sen kendini yalnız hissedersin\nİşte bu yüzden baştan gelmem",
    "category": "ask"
  },
  {
    "id": 281,
    "title": "Seni özlüyorum.",
    "body": "Seni özlüyorum.\nSeni bir sevgili bir kadın bir insan bir şey olarak değil\nSadece özlüyorum.\n\nGüneşin batışını izlerken özlüyorum\nDalgaların sesinde özlüyorum\nÖzlediğimi söylüyor şarkılar\nRuhum ağladı ağlayacak\nAma bir bebek gibi bir çocuk gibi değik\nRuhunu özlüyorum\n\nVe ben seni o kadar özlüyorum ki\nHiçkimseyi bu kadar özlememiştim biliyorum",
    "category": "ask"
  },
  {
    "id": 282,
    "title": "Eylül kadar çiçek bekleten bir ay daha yoktur ki ağlatmasın gözlerini",
    "body": "Eylül kadar çiçek bekleten bir ay daha yoktur ki ağlatmasın gözlerini\nYeni bir mevsim kucaklarken seni \nBir bakmışsın , aşık olmuşsun.\nYeniden bakmışsın geri",
    "category": "ask"
  },
  {
    "id": 283,
    "title": "Hayal ettimse seni",
    "body": "Hayal ettimse seni\nGerçek olabilecek kadar yakınsın gönlüme\nBir rüyadan kaçıp gelip gerçek ol\nSığ bütün ömrüme\nSon günüme yakış\nİnandığında gördüğüne\nGördüğünde gerçeğimizi\nBir an için dur ve hayal et sende beni\nBir masal kadar zahiriyim özümde\nO rüyadan kaçıp gelip\nSığacağım bütün ömrüne\nSon gününe yakışacağım.",
    "category": "ask"
  },
  {
    "id": 284,
    "title": "Seni sevmek bir nehri dizginlemeye çalışmak gibiydi işte",
    "body": "Seni sevmek bir nehri dizginlemeye çalışmak gibiydi işte\nEn yüksek tepelere hazırlıksız tırmanmaktı\nEn derinlere dalmaktı\nEn tehlikeli maceralara gözü kapalı atılmaktı\n\nSeni sevmek bir uçurumun kenarında eğilip aşağı bakmaktı\n\nBir yandan da bir çiçeğe cansuyu vermekti\nBüyükannemin evde yaptığı sıcak ekmekti\nEmekti\n\nSöyle bana , değer verdiğimiz şey neydi ?\nBu anlatamadığım boşluk nasıldı ve ne demekti ?",
    "category": "ask"
  },
  {
    "id": 285,
    "title": "Aklına geliyor muyum ?",
    "body": "Aklına geliyor muyum ?\nOlur olmaz çalan bir şarkımız yok mesela\nEn çok buna üzülüyorum",
    "category": "ask"
  },
  {
    "id": 286,
    "title": "Aşklar şehirler olur uzaklarda",
    "body": "Aşklar şehirler olur uzaklarda\nYapayalnızlığım İstanbulda\nTam göbeğinden şiirler yazarım kalbim ağır\nAğır gelir yaşanmışlıklar , cümlelerimle bağırırım.\n\nTek kelime etmeden.\n\nBir kibrit çakar o ağıdı yakarım\nAlır başını gider alevler gökyüzüne üzerinde kelimeler\nAnlayışsızlığa ağlarım\nGün ağarmaz diye bekler diye ateşin kırmızısını\nSönmez mi dedin diye söner \nSiler belki alnımın yazısını\nGazaptan korkarım\n\nTek kelime etmeden.\n\nBelki o zaman aşklar ülkeler olur yanı başımda\nKalabalık bir İstanbulun ortasında\nŞiirlerden vazgeçerim , bu sefer aklım basar ağır\nAğrır aklım , yüreğime sorar sebebini \nTek kelime etmeden.\n\nYüreğim garip , sağırdır anlamaz nedenini\nBoynunun borcudur , anlatamaz derdini\nYakar kendini yinede bahsedemez harbini\nKelimeleri yutar , kendini tutar \nNefretini susar , sadede getiremez bir türlü mevzu bahsi\n\nTek kelime etmeden susar.",
    "category": "ask"
  },
  {
    "id": 287,
    "title": "Seni seviyor mu ?",
    "body": "Seni seviyor mu ?\nİlk önce bunu sor kendine\nSana da aynı şeyler oluyor mu ?\nDerdini ekleyebiliyor musun derdine ?",
    "category": "ask"
  },
  {
    "id": 288,
    "title": "Heyecanlanmıştım gerçekten",
    "body": "Heyecanlanmıştım gerçekten\nYa bu seferki sonsuza kadar sürerse ?\nBelki katlanırsın üzerse..",
    "category": "ask"
  },
  {
    "id": 289,
    "title": "Nasıl oluyor da böylesine aydınlık olabiliyor bu zifiri karanlık",
    "body": "Nasıl oluyor da böylesine aydınlık olabiliyor bu zifiri karanlık\nNasıl her düşümün sonu aynı yere varıyor\nBütün yollar sona çıkıyor\nKalbim üşüyor",
    "category": "ask"
  },
  {
    "id": 290,
    "title": "Birden sarılıversen karşıma çıkıp",
    "body": "Birden sarılıversen karşıma çıkıp\nNedeni olmadan seviversen yine beni\nEn sevimli tavrını takınıp gösteriversen bana Eskinin üstesinden gelmediğini yeninin\n\nBirden bağırıversen ağlayıp\nSon bir kez geçmişi hatırlasak ve bıraksak deminde\nAynı yolcusuyuz biz bu geminin seyrinin\nYeminle",
    "category": "ask"
  },
  {
    "id": 291,
    "title": "Özlüyorum doğru",
    "body": "Özlüyorum doğru\nSen de merak ediyorsundur görüşmeyeli hayatımda neler neler olduğunu\n\nHala seviyorum belki bazen seni\nAma çoktan unuttum bile beni unuttuğunu\nKoymuyor artık yalnızlık\n\nGüldün sen\nGül'dün sen\nGüldün dün sen\nBugün ağla",
    "category": "ask"
  },
  {
    "id": 292,
    "title": "Kalbim böyle büyük bir aşkı nasıl alabildi ?",
    "body": "Kalbim böyle büyük bir aşkı nasıl alabildi ?\nEzberleri bozuldu dengelerimin\nAklım böyle özel bir aşkı iyi ki anlayabildi ki\nBir hikayeye merhaba dedik daha henüz demin\nÖmrüm nasıl böyle güzelleşebildi birden\nKaybettiğim herşey sanki geldi geri\nDaha az önce yoktu şimdi var kaybettiklerim.\n\nSen ömrüm sen , ne kadar özelsin bi bilsen\nSığabilirmisin her saniyeme sana adasam hikayemi\nGeçmiştekileri , şimdiyi , geleceği , sonrasını\nSana olan aşkımı anlatacak kelimeleri keşke bulabilsem\nSözlükleri , kitapları , en çok satan aşkları\nBaharları , bulutları , kayalara vuran dalgaları\nNefesi , hayatı , hayatın bilinen anlamlarını aradım tek tek\nEşi benzeri yok aşkının , eşin benzerin yok çünkü \nTek kelimen eritiyor ya gönlümdeki dağları\nO kadar sev ki beni\nYarışalım .",
    "category": "ask"
  },
  {
    "id": 293,
    "title": "Seni bir daha kimse benim seni sevdiğim gibi sevemez",
    "body": "`\n`\n`\n`\n`Seni bir daha kimse benim seni sevdiğim gibi sevemez`\n`\n`\n`Kalbim hala sende kaldığı için bunu sana yasaklıyorum`\n`\n`\n`Anlıyor musun ?`",
    "category": "ask"
  },
  {
    "id": 294,
    "title": "Onun kısık gözlerinde sonsuzluğu görmek mümkündü",
    "body": "Onun kısık gözlerinde sonsuzluğu görmek mümkündü\nBelki de gördüğüm geri kalan ömrümdü\nBu iki kişilik bir düğündü ve\nKalbimin beynimle el sıkıştığı bir gündü bugün\n\nGarip , kendimle barıştırdı kelimeler saatlerce\nKoş dedi, uzaklaş artık arkanı yasladığın ağaçlardan harfler\nUç dedi bir kuş, bir daha, tıpatıp benim gibi\nBuldun onu işte bulutlarda\nO da senin gibi\nSaklanıyormuş umutlarda",
    "category": "ask"
  },
  {
    "id": 295,
    "title": "Bir gün sen ve ben cennette karşılaşırsak eğer",
    "body": "Bir gün sen ve ben cennette karşılaşırsak eğer\nBana hakkını helal etmiş olduğun gerçeğiyle\nSana hatırlayabildiğimiz en eski anımız ile\nSımsıkı sarılacağım\n\nÖyle ki sonsuza kadar vaktimiz var\nVe bu yer düşündüğünden de geniş",
    "category": "ask"
  },
  {
    "id": 296,
    "title": "Gözlerimi görüyor mu gözlerin",
    "body": "Gözlerimi görüyor mu gözlerin\nCesaretin var mı aşka\nSeni her kırpışında özlerim",
    "category": "ask"
  },
  {
    "id": 297,
    "title": "Bana seni soran kimseye cevap veremiyorum",
    "body": "Bana seni soran kimseye cevap veremiyorum\nAnlamazlar\nAlışkanlıkla aşk karışınca başa bela olunuyormuş\nAnlamazlar\nSonradan sevince daha çok seviyormuşsun diğerinden\nAnlamazlar\nÖzlüyorum da değil özlemiyorum da değil\nAnlamazlar\nAnlamazlar işte\nYanlış seviyormuşum seni\nAnlıyor musun ?",
    "category": "ask"
  },
  {
    "id": 298,
    "title": "Şimdi biraz da sen bensizliğe alış",
    "body": "Şimdi biraz da sen bensizliğe alış\nBeni görmeden özle\nBana sarılmadan kavuş\nHayatıma sığama\nTüm bunları tek seferde yapmaya çalış",
    "category": "ask"
  },
  {
    "id": 299,
    "title": "Aslında sende istiyorsun da gitmeyi",
    "body": "Aslında sende istiyorsun da gitmeyi\nKalakaldık birbirimize\nGöze alabilirdik te özlemeyi\nDert eklemedik derdimize",
    "category": "ask"
  },
  {
    "id": 300,
    "title": "Gözlerimi kaçırıyorum senden",
    "body": "Gözlerimi kaçırıyorum senden\nHer bakışı anlardım da senin ki çok zor be kardeşim\nÖfken mi derin\nNeresin benim yerin ?\n\nYanağın mı dizlerin mi ?",
    "category": "ask"
  },
  {
    "id": 301,
    "title": "Kaderin bana oynadığı en hilesiz oyunsun sen",
    "body": "Kaderin bana oynadığı en hilesiz oyunsun sen\nAsla inkar edemem , ayıp olur\nCilvesinin kendini en bariz gösterdiği huyuysun\nVallahi ihmal edemem , yazık olur\n\nZamanın bana gösterdiği en geniş zamansın sen\nHatta ihtimaller uykularımda bile hazırlıyorlar durumu\nHayatın bana verdiği en güzel armağansın sen\nKeşke sana seni verebilsem\nHakikaten yapabilsem bunu ne güzel olur\n\nGülümserdin\n\n2",
    "category": "ask"
  },
  {
    "id": 302,
    "title": "Neden mi olmasın ?",
    "body": "Neden mi olmasın ?\n\nÇünkü ben nerde değilsem sen ordasın.\n\nNeden mi olmasın ?\n\nÇünkü doğru soruları sormalısın.\n\nNeden mi olmasın ?\n\nÇünkü aşk dediğin şey için bazen bir adım geri atmalısın.\n\nNeden mi olmasın ?\n\nÇünkü gerektiği zaman yok olmalısın.",
    "category": "ask"
  },
  {
    "id": 303,
    "title": "Sana benziyor hayalimdeki kadın",
    "body": "Sana benziyor hayalimdeki kadın\nApaçık ortada nefreti ve sevgisi\nRızam olmadan delirtecek gibi herkesi\nEllerini birleştirmiş ortasında merkezin\n\nNasıl bilmem , nerede bilmem , ne için bilmem\nUğur getir bana emin olduğun bir yerden\nRica etmeden önce ben , hemen !\n\nÇabul ol , yanıyorum doğmayacağım küllerimden\nOrmanlar kadar büyüdüm ve bu sefer sönmeyeceğim ben\nBarıştır beni rüzgar hatrına gökyüzüyle\nAlışamıyorum sen oradayken kimsesizliğine\n\nNasıl bilmem , nerede bilmem , niçin bilmem\nNe yap ne et al beni gönlüne , yanı derin sessizliğinsen",
    "category": "ask"
  },
  {
    "id": 304,
    "title": "Gözlerinin içine bakıp arıyordum kendimi",
    "body": "Gözlerinin içine bakıp arıyordum kendimi\nGülüyordum ordan bana , ama yoksa , sende mi ?\nİlk defa oluyor böyle bir şey",
    "category": "ask"
  },
  {
    "id": 305,
    "title": "İçinde İstanbul geçen şarkılar nasıl hissettiriyorsa öylesin",
    "body": "İçinde İstanbul geçen şarkılar nasıl hissettiriyorsa öylesin",
    "category": "ask"
  },
  {
    "id": 306,
    "title": "Gözlerinin gözlerime değdiği bir an vardı hatırlar mısın bilmem",
    "body": "Gözlerinin gözlerime değdiği bir an vardı hatırlar mısın bilmem\nBir kaç saniye dayanabilmişti şiddetine aşkının bakabilmem\nElim ayağım dolaşmıştı , biliyordum , geliyordu\nKalbim o heyecanın ritmine ancak dayanabiliyordu\n\nSonra yüzyıllar sürecek bir film başladı başrollerinde başka adamlar ve kadınlar olan\nSana dokunamadan bir ömür mü geçecek öylesine solan ?\nSanki bir rüyadan uyanıyoruz benim seni daha çok sevdiğim\nAcilen acele etmeden bir yemek yememiz gerekiyor benim sana ruh eşim olmanı teklif etmem gerektiğim",
    "category": "ask"
  },
  {
    "id": 307,
    "title": "Tanrıdan bu kadar dilek diledim",
    "body": "Tanrıdan bu kadar dilek diledim\nSeni unutmuştım o şarkıyı dinlemeyeli\nKelimeler düğüm düğümken iki avuç içim yukarda\nBir tek seni istemeyeyim\nSen bensizde mutlu kal",
    "category": "ask"
  },
  {
    "id": 308,
    "title": "Bu bir ayrılık şiiri sevgilim",
    "body": "Bu bir ayrılık şiiri sevgilim\nDün gibi geçen günler\nCanına can kat derdimin\n\nHatalardan uzun bir yol",
    "category": "ask"
  },
  {
    "id": 309,
    "title": "Yanımda değilsin , uzakta da değilsin",
    "body": "Yanımda değilsin , uzakta da değilsin\nBir şekilde şu hayatıma giren en muazzam delisin\nBırakalım da başkaları birbirini özlesin artık\nSen bana verilmiş bir hediyesin\nAçıp bakmaya kıyamam",
    "category": "ask"
  },
  {
    "id": 310,
    "title": "Konu bana gelince kapanıyor ya tüm kapılar",
    "body": "Konu bana gelince kapanıyor ya tüm kapılar\nHırkam düşüyor omuzlarımdan\nÜşüyor ruhum\n\nAklımı bir dinleseniz , vahim durum...\nDünyanın bir ucundan diğer ucuna\nBaktın olmuyor sus demiyor bana ben\nIsrarla şiirler yazıyor belki işe yarar boşu boşuna olan",
    "category": "en_iyiler"
  },
  {
    "id": 311,
    "title": "Düğümler atıyorum ben gökyüzüne her bir damla aktığında yer yüzüne…",
    "body": "Düğümler atıyorum ben gökyüzüne her bir damla aktığında yer yüzüne yer yüzünden\nAvuçlarım kanayacak güneş\nDoğma her seferinde aynı zamanda\nÜzme düğümlerimi , boğma hüzünden\n\nDüğünler bekliyorum ben gökyüzünde her bir damla yaş aktığında her sözümden\nAğaçlarım yeşerecek güneş\nSorma her seferinde aynı hesabı\nBüzme defterlerimi , doğma gözümden.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 312,
    "title": "Yenilen yeniler gittiler",
    "body": "Yenilen yeniler gittiler\nDaha dediler , dehasını istediler aklın\nDemin demir almış gemilerde unuttular ismimi\nYanağımdaki parmak izlerine benzetip bulutları\nUmutlarımı gözlerimin renklerinde sevmeyip denizlerin mavisinden medet umarak küçüldüler ufukta birlikte\nYok olup gittiler güneşin battığı uzak yerde\n\nBana ne kaldı ?\n\nDayağın tokatından utanmış\nDaha da uslanmış , büyümüş , canı acımış , korkudan aklını ıslatmış , güneşe gözlerini kısarak yüreğiyle el sallamış ve yapayalnız kalmış isimsiz bir çocuk.\n \n2",
    "category": "en_iyiler"
  },
  {
    "id": 313,
    "title": "Hayallerini kurduklarımla gerçekleşecek olanların arasındaki o ince…",
    "body": "Hayallerini kurduklarımla gerçekleşecek olanların arasındaki o ince mavi çizgi\nGökyüzümle deniz\nHevesimle kursağım arasındaki o dar geçiş\nİstanbul\nÜmitlerimi paylaştığım sözlerin özürlerini dilerken insanlardan o yalan sanılan sezgi\nAsıl senden özür dilerim\nHayatımı bir ömür boyunca böyle yaşamayı seçiş\nKendimden vazgeçerim.\nKendini bulunca yok olup hiçliğe giriş.\nSıfır.\n\nSınavlar mı vaadetti hayat bana ?\nYollar mı gösterdi geçilmiş ?\nGüneşle mi ahdetti beni ?\nBen miyim seçilmiş ?\nBir kenarda terkedilmiş\nNefsiyle zulmedilmiş\nÖğretilmiş\nBeklenilmiş\nSabredilmiş\nSöz verilmiş hiçliğe..\nGönlüne yön verilmiş.\nÖbür eklenmiş ömrüne..\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 314,
    "title": "İzi kaldı",
    "body": "İzi kaldı\nBir damla hüzün damladı gökyüzünden genzime\nÖyle bir acıttı ki gerçek\nÖyle bir saplandı ki kalbime\nİzi kaldı\nAklım hızlandı yetiştim\nFikrim sızlandı pekiştim\nDuygularım harman oldu hepsiyle teker teker seviştim\nSeçemedim hangi biri doğru \nHangi yanlış yetiştiğim\nDüşüncelerimin izi kaldı aklımda gitmiyor hep duruyor soru soruyor benimle konuşuyor takip ediyor heves veriyor\nBeni aldı , geri vermiyor\nİzi kaldı\nOlmuyor.\n\nCümlelere sığmaya çalıştım olmadı\nŞiirler yağıyorum okunmadı\nŞarkılar oluyorum dinlenmiyor\nDüşünceler birikiyor konuşmayınca\nKonuşunca da olmuyor böyle olunca\nAklım dinlenmiyor.\n\nSözler verdim tuttuğum\nDinledim defalarca unuttuğumu\nSöylediğiniz tutumumu\nKendi elimden tuttuğumu görmediniz hiç\nDeğiştiremeyecek gibi hiçbir ilaç\nEsiri oldum bikere\nBırakalamayacak aç biilaç \nBirkaç gün sessiz kalacak \nGüneş doğacak\nYine aynısı olacak\nDoğrularımın hangisi yanlış ?\nİzi kalmış.\nBana ne olacak ?",
    "category": "en_iyiler"
  },
  {
    "id": 315,
    "title": "Gözlerini kapatmak ve aklına gelen ilk anıdan başlamak artık geceye",
    "body": "Gözlerini kapatmak ve aklına gelen ilk anıdan başlamak artık geceye\nOradan oraya ! Oradan oraya savrulmak ! \nSersemlemek ipleri kaderin eline verinceye dek\nVe karanlıkla kontrolü kaybetmek...\nGünün ilk ışıkları göz kapaklarından içeriye girmeye çalışıncaya kadar her sabah ,\nSinsi bir alışkanlığı yenmeye çalışırmış gibi gözü pek ,\nRüyaların hislerle sana ne anlatmaya çalıştığını farkedersin teker teker.\nIşığa alışınca da onları azledersin.",
    "category": "en_iyiler"
  },
  {
    "id": 316,
    "title": "Her biriniz bir el birliğiyle canımı aldınız ruhumu emdiniz",
    "body": "Her biriniz bir el birliğiyle canımı aldınız ruhumu emdiniz\nİçimde kocaman bir boşluk yarattınız \nBeni yapayalnız bıraktınız\nAğlattınız\n\nTek bir sözüm var bu ana ve geleceğe\nBeni bu hale siz getirdiniz , beni sizler yarattınız",
    "category": "en_iyiler"
  },
  {
    "id": 317,
    "title": "Ölümün kollarında bir panik atak",
    "body": "Ölümün kollarında bir panik atak\nBataklıklardan bataklık beğen kendine\nRahat mı her gece bedenini serdiğin yatak\nGöz kapakların hatırlatıyor mu ne kadar yandığını derdine",
    "category": "en_iyiler"
  },
  {
    "id": 318,
    "title": "Biri bana yanlış nedir öğretsin",
    "body": "Biri bana yanlış nedir öğretsin\nBiri bana doğrularını diretmeden yapsın bunu\nBiri bana gökyüzünden iki yıldız göstersin\nBiri bana biri sana desin kaybetmeden umudunu\n\nBiri bana doğruyu tam anlatsın\nBiri bizim şansımızı arttırsın\nBiri bize bir şarkı yazdırsın olur mu ?\n\nBiri için her şeyi geride bırakıp\nHerkesi herşeyden ayırıp\nOna doğru uzaklardan gelemez miyiz olur mu ?",
    "category": "en_iyiler"
  },
  {
    "id": 319,
    "title": "Bir rüya görmek istiyorum oradaki sevgisi körelmiş ruhumun belki beni…",
    "body": "Bir rüya görmek istiyorum oradaki sevgisi körelmiş ruhumun belki beni duyan bana bunu veren benden bunu esirgemeyen şevkati hatrına\nSevdiği şarkıları vardı dostlarımın\nKelimelerin zihninine zehir karıştıran şairleri\nTüm seslerin olduğu bir orkestranın\nSon cümleyle kırılan o pranganın sesi\nHırçın bir sahil\nHıçkırıklı dalgaların manzarasında\nSessiz ve çaresiz bir vicdana sus dedi sur.\n\nBu Dünyayı gömmek istiyorum aydınlığın tam ortasına gitmeden.\nSon bir dur.\nCanı sıkışmışların\nCanı sıkılmışların\nCanı alınmışların\nCanımı al diye haykırmışların hatrına\nÖlmek istiyorum uyanmadan.\nDönmemek dahil.\nKendimi bulmak uğruna",
    "category": "en_iyiler"
  },
  {
    "id": 320,
    "title": "Konuşmaya çalıştım çoğunuzla tanıştığım",
    "body": "Konuşmaya çalıştım çoğunuzla tanıştığım\nKonuşmaya konuşmaya konuşmayı öğrenmiştim zar zor alıştığım\nDoğru yerde\nDoğru kişiyle\nDoğru zamanda\nDoğru zamanla\nBir kendim kalmış karşılaştığım\nBir de Tanrınız.\n\nDüşüncelerimi dinleyerek savaştığım hastalıktı üzerime yapıştırdığınız\nDostane düşmanlıktı ilaçlar\nYanlış bünye\nYanlış kişiye\nYanlış zamanda\nYanlış dozda\nBir ateşten gömlek üzerime yakıştırdığım\nBir de \n..o\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 321,
    "title": "Hazırım al beni bu diyarlardan",
    "body": "Hazırım al beni bu diyarlardan\nYanına kat ;\nKıyametin son 2 dakikasında bekleyelim olacakları\nSorumlu tut beni olanlardan\nZorundaydın de\nSendin de \nVazgeçmedin ama yeterince denemedin de de de de de de de de\nYeterince denedim.\nAnlattım , dinlettim , aklımın ilmini serbest kılıp kendimi senin uğrunda mahfettim.\nDoğru sandım söyledim.\nYanlış gördüm öğrettim.\nGözyaşlarıyla olanlardan nefret ettim.\nİyide;\nBen kendimi nerde kaybettim ?\n\nYerim neresi\nYolum neresi\nYazgım neresi\nSonsuz ötesi\nHalim içler acısı\nHaber yok mu soranlardan ?\nKaç kişi kaldık kalanlardan ?\nDaralan zamanlardan\nOzanlardan\nOğuzhanlardan\nGözleri farklı renkte olanlardan\n\nHaykırsam duyarsın diye susarım\nBelli susuyorsun diye haykırıyor herşey seni bana\nRüyalarımda bekliyorum seni sanırım kimse karışamaz ama\nBana bir masal anlatsana anlatan seni bana\nUyanınca kabus sarıyor , korkunç olanlardan\nHatıralar silinmiş , duygular incinmiş \nSürekli ağlayan bi oğuzhan var yarattığın Dünyada\nGüvendiğim ne varsa yakın uzak\nBen ne yaptım da gözlerim bu kadar yorgun \nKirpiklerim ıslak\nYüreğim hala nasıl ayakta anlam vermiyorum \nArgın , üzgün , dargın \nİçimdeki çocuk büyüdü , çok üzülüyorum\nBüyürken çok düştü , yaralarının izleri var yüzünde\nAynaya baktığın kendini gördüğün hüzün de de de de de de de de\nBeni kendime öyle bir çarp ki \nİrkileyim ruhumun derinliklerinde\n2 . Kez haklı çık\n\nYediremiyorum kendime\nDüşündüklerimi sen vermedin mi \nAl geri..\nAma benimle beraber , sana soracaklarımız var birader akıl ve fikrimle le le\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 322,
    "title": "Aklıma takılır aklımın derinlerindeki kendini savunma hakkım",
    "body": "Aklıma takılır aklımın derinlerindeki kendini savunma hakkım\nSonra birden gözlerime takılır gözlerim\nBakışlarımda anlattıklarıma şaşırır bakışlarım\nAlışırız sonunda kendimize\nGarip mi davranışlarım ?\nDeğilse ne öyleyse ?\n\nSığınırsam bulduğum bütün çatılara\nDerdimi dinlersin de derdini anlatabilirsem ne âlâ\nBana herşey seni hatırlatır\nHer an\nHer saniye\nHer dakika\nHer saat\nUnutmadan her gün her ay her yıl her yüzyıl\nGeçsede bitirseler de bitmiyor\nBeni deli sayın\nGarip mi davranışlarım\nDeğilse ne öyleyse ?",
    "category": "en_iyiler"
  },
  {
    "id": 323,
    "title": "Sana güveniyorum ki sırtımı sana dönebiliyorum",
    "body": "Sana güveniyorum ki sırtımı sana dönebiliyorum\nSırtımı sırtına yaslayabiliyorum\nSırıtabiliyorum\nDüşmanlarına bir sırtlan gibi saldırabiliyorum\nSabrım sonsuz\n\nÖyle ki tut elimden benim götür bilmemi istediğin her yere\nOrada kelimelerim ve ilhamınla bir kale inşaa edeyim sana\nBelki bir deniz belki bir nehir belki bir dere\nFarketmez neresi olduğu\nGidelim ait olduğumuz yere\nSen bensiz ben sensiz biz onsuz",
    "category": "en_iyiler"
  },
  {
    "id": 324,
    "title": "Aklımda bunlar neden var ?",
    "body": "Aklımda bunlar neden var ?\nBana verilen sorular\nKabul görmeyen cevaplarımdan da çıkışlarımdan da\nTanrı haberdar \nDamlaya damlaya cümleler oldu kelimeler\nBir okyanusla kumar tuttum\nBir çift zara bağlı hayatım\nBatarken çok su yuttum\nKustum aklıma gelenleri\nSonra unuttum.",
    "category": "en_iyiler"
  },
  {
    "id": 325,
    "title": "Gökyüzünden tek bir ses bekliyor aklım",
    "body": "Gökyüzünden tek bir ses bekliyor aklım\nBir nida, ziyafetlerce haz niyetine\nBir sima, aşık olduğum az hasetime\nGöğün diğer yüzünden bu yüzüne\nBir mucize\nSon şansım\n\nİçlerinden bir sen diyor gönlüm\nBir mecra ki yücelerden yücesinden\nBir aydınlık ki , gecenin şafağa zulmüne \nBir karanlık ki , sabahın akşama aşkı \nGöğün diğer yüzü\nGüneşle ay\nYıldızla bulut\nGündüzle zifiri\nAy başına ay\nBir zahmet artık ver bana mucizeyi\nBeklediğim günler sebebine\nGece gel kalan günler kabul nispetiyle \nBir mucize\nSon şansın.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 326,
    "title": "Ölüm bir ihtimal iki dudağımın arasında",
    "body": "Ölüm bir ihtimal iki dudağımın arasında\nKeşke insanlardan bazıları anlasa\nMilyarlarca iyiliği sığdıramam ama bir tıra\nElimde biz bozuk para\nBelki yazı belki tura\n\nKalır mıyız sence 2. tura\nYer mi yerinden oynar yoksa bana mı yalnız bura\nŞanslıyım ben gereği olmayan bi kura\nİrkilir misin israfil üflese sura ?",
    "category": "en_iyiler"
  },
  {
    "id": 327,
    "title": "Var mı gücü yeten şu aklımı zaptetsin",
    "body": "Var mı gücü yeten şu aklımı zaptetsin\nKelimelerden bir duvarım var biri artık aşıp geçsin",
    "category": "en_iyiler"
  },
  {
    "id": 328,
    "title": "Yapabilir miyim bunu ?",
    "body": "Yapabilir miyim bunu ?\nGidebilir miyim en uzaklardan iki geriye ?\nOlabileceklerden en güzelini umup dönebilir miyim deliye ?\nSeviye ?\n\nBana yardım eder mi görünmez bir el ?\nİsteyebilir miyim bunu vermeden bedelini ?\nCeza gibi gökyüzünden inebilir mi bir ses\nKim bunlar ? \nNereden geldiler ?\nGece ve gündüz\nNe diye ?",
    "category": "en_iyiler"
  },
  {
    "id": 329,
    "title": "Bulabilir misin zamanın izlerini ?",
    "body": "Bulabilir misin zamanın izlerini ?\nDokunabilir misin onlara ?\nSavunabilir misin mevsimin son filizlerini\nİyiyiz diyebilir misin soranlara ?\nGeçiştirebilir misin herşeyi ?\n\nYanına yaklaşabilir misin cümlelerimin bir daha ?\nKoynuna sokulabilir misin ?\nSavuşturabilir misin küfürlerini bir daha\nAlıştırabilir misin beni son defa\nİnandırabilir misin beni ?\nYalanlara.",
    "category": "en_iyiler"
  },
  {
    "id": 330,
    "title": "Ne kadar istiyorsun barışı ?",
    "body": "Ne kadar istiyorsun barışı ?\nKaçıncı biterebilirsin bu yarışı ?\nGümüş bir madalya da işe yarayabilir\nMağlubiyetinin galibiyetle sarhoş oluşuna\n\nSöylediğin sözler kulaklara alışır\nBelki zamanla insanlarla tanışır\nBelki sadece yeni kelimeler anlatabilir\nRuhunun böyle usul usul son buluşunu",
    "category": "en_iyiler"
  },
  {
    "id": 331,
    "title": "Ne mi derdiniz ?",
    "body": "Ne mi derdiniz ?\n\nBaşkası ne derse onu yaşıyorsunuz.\nSizden başka kim varsa haklı.\nÜç kelime ile tartışıyorsunuz.\nİyi kötü çirkin\nBoyunuzla aynı hizada insanlarla anlaşıyorsunuz.\nBu bıçak keskin\nBaşkasının elmasından hoşlanıyorsunuz.\nAz dinliyor çok konuşuyorsunuz.\nBuna alışıyorsunuz.\nTanrıya danışmıyorsunuz.\n\nHodri meydan\nBen tek siz hepiniz\nZaten bundan hoşlanıyorsunuz.",
    "category": "en_iyiler"
  },
  {
    "id": 332,
    "title": "Daha önce hiç böyle hissetmemiştim",
    "body": "Daha önce hiç böyle hissetmemiştim\nKalbim bütün bu olanlardan önce atmıyordu\nGülümsemen beni strese soktu\nGözlerin benim için çok değerli\nDaha önce hiç böyle hissetmemiştim\n\nAşk çok arkadaşçıl gözüküyor\nArzularım beni serbest bıraktı\nSadece mutluluk varmış gibi\nDaha önce hiç böyle hissetmemiştim\n\nUzun mesafeler sadece birer sayı\nSenin tutkun güneşi eritir\nÇünkü seven kalbin o kadar sıcak ki\nDaha önce hiç böyle hissetmemiştim",
    "category": "en_iyiler"
  },
  {
    "id": 333,
    "title": "Bu sefer en azıyla yetin",
    "body": "Bu sefer en azıyla yetin\n\nHatıraları silip , sanki öteki bir sen yokmuş gibi içinde , bir yetim gibi otur dizlerine koy dirseklerini ve anlamaya çalış...\n\nSessizliğe alış...\nKendi kendine danış.\nŞarkılar söyle içinden.\nBari onlarla barış.",
    "category": "en_iyiler"
  },
  {
    "id": 334,
    "title": "Zaman binbir zahmet içinde bir zeka oyunuyken",
    "body": "Zaman binbir zahmet içinde bir zeka oyunuyken\nSana veda ediyordun geçen her bir saniyede \nFeda ediyordun her halini..\n\nO önceden biliyor hamleni\nGösterme ellerini \nDimdik tut şu gövdeni kazanacaksın\nHer şey sana bağlı\nHer şey senle ilişkili sansın..",
    "category": "en_iyiler"
  },
  {
    "id": 335,
    "title": "Gerçekten tarifi çok zor , zahiri anlamamak norm",
    "body": "Gerçekten tarifi çok zor , zahiri anlamamak norm\nRüyanda gördüğün şeylerin var olduğu yanılsaması ve o dejavu denilen kahrolası hile\nBazen o kadar emin oluyorsun ki buna bile gelmiyor inanasın ama oldu işte.\n\nBelki de sona geldikçe yakını hatırlatıyor biri ikiye\nYa daha kolaysa anımsaması\nYa büyük olaysa zamanın sana yansıması hem de tutup seni gelmiyorken inandırası\nKendini kandırmaya devam ederken sana başarılar yolun yarısındasın ama unutmadan , \nO hepimizin Tanrısı\nBizler onun tek göz ağrısıyız böylelikle sesini duyan\nAnladın mı ?\nGerçekten tarifi zor, ama oldu işte zamansız.\nUyan.",
    "category": "en_iyiler"
  },
  {
    "id": 336,
    "title": "Düşün !",
    "body": "Düşün !\nYaşlanışını ve hakkındaki düşünüşü\nNeymiş işin gücün ?\nBütün bu yaşadıkların ne için ?\nBütün bu olanlar ne biçim bir bütün ?\n\nÜşü!\nİstiyorsan en yakınındakilere de bi soralım\nİstenmiyor değilsin de biraz daha mı yoralım ?\nKimsenin olmadığı bir hayat mı kuralım ?\nYoksa görülmek istendiğin yerde mi duralım ?\n\nSeni şöyle cennete alalım.",
    "category": "en_iyiler"
  },
  {
    "id": 337,
    "title": "Her şeyin bir ilki var",
    "body": "Her şeyin bir ilki var\nAşkın , güneşin ve ölümün\nŞu Dünya'da bir tane 2 var\nVe bu senin son gün dönümün\n\nKalabalıkların en kalabalığı tek kişilik düğününün",
    "category": "en_iyiler"
  },
  {
    "id": 338,
    "title": "Samimiyet gerek kavuşmalara",
    "body": "Samimiyet gerek kavuşmalara\nEn ciddi sona ermelere \nEl selamıyla merhabalara\nKulak memelerinde\nSon selâdan son sola selama\n\nSana geldiğim günü biliyorum artık\nBugün daha da bir bahar ömrüm\nHenüz daha yarısındayken ömrün\nKara kıştan çıkıp yorgun argın \nYarınlara umutla döndüm\nArtık yarın olmasa da , bugün kalmasada gönlüm.\nYangınlardan söndüm\nSöndürdün.\n\nAşk gerekmiş kavuşmalara \nBen hep sana kavuşamadan öldüm.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 339,
    "title": "Aklımdan geçenleri bir duysan şaşarsın",
    "body": "Aklımdan geçenleri bir duysan şaşarsın\nOnlara ulaşmak için dağlar çöller aşarsın\nİstersin ki 2 bunu başarsın\nDünyada cennet\nPozitif bir cinnet",
    "category": "en_iyiler"
  },
  {
    "id": 340,
    "title": "Düşünüyorum , acaba kaldırabilecek miyiz bu zaptı ?",
    "body": "Düşünüyorum , acaba kaldırabilecek miyiz bu zaptı ?\nGözlerimi yummasam mı başka\nYutkunmasam mı farklı ?\n\nMerak ediyorum  bu hikayede sevebilecek miyiz her haltı ?\nHep beraber düşmeyecek miyiz aşka ?\nYeter bana beni karanlıkta arattırdığın.\n\nAcaba diyorum sonunda başını döndürebilecek miyiz aklın ?\nBir mesele bu kadar mı laçka ?\n2 ne kadar haklı ?",
    "category": "en_iyiler"
  },
  {
    "id": 341,
    "title": "Kendimi ben biliyorum",
    "body": "Kendimi ben biliyorum\nBeni en çok ben tanıyorum\nBen, benim içimdeki ben ve bende gördüğünüz benden ibaret\nBen olacağını umduğum her şey için bir mum yaktırıyorum içimdeki bene senin yerine\nBen inandığım şeyler uğruna vazgeçmiyorum aynı şeyleri tekrar tekrar düşünmekten\nBana göre kaotik bir düzen gerekiyorken\nPeki ya sen ?\nHayatın görüldüğü kadar da güzel mi hakikaten ?\nBeni duy\nBeni dinle\nBeni al karşına da bi izle\nBir şans ver kendine ilk defası son defası\nSonra beni gönder bir yere\nİki çift lafım olacak öndere\nSonrasıda cendere\nAl sana yeni bir pencere\nAklın eriyor mu yazıya dökülmüş her heceye\nFarkın değiyor mu her heceye\nHadi sadede \nGel ecele\nBiraz acele.",
    "category": "en_iyiler"
  },
  {
    "id": 342,
    "title": "Ya Tanrı beni buna has hazırladıysa",
    "body": "Ya Tanrı beni buna has hazırladıysa\nBeni kendi halime bıraktıysa\nBulayım diye zihnimi bağladıysa\nYa boşverdiyse ardımda duranların halini\nYa şarkıların hepsini bana yazdırdıysa\nBana yazılsınlar diye varlarsa\nDüşmanlarım dostlarımsa\nDostlarım dostlarıysa\nGezip durduysam\nDurduğum yer yabancıysa\nYabancılar tanıdıksa\nTanıdıklarıyla tanıdıklarsa\nBoşu boşuna geçiyorsa zaman\nZaman dediğin şey ilüzyonsa\nGerçek olan aynaysa\nAnsa\nAnca anlıyorum.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 343,
    "title": "Ben size anlatmaya çalışıyorum derdinizi",
    "body": "Ben size anlatmaya çalışıyorum derdinizi\nGöç ederken görsün diye kirli tertemizi\nİzah kolay yazıp geçiyorum sessiz sessiz\nMesele damlalıklara sığdırabilmek denizi\n\nGözümde canlanıyor kucaklayabildiğim hepinizi\nKoskoca dünyaya değmiş parmağımın izi\nNe olur sevin birbirinizi\nMevzu asırlara yayabilmek ikinizi.",
    "category": "en_iyiler"
  },
  {
    "id": 344,
    "title": "Güneşin hüznünü düşleyen ben ve ardımdaki bulutların görkemi",
    "body": "Güneşin hüznünü düşleyen ben ve ardımdaki bulutların görkemi\nAlnımdaki kırışıklıktan gönlümdeki sıkışıklıklara..\n\nGelir bir yağmur damlası önümdeki camda tutunmaya çalışır ya öfkeli\nKarşı koyar ama mağlup düşer aklımdaki alışılmışlıklara..\n\nSöylerken aklıma gelen son şarkıyı , gözümün önünde belirtirken ilgili hatıralarım\nHey gidi günler hey !\nAdanmışlıklar.\n\nNe kadar da uzak kalınmış yaşanmışlıklara..",
    "category": "en_iyiler"
  },
  {
    "id": 345,
    "title": "Gördüklerin yanlış",
    "body": "Gördüklerin yanlış\nYaşadığın bir çeşit yalnızlık olabilir\nSen yine de karış kalabalıklara\nKız onlara\nDarıl , sarıl \nSana içimde güzel ne varsa hediye ediyorum\nBu belki gözlerinde dolup taşabilir\nBelki de karşılanabilir alkışlarla",
    "category": "en_iyiler"
  },
  {
    "id": 346,
    "title": "Bekliyorum elim yüreğimde",
    "body": "`Bekliyorum elim yüreğimde`\n`\n`\n`Gelecek, geçmişten çok mu farklı sence ?`\n`\n`\n`Düşüp gökyüzünden yeryüzünde gizli bir farkındalık`\n`\n`\n`Yaratabilir mi bu şiirlerden düşünce ?`\n`\n`\n`\n`\n`\n`\n`Kelimeler diyorum kelimeler`\n`\n`\n`Zihnime bi'yerlerden düşünce `",
    "category": "en_iyiler"
  },
  {
    "id": 347,
    "title": "Bari bir gece ansızın çık aklımdan",
    "body": "Bari bir gece ansızın çık aklımdan\nGecelere bırak gitsin güneşi\nGözlerini kırpma bana yıldızların ötesinden\nBu gidiş hayra alamet değil\nBoğuluyorum bu kuraklıktan\nYaşamak istemiyorum çocuklar ölürken",
    "category": "en_iyiler"
  },
  {
    "id": 348,
    "title": "İki seçenek var",
    "body": "İki seçenek var\nYa yüzüme bakıp nefretini kusarsın\nYa da çeneni kapatıp susarsın.\n\nİki seçenek var\nYa önümden yürür kapıları açarsın\nYa da yolunu değiştirir kaçarsın.\n\nİki , seçenek var diyorsa \nYa sal artık etrafına ışıklar saçsın\nYa da bu düzen yerin dibine batsın.",
    "category": "en_iyiler"
  },
  {
    "id": 349,
    "title": "Dinliyorum seni",
    "body": "Dinliyorum seni\nİzliyorum dudak hareketlerini\nHer kelimesindeyim sözlerinin\nEzberliyorum seni\nKaçırmak pahasına gözlerini\n\nYolun sonunu mu anlatıyorsun\nNeler işitiyor kulaklarım\nHer kelimesinde haklısın\nDönemeyecekmiyiz geri ?\nOlsun.\nSen farklısın.",
    "category": "en_iyiler"
  },
  {
    "id": 350,
    "title": "Sana ne kadar yabancı yanındaki yabancı",
    "body": "Sana ne kadar yabancı yanındaki yabancı\nFalancı ne kadar üzgün\nKulağındaki müzik kime ait\nDudağındaki dudaklar kimlerin\nSen anlat ben dinlerim\nNedir bu işin harcı\nNeden sancı ?\n\nYanındaki yabancı sana ne kadar yabancı peki yabancı?\nYa da tabanca ?\nYutup mermiyi boğazına \nPaaat diye\nPatlatsana alnında\nYada hayal et yere düşerken düşlerini\nSana haram zıkkım oldu bi sonraki ebedi",
    "category": "en_iyiler"
  },
  {
    "id": 351,
    "title": "Kalbimde bir cennet şarkısı",
    "body": "Kalbimde bir cennet şarkısı\nKollarım bağlı\nHayaline sarılıyorum\nZaman peşimde\nAdem elmasımda takılı bir düğüm\nEy sevgilim avuçlarından öptüğüm\nDuy en derinlerimdeki seni\nEy sevgilim yüreğimdeki tebessümüm\nSev mutluluk gözyaşlarımda beni\n\nAklımda bir cennet hayali\nSen ve ben milyarların arasında hala parmakla gösterilen\nÖzenilen\nHatalarımı sevmişliğin\nGözyaşlarımı silmişliğin\nBeni ben gibi bilmişliğin\nKabul etmişliğin göğsünde\nEmanet kabul etmişliğin beni \nDuymuşluğun en derinlerimi\nPaylaşmışsın gönlünü hemde gönlünde\nBir misafirlik\nBir misafirperverlik\nBir heyecan ve aşk içinde\nÖzlemişsin her erken uyanıp da uyanmamı beklediğinde\nBen seni senin seni gördüğünden güzel görüyorum\nBunu başarabiliyorum\nBu yüzden seni seviyorum\nSeni benimle seviyorum\nBenim kal istiyorum\nBu yüzden \nSonsuzda bile benimle en yakın arkadaş olmak istermisin ?",
    "category": "en_iyiler"
  },
  {
    "id": 352,
    "title": "Uzakların aslında ne kadar yakın olduğuna baksana",
    "body": "Uzakların aslında ne kadar yakın olduğuna baksana\nTeninde hisset güneşi\nYaksın ateşsiz\n\nMesafelerin birer sayı olduğundan haberdar değilmiş gibi davranma\nEninde sonunda anlayacaksın\nTeksin eşsiz",
    "category": "en_iyiler"
  },
  {
    "id": 353,
    "title": "Kurtulurum sanmıştım bu gürültüden",
    "body": "Kurtulurum sanmıştım bu gürültüden\nGöz göre göre , bile bile susmuştum halbuki\nGeceler bedenlere uzun bir karanlık , ruhuma kısacık bir rüyadan ibaret ,\nGüya uyanınca değişiyor ya bir şeyler\nMadem hayat bir anlık ve hem de tam zamanı şimdi \nYedi tane renk varken göğün kuşağında\nNeden loş etraf ?\nYağmur tanelerinin sesi \nNeden uğul ?",
    "category": "en_iyiler"
  },
  {
    "id": 354,
    "title": "Islıklarla uğurladılar tüm gidenleri",
    "body": "Islıklarla uğurladılar tüm gidenleri\nTek bir kelime dua etmeden\nHep bir dudaktan mırıltılar\nYuhlar ve uğultularla mahvettiler her şeyi\n\nAma bir şeyi unuttular\nBu sefer biri dönecekti geri\nAdı Rahmi mahlası 2\nBelki farklı belki de delinin teki\n\nO her şeyi umursar\nBir şey hariç.\nKendini.",
    "category": "en_iyiler"
  },
  {
    "id": 355,
    "title": "Ben , ortalama bir beynin en beyefendisiyim.",
    "body": "# \n\nBen , ortalama bir beynin en beyefendisiyim.\nSözlerim var temelli.\nYardım edenim de var efendim\nBelki bir kişiyim ama\nGözlerim var iki ayrı renkli, rengarenk.\nÖlen zavallı bir yazarım belki\nÖylesine inanmışım ki şarkılara\nÖylesine sonu gelmiş ki naraların.\nKorkum nefesim...",
    "category": "en_iyiler"
  },
  {
    "id": 356,
    "title": "Hayatın anlamını anlamamış gibiyim",
    "body": "Hayatın anlamını anlamamış gibiyim\nYoksa bir şey mi ifade etmeliydi ayrılıklar ?\nBen öyle , sakin , sade , kendi halinde biriyim\nSadece birden fazla , yalnızca bir tek farkla.\n\nÖzel olmayacaksa bir şey sorabilir miyim ?\nNeden düşman yapıyor sizi farklılıklar ?\nYa siz delirmişsiniz ya da ben de sizden deliyim\nBaşka türlü anlatılamaz bu takla.\n\nBir türlü yatmıyor akla.",
    "category": "en_iyiler"
  },
  {
    "id": 357,
    "title": "Bir günaydının içine uyanmaktı amacı uykuya dalışımın dün gece",
    "body": "Bir günaydının içine uyanmaktı amacı uykuya dalışımın dün gece\nAceleydi rüyalarım\nMücadeledeydi göz kapaklarım\nErken gelen bir sabahtı adı\nSesi puslu bir gökyüzünden gelen bir damlaydım oysa ben\nYağmurlar yağabilmek için uyandım\nSabah daha saat yediyken hemde\n\nBu günaydının hayaliyle uykuya daldım dün gece\nGülümsermiydi her heceye\nKabul olurmuydu dualarım nice\nKendiyle yeniden tanıştığını söylemişti dün geceye\nÇelmeyi takmıştı dengeme\nSesi puslu bir merhabayla başladığında günüme , yağmuruma eşlik etsin diye uyandım..\nUyansın diye benimle\n\nOğuzhan",
    "category": "en_iyiler"
  },
  {
    "id": 358,
    "title": "Mümkün olan en uzağa bakın",
    "body": "Mümkün olan en uzağa bakın\nNe kadar da yakın \nİşte ordan düşerken güpegündüz\nGüç olsa da gecesi oldu dünün\nGelip yarına bugünü andıran biri gibi\n\"Merhaba ben kendini kandıran biri \"\nDeyip öpün.",
    "category": "en_iyiler"
  },
  {
    "id": 359,
    "title": "Karışmayın benim karışmış görünen düzenime",
    "body": "Karışmayın benim karışmış görünen düzenime\nBiliyorum her şeyimin her biri nerde tek tek\nBazen üzülüyorum üşüyorum diye bir yelle\nKarıştırıp karıştırıp buluyorum bir şey\nSeçiyorum bir tanesini omzuma\nOna yürüyorum\nGüzelliğin dağınıklığına\nKaosuma kavuşuyorum\nIsıtıyor özenince\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 360,
    "title": "Yalnızlık şehrinin valisiyim dünden beri",
    "body": "Yalnızlık şehrinin valisiyim dünden beri\nYarın şehrime taşınmayacakların kardeşiydim şimdi abisiyim\nGidenler de dönmedi zaten geri\nSade bir son isteyen kalabalığın tek asisiyim\nKızgınım\n\nBirnsan olsaydı elini tutabileceğim düşerken uçurumdan\nMüziklerde bahsedebilseydim aklımdan geçenleri durmadan , duyurmadan\nKalabalığıma eşlik etseydi feleğim\nSade bir son istemeyen azınlığımın tek varisiyim\nKırgınım\n\nAynalarım var gözlerimin renklerine bakabileceğim\nİkisine birden ayrı ayrı , birbirine bağlı zihnim\nBambaşka bir resim\nMimikler deneyip zorbalığımın sınırlığını denediğim sıfatım benim\nGülümsediğim\nKüçümsediğim\nSade bir son istemeye karar veremeyen karşımdakinin tek sahibiyim,\nYorgunum , izin istiyorum.\nKalabalıkta yapayalnız gezememekten.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 361,
    "title": "Asıl kendi günahının bedelini başkasının ödemesinden kork",
    "body": "Asıl kendi günahının bedelini başkasının ödemesinden kork\n\nÇünkü öteki Dünya'dan başka bir yer daha yok..",
    "category": "en_iyiler"
  },
  {
    "id": 362,
    "title": "Geri sayım başlasın nasılsa geçiyor zaman",
    "body": "Geri sayım başlasın nasılsa geçiyor zaman\nAsıllar da bir zahmet taklitlerini yaşatsın\nAslında bir yolu var , bir şekilde mümkün\nYarımlar tamam\nGönlümden geçenleri ağlıyorum sana insan\nGönül yaşlarımdan bir damla al ve koy mazlumun ömrüne",
    "category": "en_iyiler"
  },
  {
    "id": 363,
    "title": "Ölüm var düşüncelerimde",
    "body": "Ölüm var düşüncelerimde\nSessizliğimi ince ince yırtan\nKükreyen bir aslan gibi ürküten tüylerimi\nBir miçoyum bu sonsuzluk serüveninde\nYardımcı bir rol yüklenmiş\nİkinci bir el gibiyim hayallerimde\nBaşaramayacağımı bile bile deniyorum yıllardır\nYolları yürüdüğümü sanıp saymışım yerimde\nAnlatamadığım senaryolarıma yazık\nPatladılar içimde.\nYerler bir oldular.",
    "category": "en_iyiler"
  },
  {
    "id": 364,
    "title": "Ben sana anlatırım , duvarlarından atlatırım da artık geç",
    "body": "Ben sana anlatırım , duvarlarından atlatırım da artık geç\nKi içimdeki Allahı buldum diyemedim beni sen sanmasınlar\nBu sırrı ömrümce saklarım , söylemek olur mu hiç ?\nKi sana versem taşırma",
    "category": "en_iyiler"
  },
  {
    "id": 365,
    "title": "Her zaman bir kere daha doğulur",
    "body": "Her zaman bir kere daha doğulur\nYakın geçmiş yenisini yeniden doğurur\nSöz sahibi olunup\nYardım bulunur mu ?\nYarın gelir güneş bizim için yeniden engin sularda boğulur\nBugün ay bizim için en tepede , pasparlak durup\nBi güne diğerini katarda yoğurur\nHer zaman bir hak\nBir zaman hak gibi yek\nBana el uzatsa yanacak avuçları hep\nBana söz verse açılacak kapıları tek tek\nAyla güneş gibiyiz biz\nBir varız bir diğerimiz\nBir diğerine bin değerimiz\nToprak varoluşa açarmı sonsuz ?\nSular bile susar mı bensiz ?\nSadece son bir kez daha doğup\nGeçen geçmişiyle daha yenisine maşuk olup durur\nSözün sahibi bulununca\nTam alnımdan vurulur\nUsanmadan yine doğup gelirim.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 366,
    "title": "Ne gözüm var ötelerde",
    "body": "Ne gözüm var ötelerde\nNe tek bir sözüm var \nVazgeçiyorum kelimeler sizden\nÇünkü , bu nasıl büyük bir öfke ?\nÖlüm var\n\nIşıklar olsun güneş\nSoğuklar olsun kış\nZaman dar.",
    "category": "en_iyiler"
  },
  {
    "id": 367,
    "title": "İnanın neden ben de bilmiyorum yıldızlar gökte bu kadar çok",
    "body": "İnanın neden ben de bilmiyorum yıldızlar gökte bu kadar çok\n\nGaliba bir tek ben merak ediyorum hepiniz neden böyle birbirinize mesafelisiniz\n\nBin ışık yılı uzakta bile böylesi yok\n\nYere batsın derdiniz.",
    "category": "en_iyiler"
  },
  {
    "id": 368,
    "title": "Sandığımdan da kötü durum",
    "body": "Sandığımdan da kötü durum\nGüneş aynı yerde\nYakım daha da yakın\nYıkım kaçınılmaz\nYok bi yorum\nVarlığın sonu baya yoğun \n\nSende o da de\nBizde bedende artık yokuz bende\nYok oluyoruz\nTokluktaki açımızdan\nSon biz oluyoruz\nYokluktaki ters açımızdan\n\nDünyadaki ilahi mahkeme\nÖteki Dünya vay halime\nSor aynadaki kendine\nAl cevabı vur kendine\n\nİstediğim gibi gidebilseydim heryere\nİsteseydi ilim bunu\nSisteme bu sorum\nSüpermene özel mi bu durum ?\nBende bir şey değil her şey olurum\nSonu yavaşlatmak için yorulurum\n2 benim adım oğlum\nKızım olursa adını çoktan Dünya koydum\nDerin olsun istedim\nSandığınızdan da kötü durum \nBana bir çift kanat verin\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 369,
    "title": "Kendini gerçekleştirmek için ihtiyacın olan tek şey sensin oğuzhan",
    "body": "Kendini gerçekleştirmek için ihtiyacın olan tek şey sensin oğuzhan\nHerşeyi gerçekleştirmek için ulan\nYaşlandığınsın\nZaman kayıplarınla varsın\nGündüzdeki gecede\nZifirisinde\nFikirlerin filizleri ağırlasın ağaçlarını\nKoca bir çınar olabilmek için var hayallerin\nEtraflarını çevir , kimseler seninsemesin\nSerinlemesin akşamların\nSağır mısın ?\nDilsiz misin ?\nAğırsın ve bencilsin\nBir yolculuk mu bu ömür\nMecburi bir umur mu\nMuhteşem bir yük gönül ta ki gelinceye kadar ölümlü\nSonum.\nSon günün ilk anı\nEtrafını çevirirler toprakla kimsesizken , yardım bile isteyemezken\nBağırırsın da yapmaz yankı\nSon nefese yetişen bir söze gözlerini kapayışın hayatın\nNefes veremeyişisin alamayışın\nBu dünyada göçemeyişisin aldanışın\nYa elinde herşey\nYada başkasının dilinde barış\nÖnce kendinle barış\nSonra başkasıyla yarış\nSevgi için.",
    "category": "en_iyiler"
  },
  {
    "id": 370,
    "title": "Sana uzaklardan geldim , tam burnunun dibindeyim",
    "body": "Sana uzaklardan geldim , tam burnunun dibindeyim\nNereden çıktı şimdi bu deminle şimdi arasında koşmak\nLoş bir ikindi vakti seninle muhabbet ne hoş \nGözlerime bak ve öyle söyle şimdi istersen\nHayır desene yerse ve çoksan ?\nBenimle iken mi bende bile yoksan?\n\nAslında bir borç gibi sana bunları sunarken,\nSenin benden duymak isteyebileceklerin bilmek istemeyebileceklerinde gizli olabilir sanki\nBen üzerime düşeni yapamadıysam affet\nCehennemle yan yanayım bu sefer belli\nVarsın yeni başlangıçlarımız böyle olsun.\nBiraz dolu biraz deli.\nİki ileri iki geri.",
    "category": "en_iyiler"
  },
  {
    "id": 371,
    "title": "Halbuki yanan o şehrin küllerinden asla yeniden doğamayacağını anladığınız…",
    "body": "Halbuki yanan o şehrin küllerinden asla yeniden doğamayacağını anladığınız o vakit gelmiştim aklınıza\nVe su gibiydi haykırışlarım\nGerek yok artık soluklanmanıza\nCivar şehirlere göçünüz arkadaşlarım",
    "category": "en_iyiler"
  },
  {
    "id": 372,
    "title": "Gidiyorum desem en derinden daha derine",
    "body": "Gidiyorum desem en derinden daha derine\nBirden oturacak sanki tüm taşlar yerine\nO alıp götürecek beni ona\nBu beni yoracak biraz ama\nSoranlara bırakacak kalan günleri geride\n\nGeliyorum desem , ben yerine , daha daha derine\nHer bir anısına herkesin bin defa daha şeref'e.\nYansızım , sonsuzum , onsuzum belki tamam\nKendimi terki diyar etmeye giderken\nİkiden vazgeçmeye\nVazgeçmeye.",
    "category": "en_iyiler"
  },
  {
    "id": 373,
    "title": "Galiba farkındayım sıcağın",
    "body": "Galiba farkındayım sıcağın\nHiç bir şey gördüğüm gibi değil\nBazen söyledikleri gibi çoğu bildiğimiz yanlış\nBu , ara ara sarıyor aklımı , ben onu sıkı sıkı tutayım derken alışıp\nTutmayınca o da bırakıyor karanlığa karışıp\nAramayınca da bir boşluğa düşüyosun \nEy-vah!\n\nYangın !\nKocaman ve gökyüzümü yalayan\nKaplayan ve alevlerden devasa \nGörkemli bir ateş bilhassa gözlerimden\nİs kokusu mis kokusu pis kokusu\nKarmakarışıklık içindeki içimdeki kainatı dolduran bir avuç su\nAra ara damlatıyor sorusu\nAramayınca da anlatıyor huzursuz\nBoşluğa düşünce de oluyor böyle\nYutkununca geçiyor.\nBir hoşluğa düşüveriyorsun\nEyvallah",
    "category": "en_iyiler"
  },
  {
    "id": 374,
    "title": "Yazıp durmaktan utanmaya başladım artık siz kanıp durmaktan utanmadınız…",
    "body": "Yazıp durmaktan utanmaya başladım artık siz kanıp durmaktan utanmadınız mı koştuğunuz yollarda durmalara\nUtanmadınız mı dururken tükürdüğünüz yolun her metresinde nefes almak heves diye Soluklanmalara\nUyanamadınız mı hala ?\nKazıyıp tırnaklarla bir yere varamamayıp son virajını alırken mecburi hayatın güzeli varken\nDünyayı ısıtmaya\nKorumasız bırakmaya\nDaha çok olmaya\nDaha çok almaya vermeden\nDaha çok yıpratma burayı\nDaha çabuk yok olmaya harbiden\nUtanmadın mı ?\nBurası fazla almayacak senden daha verme sen\nAğaç kes git vakit kaybetmeden\nBeton ol.\n\nSavaşlar çıkarmaya\nBombalar yağdırmaya\nÇocukları ağlatmaya\nYetim bırakmaya\nNefrete ve korkuya \nDevam et nakit kaybetmeden\nBaşarılar dilenince sana kaybederken korkulardan kabuslarda\nUtanmadın mı\n\nSağına bak doğudan\nÇaresizce burnundan soluyan insanlar\nYardıma muhtaç dişlerini sıkmış ana\nAllahım al canımı diyen baba\nAnam babam diyen mevzudan bir haber insan yavrusu\nRüyalarında evine düşen bomba kabusu\nUtanamadın mı hala harbe ?\nYerin dibine girmedin mi sahiden ?\n\nSoluna bak batıdan \nNefsine yenik düşmüş milyarlarca insana\nUcuz lüksün peşinde , teknik , taktik ,şehvet , şöhret , para\nBir yanda şişmanlıktan ölen Sara\nDiğer yanda çaresizlikten ölen Sare\nBir yanda Aman\nDiğer yanda nükleer bomba\nBir yanda akıp giden zaman\nDiğer yanda suçlunun başında hare\nŞu ve bu .\n\nÇaremi ?\nÇok beklersiniz daha öteki alemi\nBen sormaktan yordum içimi ?\nNe zaman göreceksin sendekinin fayda ettiği türdaşının içini ?\nVicdanına oturmak da bir yardım biçimi\nBir yudum su içimi süre kaldıysa bırakın da dünya nefes alsın da yapsın seçimi\nSonra sorarsın geçmişteki niçini\nBırak peşimi.\nBırak bu işi\nKorku edişi\nNefret pekiştirdi herşeyi\nKorkularımız var hayatta kalmak için\nKuklalarımız var basit çıkarlara şampanya patlatmak için\nMeseleleri atladık hep\nSenin füzen benimkinden güzel\nBenimki dünyada tek\nAma dünya sek\nSırtın pek\nAçlık yek\nİştah zevk\n\nAçken açları düşünecek toka çare yok\n3 gün sonra kopacaksa kıyamet\nKaybedecek 1 dakikamız bile yok\n3 güne kıyameti kopartmaya götümüz yok\nO yüzden kaybedecek yıllarımız var\nBarış yok\nUmut yok umut..\n\nYeter \nUsanmadımı toprak kefen giymekten ?\nKaçıncı beden bu tabut ?\nKaçıncı yok oluş son bulup..\nKaçıncı çocuk bu ölen kaçıncı söyle\nKaçıncı varoluşun yollarında kaybolup\nKaç kere daha bağıracak sana geliyorum diye umup\nKaç kere kaçtı umut\nYeter ağlamıyor bulut\nYalvarıyor dur diye\nYeter, artan bile yeter sana vaad edilen cenneti hayal etmeye\nDeli divane bir o yana bir bu yana bombalar\nYuh.\nFerhat mı dağları delen ?\nFersahlar mı geçilen ?\nBu kaçıncı ihanet söyle\nSoba tütmesine kalktı şahı , veziri piyon\nBu ne biçim oyun böyle\nNeden yanmıyor lambalar ?\nBu kadar avuç niye ?\nSende varken Allah niye bir daha versin ?\nBiter mi dersin ?\nBela mı versin ?\nSeninkinden de beter.\nCamilerde avaz avaz bir şeyler var anlamıyorum.\nSüsle karmaşık Elif Lam Mim tozlu duvarlar\nAnlamıyorum işte\nBir an için bakışında anlattıklarına\nAnlıyormusuna inandıklarıma\nAllah bile üzülüyor halime\nBu nasıl bir sarmaşık ?\nNeden yüksek bu kadar bu dalgalar ?\nDuvarları kırdılar !\nSonu yana bitişik.\nEn güvendiğim içime bak\nHuzursuzla barışık\nLider yılışık.\nKoyun şaş.\nYerle gök bir bakarsın çarpışır da\nDurur dünya\nDurur gözlerdeki yaş.\nBok barışırsın o veledin annesiyle\nTac et bakalım var mı bir çare ?\nAl kendini vur ötekine\nKaynar sular dök üstüne\nYan ki anlayasın babayı\nOlamamayı.\nBen kendime çok mu geldim ?\nSen miydin otorite beni bitiren ?\nBabam mıydın beni anneme emanet koyan.\nAl ne istersen iste doysun gözün\nYeter bu kaçıncı ziyafet boğazından geçen\nBu kaçıncı izafet ?\nEyvah.!!\nEllerinde kan mı bu boya ?\nLan bir farket biliyorsun\nKendini yedin\nBeni yedin\nAğaçları\nDinazorları su gibi içtin bitmedi.\nBarış işte zerafet\nPaylaşırım zorları.\nDağlar çöller aşarım\nÖlürüm de saklarım gıkımı\nSen öldürme beni masalarda\nBırak o zarları\nDüşeş müşeş gelmiyor işte\nBırak o zırvaları oyunlar eğlendirmiyor keza işte\nYardım et kefenleri bayrak yaptık sallıyoruz bak\nÖlenle ölüyoruz.\nNasihatte kerametin hatrına bari bir dur artık.\nKüfür bile edemiyor çarem avredimi örten bir tanecik yaprak.\nGüvene güvene\nUtana sıkıla\n3 yaşında çişini tutarcasına balkonlardan sarkıyoruz bak\nÖlmeyi görüyoruz\nGöz göre göre şarkılar söylüyoruz\n \n\nBeni gördünya Allah için varsa cesaretin bak.\nBeni gör dünya Allah için adaleti hoş kıl yılmadan o hasta yatağından kalk.\nİçe bak derinlerimin\nEn dibine taş at.\nİçindeki içe tükür.\nKana kana iç..\nSon su bu Can suyu avazlarım bu sefer bari okuyan aklın kıymetini sil.\nAğlıyor mu çocukluğun çocukluğuna ?\nOlmak istediğin meftun olduğuna.\nAcele işte şeytan ile ortak olduğum\nTutamıyorum zamanı , hayat orda Ve fazlasıyla yakın.\nGözyaşı buhar\nNefes zehir.\nÇocuğuma oğlum , çocuğuna diyorum.\nBabası eşşek oldu semer.\nAltın kemer.",
    "category": "en_iyiler"
  },
  {
    "id": 375,
    "title": "Bir yolculuğa çıkmakmış hayat",
    "body": "Bir yolculuğa çıkmakmış hayat\nİlk nefes için ağlamaya dostmuş üryan hıçkırıklar\nHayatın anlamı da o yolculuğa hazırlanmakmış dostlar\nMevzu son nefese yakışacak mânalı cümleye hazırlıklar\nTevazular , meraklar ve mevzular farklılıklar\nGeride bırakmakmış hayat yalnız kalmanın hevesini \nKalabalığa karışmakmış\nİnsanlara alışmakmış\nBazılarıyla tanışmakmış\n\nBazılarıyla bir yolculuğa çıkmak ve o ilk nefesten itibaren son nefese dair yeminle sonsuzluk fikrine alışmakmış hayat\n\nGel de şimdi durdur ve sor sana gelen sevdaya\nBu nasıl güzel bir seyahat ?",
    "category": "en_iyiler"
  },
  {
    "id": 376,
    "title": "Aydınlık mı karanlık ?",
    "body": "Aydınlık mı karanlık ? \nYoksa gözümün içine bakan her bir diğer göz mü benden sonuna kadar savaşıpta ölümlerden dönmemi bekleyen ?\nPeki ya ?\nGerçi..\nSanki ?\nNeyse.\nBelki...",
    "category": "en_iyiler"
  },
  {
    "id": 377,
    "title": "Çok mu kolaymış belki demek ?",
    "body": "Çok mu kolaymış belki demek ?\nÇarpan ilk yürek meğer bunun içinmiş demek\nBu savaşa bu esaret bunca emek\nBunca hayvan bunca insan bunca denek \n\nEl sallayabilir misin kendine ?\nUzaklaşabilir misin bencilliğinden ?\nSorsam en güçlüsünü tek hamlede yenersin\nOnca düşman bu pişmanlık ve daha bir çok seçenek\n\nSessiz zamanın en gürültülü acı kaybı\nBaksana sana senden sana fayda var mı ?\nSen sadece Dünyalara bedelsen ayrı\nNe zaman deme bir gün yarınlarda gelecek",
    "category": "en_iyiler"
  },
  {
    "id": 378,
    "title": "Düşündüklerimi söylemiyorum ben",
    "body": "Düşündüklerimi söylemiyorum ben\nSöylediklerimi düşünüyorum artık\nO kadar hızlandı ki umutlarım\nBir adım kadar yakınım ona o etrafında turladığım\nBir yardımla aranızdan ayrılırım\nBir yordamla aramızdan sıyrılırım\nYüksek ve ıssız bir tepede kendimle tek başına\nKulaklık ve yalnızlığımla\nTek bir şarkı ve dilimde küfür alışkanlığım\nHepinizi kavuşturmaya yada hep uğraşmış olmaya boşuna\nDeneyeceğim çünkü olması gereken bu galiba\nNeler geldi başıma\nNeler istedi karşılığında\nAllah korusun , maşallah\nGiydirdiği insan koşumunda\nNeler neler yüklendi sırtıma\nHoşuma sormadan , söz hakkı vermeden zatıma\nDedi ki konuşma koşar gibi\nDedi ki öz ol su yolunda akar gibi\nDedi ki yan içinden ağır ateşte pişer gibi\nDedim ki Düşündüklerini söyleme artık\nSöylediklerin yeter , bi düşün der gibi.\nEkledim işim gücüm dünya olmuş\nKendi derdim bana yetmezmiş gibi\nSizin için öleceğim,\nVeda edip güler gibi\nSon sözün \n2 dedi gitti.\nRuhum kızıl galiba\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 379,
    "title": "En fazla iki damla gözyaşı , fazlası haram",
    "body": "En fazla iki damla gözyaşı , fazlası haram\nBenden bu kadar , senden bu kadar\nZor biliyorum birbirimiz kokuyoruz buram buram\n\nAh ne güzel olurdu sokaklarında oyun oynamak\nBir sahilde birlikte sakızlı dondurma \nBir çölde vaha\nAşk",
    "category": "en_iyiler"
  },
  {
    "id": 380,
    "title": "Okuyormusun yazdıklarımı Tanrı .",
    "body": "Okuyormusun yazdıklarımı Tanrı .\nBen oluyormusun benimle ?\nRüyalar verecekken vazgeçiyormusun Tanrım\nGündüzümü seyrediyormusun yerinde ?\nDalga geçiyormusun benimle ?\nCehennem kötümü şimdi serinse ?\nYa düşünüyorum diye yak beni\nYada sar güneşin dünyamı sardığı gibi\nKucaklayacağım ateşi keyfim yerinde\n\nCiddi mi bu küsüşün\nÜzdük mü seni ?\nYanlış mı sorduk ?\nCevaplar mı çok uzun ?\nSorular bu kadar mı anlamsız ?\nBu nasıl bir sabır Tanrım\nBu nasıl bir nasır kalbimizdeki ki buna hala gülmüyorsun ?\nSinirinden , manasız.\n\nYırtıyorum ruhumu , zihnim paramparça\nCevaplar arıyorum yapayalnızım galiba\nBir başına.\nKimse dinlemiyor sorularımı\nKimse anlamıyor sorunları\nSöylüyorum işte\nYanlış diyorlar anca\nİnlemiyor mu gök hala ?\nDinlemiyor mu avazımı ?\n\nNe biliyorlar ?\nNeden ikna edemiyorlar ?\nNeden kimse karıncaları düşünmüyor hala ?\nNeden beni dinlemiyorlar ?\nNeden sana varışıma karşılar ?\nGelmek istiyorum sana\nOna bile karşılar\nTam karşıdalar\nÇok yakındalar\n\nSon sözüm.\nBizi güneşimizle yak Tanrım.\nİlk beni yak.\nSon çözüm.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 381,
    "title": "Sonsuzluk bana altından bir kafes",
    "body": "Sonsuzluk bana altından bir kafes\nToprağın altına da sığamayacağım of pes\nSavaşacak belli ki gerçek vicdan ve amancı nefs \nAma önce karanlıkta as pas kes\nDahil miyiz herkes ?\n\nAslına bakarsanız çoktan yarıladık o yolu\nGörmediğim kalan yarımı var onuda siz oldurun\nBana beni verin çünkü bu emeklerimin karşılığı\nKağıt taş ve makasın adil mutluluğundan bir kadehte bana doldurun.\nDaha mıyız herkes ?",
    "category": "en_iyiler"
  },
  {
    "id": 382,
    "title": "Sallanan bir koltukta",
    "body": "Sallanan bir koltukta\nSallanan yalnız bir ben\nYalnızca bir beden\nAklım sabit , soru basit\nİçinden küfreden\nSonra..\nBütün bu olanlar neden ?\nBütün bu soru işaretleri nereden ?\nBütün bu alışılmış çaresizlikler ortaya çıktıktan beri merak ediyorum hayatımdaki herşey belkide benim mi yüzünden ?\nKalk şu koltuktan\nDalgalanma aklının boşluklarında\nÇıkarmadan hayatından herşeyi senin olmayacak hiçbir şey ve seni bulmayacak aydınlıklar karanlıklardan korkmayı bırakmadan\nİyi günleri özlemedin , daha onları görmedin bile\nHiç arkadana dönmedin ,\nHiç geçmişi görmedin\nGeçmişte yaşadığını yeni farkettin bro\nKandırmışsın kendini hemde daha demin\nAç artık şu yeni sayfayı\nSaç artık şu kelimeleri , dağıt içindeki etrafı\nSuç artık kendine kendini işlediğin \nSeç artık olmak istediğin hayatı\nToparlayacaksın\nBir şeyler yap\nOnun için yaşa\nKalk şu koltuktan\nHayatı yaşa\nPaşa paşa\nKüfür de et ama siktir et\nİçinde o pür neşe\nDuruyor öylece\nSallanıyor sayende\nO yüzden dostum\nYa bir takoz bulup biraz daha düşün\nYada imrendiğin insanların sana imrenmeleri için yapacakları için kalk , dinle beni \nYarımsın sen\nKaderin bütün.",
    "category": "en_iyiler"
  },
  {
    "id": 383,
    "title": "Kapatsaydın defteri sende",
    "body": "Kapatsaydın defteri sende\nGöğsüme göğsüme ağrısaydın arsız\nBir tek hatırası bile kalmasın bende diye\nBunun için bir kez olsun Tanrı'ya yalvarsaydın \n\nBelki o zaman yalnızlığım\nSeninkini anlardı.",
    "category": "en_iyiler"
  },
  {
    "id": 384,
    "title": "Uzun zaman oldu değil mi ?",
    "body": "Uzun zaman oldu değil mi ?\nBir varmış bir yokmuş deyip sana da düşündürtmüştür.\nMaceralar birer birer beyazlatmışken saçlarımı yollarımda\nYokuşlardan yukarı yok oluşlarım göz bebeklerimde küçülür \nBaşı sonsuza uzanan sonu meçhul bir masal gibi tamam da bu hikayelerin hangi biri aklında ?\nBu savaş yıllarca sürmüştür belki ve\nBelki bu sefer ejderha prensi öldürmüştür..",
    "category": "en_iyiler"
  },
  {
    "id": 385,
    "title": "Güneşin batışından doğuşuna bak",
    "body": "Güneşin batışından doğuşuna bak\nHikayelerimizin birer birer yok oluşuna\nRüyalarda seni arayışıma\nBen alıştım artık\n\nMesele senden yanıbaşımdayken nefret etmek senden başka her şeyden\nSana sen de suçlusun en az benim kadar demek\nNereye gitti yıllarca verdiğimiz emek\nBen alıştım artık\nSıra sana geldi , mesele olduğu gibi terketmek",
    "category": "en_iyiler"
  },
  {
    "id": 386,
    "title": "Umudun gururun önünde mi sor kendine",
    "body": "Umudun gururun önünde mi sor kendine\nHüzün mü var göz kapaklarının ardında ?\nYoruldun mu dinlenmekten ?\nYoruldun mu dinlenilmemekten ?\nÇözdün mü ipleri ilmek ilmek\nGeçiyor ömür.",
    "category": "en_iyiler"
  },
  {
    "id": 387,
    "title": "Ne olur konuş benimle",
    "body": "Ne olur konuş benimle\nBu gece bunu düşünmekten uyuyamayacağım\nHep aklımdasın\nBunun farkındasın\nAnlatıyorum anlamıyor hiçbiri\nNedense bir tek sen yanımdasın\n\nÖyle bir mucize gönder ki gökyüzünden\nBütün dünya bizi anlasın",
    "category": "en_iyiler"
  },
  {
    "id": 388,
    "title": "Nasıl yani ?",
    "body": "Nasıl yani ? \nSana gelecekten mi haber versem ;\nYaşanacakları mı göstersem ?\nÖn yargılarından vazgeçebilirsen eğer...\nHerkes duyabilir sesini sersem !\n\nÇünkü kelimelerinin süper güçleri var ve tüm bu karmaşa içinde var oluş sebebimizi açıklamak için seçilmişsin sen .",
    "category": "en_iyiler"
  },
  {
    "id": 389,
    "title": "Sana doğru mu yüzüne çarpan çiçekler",
    "body": "Sana doğru mu yüzüne çarpan çiçekler\nArkanda bir ordu ve akıllarında gerçekler\nYanlış mı söylenenler\nYalan mı dert edilenler\nSamanlar ve alevler\nZamanlar ve nefesler\nOlanlar ve bitenler\nNefret ve aşk\n\nBir kere Dünyaya geldin be kardeşim\nBu dert de gelip senin başına isabet etti.\nŞimdi annen baban düşünsün\nSeni buraya onlar getirdi..",
    "category": "en_iyiler"
  },
  {
    "id": 390,
    "title": "İnceleceği yerden kopacağı belli",
    "body": "İnceleceği yerden kopacağı belli \nKorkuyorum ey gökyüzünün rengi\nKendime gelmediğim gün , geceden beridir\nDün gibi bugün de yarının dengi.\nİçim içime sığmıyor desem yeridir\nÇünkü hızlı yavaş.\nÇünkü \nKorkuyorum ey yorgun düşüncelerime misafir boşluktan ibaret !\nSığ suya vuran loş.\nHerşeyin efendisi !\nDüştüğüm yerden kalkamayacağım sanki\nO telaş.\nSavaş ve barış.\nVe zamanın yalandan tesellisi.",
    "category": "en_iyiler"
  },
  {
    "id": 391,
    "title": "Bir ömre kaç şiir sığar ?",
    "body": "Bir ömre kaç şiir sığar ?\nKalbin kaç defa ağrır ?\nGönlün kaç defa bağırır ?\nKaç defa daha çekebilirsin bu kahrı ?\nHerkes sağır !!\n\nŞu dünya son bi kez dönerken güneşin etrafında\nKaç kişiyiz bunu anlatmaya çalışan ağır.\nAdeta bir görev paylaşımı , sanki bir seçilmişlik\n\nYalansız ve yarım çaresizlik\nKimse koşmayınca yardıma\nUmrunda olmayanlar yarına.\nBu evren senin hatrına\nVar olmadı geçimsizlik.",
    "category": "en_iyiler"
  },
  {
    "id": 392,
    "title": "Sen öyle san dedi",
    "body": "Sen öyle san dedi\nHayat, kalan zamanından daha önemli değil , gerçekten.\nBak kaç yıl geçti tamamına varmadan eskisi gibi\nKimseye kim olduğunu sormadan \nEskisinden iyisini yaza yaza yormadan kendini\n\nBen de öyle sanmıştım hakikaten\nBir bakmışım binlerce imza atmışım fark etmeden\nÖylesine hiç kimseye ait olmayan hevesleri\nİki defa düşünmeden yazmış\nRahmi Oğuzhan.",
    "category": "en_iyiler"
  },
  {
    "id": 393,
    "title": "Olanlardan bir haber, bir haber bekliyorsan eğer",
    "body": "Olanlardan bir haber, bir haber bekliyorsan eğer\nGel bir zafer konduralım birbirimize\nNe kadar şahaneymiş galibiyet meğer \nBundan sonra ayrı ayrı dikkat edelim kendimize\nİnan arkana bakmadan bunu yapmak asıl herşeye değen.",
    "category": "en_iyiler"
  },
  {
    "id": 394,
    "title": "Gözlerimi açtı hayat, uzun sürmedi uzun mesafeleri yakından görmek",
    "body": "Gözlerimi açtı hayat, uzun sürmedi uzun mesafeleri yakından görmek\nOlanları kelimelere dökmek ne kadar da naifmiş meğer\nBu , omuzlarıma tam oturak bembeyaz bir gömlek\nVe paha biçilemez bir değer\nGüzel şeymiş yeniden ölmek\nBuna değer...\n\nAslına bakıyorum ardımda bıraktığım cümlelerin \nBüyük bir çoğunluğu yanlış sisteme sövmek\nYazdıklarım silmediklerim çok sevip de vazgeçtiklerim\nKolay değil köprüden önceki son çıkıştan dönmek",
    "category": "en_iyiler"
  },
  {
    "id": 395,
    "title": "Karanlığı delen bir aydınlık",
    "body": "Karanlığı delen bir aydınlık\nHiç beklemediğim bir saygınlık",
    "category": "en_iyiler"
  },
  {
    "id": 396,
    "title": "Gökyüzüne armağan olsun bütün sevinçlerim",
    "body": "Gökyüzüne armağan olsun bütün sevinçlerim\nKederlerim gecenin\nHakkını verebilmek için her şiirin\nFarkına varın diye yazıyorum anlamının kötünün ve şirinin",
    "category": "en_iyiler"
  },
  {
    "id": 397,
    "title": "Hiç yüreğin şaşırdı mı ?",
    "body": "Hiç yüreğin şaşırdı mı ?\nNereden geliyor bu iltimas ?\nTanrı göğsünü alıp gökyüzünden taşırdı mı ?\nNasıldı bulutlarda temas ?\n\nYeterince istiyor musun bilmiyorum\nAcaba için mi alışıyor bir heves ?\nYarının yarını olur mu göremiyorum önünü\nSonuçta sayılı aldığın nefes\n\nBelki pes edersen diye emin olmak için bekliyorum biraz.\nYoksa bu kafes enfes...",
    "category": "en_iyiler"
  },
  {
    "id": 398,
    "title": "Kendi kendime uzatmam gereken bir el var",
    "body": "Kendi kendime uzatmam gereken bir el var\nBunu kendime borçluyum.\nUçurumlar beğenirken ruhum \nYavaş yavaş geliyorken uykum\nTehlikeli bir hal alıyorken durum\nUmrum ar\nAman kime incinmesin.\n\nSakin kal , belki de süpermen sensindir.",
    "category": "en_iyiler"
  },
  {
    "id": 399,
    "title": "Özgürüm",
    "body": "Özgürüm\nKan kusa kusa \nKıza kışa yaza\nSon bula bula eminim bugüne\nKaç defa uyanacağım derdi başa\nGelmeyecek bir daha ayaz\nİyiyim çünkü özgürüm",
    "category": "en_iyiler"
  },
  {
    "id": 400,
    "title": "Ya tek başımayım bu yolda ya hep beraberiz ve ulaşıyoruz sonuca",
    "body": "Ya tek başımayım bu yolda ya hep beraberiz ve ulaşıyoruz sonuca\nBu, günü geldiğinde söyleyeceğimiz şarkı olunca\nÖylesine özeliz ki bu nehir bizim için taştı yolundan\nKelimelerle döşeli bu yolu neler zorluklarla aştık\nBaktığında hepimiz bir kaç masum aşktık\n\nGözlerime inan yalanla ağlamıyor bebekleri\nTek istediği anlaşılması tüm söylediklerinin",
    "category": "en_iyiler"
  },
  {
    "id": 401,
    "title": "Korktuğum şeyin başıma gelmesi an meselesi",
    "body": "Korktuğum şeyin başıma gelmesi an meselesi\nEn ideal mesafesi 2 bişey \nEmin olamıyorum hangisi\nYinede sor.\nEn olası esamesi ise olabildiğince dar bir kalıpta ve çok zor\nBen olmazsam nasıl olacak bu hikayenin son kişilik destansı hikayesi ?\nDoktor !\nDüşüncelerim mosmor !\n\nÖylesine mi bu hazine ?\nBu Dünya bir misafirhane\nEn amiyane tabiriyle yok oluş son bulup\nGösteremeyecek değil mi yolu bilen bir tanesi ?",
    "category": "en_iyiler"
  },
  {
    "id": 402,
    "title": "En iyi yaptığımı düşündüğüm şeyden bahsediyorum",
    "body": "En iyi yaptığımı düşündüğüm şeyden bahsediyorum\nEn güzel yaptığım şey\nEn özel\nEn harika\nEn muhteşem olanı bugüne kadar olanlardan\nSeni seviyorum seni severek\nÖzleyerek , isteyerek , hissederek\nSesim titreyerek\nSeni seviyorum imrenerek\nGöstere göstere seviyorum herşeyini\nBir hayatı geçirmek istiyorum yarıma seni ekleyerek\nÖmrümü gördüm gözlerini seyrederek\nEn iyi yaptığımı düşündüğüm şeyden bahsediyorum\nSeni severek\nDeli gibi hemde ..",
    "category": "en_iyiler"
  },
  {
    "id": 403,
    "title": "Yalan !",
    "body": "Yalan !\n\nBiliyorum vaktin yok bunu okumaya\nİkimiz de biliyoruz aslında vaktin geldiğini\nKaç gecedir uykuların kaçıyor\nKaç gecedir uyanıyorsun ikinin köründe\nKaç kere kaçtın sandın \nKaç cümle daha sığacak hikayene ömründe\nKaç kere seni ansın\nKaç hecede anlatmaya çalıştım ben sana seni\n122\n\nNasılsa saymayacaksın..",
    "category": "en_iyiler"
  },
  {
    "id": 404,
    "title": "Zor geliyor geri gelememesi",
    "body": "Zor geliyor geri gelememesi\nSınırları zorluyor dönememesi\nYakıyor zihnimi\nVeriyor zehrini\nDinlemiyor amanı\nYavaşlatıyor zamanı\n\nYoruldum \nAynı yerden peşpeşe geldi darbesi\nÜst üste bindiği gibi hamlesi\nSöyledi ismimi\nÇağırıyor zifiri\nKolaylaştırıyor telaşı\nKabul edecek mi merakı ?",
    "category": "en_iyiler"
  },
  {
    "id": 405,
    "title": "Ben mazlum bir çocuğum",
    "body": "Ben mazlum bir çocuğum\nGenelde ölenle ölürüm\nTakriben daha 10 yaşını görmeden gelir hemen gün dönümü",
    "category": "en_iyiler"
  },
  {
    "id": 406,
    "title": "Ben istiyorum diye istemiyorlar",
    "body": "Ben istiyorum diye istemiyorlar\nYapamazsıncılıklar\nGökyüzü yukarda işte herkes biliyor\nGönlümdeki kuşlar uçamayacaklar\nSizin yüzünüzden\nKanatları ne işe yarayacak bilmeyecekler\nRüzgara değemeyecekler\nBir gün artık istemeyecekler bile\nBulutlar ?",
    "category": "en_iyiler"
  },
  {
    "id": 407,
    "title": "Camın yansımasındayım bu akşam",
    "body": "Camın yansımasındayım bu akşam\nKahvem var , yarım paket kadar da sigaram\nGözlerimde isli korkular ve sinsi planlar \nMerak ettirdikleri geçmişte olanlar\n\nBilemiyorum ne kadar daha sürecek bu savaş\nYıllara alışıyorum yavaş yavaş\nBiraz da telaş\nBiraz da ,  kendinden çık etrafı gez dolaş\n\nBuna alış\nBu kayıp\nBu\nBenimle benim aramda bir mesele\nMerhaba ben , gel benimle tanış.",
    "category": "en_iyiler"
  },
  {
    "id": 408,
    "title": "Sonu ne bu hikayenin bana daha en başındayken hazır anlat bileyim…",
    "body": "Sonu ne bu hikayenin bana daha en başındayken hazır anlat bileyim, bilmeliyim...\n\nÜzüleceğim diye mi buruk mutluluğum ?\n\nGeçeceğim yollar mı uzun ?\n\nSebebi bu muydu durgunluğumun  ?\n\nBu gece kaçsın mı uykum ?\n\n?",
    "category": "en_iyiler"
  },
  {
    "id": 409,
    "title": "Yaşanabilecek tüm ihtimalleri biliyorum",
    "body": "Yaşanabilecek tüm ihtimalleri biliyorum\nDünya benim avuçlarımın içinde\nKainatta bir yerdesin duyuyorum işte sessizliğinde her bir halin başka bir biçimde\nCevaplar aratma niçinde\nBu sefer sen bana hesap ver.\n\nBu oyunu oynamamı sen istedin ve\nOlmamı istediğin hiç olmaya çabalıyorum ben işte\nGörüyorum kimsesizliğinin hissizliğini\nNeden bu kadar blöf beden ?\nBunca insan arasından kaçıncı bu ben ?\nBelki biri bana 2 der. \nSonra gider.",
    "category": "en_iyiler"
  },
  {
    "id": 410,
    "title": "Sabahın en erken saatinde uyanırsın ya hakaret eder gibi geceye",
    "body": "Sabahın en erken saatinde uyanırsın ya hakaret eder gibi geceye\nGüneş doğmak üzeredir üzerine\nSabah bekler dilinden ilk heceyi\nBelki Bis\nBelki Gün\nBelki Öf\nBelki Dün\nBugün\n\nDünyanın dünü yoktur bunu anlatmak ister ya sana semazen\nDöner kendi etrafında başı , kolları etrafında başın\nSöylesene kaç senin yaşın ?\nKaç lokmalık ömrün aşın ?\nKaç gündür sınavdasın be canım kardaşım.\nKaç dündür ?\n\nÖfkelenmez güneş , kendisi candır esasen\nSıcaktır mecazen\nGünaydın kainat ben de varım semazen\nSöylesene kaç defa döndü tabiat\nKendini sürekli yeniden bulup durdu , bu da mecazen\nKaç kelime kullandılar bu diyarda\nKanunları yazanlar uydurdular açıklara\nBir Bismillahirrahmanirrahim süresince yakın ve kısa mesafen be kardaşım.\nİçinden söyle duymasınlar",
    "category": "en_iyiler"
  },
  {
    "id": 411,
    "title": "Bu sefer ellerim avuçlarımda kavuşuyordu sanki",
    "body": "Bu sefer ellerim avuçlarımda kavuşuyordu sanki\nBelki en iyisi de bendim\nYordamın sırlarını öğrenmişim\nYardımın sınırları geniş\n\nKelimelerle oynuyorum sanki\nCümlelerce anlattığım da benim\nOrtamın sorunlarına imrendim\nKaç kere yardımını sordum \nİnanmadı işte !\nKaç kere avuçlarına koştum\nYetiş diye!\nKaç kere ?\nYetiş",
    "category": "en_iyiler"
  },
  {
    "id": 412,
    "title": "Yapmaktan vazgeçirdiğiniz bütün hikayelerim",
    "body": "Yapmaktan vazgeçirdiğiniz bütün hikayelerim\nSen dahil herşeyimden biraz\nİtirazım var bu düzene\nYazdığım yazgım bu , böyle bütün kelimelerim \nSöz hakkımı son hakkımda bana verin\n2 güne öleceğiz farzedin.\nNe olur !\n\nBeni dinleyin çünkü konuşmayacağım\nBeni okuyun işte  susmayacağım\nBeni anlayın artık anlatmayacağım \nBeni öldürün ki yok olmayacağım dediğim gündeyim\nKendimi gerçekleştirdiğimden beri\nMisafirim.\nBoynu bükük gündemin.\nAhir zaman alametleri.\n\nBu gece Tanrıyla konuştum.\nHayvanlarla anlaştırdı.\nİnsanlarla barıştırdı.\nBitkilerden alıştırdı.\nKainatın en yüksek minaresinin 2. Şerefesinde ezan ile tanıştırdı.\nKendim ile yarıştırdı.\nKendimi kendimi gördüğümde buldum.\nNedense hiç şaşırtmadı.\n\nTek bir dilek hakkım varmış.\nİnsan.\nOnu da sana kullandığımdan aklım kaymış.\nİnsan.\nBen seni değil Allahı memnun etmeye çalıştığımdanmış anlamadığın yanlış.\nİnsan\nSenin canına okuyacak metin benim.\nİnsan\nDaha hızlı yakıştırdım.\nİnsan.\nNefret ile barıştıdı.\nİnsan.\nAynayı kendime bakmadığımda gördüm.\nİnsan.\nNereye gidelim ?\nAkıl danışabileceğim 2 tane akıllı kaldı mı benden daha deli ?\nİnsan ?\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 413,
    "title": "Bir an için yokluğunu gösterse diyeceğim ki her şey yalanmış tamam…",
    "body": "Bir an için yokluğunu gösterse diyeceğim ki her şey yalanmış tamam.\nSadece tek bir boşluk istiyorum anlatılanlara inanmak için.\nSen bir hiçsin.\nKusura bakma öylesin.\nBu hoşuna gitsin yada gitmesin.\n\nYarından ümidini kes , yarın yarın..\nBen sana bugün bana dünden kalan sözcükler kadar mirasım.\nİster kabul edersin istersen reddedersin.\nSen bilirsin.",
    "category": "en_iyiler"
  },
  {
    "id": 414,
    "title": "Yıldızlar parlak mı sahiden ?",
    "body": "Yıldızlar parlak mı sahiden ?\nGüneş daha soğuk olamaz mı ?\nAy anca bu kadar yaklaşabildiyse ?\n\nYa yanlışsa anlatılan herşey \nHayat sahteyse?\nRüyaysa bu yaşanılanlar\nTanrıysak mümkünse\nTanrı nerde ?\n\nYa yıldızlar güzel bir son için göz kırpıyorsa ?\nFarkettiyse olanları\nGüneş varını yoğunu ortaya koyuyorsa ?\nSönüyorsa yanmaktan vazgeçmiyorsa ?\nYa Ay bu kadar yaklaşabiliyorsa insanlara ?\nGüneşin gece habercisi\nO da biliyorsa \nBu rüyayı gerçek kılmak için mi dönüyor Dünya?\nYa ölüyorsak ?\nDoğuyor muyuz ?",
    "category": "en_iyiler"
  },
  {
    "id": 415,
    "title": "Sen bilemezsin ,",
    "body": "Sen bilemezsin , \nSöyle ya , valla ! \nNerelerden dolaşıp aklına gelsin ?\nZaman kaybın yok, sen hepimizden hürsün.\nAma herkes bir gün ölmek zorunda dostum, işte bu yüzden yüzün de gülsün biraz.\nDünya senin de etrafında dönsün.",
    "category": "en_iyiler"
  },
  {
    "id": 416,
    "title": "Bütün şarkıları sana yazdıran (",
    "body": "Bütün şarkıları sana yazdıran (\n\nKopardığın çiçeklere kızmayan\nSeni en sonunda affedecek olan yorgun düşmüş bedenini\nKalmayacak ,soran sormayana okuyacak bu destansı kiyayeyi\n\nBu kadar değil bu yük , bu kadar muazzam olan bir sevgi seli\nGeri dönerim sanarsınız\nBana merak edip sorarsanız\nAlıp başımı giderken bana beni azad ederek gülümseyin\nSizi yalnız bırakıyorum\nDarılmazsanız\nÖğle vakti gidiyorum ben\nAnlayın şimdi anlayabiliyorsanız başka bir tende\nTaklit denemeler\nHayret edilecek gözler\nKafiyesine bakmadığın bir şiir\nAdını sormadan gittiğin yeni bir şehir\nGibi..  )",
    "category": "en_iyiler"
  },
  {
    "id": 417,
    "title": "Sonum son olacaksa olsun",
    "body": "Sonum son olacaksa olsun\nUğrunda ölmeye razıyım\nDursun diye artık şeytan ve sussun diye artık nefis\nBunu isteyen çok, ben 2. bazıyım.\n\nBelki 1 , belki 2 belki 8 milyar insan\nBelki sen belki ben belki bitki ya da hayvan\nBelki ay belki güneş belki evren belki sonsuz\nBelki dündü belki yarın hangisini sayayım ?\n\nSöyle bana ey zalim hangi birinden başlayayım ?",
    "category": "en_iyiler"
  },
  {
    "id": 418,
    "title": "Başkası olsun biri farketmez",
    "body": "Başkası olsun biri farketmez\nYeter ki bitsin bu akılalmaz savaş\nYalan söyleyen yalanı söyletmez\nDoğru söyledim 2. Köyde\nÜçüncü köy affetmedi\nDördüncü köy farketmez\nBana öl de öleyim\nÖl de öl deyin\nYeter ki bitsin bu akılalmaz savaş\nSulh ile yanyana göçmeye köleyim\nBaşkası olsun biri farketmez\nBana kuşlar söyledi\nKefiller\nKuşlar yalan söylemez\nYanlışı gösterdim doğduğum köyde\nÖnce endişelendiler\nSonra rüya deyip elime bir bomba yerleştirdiler\nNeşelendiler buna bana yollar gösterdiler\nGitmem dedim bana diğer köylerden bahsettiler\nKuşlara baktım göç etmişler\nPeşinden gittim kanatlarının çırpı seslerinin\nKurtuluşum ölümdeyken\nDevam ettim sonunu görene kadar gerçeğin\nBaşkası olsun farketmez , on oldum ben\nYeter ki bitsin bu akıl almaz savaş\nSon olsun \nKuşlara katıldım ben.\nUzaklaştık yavaş yavaş",
    "category": "en_iyiler"
  },
  {
    "id": 419,
    "title": "Düşüm sonsuz bir yalnızlık",
    "body": "Düşüm sonsuz bir yalnızlık\nHerkesten uzakta , her yerden ırak\nAcım çok büyük bana dokunma\nBeni kendi halime bırak\nBen tek başıma başarırım\n\nHayalim saklamam gereken bir mücevher\nRuhum bedenime oldukça uzak\nKelimeler tek dostlarım\nŞarkılar yoldaşım\nSadece onlarla konuşup onlara sorarım\nBitecek mi bir gün bu bitmeyecek savaş ?",
    "category": "en_iyiler"
  },
  {
    "id": 420,
    "title": "Elim yüreğimde bekliyorum kendimi",
    "body": "Elim yüreğimde bekliyorum kendimi\nYıldızlardan bir haber mi gelecek ?\nYoksa bir süpriz mi hazırlıyor bana gelecek\nRölantide çalıştırıyorum zihnimi\nÇünkü konuşursam kelimeler yetmeyecek\n\nBelki bir rüyadır bu 2 yaşında gördüğüm derin\nBelki annem uyandıracak birazdan , belki  alnımdan öpecek beni\nHer şeyi bilmek mümkünmüş , hayat daha demin\nElbet kader ağlarını benim için de örecek",
    "category": "en_iyiler"
  },
  {
    "id": 421,
    "title": "Bir öfkem varsa...",
    "body": "Bir öfkem varsa...\nBendeki sana...\nGözyaşların varsa...\nAğla , sana...",
    "category": "en_iyiler"
  },
  {
    "id": 422,
    "title": "Uçurumdan atlıyormuş sessizlik",
    "body": "Uçurumdan atlıyormuş sessizlik\nRüzgarken gözlerini yaşartan sessizce\nNasıl yani ? Nasıl olabiliyor böylesine bir densizlik ?\nVe nasıl böyle eşsizce hatırlanır hatıralar.\n\nHer yerde seni arıyordum\nAklımın en derinlerinde neredeydin ?\nSana soracak bir soru saklıyordum hayatımın ilk çığlığından beri\nBağırıyordum\nBenleydin !\nSenleydim.\nDeminden geri",
    "category": "en_iyiler"
  },
  {
    "id": 423,
    "title": "Azalır mı geçmişin yüzünde bıraktığı izler ?",
    "body": "Azalır mı geçmişin yüzünde bıraktığı izler ?\nBiter mi siyah ve beyazın gri savaşı ?\nAyağa kalkıp koşar mı kan revan dizler ?\nİzler mi gözler bunu karanlık yavaş yavaş aydınlığa alışırken ?\n\nBu hikayenin kahramanları !\nBu yaşananlar bir korku filmi değil mi gözler önünde  ?\nSöyleyin !\nİster misiniz zaferi bir anda göğsünüz özgürlüğe sözler verirken ?\nBir bilenle tartışırken hayat ne kadar da zor ve güzel !",
    "category": "en_iyiler"
  },
  {
    "id": 424,
    "title": "Zamanda yolculuk başlasın...",
    "body": "Zamanda yolculuk başlasın...\n\"Yarın\" , istersen yarım kalan mutluluklarımı da tamamlarsın...\nYolculuklarımı sabahın en erken saatlerinde severim ederim , bilirsin , bunu anlarsın ,\nBelki bana  umutlardan bir yolluk da hazırlarsın.\nHatta atla gel yanıma , beni baştan yaratmakla başlarsın...\n\nGittiğim yollardan gözümü ayırıp baktığım gökyüzü\nGündüz dostlarım Güneş ve bulutlar\nGece güzellerim Ay ve bütün yıldızlar\nSadece sizlere bakıp düşünürdüm sonsuzu\nArtık geri kalan süremizde düşünemiyorum onsuzu.\nŞimdi yüreğimde minik adımlarla dört nala koşuyor umutlar\n\"Bugün\" \"Dün\"'den daha çok şey anlatıyor dinlediğim şarkılar.\nHarikalar !\nÇok zor  telaffuzu.",
    "category": "en_iyiler"
  },
  {
    "id": 425,
    "title": "Aklında tutamadığın anılardan her daim hayatında olanları çıkarıp…",
    "body": "Aklında tutamadığın anılardan her daim hayatında olanları çıkarıp koyma bir kenara yeter ,\nDerhal göğe at !\nTopla orda biriktirdiklerini\nYeni bir çağ yarat , dahasından da beter\nBiraz sabır , biraz sebat.\nHakkında atıp tutan nefsin ıslığına şapka çıkarırken vicdan\nYokla yitirdiklerini\nHiç mi yok lan bitirdik mi hepsini ?\nElimdekiler ?  Vay anasını..\nÖzellikle sanat.",
    "category": "en_iyiler"
  },
  {
    "id": 426,
    "title": "Ya hu.",
    "body": "Ya hu.\n\nYa hakkaten aklımda saklıysa sır\nYa hak edenler için aklımda tutulmuşsa nasır\nYa sulh ile barışırız , yakışırız güneşle \nYa da yanar bu hasır\n\nYa haklıysam ve yardımda saklıysa hızır\nYa tak ettiyse ve kavrulacaksa bu asır\nYa yurt olur ve birleşiriz telaşla\nYa da sonumuz ve tavır hazır.\n\nYa dönemezsek bir daha geri\nYa gidemezsek bir yere yeni\nYa yarını taşırırız birlikte\nYa da dün bugünde kalır\n\nYa ölmezsek ölünce\nYa sönemezsek yanarken\nYa aşk ile yaşarız ikiliklerde\nYa da biter sabır\n\nYa ikna olamazsan aklımla\nYa ikra , ya ikram \nYa meşk ile coşarız birlikte\nYa da üzer kahır\n\nYa yanarsak anla ne olur\nYa anarsak vahlarımızı \nYa şevk ile buluşuruz iklimle\nYa da susar bağır.\n\nOğuzhan.",
    "category": "en_iyiler"
  },
  {
    "id": 427,
    "title": "Ilık rüzgarın ıslaklığı",
    "body": "Ilık rüzgarın ıslaklığı\nÖnümde sonsuzlardan hediye sanki çıplak dalgalar\nBelki mümkündür tabirinin , öyle işte , koca Güneş batıyor\nBak , aksak masamın üzerinde yazıyor aşkın galibi\nNe ümitlere atıyor sahibinin kalbi\nMecburu muyum tarifinin ?\n\nAl öyle ise..\n\nYüzüne bakınca geliyor aklıma çocukluğunun izi...\nHer nedense sonu başlamadan gelmiş biz oyun bu bizimkisi..\nDostane ve imkansıza dokunur gibi\nVe zamanın yalandan tesellisi",
    "category": "en_iyiler"
  },
  {
    "id": 428,
    "title": "Öyle işte",
    "body": "Öyle işte\nİlk gün çok kısaydı hikayemiz\nYollar vardı uzayacak\nŞarkılar dinlenecek\nŞiirler dökülecek bardaktan su misali\nSayfalar temiz\nGönüller bağlanmıştı birbirine \nSımsıkı düğümlendi şimdi hikayemiz\n\nÖyle işte\nBugün kimbilir kaçıncı dakikamızı kutluyorum\nHikayemizi yazıyoruz sen defter ben kalem\nYolları aşıyoruz sen sağ ben sol adım\nŞarkılar , aşıklar gönül tellerinden çıkan kelimelere\nŞiirlerin hepsi seni hatırlatıyor artık\nYeni sayfalar , yeni seyrüseferler\nÖmürlerimiz kısmetmiş birbirimize\nSımsıkı düğümlendi şimdi hikayemiz\nÖyle ..\n\nİşte !\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 429,
    "title": "Seninkisi bende vuku bulmuş bir masal",
    "body": "Seninkisi bende vuku bulmuş bir masal\nBenimkisi sende uykularından uyanmak gibi mesela\nBizimkisi kimsede olmayan bir günaydına mesele\nSanki kavgamız bizim , dünyayla savaşıyoruz misal\n\nHer sabah erkenden uyanıp koşuya çıkmak gibi\nÇiçekleri koparmadan koklamaktı amaç di mi ?\nRuhum yeni bir maceraya atılmak için hazır ve yürekli\nTanrının lütfu musun bu son günlerimde peri ?\nBu his çok tanıdık ama bir o kadar da yeni",
    "category": "en_iyiler"
  },
  {
    "id": 430,
    "title": "Bir denge var belli ki  Dünya , dönmezsen tutulursun",
    "body": "Bir denge var belli ki  Dünya , dönmezsen tutulursun\nBu hikayede başrol Güneş \nUmutların var daha ama yavaş..\nUnutulursun.",
    "category": "en_iyiler"
  },
  {
    "id": 431,
    "title": "Zorunda kalıyorsam katlanıyorum son 1 dakikalara",
    "body": "Zorunda kalıyorsam katlanıyorum son 1 dakikalara\nSusmak benim için bir haykırış biçimi aslında\nPeki deyip kaçıyorum zorlayanlardan\nYapmadığım hatalarda kendimi affediyorum\nMecbur sabrediyorum şaşırmadan olanlara\nBelkide mahfediyorum.\n\nYerinde sayıyorsan bundan bana ne ?\nEninde sonunda olduğun yere dönüyorsan dinle\nBen seninle sonuna kadar savaşırımda\nNeyse..",
    "category": "en_iyiler"
  },
  {
    "id": 432,
    "title": "Bağıra çağıra alevlerin arasından",
    "body": "Bağıra çağıra alevlerin arasından\nKüllerin yanıyor bak yeniden doğuyorsun sen \nCiğerinin en derinlerinden avazının çıktığı yere kadara\nÇelik gibi sağlam ve tamamsın\n\nBilmiyorum bildiklerini\nÇok farkeder farketmezsen terket cehennemini\nSıfırdan başlıyoruz hayata ruhum\nDüşme aynı hatalara 2\n\nKüsme asla aşka\nHikayenin sonu mutlumuydu hatırla bambaşkayı\nSaf ve temizsin saklanma\nSönük bırakıyorsun ışıkları\n\nBelki yeniden doğamayacaksın bir daha \nBelki bir ikincisi daha yok\nYorgunuz ikimizde sen başla\nBen yetişirsem tamamlarım aşkı",
    "category": "en_iyiler"
  },
  {
    "id": 433,
    "title": "O biliyor",
    "body": "O biliyor \nSen biliyorsun\nBen biliyorum\n\nNe bileyim , biraz garip değil mi ?",
    "category": "en_iyiler"
  },
  {
    "id": 434,
    "title": "En ön cephenin tam ortasında",
    "body": "En ön cephenin tam ortasında\nDüşman okunun karşısında\nSorun bende değil sende diyen herkesin istisnasız hepsi kendi davasının arkasında",
    "category": "en_iyiler"
  },
  {
    "id": 435,
    "title": "Sen seni sen yapan herşeyin bir kopyasısın , düşün ?",
    "body": "Sen seni sen yapan herşeyin bir kopyasısın , düşün ?\nBir bütünün parçasısın , taşın ?\nBelki bildiğin her şey doğru\nBelki bildiğin her şey yanlış\nSen bu Dünya için fazlasıyla meşgulsün\nBaşkasına alış...\nSessiz bir gerçekliğin tam ortasındasın\nKalbinin sesine danış...",
    "category": "en_iyiler"
  },
  {
    "id": 436,
    "title": "Hayal etmek benim işim",
    "body": "Hayal etmek benim işim\nBenim senin için bunu yapıyor olmamın yanı sıra bu içten içe farklı ve enteresan bir değişim\nBu gözlerimle gördüklerime beynimin yaptığı bir erişim\nİnce ince ilmek ilmek işlediğim el işim\n\nFazla zorluyorum evet \nBelki bir gün kabul edersin bu daveti\nPeki ne bunlara sebep ?\nBenim kendime fazla fazla gelişim.",
    "category": "en_iyiler"
  },
  {
    "id": 437,
    "title": "Alelade bir şehir ışığından ibaretti geçtiğin sokaklardaki aydınlık",
    "body": "Alelade bir şehir ışığından ibaretti geçtiğin sokaklardaki aydınlık\nBir çiğ damlasıydı gökyüzünden kaldırımlarına düşen\nSana danışırken gece hayranlığını\n\nBir omuz arardı üşüyen amaçların bir zamanlar\nBir gölge miydi karanlıkta üzerine düşen düşlerin ?\nBir hakkın kalmıştı, bir yardımlık\nO hakkı da boşa harcamıştın\nBiten aydınlıktı artık zifiri baygınlık\nŞaheser",
    "category": "en_iyiler"
  },
  {
    "id": 438,
    "title": "Uçuyorsam gökyüzü benim",
    "body": "Uçuyorsam gökyüzü benim\nKoşuyorsam yeryüzündeyim\nYüzüyorsam bir balık\nUzayda tanımlanmamış bir maddeyim\n\nGörüyorsan karşındaki ben miyim ?",
    "category": "en_iyiler"
  },
  {
    "id": 439,
    "title": "Sahiplendim üzgünlüğümü",
    "body": "Sahiplendim üzgünlüğümü\nDevirdim düzgünlüğümü\nAklımın pürüzsüzlüğünü süzdüm\nYaz yaza yaza , kışın yaza üstünlüğünü gördüm\nGerçeği gördüm orda azar azar gidiyordum aza\nAkıl masamın bir ayağı kısa imiş\nBöyle geçecekmiş ömrüm\n\nÇoğu zaman gözüm arkada kaldı\nElvedalar düğümlendi boğazımda\nYıkıldı uzaklarım bezgin argın\nZaman gösterdi uzanamadığım uzağı\nGüzel olmak istemiştim oysa\nYangınlarım söndü \nNefesi dönmüştü fırtınalara\nDalgalarım dindi\nDengeleri dönmüştü beyazlara\nAdım adım senin oluyorum burafa\nZararlarımı affet şimdi , yüzümü kızartma orada.",
    "category": "en_iyiler"
  },
  {
    "id": 440,
    "title": "Sabahların en sevdiğim saatlerinde beni uykularımdan uyandıran ben…",
    "body": "Sabahların en sevdiğim saatlerinde beni uykularımdan uyandıran ben düşüncesi dinle\nKabuslar gece yarısınınken rüyalar olacakların habercisi hemde güzellikle...\n\nYoluna çıkmaz mıyım sanırsın özellikle ?\nYapmaya cesaretim mi yok ?\nAldanırsın...\n\nYalanlar ; yalanlar..\nDualarım alır seni sana katar ve beni tamamlar...\nYalvarırsın...",
    "category": "en_iyiler"
  },
  {
    "id": 441,
    "title": "Yakınmıydı uzaklar ?",
    "body": "Yakınmıydı uzaklar ?\nDurakaldığım yerde aziz mi mesafelerim ?\nKutsal varlık yardım et\nBulayım kendimi yoksa ne ederim ?\nİhtimaller denizinde kaç ederim ?\nKağıtlarca küstüm sana\nKalemlerce yalvardım\nMürekkeplerce ağladım\nOyunmuydı tuzaklar ?\nUmursamaz tavırların hepsini ezberledim.\nEy Allahım yardım et\nAklım avuçlarımda sana benzeyip\nBir ihtimal taş üstünde taş ezerim\nYeniden döndüm yerime\nDöndüm olduğum yerde peşipeşine\nGünlerce aydım sana\nAylarca yıldım kendi başıma\nYıllarca kızdım varoluşuna\nŞimdi neden yalnız ve mağruruz ?\nNeden hala neden dolu sorular ?\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 442,
    "title": "Olacaklardan ben sorumluyum",
    "body": "Olacaklardan ben sorumluyum\nLütfen beni alın artık ben yılların yorgunuyum\nKelimelerin sesiyim\nDuyguların uyumuyum\nBen bugün yarını düşlerken dünden beri\nAcaba gece olduğunda huzurumla uyur muyum ?\nDeğişmez söz huyum suyum\nAlt tarafı ömürlük oyun...",
    "category": "en_iyiler"
  },
  {
    "id": 443,
    "title": "Kelimelerden nefret ediyorum bazen",
    "body": "Kelimelerden nefret ediyorum bazen\nYan yana gelişlerinden\nAkışlarından cümlelerde\nYutuluşlarından hücrelerce\nKurtarışlarından zor dillerde\nKopuşlarından konulardan\nSapışlarından sağa sola\nYapış yapış pelesenk hallerinden\nÇıkışlarına ağızlardan yan gelişine\nBazen bir panikle kopuşlardan\nGözyaşlarımı tuttum , ihtimaller aktı gözümün önünden , sellerce gözyaşına ağladım \nAnama ağladım , abisine , abisinin abisine\nBir vahim durumdu hakikaten\nFarklı olan ne kadar duygu varsa attım hepsini göğe\nGönlüme ferahlığı veren \nEvladına bu cümleyi kurduran düzenine sözüm yok ey Allahım\nZorum yetmeyen kelimelerime\nYüreğimin tökezleyen diline",
    "category": "en_iyiler"
  },
  {
    "id": 444,
    "title": "Şiirim sensin bu sefer , sen kendini bana burdan arattın.",
    "body": "Şiirim sensin bu sefer , sen kendini bana burdan arattın.\nEy şiirlerimi de yaratan Tanrım , beni neden yarattın anladım.\nAnlatıyorum.\n\nİçimde küçük bir ateş , bir umutluluk hali\nSahi , bu neden , neden adım fani\nNeden yarattın barışların karşısına koyduğun harbi ?\nNeden dualar hep kelimelerden ?\nİş mi yani ?\nKaldırabileceği kadarının fazlasını kaldırabilirdi bu beden\nBaş edemedim demem\nBana kelimeleri tesbih gibi dizmeyi lûtfederek öğreten\nYanındakini özleten lütfen\nUzağın yolunu gözleten\nBir bütünüm ben söz ve ten\nBeni bil\nBeni gör \nBeni duy\nBeni oku demiştin\n😉",
    "category": "en_iyiler"
  },
  {
    "id": 445,
    "title": "Bulut güzel de",
    "body": "Bulut güzel de\nYağmur ıslatıyor işte kimsesizliğimin hissizliğini\nGökyüzünde bir şeyler oluyor belli\nYoksa nasıl anlatayım yüreğimdeki belirsizliği\n\nVe soğuk ılığı derhal.",
    "category": "en_iyiler"
  },
  {
    "id": 446,
    "title": "Sonsuz derinliğin ve sonsuz genişliğin arasında bir tek senin başlangıcın…",
    "body": "Sonsuz derinliğin ve sonsuz genişliğin arasında bir tek senin başlangıcın ve sonun var.\nSen farkına varmazsan bu deliliğin her anına\nBaşka kim anlatabilir sana , Dünyada bilen mi var ?\n\nYa yanlış anlamışsın akıllılığı..\nYa atlatmışsın farkındalığı...\nBakış açında bir sorun var\nKavramışsın iki kişilik yalnızlığı\nHapsolmuşsun sonsuzluğa ama yerin dar",
    "category": "en_iyiler"
  },
  {
    "id": 447,
    "title": "Mesela herkes ölse",
    "body": "Mesela herkes ölse\nAynı anda başka bir meseleye geçsek\nMesela herkes rüyasında beni görse\nMuhabbet etsek tek tek\n\nKarışsa hayallerle gerçekler\nBirbiri ardına gelebilse kelimeler",
    "category": "en_iyiler"
  },
  {
    "id": 448,
    "title": "Dönn Dünya dön!",
    "body": "Dönn Dünya dön!\nİyilikler hatrına\nYan Güneş sende sön\nDevam etsin diye bu rüyâ.",
    "category": "en_iyiler"
  },
  {
    "id": 449,
    "title": "Gün gelecek sen de ihtiyaç duyacaksın şevkate",
    "body": "Gün gelecek sen de ihtiyaç duyacaksın şevkate\nİster istemez anlatacaksın sende\nO benim",
    "category": "en_iyiler"
  },
  {
    "id": 450,
    "title": "İlkbahar kış sonbahar yaz",
    "body": "İlkbahar kış sonbahar yaz\nGönlümün iklimleri bozulmuş bak\nKaybettiklerine yas tuttuğum kazandıklarım \nCanlarım birikmişte doğrulmuşta\nBoşa gitmiş azaldıklarım\n\nSevin beni , sevince sevin , sevin ki mağlup olayım hemen\nSerin beni serin bir yere kurbanı olayım verin bunu\nDerin bir kuyudayım , yardım edin demem\nAğır bir uykudaykm , kabuslardan kabus beğen\n\nYeni bir duygu verin ki bana öğreneyim hatıramı\nVerin ki yazayım gökyüzüne öğrendiğim kadarını \nŞahit olayım yeryüzünün gülümsemesine gök yüzünden.\nSon bir defa daha lütfen.",
    "category": "en_iyiler"
  },
  {
    "id": 451,
    "title": "Aklımda bir iki plan",
    "body": "Aklımda bir iki plan\nBirinde ölü taklidi yapıyorum\nDiğerinde harzemşahım felan\n\nBana sonuna kadar inan\nŞaka yapmıyorum\nDilenmiyorum aman\n\nBu yaman bir yolculuk be tamam\nSöyleyeye söyleye dilimde tüy bitti\nYarın geldi çattı dün oldu gitti\nBiliyorsan oku ardımdan bir elham",
    "category": "en_iyiler"
  },
  {
    "id": 452,
    "title": "Alışınca yalnızlığa yıkıldı ya tüm kaleler",
    "body": "Alışınca yalnızlığa yıkıldı ya tüm kaleler\nYakıldı ya gemiler\nBu güzel bahar zulmünden kurtulamadın sanma\nDaha özel zamanlar olacak \nİnanamayacaksın gücüne.",
    "category": "en_iyiler"
  },
  {
    "id": 453,
    "title": "Nasıl anlatsam...",
    "body": "Nasıl anlatsam...\n\nKırmızı bir balonun gökyüzüne uçmayla sıkı sıkı çocuğa tutunmak arasında kalması gibi işte...\n\nİplerim de senin elinde...\n\nGökyüzüm de senin...",
    "category": "en_iyiler"
  },
  {
    "id": 454,
    "title": "Bekliyorum gelecekler",
    "body": "Bekliyorum gelecekler\nOnca kalabalığın arasında yalnız bırakıp\nİçimin sesini açıp ;\nİşte sana gerçekler diye bakıp\nBana Dünya'yı verecekler\n\nAl işte kalan zaman sana\nBiraz inansana \nAcele etsene diyecekler\n\nGel işte bırak\nBurası bir tuzak\nUzak dediğin yakın\nYakın dediğin uzak diyecekler\n\nBu kadar bak\nBu kadar bu hayat \n\nBir meşale yakıp\nBana karanlığa yürü diyecekler\n\nKötüler iyiler\nKötüler , iyiler.",
    "category": "en_iyiler"
  },
  {
    "id": 455,
    "title": "Olmayan karakterlerimin her biriyle tartıştın",
    "body": "Olmayan karakterlerimin her biriyle tartıştın\nBen yarıştım sen \"yarıştın\"\nElime yüzüme bulaştırdın.\nDolmayan bir bardak gibi\nSolmayan bir yaprak gibi\nÇorak bir toprak gibi\nGelip bana alıştın.\n\nKim bilir hangi hatıramdı hayır dediğimde sataştığın\nBizi bile, bile bile yokluğuna alıştırdığın\nBir varmış bir yokmuş ile iki ile tanıştım ben\nBen kendime uzaklaştım , kendimdi bana yanaştığım.",
    "category": "en_iyiler"
  },
  {
    "id": 456,
    "title": "Bir çuval çöpe atılacak sevgi birikti",
    "body": "Bir çuval çöpe atılacak sevgi birikti\nAnneminkiler hariç\nOnun yeri ayrı",
    "category": "en_iyiler"
  },
  {
    "id": 457,
    "title": "Yardım et",
    "body": "Yardım et ölüyorum.\nSana verdiğim sözden dönüyorum.\nSadece önümü görüyorum.\nNe olur beni anla !\n\nYardım et gidiyorum\nArkama bakmadan\nAklımda sonsuz soru işareti\nGidiyorum insan\nBedeli ben ödüyorum.",
    "category": "en_iyiler"
  },
  {
    "id": 458,
    "title": "Issız bir sokaktan geçerken",
    "body": "Issız bir sokaktan geçerken\nGözlerini alamadığın bir yalnızlık\nSaçlarına düşen o görülmeyen ıslaklık\nSokak lambaları da kesin titrektir\nArkandan gelen hızlı hızlı adımlar \nSeni ürpertir\nBir sustalı bıçağın sesini duyunca bel hizanda\nSonum mu geldi diye düşünmeden edemezsin\nSaplanınca sırtına o hainin bıçağı\nUyan\nGerçek hayata hoşgeldin",
    "category": "en_iyiler"
  },
  {
    "id": 459,
    "title": "Gökyüzü de bi öyle bi böyle",
    "body": "Gökyüzü de bi öyle bi böyle\nGündüz yağmura hasret bulutların ardında güneş\nGece güneşi unutturan yıldızlar her yerde\nBana söyle şimdi insan\nKonuştuğun hangi lisan\nKaç kişi öldü bilsen\nAçlık ve susuzluktan.",
    "category": "en_iyiler"
  },
  {
    "id": 460,
    "title": "Yarın , bugün çok geç olmadan gelmiyor bugün",
    "body": "Yarın , bugün çok geç olmadan gelmiyor bugün\nYarınlar sakin Bugünler durgun\n\nSırasını salacakmış gibi bir hüznün\nYarasını saracakmış gibi hüzün\n\nİçin en derinlerinde bir kor\nNe yanıyor ne sönüyor bir garip\n\nElini uzatmış tutabilsin diye \nKolu varmıyor da bağlı işte yetişmediğine\n\nSon bir hamle de yetmiyor var güçte.\nYarın bugün çok geç kalmadan gelmiyor madem\n\nGeç kalmamışsa hala matem\nNeden son bulmuyor son.\n\nNeden bu sefer güneş doğmuyor ?\nİkiletmeden gelsen ya artık.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 461,
    "title": "Gökyüzündeki müzakereden bir haberdim önceden",
    "body": "Gökyüzündeki müzakereden bir haberdim önceden\nGökyüzünden gelen müziği duydum , yıldırımlarca pesten\nGök gürledi ben gürledim kalkamadığım oturduğum yerden\nGöğün böğrü delindiğinde bir bakmışım geçivermişim serden\nİnce de bir yel esiyordu , bilemiyorum nerden.\n\nBir haber bekliyorum , ölmek için yaşam dolu\nGöğe sessiz kalıyorum , dinliyorum sonumu\nKaç yaşımda başlamıştı kaderimin zorlu yokuşu\nKaç yıl daha ömrüm var , kaç yıl daha yaşarım\nBelki birden oluverir , kaldığıma şaşarım.\nİnce de bir yel eser , bilebildiğim yerden.\n\nVer ödülümü , al ömrümü.",
    "category": "en_iyiler"
  },
  {
    "id": 462,
    "title": "Yanıbaşımdasın Dünya'nın öbür ucundan bir kara haber gibi gelerek",
    "body": "Yanıbaşımdasın Dünya'nın öbür ucundan bir kara haber gibi gelerek\nSıkışıp mı kaldık burada ?\nŞaşırıpta deme mi öyle benzemiş mi hep ?\n\nNe olur , karışıp durma hayallerime\nTekrar ettirme bana onları tek tek.",
    "category": "en_iyiler"
  },
  {
    "id": 463,
    "title": "Acaba nasıl ölsem ?",
    "body": "Acaba nasıl ölsem ?\nMesele önce bi ölümden dönsem\nÖtesinde ne varmış bi görsem\nSonra karar versem\n\nGeçmiş kaybedilmeye değer mi ?",
    "category": "en_iyiler"
  },
  {
    "id": 464,
    "title": "Tam hazırım diyorum",
    "body": "Tam hazırım diyorum\nBir el dokunuyor omzuma sağ arkadan\nDönüp dinliyorum diyorum\nSusuyor o gizemli adam\nBu neyin uyarısı ?\nBu hangi tamamın yarısı ?\nBelli ki var yukarıdakinin bir tasarısı\nGökyüzündeki güneş ve hayat veren sarısı\n\nTamam diyorum gidelim\nBurada kalmaya kalmamıştı zaten nedenim\nSenin de olmalı bir sebebin\nHala susuyorsun be adam\nSükunette mi saklı edebin",
    "category": "en_iyiler"
  },
  {
    "id": 465,
    "title": "Senin düşüncelerin",
    "body": "Senin düşüncelerin\nBenim fikirlerim\nÇatıştılar \nAyrılık meselesine alıştılar başlamadan\n\nSenin sabrın\nBenim sigaralarım\nBittiler \nSona gelince savuştular sağa sola anca\n\nSenin gerçeklerin\nBenim hislerim\nSevişmediler \nSavaştılar uzlaşmadan\n\nElimize yüzümüze bulaştılar\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 466,
    "title": "Mutluluğun elini tutma dedim",
    "body": "Mutluluğun elini tutma dedim\nUmutlanma yarınlara\nAlışacaksın buna , anlatacaksın soranlara seni\nBir yolunu bulup içinden çıkan hayırlara söyleyeceksin söyleyemediklerini\nBu sefer dinleyenlerden anlatanlara doğru yalan gerçekleri\nSessiz kalmak pahasına karışmadan \nYan yana karşıdan karşıya geçeceksin elinden tutup içinin\nYenilmeden merakına kendi kendini mahfedeceksin\nRoman bu ya ,\nBir tek soru bile sormam ki ,\nZehri de kendi elinden içeceksin.",
    "category": "en_iyiler"
  },
  {
    "id": 467,
    "title": "Bir mühlet konuşalım seninle gel",
    "body": "Bir mühlet konuşalım seninle gel\nMiskal kadar büyükçe bir müebbetle kalalım\nGel benimle yarın\nAnlatacakların var özünde\nTerkederken diyeceklerin var cebinde\nBugünler..\nAlma onları \nVerme hediye\nYan benimle\nTan vaktinde\nTam zamanı ve tam yerinde alışalım bu hisse\nYokluğunun hazanında buluşalım \n\nBir mühlet konuşalım seninle gel\nDünü ertelemeye çalışalım.",
    "category": "en_iyiler"
  },
  {
    "id": 468,
    "title": "Buralarda bir tanıdıklık ve loş.",
    "body": "Buralarda bir tanıdıklık ve loş.\nHem aydınlık hem karanlık , ne hoş...\nKimdir diye kime sorsam cevap yoksa cevap bulsam boş.\nDöner dünya etrafımda sende katıl , hemen  koş !\n\nAdını unutmaz bu şehir , mükkemmel bir histir\nDaha çok değil , biraz önce anıldı adın\nAşka gönülden bağlı mısın ? O ne güzel bir risktir\nŞarkılar söyletir \nŞiirler dinletir",
    "category": "en_iyiler"
  },
  {
    "id": 469,
    "title": "Merhaba",
    "body": "Merhaba\n\nBen tek , siz hepinizin\nFazla zaman kalmadı\nBükülmesine bileğimizin.\nİzin vermeyin yok olmasına dileğimizin.",
    "category": "en_iyiler"
  },
  {
    "id": 470,
    "title": "Sana bu ciddi meseleyi seni ne kadar ciddiye alarak anlattığımın farkında…",
    "body": "Sana bu ciddi meseleyi seni ne kadar ciddiye alarak anlattığımın farkında mısın ?\nDünya ölüyor !\nOturup buzlu kahvenin tadını çıkarırken sen\nZaman doluyor.\n\nOlası bir ani kıyamete ne kadar hazırsın dostum\nTamam , oluyor.\nSana seni çok sevdiğimi söylüyorum\nBunu hafife alma hasmım\nTanrı sınıyor , gittikçe ısınıyor.",
    "category": "en_iyiler"
  },
  {
    "id": 471,
    "title": "Aklından geçenleri düşün 1 , sana söylediği kelimeler bir dile ait…",
    "body": "Aklından geçenleri düşün 1 , sana söylediği kelimeler bir dile ait değil \nZamanda ne kadar da hızlılar , ki bir de söyleyemedikleri var , ama bu değil\nİçinde tutup , peşinde koşup , bir varolup bir yokolup\nÇok üzgünken özür dilerim ve sürem bundan emin\n\nAnlamı çok derin içime hapsedilen misafirimin\nKapalı bir kutuda gelen esameleri\nNe değişik bir hal ki bu gönlüme esen bir korku gibi serin bütün hezeyanlar\nTesadüf ki harikulade yaşamıştım ben bunu 2 kez\nVe bu , senin eserin.\nÜzgünüm , özür dilediğim için.\nİçinden gelen sesleri dinledin.",
    "category": "en_iyiler"
  },
  {
    "id": 472,
    "title": "İnsanlar büyüdükçe mi daha az gülüyor",
    "body": "İnsanlar büyüdükçe mi daha az gülüyor\nKüçüldükçe mi ağlıyoruz sözlerden\nÜzülünce mi bağlanıyor basiretimiz\nSüzüldü diye mi akıyor yaşlar gözlerden\nNeye hasretimiz ?\nNeler oluyor ?\nNeye istinaden özlemler\nNeye hasetimiz ?\nKime yöneliyor\nNeye göre güçlü eylemler ?\nNeden güneşe dönmezler\nGözlerinden öpmezler\nEl ele tutuşup\nSon şarkıyı söylemezler bir ağızdan\nNeden son bir söz vermezler ?",
    "category": "en_iyiler"
  },
  {
    "id": 473,
    "title": "Öyle bir geceydi ki yıldırımlar gökte",
    "body": "Öyle bir geceydi ki yıldırımlar gökte\nAlınlar yerde\nGökten yere tek bir cümle\nYa !\nYerden göğe tek bi niyaz\nHu !\nBu sefer olsun\nBu gece kün sün\n\nSessizliğin bastırdığı sesimi\nSessiz kaldığıyla kalsın sesim\nGök verdiğin an esini\nYerden göğe tek bir hevesim\nYa Hu !\nBu gece olsun\nDesin \n“Bu gece hürsün “\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 474,
    "title": "Olur da bir gün zamanı geriye sarabilirsem",
    "body": "Olur da bir gün zamanı geriye sarabilirsem\n\"Sıfır\" a gideceğim.\nYeniden hiç olabilmenin olayı buysa madem\nSonsuza böyle değeceğim.",
    "category": "en_iyiler"
  },
  {
    "id": 475,
    "title": "Rastlantısal bir göz yanılsaması bu düpedüz",
    "body": "Rastlantısal bir göz yanılsaması bu düpedüz\nİşimin gücümün ortasında bana şiir yazdıran bir ben\nGeceler zaten rüya , peki ya gözler önündeki güpegündüz ?\nNe kadar sahici...\nNe kadar sonsuz ?\nÜzdünüz efendim kendinizi\nNe yaparsınız onsuz ?",
    "category": "en_iyiler"
  },
  {
    "id": 476,
    "title": "Engebeli geri dönüşler",
    "body": "Engebeli geri dönüşler\nOlmaz olsun böylesi\nOysa ki ne kadar vaatlerde bulunmuştu gökyüzünden yakamozla ay\nDağları alnından öpmüştü sevdası\nVay gülüm vay\n\nHayallere dalamam artık bu gece\nSeni yanımda alıp götüremem de\nAğaçların arasından usulca giderim yine ayrılacağım o yere\nHey gidi günler hey",
    "category": "en_iyiler"
  },
  {
    "id": 477,
    "title": "Kalabalığın merkez ortasındasın",
    "body": "Kalabalığın merkez ortasındasın\nSirenler ve alarmlar ve patlamalar ve feryat var etrafında\nPeki sessizliğin asilliği ?\nPeki ya sessizliğin talihsizliği ?\n\nBakışlarına bakışları insanların\nTanış , daha düşünmeden düşününü taşınını\nAlışmasınlar ama buna , yükselt alıştıra alıştıra arşı\nBu uyanışın iki seçeneği var\nYa savaştıra savaştıra barıştırın\nYa barıştıra barıştıra savaştırın.",
    "category": "en_iyiler"
  },
  {
    "id": 478,
    "title": "Yeni bir başlangıç , ben 2. günündeyim",
    "body": "Yeni bir başlangıç , ben 2. günündeyim\nİnsanlar yabancı ,  bazıları hala insan değil\nBen kendimin 2 adım önündeyim \nVe bir sırrım var ve bir kaç kullanması yasak cümlesinde saklı meylimin\n\nGözlerine bakıyorum aynaya ait benin\nBir yandan tanıdıksın bir yandan yeni\nAslında sen busun der gibi bakma bana \nSavurma aklımı sağa sola rica ederim",
    "category": "en_iyiler"
  },
  {
    "id": 479,
    "title": "Olmuş olacak",
    "body": "Olmuş olacak\nBizdeki siz darmadağın\nKarmakarışık\nSağa soldan dön\nBir sevdadır aranıyor ömrüm\nGeçmişe küs geleceğe kızgın ve bön\nNe var elimde benden çalacağın hayat\nNe var elinde bana bıraktığın..\nSade son bir seyahat\nUmutlarım, unutlarım , gideceğim yön\nNe olmuş hep geri kaldıysam burnumun dikine\nHep arkadan bakmışsam peşin peşipeşine\nİçimdeki ateş yan artık bir an önce \nYa yak kavur hakkaten yada en dumansızından sön\nYa temelli git ya içimde kal bana benden geri dön\nZaman geçmeden ya yeniden doğ\nYa öl.\nNamağlup.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 480,
    "title": "Beni öyle bir sev ki geri dönüşü olmadan",
    "body": "Beni öyle bir sev ki geri dönüşü olmadan\nSevin sevinçlerine\nÖyle bir ateş ol ki sönüşü olmayan\nYan benimle , sonsuzluğu aydınlatalım.\n\nGöz yaşlarım var benim kim bilir kaç yaşındalar\nBenim kederlerimin bile üzüntüleri var\nHatta bir aklım var ki evlere şenlik\nBir tek ömrüm var aşkım , paylaşalım daha var\n\nBeni öyle başka sev ki güneş doğmadan\nGece kıskansın sevdayı görür görmez karanlıkta\nO an öyle bir ilk kez öp ki beni alt dudağımdan \nÜstün hatrı kalsın aşkın aydınlığında",
    "category": "en_iyiler"
  },
  {
    "id": 481,
    "title": "Ötesine geçmeden önce bütün alışkanlıkların",
    "body": "Ötesine geçmeden önce bütün alışkanlıkların\nBarışmak için önce geçmişinin samimi karanlığıyla\nKoşabilmek ufka\nOkşayabilmek için aşkı\nKendinle bağış\n\nSonra siyah hariç bir renk seç kendine\nKuşan yağmur gibi yağarken bir sabah şelaleden damlalar\nGeçsin altından hayatında var olmayan ıssızlık\nBağışlayabilirsen eğer affet bahsedilirse günahlarını\nAlkışlasınlar bir an bile durmadan\nCennetine hoşgeldin güzel adam",
    "category": "en_iyiler"
  },
  {
    "id": 482,
    "title": "Sorulması gereken sorular",
    "body": "Sorulması gereken sorular\nKonuşulması gereken konular\nTartışılması gereken hususlar\nKarşılaştırılması gereken durumlar var\n\nVerilmesi gereken cevaplar\nSöylenmesi gerekeni dürüstse cevaplar\nAşılması gereken sorunlar\nKarşılaşılması gereken yeni yüzler var\n\nAnlatılması gereken herşeyi anlat\nAnca konuşuruz bir solukta\nSesimde bir titremeyle kasımın soğuğunda\nAtlatılması gereken yeni kışlar var",
    "category": "en_iyiler"
  },
  {
    "id": 483,
    "title": "Bu işler böyle yürüyor işte uzun bir yolda yalnız başına kimsesiz",
    "body": "Bu işler böyle yürüyor işte uzun bir yolda yalnız başına kimsesiz\nNe seni anlayan bir beyin var ne de seni sarmalayan engin bir deniz\nÖyle yok olunacak bir hayat var sonunda seni tanımayanlardan habersiz\nBir yok oluş bu çaresiz\nSon mağlubiyeti zihninin\nDerin bir nefes\n\nSakin bir akşamın kızıl ve mor güneşinde kalabalık bulutlarım\nGönlünden geçen hayal kırıklıklarına beslediğin umutlar kadar masumlar uykuların\nKavuşana dek sürecek bu yolculuk alışana kadar bugünle yarınlara\nSöyle ne kadar daha ürpertecek bu ensemdeki gariplik beni\nSon dediğim her yenilgiye ilgimin\nNeresindeyim bir heves",
    "category": "en_iyiler"
  },
  {
    "id": 484,
    "title": "Çaresiz bir kimsesizlik gibi bu",
    "body": "Çaresiz bir kimsesizlik gibi bu\nİlelebet yalnızlık\nSonsuza değinen o hazin hikayelerden birinin sonu gibi karanlıkta\nDokunsan uzanamazsın\nBilsen bakamazsın\nOrdadır bilirsinde \nYarı yoldan dönerken arkana bile bakamazsın\n\nGövdemde kocaman bir hiçlik\nÖzlüyorum çiçeklerimi\nBunu bana nasıl yapabildin Tanrım ?\nNasıl bir hediye bu günlük güneşlik unutturan geçmişi..",
    "category": "en_iyiler"
  },
  {
    "id": 485,
    "title": "Oğuzhan olsan",
    "body": "Oğuzhan olsan\nO ol san kendini\nDünyalar kadar iri\nBir kum tanesi gibi \nEksikliğinde biri\nTamamlanamayacak kadar tam anlamayacak seni\nDaha bitmedi",
    "category": "en_iyiler"
  },
  {
    "id": 486,
    "title": "Gece sessiz",
    "body": "Gece sessiz\nMilyarlarca yıldız bir arada ben ıssız\nAynı anda aynı şeyi düşünüyor olmalılar kesin\nİpimi çektiler peşin\n\nYemin ederim demiştim demin\nBir arada olun da varsın yürüsün bu gemi\nBu ölüm kalım oyununda fena değil elim\nSizin değil",
    "category": "en_iyiler"
  },
  {
    "id": 487,
    "title": "Uzun uzun düşündürmedim seni demek ki",
    "body": "Uzun uzun düşündürmedim seni demek ki\nKısa konuşmalarda uyanıyordun belli\nZihnindekilerdensem.\nKarşımdaki insansın , ne değerlisin bilsen sen\nKelimelerin gücü adına 2\nDeliye dönersin daha derine inersem\nGideriz gelirsen.",
    "category": "en_iyiler"
  },
  {
    "id": 488,
    "title": "Düşüncelerden düşüncelere bir yol çizmiş aklım karışık",
    "body": "Düşüncelerden düşüncelere bir yol çizmiş aklım karışık\nMüziği berbat , sözleri alacaklı bir şarkı söyler ruhum\nBir ihtimal ya , bir ihtimal ya gerçekse gerçeğe yaklaşık\nBen o sesi ta en derinlerimde duydum\nSürükleriği yere uydum\nBen buydum\nO",
    "category": "en_iyiler"
  },
  {
    "id": 489,
    "title": "Sadece sen kaldın beni duymayan",
    "body": "Sadece sen kaldın beni duymayan\nBütün dünya ekranları başında\nBebekler bile uyumayan\nKim bilir kaç gün yaşında\n\nHayatımın anlamı buymuş belli\nDiğer bir yaşam var mı temelli\nRuhum bedenime 30 küsür yıl direndi\nBıçaklar bilendi",
    "category": "en_iyiler"
  },
  {
    "id": 490,
    "title": "Namazmış kuranmış zekatmış sevapmış bilmek istiyor gönlüm",
    "body": "Namazmış kuranmış zekatmış sevapmış bilmek istiyor gönlüm\nGönül gözümün kapakları kapalı görmüyorum nerde berim nerde önüm\nSusadım akarsulara şelalelerden döndüm\nYa kısacıksa ömrüm ? \nÖğrenmeden neyleyeyim ?\n\nEn sevdiğine en zor sınavı en zor zamanda en zor yerden sordun\nBeni bilirsin ben aklımın ücra köşelerini de yordum\nYandım anam su vermedi babam bir kürek kömür\nYa ben beni ararken kendimi kaybettim ya sen geldin buldun",
    "category": "en_iyiler"
  },
  {
    "id": 491,
    "title": "Şeytan mı yoksa bir melek mi acaba bu sefer konuşan ?",
    "body": "Şeytan mı yoksa bir melek mi acaba bu sefer konuşan ?\nYan Dünya yan yok ol cürmünden bilakis !\nBu mu epi topu herşeyi toplayınca oluşan ?\nAklımızı yitiriyoruz tertemiz\nÇığrımızdan çıktık çoktan...\n\nSavaşlar ve barışlar \nSavaşarak barıştılar",
    "category": "en_iyiler"
  },
  {
    "id": 492,
    "title": "Bir zaman seli bu yarınım bugünüm dün",
    "body": "Bir zaman seli bu yarınım bugünüm dün\nSanki işgal edilmiş \nSanki tırnakları çekilmiş \nSanki var olsun diye yok edilmiş bir tiyatro bu\nKendi kendine geliiiip geçmiş.\n\nBen kendimi bilmem kendimle işim yoktur\nAma sen kendimi görmezsen",
    "category": "en_iyiler"
  },
  {
    "id": 493,
    "title": "Sen en çok kendinin , kendini , kendine , kendi kendine gelmesinden…",
    "body": "Sen en çok kendinin , kendini , kendine , kendi kendine gelmesinden korktun\nSeni bulduğumda gözlerin gülüyor ruhun ağlıyordu\nBen karşında yeni bir sigara yakmak için çakmadığıma uzandığımda orda yoktun\nSöylesene bana ,\nKendini nasıl bir cenderenin içine soktun ?",
    "category": "en_iyiler"
  },
  {
    "id": 494,
    "title": "Gözümün önünde , orda işte her şey , biliyorum.",
    "body": "Gözümün önünde , orda işte her şey , biliyorum.\nZamanın akıp geçtiğini de görüyorum\nGel gelelim aklıma takılıyor bazen\nTamamını anlamayınca mevzunun , azalıyorum da...\nUzak duruyor insanlar sorunca\nTuzaklar kurdu diyorum hayat , birbirinden zor bilmeceler\nNe için ?\n\nEllerim mi yaşlanmış ?\nSözlerim mi bağlanmış ?",
    "category": "en_iyiler"
  },
  {
    "id": 495,
    "title": "Ben belli ki en akıllı deliyim",
    "body": "# \n\nBen belli ki en akıllı deliyim\nAklımdan geçenşerle dışarıdan gördüğünüz bir değil\nSusuyorsam sesimi dinlemek için\nYazıyorsam sesimi duyman için gafil\nAferin, demin emin.\nBiraz engin ve biraz derin\nBilin ki çirkin değil gökyüzünde karanlıklar\nKahkahalar da bu yüzden var\nAğlamıyorum ben gülümserken\nBelli ki acıklı bir son olacak benimkisi\nBelki bir hastane belki bir sahil\nEmin değilim\nHayatımdaki hiç bir şeyden \nHem de 2",
    "category": "en_iyiler"
  },
  {
    "id": 496,
    "title": "Sözde aklımla barışık uyuyorum her gece",
    "body": "Sözde aklımla barışık uyuyorum her gece\nHer seferinde sağ yüzüm karanlığa yapışık\nEllerim yumruk yumruğa birbirine\nUmrum nerde bilmem , bilmek de istemem\nSessiz kalana kadar aklım\nNe sonram var ne öncem\nRüyalar başlayana kadar hakkım\nÖyle işte barışığa alışık\n\nÖyle işte isyanla sulhumun kardeşliği\nİki kardeşin tatlı sarhoşluğu zaferlerinin\nAğlamaktan gülmek\nGülerken göz yaşı dökmek \nRüyalarla hayalleri benzetmek gibi\nSesler kesilse bir köşeye sıkışıp\nRüyalar başlasa\nHayaller başlasa\nÖncem sonram karışsa\nGece güneş açsa\nÖyle işte sağ yüzümü de aydınlatsa ışık",
    "category": "en_iyiler"
  },
  {
    "id": 497,
    "title": "Neresinden dönersek kâr bu işin ?",
    "body": "Neresinden dönersek kâr bu işin ?\nNefes almaktan mı vazgeçsek\nDua mı etsek ? Ne olur olsunlar...\nSoranlar sormayanlara lütfen sorsunlar\nMağlubiyet kaçınılmazken mi gelir destek ?",
    "category": "en_iyiler"
  },
  {
    "id": 498,
    "title": "Bitmiyor bu yağmur...",
    "body": "Bitmiyor bu yağmur...\nAklım başım sırılsaklam ve düşüncelerim yorgun ve mağrur\nNe zaman aynı şeyi düşünsem,\nYa bir rüzgar daha eser ya bir şiir daha malum olur o olanlar yüzünden\n\nYa harf harf yağar gökyüzünden saçlarımda kurur kendini bulur ,\nYa da taşmayı bekler son damlaya kavuşmayı umup dönmezse diye sözünden",
    "category": "en_iyiler"
  },
  {
    "id": 499,
    "title": "Karanlıkta gözlerini kapatmak veya güneşe bakmak",
    "body": "Karanlıkta gözlerini kapatmak veya güneşe bakmak\nNasıl düştüm bu derde \nEn iyisi ölü taklidi yapmak\nZamanla geçer sandım\nDermanıma sormak lazım\nGelip kendimize mi yenildik ?\nYasak mı soru sormak ?\nHani cevaplar nerde ?",
    "category": "en_iyiler"
  },
  {
    "id": 500,
    "title": "Yapayalnız kaldığında sesin duyulur ta en derinlerinden",
    "body": "Yapayalnız kaldığında sesin duyulur ta en derinlerinden\nDur yapma düşünme sakın \nKayıp gitmesin ellerinden\nSana rağmen varsın sen buna rağmen mi inat ?\nSadece bir kaç satır yalan\nKaçıp gitmesin sözlerinden",
    "category": "en_iyiler"
  },
  {
    "id": 501,
    "title": "Doğru mu , gerçeksi bu yalanlar",
    "body": "Doğru mu , gerçeksi bu yalanlar\nYalan mı , sahte mi içimdeki fırtınalar\n1 sorum var .\n2.Bir hakkım var mı ve cennette gün doğumu var mı ?",
    "category": "en_iyiler"
  },
  {
    "id": 502,
    "title": "O ilk an başlayınca zaman",
    "body": "O ilk an başlayınca zaman \nDedim ki tamam ben bu dünyaya elbet geleceğim\nKendime tutmayacağım sözler vereceğim\nKaybolacağım bulunacağım",
    "category": "en_iyiler"
  },
  {
    "id": 503,
    "title": "Dur diyorum dur",
    "body": "Dur diyorum dur\nSana öğretilen , senden istenilen budur.\nYabancıdır öbür\nCesaret edemezsin sana koşanlara koşarak gitmeye sarılmak için\nKorkmuyorsun da sabır\nDaha kimse sormadı bile sana bütün bu olanlar niçin ?\n\nGelip alsın seni desen türlü yolu var\nAma önce şiirler , türküler ve şarkılar\nVe bir o kadar da manidar\nSeni kimse yormadı diye buna üzüntün , bu nasıl olay bu nasıl biçim.\n\nDeğişim.",
    "category": "en_iyiler"
  },
  {
    "id": 504,
    "title": "Aklıma sonradan geliyor hep",
    "body": "Aklıma sonradan geliyor hep \nMesela bu söylemem gerektiğini de daha önce düşünmüştüm ?\nYaşamayı bana sen öğrettin !\nFırsatları mı tep ?\n\nBekliyorum hala bana bir cevap ve buna emek vermeni\nKulak vermeni\nBeni bana gerçekten vermeni !\nBenim burda olduğumu bilmeni..\nAklımdan geçenleri hissetmeni bekliyorum deliler gibi\n\nSeni seviyorum diye bakıyorum sana gözlerinden gizli gizli\n\n..\n\n..",
    "category": "en_iyiler"
  },
  {
    "id": 505,
    "title": "Bir gün geliverecek bir gün",
    "body": "Bir gün geliverecek bir gün\nAteşler sıcak\nSoğuklar buz\nGizliyorum hangisini göğsümde taşıdığımı\nHatırlatabilirsen sen hatırlat\nBen unuttum bu derde ne kadar çabuk alıştığımı\nKalmadı söylenecek söz\nAyıplarım susmak sanışlarımı",
    "category": "en_iyiler"
  },
  {
    "id": 506,
    "title": "Beni okuyorsun biliyorum",
    "body": "Beni okuyorsun biliyorum \nSende benim gibi mi düşünüyorsun ?\nGüneş gibi parlayıp yanmak varken neden karanlıkta üşüyorsun ?\nAnlıyorsun ama biliyorum\nBende senin gibi gitgide var oluyorum.",
    "category": "en_iyiler"
  },
  {
    "id": 507,
    "title": "Ben fenerim son görevimdi uzaklardan ışımak",
    "body": "Ben fenerim son görevimdi uzaklardan ışımak\nCan havliyle son nefeste bir an daha yaşamak\nDilim varmaz söylemeye , zor bu yükü taşımak\nGarip bir his ağlamak , mutluluklar ey insan\nAnmak istersen beni, güneşe bak , yanarak\nMum.",
    "category": "en_iyiler"
  },
  {
    "id": 508,
    "title": "Kıyamet günü benden size bin şiir",
    "body": "Kıyamet günü benden size bin şiir\nBu sefer ne önemi kalmış",
    "category": "en_iyiler"
  },
  {
    "id": 509,
    "title": "İnsan düşünmeden edemiyor",
    "body": "İnsan düşünmeden edemiyor\nDüşünmüyor musunuz hiç yaşananları ?\nİkiye yarılmış bir kızıldeniz varken ortada\nKalbinden her geçen şeye bir şiiri olan bir adam var yanıbaşınızda\n\nGökyüzüne dokunamıyorum belki artık\nDilimden dökülen bir ateş te yok\nNeyse ki biz fitilleri ellerimizle yaktık\nUnuttuklarını bu şekilde aklına sok",
    "category": "en_iyiler"
  },
  {
    "id": 510,
    "title": "Parmak uçlarımızdaki temas",
    "body": "Parmak uçlarımızdaki temas\nO his , o tehlikeli haz\nYeter ki sen iste insan\nKarşındayım ve aynı frekans\n\nYaşamakla ölmek aynı anda\nGözlerini kapattığında yaşanacaklara inanamazsın\nNe var ki bunda ?\nİstesen de dayanamazsın\nGece güneş doğar mı ansızın ?",
    "category": "en_iyiler"
  },
  {
    "id": 511,
    "title": "Bilmiyorum ki acaba vazgeçmek mi lazım bu sevdadan ?",
    "body": "Bilmiyorum ki acaba vazgeçmek mi lazım bu sevdadan ?\nKaç iki daha çıkar dünyadan\nUyanılır mı hülyadan\nYer yerinde durmaz belki susarsam.\n\nGözlerimden okunuyor, derdim güyalar\nAteşe bakmak kadar kolay aslında anlamak susmayı",
    "category": "en_iyiler"
  },
  {
    "id": 512,
    "title": "Sessizliğin gürültüsüne bir bak",
    "body": "Sessizliğin gürültüsüne bir bak\nBir an için dur kendine ve çıkar bir sigara yak\nKendi ruhun kendi ruhundan kopacak\nAz gelirse yüselişler\nVaz geçerse imrenişler\nHaz vermezse inleyişler\nAşağı bak , ben ordayım. \nYolun sonundayım",
    "category": "en_iyiler"
  },
  {
    "id": 513,
    "title": "Artık yalnızlığa atılacak bir adım daha kalmadı",
    "body": "Artık yalnızlığa atılacak bir adım daha kalmadı\nSimsiyahın gölgesindeyim\nEtrafta kimseler yok\nSanki kıyametin öncesindeyim\n\nGözyaşı dediğin de aka aka biter\nNasıl olsa her gelen bir yerden gider\nBelki biri gelip beni bir uçurumdan iter\nBen hala aman sigaram sönmesindeyim\n\nHerkese anlattım sanırım ne kadar üzüldüğümü\nBiri anladı mı küskünlüğümü\nİfade etmeye çalıştığım düzgünlüğümün\nTemellisindeyim",
    "category": "en_iyiler"
  },
  {
    "id": 514,
    "title": "Tamam kabul ediyorum hayallerim gökyüzünden de öte bir yerde yaşayacağım…",
    "body": "Tamam kabul ediyorum hayallerim gökyüzünden de öte bir yerde yaşayacağım saadetten ibaret değil\nTamam cennete en çok şiiri yazmış olarak gidecek olma isteğim benim değil\nTamam hepinizi affediyorum istisnasız\nTamam gidiyorum burdan yarınızdan çoğu insafsız.",
    "category": "en_iyiler"
  },
  {
    "id": 515,
    "title": "Zaman geçiyor , geçiyordu , geçecek...",
    "body": "Zaman geçiyor , geçiyordu , geçecek...\nGeri sayıyor , sayıyordu , sayacak\nEy insan , ateş var diyorlar , ateş sıcak\nEy dünya , ne var bunda bu kadar şaşıracak ?\nKimse kımıldamayacak\nKime anlatıyorum ki zaten\nOlmuş olacak..",
    "category": "en_iyiler"
  },
  {
    "id": 516,
    "title": "Şu yalan Dünyada bir tek sen mi doğrusun ?",
    "body": "Şu yalan Dünyada bir tek sen mi doğrusun ?\nAlev alev yanıyorum diyorsun , bir bildiğin mi var ?\nŞarkılar ve şiirlerin hepsi neden havada ?\nYönün neresi gökyüzünde , nereye doğrusun ?\n\nBuğulu sözlerini rengarenk özlersin , sabret\nİnsan olmak ne kadar da zor anlıyorum da\nHayal kırıklıklarına kırılmış gönlün ama olsun azmet\nBen seni anlıyorum.\nSende beni bir zahmet.",
    "category": "en_iyiler"
  },
  {
    "id": 517,
    "title": "Hayal kurmak öyle düşündüğünüz kadar zor değil",
    "body": "Hayal kurmak öyle düşündüğünüz kadar zor değil\nÖlmeyi ummak mesela mesele bile değil\nKapıdan geleceğimi ummak bir meleğin\nİşten bile değil",
    "category": "en_iyiler"
  },
  {
    "id": 518,
    "title": "Bütün sokaklar boş ve loş bir karanlıkta nedense",
    "body": "Bütün sokaklar boş ve loş bir karanlıkta nedense\nİnsanlar koşarak uzaklaşmış gerçeklerden meğerse\nDoğru ve yanlış\nSavaş ve barış\nBütün kainat karış karış\nKaranlığa karışsa ve şu yaşanılanlara değse.",
    "category": "en_iyiler"
  },
  {
    "id": 519,
    "title": "Bahar yaprak dökmüş",
    "body": "Bahar yaprak dökmüş\nYazıma soğuğun habercisi bu sahte güz.\nSınavım zor\nYardım etmek istiyorsan şiirlerimi üz.\nBen kendi yalnızlığımda yeterince kalabalığım.\nVe her yer buz.\nHerkes küs.\n\nŞarkılar\nResimler \nEtrafına bir bak\nGitmemi istiyor gibi herşey geri döneceğimi umarak\nMecburen kalacağım gittiğim yerde arkama bakarak\n1 kişi daha ekleyeceğim 3 olmak için kendime\nGüçlü kalabilmek için\nŞarkılar söyleyip şiirlerime\nDipsiz bir gökyüzünden yeryüzüne gözlerimi kapayarak gideceğim.\n\nHiçbirinizi affetmemeyi dilerdim.\nHepinizi affediyorum.\nİçime içime atarak.",
    "category": "en_iyiler"
  },
  {
    "id": 520,
    "title": "Seni sendeki benden uzaklaştıran yutamadığın cümleler kursağında",
    "body": "Seni sendeki benden uzaklaştıran yutamadığın cümleler kursağında\nGel aslında , seninle bir yolculuğa çıkalım\nBeni bendeki sana kavuşturan ne varsa aklımda\nHadi , önümüze bakalım\nBir konu hakkında\nDuracağım arkanda\nYanında \nSağında solunda \nGökyüzünde uzayda kainatta ne kadar geniş alan varsa\nSana ta ordan selam getirdim ey insan\nAnlasana",
    "category": "en_iyiler"
  },
  {
    "id": 521,
    "title": "Zerafet , adalet takımımın içine giyilebilecek en güzel gömlektir…",
    "body": "Zerafet , adalet takımımın içine giyilebilecek en güzel gömlektir.\nMesele , bulutların ardındaki ışığın gözlere değişini görmektir.\nYeni diyebileceğimiz o yeni buluşmaya giderken takındığımız tavır\nAğır adımların topuk sesi düşmanı sağır edebilecek bir yakınlıktayken bile affedebilmektir.\n\nGül geç.",
    "category": "en_iyiler"
  },
  {
    "id": 522,
    "title": "Söyleyeceklerin bitti mi ?",
    "body": "Söyleyeceklerin bitti mi ?\nSıra bende mi ?\nSessiz kalıyorum ebedi\nVe yalnızlığımda yokluğunun en âlâsını diliyorum\nBiliyorsun nedenini\n\nGözlerime bakarak söylediklerini\nBenden sonrakiler ve benden öncekileri yerime koya koya yaşa artık gerisini\nArkana bakmadan git şimdi\nSenin için yine de en beterini dilemiyorum\nBir gün anlarsın sebebini.",
    "category": "en_iyiler"
  },
  {
    "id": 523,
    "title": "Ne demek hayat devam ediyor ?",
    "body": "Ne demek hayat devam ediyor ?\nUnutulabilir mi ölen aşklar ?\nHer biri en iyisiyle zihnimin en derinlerinde\nBazen gökyüzünde bazen gözlerimde belirir yaşlar.\n\nNe demek üstünden zaman geçiyor\nYosun tutabiliyor taşlar\nEn güzel en özel en muhterem birisi gelir\nBirisi gelir hayat yeniden başlar.",
    "category": "en_iyiler"
  },
  {
    "id": 524,
    "title": "Mum dibine ışık vermiyor , etraf yangın yeri",
    "body": "Mum dibine ışık vermiyor , etraf yangın yeri\nGüneş gibi\nSon günüme aklım ermiyor , saramıyorum zamanı ileri.\nSaniyeler işkence ediyor her defasında teker teker , tıkır tıkır\nDönebilecekmiyim Dünyanın mecburuna döndüğü gibi\nZamansız bir ortamda , belki de geri.\n\nÇözemiyorum bulmacayı yardım edin\nSon kelime , aşağıdan yukarı son harfi yemin\nZaman daralıyor , darağacım belli benim\nDemin geldim\nGidebilecekmiyim Dünyanın öbür ucuna ,ucundan geldiğim gibi babamdan\nZamansız bir ortamda anamdan , yepyeni bir \nBaşlangıca.\nAcil.\nBirini sözcü seçmeyecekmisiniz sahi ?\nBitirmeyecekmiyiz bu harbi ?\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 525,
    "title": "Neler olup bittiğini biliyorum",
    "body": "Neler olup bittiğini biliyorum\nNeler istenilecek , neler diretilecek tahmin edebiliyorum\nHazırım.\nAlın.",
    "category": "en_iyiler"
  },
  {
    "id": 526,
    "title": "\" Senin yazdığın şiirler duygularını bir ağaca kazımaktan ibaretti…",
    "body": "\" Senin yazdığın şiirler duygularını bir ağaca kazımaktan ibaretti \"\n\ndedi Ak Saçlı Bilge.\n\n\" 761 \" diye ekledi.",
    "category": "en_iyiler"
  },
  {
    "id": 527,
    "title": "Bana benden mi bahsedeceksin ?",
    "body": "Bana benden mi bahsedeceksin ?\nDost musun göz bebeklerime ?\nYalanla dolu bir fanusta nefessizim\nİnanacak mısın diyeceklerime ?\n\nSen grisin ben beyaz\nİçimde bu yüzden bir korku var biraz\nŞarkılarla kendimi buluyorum\nMerak ediyorum\nKar yağacak mı bu yaz ?\n\nMerhaba ben iki\nSen çaremsindir belki\nSonu ne olursa olsun ben bu kumar masasına oturmam\nNiye mi ?\nYa kazanırsam ve puff diye ortadan kaybolursan ?",
    "category": "en_iyiler"
  },
  {
    "id": 528,
    "title": "Ben kendime hiç söz hakkı tanımadım",
    "body": "Ben kendime hiç söz hakkı tanımadım\nÖyle ki , bir bakışımda bile kendimi tanıyamadım\nAynalardan kaçtım\nİçimdeki iyiyi görüp dışıma karanlık ışıklar saçtım\nBen insanım , yaradılan ne varsa üzerinde taçtım\nMinarede hilal , günah çıkarırken haçtım\nBen bugüne kadar neler neler uğruna savaştım\nNe için uğraştım\nNeye muhtaçtım ?\n\nŞimdinin gündemi belli bir amaç\nHakla batılın savaşında değeri bilinmez mi ateş\nKalabalıklarla el ele yürüyen şeytan\nEli sadece öptürmeye yarayan geri kalan\nHodri meydan\nGöçüp gideceğim bu diyar dedikleri boşlukta asılı inci tanesinden\nYarınındayım yarının\nBence artık zamanı geldi\nHerşey hazır ve tamam",
    "category": "en_iyiler"
  },
  {
    "id": 529,
    "title": "Hayat bu , belli olur ne göstereceği",
    "body": "Hayat bu , belli olur ne göstereceği\nNe istediğini bilir\nOna göre sıvar kollarını \nSevin !\nSana ne istediğini verir\n\nBirden aklına geliverir\nÇözüm basittir\nBir şarkıda bir dalgınlıkta gizlidir durgun denizlerin\nGörür görmez dalgalanır için , şahşanır emirlerin\nYüreğinde ne var ne yoksa temizler\nUnutturur zamanları\nAnı içine yutar senin\n\nO an işte sevgili kimsen\nHayat sana gösterir göstermesi gerektiğini\nEmir kuludur\nSen sadece iyi düşün ne istediğini\nÇözüm bulunur",
    "category": "en_iyiler"
  },
  {
    "id": 530,
    "title": "İçinde doğru ve yanlış yanyanalar birbirine değmeyen iki el gibi haklı…",
    "body": "İçinde doğru ve yanlış yanyanalar birbirine değmeyen iki el gibi haklı ve yalnızken senle kalabalık ve haksızca \nbirbirini sevmeyen iki aşıklar\n\nİçinde doğru ve yanlış karşı karşıyalar o gözün gözü görmediği karanlıkta göz kırptığın an karşılaştığın zifiri gibi acemi şaşkın ve birbirine milyarlarca yıldır alışıklar\n\nİçinde doğru, takip et onu , o sana O'nun duru \n\nVe İçinde yanlış , \n\nBu ikisi sana daha ne anlatsın ?\n\nHangi soruyu ?",
    "category": "en_iyiler"
  },
  {
    "id": 531,
    "title": "Birikmekle kalmıyor kaynıyor içimde meret",
    "body": "Birikmekle kalmıyor kaynıyor içimde meret\nYaz ulan ! Sessiz kalmak zorunda değilsin olanlara\nBu senin medet ummadan yaptığın en güzel olay\nOkuyanlara",
    "category": "en_iyiler"
  },
  {
    "id": 532,
    "title": "İçinde bir yüce cüce sana ne dedi dinlemedin",
    "body": "İçinde bir yüce cüce sana ne dedi dinlemedin \nBelki duymak istemedin , belki gördüğün yetti\nBelki küçümsedin kendini yerle bir edemedin\nNe huyuna ne suyuna gitmedin ki ellerinden neler neler gelirdi \nNoktasına virgülüne karışmadan ilerledin\nDönemedin gittiğin yerden geri\n\nAlışınca yalnızlığa yıkıldı ya tüm kaleler\nYakıldı ya tüm gemiler\nBu güzel bahar zulmünden kurtulamadın yüce cüce\nDaha özel zamanlar olacak \nİnanamayacaksın gücüne.",
    "category": "en_iyiler"
  },
  {
    "id": 533,
    "title": "Beni çok üzdünüz",
    "body": "Beni çok üzdünüz\nHepiniz\nTopunuz\nEtrafımda gerçekçi gibi gözüken her kimseyseniz lütfen artık yok olunuz\nBugün artık çoğunuz\nBatınız ve doğunuz\nBatınızda ve doğunuzda\nKabul edin artık bu oyunu oynamak istemiyorsunuz\nSavaşlar var konularınızda\nOlaylar karmaşık\nSona geliyoruz adeta\nÜmit ediyorken , bekliyorken , istiyorken neden söylemiyorsunuz artık gerçekleri\nBitsin diye mi ?\nBitelim diye mi ?\nBiteyim diye mi ?\nKesilsin diye mi soluğumuz ?",
    "category": "en_iyiler"
  },
  {
    "id": 534,
    "title": "Boşvermiştim aslında",
    "body": "Boşvermiştim aslında\nGönlümün savaşını\nRuhumun ateşini\nİçimin iç çekişlerini\nKoşalım hatta\nUçalım , kaçalım , göçelim\nUzaklaşalım deyişini\n\nHırkamın söküğünü\nGömleğimin ütüsünü\nAklımın örüntüsünü takmışım aklıma\nYazık etmişim ruhumun görüntüsünü\nKalbimin gürültüsüne yazık olmuş",
    "category": "en_iyiler"
  },
  {
    "id": 535,
    "title": "İnsanüstü bir üzüntü kaplar yarınımın gökyüzünü",
    "body": "İnsanüstü bir üzüntü kaplar yarınımın gökyüzünü\nKökü sökülür ağaçlarımın \nDili olsa neler neler dökülür.\nKötüdür. Gözükür.\nAğlarsan sana kıyamam dersem Alem bana Adem'i güldürür. \n\nKendime döndürür.\n\nBu son gerçek çok güçtür , adı üstünde ölümlüdür.\nBelkide gerçekten bile gerçek görünür\nBir figür , bir ses , bir bismillah , bir ömür\nSahibinin sevabına , gökten virgüller dökülür.\nCümlelere öbür.",
    "category": "en_iyiler"
  },
  {
    "id": 536,
    "title": "Düşür düşünürken düşlerinin düşüşlerini",
    "body": "Düşür düşünürken düşlerinin düşüşlerini\nAzar azar azalsın hazalsın yüklerin\nAzalsın azan hazan \nKızarsın yüzü\nYüzlercesi yüzü koyun üzülsün \nHüznü artsın giderken yenileri\nYineleri yenilesin yeniden geri dönsün yeri\nBulanıktan kurtulup kendini bulacaktı derdin\nKendine yaptığını görsen \nKendinden özür bile dilerdin\n2 hakkın kaldı.\n1i haklı.",
    "category": "en_iyiler"
  },
  {
    "id": 537,
    "title": "Ancak , ben kendimde değilsem",
    "body": "Ancak , ben kendimde değilsem\nBen kimim ?\nİyi bir haber almanın zamanı çoktan gelmişti\nYaşam belirtisi var mı ?\nYok mu ?\nPeki efendim.",
    "category": "en_iyiler"
  },
  {
    "id": 538,
    "title": "Bir gün yağmurlu bir sabahın ilk ışıkları hayatına yeniden doğduğunda…",
    "body": "Bir gün yağmurlu bir sabahın ilk ışıkları hayatına yeniden doğduğunda hatırla bu şiiri\n\nBu anı daha önce de yaşamıştım desin için\n\nBiraz daha uzun sürebilsin diye bekleyedebilirsin\n\nHatta bu anı daha önce rüyanda görmüş bile olabilirsin\n\nAklında bir ayrılık şarkısı\n\nYemin edebilirim bu resmen aynısı\n\nSana bu anı yaşatan zamanın Tanrısı\n\nNe demek istiyor olabilir ?",
    "category": "en_iyiler"
  },
  {
    "id": 539,
    "title": "Çok tanıdık bu his , içimde cennet cehennemin sıcağından ılık",
    "body": "Çok tanıdık bu his , içimde cennet cehennemin sıcağından ılık\nHep bir nefes , hayata dair bir hatıra\nSon bir hata daha , ölümün hayrı yaşamın şerrine karışık\nTam anlamıyla mucize bir kalabalık\nBirazı masum , kalan çoğunluk kaba ve alık\nİçimde dönüp duran girdap \nYalnız çocukluğum\nYapayalnız olduğum olgunluğum\nBütün bir ömür\nTanıdık.\n\nBazen beni hatırlarım\nRüyalarımı\nRüyalarımı daha önce de gördüğümü ve yıkıp döktüğümü zihnimden geçen geçmiş zamanlarımı\nHer acının , o anın bir kilidi var , zihnimde bir maymuncuk anahtar\nKapılardan geçemem\nGeçebilemem \nÇünkü küçümsersiniz.\nBu bile bir ömür törpüsü\nHatırladın mı ?\nTanıdık.",
    "category": "en_iyiler"
  },
  {
    "id": 540,
    "title": "Etrafımda milyarsınız",
    "body": "Etrafımda milyarsınız\nİnanmazsınız ama her birinizle dostum\nHiçbiriniz hata yapmadınız\nBendim yere serilen postu",
    "category": "en_iyiler"
  },
  {
    "id": 541,
    "title": "Sesini açtım yine içimin bakın !",
    "body": "Sesini açtım yine içimin bakın !\nBu benim sizinle mücadele biçimime biraz yakın !\nZihnimden parmaklarıma düşen bir takım kelimeler bunlar\nDuyabilirsin istersen ordan.\n\nNeden diye soranlara , nereden diye sorsam mı ?\nNeden bu gürültü bu kadar çok diye darlarlar mı , of.\nAnlamıyoruz , dinlemiyoruz diye susanlar bile var , pes.\n\n\"İki , gecede bir ses arayan herkes gibi .\"\n\nYes !",
    "category": "en_iyiler"
  },
  {
    "id": 542,
    "title": "Mesela bir karanlığın ortasındayken hep birden geliyor sanrılar",
    "body": "Mesela bir karanlığın ortasındayken hep birden geliyor sanrılar\nNe yaşadığımı düşünebiliyorum ne yaşadığımı\nSes mes gelmiyor birden biryerden\nSadece kalabalık gürültüsünün kulaklarımdaki artığı\n\nÇok düşünüyorum diye böyleymiş sancılar\nBeynimdeki karıncalanmalar \nGökyüzündeki sessizlikle harman\nKendi kendine konuşuyor düşlerim\nBen sadece misafirim\nGelip geçecek bir martı",
    "category": "en_iyiler"
  },
  {
    "id": 543,
    "title": "Gözlerini ateşle bağla",
    "body": "Gözlerini ateşle bağla\nVe hıçkırıklarının çıktığı en yüksek yerden yeryüzüne ağla\nYere düş sağlam\nVer selamı sağdan\n\nBu ne biçim ağ lan !\nBütün ruhum karman çorman\nKalbin her ritminde bir yerlerde bir ormanın yanması da\nYalan çünkü bir yokmuş bir zamanlar varken\nOrmanlar kendi kendine yanmaz.",
    "category": "en_iyiler"
  },
  {
    "id": 544,
    "title": "Uyandığında gözlerin,  ilk göreceğin hayal senin artık",
    "body": "Uyandığında gözlerin,  ilk göreceğin hayal senin artık\nRüyalarını unut",
    "category": "en_iyiler"
  },
  {
    "id": 545,
    "title": "Tüm cümleleri dilinden bırak",
    "body": "Tüm cümleleri dilinden bırak\nDuy sessizliğin enginliğini\nFısıltıları düşüncelerinin\nNe kadar da berrak ve zengin\n\nKalk temelli , tuttunduğun elleri bırak\nUç gökyüzü seninmiş gibi\nBak,  temennim unuttuğun günlere inat\nNe kadar da yakın olan ne kadar da uzak..\n\nUyandın ve başladı hikayen \nBelki bugün son\nBelli ki bugün diye\n\nOyalandığın dün sona erdi madem\nSanki yeni bir şans bu sana verilen\nSanki bugün diye diye mânen",
    "category": "en_iyiler"
  },
  {
    "id": 546,
    "title": "Büyük harflerle bak bir daha yarınlara",
    "body": "Büyük harflerle bak bir daha yarınlara\nKüçük adımlarla ilerle olanlara\nGöğsünü dolanlarla hapsederek şişir\nİyiyiz de soranlara\nÇok iyiyiz\n\nTövbeler ettin ya daha dün\nGökyüzüne baktın ya hani kısacık\nŞimdi bu Dünya senin hatrına mı dönsün\nBu devasa ufacık ?\n\nSözler verdin ya hani çiviler çaktın ya ömrüne, bitmesin , sonu gelmesin  , arkası meçhul diye \n\nYalanları söyledin ya aynada baka baka her sabah uyanıp uyanıp bıkmadığın şu hayatın gözüne\n\nDurmadan düşüncelerin akıl verirken sana \nVarlığını kaydırınca kenara\nBir dur deyince sana , bir dönsene özüne\nAslında gerçekten çok mu iyiyiz ? \nSonra verdiğinde göreceksin o nefesi.\nMaalesef , değiliz.",
    "category": "en_iyiler"
  },
  {
    "id": 547,
    "title": "Akıyla dinleyen yoksa",
    "body": "Akıyla dinleyen yoksa \nSöyleyecek birşeyin kalmadıysa\nÖzlenecek kimseler bir yada iki\nÖzleyecek kimseler pişmanlıklardan birer duvarsa eğer\nSenin için hiç kimsenin anlamı kalmadıysa\nBunu yapmaya değer...\n\nPişman olacağım şeyler de hayalini kurup gerçekleştiremediğim şeyler olur , öyle annem babam üzülür diye değil",
    "category": "en_iyiler"
  },
  {
    "id": 548,
    "title": "Henüz bende bilmiyorum bu yol nereye gidecek",
    "body": "Henüz bende bilmiyorum bu yol nereye gidecek\nNeden bir yere varacak gerçekten derdime dert oluyor\nYazıyorum aklım aklıma erdikçe , kendi kendimden geçince , zihnimde olanları seçince birer birer\nAslında gayet güzel de hikaye , herkese zor geliyor.\n\nBenim benimle zorum yok , sorun da yok aslında öfkem yanlış cevaplara , yanlış mesajlara , yanlış olan herşeye\nDüzeltemezsem çapım yok\nDüzelteceğimse çapın yok\nİlerleyeyim desem ilaçlar\nGeride dursam kahrolası kör insanlar\nHepsi yavaş \nHepsi yanlız\nHepsi bir savaş halinde\nHerşeyleri yanlış\n\nBeni sevenler beni daha az sevsin ki daha az üzülsünler üzüntüme.\n\nBen bu bedenden çoktan geçtim, takılmıyorum görüntüme\n\nİnanmak böyle bir şey olmalı , kendime öyle inanmışım ki bu gerçek olacak , gerçekleşiyor hatta , ürküyorum çok büyük bir yoğunluk. Ayaklarımdan başıma yükseliyor bir tansiyon ara ara , zemin beni çağırıyor gibi çekiyor kendine beni. O arada gerçekleşiyor ne varsa\n\nBu benim , benmişim.. kurban edilecekmişim gibi bir sebebe , tam olarak dünya kadar bir dert. İstediğim korkuya cesaret değil. Gözüm arkamda giderim de ukde kalır diye endişeleniyorum. Ya insanlar , hayvanlar ve bitkiler kadar adil olmazsa ?\n\nYa bunca herşey , gitmesi gereken yere varamazsa ?\n\nNe yaparsınız ?",
    "category": "en_iyiler"
  },
  {
    "id": 549,
    "title": "Bana yasaksa sana da yasak düşünmek",
    "body": "Bana yasaksa sana da yasak düşünmek\nUlu orta beynim çıplak dolaşmak\nHakkımı hakkım olanla savunmak\nSeninle senin kurallarına göre dövüşmek !\n\nGece gündüz demeden hakkımı savunmak\nKapalı kapılar ardında ne olduğuna ulaşmak\nKirleneceğimi bile bile pis işlerine bulaşmak\nKorkmuyorum senden otorite\nAmacım amacıma ulaşmak.",
    "category": "en_iyiler"
  },
  {
    "id": 550,
    "title": "Şans",
    "body": "1. Şans\n\nBen ortalama bir beynin en beyefendisiyim\nSözlerim var temelli\nYardım edenim var efendim belki bir kişiyim\nGözlerim var 2 ayrı renkli \nRengarenk.\n\nÖlen zavallı bir yazarım belki\nO kadar inanmışım ki şarkılara\nÖylesine sonu gelmiş ki naraların\nKorku nefesi.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 551,
    "title": "Cesaret bir kalbin kendine özlemidir",
    "body": "Cesaret bir kalbin kendine özlemidir\nEğer gökyüzünde bulutlarda uçmuyorsa\nMasmavisi denizlerin alır onu sonsuzluğa\nİki arada bir dereden iyidir\nLaf aramızda aklını çok sevdim\nEskiden miydi böyle aşklar denilir ?",
    "category": "en_iyiler"
  },
  {
    "id": 552,
    "title": "Sessiz düşünmek azım",
    "body": "Sessiz düşünmek azım\nBugün kaderlerden hangisi yazım\nRızıklardan hangisi azık\nIşıklardan hangisi yanık\nSebeplerden hangisi yazık ?\n\nSesli düşünmek sazım\nYarın mevsimlerden hangisi yazım\nRakiplerden hangisi kazık\nKaranlıklar neden basık hala\nSonuçlardan hangisi tarık ?",
    "category": "en_iyiler"
  },
  {
    "id": 553,
    "title": "Hazin hüzüne baka baka kararır",
    "body": "Hazin hüzüne baka baka kararır\nBen aldanırım bile bile yalanlara\nGüneş doğarken bir yerlere sabah olup\nBenzer bir son buldururum olanlara\nYakından uzağa\nBelkide bir tuzağa\n\nGözüm özüne bakarda görmez\nBen saldırırım içimdeki uyku girmez kuytulara\nNe yazık , güneş battı burda\nBense karanlıkta yıldızlarda bir anlam ararım\nUzaktan yakına\nYakından uzağa",
    "category": "en_iyiler"
  },
  {
    "id": 554,
    "title": "Yıllar geçecek aradan",
    "body": "Yıllar geçecek aradan\nBelki yine milyarlarca siz iki ben\nSonsuzu, sonu mutlu biten bir hikayeyle yaratmış olmalı yaradan\nVe iyinin savaşını kötülüğün kendini arayışında saklamış bu ikilem\nYak buyur buradan.\nMerhaba 2 ben.",
    "category": "en_iyiler"
  },
  {
    "id": 555,
    "title": "Ben bu hayata gözlerimi kırpışımdan haz duymaya",
    "body": "Ben bu hayata gözlerimi kırpışımdan haz duymaya\nAzar azar özlediğim hayatıma bir zarf içinde sunmaya geldim\nUmudumu hiçe sayıp vazgeçmenin ta kendisiyken\nGörsen halimi yanarsın , alev almam an meselesi\n\nBu kadar yakınken diğer bir harbe , bu nasıl bir darbe ?\nKalbe değinen her bir cümleyle tartışıyorum yüzümde sabır , vay be !\nÇok ağır çok , işte bu yüzden sende can havliyle bağır.\nDinle gözyaşlarını \nAğla kendine\nHayde",
    "category": "en_iyiler"
  },
  {
    "id": 556,
    "title": "Cesaretim benim esaretim",
    "body": "Cesaretim benim esaretim\nGün geçmiyor ki vazgeçtiğim şeyler yolunu bulup ilerlemesin geri\nFelaketim geleceğin ferasetinden\nDün bilmiyorum ki eskiden böyleydi demediğim haller diz çöküp eğilmesin önümde",
    "category": "en_iyiler"
  },
  {
    "id": 557,
    "title": "Özledim seni",
    "body": "Özledim seni\nBir martının denize attığı çığlık gibi\nBir denizin yağmura hasreti\nO yağmurun bereketi özlediği gibi özledim\nToprağın güneşi\nGüneşin sabahı\nSabahların çiğ tanelerini özlediği gibi özledim\nBir çocuğun şekeri özlediği gibi\nBir annenin evladını özlediği gibi\nBir annenin evladını beklediği gibi özledim\n\nÖzledim seni\nCümlelerin kelimeleri özlediği gibi\nVirgülü bekler gibi\nSon noktayı ister gibi özledim\n\nÖzledim seni",
    "category": "en_iyiler"
  },
  {
    "id": 558,
    "title": "Mesela gözlerini kapatınca da uyanır insan",
    "body": "Mesela gözlerini kapatınca da uyanır insan\nSözlerini susunca kalır bir başına\nNefretini kusunca açılır\nUzunca bir yol varken gidilecek\nYavaşlayıp düşününce etraflara saçılır\nHiçbir şeyden medet ummaz rüyalar\nMüziğin sesi kısılınca içinin sesini arar aklına yayılır gibi şarkılar\nZihnini yorar\nBeynine sorar\nHaline bir bakar önce\nSonra gözlerini açar ki bir bakmışsın uyumuş\nKelimeler dökülür ağzından bu bazen gider hoşuna\nŞevkatini paylaşınca kapanır içine\nKısa kısa yollar seçer fırsatları tepilecek boşuna\nHızlanıp unutunca kendi işini , bakar işine\nYardım etmez hiç kimse\nMüziğin sesi artar , içinin sesi boşlukta yankılanır kendini kaybeder gibi tansiyonu yüksek\nElleri titrer\nŞakakları terler\nHaline bir bakar sonra\nUyur uyanık.\nKarıştırır bu olayın tamamını.\nNereye gitsek ?",
    "category": "en_iyiler"
  },
  {
    "id": 559,
    "title": "Özledim zihnimin sessizliğini",
    "body": "Özledim zihnimin sessizliğini\nNe güzeldi umursamadan yaşamak\nDokunamadan anlatamazsın hissizliği\nÇıkacağın indiğin her bir basamak\n\nAlışmak zor olmadı bu gürültüye\nYıldırımlar çoğaldı gök gürüldeyince güm diye\nKatlanıyorum bunca üzüntüye\nOlan biteni yüreğimde taşımak",
    "category": "en_iyiler"
  },
  {
    "id": 560,
    "title": "Dünyayı Beyler",
    "body": "Dünyayı Beyler\nDetayları Hanımlar halletsin\nBiz yakışıklı ve zeki\nSiz anlayışlı ve güzelsiniz.",
    "category": "en_iyiler"
  },
  {
    "id": 561,
    "title": "İzler kalırsa",
    "body": "İzler kalırsın.",
    "category": "en_iyiler"
  },
  {
    "id": 562,
    "title": "Kara kışlar ne hızlıydı hakikaten",
    "body": "Kara kışlar ne hızlıydı hakikaten\nKoşuşturuşlardayken kar taneleri gökyüzünde birbirine değmeden mesafeli\nGökyüzüyken gri\nBeyaza aldanışlar başlardı lûtfen\n\nHala seviyorken arayışlarını\nGit sor sorularını\nAl cevaplarını ver birine\nAnlam arıyorsan sayıklayışlarına\nYalana aldanışlar başlar\nGel kendine",
    "category": "en_iyiler"
  },
  {
    "id": 563,
    "title": "Nihayet;",
    "body": "Uçurumun kenarına yuva yapmış bir kuşun yavrusuyum\nYa özgürlük ya kıyamet\n\nNe kadar mümkünse o korkuyorum \nHa gayret\nŞayet bir yol gösterinim olsa\nİnayet-i azama uçarım yuvamdan hiç etmeden şikayet\nHatta bir rivayet buna cinayet der hayret\nDayan oğlum dayan biraz daha sabret\n\nKanatların güçlensin önce\nBiraz daha dirayet",
    "category": "en_iyiler"
  },
  {
    "id": 564,
    "title": "Sana ey insan sana söylüyorum beni duy",
    "body": "Sana ey insan sana söylüyorum beni duy\nSana öğretilen kitaplardaki kelimelere harfi harfine uy\nBu en güzel huy\nEn özel mesele\nBana ait olan her şeyimle sana sesleniyorum bana yardım et\nYaptığın resmen kıyamet\nNerde kaldı selamet\nAllaha emanet...\n\nDertlerimden dert doğuyor kaldıramıyorum bu yükü\nDizlerimden değmeden yere secdeden önce rukü\nBir an olsun ya , bir an için aklı olsun ülkünün\nBen vazgeçmemek için nelerden vazgeçtim bir bilsen karşıma çıktığında ölüm\n\nElimden gelse göklerde beliririm rüyalarına gelirim yüzümü aya resmederim\nAma sensiz olmayacak bu uyanışın derdi derin\nİstediğim biraz sulh biraz kardeşlik biraz serin\nGözyaşlarım donuk çünkü sekiz yıldır aynı yerim\n\nAz geliyor bekleyişler yetmiyor seslenişler\nDuymuyor hiçkimseler ben buralarda varken hazır\nDar geliyor göğsüm kalbime fayda etmeyen kaybedişler\nBu oğlunuz sadece içine geleni yazar\nÇünkü azar hazar\nÇünkü yazan azapta\nBu yoktu hesapta\n\nYıllardır ben aynı düşü kurup kurup söz alırım \nElinizden geldiğince susturup beni kandırdınız\nYerim yurdum neresi nereden geldim ben neresi sonum\nBeni yerimden kaldırıp aklımı da aldırdınız\nSanki bir sebebi varmış gibi\nKor aleve daldırdınız\n\nSusamıyorum işte , susamıyorum ben bu son sürat yokuş aşağı gidişte\nFrenlerim tutmuyor aklım bana her merhaba deyişinde\nNedeni aramıyorum artık sebebi belli bu hakkın\nTek dileğim batıl bile hakla hakla sevişse\n\nZor geliyor anlatması belki en iyisi susmak\nO kadar zor geliyor ki aynı soruları defalarca sormak\nVe o kadar zor ki bu coşkuyu içimde tutmak\nKelimeler zor geliyor\nCümleleri bitiremiyorum\nSanıyorum bu sefer son\nNe biliyorsam onu anlatıyorum\nÇok zor içimdeki coşkuyu yollara koşmak\n\nNe gerekiyor ne anlatıyor ne saçmalıyor bir bilsem\nBana aynada gösterdiğiniz yeryüzündeki sersem\nBir kez bile hak vermeden istemediğiniz kardeşliği\nDünyanın aldığı şu hali nasıl gördüğümü bir görsen\nHaline acırdın\n\nÇok olmak mı daha fazlası mı yada arkası mı mühim bu işin\nBu kadar kavga bu denli kaos bu nefret bu hastalık niçin ?\nBu ne biçim bir körlük içinde yaşadığınız \nBu ne biçim bir vurdumduymazlık\nBu nasıl bir dünya ?\nBöylesine bir açlık ancak ya hülya olabilir ya rüya\n\nBen birazdan giderim ne kadar anlatsam da boş\nGüya senin için hava hoş Rahmi sussun Oğuzhan konuşsun\nBırakın beni bu sefer Eyüp biriyle görüşsün\nHatıralarımı bir kenarda saklamadan\nBu aşk dediğin şey en sonunda nefrete dönüşsün\nAşk ve nefret sevgi ve kin ile öpüşsün\nBarışsın",
    "category": "en_iyiler"
  },
  {
    "id": 565,
    "title": "Ne kadar yavaş o kadar iyi değil mi'yi",
    "body": "Ne kadar yavaş o kadar iyi değil mi'yi\nBu basit soruyu nedense kendime hiç soramadım.\nBaşka biri ol , bir daha sev , önümde eğil mi ?\nBunun için yaratılmadım , ölemem.\n\nHer biriniz hepimizin bir parçası\nKiminizin parası kiminizin en yürekten duası\nKiminizin vahı kiminizin en ufacık faydası\nBenimse şiirlerim var\nBu iyiliğin kaygısının davası ve zaman dar.",
    "category": "en_iyiler"
  },
  {
    "id": 566,
    "title": "Bu beni ilk görüşün ve hayatında ilk kez o soruyu soruşunum kendine",
    "body": "Bu beni ilk görüşün ve hayatında ilk kez o soruyu soruşunum kendine\nİlk duyuşunum kulakların sağır insan kalabalığının ağıdı var dilimde\nİlk öpüşün toprağı etraflıca hüzün yardım edenlerin elinde kürek\nİlk ölüşün son dönüşü bu hayatın nerde emek nerde aşklar nerde yürek ?\n\nÖnce dinle sonra düşünürsün son gülüşünün gamzesini\nDördüncü yanlışının son doğrunu götürüşünü görürsün bitirdiğin hazneyi\nToprağın hayat olup üstüne örtülüşüne üzülürsün sevmeye çalışırsın yeni mahzeni\nSevdiklerinle ağlamadan\nHiç kimsenin ağlamadığı duruşa bak hayat bu\nHayatın bir tek sana ölüşü anlatmasam mı gerçeği ?\n\nSonra bana ne ona ne buna  ne şuna ne , ne senden ne benden gelen bir yardım var artık kalbin harbine\nAlarmın çaldığı yer mezarlık ve yangın var çatışmalarda artık son nefesi çoktan vermişsin\nHareketsiz kalınca sağ omzunun üstünde\nHerkes aklına geleni söylüyor herkes biliyor artık yoksun ve yok pazarlık ömürle\nFarkında değil dargınlar farkı bilmiyorlar uyuşmuşlar , enseleri karıncalanmış hain dostlar\nOnlarında bütün ömrü boşa harcanmış\nÖmür boşa harcanılanmış oysa\nYa hayat buysa ?\nBu an sa ?\n\nGel benimle bu yangında üşüt kefeni geberip\nGel Benim gibi aklını üşüt , düşünmeden ederi\nYerin 2 metre dibine düşüp hakkımızı bölüş eşit\nKatıl bana en tepeyle görüşelim eşim\nSebeplerle gidelim hep beraber geçelim eşiği\nSebeplere soralım ışığı\nSorun ne , sorun kim , sorun nerde filanı\nSoralım bunları olum problem var heryerde\nYoksa sorun bizmiyiz?\nYoksa çözüm , biz neyiz ?\n\nLiderliğe oynayacağız nasipse ışıklar sönmeden\nÖldüğümde babam beni gömmeden\nAnnem bana ölmeden\nKardeşim yine bana sövmeden\nZirveye çıkacağız karlar erimeden\nDünya tersine dönmeden\nGüneş önümde\nAy gönlümde\nGün gelip de devran yine dönmeden\nIşıklar sönmeden ömrümde\nÖmrüm boşa gitmeden\nBaşarabilirdik.\nNeden öldün ?\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 567,
    "title": "Milyarlarca yüz, hepsi aynı anda asık mutlu",
    "body": "Milyarlarca yüz, hepsi aynı anda asık mutlu\nBir yanda sonsuz hayatın boşlukta asılı kalan kadim zamanı\nMilyarlarca göz, hepsi gelecekten umutlu\nOnsuz bir hayat tasarlanamaz artık bitti sürenin tamamı.\n\nGöklerden bir ses gelecek 2. günün şafağında\nYer oynayacak yerinden son bir bakış atmasam mı ?\nİlk kelimeyi seçmedim ve buna üzgün değilim\nTop artık sizde , ceketleri ilikleyip eğilin.\nTamamını.",
    "category": "en_iyiler"
  },
  {
    "id": 568,
    "title": "Bir ışık gördüm",
    "body": "Bir ışık gördüm\nTek çareymiş gibi çağıran \nEllerini uzatan\nSessizce anlatan\nBir hayli dertsiz.\n\nGözlerimi kapattım bende\nKaranlık iyiydi \nTanıdık biriydi hem de.\nOlabildiğince hadsiz",
    "category": "en_iyiler"
  },
  {
    "id": 569,
    "title": "İçinden gelen bir ses olduğu için onu duymazdan gelirsin",
    "body": "İçinden gelen bir ses olduğu için onu duymazdan gelirsin\nHalbuki nereden geleceğini nereden bilebilirsin ?\nSen hayallerini erteleyen bir insansın\nBiraz pervasız baya insafsız\nDiye bilirsin...\nDiyebilirsin...",
    "category": "en_iyiler"
  },
  {
    "id": 570,
    "title": "Son defa yüzüme bak ve sus",
    "body": "Son defa yüzüme bak ve sus\nBana beni sevdiğini söyleme , bana gözlerinden nefret kus\nUzayan günlere inat gülüyorum kısalan gecelere\nHavalar da ne güzel gitti bugünlerde değil mi ?\nRica ediyorum gün batımına da küs\nVermesin ses...",
    "category": "en_iyiler"
  },
  {
    "id": 571,
    "title": "Sözlerini bilmediğin bir şarkı gibi bu sefer anlatacaklarım",
    "body": "Sözlerini bilmediğin bir şarkı gibi bu sefer anlatacaklarım\nYalnız kalmak ister gibi\nÜst üse ikinci sigarayı yakar gibi\nKendini dinler gibi\nVicdanınla başbaşa kalıpta\nYapman gerekenleri hatırlar gibi\nYapmadın , yapmayacaksın\nO işi yapacak zamanı bulamadıysan\nTamamlayacak zamanı nerden bulacaksın ?\nTelafisi olacak mı hataların ?\nGeri gelecek mi geçirdiğin zamanların ?\nSonu neydi azanların ?\nErtesinde ne vardı pazarların ?\nYeni başlangıçların ?",
    "category": "en_iyiler"
  },
  {
    "id": 572,
    "title": "Denemeden bilemezsin",
    "body": "Denemeden bilemezsin\nBilemeden gidemezsin\nGidemeden dönemezsin\nDönemeden denemezsin",
    "category": "en_iyiler"
  },
  {
    "id": 573,
    "title": "Giden geri gelse",
    "body": "Giden geri gelse\nBiten yenilense\nZaman daralırsa\nDüşün sona 2 saniye var\n1\nDoğu batı kuzey güney eyvah\nAy şaşkın güneşin aşkına \nDünya yalnız.\nDünya tek başına \n\nBöyle şeylere alışkın değil \nBu böyle 7 milyar küsür yıllık bir seyir\nKapanıyor bir devir\nYüzünü şimdi batıya çevir\nZehir\n-1\n\nBir mucize gerçekleşebilir\nÇünkü bir şeyler yolunda da gitmeyebilir\nAy dönmeyebilir\nGüneş sönmeyebilir.\nGüneş yalnız.\nGüneş tek başına.\nKonuşmaya çalışabilir\nBelki bir süredir düşünüyor da olabilir\n7 milyar küsür yıl kadar sürebilir\n\nYaşlı bir çift\nO ona o ona \nNefes zehir.",
    "category": "en_iyiler"
  },
  {
    "id": 574,
    "title": "Başucum boş.",
    "body": "Başucum boş.\nPerdeleri çekik benim hayat pencerelerimin\nÖyle istediği gibi girip çıkamaz düşünceler aklıma\nDünya hoş ama ışığı loş.\n\nBen sen olsam önce bir bakardım kendime\nAnlamak için kim olduğunu bi sorardım derdime\nNeden bu acı\nNeden bu ızdırap\nNeden bu sancı\nNeden neden neden ?\nNeden hala yerinde başının tacı ?",
    "category": "en_iyiler"
  },
  {
    "id": 575,
    "title": "Dönüyoruz milyarlarca gündür",
    "body": "Dönüyoruz milyarlarca gündür\nSen git gözünün üstünde kaşı var diye aynı nefesi soluduğun paydaşını öldür\nGerçekten söyleyecek bir şey bulamıyorum sana ey insan\nÖnce aklını başına devşir\nSonra gel içimdeki yangını söndür\n\nKalan ömrün laf mı şimdi aklın yanında esamesi mi okunur\nHer an bitebilir bu devran , şaşkın bakışında ceremesini doldur\nBen sana ne kadar şiirde söylesem şarkılarda dizsem\nEn sonunda olacak olan , kendi kendine getirdiğin sondur\nBari gel gönlün rızasına bir kelebek kondur",
    "category": "en_iyiler"
  },
  {
    "id": 576,
    "title": "İlk defa koşmak kadar kolaydı yaşamak derken",
    "body": "İlk defa koşmak kadar kolaydı yaşamak derken \nDüşüp kulağına çarpan o iğne gibi bir tanecik damlaydı seni ürperten hiçten\nÜstelik gökyüzünün engin çıplaklığını farkettiğinde çocuk , masmavisini keşfettiğinde içten\nKolaydı acısına alışmak ama dikkat etmemen soru için kafi piçsen resmen.\nÖnemsememek gibi bişey aldığın bu soluk dahi\nTepene düşecek bir damla daha asıl korkunç olan\nBunun ağırlığını omuzlarında taşımak yoran \nYani ;\nSırılsıklam olana kadar yağsa ya seslen !\nYada öyle bişey olsa ki yeni bir şey sandığını sorsan sersem !\nBir yudum su be bir yudum su için hep sen\nDuymadın mı Tanrının sessizliğini ?\nÖyle bir şey olur mu ki yağmıyor varsaydığın gökten.\nBulutsuz..\nHuzurlu huzursuz..",
    "category": "en_iyiler"
  },
  {
    "id": 577,
    "title": "Hepsi !",
    "body": "Hepsi ! \nAklım sonsuz kainatta , aklım zerreler zerresi\nÖmür bu , her geçen an daha da yakın bir son ama\nTakılıyor işte aklıma , bu ölümlerden hangisi ?\n\nKarşıma geçse de bakışsak bir tanesi \nNe bu bütün kalplerdeki kin , tövbeler tövbesi !\nKaderimde yazmak yazılmış eyvallah tamam ama\nMadem ne olur ya artık çocuklar ölmesin.\nYada dursun dünya , dönmesin !",
    "category": "en_iyiler"
  },
  {
    "id": 578,
    "title": "Ertesine geçiyorum varlığın",
    "body": "Ertesine geçiyorum varlığın\nYok ediyorum armağanlarımı\nTerkediyorum sizi masallarım\nO ne istiyor ben ne istiyorum\nHangimiz hafif , hangimiz ağır ?\nHangi birimizin ıslah fesatları\n\nBenden uzak durda\nBenle uzak durma\nBana tuzak kurda\nBeni ufak sanma ama\nBen o tuzağa düşerim \nAğlamamak için gözlerimi zor tutuyorum\nKulaklarım sağır\nYüreğime bağır\nBedenim üryan üşürüm\nAnlat bana masalları\nMutlu sonlarla biten , dilleri ağır\nÖlümde şartsa değerlendir fırsatları\nBeni soğuk toprağa iten son, bana güneşli gökyüzünü çağır",
    "category": "en_iyiler"
  },
  {
    "id": 579,
    "title": "Biliyorum da bahsetmiyordum olacaklardan",
    "body": "Biliyorum da bahsetmiyordum olacaklardan\nEn güzelini en sona sakladığımda kurtuldum sorulardan\nBir iki defa göz kırpmıştı bana kirpikleriniz\nMilyonlarca insan göçmeden gelince bahsettikleriniz\n\nAlıp götürür müydü rüyalar beni rüyaya\nBir daha gelebilir miydim Dünyaya ?\nİki kere iki eşittir iki\nO kadar yazdım , o kadar saydım \nO kadar azaldım ki şu uzaklardaki yıldızlardan kaydım\nCaydım , caymadım , bunu yapmalıyız , buna ihtiyacımız var da\nO kadar zavallı ki durum bir hapis kuşum saraylarda.",
    "category": "en_iyiler"
  },
  {
    "id": 580,
    "title": "Bu dünya bir cennetse",
    "body": "Bu dünya bir cennetse \nMelekleri değilmiyiz biz\nKavgalar ediyoruz nedense\nYa gelen son trense bindiğimiz\nÖdeyeceğiniz son bedelse son nefes\nÖzleyeceğin en çok annense beklerken\nYa bu dünya seninse herkesin de olduğu gibi\nYalanlar söylerken hemde\nSavaşlar veriyoruz nedense\nYa giden son gemiyse indiğimiz\nÖdeyeceğimiz ilk bedelse ilk nefes\nÖzleyeceğin en çok kardeşinse o seni beklerken\nYa bu dünya benimse herkesin olduğu gibi\nGerçekleri saklarken \nBu dünya bir cennetken hemde",
    "category": "en_iyiler"
  },
  {
    "id": 581,
    "title": "Bütün gözlerin üzerinde olduğu bir tiyatro oyununun son perdesindesin",
    "body": "Bütün gözlerin üzerinde olduğu bir tiyatro oyununun son perdesindesin\nHep bir ağızdan alabildiğince sessizler kesin\nBoşluğa bakıyorsun\nOnlara soruyorsun\nBağırıyor gibi sesin\nMeleklere bak sen , sormuyorlar nesin ?\nOsun.",
    "category": "en_iyiler"
  },
  {
    "id": 582,
    "title": "Sen şimdi kalıyorsun ya aynanın karşısında kendinle bir başına",
    "body": "Sen şimdi kalıyorsun ya aynanın karşısında kendinle bir başına\nİçinden konuşuyor ya bişey\nO içinden geçen şeyleri geçirten var bir yerde yalnız başına\nSen yalnız değilsin\nKaçma boşuna\n\nRuhun var içinde sana can veren\nGeriye dönmem diyen zaman geçerken\nAşık olan \nÜzülen\nGöz yaşlarını gözlerinden döktüren ruhun var sana isminle seslenen\nSen yalnız değilken o yapayalnız \nBu gitmesin hoşuna\n\nHuzur nerden geliyor sanıyorsun\nArıyor musun ?\nSoruyor musun bilene ?\nYoruyormusun ruhunu 1001 küfür kıyamet\nNe olursun bırak zulmü olması gerekene biat et\nEn baştan al hikayeni\nAğlıyordun en başında kabul et\nAğlayacaklar peşinden sen giderken \nAğlıyoruz hepimiz ne olur bize yardım et\nDinle kendini ve çöz bu düğümü \nSonra terk et.",
    "category": "en_iyiler"
  },
  {
    "id": 583,
    "title": "Kısa lafın uzunu :",
    "body": "Kısa lafın uzunu :\nÖmrün sonu gibi bekledim kendime neşeyi\nYardım eden de olmadı\nHer defasında ucu ucuna döndüm köşeyi\nİki tane ben vardık içimde dışım\nSanki ömrüm boyunca bu zat için varmışım\nYardım eden de olmadı\nSanki kendime en yakın içimdeki ben arkadaşım\nKoştuğum yollarda düşürdüğüm her heceyi\nVardığım sonlarda düşündüğüm tüm gerçeği\nEllerimde ne var ne yok tek tek hepsini\nBir anlam için varoluşta saklamışım\nO yalınmış ben yapayalnızmışım\nHer gecenin başında\nHer sabahın sonunda\nHer nefes alışımda ayna karşında\nYardım eden de olmadı\nSona kalmışım , sondan kalmışım , son kalmışım.\nŞimdi kürek gerek herşeyi anlatmaya \nYardım gerek\nEl at \nHu\nYa hu\nVarsan tabi herşeyi yeniden başlatmaya\nYersen yasak elmadan bir lokma daha\nKalsan bu cennet çöllerde daha da bir dakika\nDaha da bir umut\nBelki yardım eden de olmaz sana \nKalırsın gelmiş geçmiş ne varsa unutup\nBir için uyanıp\nİki için uyuyup\n\nBen diyorum ben sana en çok yaklaşık\nBen diyorum ben sana “en çok yaklaşıp”\nElimi yüreğimde tutuyorum geldim sadede\nYardım için doğrulup da âlemi cihana haykırıp\nSende yordam esirgeme çözülsün bu sarmaşık.\nKafalar karmakarışık\nBuhran etraf\nDarmadağınık\nYa hu..",
    "category": "en_iyiler"
  },
  {
    "id": 584,
    "title": "Bu sonu isteyen bir benim",
    "body": "Bu sonu isteyen bir benim\nBana tek yardım etmeyen kaderim\nÇift gelsin zarlar yahut yenilirim\nOlan bana mı olsun bu son seferim\nBu kader benim\n\nTat vermiyor oyunlar \nArtık yüzmüyor gemilerim\nDaha fazla oynamak istesemde\nİster istemez bastırıyor mecbur kederim\n\nSırtımda bir beyaz pelerin\nSürünüyorum yerde yerle birim\nVaz mı geçeyim ?\nÖlüm mü haklı zaferim\nOlan bana mı olsun \nKi bu hüzün mü benimki\nO seçtiğin benim öyle mi ?\nAşk olsun hiç haber de vermedin\nAnca mı aklına geldim\nAnca mı kendime geldim ?\nSana mı geldim ?\nBana mı geldin ?\nNerde barıştık ?\nYerde kavuştuk.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 585,
    "title": "Ah",
    "body": "Ah\nYine o şarkı\nYine aynı ritm aynı sözler aynı mantık\nGökyüzünde aynı martı\nLimanda ben aynı yalnız\nGüneş hep orda yalnız sanki bulutlar biraz farklı\nYine göğsümde bir şiir telaşı\nYeni bir his için atılmış bir oltayı bekleme hissiyatı\nArta kalmış bir kırıntı kaldıysa bulup doğru kelimeleri \nGüneşi yansıtıp bulutlara son bir kez ağlayarak\nBir anda tuttuğunda o renk \nAtacağım o martıya aklımı.\nÇünkü çok kısa bu şarkı ve belkide son şansım.\n\n2\n\nBen zaten,\nGitmek istiyorum uzaklara\nKaçmak istiyorum bu şehirden\nBelkide kendimden .\nOoo\nBen bazen.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 586,
    "title": "Kendime bir vefa borcum olduğunu anladığım günden beri ne bir adım…",
    "body": "Kendime bir vefa borcum olduğunu anladığım günden beri ne bir adım ileri gittim ne de bir adım geri\nO ise kaldı orda...\nBaktım olmuyordu\nİstemezdim ama mecbur küstüm\nÇok üzgündüm kendim\nBizi çok üzdüm.\nBravo bize.",
    "category": "en_iyiler"
  },
  {
    "id": 587,
    "title": "Sor oğlum",
    "body": "Sor oğlum\nYasak değil soru sormak\nCevaplar aramak yanlışlara\nİnanmamak inanışlara\nGüvenmemek davranışlara\nSor oğlum\nBitmesin şüpheci tavırların\n\nÖğren herşeyi \nÖğret öğrendiklerini\nYırt kendini ikiye tam ortadan\nHaykır içine içine durmadan\nSor oğlum\nBitir birini başlat diğerini çağların\nRehber olsun gökyüzünün olayları",
    "category": "en_iyiler"
  },
  {
    "id": 588,
    "title": "Sanki zaman duracak",
    "body": "Sanki zaman duracak\nVe gökyüzünde sonsuz bir bulut\nTüm kalplerde çaresiz bir umut\nCennet ve cehennemi unut\nİnsan için ne yaptın ?\n\nSanki tamam olacak\nVe yeryüzünde hangi puta taptın ?",
    "category": "en_iyiler"
  },
  {
    "id": 589,
    "title": "Hoş benim söyleyeceklerim bitmez",
    "body": "Hoş benim söyleyeceklerim bitmez\nBu kavga da bitmez\nBaşka yere gitmez\nSöz müzik insanoğlu \nKendi çalar kendi söylerde\nHevesi beş para etmez\nLoş , karanlığa dönüşüyor diye güneş sönmez\nÇünkü zaman kendiliğinden geçmez\nElbette ki mümkün öteki diyarlara yolculuk\nAma Tanrı adam seçmez\nSerden geçmez\nYitmez\nSessizliğe karışsan\nYokluğuna alışsan\nSenin için çalışsan\nNasibinde yoksa bir yudum su vermez.\nGöğsünü germez\nGururundan ölmez\nSen bildiğini sanırsın\nTanrıyı mahluk görmez.\nGöremez ama iyi bilir\nDuyamaz\nKoklayamaz\nHissedemez\nKeşfedemez\nZapt edemez\nAma bilir\nO kendini bildirtir.\nOna göre yaşa. Paşa paşa..\nBaşka türlü ömür geçmez",
    "category": "en_iyiler"
  },
  {
    "id": 590,
    "title": "Benim şahsi inanmadığım değerler doğrultusunda ,",
    "body": "Benim şahsi inanmadığım değerler doğrultusunda ,\nYa bu adamın söyledikleri doğruysa ?\nVe gerçek olursa ?",
    "category": "en_iyiler"
  },
  {
    "id": 591,
    "title": "Upuzun bir yol benimkisi güneşten gelip toprakla biten",
    "body": "Upuzun bir yol benimkisi güneşten gelip toprakla biten\nGölgelerde yardım edin ki nemle bitsin hikayem.\nHayal kırıklıklarıyla döşenmiş kaldırım taşlarının her adımında sıcak\nÇıplak ayaklarım , koşamıyorum , parmak uçlarım yanık.\nHalim harap.\n\nBu senin sınavın oğlum daha sorunun ne olduğunu yeni öğrendin.\nSorumluluk almayı sor amcalara , cevaplara cevaplar gelsin\nDüşünceler yansın ayakların gibi\nYere düşsün tırnakları",
    "category": "en_iyiler"
  },
  {
    "id": 592,
    "title": "Tik tak tik tak",
    "body": "Tik tak tik tak\nYeryüzünü düşün gökyüzüne bak\nHer şeyini iki kuruşa sat\nAlan alabilirse alsın bu yükü\nYüklenebilirse bu göz göre göre yaşanan düşü\n\nBir tuğlayı bile sevebilir mi insan ?\nAğlayabilir mi fırtınaların denizlere yaptıklarına\nYaptığı iyi kötü her şeyden çok pişman\nKeşke yarınlara taşımamak mümkün olsaydı dünü\n\nEller günahkar , diller günahkar\nBekletti Allah ! Geçen zaman kâr\nBekliyorum o gün ne gelecek başıma\nDüşünmekten yoruldum cevapları tek başına\n\nBaktım , buldum , yazdım üzerine ömrümün taşına\nYandım , söndüm , yazgım gökyüzünde münazara tek başına\nAllah yarattı diye kıyamadım şeytana\nO anlarsa öyle yaraşırız yaradana\n\nAşkım aşkı aşkla yaşayabilmenin mutlu hüznü\nGözyaşlarım gözyaşı nehrinden umut bulup süzüldü\nArkadaşlar , işte orada , kara göründü !\nKorktuğunuz ölüm , gönlümdü...",
    "category": "en_iyiler"
  },
  {
    "id": 593,
    "title": "En iyisi bitsin bu rüya",
    "body": "En iyisi bitsin bu rüya\nEn güzeli buydu güya\nEn özeliydi\nEn \n\nCennetti Dünya\nİçindeki iyi kazanmıştı zaferi\nBir önceki hayatından galip gelmişti buraya\nEn özeliydi mükafatlardan\nAldığın nefesti verdiğin geri\nZamandı ileri\nGöçüp gideceksin yine buralardan\nÖteki Dünya da cennetin diğeri\n\nSeç olmak istediğin yeri\nCennetteki Dünya\nDünyadaki Dünya\nYa bugün ya dün \nYa rüya\nYa hülya",
    "category": "en_iyiler"
  },
  {
    "id": 594,
    "title": "Bir süre sessizlik ve ardından gelen kalburüstü bir nida",
    "body": "Bir süre sessizlik ve ardından gelen kalburüstü bir nida\nHepinize soruyorum neden hala barışmadı Dünya ?\nMerhaba , benim adım Oğuzhan , siz beni 2 olarak tanırsınız\nKelimelerden bir çağ başlatıyorum ve bu çok güzel bir rüya.",
    "category": "en_iyiler"
  },
  {
    "id": 595,
    "title": "Zaten her güzel şeyin bir sebebi var",
    "body": "Zaten her güzel şeyin bir sebebi var\nTanrının da sana vaad ettiği şeyler gerçek rüyalar\nBir an için hızlanırsın\nBir narayla canlanırsın\nBir coşku için seni durdururlar\nUyuklarsan uyanırsın\n\nHatırla\nÇok güzel olduğunda koşar annene sarılırsın\nO da buna ağlar",
    "category": "en_iyiler"
  },
  {
    "id": 596,
    "title": "Krallar ve soytarılar",
    "body": "Krallar ve soytarılar\nHangi biriniz farkında bu mimiksiz oyunların \nSevaplar ve duaların\nSonu var mı günahların ?\nNe yazıyor sayfalarda ?\nHangi biri arzuların ?\n\nSon.",
    "category": "en_iyiler"
  },
  {
    "id": 597,
    "title": "Doğru musun gerçekten ?",
    "body": "Doğru musun gerçekten ?\nKendine verdiğin bütün sözleri tuttun mu ?\nPeki diyelim ki o insan sensin , sen aşksın.\nDüşmanlıklarını unuttun mu ?\n\nSen kendine bir ayna daha al ve bir daha bak gözlerine\nKendini görene kal orda kal \nPes etme\n\nBen beklerken ölürsem\nBunu bile kendine dert etme.",
    "category": "en_iyiler"
  },
  {
    "id": 598,
    "title": "Bu hayat acımasız ve bana göre değil",
    "body": "Bu hayat acımasız ve bana göre değil\nBu amaç , bu yargısız infaz\nTanrıdan gelen milyarlarca ikaz\nBana tap , önümde eğil\nOnlarca meyil\nBence itiraz.\nAz bile !\n\nSana gelince ey sevgili insan ,\nBiraz değiş.",
    "category": "en_iyiler"
  },
  {
    "id": 599,
    "title": "Tuzla buz olmuş paramparça",
    "body": "Tuzla buz olmuş paramparça \nNeler neler anlatmış gözbebekleri\nNeler saçmalamış senelerce\nYalanlar söylemiş istemeyerek\nAl demiş beni kendine kat\nRuhumun rengini tat\nBana kaşlarını çatma\nBeni üç kuruşa sat\n\nEn çok ben razıyım der ağıt\nTek cümle yazılı bir kağıt\nDikkatini dağıt\nVur bitane\nTuzla buz et \nParamparça\n\nNeler neler anlattın göz bebeklerim\nNeler saçmaladın senelerce\nNeden yalan söyledin bilerek ve isteyerek\nAl şimdi ruhunu sat\nRengine siyahlar kat\nKaşlarını indir\n3 kuruşun peşinde dolaş \nBir köşe bul\nYat.\n\nEn çok ben razıyım yaz kağıda\nKoy bir nokta\nO kalsın etrafındakileri dağıt\nTuzla buz et\nParamparça",
    "category": "en_iyiler"
  },
  {
    "id": 600,
    "title": "Keşke Dünya'daki bütün şarkıları ezbere biliyor olabilseydim .",
    "body": "Keşke Dünya'daki bütün şarkıları ezbere biliyor olabilseydim .\nBütün aşkları bütün pişmanlıkları bütün mutlulukları ve bütün hüzünleri anlayabilirdim o zaman. \nBelki öyle bir şarkı yapardım ki Dünya'daki bütün bu ilhamlardan\nKainat mest olurdu,\nKurtulurduk kavgalardan...",
    "category": "en_iyiler"
  },
  {
    "id": 601,
    "title": "Bir derdimin bin dermanı olur mu ?",
    "body": "Bir derdimin bin dermanı olur mu ?\nSes verirken duyamazdın \n\nÇırıkçıplak bir çığlığı istesem de susturamaz\nBaksam da göremez\nAğlarken de duyamazdım\n\nGüneş orda ay orda yıldızlar gezegenler galaksiler\nHerşey !\nBeni bir kere duydular\nAnlatsam da inanmazdın\nAnlatmadım",
    "category": "en_iyiler"
  },
  {
    "id": 602,
    "title": "Usul usul izledin olanları",
    "body": "Usul usul izledin olanları\nO dikenli yollarda bitmeyecek sanmam sessiz insanların çığlıklarını\nBiliyorum biliyorsun Sessiz.\nSallıyor denizlerin\nDalgaların yükselirken uzun, düştüğü yerler derin.\n\nUzun uzun dinledim olanları.\nKızgındım aklım\nSıcak fikirlerin ılıkla buz arasında bir yerde senin\nDüşüncelerim serin.\nKendim için en kısa yolu seçtim\nDoğru yada yalnız , yanlış yada hatalı\nİnan en uzun yol da biraz meşakkatli ve Tanrısal farkındalıklı,\nOrta yolu bulmamız lazım sedasız.\n2 ye düştü ya o an , uyan ,  \nYa biri bu uyandıran ya iki bu , karanlığı duyan.\nYa kendini haber ver , ya da beni sal telaş zincirlerimi göstereyim pervasız bileklerimde duran.\n\nSessiz deniz , huzur istedi senden \nSessiz iklimlerini başında bekleyip beslediğin tavrın gibi her telden\nBuz gibi yazlarında güneşi batmıyor akşamların\nNereye gidiyoruz pusulasız benzerliklerin köpük köpük taşkınlıkları..",
    "category": "en_iyiler"
  },
  {
    "id": 603,
    "title": "Halimi sorarsan berbat",
    "body": "Halimi sorarsan berbat\nAklımdan çıkmıyor yediğim her halt\nSessizliğim çok gürültülü içerde\nSorular ve cevaplar aynı anda aynı yerde\n\nDuyamıyorum doğrusunu\nUluyor bir kurt bitirmiş uykusunu\nAnlayabileceğinizi bilsem tarif ederdim\nRuhumun karanlık kuytusunu\n\nHayat daha fazla tanıdık geliyor son günlerde\nDejavular normalden uzun sürüyor bazen\nBir defa olsun bitmesin istiyorum bu rüya\nAma toplumsal normlar ve annem\nBunlara rağmen halen...",
    "category": "en_iyiler"
  },
  {
    "id": 604,
    "title": "Sen de görüyorsan karanlıkta olanları",
    "body": "Sen de görüyorsan karanlıkta olanları\nBırak elindeki zili , farkına var oyunların\nBu sürüde malum köpekler yönetiyor koyunları\nBu şair çoban ne yapsın",
    "category": "en_iyiler"
  },
  {
    "id": 605,
    "title": "Şu devasa dünyada bir ufacık deprem olsa bütün koltukları titreten…",
    "body": "Şu devasa dünyada bir ufacık deprem olsa bütün koltukları titreten her yerde\nKayıtsız ne bir ruh kalsa ne beden\nKorkmayın izliyorum der gibi hissedersin derinden\nSeni sarıp dansa kalkman için yalvarıyor evren belinden",
    "category": "en_iyiler"
  },
  {
    "id": 606,
    "title": "Her adım yeni bir başlagıç",
    "body": "Her adım yeni bir başlagıç\nO gün sana böyle söylemiştim\nBu saklambaç oyununda ebe sensin ve ben seni sayman biter bitmez sobelemiştim\n\nKaranlık güzeldir\nSessizdir\nRenksizdir\nRüyaları da vermese tanrı ne yapardın\nHer biri eşsizdir",
    "category": "en_iyiler"
  },
  {
    "id": 607,
    "title": "Hayatın anlamını arıyorum",
    "body": "Hayatın anlamını arıyorum \nYeni bir şiire yeni bir ilham \nKendimi arıyorum \nİman\nHakikaten olduğum yerdemiyim ?\n\nVahiy renkli , muhtemel bir gökyüzü mavisi\nİlahi aşkı soruyorum önüme gelene\nİlahi ışığın peşinde\nİçime bakıyorum var bişeyler de \nDışıma bakınca gözlerim\nSavaş görüyorum , yaralar var derin\nDiplomasiler , sözler , yemin!\nBen açlıktan ölüyorum ve kutuplar daha az serin\nO kadar kalabalığız ki bu cennet çöplükte\nYarınımıza randevumda hazır değil yerim.\nCehennem ateşini güneşe bakıpta abartanlara karşı\nCennetin yanıp tutuşmasını isteyen ben\nBu dünyadayım , burdaydım , burası yerim\nBurası benim !\nEn azından benim için.\nŞimdi gidip kalan günlerimizi seçin.\nGelmeyin , gidin.\n\nHiçbirinizi affetmeyi dilerdim\nHepinizi affediyorum.\nAllah için.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 608,
    "title": "Anlamsız gelmiyor mu sana da olanlar ?",
    "body": "Anlamsız gelmiyor mu sana da olanlar ?\nAcısı yavaş yavaş çıkan bir günah gibi yaşanan\nEvren dönüyor bir şeylerin etrafında \n365 gün 6 saat sürüyor abi süreye bak\nMilyarlarca yıldır yeryüzüne bakıyoruz\nNerde kaldı sorulması gereken sorular ?\nKim kaybediyor , kim kazanan ?\nNeler oluyor , okumayanlar ?\n\nOysa ne hayaller kurdurmuştu sana\nEn güzelin vaadini okuman için bir cilt göndermişti \nSana bak demişti arşa\nBas demişti marşa\nSeni senin için istemişti de bu cennet rahme indirmişti\n9 ay 10 gün sürüyor abi süreye bak\nOnlarca yıldır aynaya bakıyoruz\nNerde kaldı verilmesi gereken cevaplar ?\nKim kazanıyor kaybederken azalanlar ?\nNeler oluyor ?\nAnlatsa ya okuyanlar \nSevabına",
    "category": "en_iyiler"
  },
  {
    "id": 609,
    "title": "Herkesten uzak neresi var ?",
    "body": "Herkesten uzak neresi var ?\nDeniz kokusunu çekmek istiyorum gibi içime\nİçim dar.\nRüzgar da değsin istiyorum tenime\nTenim yâr.\n\nBir şiir daha yazmayalı ne çok olmuş gel de bana sor\nVeda edemedim kelimelere\nAklımdalar.",
    "category": "en_iyiler"
  },
  {
    "id": 610,
    "title": "Cengaver bir delinin sol yumruğu beynime",
    "body": "Cengaver bir delinin sol yumruğu beynime\nİçten içe iç geçirir hesap sorar derdime\nBenim neyime..\n\nGüçlü bir akıntıda savrulmuşum öylece\nBeni benden alıp geri vermeyen geceye\nBen neyim ?",
    "category": "en_iyiler"
  },
  {
    "id": 611,
    "title": "Arkasından bakakaldığın sevinçlerin nasıl hüzne dönüştü birer birer…",
    "body": "Arkasından bakakaldığın sevinçlerin nasıl hüzne dönüştü birer birer ?\nHalbuki ne güzellerdi değil mi hayallerin ?\nGiden dönmeyecek bu göğsünü bin hançerle deler\nFalan filan.",
    "category": "en_iyiler"
  },
  {
    "id": 612,
    "title": "Gözlerimiz aynı hizaya gelince bakıp",
    "body": "Gözlerimiz aynı hizaya gelince bakıp\nDilimden dökülselerden kalbimden geçenlere hayret ettim farkına varıp\nBu kadar benzer iki ayrı şey \nBirisinden biri için harcarım seninle bir ömrü , bir ömrü geride bırakıp\n\nVarlığınla yokluğunla aldanır\nSade bir son hayal ederken\nBöylesine ender iki ayrı , şeyy\nGözlerini kaçırmasan , darlanıp.\nBizi hayal etsene bir içime akarken\n\nDağınıklığını topla aklımın odalarının\nYorganı ol yatağımın \nHayatım\nGözlerimiz aynı hizaya gelince şimdi\nBir ömürlük dostum oluver biraz sonra \nGönlüme bir şelale gibi akıp\nRuhumu gör ve elini tut , sol tarafımı bol bol sev ve yor aşkınla sonra halimi sor\nBen sana mecburum , bunu en iyi sen bilirsin\nSen benim ol \nSonsuz olalım , bu şiirin son cümlesini kenara bırakıp.\nSana bir soru soracağım.",
    "category": "en_iyiler"
  },
  {
    "id": 613,
    "title": "Bazen karanlıkları bulur da içinde de yürek , saklanır duvarının bir…",
    "body": "Bazen karanlıkları bulur da içinde de yürek , saklanır duvarının bir köşesine\nKendine kalır, sessizce söyler yalnızlığın şarkısını\n\nKorkmuyorum !\nRenkler sizden korkmuyorum sadece..\nYokluğunuza nispet\nVe ben ona buna şuna ait değilim.\nBu çirkin huysuzluğunuzdan da hoşnut değilim.\nBen o sandığınız kişi değilim\nBen benim.\nKaranlıktaki ordaki.\nDeğilim , değil mi?\n\nDerin bir nefes rutubetten , gözyaşlarımdan bir kafes\nHakedilmemiş saygısızlıklardan mı ibaret ,\nKeşke..\nKeşke kendimden önce kendimi dinleseydim zifirimde\nHer seferinde lanetindi bu , kabul et\nHep başkasını mutlu etmek için çaba sarfettin\nÜfleye üfleye ne kadar yangını söndürebilirsem o\nBu da mı ben değilim ?\nKimim ben ?\nOrdaki karanlık mı ?\nDeğilim , değil mi ?",
    "category": "en_iyiler"
  },
  {
    "id": 614,
    "title": "Sanki...",
    "body": "Sanki...\n\nYalnız kaldığımın yeni farkına varıyorum\nSiz , beni bırakıp öylece gitmiş \nSiz olmuşum , bir sonbahar akşamı soğuğunda bir şeyler diliyorum lazım olacak yarın sabahlara\nEh işte... Bir yandan da inanıyorum.\n\nYalnız bir rüyadan yalnız olduğun odandaki tavana uyanır gibi\nSarhoşluktan ayılırken bir anda bayılır gibi\nOyalanmayı bırakıp elini uzatınca dokunur gibi\nİstemeden olmaz , istediğin her şey olur gibi\nAğır ağır bir savaşı kazanır gibi\nAğlaya ağlaya bir galibiyet istiyorum beni anlamayanlara\nLazım olacak yarınlarıma\n'a güveniyorum\n\nGibi...",
    "category": "en_iyiler"
  },
  {
    "id": 615,
    "title": "Yavaş yavaş",
    "body": "Yavaş yavaş\nHızlı da çok hızlı\nSen gel bütün Dünyayla savaş\nİyilikle güzellikle anlayışla barış\nO sana yüz çevirsin\nSorsan bu da onun tarzı\nYazıklar ve lanetler olsun\nBuna alış.\n\nUçabilseydim göklerde\nGidip görebilseydim ne var yerde\nNeyi paylaşamıyor insanlar\n\nGörebilseydim sözlerde\nYalanı doğruyu ayırt edebilseydim her derde\nNiye anlaşamıyor kendini insan sananlar.",
    "category": "en_iyiler"
  },
  {
    "id": 616,
    "title": "Kelimelerin büyüsüne kapılma",
    "body": "Kelimelerin büyüsüne kapılma\nOnlar sana olan aşkımı anlatmak için değil\nDünyanın sonu eşiğinde kapının\n2 rekatta 4 defa yere değen beyin\nBu sefer Allahın rızası için önünde eğil\n\nÇocuklar ölürken büyük boyunlar eğik\nHer yerde partiler her yerde günah dillerde geyik\nBoşu boşuna boş şeylere boş yere boş yapa yapa tapınma\nHava kaçırıyor ruhun delik\nMelekelerini bile not alıyor melek",
    "category": "en_iyiler"
  },
  {
    "id": 617,
    "title": "Çok istiyorum Allah’ım ver bu şansı",
    "body": "Çok istiyorum Allah’ım ver bu şansı \nŞölen gibi olsa ortalık\nŞarkılar çalsa aklımın tüm köşelerinde\nKendime kapansam sadece kendime kalıp\nAğlasam mutluluktan\nGöz yaşlarım sel olsa yıksa duvarları çoşkunca akıp\nİmrensem güzelliğe \nEn mutlusu olduğumu varsayıp\nSona yaklaştığıma alışıp\nEnsemdeki nefesine karışıp\nYolculuğa çıkmaya hazırlanıp\nÖlsem sana\nÖlmeden önce ver işte bana\nGünahsa günah\nAyıpsa ayıp\nÇok istiyorum \nMahşer gibi kalabalık olsun etraf\nKafam gibi karışık\nAklımın tüm köşelerinde biraz sen \nİçime içime içlenerek ilerlesem\nAğlasam doya doya\nEn mutlusu olup güya\nSona doğru koşsam bir adım\nDoğsam insanlığa\nŞölen gibi olsa ortalık\n2 olsa adım\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 618,
    "title": "Bu kadar şiir bu kadar hatıra bu kadar aşk",
    "body": "Bu kadar şiir bu kadar hatıra bu kadar aşk\nKaç para ?",
    "category": "en_iyiler"
  },
  {
    "id": 619,
    "title": "Merhaba değerli arkadaşlar ,",
    "body": "Merhaba değerli arkadaşlar ,\nBu seferki güzel haber !\nYaşanabileceklerin en güzeli ,\nBaşarılarda birinci !\nGözünüzün önünde var olma sevinci\nHepinize kocaman bir naber\nGeldi iki .\n\nKolları sıvadım başlıyoruz savaşla savaşa\nYardım da şart mümkün değil tek başına\nYeterince oldum bakmayın sakın gözyaşıma\nHepinize kucak dolu sevgiler\nŞimdi onlar düşünsünler.",
    "category": "en_iyiler"
  },
  {
    "id": 620,
    "title": "Geceyi örtersin üstüne bir yastıkta ararsın rahatlığı",
    "body": "Geceyi örtersin üstüne bir yastıkta ararsın rahatlığı\nGözlerini kapayınca başlayan aydınlık aratmaz sana sabahlığı\nBir rüya daha verir sana Allah \nBu sefer anlatmazsın insanlığa\nOnlar seni dinlerler \nGönül ferahlığı\n\nAilen orda\nSevdiklerin orda\nBilmediklerin orda\nSenden açıklama beklerler\nBir zamansız ezan vakti çılgınlığı",
    "category": "en_iyiler"
  },
  {
    "id": 621,
    "title": "İstersen sen boz bu oyunu",
    "body": "İstersen sen boz bu oyunu\nAma dikkat et delikanlı , küçümseme rakibinin huyunu\nZaten o yazmış kuralların enini ve boyunu\nCümlelerle sürüyor bu süreç hep\nGözü kapalı kandırıyor koyunu\n\nÇok güçlü , çok kararlı , çok istiyor ve elde edecek\nKelimelerle zihnine girip oraya yerleşecek\nSeni istiyor, senin için o geçmişten gelecek\nGözyaşın varsa sakla , sakın görmesin onları\nYoksa bu savaş sonsuza dek sürecek\nVe barış ve adalet bizi unuta unuta bekleyecek",
    "category": "en_iyiler"
  },
  {
    "id": 622,
    "title": "Olması gerektiği gibi oldu herşey",
    "body": "Olması gerektiği gibi oldu herşey\nBen ince bir yağmurlukla yola çıktım çok uzağa\nO el sallayamadan uğurladı sonsuzluğa.",
    "category": "en_iyiler"
  },
  {
    "id": 623,
    "title": "Alacağım çok şey var senden Dünya",
    "body": "Alacağım çok şey var senden Dünya\nYa seve seve ver birer birer\nYa nefret ede ede beni geri çevir buna değerse\nBen üzerime düşeni yapıp her geçen gün biraz daha deliriyorum tamam ama\nSen de tersine dönmeyi söyle ister misin kelimerden ibaretsen",
    "category": "en_iyiler"
  },
  {
    "id": 624,
    "title": "Konuşurken gülen insanlar var",
    "body": "Konuşurken gülen insanlar var\nKahkahalar\nŞahşahalar\nZulüm\n\nBakışırken yalan söyleyemez gözler\nTantanalar\nSafsatalar\nİlim",
    "category": "en_iyiler"
  },
  {
    "id": 625,
    "title": "Bu son.",
    "body": "Bu son.\nYeni başlangıçlara uzanan bir halt etmişliğin bana bıraktıklarına küstüm.\nBu son.\nBeni kendi kendime hapseden irademi toprağa gömdüm.\nBu son.\nGökyüzüne bakmayacağım bir daha , yeterince gördüm.\nBu son.\nŞiirlere bir zarf bırakıyorum , yeterince öldüm.\nBu son.",
    "category": "en_iyiler"
  },
  {
    "id": 626,
    "title": "Varım diye başlayınca hüküm verdi yaradan",
    "body": "Varım diye başlayınca hüküm verdi yaradan\nKendinden oldu kendi\nBambaşkaydı benzeri \nTürler sürdü gelmesine oradan\nAnlamamız milyonlarca boş yıl\nBinlerce son gün sürdü toparlamadan\nSanki benle son buldu düşünceler ve yeniden başlangıçlar\nSanki tenimde var oldu gelmiş geçmiş tüm inanışlarlı davranışlar\nBi kendimi anlasam\nBi beni anlasalar\nBi kendimi anlatsam\nBi dinlese anlayanlar\nYokum diyememiş ki yaradan var çünkü orda işte\nKendi kendine oldu belki\nBilinmek isteyişti tüm bu olanlar\nBir an\nAnlaşalım mı şimdi tüm anlamazdan gelmelerde\nYeni bir bahçe kuralım mı ağaçlardan\nYepyeni bir hayat. \nUmut.\nYarınların misafirine\nKonusunu bahsetmeye erindiğim naralar\nSebebine rehavetim ve Sabır dolu yardımlar\nVe açık açık geldi hilafet\nBen buradaki en büyük muhalefetim\nİster sev ister sevin\nBirey kalacaktır yine ketum\nBir türlü gelmek bilmedi hayır dolu sabahlar\nBelki de gelmeyecek en çok umduğum\nİki çift lafım vardı dilimde tuttuğum\nÇatısı uçmuş bu evin\nVe kuşları uçmuş\nNe anlatsam ne dinletsem bilemediğim yordamlar\nBire bahsetmekten yorgun olduğum\nMuhtemelen güzel bu misafire bugün yarınlar\nYa yarın geldiğinde ne yapacak iktidar ?\nGöz mü yumacak ?\nKulak mı kapayacak ?\nDil mi bağlayacak ?\nTamir edilemez bir tarumarın torunları\nDüzelecek mi en sonunda manidar ?\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 627,
    "title": "Bir sürgüne gönderdi beni kendim kendime",
    "body": "Bir sürgüne gönderdi beni kendim kendime\nBir kayıktayım küreksiz\nSu alıyor, beni bana götürüyor sualsiz\nYetmezmiş gibi dalgalar ekleniyor derdime\nYapayalnızdım bensiz\nSuya yazılmış kaderimin arzı\nDinginliği de arsız sensiz\nÇarptığımda bir yerde bir bende\nYıkılacakmıyım umarsız ?\nSırılsıklam hemde\n\nSu getirenlerin çok olsun \nSu gibi aziz ol\nSudan sebepler\nSular seller gibi üç yudumla\nBismillahirrahmanirrahim\n\nHepsini aklımın en serininde hatırlarım illa\nHer yudum da varırım dalgalara.\nElhamdülillah\n\n2l",
    "category": "en_iyiler"
  },
  {
    "id": 628,
    "title": "Ne ben bileyim bunu ne sen.",
    "body": "Ne ben bileyim bunu ne sen.\nÖyle ki ;\nGözlerimden geçen fikirleri ,\nAklıma gelen bütün cümleleri ,\nRuhumu kesen bütün endişelerimi unut.\n\nBugün bu umut , bir umut gökyüzünde bir yerlere...\nSanki ezberlesin diye olup.",
    "category": "en_iyiler"
  },
  {
    "id": 629,
    "title": "Ki biz önümüzü bile göremiyoruz aydınlıkta",
    "body": "Ki biz önümüzü bile göremiyoruz aydınlıkta\nVe bu bir bilinçsizlik akıllardaki\nKalplerin zihinlere fısıltısını duyabiliyorum bu farkındalıkla\nMilyarlarlar\nSanki iğne arıyordum bir samanlıkta\nBuldum diyorum ! Burada.\nİşte ben ve 2\nTam biri.",
    "category": "en_iyiler"
  },
  {
    "id": 630,
    "title": "Neredesin ikilem ?",
    "body": "Neredesin ikilem ?\nNerde ağır cezalarının emir kulları iki elin\nNefret edilen yarınların zararları belalıyken sevilen\nDelirmemek elde değil , bu nasıl bir sevgi seli istenmeyen\nBu nasıl bir piçlik ?\n\nKatılmıyorum ya \nÇünkü hep katılıyorsun bana\nGüven veriyorsun gözlerini kaçırana dek hemde bekliyorsun o son anda seni bırakıncaya kadar sana\n\nDışarıdan görüldüğü kadar kolay ve güzel olsa keşke bu\nUnut o umutlarını umursamaz uğursuzluklarına peşkeş çeken huyunu\nÜzülme diye yansıtmıyor gözlerine gerçeği\nİçin , senin için haykırıyor \nSenin için geliyor ikilem\nBu da böyle bir hiçlik herşeyi içeren\nİşin.",
    "category": "en_iyiler"
  },
  {
    "id": 631,
    "title": "Kaçsam senden kavuşabilir miyim sana ?",
    "body": "Kaçsam senden kavuşabilir miyim sana ?\nTerk etsem en sertinden\nVursam sırtını serin serin\nYedi kat üstünde olduğun yerin\nKavuşur mu kollarımız ?\n\nAçsam gönlümü , gönlünün henüz geçilmemiş bir sokağından geçerken\nKaçabilir misin sen de gerçeklerden ?\nTenhada bir ileri 2 geri ?\nBu ne birinci ne de yeni\nOlur ya o sokak çıkmaz bile olsa\nKesişir mi bir daha yollarımız ?\nSavaşır mıyız ebedi ?\nEsaretin bedeli.",
    "category": "en_iyiler"
  },
  {
    "id": 632,
    "title": "Her birim bir diğerinden bir parça almış sanki der,",
    "body": "Her birim bir diğerinden bir parça almış sanki der, \nEtrafında dönüp dolaşırım düşüncelerimin.\n\nMesela anlatırım bazen seni yeneceğim yeri beni defnedeceğin yere\nHani o içimde patlayacak meraksı şeyi uyandırmanın imkansızlığına\nO ihtirasa\nO şevke\nVe sıkışınca şakaklarımdan akan tere\nAşka ve nefrete\n\nBeni benden alıp seni yalnız bırakırsan eğer\nBu seninkisinden de beter olursa eğer\nBu beni cehennemin dibinden cennetin zirvesine iterse eğer\nSebep olmaya ömür yeterse eğer\nBu yüzden oluşabilecek o imkansızlığı bana ver lütfen.\nEğer ikiye bölersen paylaşabiliriz\nVe bu ikimize de yeter.",
    "category": "en_iyiler"
  },
  {
    "id": 633,
    "title": "Bir kere düşünce o düşünceye",
    "body": "Bir kere düşünce o düşünceye\nDüşüp durmayı düşünür durursun\nDüşlerin misafirin olur \nSon dününü gösterir geceler\nÜşütür yer.\nLe bir olursun.\n\nYa mecbur kaldıysan\nYa sana bunu reva gördüyse yaradan\nSırlarını götürmen gerekiyorsa burdan\nGözyaşlarıyla kızarken herkes\nGöçüşüne Dünyadan.",
    "category": "en_iyiler"
  },
  {
    "id": 634,
    "title": "Ben nerden bileyim bütün bu olanlar başıma neden geldi ?",
    "body": "Ben nerden bileyim bütün bu olanlar başıma neden geldi ?\n\nYüreğimde öyle güzelinden yandı ki meşem\nElimden aldıklarında seni , ne huruzum kaldı ne de öfkem ve neşem\nNe hıçkırıyorum ağlarken ne yalnız kalabiliyorum kendi gölgemle başbaşam\nIşıklarım azaldı , düşüyorum peşpeşem\n\nBen biliyorum bütün bu olanlar başıma neden geldi\nSende söyleme bilmesinler...",
    "category": "en_iyiler"
  },
  {
    "id": 635,
    "title": "Cümlelerin de sonu gelir mevzu bahis onlarsa",
    "body": "`\n`\n`\n`\n`Cümlelerin de sonu gelir mevzu bahis onlarsa`\n`\n`\n`Son sayfanın son satırında elbet beliriverir bir nokta`\n`\n`\n`Boşluğa alınmış notlar eğer onlarsa`\n`\n`\n`Bir gün yeniden ışığa kavuşur ve yeniden zihinlerini yoklar bir süredir yoklarsa`",
    "category": "en_iyiler"
  },
  {
    "id": 636,
    "title": "Gün doğar her saniye yeni bir şehirde",
    "body": "Gün doğar her saniye yeni bir şehirde\nAy batar bitince gece\nDün olur bazen bugün\nYarın olur bütün hayaller\nUzun geceleri süsleyen yıldızlar göz kırpar bana\nMilyarlarca yıl öncesinden \n\nBen İstanbulum\nKendimi tam ortasında bulduğumum\nKurtulurum sandığım , olduğum.\nGüneşin doğduğuyum\nHilalin kancasıyım gece\nDünüyüm fetihlerinde\nŞairleriyim dizelerinde\nYarınıyım denizlerinde\nYıldızlara göz kırpan dünyanın incisiyim\nMilyarlarca yıl ötesinde",
    "category": "en_iyiler"
  },
  {
    "id": 637,
    "title": "Belki bir gün biri kulağına fısıldarsa aşk diye",
    "body": "Belki bir gün biri kulağına fısıldarsa aşk diye\nNefesini tut ölene kadar\nDönme sakın geriye\n\nSanki birden bire inanır gibi olursan şeye \nSebebini sor bulana kadar\nYap bunu kendine\nYorma kendini",
    "category": "en_iyiler"
  },
  {
    "id": 638,
    "title": "Olaylardan olay beğen her biri birer kargaşa",
    "body": "Olaylardan olay beğen her biri birer kargaşa\nHerkesin derdi biraz olsun münakaşa\nKötülük mü edilen peşi sıra inşa inşa\nTek çaremiz tek bir paşa\nBir elinde kalem bir elinde maşa\nÖzgürlük için özgür Türk ortaklaşa\nGerek yok telaşa , dua et arşa\n\nÇok hızlı alışıyorsunuz yavaş yavaş yavaşa\nÖlümden sonrasına siyah diyor bak hâşâ\nKorkusu sevincini vurunca içten dışa\nSavaşıyoruz işte uluorta ifşa\nDön başa koşa koşa\nDön alışmadan alışılmışsa alışılmışa\nHay yaşa !",
    "category": "en_iyiler"
  },
  {
    "id": 639,
    "title": "Yıldızlar aydınlık ve canlı",
    "body": "Yıldızlar aydınlık ve canlı\nBense dibe çöküyorum isimsiz bir denizde\nAyaklarıma taşlar bağlı\nÖlüyorum istemesenizde\nHer geçen metre daha bir karanlık\nSayenizde\n\nSu soğuk ve apaçık bağrı\nBense yanıyorum ismimi bıraktığım geriye\nAklımda aşklar ağrı\nHer geçen saniye daha bir aydınlık\nDaha bir hızlı\nDaha da yakın gönlüme ırzı\nÖlüyorum istemesenizde\nSayemizle sayenizde\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 640,
    "title": "Kan ter içinde kalmış durmuyor ruhum ,",
    "body": "Kan ter içinde kalmış durmuyor ruhum ,\nBenden bu kadar demeyen emanet bedenim\nBir tek aşk kalmış yıpranmayan duygum ,\nBir çift nefesle beraber yaşama sebebim\n\nKızıyorum , gülüyorum , kahkalalarla ağlıyorum ağlayışlarıma\nAzalıyor ömrüm yavaş yavaş , sadece bakabiliyorum artık arayışlarıma\nBir tek sen varsın beraber yaşlanmaya\nBir de ben varım kendimden kalan , varolma nedenim.\n\nBu hikayeye bir mutlu son lazım , elimdekiler hep cefa\nSefasını hangi tarafta süreceğimiz ne malum\nNe malum fezanın duyacağı\nBen yine vuracağım saza\nYazacağım ılık soğuğa\nÇünkü bir sen varsın beni tamamlayan\nBir de yarım aklım var kalan şiirce",
    "category": "en_iyiler"
  },
  {
    "id": 641,
    "title": "Sabretmeyeceksek zorlukların ne anlamı var",
    "body": "Sabretmeyeceksek zorlukların ne anlamı var\nSuçu kısmete yüklersin\nOyunu küsmeyle terkedersin\nAlttan almayacaksak ne manası var ömrün\nYalnızca bir kaç dakika için mi yansın bedenin diyarı öbrün\nYorgunmu avuçların?\nTerlimi içleri?\nFerahmı gönlün içeri\nYeter mi kızdığın diğerine var mı hiç ederi ?\n\nUzan ve kadere dokun\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 642,
    "title": "O kadar , o kadar özgürüm ki nefes almak ne güzel şeymiş",
    "body": "O kadar , o kadar özgürüm ki nefes almak ne güzel şeymiş\nAklımda kalanlar demir parmaklıklar ardında hür\nSeni özlüyorum mu ? Acaba ne demekmiş ?\nHazırlandım gidiyorum uzaklarda bir yere aklından çıkıyorum yeniden\nYeni varıyorum farkına\nO tokat uyanmam içinmiş\nDört dediğin iki kere iki\nGör ne içinmiş",
    "category": "en_iyiler"
  },
  {
    "id": 643,
    "title": "Olasılıklardan en düşüğünün bir fazlasıyım",
    "body": "Olasılıklardan en düşüğünün bir fazlasıyım\nMilyarlarcası arasından \"2\"\nBu hikayenin sonunda nasıl bir son var bilmiyorum ki\nTahmin edilemiyorun tam arkasıyım\nAma işaretleri de vermiyor değilim sanki\n\nBen bana düşeni yapıp yazıyorum her gönlüme düşeni\nSen okumazsın o okumaz ama bir yerlerde okuyor bunları birileri\nSenden dileğim sende seç bir sayı kendine\nYerimizde saymayalım artık hep beraber gidelim mi güzel günlere ?\nİleri iyi.",
    "category": "en_iyiler"
  },
  {
    "id": 644,
    "title": "Bundan böyle böyle",
    "body": "Bundan böyle böyle\nBaştan işine gelmiyorsa söyle\nGiderken arkana bakmazsan sevinirim\nGözlerime nasıl bakabileceksin ? \nNe ile ?",
    "category": "en_iyiler"
  },
  {
    "id": 645,
    "title": "Yalnız , hissetmiyorum artık yalnızlıklarımı",
    "body": "Yalnız , hissetmiyorum artık yalnızlıklarımı\nAynalarla vedalaştığımda , yolculuklarıma tamamladım hazırlıklarımı\nBir kitaba dönüştürdüm yazdıklarımı\nBir hitabe..\nOkuyanı yazarı 2\nKaybettim sandığımda bütün kazandıklarımı\nArta arta eksilen azaldıklarımı saydığımda\nNeden ki ?\n\nHakikaten aydınlattı mı karanlıklarımı ?\nKavuştunuz mu ayrılıklarım\nGünahlarımda bile sevaplar var yalancı bir dil ki bembeyaz\nOkuyorsan bile bile bunu bile bil.\nGökyüzüne minnet dolu bakışları attığımı her sabah\nYıldızlarda göz kırparmış geceden\nNeden 2 ?",
    "category": "en_iyiler"
  },
  {
    "id": 646,
    "title": "Geri gelmedim",
    "body": "Geri gelmedim\nİleri de gitmedim. \nOlduğum yerde durdum.\nHatta pes bile etmedim.\nSana neler olduğunu anlatırdım da derdim\nBen buralardan geçeli o kadar uzun zaman oldu ki seni görmek için geriye bakmaktan yoruldum.\nNeden bakmadın derdin.\n\nSana ben vermedim\nSenden ben almadım\nBu yarışmada 2. oldum selam verdim almadın.\nGözlerinden dolup dolup,  dönüp dolaşmadım, taşmadım.\n\nSana dilim anca bu kadar dönüyor ey insan..\n\nNe bir fazla ne noksan.\nSaymadım.\n\n![Geri gelmedim](images/Geri%20gelmedim.png)",
    "category": "en_iyiler"
  },
  {
    "id": 647,
    "title": "Bir canım kaldı",
    "body": "Bir canım kaldı\nHarcadığım oncasının aksine belki bu yüzden bu zamanı yetiştirememe telaşı\nHoşçakallarım güle gülelerimden fazla\nRüzgarlarım yelkenlerim dolsun limanlara kavuşsun diye mi tufan ?\n40 yıllık hatıralar bıraksın diye mi sade kahvelerim\nNereye gidiyoruz hepimizde aynı insan kostümü\nNerde şiir defterlerim ?\nNerde depremlerim ?\n\nPeşindeyim zaman yakalayacağım seni\nKementi dolayacağım dirseklerinden\nDurduracağım ileriyi\nGeri saracağım beri\nEn başta, 0 noktasında\nYeniden başlayacağım yeni\n2 hakkım olacak bu sefer\nBirinde güneşi batıdan doğuracağım\nDiğerinde ben doğudan batacağım.\nEbedi.",
    "category": "en_iyiler"
  },
  {
    "id": 648,
    "title": "Gözünüzün önündeyim işte",
    "body": "Gözünüzün önündeyim işte \nTam karşınızdayım etten kemikten \nSen hala bir mucize iste\nSanki ikna olacakmışsın gibi geçirdim ipliği delikten\nKelimelerden sana kocaman bir saray yaptım\nUzaklaştım senden benden herkesten",
    "category": "en_iyiler"
  },
  {
    "id": 649,
    "title": "Beyazın yanındaki siyah aydınlığın gizli kahramanı , sakin ol..",
    "body": "Beyazın yanındaki siyah aydınlığın gizli kahramanı , sakin ol..\nHer sevda seni cennete götürecek sanırsın ya yana yana\nSon sözünde söz verirsin umursamadan yalnızlığı \nAşk öyle bir çarpar ki yüzüne \nFeleğini şaşırırsın\nHayret !\n\nBu sana verilen kaçıncı şans , artık farket !\nKarış beyazına grinin\nCehenneme gitmemek için tut kendini bari , terket.\nSon bir söz ver bu sonuncusu olsa dahi\nAşk öyle bir çarpacak ki o zaman\nUykuların kaçacak , sahi...\nSeyret.",
    "category": "en_iyiler"
  },
  {
    "id": 650,
    "title": "İçim rahat",
    "body": "İçim rahat\nİçin rahat olsun \n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 651,
    "title": "Sonunda gökyüzündeyim",
    "body": "Sonunda gökyüzündeyim\nMuhtemelen daha da yüksekteyim",
    "category": "en_iyiler"
  },
  {
    "id": 652,
    "title": "Bir hayat var uykuda",
    "body": "Bir hayat var uykuda \nBir rüya ki gerçek sanırsın\nKendini mecbur hissedip korkudan gecelerden uyanırsın\nBir savaştır adeta \nBir yarıştır geçen zaman\nKalbini mağrur zannedip olduğun yere alışırsın\nVurur sana\nUyusana",
    "category": "en_iyiler"
  },
  {
    "id": 653,
    "title": "İçinden bir yerden gelir sesi, aklın başında sanırsın",
    "body": "İçinden bir yerden gelir sesi, aklın başında sanırsın\nEn güçlü son vuruşunun farkına anca varırsın\nHayat güzel , günler geçiyor ama kuşlar uçmuyor\nBu vicdandan mı nefisten mi ayıramazsın\nBir sana mı sandın yok oluşlar ?",
    "category": "en_iyiler"
  },
  {
    "id": 654,
    "title": "Canım yanıyor",
    "body": "Canım yanıyor \nHuzura kavuşuyor acılarım birer birer\nTırnaklarımdan çekiliyor ruhum\nYanyana gelmiyor kelimeler\nBir değişik tavırla gidip gelmemeler\nSonraya ertelemeler\nBir lambanın altında sorular çarpıyor yüzüme\nHani eskiler nerdeler ?\nNeden kapalı gönlündeki perdeler ?\nGün doğalı kaç gün oldu halbuki\nGüneş neden batıdan doğdu bu sefer ?\n\nAsırlardır savaşıyoruz\nSevişip yavrular doğuruyoruz \nÖlüyorlar\nGömüp dualar ediyoruz\nKim bilir hangi mertebedeler ?",
    "category": "en_iyiler"
  },
  {
    "id": 655,
    "title": "Tek odağım olan soru işaretinin belirsiz cevaplarından birindeyim",
    "body": "Tek odağım olan soru işaretinin belirsiz cevaplarından birindeyim\nBen gerçekmiyim ?\nYorgun düşmekten yorulduğum zorlu yokuşların neresinde bir yerdeyim\nNeresi yolum ?\nNe misyonum ?\nHangi yolun ne zamanı sonum ?\n\nCanınız cehenneme mi demeliyim\nHepimiz el ele cennete mi\nSeçim yaptım ama sordunuğunuz ben gerçekmiyim ?",
    "category": "en_iyiler"
  },
  {
    "id": 656,
    "title": "Göklerden gelip gökyüzümde paramparça bir buluttan yüzüme vurulan…",
    "body": "Göklerden gelip gökyüzümde paramparça bir buluttan yüzüme vurulan tokat yada her kimsen , belki güneş \nİçimde bir korku büyüyor ya bişey olacaksa gerçek\nYa git hala gitmediysen\nYa da gel gönlüme yerleş",
    "category": "en_iyiler"
  },
  {
    "id": 657,
    "title": "Bana bizim ne kadar ileri gidebileceğimizi sorsalar",
    "body": "Bana bizim ne kadar ileri gidebileceğimizi sorsalar\nBeni buna cevap vermeye zorlasalar\nHatta bana bir kelime için yalvarsalar\nOnlara cevap vermek yerine\nDeğer biçmek için değerine\nHesaba katmadan bir diğerini\nSöylemeden sebebini\nKalbimdeki seni\nGökyüzündeki yıldızlarla karşılaştırırdım.\n\nÖyle ki ;\n\nOnlar saymaya başlayıp bilmem kaç trilyonda yorulup bırakırlarsa\nBen sana o esnada hala sarılıp dünyamızdaki kum tanelerinin ne kadar az olduğunu anlatırdım.",
    "category": "en_iyiler"
  },
  {
    "id": 658,
    "title": "Halbuki biz şairler özet geçeriz",
    "body": "Halbuki biz şairler özet geçeriz\nÖzenle seçeriz\nSinsin diye.",
    "category": "en_iyiler"
  },
  {
    "id": 659,
    "title": "Koskoca kainat",
    "body": "Koskoca kainat\nOkyanusun dibinde bir kum tanesi\nHayvanlar bitkiler o muhteşem tabiat\nVirgülden sonraki bir desimal hanesi\n\nZaman !\nTamam !\nBuldum işte geçmişi düşünürken gelecektekileri\n\nI wish I could tell you about everything which is happening right now ,\nWithout mentioning the god and the choosens at the same time.\n\nPara ti, esto puede no ser real, pero todo lo que digo puede tener algo de verdad.",
    "category": "en_iyiler"
  },
  {
    "id": 660,
    "title": "İstediğin gibi gelişmesede aklındaki kelimeler kağıttaki cümlelere",
    "body": "İstediğin gibi gelişmesede aklındaki kelimeler kağıttaki cümlelere\nSen istemesini bilirsen fikrin adap olur akar mürekkeplere\nYarını düşünmezsen bugün hürken \nDün yüzüne tükürür sövmeye başlar sebeplere\nSen yine de iste\nZiyan olmasın\n\nTerlesin alnın , şakakların ısınsın , beynin yansın\nYüreğin kor olsun , dağları aş , olacak sansın\nErdemi öyle bir al ki ellerine\nSık avuçların kapansın \nDua ederken açarsın\n\nYanıyoruz yanıyoruz milletçe ülkece kürece yanıyoruz sinirimizden\nSavaşıyoruz görmeden\nAlışıyoruz bilmeden\nTaraşıyoruz birbirimizi görmeden\nYanaşıyoruz sona\nSanıyoruz ki ölmeden\n\nSen ne istediğini bilirsen\nNasıl isteyeceğin sana yol gösterir\nSen istemesini bilirsen\nAç avcunu\nO verir.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 661,
    "title": "Kendimi keşfettiğim kendim , sendin , derdim.",
    "body": "Kendimi keşfettiğim kendim , sendin , derdim.\nKendini gerçekleştirmesi gereken bir çocuksu heriftim derdim.\nEteklerindeki taşları hafif bir kaşif\nEtekleri zil de çalan zarif bir zenne\nAynı zamanda zaman da daralıyordu\nNe diyordu şair ?\nSe te be elif ?\n\nÖyle bir heyelan ki bu yokuştaki ayaklarıma acırım\nAmacı birkaç dolambaçlı miraç yolu muhtaç olduğum ihtiyaçlarımın\nÜfff zehir zemberekti arkadaşlarım\nBitmek bilmeyecekse tarifi\nAğrır hafif.",
    "category": "en_iyiler"
  },
  {
    "id": 662,
    "title": "Sanki hesap sorulmayacak",
    "body": "Sanki hesap sorulmayacak\nSanki bu yaptıkların yanına kalmayacak gibi yaşa bu hayatı\nBen hayatımdaki herkese helal ediyorum hakkımı\nBu da bu şekilde selamlamayı seçmem halkımı\n\nGünü gelecek bir şiirim ele geçirecek senin de aklını\nBiraz daha odaklanınca varacaksın farkına şarkının\nEğer değiştirebilirsen bir kelimesini diğeriyle\nKaybetmeden bilemeyeceksin değerini sabrımın.",
    "category": "en_iyiler"
  },
  {
    "id": 663,
    "title": "Yavaş yavaş geliyor uzaklardan sesin",
    "body": "Yavaş yavaş geliyor uzaklardan sesin\nNe söylediğini anlamıyorum\nKüfrediyorsundur kesin\nAlıştığım hikayeleri sana anlatmayacağım sende sorma\nNe bir kelime ne bir ima çıkmayacak vücut dilimden peşin\n\nSana gülmeyi yasaklıyorum ayna\nAma öyle dik bakışlarda atma \nEtme yemin",
    "category": "en_iyiler"
  },
  {
    "id": 664,
    "title": "Sana milyarlarca yılı anlatmak kolay",
    "body": "Sana milyarlarca yılı anlatmak kolay\nBana dikkatli bir saniyeni ayır\nGerisi olay",
    "category": "en_iyiler"
  },
  {
    "id": 665,
    "title": "Dün öldüm , bugün ölüyorum , yarın ölmem gerekiyor",
    "body": "Dün öldüm , bugün ölüyorum , yarın ölmem gerekiyor\nVicdanım rahatta , aklım hazır olda bekliyor\nBir işaretle çıkacağım evimden uzaklara yol\nBeni mahallemden al\nBeni şehrimden al\nBeni ülkemden al\nBeni lütfen dünyadan kov\nLutfen hazırlanılmışsa sona\nSoracağım sorular var ona\nAşk bu kadar güçlü diye var haset\nİyiliği yenemezsin , derhal pes et",
    "category": "en_iyiler"
  },
  {
    "id": 666,
    "title": "Uzun uzun bir nefes bulut",
    "body": "Uzun uzun bir nefes bulut\nZar zor alınan , ona sorduğun sanılan\nYaşamak için mecburiyken umut\nSadece insan mı yanılan ?\nPeki ya O ?\n\nGözlerimi kırptığımda orda\nİstisnasız her gece rüyalarımdan bir garipsemeyle uyanırım hatta ruhumu yumup adeta\nSadece kendim miyim buna inanan ?\nSence de doğrumu mu bu yalan ?\n\nPe-ki ya O ?",
    "category": "en_iyiler"
  },
  {
    "id": 667,
    "title": "Sabret",
    "body": "Sabret\nHa gayret...",
    "category": "en_iyiler"
  },
  {
    "id": 668,
    "title": "Ne geçmişte var yaşanmışlıklar",
    "body": "Ne geçmişte var yaşanmışlıklar\nNe gelecek o ustaca planlar var\nYok yere atan bir kalbin nefes alma çabasıyız hepsi bu\nRuh da hikaye beden de\nAşk var sadece\nHerhangi birine\nKoşulsuz\n\nAnın içine girmeyi denedin mi hiç ?\nUzaktan gelen müziği dinledin mi ?\nNe söylüyor notalar ?\nKaldın mı yapayalnız kendine\nNefes nefese\nSon şarkında hemde\nEsselâ\nSoluksuz\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 669,
    "title": "Üzmek kolay olabilir",
    "body": "Üzmek kolay olabilir\nÜzülmek kolay değil\nÜzülmemeyi öğrenmiş olmak acı olan\n\nÜzülmemeyi öğrenmek acı değil , üzülmemeyi öğrenmenin acı olduğunu düşünmek asıl acı olan\n\n65 yaşında olmakla 24 yaşında olmak gibi Üzülmemeyi ogretiyor hayat acıta acıta\nAcıya acıya alışıyor ama insan acıya\n\nEvet Evet , işte acıya alışınca hissetmiyorsun\nBurnunun kokuya alışması gibi\nBelkide bu şekilde yaşayabiliyoruz\nBu şekilde yaşamak için yaşıyoruz\nAcı içinde , acıya alışarak\n\nAcı eşiği bunu da mı yasicaktim dedikçe yükseliyor üstelik \nBunu deyince daha az acımaya başlıyor kesik\n\nEn acı olan ne peki ?\nAlışması en zor olan ?\nAcısı en son geçen ?\nGeçmeyen ?\n\nGüveninin boşa çıkması\nGüzel...\nBaşka ?\nYakını olan bişey olmalı. \n\nDaha acısını tatmadım galiba.\n\nSon bişey..\nTekrar guvenememek mi?\nBu güvenin boşa çıkmasıyla aynı\n\nEvlat acısı belki ?\nKesinlikle..\nSence ne ?\nBence gönül ağrısı..\nVe bitmeyen sancısı",
    "category": "en_iyiler"
  },
  {
    "id": 670,
    "title": "Sen bana sadece sana olan merakımı bahşettin",
    "body": "Sen bana sadece sana olan merakımı bahşettin\nŞimdi söyle bana hangisi\nTamam mı devam mı\nKalayım mı yoksa kalmayayım mı\nHangisi sahisi \nHangisi belkisi",
    "category": "en_iyiler"
  },
  {
    "id": 671,
    "title": "Diyebilirdim",
    "body": "Diyebilirdim\nDiye bilirdim.",
    "category": "en_iyiler"
  },
  {
    "id": 672,
    "title": "Bugün ayın bir numarası yok",
    "body": "Bugün ayın bir numarası yok\nÖyle güneşin \"gölgesinde\" uzanmış yatıyor\nNe hilal ne dolunay \nBir yerlerden batıyor",
    "category": "en_iyiler"
  },
  {
    "id": 673,
    "title": "Bu sefer olacak",
    "body": "Bu sefer olacak\nBu sefer tutacak sağ elimden sağ eli\nYükseltecek arşlara\nBu sefer yutkunacak kaderim\nİmrenecek marşlara\nGüzele\nİyiye\n2 ye\n\nBu sefer olacak biliyorum\nBu sefer bu yolda bu gidişin son seferi\nYazılacak taşlara\nBu sefer haykıracak gözlerim\nKıymayacak yaşlara\nGüzele kötüye\nBarışlı savaşlara",
    "category": "en_iyiler"
  },
  {
    "id": 674,
    "title": "Hayaline dalıp gidersin ya bir felaketin ortasında sen",
    "body": "Hayaline dalıp gidersin ya bir felaketin ortasında sen\nCennetten bir asma yaprağı ısmarlarsın gökyüzüne\nSana neler neler anlatıyor bir bilsen\nÖldüğünde yeryüzüne\nDoğduğunda vur yüzüne\n\nSıkışıp kalmak gibi bir enkazın altında dem\nBiraz önce yaşıyordun şimdi neden öldün hem\nAklın sana seni öldürtmeden yaşatıyorken madem\nGör şanını sancağının altındasın namahrem\nÖr ağlarını gerçekten bu sonuncu tamamen",
    "category": "en_iyiler"
  },
  {
    "id": 675,
    "title": "Gündüzüm karanlık gecem aydınlık",
    "body": "Gündüzüm karanlık gecem aydınlık\nBen akşamı ve sabahı sabırla beklerim\nDerin bir nefes alır mı dargınlık ?\nBu hasretin bitmesine .\n\nGülüm siyah dikenim , toprak siyah\nNe ayrılığı ne kavuşmayı beklerim\nGörmüştür elbet beni Tanrım \nBu kasvetin bitmesini istedim.\n\nGönlüm loş , ruhum talan , bedenim taş\nBen arzularımı heveslerimle dinginledim\nNe hoşmuş peşinden koştuklarım\nBana ne söyledilerse hepsini dinledim.",
    "category": "en_iyiler"
  },
  {
    "id": 676,
    "title": "Son ana kadar koşmuştum bu sefer",
    "body": "Son ana kadar koşmuştum bu sefer\nYarın olmak üzereydi sabah\nKavuşmak için birbirimize\nO sözünde durmuştu dün gibi\nBen canımı dişime takmıştım \nAttığım her adım mübah\n\nIşımıştı hava\nIsıtmıştı çiçeklerin kemiklerini\nCan bulmuştu yaban\nÖyle bir durdum ki sona\n2 adım daha sürdü yavaş\nMüzik istedim\nRüzgar değdi kulağıma\nÖyle huzur öyle usul öyle hoş\nYetişti imdadıma\nDedi ki böyle koş.\n\nSon sabah ya bu\nSon güneş ya doğan\nSon nefes ya aldığım\nBu kadar güzel olabilirdi final\nSıra toprakta\nDiyecek ki bana\nKaranlıkta da böyle coş.",
    "category": "en_iyiler"
  },
  {
    "id": 677,
    "title": "Bir şiir de sen yaz ne olur ?",
    "body": "Bir şiir de sen yaz ne olur ?\nSana senden bir hediyen olsun",
    "category": "en_iyiler"
  },
  {
    "id": 678,
    "title": "Bir yardım etti ben ikide buldum kendimi",
    "body": "Bir yardım etti ben ikide buldum kendimi\nİma etmedi ikileme bırakmadı kendini\nSiz devam edin dercesine haykırışların\nDeğil mi ?\n\nDiyebilirdim..\nDiye bilirdim.",
    "category": "en_iyiler"
  },
  {
    "id": 679,
    "title": "Dümdüz , simsiyah bir çizgi çektim güpegündüzlüğün cümlesine",
    "body": "Dümdüz , simsiyah bir çizgi çektim güpegündüzlüğün cümlesine\nGece solup asi oldu karanlığın vazgeçtiği düzenine\nKaranlıkla gör şimdi hayalini\nO kadar zifiriki cennetin diğer yarım küresi bile\nAy doğmuştu üzerine \nHatırla.\n\nAf dilemekten başka ne yaptın ?\nNe geçti eline ?\nYanmış bir cennetin akabinde donmuş bir cehennem ile yalnızlık.\nBoşa çekilmiş kürekler.\nAğısı alınmamış yürekler.\nMasum tuzaklar.\nAhlar vahlar açlık susuzluk şiddet vahşet ölüm.\nDoğarmısın sence yeniden ?\nAy doğmuştu üzerine , binbir hatırla.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 680,
    "title": "Zamanla yarışıyoruz kazananı belli",
    "body": "Zamanla yarışıyoruz kazananı belli\nTamama ulaşıyoruz kalacağımız temelli\nŞarkılar söylüyor , şiirler yazıyor gündemim\nZamansa sadece ilerliyor gecemde gündüzümün\nArkamdan bağırıyor demin\n\nTanrı izliyor şahdamarımdan biliyorum\nGerçeği göstermeden gösteriyor yüzüme\nŞaşırıyorum herşey nasıl bu kadar net olabiliyor\nVe aynı zamanda öylesine güzel seyrediyor ki hayat\nSık sık seyre dalakalıyor gözlerim\nBüyülüyor memat\nİstediği dikili bir ağaç\n\nKelimeler koşuşturmaya başlıyor zihnim \nListeliyorum cümlelerimi ziyan olmasın duasıyla\nYemin ederim ki yemin ederek\nİsteyerek istiyorum söylenecekleri\nOlacaklar zehir zemberek \nOlabildiğince fenasıyla gelecek\nKahpe değil felek\nKurtuluş felâk\nHelâk var tamamlanacak\nSeçileceğiz bir gün günahlarımıza bakılarak\nSonsuza kadar mutlu olacaktık hatırla\nZaman o yarışı kazandığında\nDünya vardı cennet\nDiğer yanda cinnet !\n\nBenden ne istedin ?\nBana ne verdinse parmaklarımın ucuna beni hapsetti emir\nAklımın ücra köşelerini fethetti\nDağladı kızgın demir\nBen İnsanlık için yanar yakılırım \nSonsuza kadar cehennemde kalırım\nBuna gönüllü olurun\nİnan ki sormam yardım\nBen kendimi ne sandım\nBenden ne istedin Tanrım ?\nBen bunları düşünecek ne yaptım ?\nHakikaten ne bekledin ?\n\nUzağı göremiyor gözlerim\nBu yüzden güzel günleri yarınlardan daha çok özlerim\nBir dünyam var bana bahşedilmiş sınav halli\nBir de cümlelerim var sessizliğimden dökülen, dinleseler bari\n\nNeden alıkoyamıyorum harfleri yanyana dizmekten\nAnlamlı bir cümle çıkarmak için beynimdeki melekten\nSöylemek için sözlerimi yürekten\nÜzerken\n\nŞaşıyorum zamanda zamana sadık\nYarışıyorum ya zamanla son bir adım kaldık\nElimden tutmazsa başka bir el yada bir el\nSonsuzluk yakı verecek sorumsuzlara\nUyanmak için uykulardan bir daha\nBeni dinleyin heves ile mantık\nSonra \nSonra sessiz olun ve sessizliğe inleyin.\nBenimsetin.\nYarışı anca böyle kazanabiliriz.\nŞunun şurasında kaç kişi kaldık ?",
    "category": "en_iyiler"
  },
  {
    "id": 681,
    "title": "Neden !",
    "body": "Neden !\nNe bu içimdeki harika mağlup oluşun söz konusu ?\nBana ne demem, bunu benden dileyemezsiniz \nO , uykularımda.:.\nVe yine nedense sessiz kalınca  , vakit yok oluyor. \n\n\"2\" yine doğum sancısı çektiyor \nEndişelermin beraberinde kırmızı bir güz soğuğu\nDönebilirse tuhaf ve pes doğrusu çoktan.",
    "category": "en_iyiler"
  },
  {
    "id": 682,
    "title": "Beni anladığını sanıyorsun",
    "body": "Beni anladığını sanıyorsun\nBir ihtimali , varlığını sorguluyorsun varlığımın\nİmkan dahi verilemez bu serseri beyefendilik ,\nSonunda , sonun da sonunda bir nefes , nefes darlığının\n\nEn zorunda\nYa sağından ya solundan\n\nBirer ikişer biner biner aslına bakarsan hep beraber bu göç \nVakit artık çok geç\nYa evladın , ya torunda.",
    "category": "en_iyiler"
  },
  {
    "id": 683,
    "title": "Gözlerimi devirir devirmez asloluşuma hapsoluşum",
    "body": "Gözlerimi devirir devirmez asloluşuma hapsoluşum\nDüşüncelerimden kalelerim var benim her birinde mahfolmuşum\nKara bulutların ardındaki güneş , sana bir tek yar olmuşum\nRuhumun saçlarını beyazlattı var oluşumu\nDar koşumum\n\nYok bir çare tarumarıma , bu yolun yok bir dönüşü \nBaşımdaki hare , şeytanımın pabuçumu ters giydirişi\nEn sevdiğim tek bir tanrı çünkü alnımdan öpüşü..\nGökyüzüne baka baka yer yüzünde lav olmuşum",
    "category": "en_iyiler"
  },
  {
    "id": 684,
    "title": "Tanrı",
    "body": "`\n`\n`\n`\n`\n`\n`Tanrı`\n`\n`\n`\n`\n`Kafiyeyi yarattı`",
    "category": "en_iyiler"
  },
  {
    "id": 685,
    "title": "Layıkmıyız sevgine ?",
    "body": "Layıkmıyız sevgine ?\nBıraktık mı istemediğimiz bir şey ?\nDurmadan usanmadan meyletmedik mi hala\nDünya için en iyisini sen mi bilirsin ?\n\nYağmurlar yağıyor bazen kar\nBazen rüzgarlar esiyor denizlerden\nDönüyoruz hem kendi etrafımızda\nHem ışığın ve sıcağın etrafında\nKainatın her tarafında adeta sana mı dönüyoruz ?\nKelime oyunun bu mu ?\nSenden mi bahsediyoruz bütün şarkılarda ?\nAnladığımız dilden mi yanlış anlıyoruz gerçeği ?\nŞehirlerin yolları var yalnız gittiğimiz ve uzun \nKavuşuyoruz birilerine yada bir yerlere\nHis oyunun da bu mu hissettiğimiz ?\nLayıkmıyız bu oyunlara ?\nArtık eğlendirmediğimiz..",
    "category": "en_iyiler"
  },
  {
    "id": 686,
    "title": "İkinci defa oluyor böyle",
    "body": "İkinci defa oluyor böyle\nNefesi dışarı veriyorum yine aldığımda içime\nHer birine muhtacım\nHer birine hayranım\nÖyle bir heycan ki devamı\nÖyle işte , ikinci şiir kitabımdaki ikinci kelime gibi ilkine eş\nikinci satır gibi yazabildiğim \nikinci sayfadaki kağıt sesi \nİkinci saatlerimiz , ikinci günlerimiz , ikinci kez üstünden geçişimiz belki\nÖmrüm saymakla geçecek seni nefesim\nVerildiğinde karşılığı ederimin\nBitecek teşekkür eserim.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 687,
    "title": "Sana da anlatmak istiyorum / da",
    "body": "Sana da anlatmak istiyorum / da\nUzun bir hikayesi var gördüğüm her rüyanın\nSabretmezsin ve ,\nİnanmazsın neler yaşıyorum kan ter içinde her gece ve ,\nManası yok bütün bu olanların \nBütün bu olanlar niçin be ?\n\nUyanınca başlıyor bambaşka bir mesele\nSeni görünce emin olamıyorum mesela\nBir görsen ne kadar mutluydum eskiden asıl\nBir de bana sor eski nasıl\nDüzen karman çorman biçimde",
    "category": "en_iyiler"
  },
  {
    "id": 688,
    "title": "Yine sessiz kalacağını söyledi hayat",
    "body": "Yine sessiz kalacağını söyledi hayat\nÂmâ tavırlarla , çocukça\nGemisiz kalacakmış limanlarım\nBirbirini özlesinmiş insanlar\nSonunda gözden düşselermiş\nGönülden ırak\nGözlerden uzak\nYapayalnız kalsaymışım\n\nYine bensiz kalacağını ummuş hayat\nAma tavırlarında tek solukta\nSebepsiz kalacakmış açıklamalar\nİşte öyle sudan sebep yalanlarla\nSonunda özüm göçecekmiş buralardan\nSözünden dönecekmiş ruhum istemeye durmadan\nKi demiştim ki beni rahat bırak\nKandırma beni kalkışma bile bak\nSonunda sonumuz son soluktan sonraki kara toprak\nGönülden ırak\nGözlerden uzak\nYapayalnız\nYapayalnız kalsaymışım",
    "category": "en_iyiler"
  },
  {
    "id": 689,
    "title": "Unuttuysan kalbinine aldığın nefesin sessiz sesini",
    "body": "Unuttuysan kalbinine aldığın nefesin sessiz sesini\nSon verdiğin o son an hani cüret ederken herşeye\nBıraktığımda ardına heveslerin en güzellerini\nTamam\nİşte oldu , başlattın kederleri\n\nYalnız bir ihtiyar var artık içimde biriktirmiş neferleri",
    "category": "en_iyiler"
  },
  {
    "id": 690,
    "title": "Silinmiş bir şiirin ilk mısrası bu",
    "body": "Silinmiş bir şiirin ilk mısrası bu\nBende 2.",
    "category": "en_iyiler"
  },
  {
    "id": 691,
    "title": "Cevabı verilmemiş soruların sabrı",
    "body": "Cevabı verilmemiş soruların sabrı\nVe beklerken ki tavrı\nEnteresan bir sanrı\nSen ve Tanrı",
    "category": "en_iyiler"
  },
  {
    "id": 692,
    "title": "Vazgeçemiyorum geçen yıllardan",
    "body": "Vazgeçemiyorum geçen yıllardan\nGidilmiş onca yol var\nDüşünülmüş planlar\nSiyahlar ve beyazlar\nOradalar gözlerimi her kırptığımda\n\nGeçmişe dair ne varsa unut dediler\nBir umut tutunursun yarınlara\nBana kalsa onlar da az deli değiller ya\nUmuttum diyorum soranlara\nEminler olmadığıma\n\nEninde sonunda hazırım\nGeç bile kalmış olabilirim ama kendimden razıyım ben\nBen kör olmuş bir ırkın son gören gözüyüm\nNe fazlasıyım ne de azıyım hem\nKendi kendime herkes kadar uzaklardayken",
    "category": "en_iyiler"
  },
  {
    "id": 693,
    "title": "Yanımda varlığını hissetmenin getirdiği neşe",
    "body": "Yanımda varlığını hissetmenin getirdiği neşe\nVe gülüşünün bende yarattığı tüm hisler\nCümle cümle , kelime kelime , hece hece\nVe benim buruk yanımı anlatmaya çalışan herşey\nHer bir şarkı\nGülünebilecek her bir şaka\nBir hoşgeldin yada bir merhaba\nBen en küçük şeylerden mahsun\nEn olmadık şeylerle mahçup\nÜst üste savaşlardan mağlup\nHayatta kalmak için senin gülüşlerine muhtacım.\n\nRengi soldu artık bu ayrılığın\nYeniden başlayamaz mıyız acaba canım ?",
    "category": "en_iyiler"
  },
  {
    "id": 694,
    "title": "Gözlerin yalan söylüyor",
    "body": "Gözlerin yalan söylüyor\nRuhuma akıttığın kelimeleri okuyabiliyorum\nSen bunun farkında değilsin ama\nBen bu tuzağa düşmem \n\nNeler neler söylüyorsun sessizce\nPeki ya hikayelere düşmen ?\nSanki hiç sorumluluğu yokmuş gibi dertsizce\nSanki piç babasından pişman.",
    "category": "en_iyiler"
  },
  {
    "id": 695,
    "title": "Seni en çok sevenlerle senden nefret edenlerin savaşında neredeyiz…",
    "body": "Seni en çok sevenlerle senden nefret edenlerin savaşında neredeyiz biz seni sorgusuz kabul edenler\nDünya yoktu sen vardın daha varolmadan bedenler\nİkiye bölüğüz kazananlar ve kaybedenler\nSevenler ve zulmedenler\nDuyunca gelenlerle duymazdan gelenler\nGelmeyenler\n\nÇok çaresiziz\nİnsanlar metanetsiz\nNerde biz efendim nerde siz\nKüfrün sesi tiz",
    "category": "en_iyiler"
  },
  {
    "id": 696,
    "title": "Eninde sonunda başladığım yerdeyim",
    "body": "Eninde sonunda başladığım yerdeyim\nÖzgürüm yanıbaşımda , yapayalnız \nMis gibi...\n\nGeride kalmış o güzel dünler\nÖmrüm aklı başında , alışılmadık\nMış gibi...",
    "category": "en_iyiler"
  },
  {
    "id": 697,
    "title": "Kara haber bu sefer daha da tez",
    "body": "Kara haber bu sefer daha da tez\nYolun sonu da bir o kadar aydınlık\nNisan yağmurları gibi güzel\nSarı yapraklarcasına güz\nPara etmeyecek bu sefer saygınlık\nBu seferki çok özel , söz.\n\nAşkı soracaklar\nSevdin mi \nKıymetini bildin mi ?\nKıyamette rahatmısın ?\nVar mı etrafında bir el son bi yardımlık ?\nBuz.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 698,
    "title": "Neyi bekliyorsan çok istediğin",
    "body": "Neyi bekliyorsan çok istediğin\nOna uçman lazım sanki , yeter değil mi beklediğin ?\nKaç fırtınadan geçtin ?\nKaçma fırtınalardan , ben sana yağmur olmayı seçtim\nBak yine unutuyordu elim\nNerdeyse yasaklı kelimemizi söyleyecektik\nSana biz \" sen \" diyelim\nBunu bir \" sen \" anla yeter \nBir su damlası olmayı seçmiştim hatırla\nZaman durmuş , bekliyoruz kalbine düşmek için\nBütün ceraretimiz havada asılı , kelimelerimiz havalı\nKalbimiz bir garip\nAn sabit\nTalip olduğumuzda kaderine\n\"Sen\"  bir kere bana canım demiştin..\nBir yere içi diye yazmak istemişti elim\nBiz yüreğine düştük sevg\nUç sende.\nSüzül o hengâme gökyüzümüzde.\nFırtınaya biz olalım tek sözünle..",
    "category": "en_iyiler"
  },
  {
    "id": 699,
    "title": "Pes etmeyeceğim bugünde",
    "body": "Pes etmeyeceğim bugünde\nDün olduğu gibi yarın da geldiğinde yine\nBiliyorum  gülerse yüzüme talih\nVazgeçeceğim günün hayaliyle yaşıyorum\nSon güne..\nHalis.\n\nMuhteşem bir başlangıç muhteşem sonu\nGideceğim sonuna kadar bu yolu , söz\nFayda etmiyorsun ey evren\nAklımı kazanıyorum , aydınlatıyorum yoku\nSon güze..\nMuhlis.\n\nMisafir geldim , kapıya kadar uğurlayın istiyorum da arkamdan ne söyleyeceğinizi duymayacağımdan tek sorum.\nGidiyorum sonuma kadar\nFayda etmiyor telaşlarım\nHakkımı arıyorum , aklıma verilmiş hediyeyi arıyorum , bir ses duyuyorum.\nGeliyorum\nSon söze..\n\nArdıma bakacağımız ard o gözlerimi kırpmadığım\nÖlüyoruz , nerde tabutlar ?\nYer doyacak insanla , altı kalabalık üstü tenha \nYardımı arıyorum , zihnimin en derininlerinde\nYardım edin\nDönün öze..\nSon söze\nSon güze\nMuhlis\nHalis\nSon güne.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 700,
    "title": "Yaşamın amacı amacı olan bir yaşamdır",
    "body": "Yaşamın amacı amacı olan bir yaşamdır\nOlanı ve olması gerekeni konuşmaktır\nDüşmana dost olmaktır\nKader budur , kendin yazarsın , içine dalarsın\nDışına çıkarsan bela gelir bulur\nYa güç bela toparlarsın tökezini\nYada gelir tam karşında durur\nGösterir ötekini\nHiç çıkmaz aklından olanlar",
    "category": "en_iyiler"
  },
  {
    "id": 701,
    "title": "Şimdi gel seninle bir yolculuğa çıkalım",
    "body": "Şimdi gel seninle bir yolculuğa çıkalım\nAğaçlardan kenarlar\nÇiçeklerden bir meydan !\nGel o yolu alalım senle\nAncak varabiliriz , nerdesiniz diye sorarlar..\n\nİki seçeneğin var birisi mat biri saydam .\nGelir misin benle , sen sormadan ben söylemeden ,sonsuza\nArkana bakma işte karşında seni soranlar\nSeni dinliyorlar\nSana hayranlar ey yeni bir bayram !\nAlışamadılar onsuzluğa..",
    "category": "en_iyiler"
  },
  {
    "id": 702,
    "title": "Of ya !",
    "body": "Of ya !\nYine baktım içime , içim yok\nAnlatabilmek için sahip olduğum her şeyi\nKonuşabilmek için ileri geri\nYırtılana kadar ses tellerim\nNeler vermezdim çok\nDerdimi anlatabilmek ne kadar zor\n\nMerhaba herkese , içim dışım bir\nBir hikaye bu ve sana anlatmam gereken kelimeleri seçebilmek için düşünmem gerek\nYoksa olmazsa olmaz bu şiir\nKalır benim gibi tek",
    "category": "en_iyiler"
  },
  {
    "id": 703,
    "title": "Geliyorum sana doğru bir kısa mesafe",
    "body": "Geliyorum sana doğru bir kısa mesafe\nGönüllü bir vazife bu\nGönlüm yavru bir kuşken sana hevesle uçayazmak sevinçten bak belki bugün belki 3 vakte\nNefesime karışması kanat seslerimin\nKavuşması ruhumun hakikatine\nSonrası mı ?\n\nGeliyorken bana doğru dağlarını yollar mı aşar yârim ?\nTabeladaki sayılar azalmaya başladı değil mi ?\nGüneş yer değiştirirken tepende , ay beyaz beyaz görünüyorsa başını yasladığın camdan beni hayal ediyorken gökyüzünde bulutların arasında sevimli\nSöyledim 2 vakte doğsun diye belki saatler başarır bunu\nKanatlarımı çırpıyorum bak bu gece bu yürek özgürlüğü yaşayacak seninle\nDoğrusu mu ?\nEn uzun günün gecesinde hemde.\nHemen hemen , hemen.",
    "category": "en_iyiler"
  },
  {
    "id": 704,
    "title": "Haddimi aşıyorsam affet",
    "body": "Haddimi aşıyorsam affet\nBen kendimi senin beni anlayacağın bir yere \nGökyüzünde bulutlarda\nEzberlediğim o nadir sıcacık hatıralara ve özgürlüğüme koymuştum\nAz geliyordu yetmeyişler\n\nSabrını taşırsam da sabret\nSen gönlünü böyle sarıp sarmalarken , \nYüzümü öpen sabah güneşi olmanı nasıl hakettim ?\nVerdiğim sözlere\nNasıl böyle upuzun bekleyişlerde tak ettin ?",
    "category": "en_iyiler"
  },
  {
    "id": 705,
    "title": "Nasıl diye soracak olursan çok, içimde ruhum koca bir dağ gibi",
    "body": "Nasıl diye soracak olursan çok, içimde ruhum koca bir dağ gibi\nHazır mısın diye soracak olursan az , avcumda bir kar tanesiyim\nİkimiz de bilmiyoruz \nBunu ikimizde biliyoruz\nBekliyoruz da hani\nNerde nasibim ?\n\nYalnızlık diyorum bir anlık bir ansızlık\nSonsuzluğu biliyorum bir an için onsuzluk",
    "category": "en_iyiler"
  },
  {
    "id": 706,
    "title": "Ruhumunda içini gördüm",
    "body": "Ruhumunda içini gördüm \nDünden kalmış bir günlük örtüm\nBuz kesilmiş gönlün tuz basılmış yarasıydı üzgün\nYetmezmiş gibi ordan ömrü bir ana sıkıştırıp döndüm\nO hürdü , ben \"öl\" düm\n\nSeyre dalmışsa artık gözlerim boşluğa\nKi ben tam ortadaki yöndüm\nEtrafında pervane döndüm , yokluktaki hoşlukta\nEnsemdeki üf tüm\nÜrktüm.\n\nBizim için bu son\nHerkes arafta , araf bile arafta\nİstediğim gibi sonu bu tarafta\nKünfeyekündüm\nDoğdum\nÖldüm\nArada sadece ağladım ve güldüm.\n2 seçeneğim varmış gibi aynı zamanda.\nArtık hürdüm.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 707,
    "title": "İsimsiz bir çocuk olarak gelsem tekrar dünyaya",
    "body": "İsimsiz bir çocuk olarak gelsem tekrar dünyaya\nKendinden emin , duyguları alınmış\nİsimsiz bir ananın ta karnından bağırsam mevlaya\nAvazımın çıkabildiği en yüksek notayla\nSorsam tanrıya\nİntahar neden günah ?\n\nBen mi istedim bahşedilmiş bir canı\nBana kurdurttuğun bütün bu cümlelerin bir anlamı mı olmalı ?\nMecbur sessiz düşünürken bi es versen lâ ya\nSorsan bana\nİntahar neden mübah ?\n\nAyrı ayrı kalsak şimdi senle isimsiz bir şehirde\nİsimsiz bir sokakta\nİki arada bir derede belli belirsiz bir arafta\nEvet 2 arada\nBen çocuk olsam sen çocuk olsan benle\nİnan herşey çok güzeldi bu tarafta\nKendime soruyorum kimim ben\nBir kağıda yazıyorum nerdeyim ben \nKoyuyorum bir zarfa al birinden\nGece mi iyi yoksa daha mı iyi sabah ?\nKaranlık mı başlangıcı aydınlığının\nSöyle intahar neden günah ?\nGöster bana\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 708,
    "title": "Yarınımızın önemi çok ve",
    "body": "Yarınımızın önemi çok ve\nAslında en gerçeği gözlerindeki gülümsemenin ta kendisi\nNedendir bilmem her seni aklıma düşürdüğünde bir rüzgar\nKarşılığında verdiğim senden aldığımın hepsi\nIslıklar çalarak yürüyorum ezbere sokaklarımın eski kaldırımlarında\n\nYani gerçekten gerçek mi şimdi yaşanılanların hepsi ?\nAynı şarkının çok çok daha iyi bir yorumu mu çalıyor nostaljik radyolardan ?\nNadiren yaşanırdı hani böyle küçücük mutluluklar ?\nKar tanelerinin de birbirine değmeleri imkansızdı belki\nIşıkların doğduğu yerde susmaya mecburdur karanlıklar.\n\nVe sen , sen bu şairin kaleminden çağlayacak tek yankısın aydınlıkta.",
    "category": "en_iyiler"
  },
  {
    "id": 709,
    "title": "15 nisan 2018 saat 19:28",
    "body": "15 nisan 2018 saat 19:28\nKimbilir sen bunları okurken saat kaçta\nBen 1 hafta önce yazmıştım o şiiri\nAcaba zaman yolculuklarına çıkan olmuşmudur senden başka ?\nİçime dokunan olmuşmudur?\nEllerindeki sayfalarda\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 710,
    "title": "Düşün ki unutmak istediğin , bütün bildiklerin",
    "body": "Düşün ki unutmak istediğin , bütün bildiklerin\nBaharın serinliği ,Kışın derinliği ,\nGecenin sakinliği,\nUmutlar , ümitler , kurtuluşlar\nEbedi mahkûmiyet !\nÇoktan terketmiş aseni\n\nİki kelimeyi bir araya getiremeyen nefsinle sana sayfalarca yalvaran vicdanın savaşı bitmiş\nÇekçekli valizini bile bir tren garında bırakıp\nArkasından bakan da olmadan öylece gitmiş \n\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\n\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\nDüşün ki unutmak istediğin , bütün bildiklerin\nBaharın serinliği ,Kışın derinliği ,\nGecenin sakinliği,\nUmutlar , ümitler , kurtuluşlar\nEbedi mahkûmiyet !\nÇoktan terketmiş seni\n\nİki kelimeyi bir araya getiremeyen nefsinle sana sayfalarca yalvaran vicdanın savaşı bitmiş\nÇekçekli valizini bile bir tren garında bırakıp\nArkasından bakan da olmadan öylece gitmiş \n\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.\nYalnızlık sobelemiş seni tam kazandım derken\nİçinden geçmiş , geçmiş.",
    "category": "en_iyiler"
  },
  {
    "id": 711,
    "title": "Bir salı akşamı , gün ağarırken rastgele bulutlarla",
    "body": "Bir salı akşamı , gün ağarırken rastgele bulutlarla\nÖylesine sıradan rastgele bir gün korkuyorum umutlardan\n\nBir yanda öyle keskin ki yarının kokusu\nGerçekten daha güzeldi dün\nNeden şimdi böyle oldu\n\nDiğer yandan öyle renkli ki pişmanlıklar\nHakikaten herşeyimi veresim vardı da\nSorsan, bana yazık olurdu",
    "category": "en_iyiler"
  },
  {
    "id": 712,
    "title": "Rüyaların gerçeğe dönüştüğü bir hastane odasında",
    "body": "Rüyaların gerçeğe dönüştüğü bir hastane odasında\nİnsan ya doğar ya ölür\nİkisi arasında kalınca kumar masasında\nHatırlanır geçen ömür\n\nMelekler mi sarmıştı etrafını\nAnnen miydi bu uzaktan mırılı dua\nBütün dünya yakalamışken fırsatını\nDelirmemek ne zor olay.",
    "category": "en_iyiler"
  },
  {
    "id": 713,
    "title": "Yerle bir olmuş bir neslin temellisiyim",
    "body": "Yerle bir olmuş bir neslin temellisiyim\nSesi mi duyan var mı ?\nAcaba hemen misiyim ?\nKelimeleri dizerken özenle peşi sıra\nCümlelerin efendisiyim\nGerçek kadar aydınlık bir rüyanın uyanmadan öncesiyim\n\nYardımın en güzelini eder misiyim ?\nKalpleri tamir eden misiyim ?\nAşkı bulmuş bilen birisiyim\nYalvarırım sev sende buralardan gider gibiyim",
    "category": "en_iyiler"
  },
  {
    "id": 714,
    "title": "Hepiniz gerçekte bir diğerine başkasısınız",
    "body": "Hepiniz gerçekte bir diğerine başkasısınız\nBunu görebilseniz ve\nKeşkeleri de arkanızda bırakabilseniz keşke\nDünya'da savaş var dillerde aşk şarkıları\nKimin umrunda kavuşamadıklarınız\nÇocuklar varken ölen\n\nYalvarmaktan vazgeçirmek mi ?\nSen kendini ne sanıyorsun be ?",
    "category": "en_iyiler"
  },
  {
    "id": 715,
    "title": "O da bilmiyor ne bildiğimi en derinlerimde",
    "body": "O da bilmiyor ne bildiğimi en derinlerimde \nYine de dinliyor söyleyemediklerimi\nDalgaları denizlerinde coşkun\nBulutları gökyüzünde sakin\nUfku beraberinde izliyor aşkın\nGüneşi batırıyor şimdi lakin\nKeşke Ay'ı da sevse saf...\n\nBen de bilmiyorum neden içimdekiler böyle\nYine de yaşıyorum bu rüyayı uyanık\nRuhum yaşlı ve rengi solgun\nUmutlarımı unutabilecek kadar yorgun\nTutkularım olgun \nKendi kendisine dargın\nSuları bulanık\nAy'a vurgun.",
    "category": "en_iyiler"
  },
  {
    "id": 716,
    "title": "Bu suçun faili de benim mağduru da.",
    "body": "Bu suçun faili de benim mağduru da.\nHerkes ! \nİşte duruyorum tam karşınızda...\nGönlüme öyle bir dert saldı ki Dünya,\nBekliyor doğmaması gereken ışığı batıdan.\nBir 2 üç dört beş altı yedi...\nGeri dönemezem bu şarkıyı söyleyin hep bir ağızdan",
    "category": "en_iyiler"
  },
  {
    "id": 717,
    "title": "Yavaş yavaş korkmaya başlamıştım yalnızlıktan",
    "body": "Yavaş yavaş korkmaya başlamıştım yalnızlıktan\nGri bir karanlıktan uzaklaşmak istiyor gibiydi kahverengi çorak aşk\nBoş bir tuale ilk fırçayı vurmaktan ürküyor harp\nBahçede paslı bir salıncaktan daha yalnızım kalp\nEn sevmediğim çocuksu oyunlardan sıkkınım",
    "category": "en_iyiler"
  },
  {
    "id": 718,
    "title": "Sessizce mi gitmeli buralardan",
    "body": "Sessizce mi gitmeli buralardan\nYoksa avaz avaz bir kaç itiraz mı lazım yormayan\nAnlayacağınızı bilsem açık açık konuşurdum\nBunu tek başına yapamam\n\nBana saz lazım \nBana söz lazım\nYoksa bu yükü kaldıramam.",
    "category": "en_iyiler"
  },
  {
    "id": 719,
    "title": "Sana son sözümü söylemedim",
    "body": "Sana son sözümü söylemedim\nBana o güveni vermedin\nEğer yalanlardan bir duvar isteseydin\nBu çok kolaydı\nAnlatırdım derin derin.\n\nKelimelerin büyüsüne kapılmadan\nCümlelere peşi sıra davranmadan\nHayır demeyi kendi kendime öğrendim\nEvetlerin oyununa aldırmadan\n\nIşıklar müzik ve dans\nBu sessizliğim ölümle vals\nKarşımdaki sen ve aynadaki ikimiz\nBunun tamamı hırs .\nYalvartmadan.\n\nCesaret ve huzur\nGözlerimin içine bak orda işte sana anlatmaya çalıştığım budur\nBu sefer her şeyi bırakıyorum geride\nSaldırmadan gurur.\nBitiyor bu ömür.",
    "category": "en_iyiler"
  },
  {
    "id": 720,
    "title": "Yalnızlık kadar yalnızım",
    "body": "Yalnızlık kadar yalnızım\nNe bir arkadaşım var ne bir ailem ne bir hayvanım\nO kadar ıssızım işte\nSadece soru işaretlerim ve zamanını bekleyen ünlem yoldaşım\nHissizim\nŞaşırtmıyor hiçbir cümlem\nYarım kalıyor yaptığım her iş\nTekamül ediyor sıfıra\nHalbuki 2 benim adım galiba\n1.kim ?\n3.?\nSonuncu?\nKendi yarattığım dünyamda sizsizim\nYok olunca\nKavuşacakmıyım cevaplara\nUzun uzun anlatacakmı bu halimin sebebini bana Allahım\nYoksa uçurmak için verecek mi kuşlara \nBilmiyorum hiçbirşeyi\nTahtası eksik kayığımla gidiyorum bir ufka\nVarış yeri fikrimin dibi\nYada\nÖteki dünya.\nİkisinden biri\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 721,
    "title": "Yetmiyorum kendime",
    "body": "Yetmiyorum kendime\nBuna anlam da veremiyorum\n\nSorulara cevap veremiyorum\nÇözüm yok mu derdime\nGelemiyorum kendime\nVaramıyorum sebebimin hakikatine\nBilinmez bir sona gidiyorum , hayrolsun",
    "category": "en_iyiler"
  },
  {
    "id": 722,
    "title": "Arzularımı isteklerimin şelalesinde boğdum ben",
    "body": "Arzularımı isteklerimin şelalesinde boğdum ben\nHeveslerim bir an için asılı kaldı kursağımda\nYardım için geldim çeyrek asır ömrüm ben\nÇok istiyorum diye döndüm her yerimde kaldığımda\nÇok seviyorum diye öldüm ben yeniden yarım kaldım \nSevinçlerimin karşılığını aldığımda\nHüzünlerin merkezine daldığımda göçtüm ben\nArzularımı isteklerimle yoğurdum hep\nVazgeçtim sonra ittim uzaklaştırdım kendimden\nKendimi kendime sordum\nKendime kendim zordum\nYapayalnız kaldığımda\nOrda yoktum.\nBen.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 723,
    "title": "Aklımın almadığını sakladığım yarınlarıma da önce bir bak istersen",
    "body": "Aklımın almadığını sakladığım yarınlarıma da önce bir bak istersen\n\nİçeride en sevdiğim şarkılar ve yüzlerce şiir var\n\nYanında gelirken hiçbir şey getirmesen iyi edersin hem\n\nMisafiri olacağın yer neredeyse yok denecek kadar dar\n\nZor ve karanlık gelebilir önce anlam veremediğim her.",
    "category": "en_iyiler"
  },
  {
    "id": 724,
    "title": "Kıyılarından ne yolculuklar başlamış bu nehrin",
    "body": "Kıyılarından ne yolculuklar başlamış bu nehrin\nBiri bitmiş biri yeniden başlamış devrin\nDertler heybelerde\nKalanlar hani nerde ?\nGelecekler bugünlerde\nSalıncaklarda sallanıyor devrimler\nBitmek bilmiyor evrimler darbelerde.",
    "category": "en_iyiler"
  },
  {
    "id": 725,
    "title": "Güven konuk",
    "body": "Güven konuk\nBende güvenmiştim korkulara\nAydınlıkta karanlığa\nYalnızlıkta kalabalığa\nBarışlarda kavgaya\nSıcak rüzgarlarda soğuğa\nVerilen sözde yalana\nGidilen yola\nGelinen sona\nKahkahalarla ağlamıştım konuk\nEzberleri bozmuştum\nZor yolunu seçince hayatın\nHep düşmüşüm dizlerimi incitmiş yollar\nHerkes gülsün diye yerlerde sürünmüş bunca yaşım\nGüven konuk\nSıra sende şimdi\nGül aydınlığa\nKalabalığa\nKavgaya\nSoğuğa\nYalana dolana\nYollara\nSona\nGüven kendine konuk\nGüven bana\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 726,
    "title": "Gözlerimde anımsamadığım bir şey var aynada",
    "body": "Gözlerimde anımsamadığım bir şey var aynada\nSanki rüyalarımın dik duruşunu zaman yokuşundan çatmışım\nYeni bir devrin zor oluşunun bir sebebi olmasın mı ?\nKızgın ve öfkeliyken, hayal kırıklıklarım ve Dünya \n\nBunu bekliyordum işte...\nİkişer ikişer beliriyorlar hiçlikte...",
    "category": "en_iyiler"
  },
  {
    "id": 727,
    "title": "Gerçekten bu yollardan mı geçtiler",
    "body": "Gerçekten bu yollardan mı geçtiler\nBirer ikişer içlerinden mi seçtiler\nŞafağı söküyor yarının dünü zordu haylice\nBugün beni dünüm için mi terkettiler",
    "category": "en_iyiler"
  },
  {
    "id": 728,
    "title": "Sizde farkındasınız değil mi olanların ?",
    "body": "Sizde farkındasınız değil mi olanların ?\nİçimde kopan fırtınalar aslında ne kadar da gerçek\nVe gemilerim ne kadar sağlam bu hırçın dalgalarda\nHikayesi bu soranların\n\n Yağmuru yağıyor rüzgarların\nVe saçlarım ıslak gecelerde aşktan\nBelki sağ çıkamayabilirim bu savaştan.\nYeni bir tarih yazalım mı artık yeni baştan ?\n\nSanki ölümlerden dönüşümü izlemek için toplanmış bulutlar , \nVe yok olmuş bütün limanlar\nBulutların şimşeklerini zihnimi aydınlatsın diye \nSon kez çakmış bu sefer kaptan\n\nSanki ölümlerden dönüşümü izlemek için toplanmış bulutlar , \nVe yok olmuş bütün limanlar\nBulutların şimşeklerini zihnimi aydınlatsın diye \nSon kez çakmış bu sefer kaptan\n\nSizde farkındasınız değil mi olanların ?\nİçimde kopan fırtınalar aslında ne kadar da gerçek\nVe gemilerim ne kadar sağlam bu hırçın dalgalarda\nHikayesi bu soranların\n\nYağmuru yağıyor rüzgarların\nVe saçlarım ıslak gecelerde aşktan\nBelki sağ çıkamayabilirim bu savaştan.\nYeni bir tarih yazalım mı artık yeni baştan ?\n\nSanki ölümlerden dönüşümü izlemek için toplanmış bulutlar , \nVe yok olmuş bütün limanlar\nBulutların şimşeklerini zihnimi aydınlatsın diye \nSon kez çakmış bu sefer kaptan\n\nSanki ölümlerden dönüşümü izlemek için toplanmış bulutlar , \nVe yok olmuş bütün limanlar\nBulutların şimşeklerini zihnimi aydınlatsın diye \nSon kez çakmış bu sefer kaptan",
    "category": "en_iyiler"
  },
  {
    "id": 729,
    "title": "Harcadığım zaman gayesi bu işin",
    "body": "Harcadığım zaman gayesi bu işin\nTükettiğim nefes açıklaması uzun bekleyişin\nÇok mu güç gerçeğine inandığım hayallerin\nPeşi sıra bu kaçıncı arayışı bu\nNeyim benin ?\nKaçıncı soru işareti bu ben kimimin\nYeri neresi sorunun\nKimleyim ben ?\nİçimdeki ben ?\nDışımdaki zaman\nGönlümdeki dem\n\nÖmrünü al farzettiğimin gizlemez gözlerimi\nEni konu kaç hakkı kaldı ki ötekimin\nİstemesin mi hakkını\nGeri çevirmez elinde kalanı\nNe gereği var hayatı örselemenin\nValla fazlasını istemem\nYemin ederim\nKimsin sen ?\nİçimdeki ben \nBi bilsem \n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 730,
    "title": "Dünya bana yeter",
    "body": "Dünya bana yeter\nKalbimde hala bir köşe kaldı pırıl pırıl",
    "category": "en_iyiler"
  },
  {
    "id": 731,
    "title": "Uğraşma gel dedi abi olan küçük çocuk",
    "body": "Uğraşma gel dedi abi olan küçük çocuk\nKardeş, korkmuş bir kedinin peşinden koşuyordu sırtı terlemiş\nAyak seslerini betonda şaklatıyordu \nKim bilir aklından neler geçiyordu\nYakalamak istediğini de sanmıyorum bir facia yaratacak\nNeden bu çocuksu acele ?\nNeden çocuklukta saklısın telaş ?\nHava da soğuk be çocuk.\nİçerden beni çağırdı yaşı ortaca bir genç adam\nGeç abi dedi Kuran dinleyelim içerde\nAcelesi var gibiydi onunda\nMontu ilikli\nYanaklarını soba ateşinde kızartmış\nİyilikteydi aklı fikri\nBir merdivenin ilk basamağına oturmaya misafir ettiğinde beni başladı hoparlörden gelen besmele sesi\nSes gelmiyor sesi yanlılandı kırkının sonlarında bir beyefendinin\nSesi arttırmak için bir bağırır gibi oldu besmele\nİçi bir garip oldu herkesin\nSusuldu\nTelaş son buldu\nYüzümde sobanın sıcağıyla kızarır gibi oldu\nMerdivende üşüyünce bir tarafım\nKalan taraflarımı da üşütmeye çıktım ciğerim hariç\nSimdi ruhum dinlenirken kuran sesi eşliğinde ısınmaya da acelem yok\nMerdiveni de bir başkasına devrediyorum\nTıpkı gecenin başrolünün Dünyayı başkasına devrettiği gibi\nEn azından ölmüyorum\nSadece soğuyorum.",
    "category": "en_iyiler"
  },
  {
    "id": 732,
    "title": "Az bile oldu",
    "body": "Az bile oldu\nMüstahak olsun sana\nMutlu olmayı hak etmiyorsun\nYazıklar olsun\n\nElinden bir şey gelmiyor değil mi\nDaha yeni mi anlıyorsun ?",
    "category": "en_iyiler"
  },
  {
    "id": 733,
    "title": "Bir dejavuda takılı kaldım eyvah artık her şey tanıdık",
    "body": "Bir dejavuda takılı kaldım eyvah artık her şey tanıdık\nHer tahminimden önce beliriyor an bir anlık\nEskiye dönemiyorum , geçmişi göremiyorum\nBu nasıl bir panik Tanrım\nBu nasıl gerçek olabiliyor ?\n\nGörüntüler sahi\nSesler vahyi\nOlanlar bildik\nOlacağı bildik\n1 saniye ileride hayatım 2",
    "category": "en_iyiler"
  },
  {
    "id": 734,
    "title": "Gözlerimden gözlerimi alamıyorum",
    "body": "Gözlerimden gözlerimi alamıyorum\nGittikçe daha da ciddileşiyor aklımdan geçenler\nAnlamıyorum\nBiri siyah biri latte\nBiri gerçek diğeri sahte\nYalvarmıyorum , hem de bu saatte\nIşıkların sönmesini bekliyorum kendiliğinden\nBu ricamı kırmazsın herhalde.",
    "category": "en_iyiler"
  },
  {
    "id": 735,
    "title": "Mecbur biri diğerinden fazla sevecek",
    "body": "Mecbur biri diğerinden fazla sevecek\nBiri neşeyle dans ederken diğeri izleyecek\nBiri her zaman söz dinleyecek\nDiğeri için için ölecek\nZaman dar ömür geçiyor\nBiri diğerine söz verirken diğerinin iki gözünden yaş inecek\nPes deyecek , etmeyecek...",
    "category": "en_iyiler"
  },
  {
    "id": 736,
    "title": "Asıl ağlarken gülerim halime",
    "body": "Asıl ağlarken gülerim halime\nDurur zaman o an\nKurur tamam olan gözyaşlarım\nBir sırta sarılmıştım en son gelir diye bir mucize\nAkıl verir ya dostlarım ve düşmanlarım\nYanlışlıkla kayıverir kalbime",
    "category": "en_iyiler"
  },
  {
    "id": 737,
    "title": "Işıklar var ötede",
    "body": "Işıklar var ötede\nHer biri farklı bir renkte her biri aynı şevkle seni hatırlatıyor aynı zevkle\nKi ben , seni böyle severken aynı heple\nUzaklar yakın\nYakınlar yakından da yakın içimde.\nSana öyle bir sarılmıştım ki yüreğim gözyaşları içinde.\nBana öyle bir sarılmıştı ki kolların , Dünyam sığdı göğsüne.\n\nÖbür Dünyam ,\nSen öyle bir yeşerdin ki gönlüme\nRengarenk bütün çiçekler \nKızıl gökyüzünde batan ve karanlıklara aydınlık o Güneş\nBütün Dünya\nEtrafında dönen Ay\nYıldızlar , galaksiler , zaman , Tanrı.\nBiliyor her an bile halimi\n\nBana öyle bir sarılmıştı ki kolların , kainatı hapsetmişti ömrüne.\nZaptetmişti kalbimi.\nEmretti , devam dön diye.",
    "category": "en_iyiler"
  },
  {
    "id": 738,
    "title": "Gözü açıkta hayal kurabilir insan.",
    "body": "Gözü açıkta hayal kurabilir insan.\nBirkaçına hakimim\nGeriye kaldı binlerce lisan\nHer bir kalbe dokunabilmek için olduğuna inandığında\nYollar var benden sana \nVar olduğuma inansan\n\nDünya biricik\nRüyam milyar\nYerimde duracağıma inanıyorsan\nKendini benim yerime bile koyamıyorsan\nKarşımda durup beni dinlemiyorsan\nO benim değil senin problemin\nHayallerime dokunma\nDurduğun yeri bul \nSan",
    "category": "en_iyiler"
  },
  {
    "id": 739,
    "title": "Söz veriyorum koşmayacağım ardında virgüllerin",
    "body": "Söz veriyorum koşmayacağım ardında virgüllerin\nUzatmayacak cümleleri\nSöz ver ünlem bitir artık üzüntülerin enkazında beni\nÖksüz kalan kelimelerim\nCanlarım benim\nSöz verin bana onlara da söyleyin.\nSoru işaretlerime yardım edin.\nBizim için.\n\nSessiz kalan tüm hikayelerimden geçin\nDostsuz kaldığım ailemsiz hayat defterimde\nbomboş bir sayfa seçip\nKalemlik elimden bir nefes mürekkep çekin\nSöz veriyorumla başlayacak cümlelerimde \nHem herşeyim hem de hiçim ben\nBu ne biçim bir kader ki ,\nSoru işaretlerine cevaplar için sen varken senin içinde bir ben kaldım sana muhtaç gördüğüne uzanmak için\nCevap vereceğimş\nBeni seçin.\nSizin için.\nHecelerim.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 740,
    "title": "Yeniden hazırlanıyorum yokluktaki varlıkların imdadına",
    "body": "Yeniden hazırlanıyorum yokluktaki varlıkların imdadına\nYeniden kazıyorum derinleri kırık tırnaklarımın imdadıyla\nEzen oluyorum \nEzilen oldum harbediyorum\nHer seferin arzusu bir ama yolunu kaybediyorum\nYenilen oluyorum bir annenin feryadıyla\nSusa kalıyorum\n\nElinden alıyorum hiçliğini varlıkların olmayan izahından\nKaçarı yok bu son bir son artık bu son\nYenilen oluyorum\nYenen oldum yeniden kaybediyorum\nHer defada arzum bir ölümü kendime bahşediyorum\nYeniden doğuyorum bir anneye feryadımla\nBir damla suydum\nToprak oluyorum\nYokken varolup\nVarlığımı kaybediyorum\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 741,
    "title": "Ben gerçeği bilmek istemiyorum mu sanıyorsunuz ?",
    "body": "Ben gerçeği bilmek istemiyorum mu sanıyorsunuz ?\nGözlerime bakan bunca yalan\nÖyle bir şey yok falan\nSoluyorum ulan\nIşıklar karanlık !\n\nBelki de yanılıyorsunuz ?\nBelki bir belki 2 belki onuz..\nBelki size göre bunlar hep ondan\nBelki seçilmiş belki kurban\nBelki bela belki derman\nBelki aşk bu simsiyah dumanlardan.\nBak nelerle vedalaştık\nBir haber olanlardan.",
    "category": "en_iyiler"
  },
  {
    "id": 742,
    "title": "Zamanla gerçekleşiyor rüyalar",
    "body": "Zamanla gerçekleşiyor rüyalar\nTamamından eksiliyorum \nBiri görmeyecekse yap dilediğini\nMerak ediyorum",
    "category": "en_iyiler"
  },
  {
    "id": 743,
    "title": "Hiç konuşmuyorsun sahip",
    "body": "Hiç konuşmuyorsun sahip\nKonuşturmuyorsun \nDüşünmüyorsun beni düşündürtünce ürkütüyorsun \nHer soruma bir cevap verebiliyorum garip\nBeni gökyüzünde süründürüyorsun yeryüzüne rakip\nHer şey bir acayip\nHer şey bir \nHer şey senin\nHer şey için\n\nBir konuşsan sahip\nBir konuştursan\nBir düşünsen de beni azat etsen karanlıktan\nLoş başlayacak her şey aydınlanacak sonra güneş olacak kavuracak kendini ve yakacak o kadar sıcak\nBeni yeryüzüyle şereflendirecek kadar yakın\nGökyüzüne bir iki metre daha uzak\nYankılatır mı alkışlamak özgürlük özgürlüğü ?\nPeki ya başka ne olacak ?\n\n2\n\nMecbur.",
    "category": "en_iyiler"
  },
  {
    "id": 744,
    "title": "İstersen konuşurum seninle",
    "body": "İstersen konuşurum seninle\nGece yarısını iki dakika geçtiğinde dua et\nSabah uyandığında kendine sor sorularını\nBen tam karşındayım\nBen hemen arkandayım\nYukarıdayım , aşağıdayım\nBen , her yerdeyim.\n\nİstersem konuşurum seninle\nDikkatli izle rüyalarını\nFarkında ol yanlışlarının\nTövbe et demiyorum ama\nDüzelt davranışlarını\nBen burdayım\nHep burdaydım ve olacağım\nBen , her şeyin anlamını aradığın içindeyim\nKalbin , kalbim.",
    "category": "en_iyiler"
  },
  {
    "id": 745,
    "title": "Dünyanda sıkışıp kaldım",
    "body": "Dünyanda sıkışıp kaldım\nAldırsana beni ölüme\nNe bir yordam ne bir yardım\nKoysana beni sürünün en önüne",
    "category": "en_iyiler"
  },
  {
    "id": 746,
    "title": "Mecbursun , uyanmak zorundasın",
    "body": "Mecbursun , uyanmak zorundasın\nİstemesen de bu rüya bitti , sonundasın\nRenkler bildiklerine dönüyor\nSiyahlık çöküyor\nGözlerin açılıyor\nOdandasın\nYeniden başlıyor",
    "category": "en_iyiler"
  },
  {
    "id": 747,
    "title": "Artık günü geldi bu son gibi dakikalar",
    "body": "Artık günü geldi bu son gibi dakikalar\nSana bana bir süpriz yok artık\nSadece harikalar\nİyi bir hiç \nSana yazılan hayatta yürümen ne kadar da özel\nŞu yaptığın herşeye bak \n\nO kadar çirkin ki o kadar güzel",
    "category": "en_iyiler"
  },
  {
    "id": 748,
    "title": "Karıncayı öldürmekle Tanrıyı öldürmek arasında ne fark var ?",
    "body": "Karıncayı öldürmekle Tanrıyı öldürmek arasında ne fark var ?\nNe için verilmiş bize farklar\nNeden soru işaretlerim cümlelerime bu kadar uzak            ?\nVe neden bu kadar belli bu tuzak ?\n\nYemin ederek yalan söylemek ile doğruyu saklamak arasında ne fark var ?\nHaysiyetin necaseti bu kadar mı ?\nGalip gele gele yaşamak mağlup ola ola ölmek değilmiydi en nihayetinde\nYanıyordu evler , ocaklar , barklar\nNeden bu cevaplar her zaman yorgun , az düşünülmüş ve üzgün ?\nNeden içimdeki içindekine küskün.\nNeden gelmiyor kaçırılmış fırsatlar\nNeden    ?\nKarıncayı mı öldürdüm ?",
    "category": "en_iyiler"
  },
  {
    "id": 749,
    "title": "Tüm bu yaşananlar neden oluyor sanıyorsun ?",
    "body": "Tüm bu yaşananlar neden oluyor sanıyorsun ?\nSonuçta verdiğin her bir nefes için diğerini ödünç alıyorsun.\nHer gece uyuduğunda rüyalarında yalnızsın.\nKalmayabilsen mesela ?\n\nBurada olmanın sebebi cennetteki yasak elma\nSahip olmak istediğin 2 karat bir elmas daha\nBaşka bir diyardan beklediğin o iltimas\nYa sormazsa sana senin olayın ne diye mesela ?",
    "category": "en_iyiler"
  },
  {
    "id": 750,
    "title": "Aynada aynı anda birbirimize bakıyoruz seninle",
    "body": "Aynada aynı anda birbirimize bakıyoruz seninle\nGözlerinden okuyabiliyorum gerçekliğini\nYeter artık duysun beni biri\nBaşlayalım mı yeni baştan\nSilelim mi geçmişteki kaygan izleri\nGelir misin benimle ?\nSözlerimden anlayabiliyor musun acı çektiğimi\nBıktım artık duy sesimi\nEkmeğimizi çıkaralım mı taştan ?\nGidelim mi uzakların çektiği yerlere bizi\nÖlene dek yeminle.",
    "category": "en_iyiler"
  },
  {
    "id": 751,
    "title": "Anlamlıca bir insan kalabalığının gürültüsüne tıkamışım kulaklarımı…",
    "body": "Anlamlıca bir insan kalabalığının gürültüsüne tıkamışım kulaklarımı düşüncelerimle\nBir bakmışım hapsolmuş an\nFarkını atlamışım canlılığın üzüntüsünün\nNakaratı takılı kalmış bir urfa türküsünün\nHayatın her türlüsünde\nBir şeylerim mahvolmuş\n\nSıralarca sıralanmış bir insan kalabalığının en arkasındayım , ölümce.\nBir sır varmış gibi en önde\nBir bakışın ardına saklı\nBir ağıtın derdiyle haklı\nFarkına vardığım o çoktan geçmiş geçecek ve\no düşüncelerimdeki uzun yankı\nElbet geçecek bu gürültü\nElbet dinecek dalgalarım\nYa Selâm verilince\nYada sola selam verince\nİkisinden biri benim adıma seçilince.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 752,
    "title": "Kefaretini ödedim ruhum",
    "body": "Kefaretini ödedim ruhum\nSerbestsin.\nArkana bile bakmadan git\nArtık kendini boşa yormak yok\nArtık gökyüzü yok\nArtık her şey sadece bir hatıra\n\nSen yine de bizi iyi hatırla.",
    "category": "en_iyiler"
  },
  {
    "id": 753,
    "title": "Nereye gidiyoruz",
    "body": "Nereye gidiyoruz\nKimse kimseyi beklemiyor\nKimse kimseyi özlemiyor\nKimse kimseyi merak dahi etmiyor\nHaklısın işin aslı sende saklı\nVe hepsinden farklı",
    "category": "en_iyiler"
  },
  {
    "id": 754,
    "title": "Oturup yine o zihin uçurumunun kenarına",
    "body": "Oturup yine o zihin uçurumunun kenarına\nYine birer birer kelimeler seçiyorum yokluğa fırlatmak için\nNe çok derdi varmış dünyanın , anca varıyorum farkına\nBütün bu yaşananlar ne için, ben kimim ?\n\nNormalde yüksekten korkmam kolay kolay\nÖzgürce uçabilirim bulutların arasında , büyük olay\nAma bu sefer tanıyamıyorum seni gökyüzü\nDüşmek var sonrasında\nVe tuhaf , ilk defa üşüyorum.",
    "category": "en_iyiler"
  },
  {
    "id": 755,
    "title": "Gökyüzüne daha uzun baktın mı hiç ?",
    "body": "Gökyüzüne daha uzun baktın mı hiç ?\nKireçten bulutlar\nİstatistikler \nParlayan 2 nesne\nAynı anda hareket halindele\nPes be !",
    "category": "en_iyiler"
  },
  {
    "id": 756,
    "title": "Milyarlarcası arasından bana denk geldin ya yağmur",
    "body": "Milyarlarcası arasından bana denk geldin ya yağmur\nBende milyarlarcası arasından sana kuru kaldım",
    "category": "en_iyiler"
  },
  {
    "id": 757,
    "title": "Düşünüyorum",
    "body": "Düşünüyorum\nAklıma düşürülen her hissi yazıyorum\nKainattaki son duygu tanesini bulduğumda Dünya'da\nHer şey bir anda sıfırlanacak ve bu sonsuzluğu başlatacak.\nBiri beni anlayacak mı bilmiyorum\nAma 2 beni galiba ağlatacak.",
    "category": "en_iyiler"
  },
  {
    "id": 758,
    "title": "Uzakların yanıbaşından başladık",
    "body": "Uzakların yanıbaşından başladık\nSebepler karmaşık ve sonuçlara alışığız artık\nSöz verdiğin her yeni yaşında sanki\nBiraz fazla mı dersin bu kendinle barışıklık ?\nNeyi arıyorsun ?\n\nOnu bulmak için kainatı yakmana gerek yok\nZaten ortalık karmakarışık\nÖlmeden önce şunu aklına iyice sok\nBu düzen ikinizle de tanışık.\nNiye yoruyorsun ?",
    "category": "en_iyiler"
  },
  {
    "id": 759,
    "title": "Hiç kimse !",
    "body": "Hiç kimse !\nHiç kimse bana ne olmamam gerektiğini söylemesin\nBen sizin düştüğünüz dehlizlerin en derinlerinden\nBen sizin gökyüzünüzdeki bulutların her birinden\nEminim...\n\nÇünkü ben sizin olmamı istediğiniz kişiyim.\nBir olmazsa diğeri.\n2'sinden biri\nKurban ya da İsmail.",
    "category": "en_iyiler"
  },
  {
    "id": 760,
    "title": "Seni sonuna kadar destekliyorum ama bu konuda hiçbir şey yapmayacağım",
    "body": "Seni sonuna kadar destekliyorum ama bu konuda hiçbir şey yapmayacağım\nBelki sorular sorarım hiçkimsenin anlamayacağı\nSakin geçir günlerini geceleri sayıklamayacağın\nSakın o kapıdan girme içeri \nKaranlığı aydınlatmayacaksın",
    "category": "en_iyiler"
  },
  {
    "id": 761,
    "title": "Yeni doğmuş bir bebek kadar panik",
    "body": "Yeni doğmuş bir bebek kadar panik\nVe yeni açılmış bir göz kadar şaşkınım\nİlk alınmış nefes kadar garip\nİkincisi kadar lazım hayatım.\nNe bir hece ne de bir kelimeye yatkın ağzım\nBelli ki gelmişim en başındaki viraja yolun en sonunun\nIn ve ga !\nOmuzlarımda bir yük var taşınmak zorunda\nSessiz kalma yükümlü yüküm paylaşılmak zorunda\nZorunda işte soru sorma\nMilyarlarca felahın kapı kilidi var avucumda\nYağmurlar yağacakmış o gün öyle söyledi mevla\nOdadaki fısıltılar da\nBir yandan da ezan kulağımda\nAllahu ekber\nAllahu ekber\nBenmiymişim muktedir ?\nBizmiymişiz son şans verilen insana\nAnalar ! Babalar ! \nKardeşlerim!\nIn Ga !\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 762,
    "title": "Koşarak anlattım her şeyi",
    "body": "Koşarak anlattım her şeyi\nBir konu bu kadar mı nefes nefese kalabilir\nMalesef göremeyecekler gerçeği\nOlsun , olan oldu , olabilir.\n\nHer zaman her şey yolunda gidecek değil demiştim\nAl iki yudum su iç , heyecanın yatışsın\nBir dakika içinde 2 defa değiştin\nKalabalık yalnızlığa alıştı\nOrtalık karıştı\nOlaylar kendiliğinden gelişti.\nDüşman, barıştı.",
    "category": "en_iyiler"
  },
  {
    "id": 763,
    "title": "Zamanı geldi davranın",
    "body": "Zamanı geldi davranın\nYer yerinden oynasın artık\nGökyüzünde iki yıldız mı çarpışır\nYer yüzünde plakalar üst üste mi tırmanır\nRüyalarda tek bir isim\nDikkat edilecek tek bir cisim\nBeyaz siyah tek bir resim\nHepsi benim\n\nOlacaklardan sen sorumlusun\nSorarlarsa çok olumlusun\nRica ediyorum benim olur musun ?\nKelimelerden kaleler inşa ediyorum",
    "category": "en_iyiler"
  },
  {
    "id": 764,
    "title": "Ben belli ki en akıllı deliyim",
    "body": "Ben belli ki en akıllı deliyim\nAklımdan geçenlerle dışardan gördüğünüz bir değil\nSusuyorsam sesimi dinlemek için\nYazıyorsam sesimi duyman için gafil\nAferin , demin emin \nBiraz engin biraz derin\nBilin ki çirkin değil gökyüzünde karanlıklar\nKahkahalar da bu yüzden var\nAğlamıyorum ben gülümserken\nBelli ki acıklı bir son olacak benimkisi\nBelki bir hastane , belki bir sahil\nEmin değilim\nHayatımdaki hiçbir şeyden hemde iki.",
    "category": "en_iyiler"
  },
  {
    "id": 765,
    "title": "Kulaklarda aynı şarkı",
    "body": "Kulaklarda aynı şarkı\nDinleyin , 2 anlatıyor aşkı\nGöğsü koca gökyüzü\nKalbi koskoca evren\nGünahlardan günah beğenirken\nNe yapabilirsin ki başka ?\n\nKaç kere unutabilirsin arşı\nKimler kimler ağlıyor duvarlara karşı\nBu belki de bir elveda marşı\nÖlümlerden ölüm beğenirken\nNe yapabiliriz ki başka.",
    "category": "en_iyiler"
  },
  {
    "id": 766,
    "title": "Göz bebeklerim sana kilitli ey sahip",
    "body": "Göz bebeklerim sana kilitli ey sahip\nDünden bugüne neler değişti ?\nEllerinden gelenlere ne oldu sahi ?\nBunu yaz bir yere demiştin.\nYazdım işte\nBenimsin.\nEhh işte...",
    "category": "en_iyiler"
  },
  {
    "id": 767,
    "title": "Bir ceviz kabuğunun içinde saklı herşey",
    "body": "Bir ceviz kabuğunun içinde saklı herşey\nKırabilir misin bir taşı tepesine indirip ?\nYa baban istediyse ?\nYa kardeşin dert ettiyse ?\nYa o taşı tutan eller canın bildiğin anneninse ?\nBir mezar arabasına gidebilir misin öylece önce kendini bindirip ?",
    "category": "en_iyiler"
  },
  {
    "id": 768,
    "title": "Gözlerimden okunmuyor mu halim ?",
    "body": "Gözlerimden okunmuyor mu halim ?\nYapay bir ruh inşa etmeye çalışıyorsun bana\nİyiler ve kötüler aynı çatı altında ve\nİki tarafta barışın tek çözüm olduğunun farkında\nNe kadar yalnızsın kararlar verirken\nBu savaştan çıkabilecek miyiz sağ salim ?\n\nBen burada hangi roldeyim bilmiyorum\nBir avuç ilaç ve bir yudum suya talim.",
    "category": "en_iyiler"
  },
  {
    "id": 769,
    "title": "Aklımı anlatıyorum satır satır satır satır her gece",
    "body": "Aklımı anlatıyorum satır satır satır satır her gece\nBence eski cümlelerin yenilerden tecrübeli olması\nİncinmek için yanlış zamanlara rastladım bence\nVe malesef Güneş'in gecelere doğmaması\nNe kadar çok isterdim anlamasını\nÇatımın altmın ortasına damlamamasını\nAnnemin öperek uyandırmasını",
    "category": "en_iyiler"
  },
  {
    "id": 770,
    "title": "Sanki herkes herşeyi görüyor",
    "body": "Sanki herkes herşeyi görüyor \nSanki herkes kör\nSanki herkes birer birer karşına çıkıyor\nGözlerim ! \nGör !\n\nHiç kimseye söyleme\nKimseye sakın bakma öyle",
    "category": "en_iyiler"
  },
  {
    "id": 771,
    "title": "Gülmek ne kadar zor artık",
    "body": "Gülmek ne kadar zor artık\nUtanıyorum neşemden\nOlan biten o kadar zor ki\nKalınmıyor peşinden\n\nKısa kısa kızıyor artık insanlar\nÖlümü bekleyen koca bir şehrin tedirginliğinden istifade ediyor hatta bu şiir\nBaksana ne kadar da anlamsız bir fiil\n\nSonu belli olmayan bir mesele\nVe inadına aşklar\nNe olursa olsun yaşanabiliyorlar \n\nSonu belli olmayan bir mesele\nVe inadına aşklar\nNe olursa olsun yaşanabiliyorlar \n\nŞimdi ara verme zamanı\nÇünkü yarım ve eksik tamamı\nŞimdi ara verme zamanı\nÇünkü yarım ve eksik tamamı\n\nGülmek ne kadar zor artık\nUtanıyorum neşemden\nOlan biten o kadar zor ki\nKalınmıyor peşinden\n\nKısa kısa kızıyor artık insanlar\nÖlümü bekleyen koca bir şehrin tedirginliğinden istifade ediyor hatta bu şiir\nBaksana ne kadar da anlamsız bir fiil\n\nSonu belli olmayan bir mesele\nVe inadına aşklar\nNe olursa olsun yaşanabiliyorlar \n\nSonu belli olmayan bir mesele\nVe inadına aşklar\nNe olursa olsun yaşanabiliyorlar \n\nŞimdi ara verme zamanı\nÇünkü yarım ve eksik tamamı\nŞimdi ara verme zamanı\nÇünkü yarım ve eksik tamamı",
    "category": "en_iyiler"
  },
  {
    "id": 772,
    "title": "Sana dönüyoruz hepimiz yolumuz düz",
    "body": "Sana dönüyoruz hepimiz yolumuz düz\nHer zaman , zamanlardan bahsedecektik\nSözler vermiştik uzun uzun\nYalanlardan birini mi seçtik\n\nHer gece bir yerlerde sabah oluyordu nasılsa\nHer karanlığıma bir rüya yerleşmiş \nGüneş yıldızlar ve bulutlar ardında ay\nBen halledeceğim kendimi bırakın bana",
    "category": "en_iyiler"
  },
  {
    "id": 773,
    "title": "Belli ki müsadenle bu kaostan çekiliyorum ben",
    "body": "Belli ki müsadenle bu kaostan çekiliyorum ben\nBelli bu savaş bitiyor\nVe biz tükeniyoruz.\n\nBu hantallık ve bu cefa\nBu aptallık\nBu macera ?\nPerişan kalmış bir hikayenin son hamlesi\nÖzellikle bir tanesi var ki dillere destan\nAkın akın ölüyoruz sessizlikten.\nNereye gittiğini görmüyor insan...",
    "category": "en_iyiler"
  },
  {
    "id": 774,
    "title": "Davullar çalıyor uzaklarda",
    "body": "Davullar çalıyor uzaklarda\nBelli ki bir kutlama var\nSözlerim kulaklarımda sanki kendimi seyrediyorum\n\nİnsanlar , Ey insanlar\nBütün bu sorular tuzaklardan\nBen bana ne ilham edildiyse onunla seleniyorum\n\nTanrım ,\n\nBana bu yükü yükledğinden beri tüm gücümle savunuyorum yanlışlardan ayrırdığın tüm gerçekleri\nYoruldum lakin\nDinlenmeden aksini iddaa edenlerden çok yoruldum",
    "category": "en_iyiler"
  },
  {
    "id": 775,
    "title": "Kelimeler denizinde iki kulaç daha atıyorum bu gece",
    "body": "Kelimeler denizinde iki kulaç daha atıyorum bu gece\nSu nispeten ılık ve yumuşak\nVe iki kelimenin biri bir biri iki hece , tuhaf\nAslına bakarsan olmuş olacak\nVe gebe nicelerine bu kalp\nNice kıyılarda cennet bekliyor seni bak !\n\nSen benim dengelerimi yeniden düşünmemi sağlayan rüzgar mısın yelkenlerime dolan ?\nVe sen benim alacaklısı olduğum dünyam mısın kainatta biricik olan ?\nBen senin hislerinde var olmaya çalıştığım rüyaların başroldeki kahramanı mıyım kadın ?\nVe ikimizinde kazandığı bir yarış , finale son bir kulaç kala",
    "category": "en_iyiler"
  },
  {
    "id": 776,
    "title": "Gidemiyorum da hay lanet , yine kaldım bir başıma",
    "body": "Gidemiyorum da hay lanet , yine kaldım bir başıma\nAma kalmak da imkansız artık dönmeyeceğini bile bile geri bir bakıma\nGözlerime bakmayan her bir çift diğer göz için bu şiir Doğru dürüst yazamıyorum da , şu hale bak.\nGönül almak şuan , nasıl zor geliyor bir bilseniz...\nSizli bizliyseniz.\nSesimi duymayan her biriniz için böyle bu ve hayırlısını dileyemiyorum da üzgünüm\nAğlamak mı ? \nAğlamak zayıflatacak bu sefer beni , güçlü kalmak kadar istediğim bir şey yok şuan çünkü bende kırgınım. \nSonuç olarak ;\nYön bulmaya çalışıyorken tek başıma\nYalnız bırakın beni, boşverin buralarda.\nZifiri karanlıkta bir duvar bulmaya çalışyorum korka korka.\nYüreğimi burka burka.",
    "category": "en_iyiler"
  },
  {
    "id": 777,
    "title": "Bilmediğini bilmeyenler var usta",
    "body": "Bilmediğini bilmeyenler var usta\nIsrarla ısrar edenler\nGörmeden söyleyenler\nDuymadan dinleyenler\nHissetmeyenler\nAnlamadığını anlamayan insanlar var usta\nUzun bir yolda yalnız başına gidenler\n\nSöylediklerim yalan değil\nHikaye hiç değil usta\nBeni kendim seçmişimde\nKendimden geçtiğimi yeni farketmişim\nYapayalnızmışım hemde usta\nHemde upuzun bir yolda 2 başıma\nKendi kendime yol arkadaşı usta\nBir tek kendimi affetmemişim\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 778,
    "title": "İyilik ve kötülük benim içimde",
    "body": "İyilik ve kötülük benim içimde \nSavaşın ve barışın ortasında yansız biri olabilmekte ,\nDengeyi tutturabilmekte ,\nHerşeyi oldurabilmekte benim elimde.\n\nYeter ki sen soruyu doğru sormasını bil\nBütün cevapları verip öyle gidelim birlikte.",
    "category": "en_iyiler"
  },
  {
    "id": 779,
    "title": "Hayallerimin sesi neredeyse duyulmayacak kadar kısıktır benim",
    "body": "Hayallerimin sesi neredeyse duyulmayacak kadar kısıktır benim\nYeterki kainat kulak versin\nBiraz önce ya , henüz , daha demin \nBir daha karıncayı bile , bile bile incitmem dersin\nBu size son tersim.",
    "category": "en_iyiler"
  },
  {
    "id": 780,
    "title": "Sen aksini kanıtlayana kadar ben burdayım",
    "body": "Sen aksini kanıtlayana kadar ben burdayım\nBen eksikliklerimden muafım\nYastayım.\nYa sen ?\nSen bana geçip giden her bir anın çaresizliğini gösterebilir misin ?\nBiraz daha mı ölsün çocuklar ?\nHangi gözler ? \nHani kalbin aynası ?\nNeden eğlendirmiyor oynanan bu oyunlar ?\nNeden dostça berabere kalıp gümüş madalyayı paylaşamıyor taraflar ?\nBir kazanan mı olmalı ?\nRezilliğin daniskası...\n2-2 bitsin ben atıcam pası.",
    "category": "en_iyiler"
  },
  {
    "id": 781,
    "title": "Ayaklarımı uzatıyorum sonsuz bir boşlukta",
    "body": "Ayaklarımı uzatıyorum sonsuz bir boşlukta\nCennet ve cehennem eşit uzaklıkta\nSıcak serin oldukça\nVarlıkta ve yoklukta sordukça kendimi kendime daralıyor çember\n\nHer şey dört nala koştukça\nO şeyi sana sordukça\nKelimelerle ifade edemeyesin diye varlar\nIrmaklar nehirler ateşler ve lavlar\nDüşündükçe bozuluyor ezber",
    "category": "en_iyiler"
  },
  {
    "id": 782,
    "title": "Tanrı bir şeye karışsaydı eğer her şeye karışırdı",
    "body": "Tanrı bir şeye karışsaydı eğer her şeye karışırdı\nBu yüzden hiç karışmadı ki ortalık karışsın.\nİnsanlık insanlığa alışsın\nKüsler barışsın\nRuhlar tanış\nGüneş tan\nUzak ta\nZaman t",
    "category": "en_iyiler"
  },
  {
    "id": 783,
    "title": "Kendimde gördüğüm, senin bende gördüğünden çok farklı kul",
    "body": "Kendimde gördüğüm, senin bende gördüğünden çok farklı kul\nBir bak bakalım önce bir kaç ufak fark bul\nSonrası zaten kabul\n\nAklın ermeyince boşverme , savaş elinden gönlünce\nÜzülme , anla , sabit bir fikre takılıp kalma\nBir daha böylesini göremeyeceksin , sadece bir ömrümce\nUnutma , gönül al , zaman çalma",
    "category": "en_iyiler"
  },
  {
    "id": 784,
    "title": "Kelimeler bende genelde gözlerini kısar önce",
    "body": "Kelimeler bende genelde gözlerini kısar önce\nBir sorar öyle kendine ne kadar lazımım\nEğer bir şiirse eninde sonunda yazdığım\nNe kadar da Nazım'ım !\n\nDönmezse yarın Dünya\nBen herkesten razıyım.",
    "category": "en_iyiler"
  },
  {
    "id": 785,
    "title": "Avuçlarımla kainat arasındaki sonsuz boşluk...",
    "body": "Avuçlarımla kainat arasındaki sonsuz boşluk...\nAğlasam gün doğumu umursar mı bu durumu ?\nNerden geldik nereye gidiyoruz neden bu çoşku ?\nBırak artık dolsun içime o sarı kırmızı loşluk\nSonum\nİçimdeki boşluk.\nVe o fısıltı kuşku.",
    "category": "en_iyiler"
  },
  {
    "id": 786,
    "title": "Bana biçilen değer",
    "body": "Bana biçilen değer \nYapmamı beklediğiniz her şey\nİnançlarım ve kabuslarınız\nNe kadar da birbirlerine benziyorlarmış meğer\nHalim kalırsa yazarım\nMutluluk duyarsanız eğer",
    "category": "en_iyiler"
  },
  {
    "id": 787,
    "title": "Birebir nedeni vardı her şeyin",
    "body": "Birebir nedeni vardı her şeyin \nBir uğura hizmet için seçilmişti her biri\nYanlışı yoktu gerçeğinin\nSevgiye savaş açmış bir düzenin yıkıcı gücü bir\nİlahi aşk iki\nBunlar zemin\n\nOl dedi de bitmedi mi sandınız ey ahali\nÖl dediğinde bitti sandığınız vah hali\nAl dediğinde verir gibiydi değil mi ?\nVerirmiydi isteseydin geri ?\nEl değmeyen , göz görmeyen , iz sürmeyen bir ışığın peşindeyiz , bağlamışız mevsimleri ve zamanı \nBen çözeceğim elbet bu düğümlü ilmeği ayıracağım sapla samanı\nÇünkü bir nedeni vardı herşeyimin\nİlahi aşktı gerçeğim olan\nGüneşti sınav ve ne yazık biz bu şansı mahvettik.\nBir Dünya kaldı solan.",
    "category": "en_iyiler"
  },
  {
    "id": 788,
    "title": "Arada geliyorsun arada gidiyorsun aklımdan aklım",
    "body": "Arada geliyorsun arada gidiyorsun aklımdan aklım\nBöylelikle içimde bir fırtına kopartıyor Tanrı\nÖncesinde bir sensizlik\nSonrasında bir sessizlik\nYardım sandığım içimdeki yangın\nSağ yanımda doslarım ve düşmanlar sol yanımda düşmanlarımla dostlar\nAkıllar baygın.",
    "category": "en_iyiler"
  },
  {
    "id": 789,
    "title": "Uğurlar olsun Güneş kadar uzak.. Güneş diye yakın",
    "body": "Uğurlar olsun Güneş kadar uzak.. Güneş diye yakın\nBenmiydim gördüğüm , kader mi ağlarını ördü ?\nBiraz yavaş ne olursun boğazımda bir düğüm. Sakın !\n\nNeden savaş ?\nNeden ölüm yakın ?\n\nKendiliğinden bunu kabul ettirmek o kudrete biraz sakin\nAma çok sevinmiştim buna sen beni kandırdın\nOlanlara alış olacaklarla barış\nYine aynısını göreceğim belki\nNeden mi sonum , etrafına bakın..",
    "category": "en_iyiler"
  },
  {
    "id": 790,
    "title": "Bir el kadar yakınım uzaklara",
    "body": "Bir el kadar yakınım uzaklara\nYeni bir kelime öğrenmiş bir çocuk kadar da şaşkınım\nDaha az önce yelken açmış gibi yeni ufuklara\nGecesini bekleyen bir fırtınayım galiba ben\nSessiz ve sakin bir akşamım\n\nAnsızın yola çıkan bir sincap kadar eyvah\nSon treni kaçırmış bir aptal kaderde yanlışım\nHatrında kalan masallara inat\nRoman yazan o kadın kadar bende varım\nSesini duyurmaya çalışan bir sakin , adım 2.\nBirin 2 katıyım.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 791,
    "title": "Beni rüyanda görmeni bekliyorum",
    "body": "Beni rüyanda görmeni bekliyorum \nUyandığında yanımda bitiver\nBiliyorum zor ama \nBen unutuyorum sen gel\nBir merhabayla\nBir nasılsınla başlasın sohbetimiz\nSonra hiç bitmesin\nÇünkü rüyalarda sona eriyor\nYardım et bana zoruma gitmesin\nBen yoruluyorum\nYardım et bana zoruna gitmesin\nBen her geçen gün daha fazla ölüyorum",
    "category": "en_iyiler"
  },
  {
    "id": 792,
    "title": "Pardon..",
    "body": "Pardon.. \n2 saniye bakabilir misiniz ?\nKelimelerden bir merdivenden çıkıyorum çünkü\nGökyüzümdeki parlak yıldızlardan birer tanesisiniz\nTeker teker her birinize sesleniyorum\nBir bilseniz\nÇok değerlisiniz.",
    "category": "en_iyiler"
  },
  {
    "id": 793,
    "title": "Çok sessiz Dünya'nın sokakları",
    "body": "Çok sessiz Dünya'nın sokakları\nAvazımın sustuğu yerden bu sefer\nIssız düşüncelerimin teferruatları\n\nTonlarca adam sesi kulağımda\nBir o kadar da siren var kaçın !\nYenmeye çalışırken türlü zaruri mevzuatları\n\nBitti mi ?\nBu sağır aynı zamanda dilsiz kör karanlıkta\nDuyamıyorlar tezahuratları\nAlışılagelmişin dışında bu sefer malumatları\nİnliyorlar",
    "category": "en_iyiler"
  },
  {
    "id": 794,
    "title": "Herkese selam.",
    "body": "Herkese selam.\n\nBeklenen beklenmedik gerçekleşiyor. Tam karşınızda capcanlı. Kötülükten midesi bulanmış, barışa susamış , sormak istiyor liderlere neden masumlara bombalar yağdırılmış.\n\nSağa sola Rahmi Oğuzhan yazın bakalım ne kadar daha şaşırabileceksiniz...\n\nEğer bu da haber niteliğinde değilse bu işi bırakın.\n\nKısa bir yönlendirme :\n\nYoutube hariç tüm müzik platformlarında : rahmi oguzhan - We are 1 albümüne ulaşın. Sonra instagrama ordan x'e derken zaten numaram sizde var dilerseniz arayın konuşalım. İlginizi çekebilecek görseller ekte. Şiir de size.\n\nİyi çalışmalar.",
    "category": "en_iyiler"
  },
  {
    "id": 795,
    "title": "Belki yarın yarım kalır diye bir kez daha Güneş'i seyre durdum dalıp…",
    "body": "Belki yarın yarım kalır diye bir kez daha Güneş'i seyre durdum dalıp , bir bankın üzerinde yalnız.\nBatıyorsun arkana baka baka ama söz verir gibi bir veda\nGidiyorsun yarın olmaya sanki tutmak için sözünü son bir nefes alıp\nAnlıyorsun beni\nYüreğimden şarkıları ısmarlaya ısmarlaya\n\nAşk mısın Güneş ?\nMeşk misin Ay ?\nUfukta batıyorken bu sefer beni de sana vurgunlardan say.\n\nAhh ah\nBir yerde yeniden doğ ,  bu gece yeniden başlayacakken kendini sonsuza yay.",
    "category": "en_iyiler"
  },
  {
    "id": 796,
    "title": "Var olma çabasıyla yok olmanın verdiği bilinmezliğin içinde kayıbım",
    "body": "Var olma çabasıyla yok olmanın verdiği bilinmezliğin içinde kayıbım\nMilyarlarca yıldız şahidim\nYalnız kalmak ayıbım\n\nMerhaba , ben Dünya\nEvren dediğin sonsuzluğun içinde bir sayıyım\nİkiye razıyım ve\nElbette meleklerden yanayım\nCehennemde mi yanayım ?",
    "category": "en_iyiler"
  },
  {
    "id": 797,
    "title": "Geri çağırmayı düşündün mü hiç ?",
    "body": "Geri çağırmayı düşündün mü hiç ?\nİşim gücüm bitmemişken\nGörevi yerine getirmeden\nGerçeği bilmeden\nHuzurumdan bir haber\nİstedin mi hiç oyunlarımın mutluluğunu ?\n\nGel desen gelmem\nIsrar etme\nGit deme gitmem\nBir kelime etmeden\nŞurdan şuraya çekemezsin zaferimi , vermem !\nMağlup edemezsin ayrılıklarımı\nMahçup bırakamazsın yaşlanmayan çocukluğumu\nMüziği alamazsın elimden\nSusturamazsın ilhamımı\nAlamazsın ellerimden umudumu\nGeciktirme zuhurumu\nAlma ruhumu\nOyunlarım bitmeden.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 798,
    "title": "Ya Hu !",
    "body": "Ya Hu !\nGörmüyor musun uğruna can aldığını düşmanın ?\nDuymuyor musun vesvesesini şeytanın ?\nÜzerimde hakkı kaldı gözyaşların...\nElimden gelen sana el açmak,\nVe yazmak !\n\n2 !\nYaz !\nSen istersen iki baharın arasında yaz\nMevsimlerin hepsine arz.\nOkumak farz , yazmak tarz.",
    "category": "en_iyiler"
  },
  {
    "id": 799,
    "title": "Bana bütün kötülükleri yapabilirsiniz",
    "body": "Bana bütün kötülükleri yapabilirsiniz\nNasılsa 2 dakikada unuturum\nElimden her şeyimi alabilirsiniz\nBen bir toz bulutuyum\n\nBenimle istediğiniz yere varabilirsiniz\nKendi kendime kendi kendimden korunurum\nNasıl olsa en doğrusunu siz bilirsiniz\nBen bir hanımefendinin çocuğuyum",
    "category": "en_iyiler"
  },
  {
    "id": 800,
    "title": "Bugün günlerden o gün",
    "body": "Bugün günlerden o gün\nBugün dünün yarını, yarın bugünü dünün\nNeyi bekliyoruz daha ? Bu kaçıncı gün dönümü ?\nSiz yine de çağırılınca gittiğiniz yollardan dönünüz.\n\nAvazımın çıktığı yerin bir üstünden bir daha üstünden , iki kere , beş kere , sonsuz kere üstünden\nİnin artık üstümden !\nNerelere gideyim ? Hanginizden vazgeçeyim ?\nBirinize aşığım\nHepinize küstüm ben...\nSusarım...",
    "category": "en_iyiler"
  },
  {
    "id": 801,
    "title": "Son ki üç dört",
    "body": "Son ki üç dört\nBaşladı yine aklımın kendi kendisiyle çelişkili hali\nİstisnasız her gülüşüm bir şekilde sona ermişti\nAğladığım zaman durdurmaya çalışmıştım kendimi\nTam biterken başladı ya sessizlik\nKendim dediğin o sensizlik yavaş yavaş geldi\nBelki çabucak gidecek\nBu belki böyle yıllarca sürecek\nBelki bir kaç dakika sonra sona ereceksin.\nKimse aklındakileri görmeyecek..",
    "category": "en_iyiler"
  },
  {
    "id": 802,
    "title": "Sen ne kadar söylersen söyle",
    "body": "Sen ne kadar söylersen söyle\nArkandaki önündekine öylesine bağırır ki\nKendi sesini duyamazsın\n\nNe kadarda yalnızlığa köle..\nKendine sözler verip\nYalanlardan kaçamazsın\n\nBu hayat da aşağı yukarı böyle işte\n\nVeremezsin , alamazsın.",
    "category": "en_iyiler"
  },
  {
    "id": 803,
    "title": "Cennet iki dudağının arasında bir soluk ,",
    "body": "Cennet iki dudağının arasında bir soluk ,\nEğer unutmadan ismini zikredebilirsen sonun\nMazi ilk kelimeleyle başlayan bir yol\nİnan bana sonuna kadar inanabilirsen\nLütfen bunu yap kendine yetebilirsen\nEski bir dost ol kendine\nEnfes manzara seç kalbine\nEn güzelinden bir gül sev dikeniyle\nEğer sen de hayatı sevmeye söz verebilirsen",
    "category": "en_iyiler"
  },
  {
    "id": 804,
    "title": "Beni bir dinlesenize derinden",
    "body": "Beni bir dinlesenize derinden\nBağıracağım sessizle\nYargısız infaz etmeden kelimelerimi berisine bakın kafiyelerin\nHikayede yer oynuyor yerinden\n\nBeni bir dinlesenize derinden\nSoru felan sormadan insaf edip 2 cümleme virgüllerle donattığım sol gözüm ve sağ elimle\nİlerisi yakın , kalemim cesur , ılık rüzgarlar sıcak, Dünya senin , güneş , benim.\nGörevim.\nYan benimle.\n\n2",
    "category": "en_iyiler"
  },
  {
    "id": 805,
    "title": "Doğru ya !",
    "body": "Doğru ya !\nNasıl düşünemedik meselenin sevgi olduğunu\nAh ulan ah\nBi şekilde fark etmiş olmamız gerekirdi yokluğunu\n\nİki dakika !\n2 her yerde 2 ve bir işaret aslında sana bana\nYer yerinden oynamadan dualarda\nGözlerimiz uyuyorken hala \nİşitirken geçmişi\nKalbimizin gizli odalarında",
    "category": "en_iyiler"
  },
  {
    "id": 806,
    "title": "Neden dönmedim hala davamdan ?",
    "body": "Neden dönmedim hala davamdan ?\nYüreğimden avazımı neden susturmadı gökyüzü ?\nGeç mi kaldı ?\nNeden yağmur olup yağıyor gözlerimden ?\nNeden damla damlalar ?\nMadem dönesim de yok o sözümden ve diğerlerinden ?\nBen kaçım diye sorasım gelmiyor değil içimden..\nNereden nereye geç kalmışım ezelden\nDönüp dolaşıp kendime varışımdan kaçmışım ben\nDeli divane mi dönmüşüm\nYoksa bu deli divane mi ?\nNeden dönmedim davamdan \nNeden baksana bu kadar başka insan varken\nMilyarlarca kağıtla yalanmayı bekleyen zarflar\nYaşanmamış hayatlar var\nYorgun omuzlar\nVarlık da var da neyse..\nSil baştan.\n \n2",
    "category": "en_iyiler"
  },
  {
    "id": 807,
    "title": "İkinci bir bahar var onlarca",
    "body": "İkinci bir bahar var onlarca\nBence o ikinci baharın en sonundayız ta ilk günün şafağından beri\nİkinci şanslar var ya alınacak verilmeyecek geri\nİki kere düşün dedi bana , daha fazla gitmeden ileri\nTan vaktinden anlatıyorum\nŞarkıları susturun , dinleyin sessizliğimdeki hikayeyi\n\nGüneşi el ele tutuşmadan izleyeceğiz hep beraber\nGöz yaşları , tonlarca , boş eller , nice sonlara.\nHesaplar sorulacak vicdanlara\nKendine soracak bu sefer insan sorunlu sorularını\nEyvahlarla başlayacak bütün cümleler\nBitmeyecek sanılacak ya o tasa\nBatmayacak denecek ya o güneş\n2 diyor ya Tanrım bana bağıra bağıra\nBir tek ben mi duyuyorum diye sormuyorum ya artık sessiz konuştuklarıma\nÇünkü hesaplar tutmayacak ya bu sefer vicdanlarda\nYenik düşeceği ya öf.\nBuruk kalacak af.\nHicranlarda.",
    "category": "en_iyiler"
  },
  {
    "id": 808,
    "title": "Ah birde iki satır cümleyi bir araya getirebilseydik",
    "body": "Ah birde iki satır cümleyi bir araya getirebilseydik\nSen hikayeni anlatırdın , bense şiir\nDinle diye yalvarırdım , belki dünyam değişir",
    "category": "en_iyiler"
  },
  {
    "id": 809,
    "title": "Dur mu ?",
    "body": "Dur mu ?\nBana şimdi gel de vaz mı geç diyorsun bu sevdadan ?\nEyvah !\nUnut o kadar yaşanılanı\nGeride bırak bütün alışkanlıkları\nNah !",
    "category": "en_iyiler"
  },
  {
    "id": 810,
    "title": "Ben ne yapıyorum ? Dur der gibi düşün...",
    "body": "Ben ne yapıyorum ? Dur der gibi düşün...\nSoğuktur yazı kışı aklımın... biraz üşür.\nSanki her şey birer ilham gibi etrafımda\nResmen tam ordasındayım bu mucize düşün\nBaş kahramanıyım ben\n\nİki defa söyletmeden çevrendekilere bir bak istersen\nSenin içinler sana rağmen, senin içinler sana tap\nSen sorgulama , aklına öğütleneni yap dilersen\nEtrafında pervaneler dönmüşüm ya gidersen\nYa gidersek ?\nUçup gitmesin bu kaygım men",
    "category": "en_iyiler"
  },
  {
    "id": 811,
    "title": "Zaman öyle sert çarpmıştı ki yüzüme",
    "body": "Zaman öyle sert çarpmıştı ki yüzüme\nDuvarlarında dikenli güller\nŞiirlerindeki kafiyeler bile\nBana susmanı haketmemişti.\n\nKendi kendine okuduğum bir şarkıydı bu söylediğim\nMırıldanmak bile bana yetti\nPeki ya sana ey insan ?\nGörmüyor musun tak ettiğini ?\n\nKendi kendine okuduğum bir şarkıydı bu söylediğim\nMırıldanmak bile bana yetti\nPeki ya sana ey insan ?\nGörmüyor musun tak ettiğini ?\n\nBir devir kapandı , yenisi de açılmayacak üzgünüm\nSözler alıp göçüp gideceğim buralardan süzülüp\nNasılını merak ediyorum\nBarışıp mı küsüp ?\n\nZaman öyle sert çarpmıştı ki yüzüme\nDuvarlarında dikenli güller\nŞiirlerindeki kafiyeler bile\nBana susmanı haketmemişti.\n\nKendi kendine okuduğum bir şarkıydı bu söylediğim\nMırıldanmak bile bana yetti\nPeki ya sana ey insan ?\nGörmüyor musun tak ettiğini ?\n\nKendi kendine okuduğum bir şarkıydı bu söylediğim\nMırıldanmak bile bana yetti\nPeki ya sana ey insan ?\nGörmüyor musun tak ettiğini ?\n\nBir devir kapandı , yenisi de açılmayacak üzgünüm\nSözler alıp göçüp gideceğim buralardan süzülüp\nNasılını merak ediyorum\nBarışıp mı küsüp ?",
    "category": "en_iyiler"
  },
  {
    "id": 812,
    "title": "Kendimi bildim bileli dediğim yerdeyim",
    "body": "Kendimi bildim bileli dediğim yerdeyim\nSıfır noktasındayım , henüz günahsız\nSonu gelmez gibi bir mucize\nYeniden doğmuş gibi noksansız devamım\nTutup kaldırmış Dünya mizansız\n\nYalan söylüyorum değil mi ?\nimkansız...",
    "category": "en_iyiler"
  },
  {
    "id": 813,
    "title": "Beni gökyüzünde benzettiğin bir yıldız vardı hatırlarsın",
    "body": "Beni gökyüzünde benzettiğin bir yıldız vardı hatırlarsın\nBütün süratiyle gelip Dünyana mı çarpsın ?\nKüçük bir öpücük mü kondursun dudaklarına\nİyi ki mi varsın ?\n\nAşk seninle bir lavanta bahçesinde sevişmek\nİhtiras gözlerimin önünde kıyafetlerini değişmek\nÖzlem yokluğunun varlığına alışmak\nAklımı mı alsın ?",
    "category": "en_iyiler"
  },
  {
    "id": 814,
    "title": "İşe yaramayacak konuşmalarım",
    "body": "İşe yaramayacak konuşmalarım\nHiçe varamayacağız hiç birimiz\nÖzellikle yarım kavuşmaları\nÖzleyeceğiz her birimiz\n\nGüzel olmayan savaşlarını\nGüze varamayacak o yazlarını\nSözler vermeyen barışlarını\nBir kağıt bulup üzerine yaz\n\nBul beni der gibi\nSor seni kendine\nGölgemi al benim , kendime ver beni\nBir kağıt gibi üzerime yaz\n\nHer şeyi yenmişiz\nHer sudan içmişiz\nHer yere gitmişiz eşimizle yaz\nHer savaş yenmişiz\nHayattan vermişiz\nHep sona gelmişizi peşimizde yaz.",
    "category": "en_iyiler"
  },
  {
    "id": 815,
    "title": "Yaptığını sandığın iyiliği başkasının aklına sokarsan",
    "body": "Yaptığını sandığın iyiliği başkasının aklına sokarsan\nZihnini zehirlersen çevrendekilerin\nKafasına takarsan olan biteni\nÇalarsan zamanından\nBu nefret senin eserin\nGurur duyman normal",
    "category": "en_iyiler"
  },
  {
    "id": 816,
    "title": "There are some feelings in me that I try to explain",
    "body": "There are some feelings in me that I try to explain\nIt gets intense while its growing\nIf I may find a way to get away from questions\nIt is crazy , It is mind blowing\n\nIts far when I close my eyes\nIts there when I open them wide\nPlease sir , lets go heights\nAt least we could try\n\nIts far when I close my eyes\nIts there when I open them wide\nPlease sir , lets go heights\nAt least we could try\n\nThere are some feelings in me that I try to explain\nIt gets intense while its growing\nIf I may find a way to get away from questions\nIt is crazy , It is mind blowing\n\nIts far when I close my eyes\nIts there when I open them wide\nPlease sir , lets go heights\nAt least we could try\n\nIts far when I close my eyes\nIts there when I open them wide\nPlease sir , lets go heights\nAt least we could try",
    "category": "diger"
  },
  {
    "id": 817,
    "title": "The reason for everything appears through your eyes",
    "body": "The reason for everything appears through your eyes\nIts the season of fall \nThere is no minute left\nThat was it , the all.\n\nOne ant under the ground\nMan up on all around\nSilence versus crowd\nFair playground\n\nOne ant under the ground\nMan up on all around\nSilence versus crowd\nFair playground\n\nLove is in the air , in the respiration\nFeeling is the inspiration ist the answer\nThe beat of the song californication\nMake the life better , make this place resaonable\n\nThe reason for everything appears through your eyes\nIts the season of fall \nThere is no minute left\nThat was it , the all.\n\nOne ant under the ground\nMan up on all around\nSilence versus crowd\nFair playground\n\nOne ant under the ground\nMan up on all around\nSilence versus crowd\nFair playground\n\nLove is in the air , in the respiration\nFeeling is the inspiration ist the answer\nThe beat of the song californication\nMake the life better , make this place resaonable",
    "category": "diger"
  },
  {
    "id": 818,
    "title": "I will go for it , fight for it , live for it",
    "body": "I will go for it , fight for it , live for it\nEven if somebody will try stop me while I am walking through\nYes , Its true\nI am the one who will do \nI maybe the one who can\n\nIts getting deeper while time is passing by nearby our side without knowing the end is coming to us to say goodbye.\nJust , why ?\nWhy dont you try ?\n\nIts getting deeper while time is passing by nearby our side without knowing the end is coming to us to say goodbye.\nJust , why ?\nWhy dont you try ?\n\nI will go for it , fight for it , live for it\nEven if somebody will try stop me while I am walking through\nYes , Its true\nI am the one who will do \nI maybe the one who can\n\nIts getting deeper while time is passing by nearby our side without knowing the end is coming to us to say goodbye.\nJust , why ?\nWhy dont you try ?\n\nIts getting deeper while time is passing by nearby our side without knowing the end is coming to us to say goodbye.\nJust , why ?\nWhy dont you try ?",
    "category": "diger"
  },
  {
    "id": 819,
    "title": "Last fourty five minutes",
    "body": "Last fourty five minutes \nLife tortures us with this\nClocks arent real when the young turnin right\nBut\n\nRace of the minutes are the best of the limits\nAnd they suppose to be digits over us\n\nAy\n\nTell me the clue mr. Tell me where liars are\nThen we can jump in to the why\n\nAy\n\nTik tok hypnotising \nKnock knock who is coming\nMaybe we can fly to sky\n\nLiar liar liar liar\nLiar all the time\n\nLiar liar liar liar\nTime wont stop right now.\n\nAy",
    "category": "diger"
  },
  {
    "id": 820,
    "title": "Wrong feelings in my brain cells",
    "body": "Wrong feelings in my brain cells\nWrong missed calls in growing hells\nReady to stand in front of the only\nPrepared question is why are you lonely ?\n\nAre you really gonna burn me ?\nAnd there is no u turning ?\nDont forget what you are not forgiving\nLet me be get known by everybody\n\nI will be the history\nYoungest and most mystic love story\nWhich of my eye you are looking at ?\nRight and light , Left and dark , both , non ?\n\nI would take you to my heaven\nIf you would explain me my right when I was seven.\nIts my turn to play fool\nYou are not real and you are not cool\n\n2 options , dividing , not comprehensive\n2 eyes you gave it to me , injusticely right , it was like a deal\nListen to me carefully\nI am the one and i am real.\n\nYou are a number and you are tales\nDont forget that you have gave us nightmares\nWe wrote songs to describe how it feels\nHeaven , Hell ?\nOh hell yes , heaven please..\n\n2",
    "category": "diger"
  },
  {
    "id": 821,
    "title": "Be my unlimited query",
    "body": "Be my unlimited query\nYou such a queen\nYou are much of mystery",
    "category": "diger"
  },
  {
    "id": 822,
    "title": "Secret to the silence is loud",
    "body": "Secret to the silence is loud\nYou will understand what are those about\nOnly time is going on on this road",
    "category": "diger"
  },
  {
    "id": 823,
    "title": "Im a torch",
    "body": "Im a torch \nYou are the lighter\nWe gonna burn\nTo create the fire\n\nCan you be the doom of the darkness\nStaying near by , \nThis place is full of this madness\nDont know even how\n\nWe can be the boom on the shadows like the\nCommunities fines\nThen we resume with the silence over\nMotherfucking lies\n\n2",
    "category": "diger"
  },
  {
    "id": 824,
    "title": "Like there is no other place",
    "body": "Like there is no other place\nYou showed up and made me smile from my hearth\nIf there wouldn't be just one another night\nI would promise you to stay by your side\nRest of my life.\n\nLike years didn't pass all this time\nRealize the memories can stay without saying Bye\nHello my dear friend !\nFrom the deepest place from my deeps\nWith all of my soul\nHi !\n\nLike years didn't pass all this time\nRealize the memories can stay without saying Bye\nHello my dear friend !\nFrom the deepest place from my deeps\nWith all of my soul\nHi !\n\nLike there is no other place\nYou showed up and made me smile from my hearth\nIf there wouldn't be just one another night\nI would promise you to stay by your side\nRest of my life.\n\nLike years didn't pass all this time\nRealize the memories can stay without saying Bye\nHello my dear friend !\nFrom the deepest place from my deeps\nWith all of my soul\nHi !\n\nLike years didn't pass all this time\nRealize the memories can stay without saying Bye\nHello my dear friend !\nFrom the deepest place from my deeps\nWith all of my soul\nHi !",
    "category": "diger"
  },
  {
    "id": 825,
    "title": "You must be messed up honey with that weights on your shoulders",
    "body": "You must be messed up honey with that weights on your shoulders\nBring that familiar feeling with you , we will find the holders\nBe honest , trust me up\nYou cant be alone with truth borders\nUgly truth\nTortures\n\nFalling from one year to another is fine\nCount the stars touches you gently\nHow to remember something is a mystery for me honey\nI will tell you about what I have done before\nAnd when i was that lonely\n\nIm spelling the spells honey\nWear your most beautiful dress\nWe will take a journey without anything\nWait for the bless",
    "category": "diger"
  },
  {
    "id": 826,
    "title": "Thus , this story has to tell",
    "body": "Thus , this story has to tell\nFocus goes to next line\nIts kinda parallel\nPerfect timing\n\nOnce upon a time\nThere were no minutes\nNo seconds\nNo moments\nNo borders\nNo limits\nNo numbers\n\nOnce upon that time\nThere were no humans\n\nExistence wanted to create \nSomething precious \nUs",
    "category": "diger"
  },
  {
    "id": 827,
    "title": "I dont believe in here",
    "body": "I dont believe in here\nI believe in there,  where people smiles here with tears\nEven if i want to know somehow\nI cant believe in here with all of these fears\nCause this place is not that we belong\nJoin me , without allow , be narrow\nWith all your knowledge and sorrow\nLet us complete the mission impossible to be hero\n\nSee the sences , feel them again and again\nIn all these consequences , be the pain and gain\nBeing here is hard to be stand lets over with\nLike all of the other places always rain\n\nSee the sences , feel them again and again\nIn all these consequences , be the pain and gain\nBeing here is hard to be stand lets over with\nLike all of the other places always rain",
    "category": "diger"
  },
  {
    "id": 828,
    "title": "I know that you follow me everywhere but you did not become my soul…",
    "body": "I know that you follow me everywhere but you did not become my soul yet.\nAnd read it again like there is no other chance.\n\nI know that you follow me everywhere but you did not become my soul yet.\nAnd listen again like there is no other chance.\n\nDo you know how lonely it feels ?\nWhy I have to have this ?\nI assume this is what my eternity needs\nDo not keep it up on it please\nHow are your fears of tears\nClose your eyes and open up your ears\n\nDo you know how lonely it feels ?\nWhy I have to have this ?\nI assume this is what my eternity needs\nDo not keep it up on it please\nHow are your fears of tears\nClose your eyes and open up your ears",
    "category": "diger"
  },
  {
    "id": 829,
    "title": "You are teling me that she is not so good",
    "body": "You are teling me that she is not so good\nRight in front of this shadow\nLike a fool\nA disaster \nGet lost now\nI wont let you , no !\n\nYou are telling me that she is not your type\nRight under this filthy rain\nLike a rule",
    "category": "diger"
  },
  {
    "id": 830,
    "title": "Korkmuyorum senden kötülük",
    "body": "Korkmuyorum senden kötülük\nBütün ordularını topla üstüme gel\nKim bilir kaç yaşındasın benimkisi bir ömürlük\nAma ikimiz içinde gerçek ecel\n\nKorkmuyorum senden kötülük\nÖdeyeceğim altı üstü bir bedel\nŞu dünya şunun şurasında kaç dönümlük\nBenimle buluşmamız gereken yere gel\n\nKorkmuyorum senden kötülük\nEninde sonunda karşılaşalım bir an evvel\nİştahın kabarmış nefretin açgözlülük\nSana yazdığım davetiye bile şiirsel\n\nKorkmuyorum senden kötülük\nBenim yüreğim seninkinden daha büyük.",
    "category": "diger"
  },
  {
    "id": 831,
    "title": "I wonder how you feel when you get sone closer",
    "body": "I wonder how you feel when you get sone closer\nI mean \nHow a moment can be this long\nAnd getting longer\n\nI get lost in this  , please dont mind\nThis is not a goodbye \nThis is the sun rising\nIn so in to this\nAnd will love you more every second i get older\nAnd even when Im ill..",
    "category": "diger"
  },
  {
    "id": 832,
    "title": "You show me how to be exist",
    "body": "You show me how to be exist\nIf you could be silence how would I exit\nPlease my only , lets next it\nLets let it happen somehow without mixing\nLets find our reason",
    "category": "diger"
  },
  {
    "id": 833,
    "title": "Familiar secrets all around",
    "body": "Familiar secrets all around\nNo reason for fall\nSeason of lying\nTrying harder to have them all\nBurry them underground",
    "category": "diger"
  },
  {
    "id": 834,
    "title": "Ill be ill til i fulfill with the true feelings againts reality",
    "body": "Ill be ill til i fulfill with the true feelings againts reality\nMy brain wants cruelity \nMy core needs immortality\nLike all of my cells negotiated for standing still\nWaiting for a holly touch on my personality\nThen they will move with an itch\n\nMy Heart will pump like a \nMy Eyes will move like a\nMy soul will feel like a \nBitch.\nThen i will wake up from this nonsense pitch.\n\nMy Heart will pump like a \nMy Eyes will move like a\nMy soul will feel like a \nBitch.\nThen i will wake up from this nonsense pitch.\n\nIll be ill til i fulfill with the true feelings againts reality\nMy brain wants cruelity \nMy core needs immortality\nLike all of my cells negotiated for standing still\nWaiting for a holly touch on my personality\nThen they will move with an itch\n\nMy Heart will pump like a \nMy Eyes will move like a\nMy soul will feel like a \nBitch.\nThen i will wake up from this nonsense pitch.\n\nMy Heart will pump like a \nMy Eyes will move like a\nMy soul will feel like a \nBitch.\nThen i will wake up from this nonsense pitch.",
    "category": "diger"
  },
  {
    "id": 835,
    "title": "I can see it from your sight",
    "body": "I can see it from your sight\nI want to shine within your eyes light\nDays might get longer , there may doors\nI will talk about this when its good night , and more\n\nNo doubts darling\nDance like there is no tomorow\nI will surrender\nNo doubts darling anymore\n\nYou are not a step less not a step more\nYou are a bless and above\nDont give up singing while you dancing\nThere are beautiful places we need to go",
    "category": "diger"
  },
  {
    "id": 836,
    "title": "Lets ride the night above the stars",
    "body": "Lets ride the night above the stars\nTime is a moment there , heals the hearts\nWe will come back soon to our welcome scars\n\nWho we are ?\nWhen we are ?\nThen we are\nGonna fly\n\nTry anyway\n\nroguzhan.com",
    "category": "diger"
  },
  {
    "id": 837,
    "title": "All i want to sell is all free",
    "body": "All i want to sell is all free\nIf you really want this\nI will be the one who you want me to be\nI am not begging you , its just\nPlease\n\nLet me hear you scream like you want it\nLet me hear you yell like you mean it\nI dont want all of these feelings \nİts just because im loving it.\nSieze.",
    "category": "diger"
  },
  {
    "id": 838,
    "title": "Do you want to feel the same?",
    "body": "Do you want to feel the same?\nDo you want someone to blame?\nDo you sometimes imagine the game?\nDo you want to play?\n\nAs yesterday was tomorrow two days ago\nToday is the yesterday of tomorrow and the day before\nLife is not a story… It’s a history.\nComes from the first day till today, along.\nAll alone, twins with the mystery\n\nOpen your mind\nClose your eyes\nDon’t even think to open and blink through the sight\nBe dark.\n\nRhythm is your heartbeat\nRule will be said by blood.\nWhen you catch the best moment of your memory\nLock it, throw and let it fly\nLet somebody else catch and continue the game.\nNow you can blame\nBe the history.\nComplete your task as you came here to be.\nWanna play again?\nTry again…\nTo be.\n\nDo you want to feel the same?\nDo you want someone to blame?\nDo you sometimes imagine the game?\nDo you want to play?\n\nAs yesterday was tomorrow two days ago\nToday is the yesterday of tomorrow and the day before\nLife is not a story… It’s a history.\nComes from the first day till today, along.\nAll alone, twins with the mystery\n\nOpen your mind\nClose your eyes\nDon’t even think to open and blink through the sight\nBe dark.\n\nRhythm is your heartbeat\nRule will be said by blood.\nWhen you catch the best moment of your memory\nLock it, throw and let it fly\nLet somebody else catch and continue the game.\nNow you can blame\nBe the history.\nComplete your task as you came here to be.\nWanna play again?\n\nDo you want to feel the same?\nDo you want someone to blame?\nDo you sometimes imagine the game?\nDo you want to play?\n\nDo you want to feel the same?\nDo you want someone to blame?\nDo you sometimes imagine the game?\nDo you want to play?\n\nTry again…\nTo be.",
    "category": "diger"
  },
  {
    "id": 839,
    "title": "Let me know what you were thinking",
    "body": "Let me know what you were thinking",
    "category": "diger"
  },
  {
    "id": 840,
    "title": "Let me",
    "body": "Let me",
    "category": "diger"
  },
  {
    "id": 841,
    "title": "Across the ocean",
    "body": "Across the ocean\nWhats near the edge\nWhy all of this motion\nWhy i have this fear\nLets play fetch\n\nAll around this round world\nWhy surrounding emptiness\nAn interesting loneliness\nAn impressive huge\n\nAll around this round world\nWhy surrounding emptiness\nAn interesting loneliness\nAn impressive huge\n\nLets play hide and seek\nLets wait for for some one come to see us\nLets close our eyes\nUntil light gets in our sight in the dark\n\nAll around this round world\nWhy surrounding emptiness\nAn interesting loneliness\nAn impressive huge\n\nAll around this round world\nWhy surrounding emptiness\nAn interesting loneliness\nAn impressive huge",
    "category": "diger"
  },
  {
    "id": 842,
    "title": "Secret to the silence is loud",
    "body": "Secret to the silence is loud\nYou will understand what are those about\nOnly time is going on on this road\n\nroguzhan.com",
    "category": "diger"
  },
  {
    "id": 843,
    "title": "Sometimes its just a feeling",
    "body": "Sometimes its just a feeling\nSometime its kind of meaning of my sorrow\nSome times are being unreal\nSame lies becoming tomarrow\nUnbelievable horror.",
    "category": "diger"
  },
  {
    "id": 844,
    "title": "We are one,",
    "body": "We are one, \nWe are full of expectations.\nSee what is summarizing hopeful sounds below\nFind something never gonna fail those seasons \nFeel when Idea comes to love...\n\nKneel down in front of the beginning !\nPleased tears , near fears go away !\nInside insider Its happening.. ;)\nBe love when it shows you the way...",
    "category": "diger"
  },
  {
    "id": 845,
    "title": "Its been a while since I wrote to myselfs best friend",
    "body": "Its been a while since I wrote to myselfs best friend\nNow its time to go get the news\nThe peace\nFrom a hell scene\n\nNow look better on this\nClear surface , shining thrifts\nBetter piss of , its nice to be mad",
    "category": "diger"
  },
  {
    "id": 846,
    "title": "Why people wait while they walking through precious time",
    "body": "Why people wait while they walking through precious time \nAnother day might be promising\nA breath may take time\nThe life passing on your soul \nThis stranger is full of stories which are not fine\n\nYou have to play the game by its rules\nGame never ends , tension bends\nCreates new ones with its magical tools\nEnd never comes , maybe it tends\n\nYou have to play the game by its rules\nGame never ends , tension bends\nCreates new ones with its magical tools\nEnd never comes , maybe it tends\n\nWhy people wait while they walking through precious time \nAnother day might be promising\nA breath may take time\nThe life passing on your soul \nThis stranger is full of stories which are not fine\n\nYou have to play the game by its rules\nGame never ends , tension bends\nCreates new ones with its magical tools\nEnd never comes , maybe it tends\n\nYou have to play the game by its rules\nGame never ends , tension bends\nCreates new ones with its magical tools\nEnd never comes , maybe it tends",
    "category": "diger"
  },
  {
    "id": 847,
    "title": "We are one we are full of expectations",
    "body": "We are one we are full of expectations\nSee what is summerizing hopeful sounds below\nFind something never gonna fail those seasons\nFeel when idea  comes to love\n\nKneel down in front of the beginning\nPleased tears , near fears go away\nInsides insider it is happening\nBe love when it shows you the way",
    "category": "diger"
  },
  {
    "id": 848,
    "title": "Oh , sun.",
    "body": "Oh , sun.\nIf you could see yourself in the mirror\nThat shine\nThat power\nThat glory\nThe victory\nWill be the end of our history\nUnfortunately\n\nOh , sun.\nIf someone could show the picture of yourself\nThat beauty\nThat loneliness\nThat duty\nWill be the end of your story\nFinally\n\nOh , sun.\nIf you could talk to somebody\nIf they could listen to\nWould you say that keyword to save the mystery\nThe maze\nThe last piece of puzzle\nThat unrequited love story\nYou may complete ,\nIf somebody could dare like me.\nWill be the end of our journey ,\nBurn us.\nReturn us to yourself.\n\nBu şiir Türkçe albümde İngilizce bir sürpriz — güneşe yazılmış bir mektup. Hem kozmos hem yalnızlık hem de son bir cesaret.\n\n───\n\n**Yapı:**\n\n**[Intro]**\n\n*(Solo akustik gitar)*\n\n**[Verse 1]**\n\nOh, sun.\nIf you could see yourself in the mirror\nThat shine, that power, that glory\nThe victory\nWill be the end of our history\nUnfortunately\n\n**[Verse 2]**\n\nOh, sun.\nIf someone could show the picture of yourself\nThat beauty, that loneliness, that duty\nWill be the end of your story\nFinally\n\n**[Chorus]**\n\nOh, sun.\nIf you could talk to somebody\nIf they could listen to\nWould you say that keyword to save the mystery\n\n**[Chorus]**\n\nThe maze, the last piece of puzzle\nThat unrequited love story\nYou may complete\nIf somebody could dare like me\n\n**[Outro]**\n\nWill be the end of our journey\nBurn us\nReturn us to yourself",
    "category": "diger"
  },
  {
    "id": 849,
    "title": "Its never acceptable for me to stay still",
    "body": "Its never acceptable for me to stay still\nI have to do it again and again some things\nI am the reason that I dont want to miss\nThe peace ?\n\nBetween us\nWe are zero , minues and plus\nPlease.",
    "category": "diger"
  },
  {
    "id": 850,
    "title": "You dont know what you are missing",
    "body": "You dont know what you are missing\nBecause you dont know why you are misssing\nTry to listen",
    "category": "diger"
  },
  {
    "id": 851,
    "title": "I have never ever felt this way before",
    "body": "I have never ever felt this way before\nMy heart was beatin nothing after all\nYour smile made me anxious\nYour eyes really precious for me\nI have never ever felt this way before\n\nLove seems so friendly\nDesires made me let be\nHappines feels only\nI have never ever felt this way before\n\nLong distances are numbers\nYour passion melts the sun\nCouse your loving hearh is so warm\nI have never ever felt this way before\n\nI have never ever felt this way before\nMy heart was beatin nothing after all\nYour smile made me anxious\nYour eyes really precious for me\nI have never ever felt this way before\n\nLove seems so friendly\nDesires made me let be\nHappines feels only\nI have never ever felt this way before\n\nLong distances are numbers\nYour passion melts the sun\nCouse your loving hearh is so warm\nI have never ever felt this way before",
    "category": "diger"
  },
  {
    "id": 852,
    "title": "We've got some names on",
    "body": "We've got some names on \nIn the name of our life zone\nIts a bit dangerous\nCause we are last humans\nIn only world includes us",
    "category": "diger"
  },
  {
    "id": 853,
    "title": "Kindly Reminder ;",
    "body": "Kindly Reminder ;\n\nTo fall asleep\nDiving in to deeps\nYou know how it feels\nRemind me the good days and memories\n\nWe need to go further\nWe need to be in peace\nHow ?\nDo you know how long I am dreaming for this\nI am begging you\nI am at the beginning of why it heals\n\nDear ,\n\nSincerely,",
    "category": "diger"
  },
  {
    "id": 854,
    "title": "Come and get me if you can",
    "body": "Come and get me if you can\nThere are signs in my head\nI dont know how you can handle this but I dont want my mother to have bad times.\n\nI will ask each of you about life, danger and zone\nOur faith in our heart may can eliminate ozon\nWhat do you want me to do \nA call to who ?\n\nI will ask each of you about life, danger and zone\nOur faith in our heart may can eliminate ozon\nWhat do you want me to do \nA call to who ?\n\nCome and get me if you can\nThere are signs in my head\nI dont know how you can handle this but I dont want my mother to have bad times.\n\nI will ask each of you about life, danger and zone\nOur faith in our heart may can eliminate ozon\nWhat do you want me to do \nA call to who ?\n\nI will ask each of you about life, danger and zone\nOur faith in our heart may can eliminate ozon\nWhat do you want me to do \nA call to who ?",
    "category": "diger"
  },
  {
    "id": 855,
    "title": "This time my fingers are not tipsy",
    "body": "This time my fingers are not tipsy\nMy excitement is happy\nThis time my language is not risky\nMy happiness is pure , not filthy\n\nLife excuses me , probably listened my prayers\nSurrounded around me , all around players\nTriers , tears\nThe taste of success is unexplainable\nMy hairs are windy",
    "category": "diger"
  },
  {
    "id": 856,
    "title": "I wonder how you feel when you get closer",
    "body": "I wonder how you feel when you get closer\nI mean \nHow a moment can be this long\nAnd getting longer\nI dont know how to feel\n\nI get lost in this  , please dont mind\nThis is not a goodbye \nThis is the sun rising\nÖIm so in to this\nAnd will love you more every second i get older\nAnd even when Im ill..",
    "category": "diger"
  },
  {
    "id": 857,
    "title": "Come and get me if yoı can",
    "body": "Come and get me if yoı can\nThere are signs in my head\nI dont know how you can handle this but I dont want mu mother to have band times.\n\nI will ask each of you about life, danger and zone\nOur faith in our heart may can eliminate ozon\nWhat do you want me to do \nA call to who ?",
    "category": "diger"
  },
  {
    "id": 858,
    "title": "Belki kuytu köşede kalmış bir sevabım vardır beni o azaptan kurtaracak",
    "body": "Belki kuytu köşede kalmış bir sevabım vardır beni o azaptan kurtaracak\nÖlüm , senden korkmuyorum\nBiliyorum ki düştüğüm deniz beni kucaklayacak",
    "category": "diger"
  },
  {
    "id": 859,
    "title": "Dünya bir sahil",
    "body": "Dünya bir sahil\nBense kumdan yatakta\nHerkeste aynı merak\nÇatlamasını bekliyor yumurtalarının\nCaretta caretta",
    "category": "diger"
  },
  {
    "id": 860,
    "title": "Seninle sonbaharda şarkılaşmak istiyorum",
    "body": "Seninle sonbaharda şarkılaşmak istiyorum\nGel kıyafetini değiştirelim yarım küremizin",
    "category": "diger"
  },
  {
    "id": 861,
    "title": "Orda biri var mı bilmiyorsun.",
    "body": "Orda biri var mı bilmiyorsun.\nİnanmıyorsun gözlerinin görmediklerine.\nHalbuki bir fark etsen yalnızlığının asaletini\nDeğişmiyorsun ölmedikçe.",
    "category": "diger"
  },
  {
    "id": 862,
    "title": "Bir kötü söz gibi bekliyordum gecelerde",
    "body": "Bir kötü söz gibi bekliyordum gecelerde\nBir lafına binbir yumruk",
    "category": "diger"
  },
  {
    "id": 863,
    "title": "Hayat eskisi gibi değil",
    "body": "Hayat eskisi gibi değil\nBu bildiğin dalgalı bir denizde seyir\nBiat et önümde eğil\nKarış kalabalığıma",
    "category": "diger"
  },
  {
    "id": 864,
    "title": "Hepimiz farklıyız",
    "body": "Hepimiz farklıyız\nAma bir bütünün vazgeçilmez önemde parçasıyız",
    "category": "diger"
  },
  {
    "id": 865,
    "title": "Karışıyor ortalık",
    "body": "Karışıyor ortalık\nYarışıyor kötülükler\nYapışıyor bataklık gibi sezinler\nAlışıyor insanlık",
    "category": "diger"
  },
  {
    "id": 866,
    "title": "Zamanı düş hesaptan al sana sonsuz",
    "body": "Zamanı düş hesaptan al sana sonsuz\nHer şey senin\nAma nereye varabilirsin yolsuz ?\nTamamından bir eksik her geçen an biraz onsuz",
    "category": "diger"
  },
  {
    "id": 867,
    "title": "Bilemiyorum belki de gerçektir bu masal",
    "body": "Bilemiyorum belki de gerçektir bu masal\nSonu da mutlu bitecektir",
    "category": "diger"
  },
  {
    "id": 868,
    "title": "Koskoca evren",
    "body": "Koskoca evren\nMilyarlarca arasından neden ben ?\nDiye soralı yıllar oldu \nGeçmiş oldu önceden",
    "category": "diger"
  },
  {
    "id": 869,
    "title": "Ateşe o kadar uzun baktım ki dün",
    "body": "Ateşe o kadar uzun baktım ki dün\nBugünüm öylesine karanlık\nGözlerim öylesine soğuk\nİlüzyon öylesine gerçek",
    "category": "diger"
  },
  {
    "id": 870,
    "title": "Serin bir sessizlik , incecik bir uğultu",
    "body": "Serin bir sessizlik , incecik bir uğultu\nNe kadar dinlesende az gelirdi yoruldu",
    "category": "diger"
  },
  {
    "id": 871,
    "title": "Kelimeler diyorum.. kelimeler yetiyor m",
    "body": "Kelimeler diyorum.. kelimeler yetiyor m",
    "category": "diger"
  },
  {
    "id": 872,
    "title": "Geceler biliyor",
    "body": "Geceler biliyor\nGönlümden geçenleri aklınız almıyor",
    "category": "diger"
  },
  {
    "id": 873,
    "title": "Bütün şarkılar",
    "body": "Bütün şarkılar\nOlması gerektikleri gibi varlar\nNe bir zaman ileri ne bir an geri",
    "category": "diger"
  },
  {
    "id": 874,
    "title": "Yağmur yağmıyor bugün",
    "body": "Yağmur yağmıyor bugün\nRuhum kurak bir çölden farksız\nŞu Issız lambaların üstüne düşen damlalar nerde",
    "category": "diger"
  },
  {
    "id": 875,
    "title": "Benim için üzülme",
    "body": "Benim için üzülme\nBen zaten kendim için yeterince üzülüyorum",
    "category": "diger"
  },
  {
    "id": 876,
    "title": "Karşıma çıkan her şarkıya en az 2 şans veriyorum",
    "body": "Karşıma çıkan her şarkıya en az 2 şans veriyorum\nBelki çıkarır beni bu manasız diyarlardan\nKelimeleri özenle seçmişler mi bir bakıyorum\nMüsade alınmış mı rüyalardan\n\nSonra sessizliğe bakıyorum sensizlik gibi\nHaberdar galiba olacaklardan",
    "category": "diger"
  },
  {
    "id": 877,
    "title": "Bir yalanım vardı hakikatliğine çok alıştığım",
    "body": "Bir yalanım vardı hakikatliğine çok alıştığım\nOnunla barışmıştım\nYokluğundan bin pişmanım",
    "category": "diger"
  },
  {
    "id": 878,
    "title": "Düşünmeye vakit bulabildiysem sustum",
    "body": "Düşünmeye vakit bulabildiysem sustum",
    "category": "diger"
  },
  {
    "id": 879,
    "title": "Gerçeğinden ayırt edilemeyen bir rüya",
    "body": "Gerçeğinden ayırt edilemeyen bir rüya\nVe seni ele geçirip zihnini zapt etmiş bir his\nKimse inanmasın bırak dönsün mü dünya\nYoksa savaşlarla mı bezenilmiş bura bilakis\nKoca evren minicik bir bilye\nVe beynimin ortasındaki iyi huylu kist",
    "category": "diger"
  },
  {
    "id": 880,
    "title": "Son bahar bu",
    "body": "Son bahar bu\nNe hikmetse sonbahar",
    "category": "diger"
  },
  {
    "id": 881,
    "title": "Hayal gücünün gittiği yere kadar özgürsün.",
    "body": "Hayal gücünün gittiği yere kadar özgürsün.",
    "category": "diger"
  },
  {
    "id": 882,
    "title": "Yüz yılın refahati",
    "body": "Yüz yılın refahati\nBir o kadar felaeti\nİyi niyeti yok bu adının\nÖlüp ölüp duracağız adamım.",
    "category": "diger"
  },
  {
    "id": 883,
    "title": "Vazgeçmekle pes etmek aynı şey mi ?",
    "body": "Vazgeçmekle pes etmek aynı şey mi ?\nMesela yıldızlara dokunamadan ölmemek\nYa da gezegenler arasında seyahat etmek\nGüneşe dokunmayı ertelemek mi hayat\nKendi kendime kaldığımdaki raks",
    "category": "diger"
  },
  {
    "id": 884,
    "title": "Ben uzun yollara alışığım",
    "body": "Ben uzun yollara alışığım\nOlacaklarla barışığım\nKendi içimde karışığım\nBir duvarda sarmaşığın",
    "category": "diger"
  },
  {
    "id": 885,
    "title": "Karşıma çık",
    "body": "Karşıma çık\nKonuşalım açık açık ve kapatalım bu mevzuyu\nSen sessizliğine dön\nBen gürültüme özen göstermeye devam edeyim",
    "category": "diger"
  },
  {
    "id": 886,
    "title": "Karanlığım pek aydınlık benim",
    "body": "Karanlığım pek aydınlık benim\nGölgelerim güneşli\nLimanlarım sakin\nTaşı taş",
    "category": "diger"
  },
  {
    "id": 887,
    "title": "Merhaba bardağın boş kısmı",
    "body": "Merhaba bardağın boş kısmı\nMüsadenle sana kendimden katabilir miyim ?",
    "category": "diger"
  },
  {
    "id": 888,
    "title": "Bir rüyadan uyanmak gibi mi olacak uykuya dalmak",
    "body": "Bir rüyadan uyanmak gibi mi olacak uykuya dalmak",
    "category": "diger"
  },
  {
    "id": 889,
    "title": "Bir yanda manasız savaşlar",
    "body": "Bir yanda manasız savaşlar\nDiğer yanda faydasız ilaçlar",
    "category": "diger"
  },
  {
    "id": 890,
    "title": "Taa şu kadarcık uzaktasın",
    "body": "Taa şu kadarcık uzaktasın\nSen benim koyduğum en son noktasın\nNe fazlasın ne noksansın",
    "category": "diger"
  },
  {
    "id": 891,
    "title": "Evet...",
    "body": "Evet...\nBenim de birikti sana söylemek istediklerim\nHayır...\nSenin de",
    "category": "diger"
  },
  {
    "id": 892,
    "title": "Ben bu resmi daha önce çizmiştim",
    "body": "Ben bu resmi daha önce çizmiştim\nBen buraya daha önce gelmiştim\nBen defalarca bu şiiri yazmışım da\nNe sen dönüp bakmışsın\nNe ben sana bu hikayeden bahsetmişim",
    "category": "diger"
  },
  {
    "id": 893,
    "title": "Bunca dert ve tasa varken alemde",
    "body": "Bunca dert ve tasa varken alemde\nGelip beni buldun mabedimin tam orta yerinde",
    "category": "diger"
  },
  {
    "id": 894,
    "title": "Aslında karanlıktı her yer",
    "body": "Aslında karanlıktı her yer\nBen Birdim siz bin bir oldunuz\nBana karanlıklar dap dar\nIşığı görünce hepiniz yok oldunuz",
    "category": "diger"
  },
  {
    "id": 895,
    "title": "Nasıl farkına varamıyorsun olanların aklım almıyor",
    "body": "Nasıl farkına varamıyorsun olanların aklım almıyor\nKendini seyrediyorsun gibi bir mahşer",
    "category": "diger"
  },
  {
    "id": 896,
    "title": "Sen imren ben hayatımın çaresine bakarım",
    "body": "Sen imren ben hayatımın çaresine bakarım\nSeninle ben saatlerin zaafından kaçarım",
    "category": "diger"
  },
  {
    "id": 897,
    "title": "Yıllar sonra , geç kalmış bir müjdenin verdiği Ahmak bir gülümseme…",
    "body": "Yıllar sonra , geç kalmış bir müjdenin verdiği Ahmak bir gülümseme bu yüzümdeki\nGelmese daha mı iyiydi\nYoksa bu bir işaret mi?",
    "category": "diger"
  },
  {
    "id": 898,
    "title": "Belli ki bu gerçekleşecek bir gün",
    "body": "Belli ki bu gerçekleşecek bir gün\nBelki de bugün",
    "category": "diger"
  },
  {
    "id": 899,
    "title": "Güzel günler nerdeler",
    "body": "Güzel günler nerdeler \nNeden ardına kadar açıkken perdeler ve lambalar karanlık bu oda ?\nYoruldu mu eksik kalan şeyler\nSabrı taşmış , affetmiş sonra.",
    "category": "diger"
  },
  {
    "id": 900,
    "title": "Yol verir insanoğlu birbirine belki geç der",
    "body": "Yol verir insanoğlu birbirine belki geç der\nBelki git der\nBelki kal der",
    "category": "diger"
  },
  {
    "id": 901,
    "title": "Milyarlarca yaşındasın",
    "body": "Milyarlarca yaşındasın\nBelki henüz en başındasın\nBelki kendi yasındasın",
    "category": "diger"
  },
  {
    "id": 902,
    "title": "Boşa kürek çekme boşa",
    "body": "Boşa kürek çekme boşa\nHoşa gitmez bu dünya\nAklını başına devşir\nHani yanına almıştınya",
    "category": "diger"
  },
  {
    "id": 903,
    "title": "Ruhumun zihnimi takip etmesinden mi bilmem",
    "body": "Ruhumun zihnimi takip etmesinden mi bilmem\nHerşey bana fazlasıyla tanıdık geliyor\nAcaba bundan mı kaynaklanıyor bazı şeyleri önceden bilmem ?",
    "category": "diger"
  },
  {
    "id": 904,
    "title": "Gözünün önündeki gerçekler seni aldatan.",
    "body": "Gözünün önündeki gerçekler seni aldatan.\nAnanı ağlatan...\nSözünün ardındaki gizler seni sana anlatırken yerin  dibine batıran.",
    "category": "diger"
  },
  {
    "id": 905,
    "title": "Görüyor musun sende görmüyorsun olan biteni",
    "body": "Görüyor musun sende görmüyorsun olan biteni\nBir daha , bir kaç kez daha",
    "category": "diger"
  },
  {
    "id": 906,
    "title": "Ufka bak",
    "body": "Ufka bak\nŞiir yaz diyor bulutlar\nYolculuğa çık içine\nDuaların kabul olmamış\nBelki başka bir biçimde",
    "category": "diger"
  },
  {
    "id": 907,
    "title": "O zaman her alan için 100 karaktere sıkıştırıyorum:",
    "body": "O zaman her alan için 100 karaktere sıkıştırıyorum:\n\n───\n\n**Step 3 — Outfit and style:**\n\n`Dark hoodie, short beard, cinematic indie style, desaturated, natural subtle movements, realistic.`\n\n───\n\n**Step 4 — Locations and mood:**\n\n`Frozen city crowd, frozen cafe, frozen subway. Only main character moves. Eerie, surreal, melancholic, film grain.`\n\n───\n\n**Step 5 — Storyline:**\n\n`Man walks through a world frozen in time. Invisible to all. Alone in a crowd. At the end, he stops and stares into camera.`\n\n───\n\nGir bakalım! 🎬\n\n`One man moves through a frozen world. Invisible. Alone. Finally stops. Stares into camera. Then nothing.`\n\n97 karakter. 🎬",
    "category": "diger"
  },
  {
    "id": 908,
    "title": "Gözlerini kapat seni özlüyorum orada",
    "body": "Gözlerini kapat seni özlüyorum orada\nYüreğimi yüreğinde hisset\nİşte tam orada pes de\nVe benimle gökyüzümüzde dans et",
    "category": "diger"
  },
  {
    "id": 909,
    "title": "Herkes neden hüzünlü aşk şarkılarında dans ediyor ?",
    "body": "Herkes neden hüzünlü aşk şarkılarında dans ediyor ?\nDefalarca dinledim anlam veremiyor aklım ermiyor",
    "category": "diger"
  },
  {
    "id": 910,
    "title": "Yarın oldu dünler",
    "body": "Yarın oldu dünler\nİftira yalan\nBaşa dönmesi nerden baksan iki gün sürer\nZamansızsa değer\nDengesizce olduğu yerde  döner",
    "category": "diger"
  },
  {
    "id": 911,
    "title": "İnsanları utanmaya zorlamak",
    "body": "İnsanları utanmaya zorlamak",
    "category": "diger"
  },
  {
    "id": 912,
    "title": "Gerçekten bilmek istiyor musun başına gelecekleri ?",
    "body": "Gerçekten bilmek istiyor musun başına gelecekleri ?\nGüneşe mi mercek yoksa gerçek rüyaların her gece\nBir yerlerde birileri ölüyorsa hiç uğruna\nDönüyorsa dursun Dünya",
    "category": "diger"
  },
  {
    "id": 913,
    "title": "Süre doldu dedi bana vakit tamam",
    "body": "Süre doldu dedi bana vakit tamam",
    "category": "diger"
  },
  {
    "id": 914,
    "title": "Var mı yok olan ?",
    "body": "Var mı yok olan ?\nYok mu var olan ?\nHala nasıl kimse çıkmadı ortaya\nBağırmak için uluya ortaya",
    "category": "diger"
  },
  {
    "id": 915,
    "title": "Ne kadar çok benziyor seninle günahlarımız",
    "body": "Ne kadar çok benziyor seninle günahlarımız\nSen bana karşı koyuyorsun\nBen sana deliler gibi aşık oluyorum kaygısız",
    "category": "diger"
  },
  {
    "id": 916,
    "title": "O salıncak",
    "body": "O salıncak\nO sanılcak",
    "category": "diger"
  },
  {
    "id": 917,
    "title": "Gerçeği farkediyorum sanki",
    "body": "Gerçeği farkediyorum sanki\nFarkı farkediyorum\nDoğru zannediyorum\n\nHerşeye baş kaldırıyorum belki\nBaştan başlıyorum\nYanlış farzediyorum",
    "category": "diger"
  },
  {
    "id": 918,
    "title": "Sen herşeyin doğrusunu yaparken karşılaştığın muamele buysa yanlış…",
    "body": "Sen herşeyin doğrusunu yaparken karşılaştığın muamele buysa yanlış sende değil onda demektir. Yanlış yanlış olabilir ancak yanlışı düzeltmek erdemli olmayı gerektirir. Erdemi olmayan susar",
    "category": "diger"
  },
  {
    "id": 919,
    "title": "Düşüncelerimi dinledim önce",
    "body": "Düşüncelerimi dinledim önce\nHerşey heryerdeymiş öyle dediler",
    "category": "diger"
  },
  {
    "id": 920,
    "title": "Sen bana yakıştırma",
    "body": "Sen bana yakıştırma\nBen alıştığın yerde dururum\nGel bunu karıştırma\nSandığından beter durum",
    "category": "diger"
  },
  {
    "id": 921,
    "title": "Senden gelecek bir habere sakladım bütün sevinçlerimi",
    "body": "Senden gelecek bir habere sakladım bütün sevinçlerimi\nOlasılıklar henüz değişmedi mi ?\nSorgulamadan konuşalım , karşılıklı karışalım\nBu bulut gökyüzüne hala alışmadı mı ?",
    "category": "diger"
  },
  {
    "id": 922,
    "title": "Kolay kolay pes etmeyen bir sen gibi çetin",
    "body": "Kolay kolay pes etmeyen bir sen gibi çetin\nSana zor",
    "category": "diger"
  },
  {
    "id": 923,
    "title": "Şarkılar yeniden dinlenir , kulakların kanasın",
    "body": "Şarkılar yeniden dinlenir , kulakların kanasın\n\nYeniden şiirler yazarım sen onları sana sanarsın\n\nYüzümüm asıklığıyla doldurdum ceplerimi\n\nAl birazını aklını karıştırırsın akşam saatlerinde",
    "category": "diger"
  },
  {
    "id": 924,
    "title": "Nerden geldik nereye gidiyoruz bu nasıl bir tesadüf",
    "body": "Nerden geldik nereye gidiyoruz bu nasıl bir tesadüf",
    "category": "diger"
  },
  {
    "id": 925,
    "title": "Sana müstahak olsun insan",
    "body": "Sana müstahak olsun insan\nNeleri kaçırdığını bir bilsen\nMilyarlarcasından tek bir lisan\nNe anlamlar içeriyor derinlerine insen",
    "category": "diger"
  },
  {
    "id": 926,
    "title": "Bugün yazmıyorum",
    "body": "Bugün yazmıyorum\nKanıyorum kelimelerime\nYanıyor canım\nVarsaymıyorum ihtimalleri hevesle\nNet oluyorum olabildiğine\nKağıtlara susuyorum.\nÖzlesinler diye\nMürekkebi.",
    "category": "diger"
  },
  {
    "id": 927,
    "title": "Aklına geleni dökme hemen diline ,düşün ki yanılmayasın",
    "body": "Aklına geleni dökme hemen diline ,düşün ki yanılmayasın\nÜşü ki yanmayasın",
    "category": "diger"
  },
  {
    "id": 928,
    "title": "Gözlerimin içine bak",
    "body": "Gözlerimin içine bak\nNefret sana neler anlatıyor",
    "category": "diger"
  },
  {
    "id": 929,
    "title": "Kabul etmek gidip dönmemeyi sessizce",
    "body": "Kabul etmek gidip dönmemeyi sessizce\nHer ile başlayan her şeyi geride bırakmak istiyorum geride\nGizlim saklım yok",
    "category": "diger"
  },
  {
    "id": 930,
    "title": "Göz yaşlarını sil sonsuzluk",
    "body": "Göz yaşlarını sil sonsuzluk\nArtık canını acıtmıyor sonsuzluk\nDizlerini titretmiyor\nRuhunu acıtmıyor",
    "category": "diger"
  },
  {
    "id": 931,
    "title": "Bana bir bak ben dahilim üç dört adım ötede",
    "body": "Bana bir bak ben dahilim üç dört adım ötede",
    "category": "diger"
  },
  {
    "id": 932,
    "title": "Biliyorsun sende o boşluk hissi ne meret bişey",
    "body": "Biliyorsun sende o boşluk hissi ne meret bişey\nHer gece başını yastığa koyduğunda ne kadar da yalnızsın\nGece neden karanlık\nKapalı tüm kapılar",
    "category": "diger"
  },
  {
    "id": 933,
    "title": "Ömür dediğin bir kaç dünden ibaret",
    "body": "Ömür dediğin bir kaç dünden ibaret\nYarın bana çok zor bir bilmece\nGönlünün gönlüne bir küçük an sığar elbet\nYoksa neden dua eder insan uyumadan her gece",
    "category": "diger"
  },
  {
    "id": 934,
    "title": "Diğerlerini bilmem",
    "body": "Diğerlerini bilmem\nBen bu yolda ölmeye varım\nYaram derin kimseye değmem",
    "category": "diger"
  },
  {
    "id": 935,
    "title": "Uzakta",
    "body": "Uzakta\nÇok uzakta bir neyse",
    "category": "diger"
  },
  {
    "id": 936,
    "title": "Ben en lazım kelimeleri seçtim lüzumun hazzı için",
    "body": "Ben en lazım kelimeleri seçtim lüzumun hazzı için\nSen anlamadın beni\nBen anlatamayan oldum kendini\nHalbuki ne kadar sadeydi cümlelerim\nYoktu benzeri\n\n2",
    "category": "diger"
  },
  {
    "id": 937,
    "title": "Sana kalbimin en ücra köşesinden bir selam getirdim",
    "body": "Sana kalbimin en ücra köşesinden bir selam getirdim\nEğer kabul edeceğini bilsem\nEğer kabul edeceğini bilsen\nSeni o selamın geldiği yere görürür cennetin nasıl bir yer olduğunu görmeni isterdim.",
    "category": "diger"
  },
  {
    "id": 938,
    "title": "Gözümün önünde duruyor ama henüz dokunmam yasak bu yasak elmaya",
    "body": "Gözümün önünde duruyor ama henüz dokunmam yasak bu yasak elmaya",
    "category": "diger"
  },
  {
    "id": 939,
    "title": "Gün doğmuş yine birkaç saat önce",
    "body": "Gün doğmuş yine birkaç saat önce\nYetişemedim sana Güneş hep ama aklımdasın",
    "category": "diger"
  },
  {
    "id": 940,
    "title": "Bir haberdi yüreğine düşen ateş",
    "body": "Bir haberdi yüreğine düşen ateş\nFayda etmeyen gözyaşları\nBir an önce başlasın telaş\nMüsade etmeyen o Tanrı affetsin\nBen meseleyi pek bilmem ama\nBu öyle bir intikam ki\nAllah kahretsin.",
    "category": "diger"
  },
  {
    "id": 941,
    "title": "Belki bu savaş çok uzaklarda",
    "body": "Belki bu savaş çok uzaklarda\nBelki içimizde en derinimizde\nBelki cevabı tuzaklarda\nBelki apaçık ellerimizde",
    "category": "diger"
  },
  {
    "id": 942,
    "title": "Gidiyorum uzaklara",
    "body": "Gidiyorum uzaklara\nAslında orası buradan daha yakın sana\nBeni dinlersin , kıymetimi özlersin\nBelki delirirsin de vazgeç gel deme\nGöğsüne bas boşlukta hisli\nDünyam devrilsin",
    "category": "diger"
  },
  {
    "id": 943,
    "title": "Birkaç gün kalmış olsa mesela",
    "body": "Birkaç gün kalmış olsa mesela\nMesela gökyüzünde bir kapı aralansa\nGönlüm uğrunuzda paralansa\nUmursar mıydınız ?",
    "category": "diger"
  },
  {
    "id": 944,
    "title": "Çok büyütüyorum",
    "body": "Çok büyütüyorum",
    "category": "diger"
  },
  {
    "id": 945,
    "title": "Güzel günler geride kaldı Tió",
    "body": "Güzel günler geride kaldı Tió\nİnsan artık tükettiğini saymıyor\nBir ben bir sen bir o\nDünya bizden fazlasını almıyor",
    "category": "diger"
  },
  {
    "id": 946,
    "title": "Sana anlatmaya çalıştım , sen herkesten farklısın",
    "body": "Sana anlatmaya çalıştım , sen herkesten farklısın\nBir çok konuda olduğu gibi yine sen haklısın",
    "category": "diger"
  },
  {
    "id": 947,
    "title": "Geliyorsun çok uzaklardan",
    "body": "Geliyorsun çok uzaklardan\nYüreğim elimde bekliyorum seni\nHayalinde boğulduğum olacaklardan\nBiz sorumluyuz",
    "category": "diger"
  },
  {
    "id": 948,
    "title": "Bana bir ben gerekmiş yalnız başına , yalnız başıma",
    "body": "Bana bir ben gerekmiş yalnız başına , yalnız başıma\nSeni bulanadekmiş ayrılık\nAğır ağır gözyaşları kaç yaşında ?",
    "category": "diger"
  },
  {
    "id": 949,
    "title": "Bir gece uyanırsan uykundan beni ansızın rüyanda tanıyıp",
    "body": "Bir gece uyanırsan uykundan beni ansızın rüyanda tanıyıp",
    "category": "diger"
  },
  {
    "id": 950,
    "title": "Sesin kesildi , yüzün silindi , kokun gitti",
    "body": "Sesin kesildi , yüzün silindi , kokun gitti\nBelki bir ömür boyu aklıma geleceksin o hayat hevesinin sona ermesinin hatrıyla\nZoruma gidiyor",
    "category": "diger"
  },
  {
    "id": 951,
    "title": "Eşit aralıklar",
    "body": "Eşit aralıklar\nSen bana bir telefon uzaklıktasın\nBen sana kainatın öbür ucunda.",
    "category": "diger"
  },
  {
    "id": 952,
    "title": "Kendimle savaştayım",
    "body": "Kendimle savaştayım\nKazanırsam kaybedeceğin",
    "category": "diger"
  },
  {
    "id": 953,
    "title": "Sana birazdan gelip sarılsam ?",
    "body": "Sana birazdan gelip sarılsam ?\nGözyaşların omzuma dökülür mü bu gece ?\nYıllar seni de benim kadar yordu mu\nHangisi cümle hangisi hece",
    "category": "diger"
  },
  {
    "id": 954,
    "title": "Varlığı ispatlanamayan bir olgunun yokluğu ispatlanabilinemez",
    "body": "Varlığı ispatlanamayan bir olgunun yokluğu ispatlanabilinemez",
    "category": "diger"
  },
  {
    "id": 955,
    "title": "Kalemlerden ve dillerden dökülen en üzücü şey keşkedir.",
    "body": "Kalemlerden ve dillerden dökülen en üzücü şey keşkedir.\nEr yada geç söylenir",
    "category": "diger"
  },
  {
    "id": 956,
    "title": "Dün gece bir küçük kuşla tanıştım kanadı kırık",
    "body": "Dün gece bir küçük kuşla tanıştım kanadı kırık\nHava ise soğuk ve karanlıktı\nSanki düşlerimi üşüten bir farkındalık\nÖylesine değildi tanışmamız o da farkında",
    "category": "diger"
  },
  {
    "id": 957,
    "title": "Ben istediğim kadar şiir yazayım küfredeyim bu düzene",
    "body": "Ben istediğim kadar şiir yazayım küfredeyim bu düzene\nSen sana hak kılınmış sandığın canlara bomba at",
    "category": "diger"
  },
  {
    "id": 958,
    "title": "Uğruna ölmek de var öldürmekte",
    "body": "Uğruna ölmek de var öldürmekte\nDünya dönerken dönekleri döndürmekte",
    "category": "diger"
  },
  {
    "id": 959,
    "title": "Şekeri elinden alıp şu çocuğu üzdüler",
    "body": "Şekeri elinden alıp şu çocuğu üzdüler\nGöze bakmayan bi bakış\nSesi acı bir alkış",
    "category": "diger"
  },
  {
    "id": 960,
    "title": "Neden bütün şarkılar aşklara ?",
    "body": "Neden bütün şarkılar aşklara ?\nNeden bütün kadınlar başkalar ?\nSanki başını vurur gibi taşlara",
    "category": "diger"
  },
  {
    "id": 961,
    "title": "Dertlerinin sana ait olduğunu",
    "body": "Dertlerinin sana ait olduğunu\nOnlarla batan güneşin yine onlarla doğduğunu\nSeni özlediğimi sakın unutma\n\nAma bana da hatırlatma.",
    "category": "diger"
  },
  {
    "id": 962,
    "title": "Gecelerin koynuna sokul , uyutmaz düşünceler",
    "body": "Gecelerin koynuna sokul , uyutmaz düşünceler\nSiyahlar içinde hatıralar\nBelkiler , iyikiler",
    "category": "diger"
  },
  {
    "id": 963,
    "title": "Ayaklarımın altında ne var bileklerimin üstündeki ?",
    "body": "Ayaklarımın altında ne var bileklerimin üstündeki ?\nKoşamam , kaçamam senden bilirim",
    "category": "diger"
  },
  {
    "id": 964,
    "title": "Bir umudum var , elimde",
    "body": "Bir umudum var , elimde",
    "category": "diger"
  },
  {
    "id": 965,
    "title": "Nedense kelimeleri seçesim var",
    "body": "Nedense kelimeleri seçesim var\nNeden bilmiyorum içime bir ateş düştü\nYalvarıyorum barışın ey insanoğlu\nBugün dündü.\n\nSana seni anlatan kim varsa güldü",
    "category": "diger"
  },
  {
    "id": 966,
    "title": "Neden tanıdık diye merak ederdim şarkılar",
    "body": "Neden tanıdık diye merak ederdim şarkılar\nÇünkü bazıları diğerlerinden farklılar\nDaha fazla tatlılar yüreğime\nAma kafama takıldılar",
    "category": "diger"
  },
  {
    "id": 967,
    "title": "Sen sormadan nasıl olduğumu bilmeyen o siyah, derin , uçsuz bucaksız…",
    "body": "Sen sormadan nasıl olduğumu bilmeyen o siyah, derin , uçsuz bucaksız bir karanlık\n\nSen sormadan söyleyeyim nasıl olduğumu...\nBu izah artık apaçık bulanık ve dağınık",
    "category": "diger"
  },
  {
    "id": 968,
    "title": "Ne de olsa yalnızım en nihayetinde",
    "body": "Ne de olsa yalnızım en nihayetinde\nAçık denizde yüzerken\nAçık denize düşerken\nAçıklarken denizi kendime\nYalnızım düşüncelerimle üşürken",
    "category": "diger"
  },
  {
    "id": 969,
    "title": "Ben bu bedene sahibim",
    "body": "Ben bu bedene sahibim\nBedendeki aklım aklım\nBen herkesten haricim\nSahi olan baki hakkım",
    "category": "diger"
  },
  {
    "id": 970,
    "title": "Cumartesi...",
    "body": "Cumartesi...\n\nPazar .",
    "category": "diger"
  },
  {
    "id": 971,
    "title": "Baksana kaç yıl olmuş ruhum yükselmeye başlayalı",
    "body": "Baksana kaç yıl olmuş ruhum yükselmeye başlayalı\nBaşımı göğsüne koyup ağlamayalı\nBuna nasıl dayanmalı\nNasıl uyanmalı",
    "category": "diger"
  },
  {
    "id": 972,
    "title": "Alın götürün beni buradan",
    "body": "Alın götürün beni buradan\nKimsenin görmediği herkesin bildiği bir yere koyun\nO ki sana gelecek geçmişin vaad ettiği son baş komutan\nO ki akıllara ziyan tehlikeli bir oyun",
    "category": "diger"
  },
  {
    "id": 973,
    "title": "Yarın diyebilir misin düne ?",
    "body": "Yarın diyebilir misin düne ?\nUyanabilir misin evelsi güne ?\nArayabilir misin döne döne ?\nBulabilir misin seni ?",
    "category": "diger"
  },
  {
    "id": 974,
    "title": "Gel otur karşıma",
    "body": "Gel otur karşıma\nSana bir şeyler anlatacağım",
    "category": "diger"
  },
  {
    "id": 975,
    "title": "Yeniden başlamak mümkün mü başka ?",
    "body": "Yeniden başlamak mümkün mü başka ?",
    "category": "diger"
  },
  {
    "id": 976,
    "title": "Nereden geldiğimiz uçsuz bucaksız bir belirsizlik",
    "body": "Nereden geldiğimiz uçsuz bucaksız bir belirsizlik\nDünya eşi benzeri olmayan bir rezillikmiş\nSığamıyorum kabıma\n\nNereye gidiyoruz bu anlamısız geçimsizlikle\nBu aralar sevimsizlik ve seçimsizlikten\nDoğamıyorum yarına",
    "category": "diger"
  },
  {
    "id": 977,
    "title": "Korkma , sadece karanlıktasın.",
    "body": "Korkma , sadece karanlıktasın.\nGüven , gözlerini kapalı tutmak zorundasın.",
    "category": "diger"
  },
  {
    "id": 978,
    "title": "Hayatın tadını alabiliyor musun dilinin ucundaki kelimelerden ?",
    "body": "Hayatın tadını alabiliyor musun dilinin ucundaki kelimelerden ?\nYıldızlar güneşler gök kuşakları çiziyor musun gökyüzünde bulutlara arkadaş ?",
    "category": "diger"
  },
  {
    "id": 979,
    "title": "Arkadaş kelimeler",
    "body": "Arkadaş kelimeler\nCehennem mazoşiste cennet",
    "category": "diger"
  },
  {
    "id": 980,
    "title": "İçimde bir coşku büyüyor",
    "body": "İçimde bir coşku büyüyor\nTutamıyorum zamanı\nYüz çevirdim rüzgara\nGözyaşlarımı tutamıyorum",
    "category": "diger"
  },
  {
    "id": 981,
    "title": "Beynimdeki hücreler bana yalvarıyor önce beni söyle önce beni söyle…",
    "body": "Beynimdeki hücreler bana yalvarıyor önce beni söyle önce beni söyle diye\n\nBütün bu acele niye ?",
    "category": "diger"
  },
  {
    "id": 982,
    "title": "Senin hayal ettiğinden de büyük burası",
    "body": "Senin hayal ettiğinden de büyük burası\nSonsuz geniş\nVar olduğun gibi yokluğun da olası",
    "category": "diger"
  },
  {
    "id": 983,
    "title": "Düşlesene bir daha uyuyamadığını",
    "body": "Düşlesene bir daha uyuyamadığını\nZifiri bir aydınlık",
    "category": "diger"
  },
  {
    "id": 984,
    "title": "Donuk bir yüz ifadesi",
    "body": "Donuk bir yüz ifadesi\nMilyarlarcası ve sadece bir tanesi \nSırtında pelerin ve başında haresi\nGeceleri gündüzün , çaresizlerin çaresi.\n\nYine gelse yine olur aynısı",
    "category": "diger"
  },
  {
    "id": 985,
    "title": "Zaman mı geçiyor ?",
    "body": "Zaman mı geçiyor ?\nZaman mı geçiyor ???\nDün gece daha demindi\nYarın bugünün dün olacağından emindi hani ?",
    "category": "diger"
  },
  {
    "id": 986,
    "title": "Ben varım",
    "body": "Ben varım\nO kadar yarım ki hikayem kendime darım",
    "category": "diger"
  },
  {
    "id": 987,
    "title": "Bak şu gökyüzü ne kadar büyük",
    "body": "Bak şu gökyüzü ne kadar büyük\nSular ne kadar şeffaf\nVe ne kadar gerçek ölüm\nTakma kafana bu hayat oldukça kısa\nİnsan insana sarraf\nVe bu son bölüm",
    "category": "diger"
  },
  {
    "id": 988,
    "title": "Bu bir arş enginlerden yükselen",
    "body": "Bu bir arş enginlerden yükselen\nBu bir barış çubuğu elden ele verilen\nKarış karış her zerresi toprağım",
    "category": "diger"
  },
  {
    "id": 989,
    "title": "Gözlerini açsan da karanlık",
    "body": "Gözlerini açsan da karanlık\nKin sarmış her bir yanı\nBu bir savaş olsa da seviş\nTamam mı ?",
    "category": "diger"
  },
  {
    "id": 990,
    "title": "Eyvah !",
    "body": "Eyvah !\n\nGönlüm sönmüş.\nBu yeşil çayır çimen yanmış küle dönmüş.\nÖylesine derin küsmüş ki aşka\nYanıbaşında duran şevkate arkasını dönmüş",
    "category": "diger"
  },
  {
    "id": 991,
    "title": "Gece çöksün mü senin de üzerine ?",
    "body": "Gece çöksün mü senin de üzerine ?\nSöyle , bu yükü kaldırabilir misin ?\nÖyle , bir de yağmur yağarsa sağanak\nYakınsa zifiri karanlık\nYada en korktuğun şimşeklere bağırıp",
    "category": "diger"
  },
  {
    "id": 992,
    "title": "Eyvah !",
    "body": "Eyvah !\nYağıyor yine başı boş kelimeler \nHer biri ayrı ayrı panik",
    "category": "diger"
  },
  {
    "id": 993,
    "title": "Bir kelime ile kainatı hayal ettiriyorsa hayat",
    "body": "Bir kelime ile kainatı hayal ettiriyorsa hayat\nSon bir cümle ile de hayatını bitirebilir zaman\nBelki yapayalnız bir noktalama işaretisin fakat\nBir sonrakine ön bir öncekine arka olmak olay",
    "category": "diger"
  },
  {
    "id": 994,
    "title": "Gidiyorlar birer birer uzak diyarlara",
    "body": "Gidiyorlar birer birer uzak diyarlara\nBurdan uğurladım sizi , karşılayan var mı orda",
    "category": "diger"
  },
  {
    "id": 995,
    "title": "Karşımda durmasını bilene",
    "body": "Karşımda durmasını bilene\nGökyüzünde Güneşim yeryüzünde Kan !\nYarınlar kaybettiğimiz yakınlarınız kadar",
    "category": "diger"
  },
  {
    "id": 996,
    "title": "Ben mi çok büyütüyorum yoksa her şey çok mu kolay ?",
    "body": "Ben mi çok büyütüyorum yoksa her şey çok mu kolay ?\nAnlaşılması güç bir olay",
    "category": "diger"
  },
  {
    "id": 997,
    "title": "Ben mi çok kuruyorum",
    "body": "Ben mi çok kuruyorum\nYoksa siz hakikaten ölmemi mi bekliyorsunuz göz göre göre\nTakımı kuruyorum",
    "category": "diger"
  },
  {
    "id": 998,
    "title": "Hayal kurma",
    "body": "Hayal kurma\nKarşımda dimdik durma\nGünah işleme\nSoru sorma",
    "category": "diger"
  },
  {
    "id": 999,
    "title": "Koşmak mı istiyorsun ?",
    "body": "Koşmak mı istiyorsun ?\nUçmak mı ?\nKaçmak mı istiyorsun kendinden ?\nÖnce dur",
    "category": "diger"
  },
  {
    "id": 1000,
    "title": "Hadi bir gayret tutalım düşenlerin onurundan",
    "body": "Hadi bir gayret tutalım düşenlerin onurundan\nDağlar kadar biriktim kurtulamıyorum olurundan\nBazen dikkat edemiyorum hayata\nBazen farketmiyor saatin kaç olduğu",
    "category": "diger"
  },
  {
    "id": 1001,
    "title": "Yakınlara koşmak",
    "body": "Yakınlara koşmak\nOlduğum yerden uzaklaşmak istiyorum",
    "category": "diger"
  },
  {
    "id": 1002,
    "title": "Gökyüzü karanlıktan ibaret",
    "body": "Gökyüzü karanlıktan ibaret\nNereye baksam...\nHiç.\n\nNefesine odaklanırsın\nGeçmişine baksam\nPiç.",
    "category": "diger"
  },
  {
    "id": 1003,
    "title": "Şimdi öğlen sıcağını ilk defa göğüsleyen bir bebeğim yeni",
    "body": "Şimdi öğlen sıcağını ilk defa göğüsleyen bir bebeğim yeni\nBana ihtiyacın olursa büyütmelisin beni",
    "category": "diger"
  },
  {
    "id": 1004,
    "title": "O kadar gerçeksin ki bugün",
    "body": "O kadar gerçeksin ki bugün\nSana dokunmak neredeyse mümkün\nNefessin , gökyüzümde benimsin\nHerkesin içinde önünde diz çöktüğüm hüznümsün ah.\n\nGeri kalan tüm ömrümü özlet bana Rab",
    "category": "diger"
  },
  {
    "id": 1005,
    "title": "Gerçeği gözlerden ayıracak bir yol arıyorum hayal meyal",
    "body": "Gerçeği gözlerden ayıracak bir yol arıyorum hayal meyal",
    "category": "diger"
  },
  {
    "id": 1006,
    "title": "Çok uzaklardayım sana bir nefes kadar yakın",
    "body": "Çok uzaklardayım sana bir nefes kadar yakın\nBeni görmek istiyorsan hatıralarımıza bakın\nBana en sert tavrını takınıp\nKendini en istemediğin şeylerden sakınıp",
    "category": "diger"
  },
  {
    "id": 1007,
    "title": "Herkes uyanmak üzereyken unutulmaz bir rüyadan",
    "body": "Herkes uyanmak üzereyken unutulmaz bir rüyadan\nBu Dünya'dan...\nDur ! Dur ! Sakın seni haklı çıktın sanmasınlar\nZatenlerin kazanmışken mağlup düşsün galibalar",
    "category": "diger"
  },
  {
    "id": 1008,
    "title": "Ben mi ?",
    "body": "Ben mi ?\nBana sorarsan inceden deli\nİki ileri iki geri",
    "category": "diger"
  },
  {
    "id": 1009,
    "title": "Sensiz bir dert hayal etti",
    "body": "Sensiz bir dert hayal etti\nO kadar sensizdi ki\nZiyan ettim",
    "category": "diger"
  },
  {
    "id": 1010,
    "title": "Gecelere sor bir de şafağın güzelliğini",
    "body": "Gecelere sor bir de şafağın güzelliğini\nAya bakarak çekilen aydınlık hasretini\nKendi kendine kalma özlemini\nSıfır huzur\n\n2",
    "category": "diger"
  },
  {
    "id": 1011,
    "title": "Adaletinde yargılar",
    "body": "Adaletinde yargılar \nDiğerlerinden farklı algılar\nYorum",
    "category": "diger"
  },
  {
    "id": 1012,
    "title": "Sırf uğraşmamak için seninle",
    "body": "Sırf uğraşmamak için seninle\nVazgeçiyorum anlatmaktan artık derdimi\nOysa ki arkasındaydım tezimin yeminle\nAnlamadınız derdimi",
    "category": "diger"
  },
  {
    "id": 1013,
    "title": "Seni.",
    "body": "Seni.\nBeni",
    "category": "diger"
  },
  {
    "id": 1014,
    "title": "Kendine sakladığın eski ne varsa aklında dök",
    "body": "Kendine sakladığın eski ne varsa aklında dök\nKalbini sök ve önüme koy\nYağmurlu bir günü seç bunu yapmak için",
    "category": "diger"
  },
  {
    "id": 1015,
    "title": "Benim gözleri görmez",
    "body": "Benim gözleri görmez\nKulaklarım duymaz\nBir dediğim bir dediğime uymaz",
    "category": "diger"
  },
  {
    "id": 1016,
    "title": "Diyorsun ki bana değer katamadın",
    "body": "Diyorsun ki bana değer katamadın\nFerah bir nefes almak istiyorum\nBeni dertlerimden ferahlatamadın\n\nDiyorsun ki git ama kal orda",
    "category": "diger"
  },
  {
    "id": 1017,
    "title": "Susuyorum.",
    "body": "Susuyorum.\nGözlerimden anla ne demek istediğimi sana\nNefretimi kusuyorum...",
    "category": "diger"
  },
  {
    "id": 1018,
    "title": "Kötülükte iyilikler gibi vicdan denizinde kıyıya vurur",
    "body": "Kötülükte iyilikler gibi vicdan denizinde kıyıya vurur\nVe ne hikmetse gelir seni bulur",
    "category": "diger"
  },
  {
    "id": 1019,
    "title": "Bir benmişim içinden susan",
    "body": "Bir benmişim içinden susan\nKendimmişim susunca kaçan\nSessizmişim usulca açan\nÇiçeklere özenip\n\nBir benmiyim",
    "category": "diger"
  },
  {
    "id": 1020,
    "title": "Aklıma beni hapsetmişsin sanki bir uçurumun tam öncesi",
    "body": "Aklıma beni hapsetmişsin sanki bir uçurumun tam öncesi\nGökyüzünden bana bakarken\nYeryüzündeki tek bir tanesi bugünler geçecek demiyor\nYarınlarından hangisi olacakların habercisi\nİki dünyanın efendisi\nBeni duy !\n\nBugün çok geç kalmış olabilirim\nBelki senle kendimi bulabilirim burda\nSana yok yere küsmüş olabilirim\nBana benle cevap ver ve gidelim burdan",
    "category": "sarki"
  },
  {
    "id": 1021,
    "title": "Bazen boşver diyorum ötekime",
    "body": "Bazen boşver diyorum ötekime\nBoşveriyor herşeyi\nBazen Git diyor bana içim bana en uzağın uzak ucuna\nBazen Kendinden kaçıyor görmeden ileriyi\nBazen Çekip perdeyi düşüp şarkılara \nBazen Demleyip çayı , bazen oturup koltuğuna\nBazen sallanıyor ama bazen.\n\nÖyle bir çelişiyor ki kendimle kendim bazen\nBir yanı ıslak bir yanım güneş\nBir yanım yarım bir yanı heves\nGiyinik bir çıplağım ben\nÖyle bir hal alıyor ki bu savaş bazen\nKendi kendime, kendimle , yapayalnız bir kalabalık\nKendimiz hariç herkese kendimi adadığım ümitlerimiz , azız.\nKötünün iyisi tavırlara\nİyinin kötüsü kavgalarla\nÖyle bir ateş ki bu içimizde yanan\nSönmesin diye tahtalara savaşlar açtığımız aydınlık loş kalmasın \nÖyle bir deprem ki içimde bastırdığımız\nKainat sallansın istiyor\nSevmiyorum şiirlerimi\nYetmiyor kelimeleri.\nBazen rüya görmeyi anlamayı bilmediğimi düşündürüyor sebepsiz sessizlikleri\nBazen bu rüya diyor , gözüm dala kalmışken ileri.\nSahtekar sevgili.",
    "category": "sarki"
  },
  {
    "id": 1022,
    "title": "Şehrim bana git dedi daha eskime",
    "body": "Şehrim bana git dedi daha eskime\nYoldayım diğerime \nPaha biçmek için değerime\nİadesi için ederimin edebinin\nBir defa görmek için derinlerimin dibini\nGün doğumunu emanet edip ihanetlerime\nSefere çıktım ötekimle\nZafere açtık ölümüne\nİçe dönük aşktan dışa dönüp kaçtık\nYazmak için tarihe son seferinde \n\"O kim ve neden böylesine kaçık \" ? diye\nVe neden kapıları ve pencereleri açıkken ardına kadar\nİçerisi karanlık ve havasız ve dar\n\nNefes alamıyorum nefes\nVe karanlıktan işte bu yüzden korkuyorum bu aralar\nBir ışıklık heves ve aynı nefesi döndürüp döndürüp soluyorum. \nSon nefesimi ciğerimde geveliyorum.\nBu kadar.\n\nKöyümün yaylalarında koşmak istiyorum mümkünse öğlen 2 gibi ve sonsuza kadar, bunu diliyorum. O kadar.\n\n2",
    "category": "sarki"
  },
  {
    "id": 1023,
    "title": "Ben aldım kendimden öcümü",
    "body": "Ben aldım kendimden öcümü\nKendimden aldım gücümü\nKendimi öldürdüğüm içimde\nÇocukluğum vardı\n\nCüret edip göğe\nDüşünüp öteyi\nHem yakıp hem söndürdüğüm içimde\nKor kaldı zor vardı nefes aldığımm hayat dardı\nBir aklım kaldı ağlayan\n\nNeden sahtekâr beyazlar ?\nNeden sahte kar ?\nNeden anlamıyorum nefes almayı ?\nNeden nefes alamıyorlar ?\n\nOğuzhan",
    "category": "sarki"
  },
  {
    "id": 1024,
    "title": "Kimsesiz ve erkeniz hepimiz birbirimize",
    "body": "Kimsesiz ve erkeniz hepimiz birbirimize\nMuhtacız olabilene her nefeste\nHasretiz kendimize\nBulamadık cevabını\n\nGüven ruhum güven derinlerine\nBaşkası kâr etmiyor, feryadının sesin kısık\nBenim ahım döndü geldi beni buldu\nBulamadım günahımı\n\nAman aman vefa , ne ettin bana\nŞimdi yarınlara mecbur kaldım\nİş işten geçmiş\nBulamadım devamını\n\nAman aman vefa , ne ettin bana\nŞimdi yarınlara mecbur kaldım\nİş işten geçmiş\nBulamadım devamını\n\nKimsesiz ve erkeniz hepimiz birbirimize\nMuhtacız olabilene her nefeste\nHasretiz kendimize\nBulamadık cevabını\n\nGüven ruhum güven derinlerine\nBaşkası kâr etmiyor, feryadının sesin kısık\nBenim ahım döndü geldi beni buldu\nBulamadım günahımı\n\nAman aman vefa , ne ettin bana\nŞimdi yarınlara mecbur kaldım\nİş işten geçmiş\nBulamadım devamını\n\nAman aman vefa , ne ettin bana\nŞimdi yarınlara mecbur kaldım\nİş işten geçmiş\nBulamadım devamını",
    "category": "sarki"
  },
  {
    "id": 1025,
    "title": "Her kapıdan sen gelsen olmaz mı ?",
    "body": "Her kapıdan sen gelsen olmaz mı ? \nOlur olmaz..\nOlmaz dersen başka bir şey olacak \nAynı senaryoda figüranın olacağım ebedi\nBelki farklı seyredecek tabiat\nBaşka renk olacak gökyüzüm\nBambaşka ışıyacak bulutlarımın arasından hüzmeler\nBen berime yürüyeceğim\nSen derin bir deniz gibi işleyeceksin zihnime\nGönlümün kilidini açıp serbest bırakabilecek miyim kendimi ?\nÜzeceğim değil mi gelmediğin günleri ?\nPembe gökyüzümde mor benim bulutlarım\nVe senin yaprakların şeffaf ve pamuktan dikenlerin var \nBakışlarında gel gitler var gözümün önünde gelip gitmeyen\nBir afetsin sen\nSon günüme moralsin belkide\nOlmaz mı olur ?\nBir kapıdan gelmezsen \nÖbüründen gel ne olur\nOlur olmaz\nNe olur ?\nNe olmaz..",
    "category": "sarki"
  },
  {
    "id": 1026,
    "title": "Tutunacak bir merhaba arıyorum",
    "body": "Tutunacak bir merhaba arıyorum\nGözlerimden damlayacak bir nasılsın\nSen , o boşluktaki hiçlik , sana sesleniyorum\nNasıl oluyor da her şey boş ve sen asılsın ?\n\nOradasın işte , benden çok uzakta olsan da buradasın\nGeçmişimden bir hatıra , gelecekten aklıma düşecek çarpıcı bir mısrasın\nSen , içimdeki hoşlukta bir piçlik , sana yalvarıyorum\nSanki çok hızlı soluyor da bir çiçek ve sen buna hazırsın.\n\nBiraz daha sürsün bu ayrılık , bu hasret bize yetmez\nSana bişey olmaz , gece bana darılsın\nYalanın biri bin para etmez\nUzaklardan bir masal gelip kalbime sarılsın",
    "category": "sarki"
  },
  {
    "id": 1027,
    "title": "Elimde olsa Dünya'yı bi durdururdum önce",
    "body": "Elimde olsa Dünya'yı bi durdururdum önce\nGüneşe sormak için neden biz böyleyiz\nAynı mı kalacağız etrafında bir tur daha dönünce\nKainatta yalnız ve kimsesiz ?\n\nVazgeç artık dönme Dünya , bu rüyalar faydasız\nNasıl hala bu kadar serin olabiliyor ortalık\nKimse aldırmasa ben aldırırım\nBelki yavaşlarsın\n\nBurda hiç bilmediğim şeyler var\nAnlamadığım düşüncesiz insanlar\nTelaşlarsın\n\nOlduğun yerde kal ne olur dünya\nSorulması gereken sorular var\nSavaşlarsın",
    "category": "sarki"
  },
  {
    "id": 1028,
    "title": "Rüzgar !",
    "body": "Rüzgar !\nAl aklımı savur geçir hayatın iğnesinin deliğinden\nEngin bir denizin sükunetini bozar gibi coştur yüreğimi\nBana yeni kelimeler ver\n\nŞeklini dağıt bulutlarımın\nAğaçlarımı sök yerinden \nUsul usul konuş kulağımda \nGüneşe dost yeni bir yer beğen\n\nKi al beni benden bana benden hediye yeni bir ben ver\nGüven bana.\n\nGüven banaaaaaaaa !\nGüven Banaaaaaaaa !\nGüven Banaaaaaaaa !\nGüven banaaaaaaaa !\n\nRüzgar !\nAl aklımı savur geçir hayatın iğnesinin deliğinden\nEngin bir denizin sükunetini bozar gibi coştur yüreğimi\nBana yeni kelimeler ver\n\nŞeklini dağıt bulutlarımın\nAğaçlarımı sök yerinden \nUsul usul konuş kulağımda \nGüneşe dost yeni bir yer beğen\n\nKi al beni benden bana benden hediye yeni bir ben ver\nGüven bana.\n\nGüven banaaaaaaaaa!\nGüven Banaaaaaaaaa!\nGüven Banaaaaaaaaa !\nGüven banaaaaaaaaa !",
    "category": "sarki"
  },
  {
    "id": 1029,
    "title": "Yavaşı ve ağırı göz kapaklarımın yarışırlar aydınlığa",
    "body": "Yavaşı ve ağırı göz kapaklarımın yarışırlar aydınlığa\nSavaşırlar ikisi de namağlup.\nHer bir kırpışında içimdeki sıkışıklıkta bir yer açıp anılarımdan\nBunu bir ara hatırlatır Tanrı deyip unuturlar\nOlup.\n\nMilyonlarca belki milyarlarca kez uyanmıştım ben bu rüyadan\nNeden hala herşey böylesine karmaşık ve \nEtrafımda bir sarmaşık gibi Dünyalar ?",
    "category": "sarki"
  },
  {
    "id": 1030,
    "title": "Ben af beklerim",
    "body": "Ben af beklerim\nSen şarkılar söylesen benim için\nÖyle bir özlemle , öyle bir bağır ki\nÖyle ağlatsın daha ikinci cümlesi\n\nGidişini tutsun , vermesin bana hevesimi\nHıçkırığımı yutsun , ben affederim desin seni\nCennete benden bahseder misin der gibi\nÖyle ağlatsın ikinci cümlesi\n\nBen ağlarım \nBen ağlarım\nBen ağlarım diye ağlarım\nYokluğundaki boşluğun muhteşem ağırlığı\nSon bulunca herşeyimiz yollar bulduğunda kader\nSon nefesime seni andırırım\n\nBen ağlarım \nBen ağlarım\nBen ağlarım diye ağlarım\nYokluğundaki boşluğun muhteşem ağırlığı\nSon bulunca herşeyimiz yollar bulduğunda kader\nSon nefesime seni andırırım",
    "category": "sarki"
  },
  {
    "id": 1031,
    "title": "Sen busun.",
    "body": "Sen busun.\n\nSen kendinden başka herkessin.\nBırak da seni her biri birer birer \nterk etsin.\nEksilsinler.\nArkandan şarkılar yazılsın\nŞiirlerini bestelesinler.\nDans etsinler.\nVazgeçsinler.\n\nVe yokluğun fark edildiği zaman da kimdi bu adam demesinler.\n\nSen busun.\nYoksun.\nİster istesinler , ister istemesinler.",
    "category": "sarki"
  },
  {
    "id": 1032,
    "title": "Açık renk bir gölgen var senin varla yok arası",
    "body": "Açık renk bir gölgen var senin varla yok arası\nGüneş açıların yorgun\nGeniş yaprakların solgun \n\nÖmrün gibi boyununda geliyor mudur kısalası\nHüznü dolgun o olgunluk meselesi\n\nYeryüzü seni ister sen kapat diye yarasını\nIlık rüzgara sordun\nİliğinden dondun\n\nGönlün gibi koynunda da yatıyor mudur hikayesi\nÜzgün doğdun\nMutlu oldun.",
    "category": "sarki"
  },
  {
    "id": 1033,
    "title": "Neler anlattın kimbilir ?",
    "body": "Neler anlattın kimbilir ?\nNeler paylaştın şu gönlümden  ?\nBelki özlem belki kibir\nNeler vardı söyle ömrümden ?\n\nGüneşe bakar gibi derin , ılık\nBeni yak diye bağırıp gönlümden\nBelki üzgün belki yıkık belki buruk bir sohbete\nNeler neler neler sığdırırım\n\nKavuşmak için çok uzaktasın\nBakıp görebileceğim bir yakın\nBelki vuslat bir gün biterse\nNeler neler neler anlatırız\nSonra ağlarız.\n\n2",
    "category": "sarki"
  },
  {
    "id": 1034,
    "title": "Yalnızlıkları farklı tesadüfleri haklıydı bizim",
    "body": "Yalnızlıkları farklı tesadüfleri haklıydı bizim\nAlıp görürdüler aklı yanaklarını kızarttılar\nUzaklara dalakaldı gözleri her ikisi için\nMesafelere inandılar , hangi birini saysınlar\n\nAşk öldü birkaç yıl önce\nBir an içinde sıkışıp kaldı kadim sevda\nVazgeçiverdi kendinden yansın diye güneş , kendisi sönünce kordan\n\nYalnızlık tesadüf oldu güya\nAynada kendisini göremeyince hisleri\nVeda etti içindeki çocuğa\nBir",
    "category": "sarki"
  },
  {
    "id": 1035,
    "title": "Issız ve çok sessizdi bugün aklımın sokakları",
    "body": "Issız ve çok sessizdi bugün aklımın sokakları\nLoş aydınlatıyordu lambaları olmayan gölgelerimi\nZar zor anlatıyordum gerçeğin yapayalnızlığını\nAlmıyordu gardını o , bakıyordu yüzüme\n\nTeslim etmiş kendisini rüyalarımın inik kepenklerine\nBir şey bulmuş zat-ı muhterem\nBir yollu bir çözüm , biri uzaklarda beliren\nBir lafının çifti öteki biri bir sözüne deliren\n\nKendini bulduğundan olmalı , geç kalınmış buluşmaya\nTadı kaçmış umutların ama gelmiş gelmesi gereken\nBuruk bir merhabayla kalbimi göğsümden geçiren\nKonuşmaya konuşmaya içten içten geçmiş işten iş.\n\nKendini bulduğundan olmalı , geç kalınmış buluşmaya\nTadı kaçmış umutların ama gelmiş gelmesi gereken\nBuruk bir merhabayla kalbimi göğsümden geçiren\nKonuşmaya konuşmaya içten içten geçmiş işten iş.\n\nIssız ve çok sessizdi bugün aklımın sokakları\nLoş aydınlatıyordu lambaları olmayan gölgelerimi\nZar zor anlatıyordum gerçeğin yapayalnızlığını\nAlmıyordu gardını o , bakıyordu yüzüme\n\nTeslim etmiş kendisini rüyalarımın inik kepenklerine\nBir şey bulmuş zat-ı muhterem\nBir yollu bir çözüm , biri uzaklarda beliren\nBir lafının çifti öteki biri bir sözüne deliren\n\nKendini bulduğundan olmalı , geç kalınmış buluşmaya\nTadı kaçmış umutların ama gelmiş gelmesi gereken\nBuruk bir merhabayla kalbimi göğsümden geçiren\nKonuşmaya konuşmaya içten içten geçmiş işten iş.\n\nKendini bulduğundan olmalı , geç kalınmış buluşmaya\nTadı kaçmış umutların ama gelmiş gelmesi gereken\nBuruk bir merhabayla kalbimi göğsümden geçiren\nKonuşmaya konuşmaya içten içten geçmiş işten iş.",
    "category": "sarki"
  },
  {
    "id": 1036,
    "title": "Günaydın ,",
    "body": "Günaydın ,\nGece bitti ve sen Güneş'in sıcağına hazırsın.\nBelki yağmur yağıyordur oralarda , belki yanıldım.\nBelki rüyaların en güzeline şair oldum \nŞahit olduğum en özel mısranın sahibi oldum\nOna sarıldım.\n\nGünaydın ,\nHayatın her anında bir ışık bulsun seni gökyüzünden\nO da sana sarılsın.",
    "category": "sarki"
  },
  {
    "id": 1037,
    "title": "Nazar değerse çok pis küserim bak bu sefer",
    "body": "Nazar değerse çok pis küserim bak bu sefer\nSanmıyorum ama o kadar güzel ki korkuyorum\nYokluğununun hayali öyle beter ki\nYüzleşemezsem valla ölür kalırım , düşününce ölüyorum\nBu yüzden o soruyu sormuyorum\nEmrediyorum\nÖnce beni al onu sonsuz kıl\nKarşılığında ömrümü sunuyorum. \nDolu bir yürek ve yorgun bir akıl\n\nBen onsuz nefes almak istemiyorum\nBen onsuz heves duymak istemiyorum\nBen onsuz  bir hayat istemiyorum\nBen onsuz olamam , düşününce ölüyorum",
    "category": "sarki"
  },
  {
    "id": 1038,
    "title": "Kelimelerimin denizlerime döküldüğü bir yerdesin bende sen",
    "body": "Kelimelerimin denizlerime döküldüğü bir yerdesin bende sen\nSerin ve usulsun tüylerimi ürperten\nYeni bir başlangıçta bazen , hırçınlaşan suların huzurla dans ettiği bir yerdeyken senle ben\nDerin , güzel ve asil ümitleri yeşerten\nCümlelerimi saracak bir girdapsın , aklımı çelen bir galip\nGözyaşlarısın ruhumun diplerinden gelen\nHıçkırıklarımdaki tuzsun genzimi delen\nBir yudumluk huzursun\nKıtalarıma yönelen okyanussun sen\nDünyaları doldurursun",
    "category": "sarki"
  },
  {
    "id": 1039,
    "title": "Zaman bir türlü geçmedi",
    "body": "Zaman bir türlü geçmedi\nO günden sonra hala o gün bugün\nGüven giderken taraf seçmedi \nKalan saniyelerin arası uzadı büsbütün\n\nDakikaların tavrı küs , kalanların sabrı hüzün\n\nMutsuz insanların dert çığlıkları bu aralar sessiz\nArtık gülümsemeler bile samimiyetsiz \nKaçıp göçecektik gün ortasında, olabildiğine uzağa\nNerdesin gidip dönmeyen hayat yok mu bir iz ?\n\nYıldızlar aynı yalnız , yalnız ; Gökyüzü sanki daha bir karanlık \nŞafak en son nerde söktü Bell ki ümitsiz bir nöbette aydınlık\nHangi birimizin en şanslı günü nerede ışıdı bi anlık\nNerde bu sabahların gün aydınlığı\n\n2",
    "category": "sarki"
  },
  {
    "id": 1040,
    "title": "Susuyorum ya yansın içim",
    "body": "Susuyorum ya yansın içim \nAnlatamıyorum çok yoruldum çok sevdiğim bizim için\nGalip gelirken pes ettim , altı üstü bir hevesti\nBaşa sarıyorum cümlelerimi , hikayemi sormadığın için\n\nAnılarım kayboluyor zihnimden ,\nHatıralardan arda kalanlar için , \nKaranlıktan korkmuyorum artık bu rüyadan uyanırken siyahı sevmeye başladığım için\n\nBoşa dönmüyor bu Dünya , Güneş yakmıyor boşu boşuna kendini \nKainattaki her zerre bizim içinmiş..\nBir ürperti veriyor hiçlik , varım diyor içim\nTüm bu olanlar bizsiz bir cennet için mi ?",
    "category": "sarki"
  },
  {
    "id": 1041,
    "title": "Bu bir rüya değil , kapalı gözlerinin ardındaki zahiri",
    "body": "Bu bir rüya değil , kapalı gözlerinin ardındaki zahiri\nGerçek, yanılgıya hiç bu kadar yakın olmamıştı\nSanki kendine gel diye değil , belki caizse tabiri\nSana kalan sükut senin , bana kalan zifiri\n\nZaman geçer , zaman bu geçer durur hep aniden\nHiç o anın geçmişinde kalır mı akrebi ?\nTamam yeter dediğin devam eder mi sahiden ?\nGözlerini kırptığında Tanrı sorarmı ? \nMadem neden ?",
    "category": "sarki"
  },
  {
    "id": 1042,
    "title": "Buralarda bulunmuştun",
    "body": "Buralarda bulunmuştun\nHatırlaman lazım geçen zamanları\nKendini bulmuştun ikinci şansının tamamlarında\nYaraların vardı unutmuştun hazanları\nTamamlanmış anlarında aleve vermiştin samanlarını\nSönmüştün sonra\nİzleri kalmıştı küllerin cüzî aklında\nYabanlarına anlatmıştın anılarını başka başka\nŞans vermemiştin , atlamıştın adımlarını\nBaşka aşkı başka başla düşünmüştün \nAyaklarına batan ince sinsi bir taşla ürkmüştün\nBuralarda bulunmuştun\nHatırlaman lazım geçen zamanları hatırla\nKendini ?\nYaralarını ?\nİzlerini ?\nAnılarını ?\nBaşka ?",
    "category": "sarki"
  },
  {
    "id": 1043,
    "title": "Ben af beklerim",
    "body": "Ben af beklerim\nSen şarkılar söyle benim için\nAğlatsın nakaratın ikinci cümlesi\nGidişimi tutsun \nBen affederim desin , hıçkırıkları yutsun\n\nTerkedilmiş bir cennetten bahsetsin\nCehennemin sıcaklığını kucaklarım senin için\nAğlasın ateş\nKaldığıma sussun\nYaksın durmadan , sönmeye dursun.",
    "category": "sarki"
  },
  {
    "id": 1044,
    "title": "Cümleleri parçalıyorum , kelimeleri heceliyorum yana yakıla",
    "body": "Cümleleri parçalıyorum , kelimeleri heceliyorum yana yakıla\nKalmadım bitip tükendim \nAşkı, dermanı arıyorum yıkılırken \n\nBahar mı , şarkılar mı , bir gonca gül mü ?\nGüneş mi , ay mı , yıldızlar mı  sevda\nİlk görüşte mi yoksa ayırt edemediğin bir rüya da mı saklı \nOysa ikisine de inanırdım\n\nBir Kar tanesi mi saçlarına düşen\nBir Kor tanesi mi yüreğimde pişen\nBir öğütmü mü tek heceden bir kelime\nBir çocuk mu gülen\n\nNedir aşk ? Nasıl anlatılır ?\n\nCümleleri parçalıyorum , kelimeleri heceliyorum yana yakıla\nKalmadım bitip tükendim \nAşkı, dermanı arıyorum yıkılırken \n\nBahar mı , şarkılar mı , bir gonca gül mü ?\nGüneş mi , ay mı , yıldızlar mı  sevda\nİlk görüşte mi yoksa ayırt edemediğin bir rüya da mı saklı \nOysa ikisine de inanırdım\n\nBir Kar tanesi mi saçlarına düşen\nBir Kor tanesi mi yüreğimde pişen\nBir öğütmü mü tek heceden bir kelime\nBir çocuk mu gülen\n\nNedir aşk ? Nasıl anlatılır ?\n\nBir Kar tanesi mi saçlarına düşen\nBir Kor tanesi mi yüreğimde pişen\nBir öğütmü mü tek heceden bir kelime\nBir çocuk mu gülen\n\nNedir aşk ? Nasıl anlatılır ?",
    "category": "sarki"
  },
  {
    "id": 1045,
    "title": "Defterimin son sağ sayfasındayım son hakkım bu",
    "body": "Defterimin son sağ sayfasındayım son hakkım bu\nKalemimden düşen son mürekkep damlasınu yuttum\nSağ kulağımda birinin beni anması lüzumsuz mu\nSon şiirimin sessiz kalması \nArsız tafrası\n\nKare kelimelerle döşenmiş bir kale\nUzun cümlelerin güzel sanılması\nBen aşıktım ilhamın mısraları örtüşüne\nKıta'larımın yalnız kalması\nHuzursuz arkası\n\nBenden gidiyorsun diye başlasın madem\nBeni seviyordun sanki diye ağlasın matem\nBir yol bulup kaçmak mı lazım bütün cümlelerden\nYoksa kaçılmazmı affı bilirken kusursuz olmasın",
    "category": "sarki"
  },
  {
    "id": 1046,
    "title": "Ardına bakmadın hiç hayatımda",
    "body": "Ardına bakmadın hiç hayatımda\nNe bıraktığını da hiç merak etmedin\nFarkına varmadığın yalanlardan\nHangisini mi beğenmedim ?\nSöyleyeyim sevgili\n\nBakışına hayrandık aynalara\nYarışına kapılmıştın hayatında\nGidişin yalandı sevmedim\nKalışın yavandı sevmedim\nİyiyiz diyorduk soranlara\n\nSevişin yarımdı sevmedin\nSöylediğin sevgilin",
    "category": "sarki"
  },
  {
    "id": 1047,
    "title": "Nedensiz sorular gibi göğsümü gerdim semaya",
    "body": "Nedensiz sorular gibi göğsümü gerdim semaya\nNerden bileceğim sanki bundan da mı beter ?\nSöz başımı sokmayacağım herhangi bir belaya\nBence yeter\nSence hata\nApaçık davet günaha\n\nAnsızın gökyüzünde parlamıştın gecede\nGelmeseydin bir daha \nVermeseydin hakkımı\n\nBenim için herşeyi bırakırdın geride\nGelmeseydin aklıma\nAlmasaydın aklımı",
    "category": "sarki"
  },
  {
    "id": 1048,
    "title": "Öf kelimeleri geçiyor içimden",
    "body": "Öf kelimeleri geçiyor içimden\nDilim dilim ediyorlar harbimi\nEllerimden gelmedi , yok mu bir yardım eden ?\nKayıyor elimden elim , tutamıyorum kendimi\n\nÇıkaramıyorum en derinden\nBir yol da bulamıyor kendiliğinden\nO karanlık ben aydınlık\nBuluşamıyoruz sırf bu yüzden\n\nBu aşk bitsin mi ?\nBeni benden terkedip gitse\nBu aşk bitsin mi ?\nGölgemi bana vermeden gitse\nBu aşk bitsin mi ?\nDüşerim en derine itse\nBu aşk bitmesin\nVe bu rüyanın yalnızlığı\na\n2",
    "category": "sarki"
  },
  {
    "id": 1049,
    "title": "Bulurmuydum bıraktığım yerde",
    "body": "Bulurmuydum bıraktığım yerde\nCesaretim olsaydı geldiğimde\nGözlerine esir düştüm çoktan\nBir bakışla gelsen hasretime\n\nAnsızın gelsen be bu bambaşka olsun\nÖrt yüreğime sevgini  bir yuvası olsun\nYok olmaz deme beni benden de etme\nEllerimiz değmişti bir kere\nHatrım bu olsun",
    "category": "sarki"
  },
  {
    "id": 1050,
    "title": "Duygularımdan seçemiyorum bazılarını Ay..",
    "body": "Duygularımdan seçemiyorum bazılarını Ay..\nMazileri , gerçekleri , arızalıları \nŞöyle bi içime uzun uzun bakıp\nSeyredemedim hiç manzaralarımı\nHazmedemedim yaralarımı Ay !\nHissedemiyorum hazlarını\n\nYeni bir başlangıç için yaprak döküp\nKavuşmaya davet edeceğim yazlarımı\nBiriktirip azlarımı takip edip arzlarımı\nYeniden başlamak istiyorum\nYerine getirip farzlarını bu işin\n\nHepsini teker teker uzun uzun derin derin hissetmek istiyorum Ay , \nyitip gitmeden bazıları \nBirer birer adımlar atıp uzaklaşmak istiyorum Ay\ngidip gelmeden bazıları",
    "category": "sarki"
  },
  {
    "id": 1051,
    "title": "Her gece kalbime dolan yağmursun",
    "body": "Her gece kalbime dolan yağmursun\nSeni bana hatırlatan her gece\nKollarımla kolların kavuşunca olur\nTek mi şansımsın , hep mi uğur\n\nAşk ile kastet bana\nŞarkılar söylet \nSöz konusu bu barışsa\nSavaşlarımı hapset\nHa galibim ha mağlubum ne farkeder\nMevzu bahis sensen aslında\nBana kendinden bahset\n\nSen yanımdayken içime doğar\nYüzümün haline bir baksana\nYüzüm yüzlerim gülüyor..",
    "category": "sarki"
  },
  {
    "id": 1052,
    "title": "Kalın diye bağırdı ince bir çocuk sesi pesten",
    "body": "Kalın diye bağırdı ince bir çocuk sesi pesten\nYalandı hepsi ve özür dilerim herkesten\nYarım kalan bu Dünya , belki de öbür Dünya\nYalvaracak kaç hakkım kaldı , korkuyorum bilmekten.\n\nKorkuyorum omzuma binen bu mahfolası yükten\nKorkuyorum sonsuza binaen affedilmekten\nYa yarın olacak bu , ya yarınından sonraki gün\nKi o günden kaçıyordum ben , mahfedilmekten\n\nKalın.",
    "category": "sarki"
  },
  {
    "id": 1053,
    "title": "Bir şeyler biliyor olmalılar",
    "body": "Bir şeyler biliyor olmalılar\nYa ifade edemiyorlar gönülleri bağlı\nYa söylemiyorlar dilleri kızgın mühürle dağlı\nYa saklıyorlar gerçeği\nYasaklıyorlar her şeyi\nYa farklılar ya haklılar\nYahut düşünmüyorlar hiçbir şeyi\n\nEn özel şarkının ilk notasını arıyorum epeydir\nİlk cümlesi gel\nSon kelimesi ecel\nNoktasına varamayacakmışım gibi geliyor\nBasıyor keder\nYa tanıyorlar\nYa tanımlayamıyorlar\nYa söylemiyorlar\nYa saklıyorlar benden\nYa aranızdan biri\nYa hepimiz\nYahut benim o iki.\n\nGel.\nGelmeden ecel.",
    "category": "sarki"
  },
  {
    "id": 1054,
    "title": "Gittiğimde ordan , baktığımda arkamdan bakana",
    "body": "Gittiğimde ordan , baktığımda arkamdan bakana\nKoşmak istedi mi acaba bana , özür dilermiydi tavrından\nBeni sarıp sarmala derdim , beni sakın yarım bırakma ama\nİş işten geçmişti çoktan buna ,  yarım kalan aklımla\n\nYada böyle bitmeliydi belki , böyle bir sondu içime doğan\nUzun uzun gökyüzüne bakıp  dilekler tutan ben\nGeri dönüşü yok bu gidişin , tüm savaşlarımda düşman\nBarışımız öz olsun, tek olsun,  bir olsun, hep en güzeli olan\n\nİnan çok isterdim öldüğümde  beni gömmeni\nAğlatmanı hatıralarımızda beni , hayalinde öpmeni\nŞimdi sönmüş bir ateşsin , küllerinden doğama\nSana , sensiz bir cenneti nasıl anlatabilirim",
    "category": "sarki"
  },
  {
    "id": 1055,
    "title": "Milyarlarca Güneş göz kırpıyor her gece",
    "body": "Milyarlarca Güneş göz kırpıyor her gece\nBense düşünüyorum oldu mu acaba buraya bu hece\nAnlatabiliyor muyum derdimi\nİçimi dökebiliyor muyum öylece\n\nSaatler geçiyor gözümün önünden\nAhlar vuruyor yüzüme senin yüzünden\nAğlayabiliyor muyum o da belli değil \n\nDaralıyor çevrem\nSusanlarla daha sıcak bu cehennem\nKimseyle olamadan daha senli benli\nBu ciddiyetle ne zaman tanışacak epeycem",
    "category": "sarki"
  },
  {
    "id": 1056,
    "title": "Her sabah uyandığımda aynı şey",
    "body": "Her sabah uyandığımda aynı şey\nAğzımda bir demir tadı beynimde bir şimşek\nO sun , o musun , o sun , o musun ?\nHem destek hem köstek\nRüya değil yaşadıklarım.\nYaşanabilen bir gerçek !\n\nHer gece yatarkense bambaşka\nAklımda bir yorgunluk , gülümsüyorum aşkla...\nO muydun , o musun , o muydun , o musun ?\nSakin bir olgunluk ,\nRuhumda bir solgunluk musun ?\nUykumun gelmesi bu aralar zaman alıyor ama\nGeçecek\nElbet o gün hepimiz için gelecek...",
    "category": "sarki"
  },
  {
    "id": 1057,
    "title": "Dalgaların sesini duyabilmek buralardan çok uzaklarda",
    "body": "Dalgaların sesini duyabilmek buralardan çok uzaklarda\nAyaklarımı uzatabilmek Güneşe ve Ay'a\nGönlümü düşürebilmek mi dara ?\nSence çok mu zor ?\n\nNefes nefese uzaklara bakıp\nÖnce verip onu sonra geri alıp\nGökyüzünde uçmak orda\nÇok mu zor ?",
    "category": "sarki"
  },
  {
    "id": 1058,
    "title": "Bu gece sabaha kadar ve zamana karşı bana , hatırlat ki güzellikleri",
    "body": "Bu gece sabaha kadar ve zamana karşı bana , hatırlat ki güzellikleri\nBu gece bir yıldız,  daha çok uzaklarda bir yerlere düşebilir\nBurda yokken anlamı yok , bu hisleri yaz yada kazı içinde bir yere \nBu gece bu şeyler olmaz mı ? \nOlabilir.\n\nBir duanın kabulü hoş gelince gönlüme\nZor bakışımdan son bakışımda aklıma gelmedi işte o haz\nBen burda bu var gücümle inim inim ölürken\nYakışmadı mı bu bembeyaz pelerin , oturmadımı üzerime",
    "category": "sarki"
  },
  {
    "id": 1059,
    "title": "Sonuçta bir kuşum bende",
    "body": "Sonuçta bir kuşum bende\nÇok yükseklerden uçmuş olabilirim\nKibrimin sınırını öğrendim\nKaf dağında hemde\n\nSonuçta bir kuşsun sende\nYanında uçmuş olabilirim\nSabrının sınırlarını öğrendim\nZar zor hemde\n\nEn başında çok zordu hatıraları hatırlamak\nEn başında biraz yordu senle konuşmak\nZordu herşey\nAteşkes ilan etmek\nSözler vermek\nAnd içmek\nKoskaca dünyayı ikimize dar etmek\nSevmek hemde çok sevmek\nSonuçta bir tür kuşuz bizde kanatsız\nYer yüzüne veda etmek\nYükselerek hemde\n\n2",
    "category": "sarki"
  },
  {
    "id": 1060,
    "title": "Yağmurlar yağar ya bulutlar hani",
    "body": "Yağmurlar yağar ya bulutlar hani\nBen ağlarım umutlar gibi\nDökülürüm yeryüzüne\nKavuştuğum hüzünler denizi\nŞefkatine sığındığım\n\nArdına bakınca yükseklerin\nTümseklerin , tüm tepelerin , dağların\nArarım ne kaybettiğimi bilmeden\nSevinçlerine sığındığım\n\nAcele eden bir halim var\nYorulmak nedir ecel nedir bilmem\nGüç verir varlığın bana\nDüşürür şarkılara nerdesin bilmem şiirlerde sığındığım\n   \t\n\n2",
    "category": "sarki"
  },
  {
    "id": 1061,
    "title": "Ben varım !",
    "body": "Ben varım !\nHer şeye rağmen !\nBütün iyiliklere varım..\nHayallerim bir ümitle gerçek olunca\nDüşlerim bir hevesle kalmasın yarım\nYarın olsun artık geçmeyen şu hayatımda\nBugün çok geç kalmış olabilir hikayemde\nZaman bir türlü yetmiyor\nSaniyelerse geçmiyor\nBenim sana bir şey anlatmam lazım\n\nBen varım !\nHerşey rağmen !\nBütün iyiliklere varım !\nKötülükler düşünce , sarılacak çiçekler\nBu düşü görürüken yanımda olman lazım\nÇünkü sen varsın..\n\nBen varım sende ol , zor zamanlarım yüzünden bütün cümlelerim yarım\nTamamla beni eksiksem , kelimelerim ol\nŞarkılar olup sana bir şey söylemem lazım.\nİyi ki varsın..",
    "category": "sarki"
  },
  {
    "id": 1062,
    "title": "Beni tam ortadan ikiye bölen bir sır var",
    "body": "Beni tam ortadan ikiye bölen bir sır var\nBeni tamamlayan yarım kesik çiçekler\nKendim ile kendi aramda kavgalarım var\nDerdim bütün sorunlarım ve iyi dilekler\n\nGerçek olamayacak kadar güzel hissi\nGünleri doğurmayacakmışçasına özel hepsi\nÖyle bi gecedeyim kendim ile aynı tarafta\nÖnümde bir gümüş tepsi üstünde yarım çiçekler\n\nBeni tam anla beni tamamla ne olur\nİstersen olur , istersen isterim bende erkek sözü\nBeni yarım bırakma ve yokluğunda aratma ne olur\n2 parçayız biz birbirini tamamlayan , iki gözü\n\n2",
    "category": "sarki"
  },
  {
    "id": 1063,
    "title": "Güneş ve \"Ay\"dınlattığı Dünya",
    "body": "Güneş ve \"Ay\"dınlattığı Dünya\nKaranlığa kavuşuşun kiremit rengi bir ipek etek gibi hoş\nGökyüzünde tek bir inci tanesi gibi pileli\nMilyarlarca yıldızı bekliyor o korkutucu simsiyahımsı boş\nÇünkü sanki bu oyun hileli\n\nKaranlıkta bana yardım et benim yardımıma koş\nBeni kendime getir o uzun yoldan çevirip\nBeyaz bir gömlek gibi üzerime ilişince ehli\nDüşüncelerimde sabret\nAğlayınca zifirime coş\n\nÇünkü gece kederli   \nVe loş.",
    "category": "sarki"
  },
  {
    "id": 1064,
    "title": "Aklımı aklım almıyor",
    "body": "Aklımı aklım almıyor\nNe bu sürat ne bu surat anlıyor\nBir ince ipte yürüyorum fakat sakat\nNerde ben nerde öteki dünya nerde sırat\n\nBen herşeyi hatırlamayı isterken\nAklım neden bu oyunu oynuyor\nBir kaldırım ki eninde sonunda bitecekken\nBir yol var yanında dikenli bana göz kırpıyor\n\nAh nerde o eski toy günlerim\nVay halime , dağıtmadığım güllerim\nÇaresiz kaldım , dermanım kalmadı burda\nNerde ben nerde öteki dünya nerde öteki dünya ?",
    "category": "sarki"
  },
  {
    "id": 1065,
    "title": "Kapılardan geçemedim",
    "body": "Kapılardan geçemedim\nAcılardan seçemedim en güzel anımı\nO yüzden varlığımla yokluğun birmiş gibi\nHikayende bana da yer ver , sonra al canımı\n\nDoğru sandığım yalanlarımı bulup çıkar\nYardım et zamanlarıma ama affetme sakın\nArdında bıraktığın biri olarak kalayım tamam\nYeter ki hikayene al yarımı , sonra ver yanıma\n\nBen artık senden sonra bensiz biriyim sen yoksun\nBen senden sonra yıldım , ömrüm gönlümden yoksun\nBen yardım sordum geldin , doğrum yokken buldun , olsun \nSen yardım et bana buluştur beni o kitapla \n\n2",
    "category": "sarki"
  },
  {
    "id": 1066,
    "title": "Kısacık bir uzun yol var önümde gidilecek",
    "body": "Kısacık bir uzun yol var önümde gidilecek\nİki saniye kadar daha sürecek bir koca ömür\nBir iki kişi daha kaldı kalpten sevilecek\nYoksa ne işe yarar ki başka bu gönül ?\n\nŞarkılar var yarım akıllarda yarasında dillerde\nŞiirlerim var nedense bu hiç olmamış dediğiniz\nTertemiz olmayacak hiçbir zaman kan lekesi ellerde\nArtık helal değil hiçbir lokma boğazınızdan geçen yediğiniz.\n\nBen biliyorum artık neden böyle olduğunu\nBen biliyorum sadece neden böyle olduğunu\nBen biliyorum sanki neden bu böyle olmaz\nSen biliyor musun neden lüzümsuz sorular sorduğunu ?\n\nBen biliyorum artık neden böyle olduğunu\nBen biliyorum sadece neden böyle olduğunu\nBen biliyorum sanki neden bu böyle olmaz\nSen biliyor musun neden lüzümsuz sorular sorduğunu ?\n\nBen biliyorum artık neden böyle olduğunu\nBen biliyorum sadece neden böyle olduğunu\nBen biliyorum sanki neden bu böyle olmaz\nSen biliyor musun neden lüzümsuz sorular sorduğunu ?\n\nPes etmek yok.\nKaybetmiyoruz umudu.\n\nKısacık bir uzun yol var önümde gidilecek\nİki saniye kadar daha sürecek bir koca ömür\nBir iki kişi daha kaldı kalpten sevilecek\nYoksa ne işe yarar ki başka bu gönül ?\n\nŞarkılar var yarım akıllarda yarasında dillerde\nŞiirlerim var nedense bu hiç olmamış dediğiniz\nTertemiz olmayacak hiçbir zaman kan lekesi ellerde\nArtık helal değil hiçbir lokma boğazınızdan geçen yediğiniz.\n\nBen biliyorum artık neden böyle olduğunu\nBen biliyorum sadece neden böyle olduğunu\nBen biliyorum sanki neden bu böyle olmaz\nSen biliyor musun neden lüzümsuz sorular sorduğunu ?\n\nBen biliyorum artık neden böyle olduğunu\nBen biliyorum sadece neden böyle olduğunu\nBen biliyorum sanki neden bu böyle olmaz\nSen biliyor musun neden lüzümsuz sorular sorduğunu ?\n\nBen biliyorum artık neden böyle olduğunu\nBen biliyorum sadece neden böyle olduğunu\nBen biliyorum sanki neden bu böyle olmaz\nSen biliyor musun neden lüzümsuz sorular sorduğunu ?\n\nPes etmek yok.\nKaybetmiyoruz umudu.",
    "category": "sarki"
  },
  {
    "id": 1067,
    "title": "Gözlerime göz dikmiş milyarlarca akıl",
    "body": "Gözlerime göz dikmiş milyarlarca akıl\nNe yaptığıma değil neden yaptığıma bakın\nBana en ağır günahlardan bahsederken Allah\nBana biz bişey yapmadık demeyin sakın\n\nSözlerime sessizliğinizi bir revaymış gibi görüp \nSınavlarımda kadere ağlayarak ağlar örüp\nBeni son bir kez alnımdan öpüp\nAnneciğime kötü davranmayın sakın.\n\nSözlerime sessizliğinizi bir revaymış gibi görüp \nSınavlarımda kadere ağlayarak ağlar örüp\nBeni son bir kez alnımdan öpüp\nAnneciğime kötü davranmayın sakın.\n\nGözlerime göz dikmiş milyarlarca akıl\nNe yaptığıma değil neden yaptığıma bakın\nBana en ağır günahlardan bahsederken Allah\nBana biz bişey yapmadık demeyin sakın\n\nSözlerime sessizliğinizi bir revaymış gibi görüp \nSınavlarımda kadere ağlayarak ağlar örüp\nBeni son bir kez alnımdan öpüp\nAnneciğime kötü davranmayın sakın.\n\nSözlerime sessizliğinizi bir revaymış gibi görüp \nSınavlarımda kadere ağlayarak ağlar örüp\nBeni son bir kez alnımdan öpüp\nAnneciğime kötü davranmayın sakın.",
    "category": "sarki"
  },
  {
    "id": 1068,
    "title": "O aslında herşey ama herkesten farklı",
    "body": "O aslında herşey ama herkesten farklı\nNe kadar güzel bu yürek hep seninle attı\nAffet beni çok sevdim bırakıp gidemedim\nDinlemedim hiç seni , silemedim\n\nAşk için yaptığım bütün fedakarlıkları\nKaybettiğinde artık ruhuma inancını\nSenin yazdığım bütün şarkıları\nAylar senelerce düşün aramızdaki farkları\n\nAslında bende biraz senin gibiyim\nBazen kilitli bazen mühürlü kalemlerim\nSen giderken uzaklara bağlıydı benim ellerim\nBen hiç kimseyi senin kadar sevmedim",
    "category": "sarki"
  },
  {
    "id": 1069,
    "title": "Tam sırası",
    "body": "Karanlıktan biraz daha sonra.\nIşıkların sonsuzca var olduğu bi sonda\nNe kadar da kalabalığız değil mi hepimiz ?\nKimsin sen orda !\n\nNeden dinledin sana her söyleneni ?\nNerden geldin söyle yerin yurdun neresi ?\nKime inandın tanıyor musun herkesi ?\nNe işin var burda ?\nHa ?\nHa ?\n\nNeden dinledin sana her söyleneni ?\nNerden geldin söyle yerin yurdun neresi ?\nKime inandın tanıyor musun herkesi ?\nNe işin var burda ?\nHa ?\nHa ?\n\nKimse anlamamış olan biteni sende sorma\nGülerken ağla ağlarken gül ama yorma\nKoştur deli gibi sakın yerinde de durma\nBu çılgınlığın tam sırası\n\nKimse anlamamış olan biteni sende sorma\nGülerken ağla ağlarken gül ama yorma\nKoştur deli gibi sakın yerinde de durma\nBu garip yer hem öncesi hem sonrası\n\nNeden dinledin sana her söyleneni ?\nNerden geldin söyle yerin yurdun neresi ?\nKime inandın tanıyor musun herkesi ?\nNe işin var burda ?\nHa ?\nHa ?\n\nNeden dinledin sana her söyleneni ?\nNerden geldin söyle yerin yurdun neresi ?\nKime inandın tanıyor musun herkesi ?\nNe işin var burda ?\nHa ?\nHa ?",
    "category": "sarki"
  },
  {
    "id": 1070,
    "title": "Birşeyleri yanyana getirmedin mi melekken ?",
    "body": "Birşeyleri yanyana getirmedin mi melekken ?\nŞimdi koca Dünya'da nerelerden mesulsün ?\nAz kalınca bitirmeye , en sonuna gelirken\nÇok mu zordu anlaması , neden başka düşünsün ?\n\nÖncesinde kolaydı , günler çaldık felekten\nSonra kaybolunca neden tek bir usulsün ?\nSona gelirken başa dönüp dönüp yerimizde sayarken\nGörmediğin o ışık , gelip sana mı dönüşsün ?",
    "category": "sarki"
  },
  {
    "id": 1071,
    "title": "Bugün o gün !",
    "body": "Bugün o gün !\nDedi sana biri sandığın o içindeki sesin sesi\nBu seferki sana..\nGerçek mi hissi , olacak mı hepsi ?\nBu kadar mı resmi ?\nÇiçekler ..\n\nSana bu günü yazmam mı demiştim ?\nSana bu ömrü verdim ya\nKeşkelerim yok değil de\nSen kurtardın beni bu dertten , \nTeşekkürler.",
    "category": "sarki"
  },
  {
    "id": 1072,
    "title": "Yine daha yakın kelimeler boğazıma dilimden daha çok",
    "body": "Yine daha yakın kelimeler boğazıma dilimden daha çok\nBöylesi ne görüldü ne duyuldu ve de eşi benzeri yok\nAllahım al canımı desem Dünya var mevzu bahis\nSenin için oluyor bunlar bunu da aklına sok\n\nBana ne vaad edildi biliyor musun ey insan\nÇile , dert , keder , acı , şok , fizan\nElimden gelse bir kaşık suda boğabilecekken şeytanı\nBoyun eymem buna , buda Allah'ın 2 planı\n\nBana bir ömür sessizlik hakkı doğduğunda\nVe beklenilen olup güneş farklı doğduğunda\nBir anneden son bir melek doğduğunda\nYetişin imdadıma\nRuhum yardım arıyor.",
    "category": "diger"
  },
  {
    "id": 1073,
    "title": "Yeniden başlamak için bu yarışa",
    "body": "Yeniden başlamak için bu yarışa\nBarışmak lazımdı aşkla alışa alışa\nKelimeler seçmek galibiyetin ilk adımına\nSana bir fincan çay\nBana bir fincan kahve\n\nOldu mu bu sefer diye sevindim vay be\nGönlümdeki pay ve başıma gelen bu olay heyt !\nPes ettim dediğim yerde tutup kaldırdığın yerden beni",
    "category": "diger"
  },
  {
    "id": 1074,
    "title": "Koşmak istiyorum sana bir denizin üstünden",
    "body": "Koşmak istiyorum sana bir denizin üstünden\nŞiirler ve şarkılar anlatırlar seni sana göğsümden\nBelki de binlerce kez yeniden doğarken\nNeden bu çiçek büyümeden solsun ?",
    "category": "diger"
  },
  {
    "id": 1075,
    "title": "Hiçbir şey görüldüğü gibi değil",
    "body": "Hiçbir şey görüldüğü gibi değil\nGözlerimizi kapatalım en iyisi",
    "category": "diger"
  }
];
