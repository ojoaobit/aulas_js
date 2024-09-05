num1 = window.prompt("Digite um numero: ");
num2 = window.prompt("Digite outro numero: ");

/* NUMBER + NUMERO = ADICAO 
STRING + STRING = CONCATENA
*/
soma = Number(num1) + Number(num2);
// window.alert("Soma dos valores: " + soma);
// window.alert("Soma dos valores: " + soma.toSring());
// window.alert("Soma dos valores: " + String(soma));
window.alert(`Soma entre ${num1} e ${num2} = ${soma}`);
/* CONVERSAO:
Number.parseInt(var), Number.parseFloat(var) ou Number(var)
String(var) ou var.toString()

INTERPOLACAO:
template string: `aluno ${nome}`
*/
