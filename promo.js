/* Interaksi bawaan desain Stitch untuk halaman Promo & Poin */
(function() {
      const navLinks = document.querySelectorAll('header nav a');
      navLinks.forEach(link => {
        if (link.getAttribute('data-path') === 'promo-poin') {
          link.className = 'px-3.5 py-1.5 rounded-full text-body-sm font-body-sm bg-primary-container text-on-primary font-semibold shadow-inner transition-colors';
        } else {
          link.className = 'px-3.5 py-1.5 rounded-full text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors';
        }
      });
    })();
