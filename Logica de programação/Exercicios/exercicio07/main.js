let num1 = Math.floor(Math.random() * (100 - 1) + 1)


function Divi3(num1) {
    if (num1 % 3 == 0) {
        console.log(' Fizz')
    }
    else {
        console.log('Não é divisil por 3')
    }
}

function Divi5(num1) {
    if (num1 % 5 == 0) { console.log(' Buzz') } else {
        console.log('Não é divisil por 5')
    }
}

function Divi3e5(num1) {
    if (num1 % 5 == 0 && num1 % 3 == 0) { console.log(' FizzBuzz') } else { console.log(num1) }
}

function eNum(num1) {
    if (isNaN(num1) == false) {
        console.log('é um numero');

    }
}

function exercicio(num1) {
    Divi3(num1);
    Divi5(num1);
    Divi3e5(num1)
    eNum(num1)
}

exercicio(num1);