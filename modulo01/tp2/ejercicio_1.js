//Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
//Imprimir estos elementos de menor a mayor cantidad de letras.
//Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) realizadas con los dos elementos numéricos


var valores = [true, false, 2, "hola", "mundo", 3, "char"];
let mayor = "";
let escalerita = "";
let sum, res, mul, div;

var eleccion = prompt("Seleccione un numero. 1_ Suma... 2_ Resta... 3_ Multiplicacion... 4_ Division...");

for (const dato of valores) {
    if (dato.length > mayor.length) {
        mayor = dato;
    }
}

document.write("Texto del Ejercicio " + valores + "</br></br>");
document.write(`El texto mas largo es ${mayor}` + "</br></br>");

if (eleccion == 1) {
    sum = valores [2] + valores [5];
    document.write(`Selecciono Suma su resultado es:  ${sum}`);
} else if (eleccion == 2) {
    res = valores [2] - valores [5];
    document.write(`Selecciono Resta su resultado es:  ${res}`);
} else if (eleccion == 3) {
    mul = valores [2] * valores [5];
    document.write(`Selecciono Multiplicacion su resultado es:  ${mul}`);
} else if (eleccion == 4) {
    div = valores [2] / valores [5];
    document.write(`Selecciono Division su resultado es:  ${div}`);
} else{
    document.write("Seleccione uno de los numeros del abanico.");
}

escalerita = valores.sort(function (a, b){ return b - a});
document.write("</br></br>" + "Escalera de Menor a mayor: " + escalerita);





