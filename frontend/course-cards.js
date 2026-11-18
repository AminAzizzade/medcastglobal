/* Eğitim kartları ana sayfada ve katalogda aynı verilerden oluşturulur. */
function renderCourseCards(container, courses) {
  courses.forEach(item => {
    const id = siteData.courses.indexOf(item);
    const link = document.createElement('a'); link.className = 'alt-card alt-course'; link.href = `detay.html?tur=egitim&id=${id}`;
    const imageBox = document.createElement('div'); imageBox.className = 'alt-card-image alt-course-image';
    const img = document.createElement('img'); img.src = item.image; img.alt = ''; img.loading = 'lazy'; imageBox.append(img);
    const body = document.createElement('div'); body.className = 'alt-card-body';
    const category = document.createElement('span'); category.className = 'alt-article-category'; category.textContent = item.recordingAvailable ? 'EĞİTİM KAYDI' : 'TAMAMLANAN EĞİTİM';
    const title = document.createElement('h3');
    const match = item.title.match(/^(.*) (– [12])$/);
    if (match) { title.append(document.createTextNode(`${match[1]} `)); const number = document.createElement('span'); number.className = 'alt-course-number'; number.textContent = match[2]; title.append(number); } else title.textContent = item.title;
    const summary = document.createElement('p'); summary.className = 'alt-course-summary'; summary.textContent = item.summary || 'Eğitim kapsamı yakında paylaşılacaktır.';
    const info = document.createElement('p'); info.className = 'alt-course-info'; info.textContent = `${item.instructor || 'Eğitmen bilgisi yakında'} · ${item.duration}`;
    const action = document.createElement('span'); action.className = 'alt-course-status'; action.textContent = 'Eğitimi incele';
    body.append(category, title, summary, info, action); link.append(imageBox, body); container.append(link);
  });
}
