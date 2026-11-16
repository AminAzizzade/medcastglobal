const detailParams = new URLSearchParams(location.search);
const detailType = detailParams.get('tur');
const detailId = detailParams.get('id');
const detailItems = detailType === 'egitim' ? siteData.courses : detailType === 'icerik' ? siteData.articles : [];
const detailItem = /^(0|[1-9]\d*)$/.test(detailId ?? '') ? detailItems[Number(detailId)] : null;
const detailBack = document.querySelector('#detail-back');
detailBack.href = detailType === 'egitim' ? 'index.html#alt-webinars' : 'index.html#alt-articles';
detailBack.textContent = detailType === 'egitim' ? '← Eğitimlere dön' : '← İçeriklere dön';
if (detailItem) {
  document.title = `${detailItem.title} | Medcast Global`;
  document.querySelector('#detail-title').textContent = detailItem.title;
  document.querySelector('#detail-category').textContent = detailType === 'egitim' ? 'CANLI WEBİNAR' : detailItem.category;
  document.querySelector('#detail-description').textContent = detailType === 'egitim' ? `${detailItem.date} · ${detailItem.duration}` : detailItem.description;
  document.querySelector('#detail-image').src = detailItem.image;
} else {
  document.querySelector('#detail-title').textContent = 'İçerik bulunamadı';
  document.querySelector('.detail-notice').hidden = true;
  document.querySelector('#detail-image').hidden = true;
}
