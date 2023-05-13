const { print, gets } = require('./fun-auxiliares');

const media = gets();

print('Entrada: ' + media);
if (media >= 0 && media < 5) {
    print('Reprovado');
}
else if (media >= 5 && media < 7) {
    print('Recuperação');
}
else if (media >= 7){
    print('Aprovado')
} else {
    print('Número inválido');
};