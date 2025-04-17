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

// Fonction pour masquer le titre, la date et le nom du fichier lors de l'impression
function masquerPourImpression() {
  // Sauvegarder le titre original
  const titreOriginal = document.title;

  // Changer le titre avant l'impression
  window.addEventListener('beforeprint', function() {
      document.title = ''; // Masquer le titre

      // Masquer date et nom du fichier
      const style = document.createElement('style');
      style.appendChild(document.createTextNode('@page { size: auto; margin: 0; }'));
      document.head.appendChild(style);

      // Enlever mode sombre si mode sombre présent
      const body = document.body;
      if (body.classList.contains('dark-mode')) {
          body.classList.remove('dark-mode'); // Retirer le mode sombre pour l'impression
      }

      // Enlever les particules de particles.js
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
          particlesContainer.style.display = 'none'; // Masquer les particules
      }

  });

  // Restaurer le titre après l'impression
  window.addEventListener('afterprint', function() {
      document.title = titreOriginal; // Restaurer le titre original

      // Supprimer le style ajouté
      const style = document.querySelector('style[media="print"]');
      if (style) {
          style.parentNode.removeChild(style);
      }

      // Restaurer le mode sombre si supprimer
      if (body.classList.contains('dark-mode') === false) {
          body.classList.add('dark-mode'); // Réactiver le mode sombre
      }

  });
}

// Appel fonction pour masquer impression
masquerPourImpression();


// Lazyload et scroll
function scrollReveal() {
  const sections = document.querySelectorAll('.scroll-reveal');

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top; // Objet avec position élément, on prend position top
      const windowHeight = window.innerHeight; // Hauteur fenêtre

      /**
       * On compare position du haut de l'élément avec la hauteur de la fenêtre
       * Si la position élément < hauteur de la fenêtre - 100 pixels, on ajoute la classe "visible" ppour déclencher l'animation
       * Sinon, on enlève la classe "visible" pour masquer l'élément car pas besoin de l'afficher car pas dans notre champ de vision
       */
      if (sectionTop < windowHeight - 100) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
}

// Appeler fonction avec scroll
window.addEventListener('scroll', scrollReveal);

// Appeler fonction au chargement de la page
window.addEventListener('load', scrollReveal);
