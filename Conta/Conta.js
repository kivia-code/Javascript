//Classe Abstrata
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instanciar um objeto do tipo Conta Diretamente, pois se trata de classe abstrata"
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  //getters and setters
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  //metodos

  //metodo abstrato
  sacar(valor) {
    throw new Error("O método sacar da conta é abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valorSacado;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    conta.cidade = "São Paulo";
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
