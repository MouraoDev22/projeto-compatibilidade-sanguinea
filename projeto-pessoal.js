// variáveis

let nome;
let idade;
let tipoSanguineo;
let fatorRh;

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
    tipoSanguineo = prompt ('Qual é o seu tipo sanguíneo?');
    
    while (tipoSanguineo != "A" || tipoSanguineo != "B" || tipoSanguineo != "AB" || tipoSanguineo != "O") {
        tipoSanguineo = prompt ('Qual é o seu tipo sanguíneo?');
    }
}

function retornarFatorRh () {
    fatorRh = prompt ('É positivo (+) ou negativo (-)?');

    while (fatorRh != "-" || fatorRh != "+" || fatorRh != "Negativo" || fatorRh != "Positivo") {
        fatorRh = prompt ('É positivo (+) ou negativo (-)?');
    }
}

// prompts

retornarNome ();
retornarIdade ();
retornarTipoSanguineo ();
retornarFatorRh ();

// verificadores

