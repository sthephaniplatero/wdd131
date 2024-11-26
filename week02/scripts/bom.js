const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list")

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {  // Verifica que el input no esté vacío
      const li = document.createElement("li");  // Crea un nuevo elemento <li>
      const deleteButton = document.createElement("button");  // Crea un botón de eliminación
  
      li.textContent = input.value;  // El contenido del <li> es el valor del input
      deleteButton.textContent = "❌";  // El contenido del botón de eliminación es "❌"
  
      li.append(deleteButton);  // Añade el botón de eliminación al <li>
      list.append(li);  // Añade el <li> a la lista
  
      // Agrega un event listener al botón de eliminación
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);  // Elimina el <li> de la lista cuando se hace clic en el botón ❌
        input.focus();  // Da foco al input para agregar otro capítulo si se desea
      });
  
      input.value = '';  // Limpia el valor del input después de agregar el capítulo
      input.focus();  // Da foco nuevamente al input
    }
  });




