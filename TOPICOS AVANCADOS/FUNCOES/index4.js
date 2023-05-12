const pessoa = {
    nome: 'Marcos Samuel',
    idade: 22
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaaa']);
gritar.call(pessoa, 'Olaaaaaaa');