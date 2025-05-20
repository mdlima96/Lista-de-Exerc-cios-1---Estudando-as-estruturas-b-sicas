/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 controle if-else.*/

const prompt = require('prompt-sync')();

const idade = prompt('Digite uma idade: ');

if(idade <= 12 && idade > 0)
    console.log("Criança")

else if(idade < 18)
    console.log("adoleceste")

else if(idade < 60)
    console.log("adulto")

else
    console.log("idoso")
