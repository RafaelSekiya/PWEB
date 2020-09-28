var nome = prompt("Qual é o seu nome?");
var nota1 = parseFloat(prompt("Digite a 1° Nota"));
var nota2 = parseFloat(prompt("Digite a 2° Nota"));
var nota3 = parseFloat(prompt("Digite a 3° Nota"));

var mediaArit = (nota1 + nota2 + nota3)/3;
alert("Média Aritmética = " + mediaArit.toFixed(2));
