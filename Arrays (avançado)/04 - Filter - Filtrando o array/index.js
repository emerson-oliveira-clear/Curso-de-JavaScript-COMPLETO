// Filter , Map,  Reduce
//EXERCICIO - retorna os numeros maiores que 10
console.log('----------------------------------------');

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
let maiorQue10 = [];
for(let i = 0; i < numeros.length;i++){
    if(numeros[i] > 10){
        maiorQue10.splice(12,0,numeros[i])
    }
}
console.log(maiorQue10)
console.log('----------------------------------------');

// AGORA USANDO FILTER
const numeros1 = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados);

console.log('----------------------------------------');

const pessoas = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Leticia',idade:19},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47}
];
//Retorne as pessoas que tem o nome com 5 letras ou mais
const nomeMaiorQue5 = pessoas.filter(obj => (obj.nome.length >= 5))
console.log(nomeMaiorQue5)

//Retorne as pessoas com mais de 50 anos
const idadeMaiorQue50 = pessoas.filter(obj => (obj.idade >= 50))
console.log(idadeMaiorQue50)

//Retorne as pessoas cuja nome termina com a
const nomeTerminaComA = pessoas.filter(obj => (obj.nome.toLowerCase().endsWith('a')))
console.log(nomeTerminaComA)