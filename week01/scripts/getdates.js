// Obtener la fecha de última modificación como string
const lastModification = new Date(document.lastModified);


const dateOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
const dateFormat = lastModification.toLocaleString('es-ES', dateOptions);

// Insertar la fecha y hora en el elemento con id "fecha-modificacion" en el footer
document.getElementById("date-modification").textContent = dateFormat;