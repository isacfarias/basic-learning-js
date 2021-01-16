function dizerBomDia(conteudo) {
    console.log("Bom dia, ", conteudo);
}

dizerBomDia.call({}, "Asdrubaldo");

dizerBomDia.apply({}, ["Jusenildo"]);