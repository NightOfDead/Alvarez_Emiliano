// Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
// < 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
// “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente” 

var Nota1 = parseInt(prompt("Ingrese la Primer Nota"));
var Nota2 = parseInt(prompt("Ingrese la Segunda Nota"));
var Nota3 = parseInt(prompt("Ingrese la Tercer Nota"));

if ((Nota1 <= 10) && (Nota2 <= 10) && (Nota3 <= 10)) {
    var promedio = ((Nota1 + Nota2 + Nota3) / 3);
    let Final = Math.round(promedio);
    if (Final >= 9) {
        document.write("Sobresaliente");
    } else if (Final <= 8 && Final >= 6) {
        document.write("Aprobado");
    } else {
        document.write("Desaprobado");
    }
} else {
    document.write("No Existen Notas Mayores a 10");
}





   


