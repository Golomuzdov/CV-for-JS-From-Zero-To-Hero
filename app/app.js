const navBtn = document.querySelector('#navToggle');
const navLink = document.querySelector('.header__inner-nav');
const burgerItem = document.querySelector('.header__inner-burger-line');
const svgItem = document.querySelectorAll('.interests__inner-items-icons');

navBtn.addEventListener('click', () => {
    burgerItem.classList.toggle('active');
    navLink.classList.toggle('active');
});

const images = document.querySelectorAll('.midjourney__inner-slider .midjourney__inner-slider-line img');
const sliderLine = document.querySelector('.midjourney__inner-slider .midjourney__inner-slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.midjourney__inner-slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.midjourney__inner-button_next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.midjourney__inner-button_prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

