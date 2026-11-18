/* Hakkımızda sayfasındaki tüm metinleri ve görsel yollarını buradan düzenleyin.
   Görsel yolu boşsa veya dosya bulunamazsa yer tutucu gösterilir. */
const aboutContent = {
  introLabel: 'HAKKIMIZDA',
  pageTitle: 'Görüntüden öte.',
  intro: 'Medcast Global, hekimlere yönelik çevrim içi mesleki eğitimler sunan bir radyoloji eğitim markasıdır. Görüntülemeye sistematik yaklaşımı, tanısal düşünmeyi ve bilginin günlük mesleki pratiğe aktarılmasını eğitim anlayışının merkezine alır.',
  cover: { src: 'assets/Physicians_reviewing_brain_MRI_30a18a85_2K.jpeg', alt: 'MR görüntülerini birlikte inceleyen iki hekim', placeholder: '[Kapak görseli]' },
  storyTitle: 'Kurucumuz',
  storyIntro: '[Uzmanlık alanı ve mesleki geçmiş hakkında 2–3 cümle.]',
  story: '[Medcast Global’i kurma amacı ve eğitim yaklaşımı hakkında 2–3 cümle.]',
  closingTitle: 'Öğrenmeye birlikte devam edelim.',
  closingDescription: 'İlgi duyduğunuz konulardaki eğitimleri ve program kapsamlarını inceleyin.',
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
    image: { src: 'assets/kurumsal ilkeler.jpeg', alt: 'MR görüntüleri ve eğitim materyalleri üzerinde çalışan hekimler', placeholder: '[Kurumsal ilkeler görseli]' },
    heading: 'Misyon, vizyon ve uluslararası konumlanma.',
    mission: {
      label: 'Misyonumuz',
      title: 'Hekimlerin mesleki gelişimini desteklemek',
      description: 'Radyoloji bilgisini anlaşılır, sistematik ve vaka temelli eğitimlerle paylaşmak; hekimlerin görüntü değerlendirme ve tanısal düşünme becerilerinin gelişimine katkıda bulunmak.'
    },
    vision: {
      label: 'Vizyonumuz',
      title: 'Radyoloji eğitiminde güvenilir bir başvuru kaynağı olmak',
      description: 'Bilimsel bilgi ve klinik deneyimin bir araya geldiği, farklı deneyim düzeylerindeki hekimlerin öğrenmeye devam edebildiği bir eğitim ortamı oluşturmak.'
    },
    positioning: {
      mapLabel: 'Türkiye merkezli',
      mapCaption: 'Radyoloji eğitiminde birlikte öğrenme',
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
      { title: 'Adım adım öğrenme', image: { src: 'assets/Lecturer_arranging_teaching_shee…_e6c66711_2K.jpeg', alt: 'Anatomik çizim, normal MRG ve vaka incelemesi içeren eğitim materyalleri', placeholder: '[Sistematik öğretim görseli]' }, description: 'Temel kavramlardan ileri düzey değerlendirmelere uzanan bir öğrenme yolu sunuyoruz. Konuları, önceki bilgilerin üzerine yenilerini ekleyerek ele alıyoruz.' },
      { title: 'Vakalarla klinik düşünme', image: { src: 'assets/Physicians_reviewing_brain_MRI_d6d4843a_2K.jpeg', alt: 'MRG bulgusunu birlikte değerlendiren iki hekim', placeholder: '[Vaka temelli öğretim görseli]' }, description: 'Görüntüleme bulgularını klinik bağlamıyla birlikte değerlendiriyoruz. Vakalar üzerinden bulgular, olası tanılar ve kararın gerekçesi arasındaki ilişkiyi inceliyoruz.' },
      { title: 'Tanısal tuzakları tanıma', image: { src: 'assets/Physician_reviewing_brain_MRI_scans_eb95e016_2K.jpeg', alt: 'Komşu MRG kesitlerini karşılaştıran bir hekim', placeholder: '[Tanısal tuzaklar görseli]' }, description: 'Sık yorum hatalarını, normal varyantları ve yanıltıcı bulguları ele alıyoruz. Değerlendirmenin hangi durumlarda yeniden gözden geçirilmesi gerektiğini tartışıyoruz.' },
      { title: 'Bilgiyi pratiğe aktarma', image: { src: 'assets/Physician_reviewing_brain_scan_a…_e68e0725_2K.jpeg', alt: 'Ekrandaki vakayı incelerken radyoloji atlasına başvuran bir hekim', placeholder: '[Akademik başvuru görseli]' }, description: 'Öğrenilen bilgiyi sistematik görüntü değerlendirme ve raporlama yaklaşımıyla ilişkilendiriyoruz. Eğitimleri, hekimlerin günlük mesleki pratiğini destekleyecek şekilde yapılandırıyoruz.' }
    ]
  },
  founder: {
    name: '[Unvan, ad ve soyad]',
    role: 'Kurucu ve Akademik Direktör',
    photo: { src: 'assets/kadın doktor.jpeg', alt: 'Temsili kadın hekim portresi', placeholder: '[Kurucu fotoğrafı]', caption: 'Temsili görsel' }
  }
};
