# Medcast Global

Proje, kullanıcı arayüzü ve gelecekte geliştirilecek sunucu tarafı için iki ana klasöre ayrılmıştır:

```text
medcastglobal/
├── frontend/           # Mevcut statik web arayüzü
│   ├── index.html      # Sayfa yapısı
│   ├── data.js         # Eğitimler, içerikler ve eğitmenler
│   ├── app.js          # Ana sayfa etkileşimleri
│   ├── alternative.js  # Üçüncü sürümün bileşenleri
│   ├── styles.css      # İlk iki sürümün yerleşimi
│   ├── theme.css       # İlk iki sürümün renk paletleri
│   ├── alternative.css # Üçüncü sürümün tasarımı
│   └── assets/         # Görseller
├── backend/            # Gelecekteki sunucu uygulaması için ayrılmış alan
└── index.html          # Kök adresten frontend'e yönlendirme
```

## Frontend'i çalıştırma

`frontend/index.html` dosyasını tarayıcıda açın. Kök klasördeki `index.html` dosyası da aynı sayfaya yönlendirir. Paket kurulumu gerekmez; isterseniz VS Code'da bir yerel sunucu eklentisiyle de açabilirsiniz.

## İçerik ve tasarım

Eğitimleri, içerik kartlarını, eğitmenleri ve kart görsellerini `frontend/data.js` dosyasından düzenleyebilirsiniz. Ana sayfanın renkleri `frontend/alternative.css` dosyasının başındadır.

Tasarım referansındaki tarihler ve isimler örnek olarak korunmuştur. Giriş, üyelik ve içerik bağlantıları gerçek servislerle bağlanmaya hazır görsel yer tutuculardır.

## Backend

`backend/` şu anda yalnızca gelecekteki geliştirmeler için ayrılmıştır. Henüz bir API, veritabanı veya kimlik doğrulama sistemi yoktur. Sunucu teknolojisi ve işlevleri belirlendiğinde bu klasörde geliştirilebilir.
