function Pessoa(nome, idade) { // funcao construtora
    this.nome = nome;
    this.idade = idade;
}   

Pessoa.prototype.falar = function () {
    console.log(`${this.nome} ${this.idade}`)
} 

const samuel = new Pessoa('Samuel', 22);
console.log(samuel);
samuel.falar();


class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
    fala() {
        console.log(`${this.nome} ${this.idade}`)
    }
}