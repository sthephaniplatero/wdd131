// Obtener los elementos del menú
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("top-nav");

// Agregar evento de clic al ícono de menú
menuIcon.addEventListener("click", () => {
    // Alternar la clase "active" para mostrar/ocultar el menú
    navMenu.classList.toggle("active");
});