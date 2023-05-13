// Firs Class Functions
// Higher Order Functions

// function falarMeuNome(nota1, nota2) {
//     console.log('Meu nome é Marcos');
// }
// function falarMeuNomeCompleto(falarMeuNome) {
//     falarMeuNome();
//     console.log('Marcos Samuel')
//     return falarMeuNome;
// }

// falarMeuNomeCompleto(falarMeuNome)();

function nomeDaFuncao() { // não vai sofrer hoisting
    console.log('Marcos Samuel');
}
nomeDaFuncao();

const nomeDeOutraFuncao = function() { // vai sofrer hoisting
    console.log('Olá, mundo!')
}
nomeDeOutraFuncao();
