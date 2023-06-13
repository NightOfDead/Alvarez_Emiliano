// Crear una función que muestre información sobre una cadena de texto que se le pasa como
// argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

var texto = prompt("Ingrese su cadena de texto");

function analizar_texto(texto){
    if (texto === texto.toUpperCase()){
        return "El texto esta formada solo por mayusculas";
    } else if (texto === texto.toLowerCase()){
        return "El texto esta formado solo por minusculas";
    } else {
        return "El texto esta formado por una mezcla de mayusculas y minusculas";
    }
}

document.write(analizar_texto(texto))