//argumentos que sustenta todos os argumentos enviados
function funcao1() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao1(5,5,5,5,5,5) 

console.log('-------------------------')

function funcao2(a,b,c,d=8,e=9,f=10) {
    
    console.log(a,b,c,d,e,f)
}
funcao2(6,6,6) 

console.log('-------------------------')
//vaidar undefined
function funcao3(a,b) {
    
    console.log(a + b)
}
funcao3(2) 