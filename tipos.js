"use strict";
//--------------------------------------------------------------------------------------------------------
// Gama Experience Type Script
//Boolean
var contaPaga = false;
//Number
var idade = 35;
var avaliacao = 4.5;
//String
var nome = "Marina";
//Array
var idades = [35, 37, 38];
var idade2 = [99, 33, 44, 55];
//tuple
var players;
players = ['Ana', 'Maria', false];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["approvado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var meuStatusdaAprovacao = StatusAprovacao.approvado;
//Any
var retornoDaAPI = [134, 556, true, 'Ana'];
//void
function printNaTela(msg) {
    console.log(msg);
}
//null e undefined
var u = undefined;
var n = null;
//objeto
function criar(objeto) {
    //,...
}
criar({
    propriedade: 1,
}); //criar ('Ana') //gera erro
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new EvalError(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
var nota = 25;
function exibirtNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirtNota(8);
exibirtNota('7');
//type Funcionarios = Arra<Funcionario>;
var funcionarios = [{
        nome: 'Ana',
        sobrenome: 'Lima',
        funcao: 'Diretora',
        dataNascimento: new Date()
    }, {
        nome: 'Maria',
        sobrenome: 'Silva',
        funcao: 'Gerente',
        dataNascimento: new Date()
    }
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário', funcionario.nome);
    }
}
var contato = {
    nome: 'Vitor',
    telefone1: '1234567',
};
// type assertion 
var minhaIdade = 23;
// (minhaIdade as number).toString();
minhaIdade.toString();
// const input = document.getElementById("numero") as HTMLInputElement;
var input = document.getElementById("numero");
console.log(input.value); //para retornar de um html
