
function horaAtual (data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}

try{
    const hora = horaAtual()
    console.log(hora);
} catch(err){
    //tratar erro
} finally{
   console.log('boa noite')
}


