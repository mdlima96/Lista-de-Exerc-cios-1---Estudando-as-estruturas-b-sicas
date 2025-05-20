/*Crie um programa que exibe a tabuada de um número fornecidopelousuário (de 1 a
 10) utilizando um loop for.*/

const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número: '));
let tabuada = 0;

console.log("A tabuada do "+ numero +" é: ")

for(let i = 0; i<11; i++){
    tabuada = numero*i;
    console.log(tabuada)
}
