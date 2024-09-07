function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById("txtano");
  var resultado = document.getElementById("resultado");

  if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert("ERRO! Digite um valor valido!");
  } else {
    var formSexo = document.getElementsByName("radiosexo");
    var idade = ano - Number(formAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.style.margin = "20px 0";
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.borderRadius = "50%";
    img.style.background = "black";

    if (formSexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "crianca.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "adulto.png");
      } else {
        img.setAttribute("src", "idoso.png");
      }
    } else if (formSexo[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "m-crianca.png");
      } else if (idade < 21) {
        img.setAttribute("src", "m-jovem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "m-adulta.png");
      } else {
        img.setAttribute("src", "m-idosa.png");
      }
    }

    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
