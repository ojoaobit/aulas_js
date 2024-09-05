//FUNCAO SOMAR COM ENTRADA DE DADOS
function somar() {
  var tn1 = document.getElementById("txtn1");
  var tn2 = document.querySelector("input#txtn2");
  var resultado = document.getElementById("resultado");

  var num1 = tn1.value;
  var num2 = tn2.value;
  somar = Number(num1) + Number(num2);
  resultado.innerHTML = `Soma dos valores: <strong>${somar}</strong>`;
}
