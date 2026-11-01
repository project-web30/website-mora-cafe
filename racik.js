/* Interaksi bawaan desain Stitch untuk halaman Racik Sendiri */
(function initRacikSendiri() {
      // Elements
      const flavorChips = document.querySelectorAll('.flavor-chip');
      const visualLayerFlavor = document.getElementById('visualLayerFlavor');
      const visualLayerFlavorLabel = document.getElementById('visualLayerFlavorLabel');
      const legendFlavor = document.getElementById('legendFlavor');
      const surpriseMeBtn = document.getElementById('surpriseMeBtn');
      const customNameInput = document.getElementById('customDrinkName');
      const addToCartBtn = document.getElementById('addToCartBtn');

      // Flavor Color Mappings
      const flavorMap = {
        mangga: {
          label: "Sari Mangga Gincu",
          price: "+Rp 5k",
          bg: "linear-gradient(to bottom, #f2a93b, #e59828, #c4325b)"
        },
        strawberry: {
          label: "Strawberry Ciwidey",
          price: "+Rp 5k",
          bg: "linear-gradient(to bottom, #c4325b, #a02044, #730e28)"
        },
        chocolate: {
          label: "Cokelat 70% Single Origin",
          price: "+Rp 4k",
          bg: "linear-gradient(to bottom, #8a5a37, #663b1d, #42220f)"
        },
        matcha: {
          label: "Uji Ceremonial Matcha",
          price: "+Rp 6k",
          bg: "linear-gradient(to bottom, #7cc08a, #4e8a5b, #2b5635)"
        },
        aren: {
          label: "Salted Aren Caramel",
          price: "+Rp 3k",
          bg: "linear-gradient(to bottom, #ffb956, #b06e23, #6e4600)"
        },
        lychee: {
          label: "Sari Lychee Segar",
          price: "+Rp 4k",
          bg: "linear-gradient(to bottom, #f7d6dc, #ea9cb2, #d15d7e)"
        }
      };

      flavorChips.forEach(chip => {
        chip.addEventListener('click', function() {
          // Reset styling
          flavorChips.forEach(c => {
            c.className = "flavor-chip group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-container-low hover:bg-surface-container text-primary transition-all";
          });

          // Set active styling
          this.className = "flavor-chip group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-secondary text-on-secondary shadow-[2px_2px_0px_#12301f] transition-all active:translate-y-0.5";

          const flavorKey = this.dataset.flavor;
          const data = flavorMap[flavorKey];
          if (data) {
            visualLayerFlavor.style.background = data.bg;
            visualLayerFlavorLabel.textContent = data.label;
            legendFlavor.textContent = data.label + ' (' + data.price + ')';
          }
        });
      });

      // Surprise Me Randomizer
      if (surpriseMeBtn) {
        const randomNames = [
          "Skripsi Tengah Malam",
          "Kencan Buku Perpustakaan",
          "Matahari Gandaria Pagi",
          "Hujan Sore di Sudirman",
          "Ketenangan Dosen Pembimbing"
        ];
        surpriseMeBtn.addEventListener('click', function() {
          const randomIndex = Math.floor(Math.random() * flavorChips.length);
          flavorChips[randomIndex].click();

          const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
          if (customNameInput) {
            customNameInput.value = randomName;
          }

          // Subtle bounce effect on preview card
          const stickyCard = document.querySelector('#visualLayerFoam')?.parentElement;
          if (stickyCard) {
            stickyCard.classList.add('scale-[1.02]');
            setTimeout(() => stickyCard.classList.remove('scale-[1.02]'), 200);
          }
        });
      }

      // Add to cart feedback micro-interaction
      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
          const originalText = this.innerHTML;
          this.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span><span>Berhasil Ditambahkan!</span>';
          this.classList.remove('bg-secondary-container');
          this.classList.add('bg-primary-container', 'text-on-primary');
          setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.add('bg-secondary-container');
            this.classList.remove('bg-primary-container', 'text-on-primary');
          }, 1800);
        });
      }
    })();
