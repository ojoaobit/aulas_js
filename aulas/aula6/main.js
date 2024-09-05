/*OPERADORES RELACIONAIS:
> MAIOR QUE
< MENOR QUE
>= MAIOR IGUAL
<= MENOR IGUAL
== IGUAL
!= DIFERENTE

Resultado do relacional sempre vai ser booleano
verdadeiro ou falso, TRUE ou FALSE

ARITMETICOS PRIMEIRO, DEPOIS RELACIONAL
*/

var x = 5;
var y = "5";
5 == 5; //true
5 == "5"; //pro JS tambem e true
5 === "5"; //false, pois nao sao identicos
((5 != "5") === //false //identico
  x) !==
  y; //desigual restrito, TRUE

/*OPERADORES LOGICOS
  ! negacao
  && conjuncao 'E'
  || disjuncao 'OU'

  ! operador unario - 1 operando, ou TRUE ou FALSE
  nao verdadeiro = FALSE
  nao falsa = TRUE

  && operador binario - 2 operando
TRUE && TRUE = TRUE
TRUE && FALSE = FALSE

|| operador binario - 2 operando
TRUE || FALSE = TRUE
TRUE || TRUE = TRUE
FALSE || TRUE = TRUE
FALSE || FALSE = FALSE
*/

var a = 5;
var b = 8;

//1 !(nao), 2 &&(e), 3 ||(ou)
a > b && b % 2 == 0; // FALSE
a <= b || b / 2 == 2; //TRUE

// EXEMPLOS
idade >= 15 && idade <= 17;
estado == "AM" || estado == "RJ";
salario > 1500 && sexo != "M";

/*PRECEDENCIA:
//1 - ARITMETICOS
//2 - RELACIONAIS
//3 - LOGICOS
(), **, /
 >, <, >=
!, &&, ||
*/

// OPERADOR TERNARIO ? :
var media = 5.5;
teste ? true : false; //3 operandos
media >= 7 ? "Aprovado" : "Reprovado";
//REPROVADO
media += 3;
media >= 7 ? "Aprovado" : "Reprovado";
//APROVADO

var x = 8;
var res = x % 2 == 0 ? 5 : 9;
//x = 8 , res = 5
