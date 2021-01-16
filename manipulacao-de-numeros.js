var x = 780e3;//780000 anotação exponecial
console.log(x);

var y = 286e-6;//0.000286

console.log(y);

var z = 999999999999999;//suporte ate 15 digitos inteiros
console.log(z);
var z = 9999999999999999;//suporte quando o limite é ultrapassado ele tenta fazer proximação
console.log(z);
var w = 0.9999999999999999;//suporte ate 16 digitos decimais
console.log(w);
var w = 0.99999999999999999;//suporte ate 16 digitos decimais, ao ultrapassar isso ele ira fazer aproximaçãop
console.log(w);
var valor = 256;

console.log('valor 256 em hexadecimal:',valor.toString(16));
console.log('valor 0x100 de hexadecimal para inteiro:', 0x100);
console.log('valor 0400 octagonal para inteiro:', 0400);
console.log('valor binario:',valor.toString(2));
console.log('valor 100000000 binario para inteiro:', parseInt('100000000', 2));
console.log(x.toExponential(0));//controla a qauntidade de cassas decimais a ser exibida
var gasolina = 4.85641;
console.log(gasolina.toFixed(2));//faz o arredondadmento, com base nas casas decimais
console.log(gasolina.toPrecision(2));//faz arrendamento com base no numero completo
