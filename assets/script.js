// Array of slides
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

// Select arrow buttons and dots
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

// Initialize the current slide index
let currentSlideIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1; // Move to the last slide
  } else {
    currentSlideIndex--;
  }
  updateCarousel();
  updateDots();
});

nextBtn.addEventListener("click", () => {
  if (currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0; // Return to the first slide
  } else {
    currentSlideIndex++;
  }
  updateCarousel();
  updateDots();
});

// Event listener for the dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlideIndex = index; // Update the current slide based on the clicked bullet point index
    updateCarousel();
    updateDots();
  });
});

// Update the dots to indicate the current slide
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Function to update the carousel content
function updateCarousel() {
  // Get the current slide from the slides array
  const currentSlide = slides[currentSlideIndex];

  // Update the carousel image
  const bannerImage = document.querySelector(".banner-img");
  bannerImage.src = currentSlide.image;
  bannerImage.alt = `Image ${currentSlideIndex + 1}`;

  // Update the carousel tagline text
  const tagLine = document.querySelector(".banner-img + p");
  tagLine.innerHTML = currentSlide.tagLine;
}

// Initialize the dots
updateDots();
