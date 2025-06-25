 let allDogs = [];

    // Extract breed from URL
    function getBreedName(url) {
      const parts = url.split('/');
      const breedIndex = parts.indexOf("breeds") + 1;
      let breed = parts[breedIndex];
      if (parts[breedIndex + 1] && !parts[breedIndex + 1].endsWith(".jpg")) {
        breed += " " + parts[breedIndex + 1];
      }
      return breed.replace("-", " ");
    }

    async function fetchDog() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      return data.message; // image URL
    }

    async function loadDogs() {
      const container = document.getElementById("dog-container");
      container.innerHTML = "";
      allDogs = [];

      for (let i = 0; i < 5; i++) {
        const dogUrl = await fetchDog();
        const breed = getBreedName(dogUrl);
        allDogs.push({ url: dogUrl, breed });
        displayDog(dogUrl, breed);
      }
    }

    function displayDog(url, breed) {
      const container = document.getElementById("dog-container");
      const card = document.createElement("div");
      card.className = "dog-card";

      const img = document.createElement("img");
      img.src = url;
      img.alt = "Dog";

      const caption = document.createElement("div");
      caption.className = "breed-name";
      caption.innerText = breed;

      card.appendChild(img);
      card.appendChild(caption);
      container.appendChild(card);
    }

    // Filter functionality
    document.getElementById("breedFilter").addEventListener("input", function () {
      const keyword = this.value.toLowerCase();
      const container = document.getElementById("dog-container");
      container.innerHTML = "";

      const filtered = allDogs.filter(dog => dog.breed.includes(keyword));

      if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">No results found for "${keyword}"</div>`;
      } else {
        filtered.forEach(dog => displayDog(dog.url, dog.breed));
      }
    });

    // Load on page load
    window.onload = loadDogs;