let num1 = Math.floor(Math.random()*(100 -1) + 1)
let num2 = Math.floor(Math.random()*(100 -1) + 1)

console.log(num1)
console.log(num2)

function maiorNum (num1,num2){
    if(num1 > num2){
        console.log('O maior numero é:', num1);
    } else if(num2 > num1){
        console.log('O maior numero é:',num2);
    }else{
        console.log('Os numeros são iguais:');
    }
}

maiorNum(num1,num2)