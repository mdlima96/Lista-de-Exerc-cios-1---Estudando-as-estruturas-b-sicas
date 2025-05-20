/*Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

const prompt = require('prompt-sync')();

const num = prompt('Digite um numero: ');

if(num %2 == 0)
    console.log("Par")

else
    console.log("Ímpar")
