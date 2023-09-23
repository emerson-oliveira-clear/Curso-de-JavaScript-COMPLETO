const nomes1 = ['eduardo','maria','joana','vinicius','miguelita'];
const nomes2 = ['eduardo','maria','joana','vinicius','miguelita'];
const nomes3 = ['eduardo','maria','joana','vinicius','miguelita'];
const nomes4 = ['eduardo','maria','joana','vinicius','miguelita'];

//nomes.splice(indice,delete,elem1,elem2,elem3)

//remover igual pop(ultimo indice)
const removidos1 = nomes1.splice(-1,1)

//remover igual shift(primeiro indice)
const removidos2 = nomes2.splice(0,1)

//adicionar igual unshift(primeiro indice)
nomes3.splice(0,0,'DJ Pereira')

//adicionar igual push(ultimo indice)
nomes4.splice(5,0,'Jojoca')


console.log(nomes1, removidos1)
console.log(nomes2, removidos2)
console.log(nomes3)
console.log(nomes4)

