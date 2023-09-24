// Filter , Map,  Reduce

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const totalN = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador += valor;
return acumulador;
},0)
console.log(totalN)
console.log('----------------------------------------');

const numeros2 = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const pares = numeros2.filter(valor => (valor % 2 === 0))
console.log(pares)

console.log('----------------------------------------');

const numeros3 = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const dobroN = numeros3.map(valor => (valor * 2))
console.log(dobroN)

console.log('----------------------------------------');




const pessoas = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Leticia',idade:19},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47}
];

const pessoaMaisVelha = pessoas.reduce(function (acumulador,valor){
    if (acumulador.idade > valor.idade) return acumulador
    return valor
});
console.log(pessoaMaisVelha)