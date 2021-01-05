console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
//const saoPaulo= `São Paulo`;
//const rioDeJaneiro= `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); //adicionando na lista
console.log("Destinos Possíveis");
console.log(listaDeDestinos);
listaDeDestinos.splice(1,1); //removendo itens da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
listaDeDestinos.push(`São Paulo`);
console.log(listaDeDestinos);
