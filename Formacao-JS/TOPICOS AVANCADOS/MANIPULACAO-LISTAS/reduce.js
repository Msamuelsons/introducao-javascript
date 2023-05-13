const lista = [1,2,3,4,5,6,7,8,9,10];

const somaDeTodosOsNumeros = lista.reduce((previous, curremt) => {
    console.log(previous, curremt);
    return previous + curremt;
}, 0) // 0 é o valor inicial

console.log(somaDeTodosOsNumeros);