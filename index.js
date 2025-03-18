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
]



  let recipes = {
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

  }















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