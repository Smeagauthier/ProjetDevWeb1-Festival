const menuBurger = document.querySelector('.menu-burger'); 
const navMenu = document.querySelector('.menu-classique');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    navMenu.classList.toggle('active');
});