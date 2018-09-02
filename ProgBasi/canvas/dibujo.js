var txtLineas = document.getElementById("txtLineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick() {
  var lineas = parseInt(txtLineas.value);
  var l = 0;

  var espacio;
  espacio = ancho / lineas;

  var x1, y1, y2;
  var color = "#000";*9

  for (l = 0; l < lineas; l++) {
    y1 = espacio * l;
    x1 = espacio * (l + 1);
    y2 = ancho - y1;

    dibujarLinea(color, 0, y1, x1, ancho);
    dibujarLinea(color, y1, 0, ancho, x1);
    dibujarLinea(color, x1, ancho, ancho, y2);
    dibujarLinea(color, x1, 0, 0, y2);

    console.log("Linea: " + l);
  }

  dibujarLinea(color, 1, 1, 1, ancho-1);
  dibujarLinea(color, 1, ancho-1, ancho-1, ancho-1);
  dibujarLinea(color, ancho-1, 1, 1, 1);
  dibujarLinea(color, ancho-1, ancho-1, ancho-1, 1);
}
