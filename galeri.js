/* Interaksi bawaan desain Stitch untuk halaman Galeri */
(function initGalleryFilter() {
    const filterContainer = document.getElementById('filterPillsContainer');
    if (!filterContainer) return;
    
    const buttons = filterContainer.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.className = 'px-4 py-2 rounded-full font-label-code text-label-code bg-surface-container-lowest text-on-surface-variant border border-primary-container/20 hover:text-primary hover:border-primary-container transition-all hover:-translate-y-0.5';
        });
        btn.className = 'px-4 py-2 rounded-full font-label-code text-label-code bg-primary-container text-on-primary border border-primary-container shadow-[2px_2px_0px_#835400] transition-all hover:-translate-y-0.5';
      });
    });
  })();
