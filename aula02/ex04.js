//Desenvolva um algoritmo que leia dois números inteiros e mostre o somatórioentre eles.

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("informe sua 1 nota:", (nota) => {
  interface.question("informe sua 2 nota: ", (nota2) => {
    console.log(`nota total ${parseInt(nota) + parseInt(nota2)} `);

    interface.close();
  });
});
