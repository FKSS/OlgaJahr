const bar = document.querySelector('.bar:nth-child(3)');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    bar.classList.toggle('active');
})