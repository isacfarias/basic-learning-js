
var x = 3;

//compara valor
x = 5;
if (x == '5') {
    console.log('é igual a ', x);
} else {
    console.log('diferentão');
}

//compara tipo e valor
x = 5;
if (x === '5') {
    console.log('é igual a ', x);
} else {
    console.log('diferentão');
}


x = 5;
if (x >= '5') {
    console.log('é maior ou igual a ', x);
} else {
    console.log('diferentão');
}


x = 15;
if (x !== '5') {
    console.log('é diferente ', x);
} else {
    console.log('é igual ao comparador ', x);
}

x = 19
var y;
switch(x) {
    case 18:
        y = 'dezoito';
        break;
    case 20:
        y = 'vintão';
        break;
    default:
        y = 'to perdido';
}

console.log(y);