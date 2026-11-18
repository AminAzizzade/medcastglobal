/* Üçüncü tasarımın içerikleri ortak data.js dosyasından oluşturulur. */
const altHighlights = [
  { icon: 'calendar', title: 'Çevrim içi', text: 'eğitim' },
  { icon: 'book', title: 'Eğitim kayıtlarına', text: 'erişim' },
  { icon: 'layers', title: 'Vaka temelli', text: 'anlatım' }
];
document.querySelector('#alt-highlights').innerHTML = altHighlights.map(item => `<div class="alt-highlight">${icon(item.icon)}<div><strong>${item.title}</strong><span>${item.text}</span></div></div>`).join('');
const articleCategories = ['makale', 'rehber', 'teknoloji', 'vaka'];
const articleLabels = ['YAYINLAR', 'REHBERLER', 'TEKNOLOJİ', 'VAKALAR'];
document.querySelector('#alt-article-list').innerHTML = siteData.articles.map((item, index) => `<a href="icerikler.html?kategori=${articleCategories[index]}#yayinlar" class="alt-card alt-editorial"><div class="alt-card-image alt-article-image"><img src="${item.image}" alt="" loading="lazy"></div><div class="alt-card-body"><span class="alt-article-category">${articleLabels[index] || item.category}</span><h3>${item.title}</h3><p>${item.description}</p></div></a>`).join('');
renderCourseCards(document.querySelector('#alt-course-list'), siteData.courses.slice(0, 4));
document.querySelector('#alt-faculty-list').innerHTML = siteData.teachers.map(item => `<article class="alt-faculty-card"><span class="alt-avatar">${item.initials}</span><h3>${item.name}</h3><p>${item.description.replace('\n', '<br>')}</p></article>`).join('');
if (document.documentElement.dataset.theme === 'v3' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('intro-animating');
  setTimeout(() => document.documentElement.classList.remove('intro-animating'), 4100);
}

// Bu tasarım tek sayfalı olduğundan etkin bağlantı URL'deki bölümden belirlenir.
