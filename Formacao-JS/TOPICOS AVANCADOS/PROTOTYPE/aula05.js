// String.prototype.toPLang = function () {
//     return `P ${this}`
// }

// console.log('test'.toPLang())

const samuel = {
    nome: 'Samuel',
}

samuel.__proto__ = {
    idade: 30
}

console.log(samuel.idade);