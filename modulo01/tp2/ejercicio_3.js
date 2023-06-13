//El factorial de un número entero positivo se define como el producto de todos los números naturales anteriores o iguales a él. 
// Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x

let num = prompt("Ingrese un numero")

let factorial = 1 

for (let i = 1; i <= num; i++){
    factorial = factorial * i;
}

document.write(factorial)