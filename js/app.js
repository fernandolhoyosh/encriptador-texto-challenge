let cadenaUsuario = "";
const inputTextareaUsuario = document.querySelector(".contenido__texto__usuario");
const mostrarCadena = document.querySelector(".texto_desencriptado");

window.addEventListener('resize', () => {
  autoAjustarAlturaTextarea(mostrarCadena);
});

function startApp () {
  
  document.addEventListener('DOMContentLoaded', () => {
    inputTextareaUsuario.focus();
    inputTextareaUsuario.addEventListener('input', validarCadena); // Seleccionar el textarea y agregar el evento 'input'
  });

  document.getElementById("btn-encriptar").addEventListener("click", function() {
    cadenaUsuario = inputTextareaUsuario.value;
    mostrarElementos(encriptarTexto(cadenaUsuario));
  });

  document.getElementById("btn-desencriptar").addEventListener("click", function() {
    cadenaUsuario = inputTextareaUsuario.value;
    mostrarElementos(desencriptarTexto(cadenaUsuario));
  });

  const btnCopiar = document.getElementById("btn-copiar");
  btnCopiar.addEventListener("click", async() => {
    try {
      mostrarCadena.select();
      await navigator.clipboard.writeText(mostrarCadena.value);

      const originalText = btnCopiar.querySelector('.texto_boton_copiar').textContent;
      btnCopiar.querySelector('.texto_boton_copiar').textContent = 'Texto copiado 📑';
      btnCopiar.classList.add('copiado');

        setTimeout(() => {
          btnCopiar.querySelector('.texto_boton_copiar').textContent = originalText;
          btnCopiar.classList.remove('copiado');
        }, 3000);

    } catch (error) {
      console.error(error);
    }
  });
}



function validarCadena(e) {
  /*  const regex = /^[a-zñ]+( [a-zñ]+)*( )?$/; //expresion regular para validar solo minusculas, letra ñ, minimo un espacio entre palabras y no puede empezar con espacio
  const input = e.target.value;
  if (!regex.test(input)) {
      e.target.value = input.slice(0, -1); // Elimina el último carácter ingresado
  } */

  /* e.target.value = e.target.value.replace(/[^a-zñ ]+/g, ''); */

  let value = e.target.value;
  // Elimina caracteres no permitidos
  value = value.replace(/[^a-zñ ]+/g, "");
  // Elimina múltiples espacios y asegura que no empiece con espacios
  value = value.replace(/^\s+/g, ""); // Elimina espacios al inicio
  value = value.replace(/\s{2,}/g, " "); // Reemplaza múltiples espacios con un solo espacio
  e.target.value = value;
}

const encriptarTexto = (cadena) => {
  const cadenaEncriptada = cadena
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  return cadenaEncriptada;
};

const desencriptarTexto = (cadena) => {
  const cadenaDesencriptada = cadena
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  return cadenaDesencriptada;
};

const mostrarElementos = (cadena) => {

  const panelPrimario = document.querySelector(".contenido__seccion__der");
  const panelSecundario = document.querySelector(".contenido__seccion__desencriptado");

  const contenedorTexto = document.querySelector(".contenedor__textos__seccion__der");

  if (inputTextareaUsuario.value == "") {
    panelSecundario.style.display = "none";
    panelPrimario.setAttribute("style", "display: flex");

    // Añadir la clase que activa la animación
    contenedorTexto.classList.add("shake");

    // Remover la clase después de que la animación termine para permitir futuras animaciones
    setTimeout(() => {
      contenedorTexto.classList.remove("shake");
    }, 500); // 500ms coincide con la duración de la animación
  } else {
    console.log(cadena);
    panelPrimario.setAttribute("style", "display: none");
    panelSecundario.style.display = "flex";
    mostrarCadena.value = cadena;
    autoAjustarAlturaTextarea(mostrarCadena);
    inputTextareaUsuario.value = "";
  }
  inputTextareaUsuario.focus();
}

function autoAjustarAlturaTextarea(textarea) {
  textarea.style.height = 'auto'; // Resetea la altura
  textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura al contenido
}

startApp();

/* 
ACTIVIDADES POR HACER
- ajustar css para textarea en movil y tablet (height)
- opcional agregar animaciones
- agregar redes sociales en footer pie de pagina
*/

/* 
lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Orci montes, sit et diam risus scelerisque vitae est.
                Tortor maecenas nunc ut laoreet. Eget diam mauris quam
                quisque ut eget fringilla sit elit. Libero, sodales duis
                fames id diam feugiat aliquet non egestas.
*/