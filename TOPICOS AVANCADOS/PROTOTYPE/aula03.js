
const pessoa = {
    genero: 'Masculino'
}

const samuel = Object.create(pessoa);

samuel.nome = 'Marcos Samuel';

console.log(pessoa.genero);
console.log(samuel.nome);