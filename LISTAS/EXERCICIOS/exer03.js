// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Vivian', 'Mario', 'Vladimi Putin', 'Valesca', 'Bernando', 'Samuel', 'Marcos', 'viviane'];

const nomesComV = [];
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === "V" || nomes[i][0] === "v") {
        nomesComV.push(nomes[i]);
    };
};

console.log(nomesComV);