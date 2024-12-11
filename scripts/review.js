const reviewsKey = "reviewCount";

// Función para incrementar y mostrar el contador
function updateReviewCount() {
    // Recupera el valor actual del contador desde localStorage, o inicializa en 0
    let reviewCount = parseInt(localStorage.getItem(reviewsKey)) || 0;

    // Actualiza el contador mostrado en la página
    const reviewCountElement = document.querySelector(".reviews-count");
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
}

// Función para restablecer el contador a cero
function resetReviewCount() {
    localStorage.setItem(reviewsKey, 0);
    const reviewCountElement = document.querySelector(".reviews-count");
    if (reviewCountElement) {
        reviewCountElement.textContent = 0;
    }
}

// Ejecuta la función al cargar la página para mostrar el contador actual
document.addEventListener("DOMContentLoaded", updateReviewCount);