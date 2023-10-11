
function rand(min = 0,max = 3){
    
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

async function executa(){
    try{
        const fase1 = await esperaAi('fase 1', rand())
        console.log(fase1)
    
        const fase2 = await esperaAi('fase 2', rand())
        console.log(fase2)
    
        const fase3 = await esperaAi('fase 3', rand())
        console.log(fase3)
    
        console.log('Terminamos na fase: ', fase3);
    } catch(e){
        console.log(e)
    }
    
}

executa()



/*
esperaAi('fase 1', rand())
    .then(valor => {
        console.log(valor)
        return esperaAi("fase 2",rand())
    })
    .then(fase => {
        console.log(fase)
        return esperaAi('Fase 3', rand())
    })
    .then(fase => {
        console.log(fase)
    })
    .catch(e => console.log(e))
*/



