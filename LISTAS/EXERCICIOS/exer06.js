// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
let notas = [2, 7, 3, 8, 10, 4, 20, 100, 101];

// Primeira maneira.
let maiorNota1 = 0;
for (let i = 0; i < notas.length; i++) {
    maiorNota1 = Math.max(notas[i]);
};
console.log(maiorNota1);


// Segunda maneira
notas = notas.sort((a, b) => b - a);
const maiorNota2 = [];
for (let i = 0; i < notas.length; i++) {
    maiorNota2.push(notas[i]);
};

console.log(maiorNota2[0]);