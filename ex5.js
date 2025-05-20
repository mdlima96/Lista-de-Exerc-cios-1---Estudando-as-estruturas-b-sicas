/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 utilizando if-else.*/

const prompt = require('prompt-sync')();

const peso = prompt('Digite o peso: ');
let altura = prompt('Digite a altura: ');

let imc = peso/(Math.pow(altura,2))
console.log(imc)

if(imc < 18.5)
    console.log("Abaixo do peso")

else if(imc < 24.9)
    console.log("normal")

else if(imc < 29.9)
    console.log("sobrepeso")

else
    console.log("obeso")
