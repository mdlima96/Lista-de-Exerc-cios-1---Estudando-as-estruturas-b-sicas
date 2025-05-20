/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 amédiaaritmética desses números.*/

const prompt = require('prompt-sync')();

let numero = 1;
let media = 0;
let contador = 0;
let total = 0;

while(numero != 0){
    numero = Number(prompt('Digite um número: '));
    media += numero;
    contador++;
}

total = media/(contador - 1);
console.log(total)