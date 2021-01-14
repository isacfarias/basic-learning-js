function dizerQueroAgua(conteudo) {
    console.log("Oh meu rei, mande me agua. só mais ", conteudo);
}

dizerQueroAgua("dois litro já serve para começar");

var olhaAgua = function(conteudo) {
    console.log("desce ", conteudo);
}

olhaAgua(" tres pra mim");


//não é legal, abre portal para maldade
var refraoAguaMineral = new Function("conteudo", "console.log('olha olha', conteudo);");
refraoAguaMineral("agua mineral");