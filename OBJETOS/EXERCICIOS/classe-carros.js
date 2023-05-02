// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularQuantidadeGasto(quilometros, precoGasolina) {
        return (quilometros / this.gastoPorKm) * precoGasolina;
    }
}

const celta = new Carro('Celta', 'Preta', 12);
console.log(celta);
console.log(celta.calcularQuantidadeGasto(70, 5));

console.log('---------------------------------');

const palio = new Carro('Fiat', 'Preto', 10);
console.log(palio);
console.log(palio.calcularQuantidadeGasto(70, 5));
