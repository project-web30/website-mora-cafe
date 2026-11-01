/* Interaksi bawaan desain Stitch untuk halaman Menu */
// Simple micro-interactions for category pills and button feedback
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(b => {
        b.className = 'category-pill px-4 py-2 rounded-full font-label-code text-label-code font-semibold tracking-wide transition-all bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-outline-variant hover:border-primary';
      });
      btn.className = 'category-pill px-4 py-2 rounded-full font-label-code text-label-code font-semibold tracking-wide transition-all bg-primary-container text-on-primary shadow-[2px_2px_0px_#835400]';
    });
  });
