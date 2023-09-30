function Produto(nome, preco,estoque){
    this.nome = nome,
    this.valor = preco,
    this.estoquePrivado = estoque

    Object.defineProperty(this, 'estoque' ,{
        enumerable:true, //true mostra a chave
        configurable: true, //pode apagar a chave
        get: function(){
            return estoquePrivado;
        },
        set: function (valor){
            if(typeof valor !== 'number'){
                console.log('bad value')
                return
            }
            estoquePrivado = valor
        }
    })
}
//teste 2
function criProduto(nome){
    return{
        get nomeP(){
           return nome
        },
        set nomeP(valor){
            nome = valor
        }
    }
}

const p2 = criProduto('casaco')
console.log(p2)

//const p1 = new Produto('Camisa',20,3)
//console.log(p1)
//p1.estoque = 550;
//console.log(p1.estoque)