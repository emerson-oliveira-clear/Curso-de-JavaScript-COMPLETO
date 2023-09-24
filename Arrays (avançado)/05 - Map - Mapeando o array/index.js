// Filter , Map,  Reduce
//EXERCICIO - retorna os numeros multiplicados
console.log('----------------------------------------');

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro);

console.log('----------------------------------------');

const pessoas = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Leticia',idade:19},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47}
];
//Retorne apenas uma string com o nome da pessoa
const nomeString = pessoas.map(obj => (obj.nome))
console.log(nomeString , 'só o nome')

console.log('----------------------------------------');

//Remova apenas a chave nome do objeto
const idadeObj = pessoas.map( obj => ({idade: obj.idade}))
console.log(idadeObj, 'só a idade')

console.log('----------------------------------------');

//Adicione uma chave id a cada objeto
const adicionaId = pessoas.map(function (obj,indice) {
    const newObj = {...obj};
    newObj.id = indice
    return newObj
});
console.log(adicionaId);
