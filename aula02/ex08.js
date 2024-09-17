const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("informe a altura da  parede :", (altura) => {
  interface.question("informe a largura da  parede :", (altura) => {
    const area = altura * largura;
    const soma = (altura * largura) / 2 == area;
  });
  console.log(` total ${parseInt(largura) + parseInt(altura)}`);
});
