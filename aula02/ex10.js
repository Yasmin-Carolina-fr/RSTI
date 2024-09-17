const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Escreva seu nome: ", (nome) => {
  interface.question("informe seu salário: ", (salario) => {
    const aumento = parseInt(salario) * 0.15;
    console.log(`O salário ${parseInt(salario) + aumento}`);
    interface.close();
  });
});
git push
