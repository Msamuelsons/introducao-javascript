class Pessoa {
    constructor (name) {
        this.name = name
    }
}

const lista = [new Pessoa('Samuel'),new Pessoa('Marcos'),new Pessoa('Sabrina'),new Pessoa('Joana'),new Pessoa('Mario'),new Pessoa('Luigi'),new Pessoa('Yoshi'),new Pessoa('Balzer'),new Pessoa('Samuel')];

const listaNomes = lista.map(({ name }) => name);

console.log(listaNomes);