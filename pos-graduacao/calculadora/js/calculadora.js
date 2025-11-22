// Variável global que busca o elemento do "visor" - input readonly do HTML
let inputResultado = document.getElementById("inputCalculadora");

// Objeto que registra os valores e funções do cálculo
let calculo = {
  valorSalvo: null,
  funcaoParaCalcular: null,
};

// Ao carregar a página, atribui eventos aos botões por meio dos seus identificadores (ids)
window.addEventListener("load", function () {
  atribuirEventos();
});

// Atribui eventos aos números e operadores
function atribuirEventos() {
  document.getElementById("btnValor0").addEventListener("click", inserirNumero);
  document.getElementById("btnValor1").addEventListener("click", inserirNumero);
  document.getElementById("btnValor2").addEventListener("click", inserirNumero);
  document.getElementById("btnValor3").addEventListener("click", inserirNumero);
  document.getElementById("btnValor4").addEventListener("click", inserirNumero);
  document.getElementById("btnValor5").addEventListener("click", inserirNumero);
  document.getElementById("btnValor6").addEventListener("click", inserirNumero);
  document.getElementById("btnValor7").addEventListener("click", inserirNumero);
  document.getElementById("btnValor8").addEventListener("click", inserirNumero);
  document.getElementById("btnValor9").addEventListener("click", inserirNumero);

  // Atribui eventos aos botões de operadores, ponto e resultado
  document.getElementById("btnPonto").addEventListener("click", inserirNumero);
  document.getElementById("btnSoma").addEventListener("click", clicarOperador);
  document
    .getElementById("btnDividir")
    .addEventListener("click", clicarOperador);
  document
    .getElementById("btnMultiplicar")
    .addEventListener("click", clicarOperador);
  document
    .getElementById("btnSubtrair")
    .addEventListener("click", clicarOperador);
  document.getElementById("btnLimpar").addEventListener("click", limparDados);
  document
    .getElementById("btnResultado")
    .addEventListener("click", clicarResultado);
}

// Adiciona o número no visor
function inserirNumero(event) {
  // Se o valor não for um número (ex: "Soma", que aparece quando clicamos no operador),
  // substitui o texto do visor pelo novo número.
  if (isNaN(inputResultado.value)) {
    inputResultado.value = event.target.textContent;
  } else {
    // Se o valor no visor for zero E não for um ponto, substitui o valor pelo número clicado (impede 0 na frente)
    if (inputResultado.value == 0 && event.target.textContent != ".") {
      inputResultado.value = event.target.textContent;
    } else {
      // Senão, adiciona o número aos dígitos no visor
      inputResultado.value += event.target.textContent;
    }
  }
}

// Função chamada ao clicar em um operador (+, -, *, /)
function clicarOperador(event) {
  // Mapeia o ID do botão (ex: "btnSoma") para o nome da função (ex: somar)
  const operadorId = event.target.id;

  const funcoes = {
    btnSoma: somar,
    btnSubtrair: subtrair,
    btnMultiplicar: multiplicar,
    btnDividir: dividir,
  };

  // Salva o valor atual do visor e a função a ser executada
  calculo.valorSalvo = Number(inputResultado.value);
  calculo.funcaoParaCalcular = funcoes[operadorId];

  // Define o visor para o símbolo do operador para indicar que aguarda o segundo valor
  // Usamos textContent que contém o símbolo (+, -, etc)
  inputResultado.value = event.target.textContent;
}

// Função chamada ao clicar no botão de resultado (=)
function clicarResultado() {
  // Verifica se uma função de cálculo foi definida (se um operador foi clicado antes)
  if (calculo.funcaoParaCalcular) {
    const valorAtual = Number(inputResultado.value);
    const resultado = calculo.funcaoParaCalcular(
      calculo.valorSalvo,
      valorAtual
    );

    inputResultado.value = resultado;

    // Limpa o estado de cálculo para a próxima operação
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
  }
}

// Limpa todos os dados (botão C)
function limparDados() {
  inputResultado.value = 0; // Volta o visor para 0
  calculo.valorSalvo = null;
  calculo.funcaoParaCalcular = null;
}

// Operação de soma
function somar(valor1, valor2) {
  return valor1 + valor2;
}

// Operação de subtração
function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

// Operação de multiplicacao
function multiplicar(valor1, valor2) {
  return valor1 * valor2;
}

// Operação de divisão
function dividir(valor1, valor2) {
  if (valor2 === 0) {
    return "Erro: divisão por zero";
  } else {
    return valor1 / valor2;
  }
}
