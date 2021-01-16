var frase = "E agora, José ? A festa acabou, a luz apagou, o povo sumiu, a noite esfriou, e agora, José ?";
console.log("o tamanho da frase é:", frase.length);
console.log("a palavra festa começa em:", frase.indexOf('festa'));//localiza apens a primeira posição
console.log("localiza a ultima palavra José, ela começa em:", frase.lastIndexOf('José'));//localiza apenas a ultima posição
console.log("somente a para luz:", frase.slice(33,36));//seria a mesma coisa quem substring do java e substr do oracle
console.log("somente a para luz, usando indexOf para acha o inicio:", frase.slice(frase.indexOf('luz'),frase.indexOf('luz')+3));
console.log("somente a para apagou:", frase.substr(frase.indexOf('apagou'), 6));//no substr passa a possiçãop inicial e quantos caracteres quer
console.log("troca apagou por acendeu:", frase.replace('apagou', 'ascendeu'));
console.log("troca apagou por acendeu, e coloca caixa alta:", frase.replace('apagou', 'ascendeu').toUpperCase());
console.log("acrescenta mais ??? ao final da frase:", frase.concat('?????', ' E agora Josééééé!!!'));
console.log("troca apagou por acendeu:", frase.split(','));