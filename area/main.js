function calcularArea() {
  // Obtém o valor do lado
  var lado = parseFloat(document.getElementById("lado").value);

  // Verifica se o valor é válido
  if (isNaN(lado) || lado <= 0) {
    alert("Por favor, insira um valor válido para o lado.");
    return;
  }

  // Calcula a área (lado * lado)
  var area = lado * lado;

  // Exibe o resultado
  document.getElementById("resultado").textContent =
    "Área: " + area.toFixed(2) + " unidades²";
}
