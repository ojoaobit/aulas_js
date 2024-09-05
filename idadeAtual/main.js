function calcularIdade() {
  // Obtém o ano de nascimento
  var anoNascimento = parseInt(document.getElementById("anoNascimento").value);

  // Verifica se o valor é válido
  if (isNaN(anoNascimento) || anoNascimento > 2024 || anoNascimento <= 0) {
    alert("Por favor, insira um ano de nascimento válido.");
    return;
  }

  // Calcula a idade
  var idade = 2024 - anoNascimento;

  // Exibe o resultado
  document.getElementById("resultado").textContent =
    "Sua idade: " + idade + " anos";
}
