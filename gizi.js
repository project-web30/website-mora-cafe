/* Interaksi bawaan desain Stitch untuk halaman Info Gizi */
(function() {
      const menuData = {
        mango: {
          title: "Mōra Mango Cheese",
          desc: "Cold brew melati & krim keju Hokkaido",
          price: "25K",
          calories: { s: 190, m: 245, l: 310 },
          sugar: { s: "14 Gram", m: "18 Gram", l: "23 Gram" },
          carbs: { s: "29.1g", m: "37.4g", l: "47.2g" },
          fat: { s: "6.8g", m: "8.7g", l: "11.0g" },
          protein: { s: "3.2g", m: "4.3g", l: "5.5g" },
          note: "Perhitungan untuk formula standar manis 50% & susu pasteurisasi segar",
          photoAlt: "A cold artisan layered drink in a clear fluted glass on a dark green stone café table. Rich yellow Alphonso mango puree sits at the base, topped with light amber cold brewed jasmine tea, finished with a thick cloud of velvety whipped cream cheese foam, fresh diced mango cubes, and a mint sprig. Warm morning cafe lighting."
        },
        strawberry: {
          title: "Mōra Strawberry Cheese",
          desc: "Puree stroberi segar & lapisan keju gurih",
          price: "27K",
          calories: { s: 165, m: 210, l: 275 },
          sugar: { s: "12 Gram", m: "16 Gram", l: "21 Gram" },
          carbs: { s: "25.0g", m: "32.0g", l: "41.5g" },
          fat: { s: "6.4g", m: "8.2g", l: "10.4g" },
          protein: { s: "2.8g", m: "3.5g", l: "4.8g" },
          note: "Perhitungan untuk formula buah stroberi lokal Ciwidey & 50% manis",
          photoAlt: "A vibrant layered strawberry cheese drink in a fluted glass on a green slate table. Vibrant crimson crushed strawberries at the bottom, transparent cold tea layer in center, crowned with thick white cheese foam, fresh strawberry slices, and gold straw in a natural light greenhouse café."
        },
        latte: {
          title: "Mōra Ice Latte",
          desc: "Double shot espresso Garut & fresh milk",
          price: "24K",
          calories: { s: 140, m: 185, l: 240 },
          sugar: { s: "8 Gram", m: "11 Gram", l: "15 Gram" },
          carbs: { s: "14.5g", m: "19.2g", l: "26.0g" },
          fat: { s: "5.1g", m: "6.5g", l: "8.8g" },
          protein: { s: "4.0g", m: "5.2g", l: "7.1g" },
          note: "Perhitungan espresso Garut medium roast dengan 10ml gula aren organik",
          photoAlt: "An iced latte in a clear ribbed glass mug on a wooden coaster. Rich espresso marbling gracefully into fresh dairy milk with ice cubes and a metal reusable spoon beside an open paper notebook."
        }
      };

      let currentMenu = 'mango';
      let currentSize = 'm';

      const menuButtons = document.querySelectorAll('#menu-selector .menu-tab-btn');
      const sizeButtons = document.querySelectorAll('#size-selector .size-btn');
      const valCalories = document.getElementById('val-calories');
      const valSugar = document.getElementById('val-sugar');
      const valCarbs = document.getElementById('val-carbs');
      const valFat = document.getElementById('val-fat');
      const valProtein = document.getElementById('val-protein');
      const drinkTitle = document.getElementById('drink-title');
      const drinkPrice = document.getElementById('drink-price');
      const drinkPhoto = document.getElementById('drink-photo');
      const formulaNote = document.getElementById('formula-note');

      function updateDashboard() {
        const item = menuData[currentMenu];
        if (!item) return;

        valCalories.textContent = item.calories[currentSize];
        valSugar.textContent = item.sugar[currentSize];
        valCarbs.textContent = item.carbs[currentSize];
        valFat.textContent = item.fat[currentSize];
        valProtein.textContent = item.protein[currentSize];

        drinkTitle.textContent = item.title;
        drinkPrice.textContent = item.price;
        formulaNote.textContent = item.note;
        drinkPhoto.setAttribute('data-alt', item.photoAlt);
      }

      menuButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          currentMenu = this.dataset.menu;
          menuButtons.forEach(b => {
            b.className = 'menu-tab-btn px-4 py-2 rounded-full font-label-code text-label-code uppercase transition-transform active:scale-95 bg-surface text-on-surface-variant hover:text-on-surface shadow-sm';
          });
          this.className = 'menu-tab-btn px-4 py-2 rounded-full font-label-code text-label-code uppercase transition-transform active:scale-95 bg-secondary-container text-on-secondary-container font-bold shadow-[2px_2px_0px_#12301f]';
          updateDashboard();
        });
      });

      sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          currentSize = this.dataset.size;
          sizeButtons.forEach(b => {
            b.className = 'size-btn px-3 py-1 rounded-full font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors';
          });
          this.className = 'size-btn px-3.5 py-1 rounded-full font-label-code text-label-code bg-primary-container text-on-primary font-semibold shadow-sm';
          updateDashboard();
        });
      });
    })();
