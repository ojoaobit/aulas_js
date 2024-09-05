/*
var.length
var.toUpperCase()
var.toLowerCase() 
*/
var nome = window.prompt("Qual seu nome?");

document.write(`Ola, ${nome}! Seu nome tem ${nome.length} letras. <br>`);
document.write(`Seu nome em negrito fica <strong>${nome}</strong>!<br>`);
document.write(`Seu nome em maiusculo fica ${nome.toUpperCase()}<br>`);
document.write(`Seu nome em minusculo fica ${nome.toLowerCase()}<br>`);

/*
n1 = 1545.5 
n1.toFixed(2) - 2 casas decimais
n1.toFixed(2).replace('.', ',') - trocou ponto por virgula
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) - localizou em real
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
*/
