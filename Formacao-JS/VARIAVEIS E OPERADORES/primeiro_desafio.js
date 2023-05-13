// 1)Faça um programa para calcular o valor de uma viagem.

// você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar a viagem.

let precoCombustivel = 5.79 // 1 litro
let gastoMedio = 1 // em KM
let distanciaViagem = 1580 // em KM

let precoDaViagem = (distanciaViagem / gastoMedio) * precoCombustivel

console.log(
  `O preço a ser pago dessa viagem é de R$ ${precoDaViagem.toFixed(2)}.`,
) // saida em reais
