console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;
const destino = "Curitiba"

listaDeDestinos.push(`Curitiba`); //adicionando na lista
console.log("Destinos Possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log(`Comprador maior de idade`);
  listaDeDestinos.splice(3, 1); //removendo item da lista
  console.log(listaDeDestinos);
} else {
  //A pessoa é menor de idade
  if (estaAcompanhada) {
    console.log(`Comprador está acompanhado: compra validada`);
    listaDeDestinos.splice(3, 1); //removendo item da lista
  } else {
    console.log(`Não é maior de idade e não posso vender`);
  }
}

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

