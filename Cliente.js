export class Cliente {
  // //atributos
  // nome;
  // _cpf;
  //Os atributos foram comentados porque no construtor eles já foram declarados e inicializados.

  //constructor
  constructor(nome, cpf, senha){
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
}

  //getters and setters
  get cpf() {
    this._cpf;
  }


  //metodos
autenticar(){
  return true;
}


}
