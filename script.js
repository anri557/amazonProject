const slides = document.querySelectorAll('.swiper-slide');
let currentIndex = 0; 
let slideInterval; 

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}


function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); 
}

// Function to stop auto-sliding
function stopAutoSlide() {
    clearInterval(slideInterval);
}


document.querySelector('.swiper-button-next').addEventListener('click', () => {
    nextSlide();
    stopAutoSlide(); 
    startAutoSlide(); 
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});


updateSlides();
startAutoSlide();




const sliders = document.querySelectorAll('.section-images'); // Select all slider containers
const slideAmount = 300;

function nextSlide2(event) {
    const slider = event.target.closest('.section1').querySelector('.section-images');
    slider.scrollLeft += slideAmount;
}

function prevSlide2(event) {
    const slider = event.target.closest('.section1').querySelector('.section-images');
    slider.scrollLeft -= slideAmount;
}

// Attach event listeners
document.querySelectorAll('.swiper-button-next').forEach(button => {
    button.addEventListener('click', nextSlide2);
});

document.querySelectorAll('.swiper-button-prev').forEach(button => {
    button.addEventListener('click', prevSlide2);
});
