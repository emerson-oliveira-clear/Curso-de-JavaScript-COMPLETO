console.log('-----------WHILE---------------')

let max = 30;
let min = 1;

function gerarNum(max, min) {
    r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let numAleatorio = gerarNum(max, min);

while (numAleatorio !== 10) {
    numAleatorio = gerarNum(max, min)
    console.log('AINDA NÃO ACHAMOS O 10.')
}

console.log('AGORA SIM')

console.log('-----------DO WHILE---------------')

let max2 = 20;
let min2 = 1;

function gerarNum(max2, min2) {
    r = Math.random() * (max2 - min2) + min2
    return Math.floor(r)
}

let numAleatorio2 = gerarNum(max2, min2);



do {
    numAleatorio = gerarNum(max2, min2);
    console.log('AINDA NÃO ACHAMOS O 10.')
}
while (numAleatorio !== 10) {
}
console.log('AGORA SIM') 