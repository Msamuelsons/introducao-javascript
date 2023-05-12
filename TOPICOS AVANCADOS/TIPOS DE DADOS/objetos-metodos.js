const x = {
    nome: 'Samuel',
    idade: 22,
    "cidade":'Parnaiba', 
    aniversario() {
        console.log(this.idade);
    },
    palmeiras: function (temMundial) {
        return temMundial;
    }
};
x.sobrenome = "Barros";
x['nome'] = 'Marcos';

console.log(x['nome']);
console.log(x.idade);

x.falar = function() {
    console.log('Falei');
}

x.falar();
console.log(x.palmeiras(true));