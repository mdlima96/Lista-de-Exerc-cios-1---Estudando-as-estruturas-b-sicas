/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 e escreve-los em ordem crescente.*/

 const prompt = require('prompt-sync')();

 const numeroA = Number(prompt('Digite um número: '));
 const numeroB = Number(prompt('Digite outro número: '));
 
 if (numeroA < numeroB) {
     console.log(numeroA+ ","+ numeroB);
 } else {
    console.log(numeroB+ ","+ numeroA);
 }
 
 