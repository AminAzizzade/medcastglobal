/* date alanı YYYY-MM-DD biçimindedir; tarihi olmayan örnekler mevcut sırasını korur. */
const slides = siteData.articles.map((item, id) => ({ item, id }))
  .sort((a, b) => (b.item.date || '').localeCompare(a.item.date || '')).slice(0, 10);
const categories = [['Tümü', '', ''], ['Makale Özetleri', 'makale', 'MAKALE ÖZETLERİ'], ['Klinik Rehberler', 'rehber', 'KLİNİK REHBER'], ['Yeni Teknolojiler', 'teknoloji', 'YENİ TEKNOLOJİLER'], ['Vakalar', 'vaka', 'ÖĞRENME']];
const feature = document.querySelector('.reading-feature'), images = [...document.querySelectorAll('.reading-feature-image img')], copy = document.querySelector('#featured-copy');
const list = document.querySelector('#reading-list'), query = document.querySelector('#reading-query'), categorySelect = document.querySelector('#reading-category');
const allArticles = siteData.articles.map((item, id) => ({ item, id }));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let selected = 0, activeImage = 0, currentCategory = '', timer = null, userPaused = reducedMotion.matches, request = 0;
function preload(index) { if (slides.length) { const image = new Image(); image.src = slides[index % slides.length].item.image; } }
function renderSlide(index, animate = true) {
  if (!slides.length) return;
  const slide = slides[index], token = ++request, next = 1 - activeImage;
  const image = new Image(); image.src = slide.item.image;
  const commit = () => {
    if (token !== request) return;
    selected = index;
    const incoming = images[next], outgoing = images[activeImage];
    incoming.style.transition = 'none';
    incoming.classList.remove('is-active', 'is-exiting');
    incoming.src = slide.item.image; incoming.alt = slide.item.alt || '';
    void incoming.offsetWidth;
    incoming.style.transition = animate ? '' : 'none';
    outgoing.classList.remove('is-active'); outgoing.classList.add('is-exiting'); outgoing.alt = '';
    incoming.classList.add('is-active'); activeImage = next;
    if (!animate) requestAnimationFrame(() => { incoming.style.transition = ''; });
    document.querySelector('#featured-category').textContent = slide.item.category;
    document.querySelector('#featured-title').textContent = slide.item.title;
    document.querySelector('#featured-description').textContent = slide.item.description;
    const link = document.querySelector('#featured-link'); link.href = `detay.html?tur=icerik&id=${slide.id}`;
    link.textContent = `${slide.item.category === 'ÖĞRENME' ? 'İçeriği incele' : 'Yazıyı oku'} →`;
    if (animate && !reducedMotion.matches && copy.animate) copy.animate([{ opacity: 0, transform: 'translateX(24px)' }, { opacity: 1, transform: 'translateX(0)' }], { duration: 1500, easing: 'cubic-bezier(.22, 1, .36, 1)' });
    preload((index + 1) % slides.length);
  };
  if (image.decode) image.decode().then(commit, commit);
  else if (image.complete) commit(); else { image.onload = commit; image.onerror = commit; }
}
function updateTimer() {
  clearInterval(timer); timer = null;
  const running = !document.hidden && !currentCategory && !userPaused && slides.length > 1;
  if (running) {
    timer = setInterval(() => renderSlide((selected + 1) % slides.length), 1700);
  }
}
reducedMotion.addEventListener('change', event => { if (event.matches) userPaused = true; updateTimer(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Sekme arka plandayken bekleyen görsel yüklemesi eski bir geçiş başlatmasın.
    request++;
  }
  updateTimer();
});
function renderResults() {
  const category = categories.find(entry => entry[1] === currentCategory) || categories[0];
  const term = query.value.trim().toLocaleLowerCase('tr-TR');
  list.replaceChildren();
  const entries = allArticles.filter(({item}) => (!category[1] || item.category === category[2]) && (!term || [item.title, item.description, item.category].some(value => (value || '').toLocaleLowerCase('tr-TR').includes(term))));
  entries.forEach(({item, id}) => {
    const article = document.createElement('article'); article.className = 'reading-card';
    const link = document.createElement('a'); link.className = 'reading-card-image'; link.href = `detay.html?tur=icerik&id=${id}`; link.setAttribute('aria-label', item.title);
    const image = document.createElement('img'); image.src = item.image; image.alt = item.alt || ''; image.loading = 'lazy'; link.append(image);
    const content = document.createElement('div'); content.className = 'reading-card-copy';
    const label = document.createElement('span'); label.className = 'alt-kicker'; label.textContent = item.category;
    const title = document.createElement('h3'); const titleLink = document.createElement('a'); titleLink.href = link.href; titleLink.textContent = item.title; title.append(titleLink);
    const description = document.createElement('p'); description.textContent = `${item.description || ''} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.`.trim();
    content.append(label, title, description); article.append(link, content); list.append(article);
  });
  document.querySelector('#reading-empty').hidden = entries.length > 0;
}
function showCategory(key, updateUrl = false) {
  const category = categories.find(entry => entry[1] === key) || categories[0]; currentCategory = category[1]; categorySelect.value = currentCategory;
  feature.hidden = Boolean(currentCategory);
  if (updateUrl) { const url = new URL(location.href); if (currentCategory) url.searchParams.set('kategori', currentCategory); else url.searchParams.delete('kategori'); history.pushState(null, '', url); }
  renderResults(); updateTimer();
}
categories.forEach(([name, key]) => { const option = document.createElement('option'); option.value = key; option.textContent = name === 'Tümü' ? 'Tüm konular' : name; categorySelect.append(option); });
categorySelect.addEventListener('change', () => showCategory(categorySelect.value, true));
query.addEventListener('input', renderResults);
document.querySelector('#reading-reset').addEventListener('click', () => { query.value = ''; showCategory('', true); query.focus(); });
window.addEventListener('popstate', () => showCategory(new URLSearchParams(location.search).get('kategori') || ''));
renderSlide(0, false); showCategory(new URLSearchParams(location.search).get('kategori') || '');
