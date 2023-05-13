const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {

    try {
        const arquivo = await fs.promises.readFile(filePath);
        const textoDoAquivo = arquivo.toString('utf-8');
        console.log(textoDoAquivo);
    }

    catch(error) {
        console.log('Deu ruim: ', error);
    }

    finally {
        console.log('Finalizado')
    }
}

buscarArquivo();