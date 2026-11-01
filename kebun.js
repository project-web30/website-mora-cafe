/* Interaksi bawaan desain Stitch untuk halaman Asal Bahan */
window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('origin-scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    });
