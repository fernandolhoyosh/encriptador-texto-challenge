// Declaro variables y const globales
let cadenaUsuario = "";
const inputTextareaUsuario = document.querySelector(".contenido__texto__usuario");
const mostrarCadena = document.querySelector(".texto_desencriptado");

// Este evento resize redimensiona la altura del textarea derecho de acuerdo al tamaño del texto
window.addEventListener('resize', () => {
  autoAjustarAlturaTextarea(mostrarCadena);
});

//Funcion principal de inicio de la logica del encriptador de texto
function startApp () {
  
  // Funciones para los eventos de los botones.
  document.addEventListener('DOMContentLoaded', () => {
    inputTextareaUsuario.focus();
    inputTextareaUsuario.addEventListener('input', validarCadena);
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

      btnCopiar.querySelector('.texto_boton_copiar').textContent = 'Texto copiado 📑';
      btnCopiar.classList.add('copiado');
      btnCopiar.disabled = true;

        setTimeout(() => {
          btnCopiar.querySelector('.texto_boton_copiar').textContent = 'Copiar';
          btnCopiar.classList.remove('copiado');
          btnCopiar.disabled = false;
        }, 1500);

    } catch (error) {
      console.error(error);
    }
  });
}

// Funcion para validar en tiempo real letras minusculas, sin acentos y algunos caracteres permitidos en el textarea del usuario con expresion regular
function validarCadena(e) {
  const textarea = e.target;
  textarea.value = textarea.value.toLowerCase().replace(/[^a-zñ\s.,¡!¿?]/g, '');
}

// Funcion para encriptar texto
const encriptarTexto = (cadena) => {
  const cadenaEncriptada = cadena
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return cadenaEncriptada;
};

// Funcion para desencriptar texto
const desencriptarTexto = (cadena) => {
  const cadenaDesencriptada = cadena
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return cadenaDesencriptada;
};

//Funcion para visualizar los elementos en pantalla dependiendo de las funciones encriptar o desencriptar
const mostrarElementos = (cadena) => {

  const panelPrimario = document.querySelector(".contenido__seccion__der");
  const panelSecundario = document.querySelector(".contenido__seccion__desencriptado");
  const contenedorTexto = document.querySelector(".contenedor__textos__seccion__der");

  if (cadena.trim() == "") {
    inputTextareaUsuario.value = "";
    panelSecundario.style.display = "none";
    panelPrimario.setAttribute("style", "display: flex");

    // Añadir la clase que activa la animación de sacudido
    contenedorTexto.classList.add("shake");

    // Remover la clase después de que la animación termine 
    setTimeout(() => {
      contenedorTexto.classList.remove("shake");
    }, 500);
  } else {
    console.log(cadena);
    panelPrimario.setAttribute("style", "display: none");
    panelSecundario.style.display = "flex";
    mostrarCadena.value = cadena.trim().replace(/\s+/g, ' ');
    inputTextareaUsuario.value = "";
    autoAjustarAlturaTextarea(mostrarCadena);
  }
}

//Funcion que ajusta el tamaño del textarea derecho de acuerdo a su contenido
function autoAjustarAlturaTextarea(textarea) {
  textarea.style.height = 'auto'; // Resetea la altura
  textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura al contenido
}

//Iniciar la app
startApp();