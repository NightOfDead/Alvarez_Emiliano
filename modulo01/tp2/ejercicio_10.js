let Dia, Mes, Ano;
// Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
// Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.

Mes = prompt("Introduzca el numero del mes:", "");
Mes = parseInt(Mes);
if (Mes >= 1 && Mes <= 12){
    if (Mes == 1 || Mes == 3 || Mes == 5 || Mes == 7 || Mes == 8 || Mes == 10 || Mes == 12) {
        document.write("Este Mes tiene 31 dias.");
    } else if (Mes == 2) {
        document.write("Este mes Puede tener 30 Dias o Normalmente 28 Dias.");
    } else {
        document.write("Este mes tiene 30 dias.");
    }
} 

    