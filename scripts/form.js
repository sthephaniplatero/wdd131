const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Cower Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Populate the select dropdown
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("subject"); // Match the id in the HTML
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Use the product id as the value
        option.textContent = product.name; // Use the product name for display
        productSelect.appendChild(option);
    });
});