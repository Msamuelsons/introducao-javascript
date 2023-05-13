// 1) Crie um programa que dado um número imprima a sua tabuada.
let numeroTabuada = 6;
/** 
    * @param {number} X  Valor para o primeiro parâmetro.
    * @param {number} Y Valor para o segundo parâmetro.
    * @returns {number} X * Y.
*/
function multiplicacao(x, y) {
    return x * y;
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${numeroTabuada} = ${multiplicacao(i, numeroTabuada)}`);
}
