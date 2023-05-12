const lista = [{nome: 'Marcos'},{nome: 'Samuel'}, {nome: 'Barros'}, {nome: 'Maria'}, {nome: 'Miguel'}];

const listaM = lista.map((e) => e.nome)
    .filter((e) => e.startsWith('M')).join('; ')

console.log(listaM);