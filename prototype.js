function Casa(porta, janela, comodo) {
    this.porta = porta;
    this.janela = janela;
    this.comodo = comodo;
    this.apresentar = function() {
        console.log("A casa tem "+this.porta+" portas, "+this.janela+" janelas, "+this.comodo+" comodos.")
    };
}

var casaPequena = new Casa(2, 3, 5);
var casaMedia = new Casa(4, 5, 7);

// console.log(casaPequena);
// console.log(casaMedia);

casaPequena.apresentar();
casaMedia.apresentar();


// casaPequena.acrecentarAreaLazer = function() {
//     console.log("area de lazer de "+3+"x"+8);
// }

// casaPequena.apresentar();
// casaPequena.acrecentarAreaLazer();

// casaMedia.acrecentarAreaLazer();

Casa.prototype.acrecentarAreaLazer = function() {
        console.log("area de lazer de "+3+"x"+8);
}


console.log("area de lazer casa pequena")
 casaPequena.acrecentarAreaLazer();

 console.log("area de lazer casa media")
 casaMedia.acrecentarAreaLazer();
