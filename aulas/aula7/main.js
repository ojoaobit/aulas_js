/*SELECIONANDO ELEMENTO:
por tag: getElementByTagName()
por ID: getElementByID()
por Nome: getElementsByClassName()
se eu tiver muitos 'names', posso usar [] pra falar com 1 especifico
por Classe: getElementByClassList()
por Seletor
*/

// DECLARANDO VARIAVEIS E MUDANDO ESTILO
body = document.querySelector("body");
body.style.background = "#0e0e0e";
body.style.color = "#f9f9f9";

// USANDO ID
div = document.getElementById("msg");
div.style.background = "#CA1D49";
div.style.padding = "10px";
div.innerText = "Aguardando..."; //adiciono texto na variavel ou substituo

// MODIFICANDO IMAGEM
imagem = document.getElementById("imagem");
imagem.height = 500;

/*escreve no site
window.document.write("Ola, mundo!");
window.document.write(window.document.URL);
*/

// ESCREVENDO POR JS OQUE TA NO TEXTO DE p [0] no caso 1
var p1 = document.getElementsByTagName("p")[0];
//innerHTML vem com formatacao: bold, strong etc
document.write(`Esta escrito: ${p1.innerHTML} <br>`);
//innerText nao vem com formatacao
document.write("Esta escrito: " + p1.innerText);
//p1.style.color = "RED"; //alterando cor de um elemento
