const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélectionne les boutons des flèches et les dots
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

// Écouteur d'événement pour la flèche gauche
//prevBtn.addEventListener('click', () => {
// console.log("Flèche gauche cliquée");
//});

// Écouteur d'événement pour la flèche droite
//nextBtn.addEventListener('click', () => {
//  console.log("Flèche droite cliquée");
//});

// Initialise l'index de la diapositive en cours
let currentSlideIndex = 0;

// Met à jour les dots pour indiquer la diapositive en cours
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Écouteur d'événement pour le bouton précédent
prevBtn.addEventListener("click", () => {
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1; // Passe à la dernière diapositive
  } else {
    currentSlideIndex--;
  }
  updateCarousel();
  updateDots();
});

// Écouteur d'événement pour le bouton suivant
nextBtn.addEventListener("click", () => {
  if (currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0; // Revient à la première diapositive
  } else {
    currentSlideIndex++;
  }
  updateCarousel();
  updateDots();
});

// Écouteur d'événement pour les dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlideIndex = index; // Met à jour la diapositive en cours en fonction de l'index du bullet point
    updateCarousel();
    updateDots();
  });
});

// Fonction pour mettre à jour le contenu du carrousel
function updateCarousel() {
  // Récupère la diapositive en cours à partir du tableau slides
  const currentSlide = slides[currentSlideIndex];

  // Met à jour l'image du carrousel
  const bannerImage = document.querySelector(".banner-img");
  bannerImage.src = currentSlide.image;
  bannerImage.alt = `Image ${currentSlideIndex + 1}`;

  // Met à jour la ligne de texte du carrousel
  const tagLine = document.querySelector(".banner-img + p");
  tagLine.innerHTML = currentSlide.tagLine;
}

// Initialise les dots
updateDots();
