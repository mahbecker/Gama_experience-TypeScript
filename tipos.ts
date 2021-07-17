
//--------------------------------------------------------------------------------------------------------
// Gama Experience Type Script


//Boolean
const contaPaga: boolean=false;

//Number
const idade:number=35;
const avaliacao:number =4.5;
//String
const nome:string="Marina";
//Array
const idades:number[]=[35,37,38];
const idade2: Array<number>=[99,33,44,55];
//tuple
let players: [string,string,boolean];
players=['Ana','Maria',false];
//Enum
enum StatusAprovacao{
    approvado ='001',
    Pendente = '002',
    Rejeitado = '003'
}

const meuStatusdaAprovacao: StatusAprovacao=StatusAprovacao.approvado;
//Any
const retornoDaAPI=[134,556,true, 'Ana'];
//void
function printNaTela(msg:string){
    console.log(msg);
}

//null e undefined
const u:undefined=undefined;
const n:null=null;

//objeto
function criar(objeto:object){
    //,...
}

criar({
    propriedade:1,

}) //criar ('Ana') //gera erro

//Never

function loopInfinito(){
    while(true){}
}

function erro(mensagem:string){
    throw new EvalError(mensagem);
}

function falha(){
    return erro('Algo falhou');

}


const nota:string | number = 25;
function exibirtNota(nota:number| string ){
    console.log(`A nota é ${nota}`);

}

exibirtNota(8);
exibirtNota('7');


//alias
type Funcionario={
    nome:string;
    sobrenome:string;
    funcao: string;
    dataNascimento: Date;
}
//type Funcionarios = Arra<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome:'Ana',
    sobrenome:'Lima',
    funcao: 'Diretora',
    dataNascimento: new Date()
},{
    nome:'Maria',
    sobrenome:'Silva',
    funcao: 'Gerente',
    dataNascimento: new Date()
}
]

function tratarFuncionarios(funcionarios:Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário', funcionario.nome);
    }
}

//nulos ou opcionais
type Contato = {
    nome: string;
    telefone1:string;
    telefone2?:string;
}

const contato: Contato={
    nome: 'Vitor',
    telefone1:'1234567',
}

// type assertion 
const minhaIdade:any=23;
// (minhaIdade as number).toString();
(<number>minhaIdade).toString();


// const input = document.getElementById("numero") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero");
console.log(input.value);   //para retornar de um html


























































































