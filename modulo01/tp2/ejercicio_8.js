// Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
// imprima por pantalla usando document.write().

var Limite = 100;
var NumerosRandom = []
while(NumerosRandom.length < Limite ){
  var Aleatorio = Math.ceil(Math.random() * Limite);
  var existe = false;
  for(var i=0; i < NumerosRandom.length; i++){
	if(NumerosRandom [i] == Aleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    NumerosRandom[NumerosRandom.length] = Aleatorio;
  }

}
document.write("Toma tus Numeros Aleatorios : " + NumerosRandom);