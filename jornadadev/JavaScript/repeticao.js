//estruturas de repetiçao

//for(inicializador; condicao-saida; expressao-final){
//executar o nosso codigo
//}

let notas = [
  2, 5, 10, 25, 50, 100, 10, 25, 50, 100, 10, 25, 50, 100, 10, 25, 50, 100,
];
let total = 0;
for (let repeticoes = 0; repeticoes < notas.length; repeticoes++) {
  total = total + notas[repeticoes];
}
