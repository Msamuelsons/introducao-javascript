const fs = require('fs');
const dados = fs.promises.readFile('tarefas.csv');

dados
    .then((arquivo) => {
        console.log(arquivo.toString('utf-8'));
    })
    .then((texto) => console.log(texto))
    .catch((error) => {
        console.log('Deu algum erro', error);
    })
