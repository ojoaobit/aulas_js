var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
console.log(`AGORA SAO EXATAMENTE ${hora} horas e ${minutos} minutos`);

if (hora >= 5 && hora < 12) {
  console.log("BOM DIA!");
} else if (hora >= 12 && hora < 18) {
  console.log("BOA TARDE!");
} else if (hora >= 18 && hora <= 23) {
  console.log("BOA NOITE!");
} else {
  console.log("BOA MADRUGADA!");
}
