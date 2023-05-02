// método pop() remove o último elemento.
// método shift() remove o primeiro elemento.

const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;

console.log(media.toFixed(2));