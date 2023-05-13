function adicao(x, y) {
    return x + y;
}
function multiplicacao(x, y) {
    return x * y;
}
function calculador(x, operacao, y) {
    console.log(operacao(x, y));
}

calculador(10, multiplicacao, 10)
calculador(10, adicao, 50);