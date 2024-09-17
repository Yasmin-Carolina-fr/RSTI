const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Escreva seu nome: ", (nome) => {
  interface.question("informe seu salário: ", (salário) => {
    console.log(`O ${nome} recebe R$${salário} por mês.`);

    interface.close();
  });
});
