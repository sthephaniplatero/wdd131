const reviewsKey = "reviewCount";

function updateReviewCount() {
    let reviewCount = parseInt(localStorage.getItem(reviewsKey)) || 0;

    const reviewCountElement = document.querySelector(".reviews-count");
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
}

function resetReviewCount() {
    localStorage.setItem(reviewsKey, 0);  
    const reviewCountElement = document.querySelector(".reviews-count");
    if (reviewCountElement) {
        reviewCountElement.textContent = 0;
    }
}

document.addEventListener("DOMContentLoaded", updateReviewCount)