// Solicitar ao usuário que insira dois números
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

// Calcular a soma dos dois números
var soma = numero1 + numero2;
alert("A soma dos dois números é: " + soma);

// Calcular a subtração dos dois números
var subtracao = numero1 - numero2;
alert("A subtração dos dois números é : " + subtracao);

// Calcular a multiplicação dos dois números
var multiplicacao = numero1 * numero2;
alert("A multiplicação dos dois números é: " + multiplicacao);

// Calcular a divisão dos dois números
// Verificar se o segundo número é zero para evitar divisão por zero
if (numero2 !== 0) {
    var divisao = numero1 / numero2;
    alert("A divisão dos dois números é: " + divisao);
} else {
    alert("Não é possível dividir por zero.");
}

// Calcular o resto da divisão dos dois números
// Verificar se o segundo número é zero para evitar divisão por zero
if (numero2 !== 0) {
    var resto = numero1 % numero2;
    alert("O resto da divisão dos dois números é: " + resto);
} else {
    alert("Não é possível calcular o resto, pois o segundo número é zero.");
}

// Verificar se a soma dos dois números é par ou ímpar
if (soma % 2 === 0) {
    alert("A soma dos dois números é par.");
} else {
    alert("A soma dos dois números é ímpar.");
}

// Verificar se os dois números são iguais ou diferentes
if (numero1 === numero2) {
    alert("Os dois números são iguais.");
} else {
    alert("Os dois números são diferentes.");
}
