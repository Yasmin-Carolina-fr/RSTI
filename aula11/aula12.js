/*class ContaBancaria{
  constructor(conta, nome, saldo) {
    this.conta = conta;
    this.nome = nome;
    this.saldo = saldo;
  }
  mostrarNome() {
    console.log(`O nome do titular da conta é ${this.nome}`);
  }

  mostrarConta() {
    console.log(`O número da conta é ${this.conta}`);
  }

  mostrarSaldo() {
    console.log(`O saldo da conta é R$${this.saldo.toFixed(2)}`);
  }
  deposito(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
    } else {
      console.log('O valor do depósito deve ser positivo!');
    }
  }

  saque(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
    } else if (valor > this.saldo) {
      console.log('Saldo insuficiente para saque!');
    } else {
      console.log('O valor do saque deve ser positivo!');
    }
  }

  mostrarInfo() {
    this.mostrarNome();
    this.mostrarConta();
    this.mostrarSaldo();
  }
}
function criarConta() {
  const conta1 = prompt('Digite o número da conta:');
  const nome = prompt('Digite o nome do titular:');
  const saldoInicial = parseFloat(prompt('Digite o saldo inicial:'));

  return new ContaBancaria(123456, carol, 1000);
}
const conta1 = criarConta();
conta1.mostrarInfo();
conta1.deposito(500);
conta1.mostrarInfo();
conta1.saque(200);
conta1.mostrarInfo();
conta1.saque(1500);*/

/*class Alunos {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  mostrarNome() {
    console.log('O nome do aluno é: ' + this.nome);
  }

  mostrarMatricula() {
    console.log('O número da matrícula é: ' + this.matricula);
  }

  calcularMedia() {
    const total = this.notas.reduce((acc, nota) => acc + nota, 0);
    const media = total / this.notas.length;
    console.log('A média das notas é: ' + media);
    if (media < 6) {
      console.log('Desempenho: Bom');
    } else {
      console.log('Desempenho: Ótimo');
    }
    return media;
  }
}

const aluno = new Alunos('yasmin', '123456', [7, 8, 5, 6]);
aluno.mostrarNome();
aluno.mostrarMatricula();
aluno.calcularMedia();*/
