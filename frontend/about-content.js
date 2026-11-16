/* Hakkımızda sayfasındaki tüm metinleri ve görsel yollarını buradan düzenleyin.
   Görsel yolu boşsa veya dosya bulunamazsa yer tutucu gösterilir. */
const aboutContent = {
  pageTitle: 'Hakkımızda',
  intro: 'Medcast Global’de radyoloji ve nöroloji hekimleri için canlı eğitimler düzenliyoruz. Her programın konusunu ve kapsamını eğitmenle birlikte belirliyor, klinik vakaları dersin merkezine alıyoruz.',
  cover: { src: 'assets/Physicians_reviewing_brain_MRI_30a18a85_2K.jpeg', alt: 'MR görüntülerini birlikte inceleyen iki hekim', placeholder: '[Kapak görseli]' },
  storyTitle: 'Kurucumuz',
  story: 'Uzm. Dr. Günay Çiftçi, Medcast Global’in eğitim programlarını eğitmenlerle birlikte planlar. Canlı oturumların organizasyonunu ve katılımcılarla iletişimi yürütür.',
  approachTitle: 'Eğitimler kimler için?',
  approachHeadline: 'Asistan ve uzman hekimler için.',
  approachDescription: 'Radyoloji ve nörolojide vaka temelli canlı eğitimler.',
  approachImage: { src: 'assets/egitim-mr-illustration.png', alt: 'Baş ve boynun sagittal MR illüstrasyonu', placeholder: '' },
  audienceTitle: 'Kimler için?',
  audience: 'Eğitimlerimiz, radyoloji ve nöroloji alanında çalışan asistan ve uzman hekimlere yöneliktir.',
  audienceLead: 'Radyoloji ve nöroloji alanında çalışan',
  audienceEmphasis: 'asistan ve uzman hekimler için.',
  preparationTitle: 'Eğitimleri nasıl hazırlıyoruz?',
  preparation: 'Her programda eğitmenle birlikte bir klinik soruya odaklanırız. Ele alınacak vakaları, dersin kapsamını ve oturum süresini bu soruya göre planlarız.',
  coursesLink: 'Eğitimleri incele',
  corporate: {
    label: 'Kurumsal İlkeler',
    heading: 'Misyon, vizyon ve uluslararası konumlanma.',
    mission: {
      label: 'Misyonumuz',
      title: 'Hekimlerin sürekli mesleki gelişimini desteklemek',
      description: 'Medcast Global’in misyonu, farklı ülkelerde görev yapan hekimlere, alanlarında uluslararası düzeyde tanınan akademisyen hekimler tarafından hazırlanan, yapılandırılmış ve vaka temelli tıp eğitimi sunmaktır. Bu eğitimler, hekimlerin klinik bulguları sistematik biçimde değerlendirme, ayırıcı tanı oluşturma ve tanısal kararlarını bilimsel bilgiye dayandırma becerilerini meslek yaşamları boyunca geliştirmeyi amaçlar.'
    },
    vision: {
      label: 'Vizyonumuz',
      title: 'Çevrim içi tıp eğitiminde uluslararası bir başvuru kaynağı olmak',
      description: 'Medcast Global, akademik dürüstlüğü, klinik yetkinliği ve uluslararası iş birliğini esas alan bir tıp eğitimi platformu olmayı hedefler. Farklı klinik ve akademik ortamlarda edinilen deneyimlerin paylaşılması yoluyla hekimlerin mesleki gelişimine ve hasta bakımının niteliğine katkıda bulunmayı amaçlar.'
    },
    positioning: {
      label: 'Konumlanma',
      title: 'Türkiye Merkezli Uluslararası Platform',
      titleFirst: 'Türkiye merkezli',
      titleSecond: 'radyoloji eğitim platformu',
      subtitle: 'Türkiye merkezli editoryal yapı ve uluslararası akademik kadro',
      map: { src: 'assets/konumlanma-harita.svg', alt: 'Kuzey Amerika, Avrupa ve Türkiye’yi gösteren harita', placeholder: '[Harita]' },
      description: 'Medcast Global’de radyoloji ve nöroloji hekimleri için vaka temelli canlı eğitimler düzenliyoruz. Her eğitimin konusunu, kapsamını ve tarihini dersi verecek eğitmenle birlikte belirliyoruz.'
    }
  },
  principles: {
    label: 'Temel İlkelerimiz',
    heading: 'Klinik eğitim ilkelerimiz',
    items: [
      { title: 'Sistematik ve aşamalı öğretim', image: { src: 'assets/Lecturer_arranging_teaching_shee…_e6c66711_2K.jpeg', alt: 'Anatomik çizim, normal MRG ve vaka incelemesi içeren eğitim materyalleri', placeholder: '[Sistematik öğretim görseli]' }, description: 'Eğitim içeriği, temel kavramlardan ileri düzey klinik uygulamalara uzanan bir sıra içinde yapılandırılır. Her aşama, önceki öğrenme kazanımları üzerine kurulur ve hekimin edindiği bilgiyi giderek daha karmaşık olguların değerlendirilmesinde kullanmasını destekler.' },
      { title: 'Vaka temelli klinik öğretim', image: { src: 'assets/Physicians_reviewing_brain_MRI_d6d4843a_2K.jpeg', alt: 'MRG bulgusunu birlikte değerlendiren iki hekim', placeholder: '[Vaka temelli öğretim görseli]' }, description: 'Gerçek klinik vakalar, öykü ve muayene bulgularından tanısal karara uzanan süreç içinde ele alınır. Katılımcılar, her vakada hangi bulguların ayırıcı tanıyı yönlendirdiğini ve olası tanılar arasında nasıl bir gerekçeyle seçim yapıldığını inceler.' },
      { title: 'Tanısal tuzakların sistematik incelenmesi', image: { src: 'assets/Physician_reviewing_brain_MRI_scans_eb95e016_2K.jpeg', alt: 'Komşu MRG kesitlerini karşılaştıran bir hekim', placeholder: '[Tanısal tuzaklar görseli]' }, description: 'Her oturumda, ele alınan konuya özgü sık yorum hataları, atipik bulgular ve tanıda yanılgıya yol açabilen durumlar incelenir. Deneyimli klinisyenler, ilk değerlendirmelerini hangi bulgular üzerine kurduklarını ve hangi koşullarda yeniden gözden geçirdiklerini vakalar üzerinden açıklar.' },
      { title: 'Meslek yaşamı boyunca başvuru değeri', image: { src: 'assets/Physician_reviewing_brain_scan_a…_e68e0725_2K.jpeg', alt: 'Ekrandaki vakayı incelerken radyoloji atlasına başvuran bir hekim', placeholder: '[Akademik başvuru görseli]' }, description: 'Eğitim materyalleri, hekimlerin meslek yaşamlarının farklı evrelerinde yeniden başvurabilecekleri biçimde düzenlenir. Temel kavramlar, vaka çözümlemeleri ve tanısal yaklaşımlar arasındaki ilişki korunarak klinik sorular eşliğinde yeniden incelenebilen bir akademik kaynak oluşturulması amaçlanır.' }
    ]
  },
  founder: {
    name: 'Uzm. Dr. Günay Çiftçi',
    role: 'Medcast Global Kurucusu',
    photo: { src: 'assets/kadın doktor.jpeg', alt: 'Temsili kadın hekim portresi', placeholder: '[Kurucu fotoğrafı]', caption: 'Temsili görsel' }
  }
};
