/* Üçüncü tasarımın içerikleri ortak data.js dosyasından oluşturulur. */
const altHighlights = [
  { icon: 'book', title: 'Bilimsel', text: 'İçerikler' },
  { icon: 'calendar', title: 'Canlı', text: 'Eğitimler' },
  { icon: 'users', title: 'Uzman', text: 'Eğitmenler' },
  { icon: 'layers', title: 'Vaka Temelli', text: 'Öğrenme' }
];
document.querySelector('#alt-highlights').innerHTML = altHighlights.map(item => `<div class="alt-highlight">${icon(item.icon)}<div><strong>${item.title}</strong><span>${item.text}</span></div></div>`).join('');
document.querySelector('#alt-article-list').innerHTML = siteData.articles.map(item => `<article class="alt-card"><div class="alt-card-image alt-article-image"><img src="${item.image}" alt="" loading="lazy"><span class="alt-image-label">${item.category}</span></div><div class="alt-card-body"><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('');
document.querySelector('#alt-course-list').innerHTML = siteData.courses.slice(0, 4).map(item => `<article class="alt-card alt-course"><div class="alt-card-image scan-${item.image}"><span class="alt-date">${item.date.split(' ')[1]}<strong>${item.date.split(' ')[0]}</strong></span><span class="alt-image-label">CANLI WEBİNAR</span></div><div class="alt-card-body"><h3>${item.title}</h3><p>${item.date} · ${item.duration}</p><span class="alt-course-button">Canlı Webinar</span></div></article>`).join('');
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
