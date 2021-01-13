//for, for in, while, do while

console.log("while");
var x = 0;
while(x <= 10) {
    console.log('valor de X é', x);
    x++;
};


console.log("do while");
do {
    console.log('valor de X é', x);
    x++;
} while(x <= 10);// nesse caso ele vai imprimir o 11 devido ele executar primeiro e verificar depois.


console.log("for");
for (var i = 0; i <= 10; i++) {
    console.log('valor de i é', i);    
}



var pessoa = {
    nome: 'Asdrubaldo',
    sobrenome: 'juvelino'

}


console.log("for in");
for (const prop in pessoa) {
    console.log(prop, pessoa[prop] );
}
