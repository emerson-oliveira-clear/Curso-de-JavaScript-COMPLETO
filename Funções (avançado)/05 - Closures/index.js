function retornaFunction(){
    const nome = 'luiz';
    return function (){
        return nome;
    }
}

const funcao = retornaFunction()
console.dir(funcao);