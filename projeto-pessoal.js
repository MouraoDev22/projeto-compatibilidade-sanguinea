// variáveis

let nome;
let idade;
let tipoSanguineo;
let fatorRh;

let listaDeDoadores = [];
let listaDeRecebedores = [];

// funções

function retornarNome () {
    nome = prompt ('Qual é o seu nome completo?');
}

function retornarIdade () {
    idade = Number (prompt ('Qual a sua idade?'));
    while (isNaN (idade)) {
        idade = Number (prompt ('Qual a sua idade?'));
    }
}

function retornarTipoSanguineo () {
    tipoSanguineo = prompt ('Qual é o seu tipo sanguíneo?').trim().toUpperCase();
    
    while (tipoSanguineo !== "A" && tipoSanguineo !== "B" && tipoSanguineo !== "AB" && tipoSanguineo !== "O") {
        tipoSanguineo = prompt ('Qual é o seu tipo sanguíneo?').trim().toUpperCase();
    }
}

function retornarFatorRh () {
    fatorRh = prompt ('É positivo (+) ou negativo (-)?').trim().toLowerCase();

    while (fatorRh !== "-" && fatorRh !== "+" && fatorRh !== "negativo" && fatorRh !== "positivo") {
        fatorRh = prompt ('É positivo (+) ou negativo (-)?').trim().toLowerCase();
    }
}

function verificarCompatibilidade () {
    const rh = (fatorRh == 'positivo' || fatorRh == '+') ? '+' : '-';
}

// prompts

retornarNome ();
retornarIdade ();
retornarTipoSanguineo ();
retornarFatorRh ();

// logs

console.log ('');
console.log ('*Ficha de Compatibilidade Sanguínea*');
console.log (`Nome: ${nome}`);
console.log (`Idade: ${idade}`);
console.log (`Tipo Sanguíneo: ${tipoSanguineo}`);
console.log (`Fator RH: ${fatorRh}`);