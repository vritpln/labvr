const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    if ( window.scrollY > 1 ) {
    navbar.classList.replace('bg-transparent','nav-color');
    } else if (window.scrollY <= 1) {
        navbar.classList.replace('nav-color','bg-transparent');
    }
});

const body = document.getElementsByTagName('body')[0];
body.addEventListener('touchmove', function() {
    if ( window.scrollY > 1 ) {
        navbar.classList.replace('bg-transparent','nav-color');
    } else if (window.scrollY <= 1) {
        navbar.classList.replace('nav-color','bg-transparent');
    }
});

const sliderTrack = document.querySelector(".slider-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let position = 0; // Track the current position of the slider
const slideWidth = 270; // Approximate width of one slide (including margin)
const slidesToShow = 4; // Number of slides to show at a time
const totalSlides = 8; // Total number of slides

// Move slider to the left
prevBtn.addEventListener("click", () => {
    if (position < 0) {
        position += slideWidth;
        sliderTrack.style.transform = `translateX(${position}px)`;
    }
});

// Move slider to the right
nextBtn.addEventListener("click", () => {
    if (Math.abs(position) < (totalSlides - slidesToShow) * slideWidth) {
        position -= slideWidth;
        sliderTrack.style.transform = `translateX(${position}px)`;
    }
});

