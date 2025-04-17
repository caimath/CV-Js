// Mode nocturne
const toggleButton = document.getElementById('modeToggle');
const body = document.body;

// Appliquer le mode enregistré
if (localStorage.getItem('mode') === 'dark') {
body.classList.add('dark-mode');
toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
body.classList.toggle('dark-mode');

if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
    toggleButton.textContent = '☀️';
} else {
    localStorage.setItem('mode', 'light');
    toggleButton.textContent = '🌙';
}
});

// Effet lightbox pour photo mathias
const profilePhoto = document.getElementById("photoMathias");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("closeBtn");

// Ouvre la lightbox
profilePhoto.addEventListener("click", () => {
    lightbox.style.display = "flex";
});


// Ferme la lightbox en cliquant en dehors de l'image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
      lightbox.style.display = "none";
  }
});


// Ferme avec la touche Échap
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});

// Ancre qui ramène au top
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

document.querySelectorAll('a[href^="#top"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});

// PraticlesJS, particule en mouvement dans le header
particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60, "density": { "enable": true, "value_area": 800 }},
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 0.8 }},
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
  
