
function rand(min,max){
    min *=1000
    max *=1000
    return Math.floor(Math.random() *(max - min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) =>{
        if (typeof msg !== "string") reject(new Error ('ERRO'))
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

const promises = [
    'primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 2', 1000),
   //esperaAi(1000, 1000),
    "Outro valor"

]

function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixei a pagina', 3000)
    }
}


baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina)
})
.catch(e => console.log(e))

/*
Promise.all(promises)
.then(function (valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro)
})

Promise.race(promises)
.then(function (valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro)
})
*/