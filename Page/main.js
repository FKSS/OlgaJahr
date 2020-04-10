const bar = document.querySelector('.bar:nth-child(3)');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');


menu.addEventListener('click', () => {
    bar.classList.toggle('active-bar');
    nav.classList.toggle('active-nav');
})