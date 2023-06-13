let dato, resultado;
//Declaramos 2 datos.
val1 = window.prompt("Introduce tu nombre", "...");
// Declaramos Variable que recibe un dato del usuario, mediante una caja de texto.
val2 = window.prompt("Introduce tu apellido", "...");
// Declaramos una segunda Variable que recibe otro dato del usuario, mediante una caja de texto.
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
// Ocupamos el receptaculo, para concatenar los 2 valores del usuario y devolverle una cadena de texto.
document.write(resultado);
//Se imprime la Cadena.