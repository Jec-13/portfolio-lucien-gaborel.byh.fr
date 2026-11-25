// Agrandissement des captures au clic : overlay plein écran semi-transparent.
// Fermeture : clic n'importe où, bouton ×, ou touche Échap.
document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('img[src*="pentest_illustration/"]');
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'img-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'img-overlay-close';
  closeBtn.setAttribute('aria-label', 'Fermer');
  closeBtn.textContent = '×';

  var big = document.createElement('img');
  overlay.appendChild(closeBtn);
  overlay.appendChild(big);
  document.body.appendChild(overlay);

  var lastFocus = null;

  function open(img) {
    lastFocus = img;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overlay-open');
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overlay-open');
    if (lastFocus) lastFocus.focus();
  }

  images.forEach(function (img) {
    img.classList.add('zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
    });
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
});
