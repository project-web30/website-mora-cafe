/* Interaksi bawaan desain Stitch untuk halaman Cari Mood */
// Simple micro-interaction for tarot quiz card selection
  document.querySelectorAll('button[aria-pressed]').forEach(card => {
    card.addEventListener('click', () => {
      // Reset all cards in this step
      document.querySelectorAll('button[aria-pressed]').forEach(c => {
        c.setAttribute('aria-pressed', 'false');
        c.className = "group relative text-left p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary transition-all duration-200 hover:shadow-[3px_3px_0px_#12301f] hover:translate-x-[-1px] hover:translate-y-[-1px] focus:outline-none flex flex-col justify-between h-full min-h-[220px]";
      });
      // Set active to clicked
      card.setAttribute('aria-pressed', 'true');
      card.className = "group relative text-left p-5 rounded-2xl bg-surface-container-lowest border-2 border-primary transition-all duration-200 transform translate-x-[-2px] translate-y-[-2px] shadow-[4px_4px_0px_#12301f] focus:outline-none flex flex-col justify-between h-full min-h-[220px]";
    });
  });
