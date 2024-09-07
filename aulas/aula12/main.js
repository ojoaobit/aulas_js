// ANINHADO - ELEICAO
/*
var idade = 12;

if (idade >= 18 && idade < 65) {
  console.log("VOTO OBRIGATORIO!");
} else if (idade >= 16 || idade >= 65) {
  console.log("VOTO OPCIONAL!");
} else {
  console.log("NAO VOTA!");
}
*/

var imagem = document.getElementById("img");
imagem.style.padding = "20px 0";
function votar() {
  var txtidade = document.getElementById("txtidade");
  var resultado = document.getElementById("resultado");
  var idade = Number(txtidade.value);
  resultado.innerHTML = `SUA IDADE: <strong>${idade}</strong>`;

  if (idade >= 18 && idade < 65) {
    resultado.innerHTML = `<p>VOTO OBRIGATORIO!</p>`;
  } else if (idade >= 16 || idade >= 65) {
    resultado.innerHTML = `<p>VOTO OPCIONAL!</p>`;
  } else {
    resultado.innerHTML = `<p>NAO VOTA!</p>`;
  }
}
