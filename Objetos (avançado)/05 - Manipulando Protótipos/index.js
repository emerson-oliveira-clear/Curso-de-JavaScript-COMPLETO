

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco
}


Produto.prototype.desconto = function(perc){
    this.preco = this.preco - (this.preco * (perc /100))
}

Produto.prototype.aumento = function(aum){
    this.preco = this.preco + (this.preco * (aum /100))
}

const p1 = new Produto('camisa',50)
console.log(p2)

//--------------------------------------
const p2 = {
    nome: 'caneca', 
    preco: 15
}
Object.setPrototypeOf(p2,Produto.prototype)
p2.aumento(10)

console.log(p2)
