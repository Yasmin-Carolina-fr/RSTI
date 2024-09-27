class contaBancaria {
  constructor(conta, nome, saldo) {
    this.conta = conta;
    this.nome = nome;
    this.saldo = saldo;
  }
  nome() {
    console.log('O nome do titular da conta é ');
  }
  conta() {
    console.log('O numero da conta é');
  }
  saldo() {
    console.log('O saldo da conta é');
  }
}
