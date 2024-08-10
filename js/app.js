function startApp () {
    encriptarTexto();
}

const encriptarTexto = () => {
    document.getElementById("btn-encriptar").addEventListener("click", function() {

        const cadena = document.querySelector('textarea').value;
        const cadenaEncriptada = document.querySelector(".texto_desencriptado");

        document.querySelector(".contenido__seccion__der").setAttribute("style", "display: none");
        document.querySelector(".contenido__seccion__desencriptado").style.display = "flex";

        console.log(cadena);
        cadenaEncriptada.innerHTML = cadena;
    });
}

const desencriptarTexto = () => {

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