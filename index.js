import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Criando o primeiro cliente
const cliente1 = new Cliente("Ricardo", 9876543211);
const conta1 = new ContaCorrente(1001, cliente1, 0);

console.log("Dados do cliente: ", cliente1, conta1);
conta1.depositar(1000);
console.log("Depositando $1000: ", conta1._saldo);

const valorSacado = conta1.sacar(50);

console.log("Valor sacado", valorSacado);

console.log("Saldo: ", conta1._saldo);

// Criando o segundo cliente
console.log("Dados do cliente Alice:");
const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(102, cliente2, 0);

//transferindo um valor para um cliente
let valor = 200;
conta1.transferir(valor, conta2);

console.log("Valor: ", valor);
console.log(conta2);

console.log("Dados do cliente Ricardo:");
console.log(conta1);

console.log("Numero de contas criadas: ", ContaCorrente.nrmContas);
