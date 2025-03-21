let foods = [
  "Mantı",
  "Börek",
  "Hamburger",
  "Schnitzel",
  "Falafel",
  "Soğan Dolması", 
  "Ekşili Köfte",
  "Mücver",
  "Patates Keki",
  "Tavuklu Pilav",
  "Özbek Pilavı",
  "Mantarlı Bulgur Pilavı",
  "Tavuk Kavurma",
  "Tavuk Kapama",
  "Tavuk Kapama",
  "Köfte",
  "Bolognese Makarna",
  "Lazanya",
  "Fırında Köfte",
  "Arnavut Ciğeri",
  "Fırında Makarna",
  "Zeytinyağlı Biber Dolması",
  "Zeytinyağlı Kabak Yemeği",
  "Kremalı Tavuk",
  "Paçanga Böreği",
  "Kapuska",
  "Hamsi Buğulama",
  "Kağıtta Levrek",
  "Fırında Somon",
  "Peynirli Cevizli Erişte",
  "Arap Tava",
  "Orman Kebabı",
  "Kağıt Kebabı",
  "Kuru Dolma",
  "Erişteli Yeşil Mercimek",
  "Zeytinyağlı Kereviz",
]



  let recipes = {

"Zeytinyağlı Kereviz" : `
<span class="poppins-medium-italic">1. Kerevizleri Hazırla</span> 2 adet kerevizi soyup, dilimleyin ve limonlu suda kararmaması için bekletin.<br><br>

<span class="poppins-medium-italic">2. Soğanı Kavur</span> 1 soğanı ince doğrayıp, 3 yemek kaşığı zeytinyağında kavurun.<br><br>

<span class="poppins-medium-italic">3. Kereviz ve Diğer Malzemeleri Ekle</span> Kerevizleri, 1 havucu rendelenmiş, 1 patatesi doğranmış şekilde ekleyin. Üzerine 1 su bardağı su, tuz ve karabiber ilave edin.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Kapağını kapatıp kısık ateşte 30-35 dakika pişirin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Soğuduktan sonra soğuk veya ılık servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🥕🍽️</span>`,

"Erişteli Yeşil Mercimek" : `
<span class="poppins-medium-italic">1. Mercimeği Haşla</span> 1 su bardağı yeşil mercimeği bol suda haşlayıp süz.<br><br>

<span class="poppins-medium-italic">2. Erişteyi Kavur</span> Bir tavada 1 yemek kaşığı tereyağında 1 su bardağı erişteyi kavur.<br><br>

<span class="poppins-medium-italic">3. Mercimek ve Baharatları Ekle</span> Haşlanmış mercimeği tavaya ekleyip, tuz, karabiber, pul biber ve kimyon ekleyerek karıştır.<br><br>

<span class="poppins-medium-italic">4. Su ve Pişirme</span> Üzerine 1 su bardağı sıcak su ilave edip, kısık ateşte 10-15 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍛🍽</span>`,

"Kuru Dolma" : `
<span class="poppins-medium-italic">1. İç Harcı Hazırla</span> 1 su bardağı pirinci yıkayıp süz, 1 soğanı ince doğra ve 2 yemek kaşığı zeytinyağında kavur. Üzerine 1 yemek kaşığı salça ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">2. Baharatları Ekleyin</span> Pirinci ekleyip 2 su bardağı su, tuz, karabiber, pul biber, tarçın, kuru nane ve şeker ekleyip karıştır. Ocağın altını kapatıp 1 tutam doğranmış maydanoz ekleyin.<br><br>

<span class="poppins-medium-italic">3. Kuru Yapraksız Dolma</span> Kuru dolma yapraklarını sıcak suyla 10 dakika bekletip yumuşatın, iç harcını içine doldurun.<br><br>

<span class="poppins-medium-italic">4. Tencereye Yerleştir</span> Dolmaları tencereye sıralayın, üzerlerine 1 yemek kaşığı tereyağı ekleyin ve üzerini geçecek kadar su ilave edin.<br><br>

<span class="poppins-medium-italic">5. Pişir</span> Kapağını kapatıp kısık ateşte 30-35 dakika pişirin.<br><br>

<span class="poppins-medium-italic">6. Servis Et</span> Sıcak olarak yoğurt ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍚🌿</span>`,

"Kağıt Kebabı" : `
<span class="poppins-medium-italic">1. Eti Hazırla</span> 400 g kuşbaşı eti tuz, karabiber, pul biber ile tatlandır. 1 soğanı ve 1 yeşil biberi doğrayıp etle karıştır.<br><br>

<span class="poppins-medium-italic">2. Sebzeleri Hazırlayın</span> 2 domatesi ve 1 havucu doğrayıp et karışımına ekleyin.<br><br>

<span class="poppins-medium-italic">3. Kağıda Sar</span> Fırın kağıdına eti ve sebzeleri yerleştirin. Kağıdı iyice kapatarak paket yapın.<br><br>

<span class="poppins-medium-italic">4. Fırında Pişir</span> 180°C önceden ısıtılmış fırında 40-45 dakika pişirin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Fırından çıkarıp sıcak olarak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍖🍅</span>`,  

"Orman Kebabı" : `
<span class="poppins-medium-italic">1. Eti Kavur</span> 400 g kuşbaşı eti tencereye al, suyunu salıp çekene kadar kavur. Üzerine 2 yemek kaşığı sıvı yağ ekleyip biraz daha kavur.<br><br>

<span class="poppins-medium-italic">2. Sebzeleri Ekle</span> 1 soğanı yemeklik doğrayıp ekle. 2 havuç ve 2 patatesi küp doğrayıp tencereye al, 2-3 dakika kavur.<br><br>

<span class="poppins-medium-italic">3. Salça ve Baharatları Kat</span> 1 yemek kaşığı salça, tuz, karabiber ve kekik ekleyip karıştır. Üzerini geçecek kadar sıcak su ekleyip pişmeye bırak.<br><br>

<span class="poppins-medium-italic">4. Bezelye Ekleyip Pişir</span> 1 su bardağı bezelyeyi ekleyip sebzeler ve et iyice yumuşayana kadar yaklaşık 30 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Sıcak olarak pilav veya ekmek eşliğinde servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🥩🥕🥔</span>`,

"Arap Tava" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> 300 g kıymayı bir kaba al. 2 domates, 2 biber, 1 soğan ve 2 diş sarımsağı küçük doğra.<br><br>

<span class="poppins-medium-italic">2. Harcı Karıştır</span> Kıyma, doğranmış sebzeler, 2 yemek kaşığı zeytinyağı, tuz, karabiber, pul biber ve kimyonu karıştır.<br><br>

<span class="poppins-medium-italic">3. Tepsiye Yay</span> Karışımı fırın kabına eşit şekilde yay. Üzerine birkaç domates ve biber dilimi ekle.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> 180°C önceden ısıtılmış fırında yaklaşık 30-35 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Fırından alıp yanında sıcak lavaş veya pilav ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍅🥩🔥</span>`,

"Peynirli Cevizli Erişte" : `
<span class="poppins-medium-italic">1. Erişteyi Haşla</span> Bir tencerede su kaynat, tuz ekleyip 2 su bardağı erişteyi ekle. 8-10 dakika haşlayıp süz.<br><br>

<span class="poppins-medium-italic">2. Yağda Kavur</span> Bir tavada 2 yemek kaşığı tereyağını erit, erişteyi ekleyip hafifçe kavur.<br><br>

<span class="poppins-medium-italic">3. Ceviz ve Peyniri Ekle</span> 1 çay bardağı iri dövülmüş cevizi ve 1 su bardağı rendelenmiş beyaz peynir veya lor peynirini ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Üzerine isteğe bağlı maydanoz serperek sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🧀🌰🍝</span>`,

"Fırında Somon" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> 2 dilim somon filetoyu yıka ve kurula. 1 limonu ince dilimle, 2 diş sarımsağı doğra.<br><br>

<span class="poppins-medium-italic">2. Sosu Hazırla</span> Yarım çay bardağı zeytinyağına tuz, karabiber, pul biber ve doğranmış sarımsağı ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">3. Somonu Baharatla</span> Somonları fırın tepsisine al, hazırladığın sosu üzerine gezdir. Üzerine limon dilimleri yerleştir.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> 180°C önceden ısıtılmış fırında yaklaşık 20-25 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Fırından alıp yanında haşlanmış sebzeler veya yeşilliklerle sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🐟🍋</span>`,

"Kağıtta Levrek" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> 2 adet levrek filetoyu yıka ve kurula. 1 soğanı halka, 1 domatesi ince dilimle. 1 limonu ince kes.<br><br>

<span class="poppins-medium-italic">2. Balığı Baharatla</span> Levrekleri tuz, karabiber, pul biber ve yarım çay bardağı zeytinyağı ile ov.<br><br>

<span class="poppins-medium-italic">3. Pişirme Kağıdına Yerleştir</span> Fırın kağıdına soğanları yay, üzerine balıkları koy. Üzerine domates ve limon dilimleri ekle. İsteğe bağlı sarımsak ve defne yaprağı ekleyebilirsin.<br><br>

<span class="poppins-medium-italic">4. Paketle ve Pişir</span> Kağıdı kapatıp kenarlarını sıkıca katla. 180°C fırında 25-30 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Fırından alıp kağıdı aç, yanında yeşilliklerle sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🐟🍋</span>`,

"Hamsi Buğulama" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> 500 g temizlenmiş hamsiyi yıka, 1 soğanı halka doğra, 1 domatesi dilimle, 1 limonu ince kes.<br><br>

<span class="poppins-medium-italic">2. Tepsiye Diz</span> Fırın kabına soğanları yay, üzerine hamsileri diz. Domates ve limon dilimlerini ekle.<br><br>

<span class="poppins-medium-italic">3. Sosu Hazırla</span> Yarım çay bardağı zeytinyağı, tuz, karabiber ve pul biberi karıştırıp hamsilerin üzerine gezdir.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Önceden 180°C ısıtılmış fırında üzeri kızarana kadar yaklaşık 20 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Fırından çıkarıp sıcak olarak yanında roka ve limon ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🐟🍋</span>`,

"Kapuska" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> Yarım orta boy lahanayı ince doğra, 1 soğanı yemeklik doğra.<br><br>

<span class="poppins-medium-italic">2. Soğanı Kavur</span> Bir tencerede 2 yemek kaşığı sıvı yağ ile soğanı pembeleşene kadar kavur. 1 yemek kaşığı salça ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">3. Lahanayı Pişir</span> Doğranmış lahanayı ekle, tuz, karabiber ve pul biber serpip karıştır. Üzerine 1 su bardağı sıcak su ekleyip kapağını kapat.<br><br>

<span class="poppins-medium-italic">4. Kısık Ateşte Pişir</span> Lahanalar yumuşayana kadar 20-25 dakika pişir. İsteğe bağlı kıyma ekleyebilirsin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Ilındıktan sonra yoğurt ile sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🥬🍽️</span>`,

"Mantı" : `
<span class="poppins-medium-italic">1. Hamuru Hazırla</span> 2 su bardağı un, 1 yumurta, tuz ve azar azar su ekleyerek yumuşak bir hamur yoğur.<br><br>

<span class="poppins-medium-italic">2. Hamuru Aç</span> Hamuru ince bir şekilde açıp, küçük kareler şeklinde kes.<br><br>

<span class="poppins-medium-italic">3. İç Harcı Hazırla</span> 200 gram kıyma, 1 soğan, tuz ve baharatları karıştırarak iç harcı hazırla.<br><br>

<span class="poppins-medium-italic">4. Mantıları Yap</span> Hamur karelerine iç harç koyup, kenarlarını kapatıp yarım ay şekli ver.<br><br>

<span class="poppins-medium-italic">5. Kaynar Suda Haşla</span> Mantıları kaynar tuzlu suda 10-15 dakika haşla.<br><br>

<span class="poppins-medium-italic">6. Sos Hazırla</span> Bir tavada tereyağını eritin, üzerine yoğurt ve sarımsak ekleyip karıştırın.<br><br>

<span class="poppins-medium-italic">7. Mantıları Servis Et</span> Haşladığınız mantıları tabağa alıp, üzerine yoğurtlu sosu dökün.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍽️</span>`,

"Börek" : `
<span class="poppins-medium-italic">1. Yufkayı Hazırla</span> Yufkaları tezgaha ser, 1-2 adet yufkayı alt alta yerleştir.<br><br>

<span class="poppins-medium-italic">2. İç Harcı Hazırla</span> Bir kasede beyaz peynir, maydanoz ve tuzu karıştırarak iç harcı oluştur.<br><br>

<span class="poppins-medium-italic">3. Yufkayı Doldur</span> Yufkaların ortasına hazırladığınız iç harcı koyup, yufkayı rulo şeklinde sar.<br><br>

<span class="poppins-medium-italic">4. Böreği Pişir</span> Böreği yağlı kağıt serili fırın tepsisine yerleştirip, üzerine yumurta sarısı sürüp, 180 derece fırında 30-40 dakika pişir.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🥐</span>`,

"Hamburger" : ` 
<span class="poppins-medium-italic">1. Kısım Hazırlığı</span> Hamburger ekmeğini ortadan kes, marulları ve domatesi dilimle.<br><br>

<span class="poppins-medium-italic">2. Köfteyi Hazırla</span> 500 gram kıymayı, tuz, karabiber, soğan ve baharatlarla yoğurup, yuvarlak köfteler yap.<br><br>

<span class="poppins-medium-italic">3. Köfteleri Pişir</span> Köfteleri tavada veya ızgarada her iki tarafı da iyice pişene kadar kızart.<br><br>

<span class="poppins-medium-italic">4. Hamburgeri Doldur</span> Hamburger ekmeğinin alt kısmına marul, pişmiş köfte, dilimlenmiş domates ve istediğiniz diğer malzemeleri yerleştir.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍔</span>`,

"Schnitzel" : `
<span class="poppins-medium-italic">1. Eti Hazırla</span> Tavuk veya dana etini ince dilimler halinde kes, et dövücüyle biraz incelt.<br><br>

<span class="poppins-medium-italic">2. Pane Karışımı Hazırla</span> Bir tabağa un, diğerine çırpılmış yumurta, bir diğerine galeta unu koy.<br><br>

<span class="poppins-medium-italic">3. Paneleme Yap</span> Eti önce una, sonra yumurtaya, en son galeta ununa bulayarak kapla.<br><br>

<span class="poppins-medium-italic">4. Kızart ve Servis Et</span> Bol sıvı yağda altın rengi olana kadar kızart. Kağıt havlu üzerine alıp fazla yağını süzdür, sıcak servis et.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍗</span>`,

"Falafel" : `
<span class="poppins-medium-italic">1. Harcı Hazırla</span> 2 su bardağı haşlanmış nohutu mutfak robotuna al. Üzerine 1 küçük soğan, 2 diş sarımsak, yarım demet maydanoz, 1 tatlı kaşığı kimyon, 1 çay kaşığı karabiber, 1 çay kaşığı tuz ve 2 yemek kaşığı un ekleyip çek.<br><br>

<span class="poppins-medium-italic">2. Şekil Ver</span> Hazırladığın harçtan küçük yuvarlak toplar yap ve hafifçe yassılaştır.<br><br>

<span class="poppins-medium-italic">3. Kızart</span> Bol ve kızgın sıvı yağda falafelleri altın rengi olana kadar kızart. Kağıt havlu üzerine alarak fazla yağını süzdür.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Falafelleri sıcak olarak yanında yoğurtlu sos veya tahin sos ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🌱</span>`,

"Soğan Dolması" : `
<span class="poppins-medium-italic">1. Soğanları Hazırla</span> Büyük boy soğanları ortadan kesmeden hafifçe soy. Kaynar suda 5-7 dakika haşlayarak yumuşat, ardından katmanlarını dikkatlice ayır.<br><br>

<span class="poppins-medium-italic">2. İç Harcı Hazırla</span> Bir kasede 1 su bardağı pirinç, 200 gram kıyma, 1 yemek kaşığı salça, tuz, karabiber ve baharatları karıştır.<br><br>

<span class="poppins-medium-italic">3. Soğanları Doldur</span> Hazırladığın iç harcı soğan katmanlarının içine koyup sar.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Tencereye yerleştirip, üzerine biraz su ve salçalı sos ekleyerek kısık ateşte 30-40 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Pişen dolmaları sıcak olarak yoğurt ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🧅</span>`,

"Ekşili Köfte" : `
<span class="poppins-medium-italic">1. Köfteyi Hazırla</span> Bir kasede 300 gram kıyma, 1 çay bardağı pirinç, 1 rendelenmiş soğan, tuz ve karabiberi karıştır. Köfte harcından küçük toplar yap.<br><br>

<span class="poppins-medium-italic">2. Köfteleri Unla Kapla</span> Hazırladığın köfteleri hafifçe una bulayarak bir tabağa diz.<br><br>

<span class="poppins-medium-italic">3. Sebzeleri Doğra</span> 1 havuç ve 1 patatesi küçük küpler halinde doğra.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Bir tencereye su koyup kaynat, içine doğranmış sebzeleri ekle. Ardından köfteleri ekleyerek 20-25 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Terbiyeyi Hazırla</span> Bir kasede 1 yumurta sarısı ve 1 yemek kaşığı limon suyunu çırp. Yemeğin suyundan birkaç kaşık ekleyip karıştır, ardından tencereye ekleyerek birkaç dakika daha pişir.<br><br>

<span class="poppins-medium-italic">6. Servis Et</span> Ekşili köfteyi sıcak olarak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍲</span>`,

"Mücver" : `
<span class="poppins-medium-italic">1. Kabakları Hazırla</span> 2-3 kabak rendele ve fazla suyunu sıkarak süz.<br><br>

<span class="poppins-medium-italic">2. Harcı Hazırla</span> Bir kasede rendelenmiş kabağa 2 yumurta, 3 yemek kaşığı un, 1 rendelenmiş soğan, yarım demet doğranmış dereotu ve maydanoz, tuz ve karabiber ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">3. Kızart</span> Bir tavada sıvı yağı ısıt, karışımdan kaşıkla alıp kızgın yağa bırak. Her iki tarafını da altın rengi olana kadar kızart.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Mücverleri kağıt havlu üzerine alıp fazla yağını süzdür. Yoğurt ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🥒</span>`,

"Patates Keki" : `
<span class="poppins-medium-italic">1. Patatesleri Hazırla</span> 4-5 adet patatesi haşlayıp soy, ardından rendeleyip fazla suyunu süz.<br><br>

<span class="poppins-medium-italic">2. Harcı Hazırla</span> Bir kasede rendelenmiş patates, 2 yumurta, 1 çay bardağı un, tuz, karabiber, 1 tatlı kaşığı kabartma tozu ve doğranmış dereotu ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">3. Pişir</span> Karışımı yağlanmış kek kalıbına dökün ve 180 derecede 30-40 dakika pişirin.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Patates kekini fırından çıkarıp soğumaya bırakın, ardından dilimleyip sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🥔</span>`,

"Tavuklu Pilav" : `
<span class="poppins-medium-italic">1. Tavuğu Hazırla</span> 2 adet tavuk butunu haşlayıp, etini didikleyerek ayır.<br><br>

<span class="poppins-medium-italic">2. Pilavı Kavur</span> 1 su bardağı pirinci yıkayıp süz, bir tencerede 2 yemek kaşığı tereyağını eritin. Pirinci ekleyip 2-3 dakika kavurun.<br><br>

<span class="poppins-medium-italic">3. Suyu Ekleyip Pişir</span> Üzerine 2 su bardağı tavuk suyu ve 1 su bardağı sıcak suyu ekleyin. Tuzunu ayarlayıp kısık ateşte suyunu çekene kadar pişirin.<br><br>

<span class="poppins-medium-italic">4. Tavuk ve Pilavı Karıştır</span> Pilav piştikten sonra, didiklediğiniz tavuk etini pilavın üzerine ekleyin. Karıştırarak bir süre demlenmesini bekleyin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Tavuklu pilavı sıcak olarak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍗🍚</span>`,

"Özbek Pilavı" : `
<span class="poppins-medium-italic">1. Eti Hazırla</span> 500 gram kuzu eti veya dana etini kuşbaşı doğrayın. Bir tencerede 2 yemek kaşığı sıvı yağda etleri kavurun.<br><br>

<span class="poppins-medium-italic">2. Sebzeleri Doğra</span> 2 adet havuç ve 1 büyük soğanı ince doğrayın. Etler kavrulduktan sonra soğanı ekleyip birkaç dakika daha kavurun, ardından havuçları ekleyin.<br><br>

<span class="poppins-medium-italic">3. Pilavı Hazırla</span> 2 su bardağı pirinci yıkayıp süzün. Sebzelerin üzerine ekleyip karıştırın, ardından 4 su bardağı sıcak suyu ve tuzunu ekleyin.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Tencerenin kapağını kapatıp kısık ateşte pirinçler suyunu çekene kadar 20-25 dakika pişirin.<br><br>

<span class="poppins-medium-italic">5. Demle ve Servis Et</span> Pilav piştikten sonra, tencerenin altını kapatıp 10 dakika dinlendirin. Sıcak olarak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍛</span>`,

"Mantarlı Bulgur Pilavı" : `
<span class="poppins-medium-italic">1. Mantarları Hazırla</span> 300 gram mantarı temizleyip, ince ince doğrayın.<br><br>

<span class="poppins-medium-italic">2. Soğanı Kavur</span> 1 adet soğanı yemeklik doğrayın ve 2 yemek kaşığı sıvı yağda pembeleşene kadar kavurun.<br><br>

<span class="poppins-medium-italic">3. Mantarları Ekleyip Pişir</span> Doğradığınız mantarları ekleyip, suyunu salıp çekene kadar kavurun.<br><br>

<span class="poppins-medium-italic">4. Bulguru Ekleyip Pişir</span> 1 su bardağı bulguru mantarlarla karıştırıp, üzerine 1.5 su bardağı sıcak su ve tuz ekleyin. Karıştırıp kısık ateşte bulgurlar suyunu çekene kadar pişirin.<br><br>

<span class="poppins-medium-italic">5. Demle ve Servis Et</span> Pilav piştikten sonra 10 dakika demlenmesini bekleyin. Sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍄</span>`,

"Tavuk Kavurma" : `
<span class="poppins-medium-italic">1. Tavuğu Hazırla</span> 500 gram tavuk göğsünü veya butunu kuşbaşı doğrayın.<br><br>

<span class="poppins-medium-italic">2. Soğanı Kavur</span> 1 adet soğanı yemeklik doğrayın ve geniş bir tavada 2 yemek kaşığı sıvı yağ ile pembeleşene kadar kavurun.<br><br>

<span class="poppins-medium-italic">3. Tavukları Ekleyip Pişir</span> Doğradığınız tavukları tavanın içine ekleyin, tuz ve karabiberle tatlandırıp, tavuklar suyunu salıp çekene kadar pişirin.<br><br>

<span class="poppins-medium-italic">4. Baharatları Ekleyin</span> 1 tatlı kaşığı kekik ve 1 tatlı kaşığı pul biber (isteğe bağlı) ekleyin, karıştırın ve kısık ateşte 10-15 dakika pişirmeye devam edin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Tavuk kavurmayı sıcak olarak, pilav veya salata ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍗</span>`,

"Tavuk Kapama" : `
<span class="poppins-medium-italic">1. Tavuğu Hazırla</span> 1 adet tavuk bütün olarak alın ve iyice temizleyin. Tuz, karabiber ve 1 tatlı kaşığı kekik ile baharatlayın.<br><br>

<span class="poppins-medium-italic">2. Sebzeleri Doğra</span> 2 adet soğanı, 2 havucu ve 3 diş sarımsağı doğrayın. Bir tavada 2 yemek kaşığı tereyağında soğan ve havuçları soteleyin.<br><br>

<span class="poppins-medium-italic">3. Tavuğu Pişir</span> Bir fırın kabına tavuk, doğranmış sebzeleri, 1 su bardağı sıcak suyu ve 1 yemek kaşığı tereyağını ekleyin. Üzerine alüminyum folyo kapatıp 180°C fırında 1-1.5 saat pişirin.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Tavuk iyice piştikten sonra fırından çıkarın, dinlendirin ve sıcak olarak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍗</span>`,

"Tavuk Kapama" : `
<span class="poppins-medium-italic">1. Tavukları Haşla</span> Uygun büyüklükte bir tencereye tavuk parçalarını, dörde bölünmüş bir soğanı ve 2 defne yaprağını ekleyin. Üzerine su ekleyip kaynadıktan sonra tuz ilave edip 30 dakika haşlayın.<br><br>

<span class="poppins-medium-italic">2. Pirinci Hazırla</span> Pirinci bol suyla yıkayıp, sıcak su ve tuz ekleyip 15 dakika bekletin, sonra suyunu süzüp durulayın.<br><br>

<span class="poppins-medium-italic">3. Pilavı Kavur</span> Taze soğan ve tereyağında pirinci kavurun, tuz ve karabiber ekleyin.<br><br>

<span class="poppins-medium-italic">4. Fırınla</span> Kavrulmuş pilavı fırın tepsisine yayın, tavukları yerleştirip, tavuk suyunu gezdirin. 150°C fırında 35-40 dakika pişirin. Son 10 dakikada sıcaklığı 190-200°C’ye çıkarın.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Sıcak olarak servis yapın, üzerine taze yeşillik serpebilirsiniz.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍗🍚</span>`,

"Köfte" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> 500 gram kıymaya 1 adet rendelenmiş soğan, 1 yumurta, 1 çay bardağı galeta unu, tuz, karabiber ve isteğe bağlı baharatlar ekleyin.<br><br>

<span class="poppins-medium-italic">2. Köfteyi Yoğur</span> Tüm malzemeleri iyice yoğurun, karışımdan ceviz büyüklüğünde parçalar alıp şekil verin.<br><br>

<span class="poppins-medium-italic">3. Kızart</span> Bir tavada sıvı yağı ısıtın ve köfteleri her iki tarafı altın rengi olana kadar kızartın.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Köfteleri kağıt havlu üzerine alıp fazla yağını süzdürün. Sıcak olarak servis yapın.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍽️</span>`,

"Bolognese Makarna" : `
<span class="poppins-medium-italic">1. Sosu Hazırla</span> Bir tavada 2 yemek kaşığı sıvı yağda 1 adet doğranmış soğan ve 2 diş doğranmış sarımsağı soteleyin. Ardından 300 gram kıymayı ekleyin ve etler kahverengileşene kadar kavurun.<br><br>

<span class="poppins-medium-italic">2. Domates Sosunu Ekleyin</span> 1 kutu doğranmış domates (veya 2 adet taze domates rendesi) ekleyin. 1 tatlı kaşığı tuz, karabiber ve 1 tatlı kaşığı kekik ile tatlandırın. Sosu kısık ateşte 20-25 dakika pişirin.<br><br>

<span class="poppins-medium-italic">3. Makarna Haşla</span> Ayrı bir tencerede tuzlu suda makarnayı paket talimatlarına göre haşlayın. Haşlanan makarnayı süzüp, biraz sıvı yağ ekleyin.<br><br>

<span class="poppins-medium-italic">4. Sos ve Makarna Karıştır</span> Haşlanmış makarnayı, hazırladığınız bolognese sosuyla karıştırın ve birkaç dakika birlikte pişirin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Bolognese makarnayı sıcak olarak, üzerine rendelenmiş parmesan peyniriyle servis yapın.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍝</span>`,

"Lazanya" : `
<span class="poppins-medium-italic">1. Kıymalı Sosu Hazırla</span> Bir tavada 2 yemek kaşığı sıvı yağda 1 adet doğranmış soğan ve 2 diş sarımsağı soteleyin. Ardından 500 gram kıymayı ekleyip kavurun. 1 kutu doğranmış domates ve 1 tatlı kaşığı tuz, karabiber, kekik ekleyip 20-25 dakika pişirin.<br><br>

<span class="poppins-medium-italic">2. Beşamel Sosu Hazırla</span> Bir tencerede 2 yemek kaşığı tereyağını eritin. Üzerine 2 yemek kaşığı un ekleyip karıştırarak 1-2 dakika kavurun. Ardından yavaşça 2 su bardağı süt ekleyin ve sürekli karıştırarak koyu kıvam alana kadar pişirin. Tuz, karabiber ve muskat ekleyin.<br><br>

<span class="poppins-medium-italic">3. Lazanyayı Kat Kat Yerleştir</span> Fırın kabına bir kat lazanya yaprağını yerleştirin. Üzerine kıymalı sos, beşamel sos ve rendelenmiş mozzarella peynirinden serpiştirin. Bu işlemi birkaç kat yaparak devam edin.<br><br>

<span class="poppins-medium-italic">4. Fırınla</span> 180°C fırında yaklaşık 30-35 dakika pişirin. Üzeri altın rengini alıp güzelce kızarana kadar pişirmeye devam edin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Lazanyayı fırından çıkarın, birkaç dakika dinlendirdikten sonra dilimleyerek sıcak servis yapın.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍽️</span>`,

"Fırında Köfte" : `
<span class="poppins-medium-italic">1. Köfteyi Hazırla</span> 500 gram kıymaya 1 adet rendelenmiş soğan, 1 dilim bayat ekmek (ufalanmış), 1 yumurta, tuz, karabiber ve kekik ekleyin. Karıştırıp, yoğurun ve köfte şekli verin.<br><br>

<span class="poppins-medium-italic">2. Köfteleri Kızart</span> Bir tavada sıvı yağı ısıtın ve köfteleri her iki tarafı altın rengi olana kadar kızartın. Kızaran köfteleri kağıt havluya alın.<br><br>

<span class="poppins-medium-italic">3. Sosu Hazırla</span> Bir tavada 2 yemek kaşığı sıvı yağda 1 adet doğranmış soğanı soteleyin. Üzerine 2 yemek kaşığı domates salçası ekleyip karıştırın. Ardından 2 su bardağı suyu ve tuzu ekleyin, kaynamaya bırakın.<br><br>

<span class="poppins-medium-italic">4. Fırınla</span> Bir fırın kabına köfteleri yerleştirin, üzerine hazırladığınız domates sosunu dökün. 180°C fırında 20-25 dakika pişirin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> İzmir köfteyi sıcak olarak, yanında pilav veya yoğurt ile servis yapın.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍽️</span>`,

"Arnavut Ciğeri" : `
<span class="poppins-medium-italic">1. Ciğeri Hazırla</span> 500 gram dana ciğerini ince dilimler halinde doğrayın ve tuz, karabiber ile tatlandırın.<br><br>

<span class="poppins-medium-italic">2. Unlu Karışımı Hazırla</span> Bir kasede 1 su bardağı un, 1 tatlı kaşığı tuz ve 1 tatlı kaşığı karabiberi karıştırın. Ciğer dilimlerini bu unlu karışıma bulayın.<br><br>

<span class="poppins-medium-italic">3. Kızart</span> Bir tavada bol sıvı yağı ısıtın. Ciğer dilimlerini tek tek tavaya koyun ve her iki tarafı altın rengi olana kadar kızartın.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Kızaran ciğerleri kağıt havluya alıp fazla yağını süzdürün. Sıcak olarak, yanında soğan ve ayran ile servis yapın.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍽️</span>`,

"Fırında Makarna" : `
<span class="poppins-medium-italic">1. Makarna Haşla</span> Geniş bir tencerede su kaynat, tuz ekleyip 1 paket (yaklaşık 500 g) makarnayı haşla. Haşlandıktan sonra süz ve bir kenara al.<br><br>

<span class="poppins-medium-italic">2. Beşamel Sos Hazırla</span> Bir tencerede 2 yemek kaşığı tereyağını erit. Üzerine 2 yemek kaşığı un ekleyip kokusu çıkana kadar kavur. Yavaşça 2,5 su bardağı süt ekleyerek sürekli karıştır. Tuz, karabiber ekleyip koyulaşana kadar pişir.<br><br>

<span class="poppins-medium-italic">3. Karıştır ve Tepsiye Yay</span> Haşlanmış makarnayı beşamel sos ile karıştır. Yağlanmış fırın kabına eşit şekilde yayın.<br><br>

<span class="poppins-medium-italic">4. Peynir Ekle ve Fırınla</span> Üzerine bolca rendelenmiş kaşar peyniri serpin. 180°C önceden ısıtılmış fırında üzeri kızarana kadar (yaklaşık 20-25 dakika) pişirin.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Fırından çıkarıp 5 dakika dinlendirin, dilimleyerek sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🧀🍽️</span>`,

"Zeytinyağlı Biber Dolması" : `
<span class="poppins-medium-italic">1. İç Harcı Hazırla</span> İnce doğranmış 2 soğanı yarım çay bardağı zeytinyağında kavur. 1 rendelenmiş domates ekleyip karıştır. Yıkanmış 1 su bardağı pirinci ekleyerek hafifçe kavur.<br><br>

<span class="poppins-medium-italic">2. Baharatları Ekle</span> Dolmalık fıstık, kuş üzümü, tarçın, kuru nane, karabiber, toz şeker ve tuz ekleyip karıştır. Ocaktan alıp doğranmış maydanoz ve taze nane ekleyin.<br><br>

<span class="poppins-medium-italic">3. Biberleri Doldur</span> Dolmalık biberlerin kapaklarını aç, yıka ve iç harcı fazla sıkıştırmadan doldur. Üzerlerine küçük doğranmış domates kapak yap.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Tencereye diz, yarım çay bardağı zeytinyağı gezdir ve biberlerin yarısına gelecek kadar su ekle. Kapağı kapatıp 20-25 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Ilındıktan sonra zeytinyağlı biber dolmalarını soğuk veya ılık servis et.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🌿</span>`,

"Zeytinyağlı Kabak Yemeği" : `
<span class="poppins-medium-italic">1. Malzemeleri Hazırla</span> 1 adet soğanı yemeklik doğra, 3 kabak ve 1 domatesi küp küp kes.<br><br>

<span class="poppins-medium-italic">2. Soğanı Kavur</span> Bir tencerede yarım çay bardağı zeytinyağında doğranmış soğanı pembeleşene kadar kavur. Üzerine domatesi ekleyip karıştır.<br><br>

<span class="poppins-medium-italic">3. Kabakları Ekle</span> Doğranmış kabakları tencereye ekle. Tuz, karabiber ve 1 tatlı kaşığı toz şeker ekleyerek karıştır.<br><br>

<span class="poppins-medium-italic">4. Pişir</span> Üzerine 1 çay bardağı su ekleyip kapağı kapat. Orta ateşte kabaklar yumuşayana kadar, yaklaşık 20 dakika pişir.<br><br>

<span class="poppins-medium-italic">5. Servis Et</span> Ilındıktan sonra üzerine ince doğranmış dereotu serpip servis et.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🌿</span>`,

"Kremalı Tavuk" : `
<span class="poppins-medium-italic">1. Tavukları Hazırla</span> 500 g tavuk göğsünü jülyen veya küp şeklinde doğra. Tuz ve karabiber ile tatlandır.<br><br>

<span class="poppins-medium-italic">2. Tavukları Sotele</span> Bir tavada 2 yemek kaşığı sıvı yağ ısıt, tavukları ekleyip yüksek ateşte suyunu salıp çekene kadar sotele.<br><br>

<span class="poppins-medium-italic">3. Kremalı Sos Hazırla</span> Tavuklara 200 ml krema ekle, isteğe bağlı 1 diş ezilmiş sarımsak ve biraz muskat rendesi kat. Kısık ateşte 5-7 dakika pişir.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Üzerine ince doğranmış maydanoz veya rendelenmiş parmesan ekleyerek sıcak servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🍗🥛</span>`,

"Paçanga Böreği" : `
<span class="poppins-medium-italic">1. İç Harcı Hazırla</span> 150 g pastırmayı ince doğra. 1 adet domatesi küp küp doğrayıp 1 su bardağı rendelenmiş kaşar peyniri ile karıştır.<br><br>

<span class="poppins-medium-italic">2. Börekleri Hazırla</span> Yufkayı üçgen şekilde kes. İç harçtan koyup kenarlarını katlayarak sigara böreği gibi sar.<br><br>

<span class="poppins-medium-italic">3. Kızart</span> Bir tavada sıvı yağı ısıt. Börekleri altın rengi olana kadar kızartıp kağıt havluya al.<br><br>

<span class="poppins-medium-italic">4. Servis Et</span> Sıcak olarak, yanında yoğurt veya ayran ile servis yap.<br><br>

<span class="poppins-medium-italic">Afiyet olsun! 🧀🥓</span>`,

  }










  changeFood(); 




  document.querySelector("button").addEventListener("click", changeFood);

  function changeFood() {
      let chooseFood = Math.floor(Math.random() * foods.length);
      let nePisirsem = foods[chooseFood];
      nePisirsemLower = nePisirsem.charAt(0).toLowerCase() + nePisirsem.slice(1).replace(/\s+/g, "");
  
      document.querySelector("img").setAttribute("src", "./assets/images/" + nePisirsemLower + ".jpg");
  
      document.querySelector("h2").textContent = nePisirsem;
      
      // **Tarif içeriğini ekle**
      document.querySelector("#tarif").innerHTML = recipes[nePisirsem] || "Tarif bulunamadı.";
  }