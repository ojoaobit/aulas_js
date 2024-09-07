var imagem = document.getElementById("img");
imagem.style.padding = "20px 0";

function horario() {
  var txthora = document.getElementById("txthora");
  var resultado = document.getElementById("resultado");
  var hora = Number(txthora.value);

  resultado.innerHTML = `SAO <strong>${hora}</strong> HORAS`;
  if (hora >= 5 && hora < 12) {
    resultado.innerHTML += `<p>Bom dia!</p>`;
  } else if (hora >= 12 && hora < 18) {
    resultado.innerHTML += `<p>Boa Tarde!</p>`;
  } else if (hora >= 18 && hora <= 23) {
    resultado.innerHTML += `<p>Boa noite!</p>`;
  } else {
    resultado.innerHTML += `<p>Boa Madrugada!</p>`;
  }
}
