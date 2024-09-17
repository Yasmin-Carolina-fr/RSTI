{
  let num1 = 5;
  let num2 = 7;
  let soma = num1 + num2;
  console.log("a soma dos numeros é:" + soma);
}

console.log("Hello, World!");

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*interface.question("Informe seu nome: ", (nome) => {
  interface.question("Informe seu salário: ", (salario) => {
    console.log(`O ${nome} recebe R$${salario} por mês.`);

    interface.close();
  });
})
*/

/*interface.question("Informe o primeiro número: ", (num1) => {
  interface.question("Informe o segundo número: ", (num2) => {
    console.log(
      `O somatório dos valores é: ${parseInt(num1) + parseInt(num2)}`
    );

    interface.close();
  });
});


/*Faça um programa que leia as duas notas de um aluno em uma matéria e
mostre na tela a sua média na disciplina.*/
  

git push 