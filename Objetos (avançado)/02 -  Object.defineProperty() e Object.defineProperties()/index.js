function Produto(nome, preco,estoque){
    this.nome = nome,
    this.valor = preco,
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque' ,{
        enumerable:true, //true mostra a chave
        value: estoque, //valor da chave
        writable: false, //pode alterar ou nao
        configurable: true //pode apagar a chave
    })
    
}


const p1 = new Produto('Camisa',20,3)
console.log(Object.keys(p1))