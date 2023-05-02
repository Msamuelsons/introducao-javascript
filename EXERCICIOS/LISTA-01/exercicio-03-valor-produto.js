// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// Entrada
let precoProduto = 100;
let condicaoPagamento = 2; 

console.log(`
    Qual opção de pagamento:
    (1) - À vista Débito, recebe 10% de desconto;
    (2) - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    (3) - Em duas vezes, preço normal de etiqueta sem juros;
    (4) - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
`);

if (condicaoPagamento === 1) {
    console.log('À vista Débito fica: ' + (precoProduto * 0.9).toFixed(2));
}
else if (condicaoPagamento === 2) {
    console.log('À vista no Dinheiro ou PIX fica: ' + (precoProduto * 0.85).toFixed(2));
}
else if (condicaoPagamento === 3) {
    console.log('Em duas vezes, preço normal de etiqueta sem juros fica: ' + precoProduto.toFixed(2));
}
else if (condicaoPagamento === 4) {
    console.log('Acima de duas vezes, preço normal de etiqueta '+(precoProduto * 1.10).toFixed(2));
}else {
    console.log('Opção de pagamento inválida');
}