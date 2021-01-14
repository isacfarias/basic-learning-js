var obj = {
    nome: "Asdrubaldo",
    sobreNome:"Novais",
    idade:"35",
    apresentacao: function() {
        console.log("Sou "+obj.nome+" "+obj.sobreNome);        
    }
}

console.log(obj);
console.log(obj.nome);

obj.apresentacao();


var obj2 = {
    nome: "Alonso",
    sobreNome:"Coffe",
    idade:"19",
    apresentacao: toString
}

function toString() {
    console.log("Sou "+this.nome+" "+this.sobreNome);        
}

obj2.apresentacao();