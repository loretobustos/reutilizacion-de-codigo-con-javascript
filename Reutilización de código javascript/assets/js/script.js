function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
  }
  





  //Función para cambiar el color de fondo al hacer clic en un botón
  function cambiarColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  


//Función para mostrar y ocultar un elemento al hacer clic en un botón
function mostrarOcultar() {
    var elemento = document.getElementById('elemento');
    if (elemento.style.display === 'none') {
      elemento.style.display = 'block';
    } else {
      elemento.style.display = 'none';
    }
  }
  


//Función para avanzar o retroceder en un carrusel de imágenes
  var imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
var indice = 0;

function carruselAvanzar() {
  indice = (indice + 1) % imagenes.length;
  document.getElementById('imagenCarrusel').src = imagenes[indice];
}

function carruselRetroceder() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  document.getElementById('imagenCarrusel').src = imagenes[indice];
}




