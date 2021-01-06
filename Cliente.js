export class Cliente {
  //atributos
  nome;
  _cpf;

  //constructor
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }

  //getters and setters
  get cpf() {
    this._cpf;
  }
}
