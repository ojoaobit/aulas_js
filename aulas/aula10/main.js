/*
var vel = 78.5;

console.log(`Velocidade do carro: ${vel} km/h`);

if (vel > 60) { //condicao simples
  console.log("Ultrapassou a velocidade permitida. MULTADO!");
} 
  console.log("Dirija usando cinto de seguranca!");
*/
/*
var pais = "EUA";
console.log(`Vivendo no: ${pais}`);
if (pais == "BRASIL") {
  console.log("BRASILEIRO");
} else {
  console.log("ESTRANGEIRO");
}
*/

imagem = document.getElementById("img");
imagem.style.padding = "20px 0";

function calcular() {
  var txtvel = document.getElementById("txtvel");
  var resultado = document.getElementById("resultado");
  var vel = Number(txtvel.value); // criei variavel pra puxar o valor de value dentro do input
  resultado.innerHTML = `<p>Velocidade do carro: ${vel} Km/h</p>`;

  if (vel > 60) {
    resultado.innerHTML += `Acima da velocidade permitida. MULTADO!`;
  }
  resultado.innerHTML += `Dirija com seguranca!`;
}
