// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

const medias = [2, 7, 3, 8, 10, 4];
const recuperacao = [];
for (let i = 0; i < medias.length; i++) {
    if (medias[i] < 5) {
        recuperacao.push(medias[i]);
    };
};
console.log(recuperacao);