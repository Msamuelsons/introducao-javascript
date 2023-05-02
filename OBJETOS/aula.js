// Coleção de dados.
// Objeto literal.

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = new Date().getFullYear() - this.idade-1;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }
    else if (p1.idade < p2.idade){ 
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }
    else {
        console.log('As idades são iguais');
    }
};

const samuel = new Pessoa('Samuel', 22);
const naruto = new Pessoa('Naruto', 22);



compararPessoas(samuel, naruto);