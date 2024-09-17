const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("informe seu saldo: ", (num) => {
  const compraDolar = parseFloat(num) / 5.6;
  console.log(`Com ${num} você consegue comprar ${compraDolar} doláres`);

  interface.close();
});
