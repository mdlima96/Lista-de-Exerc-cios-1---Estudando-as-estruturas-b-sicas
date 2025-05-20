/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')();

const opcao = prompt('Escolha uma opcao:\n Digite "1" para Opção 1.\n Digite "2" para Opção 2.\n Digite "3" para Opção 3.\n');

switch (opcao) {
    case "1":
      console.log("Opção 1")
      break;
    case "2":
        console.log("Opção 2")
      break;
    case "3":
        console.log("Opção 3")
      break;
    default:
      console.log("Opção invalida")
  }