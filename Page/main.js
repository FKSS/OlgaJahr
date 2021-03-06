const bar = document.querySelector('.bar:nth-child(3)');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const menuBars = [...document.querySelectorAll('.bar')];


menu.addEventListener('click', () => {
    menuBars.forEach(bar => {
        bar.classList.toggle('active-menu');
    })
    bar.classList.toggle('active-bar');
    nav.classList.toggle('active-nav');
})