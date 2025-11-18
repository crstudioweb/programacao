let nota1 = Number(prompt("Digite a sua primeira nota"));
let nota2 = Number(prompt("Digite sua segunda nota"));

let resultado = (nota1 + nota2) / 2;

if (resultado >= 5) {
  alert("Voce foi aprovado! Parabens pelo resultado");
} else {
  alert("Voce foi reprovado! Está de recuperaçao");
}
