/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 Fibonacci utilizando um loop for.*/

 let a = 0;
 let b = 1;
 
 console.log(a); // F(0)
 console.log(b); // F(1)
 
 for (let i = 2; i <= 10; i++) {
     let proximo = a + b;
     console.log(proximo);
     a = b;
     b = proximo;
 }
 