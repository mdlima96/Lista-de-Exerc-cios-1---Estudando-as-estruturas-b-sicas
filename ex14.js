/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 utilizando um loop for ou while.*/

 const prompt = require('prompt-sync')();
 let numero = Number(prompt('Digite um número: '));
 let fatorial = 1;
 
 console.log("O fatorial do "+ numero +" é: ")
 
 for(let i = 1; i <= numero; i++){
     fatorial *= i;    
 }

 console.log(fatorial)