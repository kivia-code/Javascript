console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;
const destino = "Salvador";

listaDeDestinos.push(`Curitiba`); //adicionando na lista
console.log("Destinos Possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log("Boa Viagem!!");
  listaDeDestinos.splice(2, 1);
  temPassagemComprada;
} else {
  console.log("Não é maior de Idade e não posso vender");
  temPassagemComprada = false;
}

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}
console.log("Destino existe", destinoExiste);