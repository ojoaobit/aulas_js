/*
ORDEM DE PRECEDENCIA:
()  - PARENTESES
** - POTENCIACAO
* / % - MULT, DIV E RESTO
+ - ADICAO E SUBTRACAO

5 + 3 / 2 = 6.5
(5 + 3) / 2 = 4
*/
var a = 5 + 3; //8
var b = a % 5; //3
var c = 5 * b ** 2; //45
var d = 10 - a / 2; //6
var e = (6 * 2) / d; //2
var f = (b % e) + 4 / e; // 3

/*OPERADORES DE ATRIBUICAO*/
var n = 3;
n = n + 4; // n+=4
// so serve se for variavel n receber ele mesmo
n = n - 5; // n-=4
n = n * 4; // n*=4
n = n / 2; // n/=4
n = n ** 2; // n**=4
n = n % 5; // n%=4

/*OPERADOR DE INCREMENTO*/
var x = 5;
x = x + 1; //x +=1 ou x++
x = x + 1; //x +=1 ou x--
