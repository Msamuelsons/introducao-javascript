// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


console.log(`
    Qual opção de pagamento:
    (1) - À vista Débito, recebe 10% de desconto;
    (2) - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    (3) - Em duas vezes, preço normal de etiqueta sem juros;
    (4) - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
`);

function compraProduto(formaPagamento, preco) {

    if (formaPagamento === 1) {
        return (preco * 0.9).toFixed(2)
    }
    else if (formaPagamento === 2) {
        return (preco * 0.85).toFixed(2);
    }
    else if (formaPagamento === 3) {
        return ( preco.toFixed(2));
    }
    else if (formaPagamento === 4) {
        return ((precoProduto * 1.10).toFixed(2));
    }else {
        return 'Opção de pagamento inválida';
    }
}

console.log(compraProduto(2, 100));