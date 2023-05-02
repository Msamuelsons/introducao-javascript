// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let lista = [];
let tamanhoDaColecao = 100;
// Adiciona 10 elementos na lista.
for (let i = 0; i <= tamanhoDaColecao;i++) {
    lista.push(i);
};

const listaPares = [];
for (let i = 0; i <= lista.length; i++) {
    if (lista[i] % 2 === 0) {
        listaPares.push(lista[i]);
    };
};

for (let i = 0; i <= listaPares.length - 1; i++) {
    console.log(listaPares[i]);
};