function calcularRetangulo() {
  // Obtém os valores da largura e altura
  var largura = parseFloat(document.getElementById("largura").value);
  var altura = parseFloat(document.getElementById("altura").value);

  // Verifica se os valores são válidos
  if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para a largura e altura.");
    return;
  }

  // Calcula a área e o perímetro
  var area = largura * altura;
  var perimetro = 2 * (largura + altura);

  // Exibe os resultados
  document.getElementById("resultado").innerHTML =
    "Área: " +
    area.toFixed(2) +
    " unidades²<br>" +
    "Perímetro: " +
    perimetro.toFixed(2) +
    " unidades";
}
