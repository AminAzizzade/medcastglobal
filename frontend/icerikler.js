/* date alanı YYYY-MM-DD biçimindedir; tarihi olmayan örnekler mevcut sırasını korur. */
const slides = siteData.articles.map((item, id) => ({ item, id }))
  .sort((a, b) => (b.item.date || '').localeCompare(a.item.date || '')).slice(0, 10);
const categories = [['Tümü', '', ''], ['Makale Özetleri', 'makale', 'MAKALE ÖZETLERİ'], ['Klinik Rehberler', 'rehber', 'KLİNİK REHBER'], ['Yeni Teknolojiler', 'teknoloji', 'YENİ TEKNOLOJİLER'], ['Vakalar', 'vaka', 'ÖĞRENME']];
const feature = document.querySelector('.reading-feature'), images = [...document.querySelectorAll('.reading-feature-image img')], copy = document.querySelector('#featured-copy');
const filters = document.querySelector('#reading-filters'), list = document.querySelector('#reading-list');
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
    if (!currentCategory) reorderList();
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
function reorderList() {
  const cards = [...list.children];
  const activeId = String(slides[selected]?.id);
  const active = cards.findIndex(card => card.dataset.id === activeId);
  if (active <= 0) return;
  const positions = new Map(cards.map(card => [card, card.getBoundingClientRect()]));
  [...cards.slice(active), ...cards.slice(0, active)].forEach(card => list.append(card));
  if (!reducedMotion.matches) cards.forEach((card, index) => {
    const before = positions.get(card), after = card.getBoundingClientRect();
    const x = before.left - after.left, y = before.top - after.top;
    if (card.animate && (x || y)) {
      const frames = index < active
        ? [{ opacity: 0, transform: 'translateX(100%)' }, { opacity: 1, transform: 'translateX(0)' }]
        : [{ transform: `translate(${x}px, ${y}px)` }, { transform: 'translate(0, 0)' }];
      card.animate(frames, { duration: 1500, easing: 'cubic-bezier(.22, 1, .36, 1)' });
    }
  });
}
reducedMotion.addEventListener('change', event => { if (event.matches) userPaused = true; updateTimer(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Sekme arka plandayken bekleyen görsel yüklemesi eski bir geçiş başlatmasın.
    request++;
  }
  updateTimer();
});
function showCategory(key, updateUrl = false) {
  const category = categories.find(entry => entry[1] === key) || categories[0]; currentCategory = category[1]; feature.hidden = Boolean(currentCategory);
  filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === currentCategory)));
  if (updateUrl) { const url = new URL(location.href); if (currentCategory) url.searchParams.set('kategori', currentCategory); else url.searchParams.delete('kategori'); history.pushState(null, '', url); }
  list.replaceChildren();
  const filtered = slides.filter(slide => !currentCategory || slide.item.category === category[2]);
  // Vitrindeki mevcut içerikleri deneme amaçlı tekrarlayarak sekiz kart göster.
  const entries = !currentCategory && filtered.length ? Array.from({ length: 8 }, (_, index) => filtered[index % filtered.length]) : filtered;
  entries.forEach(({item, id}) => {
    const article = document.createElement('article'); article.className = 'reading-card'; article.dataset.id = String(id);
    const link = document.createElement('a'); link.href = `detay.html?tur=icerik&id=${id}`;
    const image = document.createElement('img'); image.src = item.image; image.alt = item.alt || ''; image.loading = 'lazy';
    const title = document.createElement('h3'); title.textContent = item.title;
    link.append(image, title); article.append(link); list.append(article);
  });
  if (!currentCategory) reorderList();
  document.querySelector('#reading-empty').hidden = entries.length > 0; updateTimer();
}
categories.forEach(([name, key]) => { const button = document.createElement('button'); button.type = 'button'; button.textContent = name; button.dataset.category = key; button.addEventListener('click', () => showCategory(key, true)); filters.append(button); });
window.addEventListener('popstate', () => showCategory(new URLSearchParams(location.search).get('kategori') || ''));
renderSlide(0, false); showCategory(new URLSearchParams(location.search).get('kategori') || '');
