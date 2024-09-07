var agora = new Date();
var hora = agora.getHours();
var body = document.querySelector("body");
var cont_text = document.getElementById("text");
cont_text.innerHTML += `Agora sao ${hora} horas.`;

var imagem = document.getElementById("imagem");
imagem.style.margin = "20px 0";
imagem.style.width = "250px";
imagem.style.height = "250px";
imagem.style.borderRadius = "50%";

if (hora >= 5 && hora < 12) {
  imagem.src = "./img-manha.png";
  body.style.background = "#dfc47a";
} else if (hora >= 12 && hora < 18) {
  body.style.background = "#d8c662";
  imagem.src = "./img-tarde.png";
  body.style.background = "#bb9169";
} else if (hora >= 18 && hora <= 23) {
  imagem.src = "./img-noite.png";
  body.style.background = "#2b608b";
} else {
  cont_text.innerHTML += `<p>Boa Madruada!</p>`;
}
