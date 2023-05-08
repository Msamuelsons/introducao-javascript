// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

let nomeUsuario = prompt("Informe seu nome: ").toUpperCase();
let senhaUsuario = prompt("Informe sua senha: ").toUpperCase();

while (nomeUsuario === senhaUsuario) {
    alert("Senha igual ao nome do usuário");
    nomeUsuario = prompt("Informe seu nome: ").toUpperCase();
    senhaUsuario = prompt("Informe sua senha: ").toUpperCase();
};

