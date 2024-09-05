//VARIAVEL
var divArea = document.getElementById("area");
divArea.style.background = "green";
divArea.style.color = "white";

// ADICIONANDO EVENTO
divArea.addEventListener("click", clicar);
divArea.addEventListener("mouseenter", entrar);
divArea.addEventListener("mouseout", sair);

// FUNCOES COM EVENTO
function clicar() {
  divArea.innerText = "Clicou!";
  divArea.style.background = "tomato";
}
function entrar() {
  divArea.innerText = "Entrou!";
}
function sair() {
  divArea.innerText = "Saiu!";
  divArea.style.background = "green";
}
