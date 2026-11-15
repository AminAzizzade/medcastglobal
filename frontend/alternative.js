/* Üçüncü tasarımın içerikleri ortak data.js dosyasından oluşturulur. */
const altHighlights = [
  { icon: 'book', title: 'Bilimsel', text: 'İçerikler' },
  { icon: 'calendar', title: 'Canlı', text: 'Eğitimler' },
  { icon: 'users', title: 'Uzman', text: 'Eğitmenler' },
  { icon: 'layers', title: 'Vaka Temelli', text: 'Öğrenme' }
];
document.querySelector('#alt-highlights').innerHTML = altHighlights.map(item => `<div class="alt-highlight">${icon(item.icon)}<div><strong>${item.title}</strong><span>${item.text}</span></div></div>`).join('');
document.querySelector('#alt-article-list').innerHTML = siteData.articles.map(item => `<article class="alt-card alt-editorial"><div class="alt-card-image alt-article-image"><img src="${item.image}" alt="" loading="lazy"></div><div class="alt-card-body"><span class="alt-article-category">${item.category}</span><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('');
document.querySelector('#alt-course-list').innerHTML = siteData.courses.map(item => `<article class="alt-card alt-course"><div class="alt-card-image alt-course-image"><img src="${item.image}" alt="" loading="lazy"><span class="alt-date">${item.date.split(' ')[1]}<strong>${item.date.split(' ')[0]}</strong></span></div><div class="alt-card-body"><span class="alt-article-category">CANLI WEBİNAR</span><h3>${item.title.replace(/ – ([12])$/, ' <span class="alt-course-number">– $1</span>')}</h3><p>${item.date} · ${item.duration}</p><button class="alt-course-status" type="button" disabled>Detaylar yakında</button></div></article>`).join('');
document.querySelector('#alt-faculty-list').innerHTML = siteData.teachers.map(item => `<article class="alt-faculty-card"><span class="alt-avatar">${item.initials}</span><h3>${item.name}</h3><p>${item.description.replace('\n', '<br>')}</p></article>`).join('');
const altMenu = document.querySelector('.alt-menu-toggle');
altMenu.addEventListener('click', () => {
  const expanded = altMenu.getAttribute('aria-expanded') === 'true';
  altMenu.setAttribute('aria-expanded', String(!expanded));
  altMenu.setAttribute('aria-label', expanded ? 'Menüyü aç' : 'Menüyü kapat');
});
document.querySelectorAll('.alt-nav a').forEach(link => link.addEventListener('click', () => {
  altMenu.setAttribute('aria-expanded', 'false');
  altMenu.setAttribute('aria-label', 'Menüyü aç');
}));

// Giriş animasyonu yalnızca sayfa açıldığında bir kez oynatılır.
if (document.documentElement.dataset.theme === 'v3' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('intro-animating');
  setTimeout(() => document.documentElement.classList.remove('intro-animating'), 4100);
}

// Bu tasarım tek sayfalı olduğundan etkin bağlantı URL'deki bölümden belirlenir.
const altSectionLinks = [...document.querySelectorAll('.alt-nav a:not(.alt-nav-cta)')];
function updateAltNavigation() {
  const currentHash = location.hash;
  const current = altSectionLinks.find(link => link.getAttribute('href') === currentHash) || altSectionLinks[0];
  altSectionLinks.forEach(link => {
    if (link === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateAltNavigation);
updateAltNavigation();
