/* İçerikleri HTML olarak değil, güvenli düz metin olarak yerleştirin. */
function aboutValue(path) {
  return path.split('.').reduce((value, key) => value?.[key], aboutContent);
}
// Yerel önizlemede taslaklar görünür; yayında doldurulmamış alanlar gizlenir.
const aboutDraft = location.protocol === 'file:' || ['localhost', '127.0.0.1', '::1'].includes(location.hostname);
const isPlaceholder = value => typeof value !== 'string' || !value.trim() || /^\s*\[.*\]\s*$/.test(value);
document.querySelectorAll('[data-about-text]').forEach(element => {
  const value = aboutValue(element.dataset.aboutText);
  element.textContent = value ?? '';
  if (!aboutDraft && isPlaceholder(value)) element.hidden = true;
});
if (!aboutDraft && isPlaceholder(aboutContent.founder.name)) document.querySelector('.about-story').hidden = true;
function renderAboutImage(element, image) {
  if (image?.src) {
    const img = document.createElement('img');
    img.alt = image.alt || '';
    img.addEventListener('error', () => { element.textContent = aboutDraft ? (image.placeholder ?? '') : ''; }, { once: true });
    img.src = image.src;
    element.replaceChildren(img);
  } else {
    element.textContent = aboutDraft ? (image?.placeholder ?? '') : '';
  }
}
document.querySelectorAll('[data-about-image]').forEach(element => {
  renderAboutImage(element, aboutValue(element.dataset.aboutImage));
});

const principlesList = document.querySelector('#principles-list');
aboutContent.principles.items.forEach((item, index) => {
  const row = document.createElement('li');
  const number = document.createElement('span');
  const heading = document.createElement('div');
  const image = document.createElement('div');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  row.className = 'about-principle';
  number.className = 'about-principle-number';
  number.setAttribute('aria-hidden', 'true');
  number.textContent = String(index + 1).padStart(2, '0');
  heading.className = 'about-principle-heading';
  image.className = 'about-image about-principle-image';
  renderAboutImage(image, item.image);
  title.textContent = item.title;
  description.textContent = item.description;
  heading.append(number, title);
  row.append(heading, image, description);
  principlesList.append(row);
});

// İçerik, animasyon desteklenmiyorsa veya hareket azaltılmışsa doğrudan görünür.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.about-reveal').forEach(section => {
    section.classList.add('is-pending');
    observer.observe(section);
  });
}
