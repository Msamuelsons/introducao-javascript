// 1)Faça um programa para calcular o valor de uma viagem.

// você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro; 
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar a viagem.

let tipoCombustivel = "gasolina";
let precoGasolina = 6.66; // 1 litro
let precoEtanol = 5.79; // 1 litro
let gastoMedio = 10 // em KM
let distanciaViagem = 100 // em KM
let precoDaViagem = (distanciaViagem / gastoMedio)
if (tipoCombustivel === "etanol") {
    precoDaViagem = precoDaViagem * precoEtanol;
}
else if (tipoCombustivel === "gasolina"){
        precoDaViagem = precoDaViagem * precoGasolina;
}
else {
    precoDaViagem = precoDaViagem * precoGasolina; // A gasolina é o valor padraão
}

console.log(`O preço a ser pago dessa viagem é de R$ ${precoDaViagem.toFixed(2)}.`);