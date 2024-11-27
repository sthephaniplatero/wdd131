const menuIcon = document.querySelector('.menu-icon');
const topNav = document.querySelector('.top-nav');

menuIcon.addEventListener('click', () => {
    topNav.classList.toggle('active'); // Muestra u oculta el menú
});