// Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
let count = 1;
let lista = [];
console.log('Primeira parte da atividade: ');
while (count <= 20) {

    console.log(count);

    lista.push(count);
    count++;
};

console.log('Segunda parte da atividade:');
console.log(lista.join(' '));