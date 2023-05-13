// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let notaPedida = parseInt(prompt("Informe uma nota entre 0 e 10: "));

while (notaPedida < 0 || notaPedida > 10) {
    notaPedida = parseInt(prompt("Informe uma nota entre 0 e 10: "));
};

console.log('O número digitado está correto: ', notaPedida)