function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`Me chamo ${this.nome} é tenho ${this.idade} anos`);
}


const samuel = {
    genero:'masculino'
};

Pessoa.apply(samuel, ['Marcos', 22]);
// Pessoa.call(samuel, 'Samuel', 22);
console.log(samuel);
