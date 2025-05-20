/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
 forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 compradas, calcule e escreva o valor total da compra.*/

 const prompt = require('prompt-sync')();

 const numeroMaças = Number(prompt('Digite o número de maçãs: '));
 let valorMaças;
 
 if (numeroMaças < 12) {
     valorMaças = numeroMaças * 0.3;
     console.log("Valor total da compra = " + valorMaças.toFixed(2) + " R$");
 } else {
     valorMaças = numeroMaças * 0.25;
     console.log("Valor total da compra = " + valorMaças.toFixed(2) + " R$");
 }
 