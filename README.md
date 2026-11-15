# Medcast Global ana sayfa

Bu proje herhangi bir paket kurulumu gerektirmeyen, modüler bir statik ana sayfadır.

## Çalıştırma

Klasörde `python -m http.server 8000` komutunu çalıştırın ve `http://localhost:8000` adresini açın.

## Düzenleme

- `data.js`: eğitimler, etkinlikler, eğitmenler ve özellikler.
- `styles.css`: ilk iki sürümün tipografi, yerleşim ve duyarlı ekran kuralları.
- `theme.css`: ilk iki sürümün renk paletleri.
- `alternative.css` ve `alternative.js`: üçüncü sürümün tasarımı ve içerik bileşenleri.
- `index.html`: sayfa bölümleri ve sabit metinler.
- `app.js`: tekrar eden içeriklerin oluşturulması, menü, arama ve eğitim kaydırıcısı.
- `assets/`: görseller. Eğitim görseli beş eşit sütunlu bir görsel şeridi olarak kullanılır.

Tasarım referansındaki tarihler ve isimler örnek olarak korunmuştur. Giriş, üyelik ve içerik bağlantıları gerçek servislerle bağlanmaya hazır görsel yer tutuculardır.

### Renkleri değiştirme

Tüm ana renkler `theme.css` dosyasındaki `:root` değişkenlerinde tanımlıdır. Örneğin buton ve bağlantı rengini değiştirmek için yalnızca `--color-primary` değerini güncelleyin. Hover ve footer yardımcı renkleri ana paletten otomatik türetilir.

### Sürümleri karşılaştırma

Sağ alt köşedeki oklarla üç sürüm arasında geçiş yapabilirsiniz. Bu kontrol geçicidir; sayfa yenilendiğinde Versiyon 3 açılır. Üçüncü sürümün renkleri `alternative.css` dosyasının başındadır. Eğitimler, içerik kartları ve eğitmenler `data.js` dosyasından düzenlenir.

İçerik kartlarının görsellerini değiştirmek için `data.js` içindeki `articles` listesindeki `image` yollarını güncelleyin.
