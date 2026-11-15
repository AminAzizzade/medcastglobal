const paths = {
  cap: '<path d="m2 9 10-5 10 5-10 5-10-5Zm4 3v5c4 3 8 3 12 0v-5M22 9v7"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  laptop: '<path d="M5 4h14v12H5zM2 20h20l-2-4H4l-2 4Z"/>',
  award: '<path d="M5 3h14v12H5zM8 7h8M8 10h6M10 15l-1 6 3-2 3 2-1-6"/>',
  users: '<circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2M4 10a2 2 0 1 1 0-4M2 18v-1a4 4 0 0 1 3-4M20 10a2 2 0 1 0 0-4m2 12v-1a4 4 0 0 0-3-4"/>',
  folder: '<path d="M3 6h6l2 2h10v11H3V6Zm3 2V4h6l2 2h4v2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M7 2v6M17 2v6M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  book: '<path d="M12 6c-3-3-6-3-9-2v14c3-1 6-1 9 2 3-3 6-3 9-2V4c-3-1-6-1-9 2Zm0 0v14"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
const benefits = document.querySelector('#benefits');
benefits.innerHTML = siteData.benefits.map(item => `<div class="benefit"><span class="benefit-icon">${icon(item.icon)}</span><div><h3>${item.title}</h3><p>${item.description}</p></div></div>`).join('');
const courses = document.querySelector('#course-list');
courses.innerHTML = siteData.courses.map(item => `<article class="course-card"><div class="course-image scan-${item.image}"><span class="course-badge">Canlı Webinar</span></div><div class="course-info"><h3>${item.title}</h3><div class="course-meta"><span>${icon('calendar')}${item.date}</span><span>${icon('clock')}${item.duration}</span></div></div></article>`).join('');
document.querySelector('#event-list').innerHTML = siteData.events.map(item => `<a class="event-row" href="#iletisim"><span><strong>${item.title}</strong><small>${item.date} <i></i> ${item.format}</small></span><span class="event-arrow">›</span></a>`).join('');
document.querySelector('#teacher-list').innerHTML = siteData.teachers.map(item => `<div class="teacher"><span class="avatar">${item.initials}</span><div><strong>${item.name}</strong><p>${item.description.replace('\n', '<br>')}</p></div></div>`).join('');
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
document.querySelectorAll('.slider-arrow').forEach(button => button.addEventListener('click', () => courses.scrollBy({left: button.classList.contains('next') ? 310 : -310, behavior: 'smooth'})));
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const open = document.body.classList.toggle('menu-open'); menu.setAttribute('aria-expanded', open); menu.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç'); });
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => { document.body.classList.remove('menu-open'); menu.setAttribute('aria-expanded', 'false'); }));
const dialog = document.querySelector('.search-dialog');
document.querySelector('.search-toggle').addEventListener('click', () => { dialog.showModal(); document.querySelector('#site-search').focus(); });
document.querySelector('#site-search').addEventListener('input', event => { const value = event.target.value.trim().toLocaleLowerCase('tr'); const matches = value ? siteData.courses.filter(course => course.title.toLocaleLowerCase('tr').includes(value)) : []; document.querySelector('.search-results').innerHTML = matches.map(course => `<a href="#egitimler">${course.title} <span>→</span></a>`).join('') || (value ? '<p>Bu aramayla eşleşen eğitim bulunamadı.</p>' : ''); });
document.querySelector('.search-results').addEventListener('click', event => { if (event.target.closest('a')) dialog.close(); });

// Geçici karşılaştırma: Sayfa yenilendiğinde Versiyon 3 açılır.
const versionButtons = document.querySelectorAll('[data-version-direction]');
const versionLabel = document.querySelector('#version-label');
let activeVersion = 3;
function updateVersion() {
  document.documentElement.dataset.theme = `v${activeVersion}`;
  versionLabel.textContent = `Versiyon ${activeVersion} / 3`;
  versionButtons.forEach(button => {
    const direction = Number(button.dataset.versionDirection);
    button.disabled = activeVersion + direction < 1 || activeVersion + direction > 3;
  });
}
versionButtons.forEach(button => button.addEventListener('click', () => {
  activeVersion += Number(button.dataset.versionDirection);
  updateVersion();
}));
updateVersion();
