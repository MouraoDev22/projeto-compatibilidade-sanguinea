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
    tipoSanguineo = prompt ('Qual é o seu tipo sanguíneo?').trim ().toUpperCase ();
    
    while (tipoSanguineo !== "A" && tipoSanguineo !== "B" && tipoSanguineo !== "AB" && tipoSanguineo !== "O") {
        tipoSanguineo = prompt ('Qual é o seu tipo sanguíneo?').trim ().toUpperCase ();
    }
}

function retornarFatorRh () {
    fatorRh = prompt ('É positivo (+) ou negativo (-)?').trim ().toLowerCase ();

    while (fatorRh !== "-" && fatorRh !== "+" && fatorRh !== "negativo" && fatorRh !== "positivo") {
        fatorRh = prompt ('É positivo (+) ou negativo (-)?').trim ().toLowerCase ();
    }
}

function verificarCompatibilidade () {
    const rh = (fatorRh == 'positivo' || fatorRh == '+') ? '+' : '-';
    fatorRh = rh;

    // ----- Quem pode RECEBER meu sangue -----
    
    if (tipoSanguineo == 'O' && rh == '+') {
        listaDeRecebedores.push ('A+', 'B+', 'AB+', 'O+');
    } else if (tipoSanguineo == 'O' && rh == '-') {
        listaDeRecebedores.push ('A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-');
    } else if (tipoSanguineo == 'A' && rh == '+') {
        listaDeRecebedores.push ('A+', 'AB+');
    } else if (tipoSanguineo == 'A' && rh == '-') {
        listaDeRecebedores.push ('A+', 'A-', 'AB+', 'AB-');
    } else if (tipoSanguineo == 'B' && rh == '+') {
        listaDeRecebedores.push ('B+', 'AB+');
    } else if (tipoSanguineo == 'B' && rh == '-') {
        listaDeRecebedores.push ('B+', 'B-', 'AB+', 'AB-');
    } else if (tipoSanguineo == 'AB' && rh == '+') {
        listaDeRecebedores.push ('AB+');
    } else if (tipoSanguineo == 'AB' && rh == '-') {
        listaDeRecebedores.push ('AB+', 'AB-');
    }

    // ----- De quem POSSO RECEBER -----
    
    if (tipoSanguineo == 'O' && rh == '+') {
        listaDeDoadores.push ('O+', 'O-');
    } else if (tipoSanguineo == 'O' && rh == '-') {
        listaDeDoadores.push ('O-');
    } else if (tipoSanguineo == 'A' && rh == '+') {
        listaDeDoadores.push ('A+', 'A-', 'O+', 'O-');
    } else if (tipoSanguineo == 'A' && rh == '-') {
        listaDeDoadores.push ('A-', 'O-');
    } else if (tipoSanguineo == 'B' && rh == '+') {
        listaDeDoadores.push ('B+', 'B-', 'O+', 'O-');
    } else if (tipoSanguineo == 'B' && rh == '-') {
        listaDeDoadores.push ('B-', 'O-');
    } else if (tipoSanguineo == 'AB' && rh == '+') {
        listaDeDoadores.push ('A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-');
    } else if (tipoSanguineo == 'AB' && rh == '-') {
        listaDeDoadores.push ('A-', 'B-', 'AB-', 'O-');
    }
}

// prompts

retornarNome ();
retornarIdade ();
retornarTipoSanguineo ();
retornarFatorRh ();
verificarCompatibilidade ();
console.log ('Teste');

// logs

console.log ('');
console.log ('Ficha de Compatibilidade Sanguínea');
console.log (`Nome: ${nome}`);
console.log (`Idade: ${idade}`);
console.log (`Tipo Sanguíneo: ${tipoSanguineo}`);
console.log (`Fator RH: ${fatorRh}`);
console.log ('Pode receber de:', listaDeDoadores.join (', '));
console.log ('Pode doar para:', listaDeRecebedores.join (', '));