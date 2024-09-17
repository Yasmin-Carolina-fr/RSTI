const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("informe 1 numero: ", (num) => {
  const antecessor = parseInt(num) - 1;
  const sucessor = parseInt(num) + 1;
  console.log(
    `O antecessor de ${num} é ${antecessor} e o sucessor é ${sucessor}`
  );

  interface.close();
});
