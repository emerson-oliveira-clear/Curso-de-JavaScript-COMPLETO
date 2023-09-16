// ('...') esse operador tem 2 nomes REST e SPREAD

let a = 'a';
let b = 'b';
let c = 'c';

const letras = [b,c,a];

[a,b,c]  = letras;

console.log(a,b,c) 
console.log('----------------------') 
//Indices Array  0,1,2,3,4,5,6,7,8
const numeros = [1,2,3,4,5,6,7,8,9]
        //operador rest 
const[um,dois, ...resto] = numeros;

console.log(um,dois) 
console.log(resto) 
console.log('----------------------') 

const numeros1 = [1,2,3,4,5,6,7,8,9]
     //pulando indice
const[um1, ,tres1, ...resto1] = numeros;

console.log(um1,tres1) 
console.log(resto1) 