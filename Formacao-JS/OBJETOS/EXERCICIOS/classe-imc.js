// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa {
    nome; // String
    peso; // float -> Number
    altura; // float -> Number

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classifiqueImc(imc) {
        if (imc < 18.5) {
        return 'Abaixo do seu peso';
        }
        else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        }
        else if (imc >= 25 && imc < 30) {
            return 'Acima do seu peso';
        }
        else if (imc >= 30 && imc < 40){
            return 'Você é obeso';
        }
        else {
            return 'Obsesidade Grave';
        }
    }
};

const jose = new Pessoa('José', 70, 1.75);
const imc = jose.calcularImc();

console.log(jose.classifiqueImc(imc));
console.log(jose);
console.log(imc.toFixed(2));


// Qual a diferença de método e função ?

// ! Resposta: Toda função dentro de uma classe recebe o nome de método! Apenas nomeação mesmo. As variáveis declaradas na classe são chamadas de atributos e as funções que retornam algo ou não são chamados de métodos (funcionalidades).Isso são características da Orientação a Objetos.