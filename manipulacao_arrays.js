var pessoas = " joão, pedro, mauro, antonio, josé, paulo".split(',');
console.log(pessoas);
//tranformando array em string
console.log(pessoas.toString());
console.log(pessoas.join(' | '));
//insere um novo elemento no array
pessoas.push(" Asdrubaldo");
console.log('add pessoa com push:', pessoas.toString());

pessoas.unshift("gerson");
console.log('add pessoa com unshift:', pessoas.toString());

var pessoa = pessoas.pop();
console.log('pessoa removido com pop:', pessoa);

pessoa = pessoas.shift();
console.log('pessoa removida com shift', pessoa);

console.log('novo:', pessoas.toString());

pessoas[3] = " antonio coffe" ;
console.log('add sobrenome:', pessoas.toString()); 

var pessoaSlice = pessoas.slice(3,4);
console.log('selecionado pessoa pela posição:', pessoaSlice.toString());

var pessoaSplice = pessoas.splice(2,1," macarrão gente fina");//passa a posição de inicio, quantas, e posterior se vai add alguem
console.log('pessoa removida:', pessoaSplice.toString());
console.log('pessoa add:', pessoas.toString());

pessoaSplice = pessoas.splice(5,1);
console.log('pessoa removida :', pessoas.toString());

var outroArray = [" Picolé", "Josefina", "Alonso"];
pessoas = pessoas.concat(outroArray);
console.log('Novo array apos ser agrupado:', pessoas);

