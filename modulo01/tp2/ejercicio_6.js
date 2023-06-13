// Escribir un script que muestre la posición de la primera vocal de un texto introducido por
// teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1. 

var Vocales = ["a", "e", "i", "o", "u"];
var Texto = prompt("Introduce un texto");
var TextoVo = Texto.toLowerCase();
var Ubi = 1;
var Parar = false;

for (var i = 0; i < TextoVo.length; i++) {
    for (var j = 0; j < Vocales.length; j++) {
        if (Vocales[j] == TextoVo.charAt(i)) {
            Ubi = i + 1;
            Parar = true;
            break;
        }
    }
    if (Parar) {
        break;
    }
}
document.write("La Vocal es la letra N" + Ubi);