const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderTrack = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.card-fitur');

const cardWidth = cards[0].offsetWidth; // Lebar setiap kartu
const visibleCards = 3; // Jumlah kartu yang terlihat
const moveBy = cardWidth * visibleCards; // Perpindahan (3 kartu)
const totalCards = cards.length;
const totalWidth = totalCards * cardWidth; // Total lebar track slider
let currentPosition = 0;

// Atur lebar track slider
sliderTrack.style.width = `${totalWidth}px`;

// Tombol sebelumnya
document.getElementById('prevBtn').addEventListener('click', () => {
  currentPosition -= moveBy;
  if (currentPosition < 0) {
    currentPosition = 0; // Tidak bisa melewati batas kiri
  }
  sliderTrack.style.transform = `translateX(-${currentPosition}px)`;
});

// Tombol berikutnya
document.getElementById('nextBtn').addEventListener('click', () => {
  currentPosition += moveBy;
  if (currentPosition > totalWidth - (cardWidth * visibleCards)) {
    currentPosition = totalWidth - (cardWidth * visibleCards); // Tidak bisa melewati batas kanan
  }
  sliderTrack.style.transform = `translateX(-${currentPosition}px)`;
});
