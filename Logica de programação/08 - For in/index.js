//for in le os indices

console.log('----------------arrays--------------')


const frutas = ['Pera','Maça','Uva']

for(let i in frutas){
    console.log(frutas[i])
}

console.log('----------------objeto--------------')

const pessoa = { nome: 'gugu' , bebida: 'batida de coco', vivo: false}

for (let i in pessoa){

    console.log(pessoa[i])
}