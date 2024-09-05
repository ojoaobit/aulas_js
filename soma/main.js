function somarValores() {
  var valor1 = parseFloat(document.getElementById("valor1").value);
  var valor2 = parseFloat(document.getElementById("valor2").value);

  // Verifica se os valores são números
  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira valores numéricos válidos.");
    return;
  }
  var soma = valor1 + valor2;
  document.getElementById("resultado").textContent = "Soma: " + soma;
}
