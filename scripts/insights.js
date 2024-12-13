const form = document.getElementById('insight-form');
  const successMessage = document.getElementById('success-message');

  // Evitar que el formulario se envíe de forma predeterminada (simulando un envío exitoso)
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío real del formulario

    // Mostrar el mensaje de éxito
    successMessage.classList.remove('hidden');

    // Opcionalmente, puedes limpiar el formulario
    form.reset();  // Limpiar el formulario
  });