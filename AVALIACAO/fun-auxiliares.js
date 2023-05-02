function print(mensagem) {
    console.log(mensagem);
};

const entradas = [5, 10, 11, 12, 15, 20, 1, 6];
let i = 0;
function gets () {
    const valor = entradas[i];
    i++;
    return valor;
}

module.exports = { print, gets };