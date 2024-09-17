const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("informe o numero de dias trabalhados: ", (num) => {
  const horasMes = parseInt(num) * 8;
  const salario = horasMes * 25;
  console.log(salario);

  interface.close();
});
