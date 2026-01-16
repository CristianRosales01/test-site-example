const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
const buttons = document.querySelectorAll(".carousel-btn");
let currentIndex = 0;
let intervalId;

const showSlide = (index) => {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
  currentIndex = index;
};

const nextSlide = () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
};

const prevSlide = () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
};

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 5000);
};

const resetAutoPlay = () => {
  clearInterval(intervalId);
  startAutoPlay();
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
    resetAutoPlay();
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoPlay();
  });
});

startAutoPlay();
