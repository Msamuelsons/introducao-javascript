const pessoa = {
    idade: 18
};

const samuel = {
    nome: 'Samuel',
    idade: 22,
    __proto__: pessoa
};

console.log(samuel.idade);