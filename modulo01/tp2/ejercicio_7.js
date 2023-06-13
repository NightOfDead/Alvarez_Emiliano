// Escribir una función que reciba un texto y lo devuelva al revés.

var Texto = prompt("Introduce un Texto:");
let Num = Texto.length;
let Caja;
let Exit = "";

for (i = 0; i < Num; i++) {
    Caja = Texto.charAt(i);
    Exit = Caja + Exit;
}
document.write(Exit);