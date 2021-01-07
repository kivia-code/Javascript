import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Criando o primeiro cliente
const cliente1 = new Cliente("Ricardo", 9876543211,"3456");
const contaCorrente1 = new ContaCorrente(100, cliente1, 1001);

console.log("Dados do cliente: ", cliente1, contaCorrente1);
contaCorrente1.depositar(1000);
console.log("Depositando $1000: ", contaCorrente1._saldo);

const valorSacado = contaCorrente1.sacar(50);

console.log("Valor sacado", valorSacado);

console.log("Saldo: ", contaCorrente1._saldo);

// Criando o segundo cliente
console.log("Dados do cliente Alice:");
const cliente2 = new Cliente("Alice", 88822233309,"2645");
const contaCorrente2 = new ContaCorrente(50, cliente2, 1002);

//transferindo um valor para um cliente
let valor = 200;
contaCorrente1.transferir(valor, contaCorrente2);

console.log("Valor: ", valor);
console.log(contaCorrente2);

console.log("Dados do cliente Ricardo:");
console.log(contaCorrente1);

console.log("Numero de contas criadas: ", ContaCorrente.nrmContas);

//utilizando a contaPoupanca
const contapoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contapoupanca);

//utilizando a contaSalario
const contaSalario = new ContaSalario(cliente2);
contaSalario.depositar(100);
console.log(contaSalario);

//Classes funcionarios

const diretor = new Diretor("Rodrigo", 10000, 33322211169);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 24242424211);
gerente.cadastrarSenha("2468");
const cliente = new Cliente("Lais", 78945612379,"456");



const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "2468");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado,gerenteEstaLogado,clienteEstaLogado);
