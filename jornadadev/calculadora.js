function soma(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}
let parametro1 = parseFloat(prompt("Insira o primeiro valor a ser calculado"));
let parametro2 = parseFloat(prompt("Insira o segundo valor a ser calculado"));
let operacao = prompt(
  "Escolha a operação, (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão)"
);

if (operacao === "1") {
  alert(soma(parametro1, parametro2));
} else if (operacao === "2") {
  alert(subtrair(parametro1, parametro2));
} else if (operacao === "3") {
  alert(multiplicacao(parametro1, parametro2));
} else if (operacao === "4") {
  alert(dividir(parametro1, parametro2));
} else {
  alert("Operação digitada errada, tente novamente");
}
