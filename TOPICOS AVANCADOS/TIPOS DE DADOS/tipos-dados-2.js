/*
    boolean (true/false)
    null
    undefined
    number
    string
    synbol
*/   

// +Infinity -Infinity e NaN

// const id = 10;
// const meuNome = "Samuel";
// console.log("<div id=\"10\"> Teste </div>");
// console.log('<div id="10"> Teste </div>');
// console.log('id='+ id +'!');

// console.log(`<div id=${id} name="${meuNome}"> Teste </div>`);
'De modo bem simples e direto, Symbol (símbolo) é um tipo primitivo que armazena um valor único. Seu propósito é esse, servir como um identificador único.'

const x = Symbol('10');
const y = Symbol('10');

console.log(x === y);