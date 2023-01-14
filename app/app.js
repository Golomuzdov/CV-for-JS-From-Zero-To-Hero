const navBtn = document.querySelector('#navToggle');
const navLink = document.querySelector('.nav');
const burgerItem = document.querySelector('.burger_item');

navBtn.addEventListener('click', () => {
    burgerItem.classList.toggle('active');
    navLink.classList.toggle('active');
    console.log('клик');
});