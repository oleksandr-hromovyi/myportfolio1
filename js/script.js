document.getElementById('btn-menu').addEventListener('click', () => { document.getElementById('wrapper').classList.add('menu-open') });
document.getElementById('menu-button-close').addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });

const navLinks = document.getElementsByClassName('nav-links-a');

for (const elem of navLinks) {
    elem.addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });
}