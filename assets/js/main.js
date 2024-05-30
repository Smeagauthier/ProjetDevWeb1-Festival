document.addEventListener('DOMContentLoaded', (event) => {
    const navIcon = document.getElementById('nav-icon4');
    navIcon.addEventListener('click', () => {
        navIcon.classList.toggle('open');
    });
});
