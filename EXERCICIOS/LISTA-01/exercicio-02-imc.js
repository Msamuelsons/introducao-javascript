// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;

// Entrada
let seuPeso = 90; // em KG
let suaAltura = 1.80; // em M

// Processamento
let imc = seuPeso / (Math.pow(suaAltura, 2));
// 90 / (1.8)² => 90 / 3,24 => 27,8 aproximadamente

// Saída
if (imc < 18.5) {
    console.log('Abaixo do seu peso');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    console.log('Acima do seu peso');
}
else if (imc >= 30 && imc < 40){
    console.log('Você é obeso');
}
else {
    console.log('Obsesidade Grave');
}