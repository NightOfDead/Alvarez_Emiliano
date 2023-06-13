//Escribir el código de una función a la que se pasa como parámetro un número entero y
// devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
// pantalla el resultado devuelto por la función. 

var NumPoI = prompt ("Ingrese un Numero Entero");
let esPar = (NumPoI / 2 == 0);

function ParImpar(NumPoI){
    if (NumPoI >= 0){
        if (NumPoI % 2 === 0){
            return "Es Par"; 
        } else {
            return "Es Impar";
        }
    } else {
        return "No se aceptan Numeros Negativos!";
    }
}

document.write(ParImpar(NumPoI))