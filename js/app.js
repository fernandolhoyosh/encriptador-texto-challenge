let cadenaUsuario = "";

function startApp () {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('textarea').addEventListener('input', validarCadena); // Seleccionar el textarea y agregar el evento 'input'
  });
  document.getElementById("btn-encriptar").addEventListener("click", function() {
    cadenaUsuario = document.querySelector("textarea").value;
    mostrarElementos(encriptarTexto(cadenaUsuario));
  });
  document.getElementById("btn-desencriptar").addEventListener("click", function() {
    cadenaUsuario = document.querySelector("textarea").value;
    mostrarElementos(desencriptarTexto(cadenaUsuario));
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
  value = value.replace(/[^a-zñ ]+/g, '');
  // Elimina múltiples espacios y asegura que no empiece con espacios
  value = value.replace(/^\s+/g, ''); // Elimina espacios al inicio
  value = value.replace(/\s{2,}/g, ' ');   // Reemplaza múltiples espacios con un solo espacio
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
  document.querySelector(".contenido__seccion__der").setAttribute("style", "display: none");
  document.querySelector(".contenido__seccion__desencriptado").style.display = "flex";
  const mostrarCadena = document.querySelector(".texto_desencriptado");
  mostrarCadena.innerHTML = cadena;
}

startApp();

/* function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  } */