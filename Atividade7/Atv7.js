function maiorN(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

var num1 = prompt("Digite o número 1 ");
var num2 = prompt("Digite o número 2 ");
var num3 = prompt("Digite o número 3 ");
var maior = maiorN(num1, num2, num3);

alert("O Maior número é: " + maior);
