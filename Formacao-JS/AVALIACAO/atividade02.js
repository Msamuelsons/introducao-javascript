const entradas = [5, 10, 11, 12, 15, 20, 1, 6, 10000];
const numerosPar = [];
const numerosImpar = [];

for (let i = 0; i < entradas.length; i++) {
   if (entradas[i] % 2 === 0) {
    numerosPar.push(entradas[i]);
   } else {
    numerosImpar.push(entradas[i]);
   }
}

function maiorEMenor(maiorPar, menorImpar) {
    return [maiorPar.sort((a, b) => b - a)[0], menorImpar.sort((a, b) => a - b)[0]];
};

console.log(maiorEMenor(numerosPar, numerosImpar));



