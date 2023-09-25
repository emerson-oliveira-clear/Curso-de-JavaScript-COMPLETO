function Produto(nome, preco,estoque){
    this.nome = nome,
    this.valor = preco,
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque' ,{
        enumerable:true, //true mostra a chave
        configurable: true, //pode apagar a chave
        get: function(){
            return estoque;
        },
        set: function (valor){
             
        }

    })
    
}


const p1 = new Produto('Camisa',20,3)

console.log(p1)
console.log(p1.estoque)