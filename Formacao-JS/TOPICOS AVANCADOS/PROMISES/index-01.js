const promsesDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
        resolve(numero);
    }, 1000)
})

console.log('Vai filhão!');

promsesDeUmNumeroQualquer

.then((value) => {
   return value + 10;
})
.then((value) => {
    console.log(value);
})

.catch((error) => {
    console.log(error);
})

.finally(() => {
    console.log('Finali')
})