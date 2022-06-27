const hamburger = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav')

function showNav() {
    nav.classList.toggle('visible')
}


hamburger.addEventListener('click', showNav);