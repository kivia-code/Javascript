import { Cliente } from "./Cliente.js";
export class ContaCorrente {
  //atributos
  agencia;
  _cliente;
  _saldo = 0;
  static nrmContas=0;

  //constructor
  constructor(cliente, agencia, saldo,nrmContas) {
    this._cliente = cliente;
    this.agencia = agencia;
    this._saldo = saldo;
    ContaCorrente.nrmContas +=1;
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
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
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
