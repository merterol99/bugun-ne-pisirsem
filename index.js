let foods = ["Makarna",
  "Yumurta",
  "Pilav",
  "Mantı",
  "Börek",
  "Kek",
  "Cheesecake",
  "Hamburger"]



  let recipes = {

    "Makarna": `
1. Makarna Haşla – Bir tencerede su kaynat, biraz tuz ekleyip makarnayı ekle. Paketteki süreye göre haşla, sonra süz.<br><br>

2. Salçalı Sos Hazırla – Bir tavada biraz sıvı yağ ısıt, 1-2 yemek kaşığı salça ekleyip kavur. Üzerine biraz tuz ve baharat (isteğe bağlı pul biber, karabiber) ekle. <br><br>

3. Makarna ve Sosu Karıştır – Haşlanmış makarnayı tavaya ekleyip iyice karıştır. Birkaç dakika kısık ateşte pişir.<br><br>

4. Servis Et – İsteğe bağlı rendelenmiş peynir ekleyerek sıcak servis yap.<br><br>

Afiyet olsun! 😋`,

"Yumurta" : `
1. Yumurtayı Kır – Bir kaba 1 veya 2 yumurta kır.<br><br>
2. Çırp – Yumurtaları bir çatal veya çırpıcı ile iyice çırp.<br><br>
3. Tavada Pişir – Bir tavada biraz sıvı yağ ısıt, çırpılmış yumurtayı dök. Karıştırarak pişir.<br><br>
4. Servis Et – Yumurtalar piştikten sonra tabağa alıp sıcak servis yap.<br><br>

Afiyet olsun! 🍳
`,

"Pilav" : `
1. Pirinci Yıka – 1 su bardağı pirinci birkaç su ile yıkayıp süz.<br><br>

2. Yağda Kavur – Bir tencerede 1-2 yemek kaşığı sıvı yağ ısıt, yıkanmış pirinci ekleyip 2-3 dakika kavur.<br><br>

3. Su Ekle ve Pişir – Üzerine 1.5 su bardağı sıcak su ekle, tuzunu da ayarla. Kısık ateşte suyunu çekene kadar pişir.<br><br>

4. Demle – Pilav piştikten sonra tencerenin altını kapatıp, 10 dakika demlemeye bırak.<br><br>

Afiyet olsun! 🍚
`,



"Mantı" : `
1. Hamuru Hazırla – 2 su bardağı un, 1 yumurta, tuz ve azar azar su ekleyerek yumuşak bir hamur yoğur.<br><br>

2. Hamuru Aç – Hamuru ince bir şekilde açıp, küçük kareler şeklinde kes.<br><br>

3. İç Harcı Hazırla – 200 gram kıyma, 1 soğan, tuz ve baharatları karıştırarak iç harcı hazırla.<br><br>

4. Mantıları Yap – Hamur karelerine iç harç koyup, kenarlarını kapatıp yarım ay şekli ver.<br><br>

5. Kaynar Suda Haşla – Mantıları kaynar tuzlu suda 10-15 dakika haşla.<br><br>

6. Sos Hazırla – Bir tavada tereyağını eritin, üzerine yoğurt ve sarımsak ekleyip karıştırın.<br><br>

7. Mantıları Servis Et – Haşladığınız mantıları tabağa alıp, üzerine yoğurtlu sosu dökün.<br><br>

Afiyet olsun! 🍽️
`,



"Börek" : ` 
1. Yufkayı Hazırla – Yufkaları tezgaha ser, 1-2 adet yufkayı alt alta yerleştir.<br><br>

2. İç Harcı Hazırla – Bir kasede beyaz peynir, maydanoz ve tuzu karıştırarak iç harcı oluştur.<br><br>

3. Yufkayı Doldur – Yufkaların ortasına hazırladığınız iç harcı koyup, yufkayı rulo şeklinde sar.<br><br>

4. Böreği Pişir – Böreği yağlı kağıt serili fırın tepsisine yerleştirip, üzerine yumurta sarısı sürüp, 180 derece fırında 30-40 dakika pişir.<br><br>

Afiyet olsun! 🥐
`, 



"Kek" : ` 
1. Malzemeleri Hazırla – 3 yumurta, 1 su bardağı şeker, 1 su bardağı süt, 1 çay bardağı sıvı yağ, 1 paket kabartma tozu, 2 su bardağı un ve vanilya karıştır.<br><br>

2. Karışımı Çırp – Tüm malzemeleri bir çırpıcı ile karıştırıp, pürüzsüz bir kıvam elde et.<br><br>

3. Fırına Ver – Karışımı yağlanmış kek kalıbına dökün ve 180 derecede 30-40 dakika pişirin.<br><br>

4. Kekin Soğumasını Bekle – Kekin pişmesini bekledikten sonra, soğuyup servis için dilimle.<br><br>

Afiyet olsun! 🍰
`, 



"Cheesecake" : ` 
1. Tabanı Hazırla – 200 gram bisküvi ve 100 gram eritilmiş tereyağını karıştırıp, kelepçeli kalıba sıkıca yerleştir.<br><br>

2. Peynir Karışımını Hazırla – 400 gram krem peynir, 1 su bardağı şeker, 2 yumurta, 1 paket vanilya ve 1 su bardağı krema karıştır.<br><br>

3. Karışımı Dök – Hazırladığınız peynir karışımını bisküvi tabanının üzerine dökün ve 160 derecede 50-60 dakika pişirin.<br><br>

4. Soğut ve Servis Et – Cheesecake'i fırından çıkardıktan sonra soğutun, sonra dilimleyip, üzerine meyve veya sos ekleyerek servis yapın.<br><br>

Afiyet olsun! 🍓
`, 



"Hamburger" : ` 
1. Kısım Hazırlığı – Hamburger ekmeğini ortadan kes, marulları ve domatesi dilimle.<br><br>

2. Köfteyi Hazırlama – 500 gram kıymayı, tuz, karabiber, soğan ve baharatlarla yoğurup, yuvarlak köfteler yap.<br><br>

3. Köfteleri Pişir – Köfteleri tavada veya ızgarada her iki tarafı da iyice pişene kadar kızart.<br><br>

4. Hamburgeri Doldur – Hamburger ekmeğinin alt kısmına marul, pişmiş köfte, dilimlenmiş domates ve istediğiniz diğer malzemeleri yerleştir.<br><br>

Afiyet olsun! 🍔
`, 












  }















  document.querySelector("button").addEventListener("click", changeFood);

  function changeFood() {
      let chooseFood = Math.floor(Math.random() * foods.length);
      let nePisirsem = foods[chooseFood];
  
      document.querySelector("img").setAttribute("src", "./assets/images/" + nePisirsem + ".jpg");
  
      document.querySelector("h2").textContent = nePisirsem;
      
      // **Tarif içeriğini ekle**
      document.querySelector("#tarif").innerHTML = recipes[nePisirsem] || "Tarif bulunamadı.";
  }