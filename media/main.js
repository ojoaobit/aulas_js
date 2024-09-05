function calcularMedia() {
  // Obtém as notas dos inputs
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  // Verifica se as notas são válidas
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, insira valores numéricos válidos.");
    return;
  }

  // Calcula a média
  var media = (nota1 + nota2 + nota3) / 3;

  // Exibe o resultado
  document.getElementById("resultado").textContent =
    "Média: " + media.toFixed(2);
}
