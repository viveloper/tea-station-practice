const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');

navBtn.addEventListener('click', openNavbar);
navClose.addEventListener('click', closeNavbar);

function openNavbar() {
  navbar.classList.add('navbar-open');
}

function closeNavbar() {
  navbar.classList.remove('navbar-open');
}
