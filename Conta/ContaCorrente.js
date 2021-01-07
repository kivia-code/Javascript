import {Conta} from "./Conta.js";
export class ContaCorrente extends Conta {
  // //atributos
  // agencia;
  // _cliente;
  // _saldo = 0;
  // Os atributos foram comentados porque no construtor eles já foram declarados e inicializados.
  static nrmContas = 0;

  //constructor
  constructor(saldo,cliente, agencia) {
    super(0,cliente,agencia);
    ContaCorrente.nrmContas += 1;
  }

  //metodos
  //sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }

}
