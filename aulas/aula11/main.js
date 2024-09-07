// PERGUNTANDO PAIS CONDICAO COMPOSTA
function verificar() {
  var txtpais = document.getElementById("txtpais");
  var resultado = document.getElementById("resultado");
  var pais = txtpais.value.toUpperCase();

  resultado.innerHTML = `SEU PAIS E <strong>${pais}</strong>`;
  if (pais == "BRASIL") {
    resultado.innerHTML += `<p>VOCE E BRASILEIRO!</p>`;
  } else {
    resultado.innerHTML += `<p>VOCE E GRINGO!</p>`;
  }
}
