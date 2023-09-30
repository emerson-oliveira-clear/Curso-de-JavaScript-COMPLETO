//produto -> aumento e desconto
// camiseta = cor
// caneta = plastico

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(aum){
    this.preco += aum;
}

Produto.prototype.desconto = function(desc){
    this.preco -= desc;
}

function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco)
}

const camiseta = new Camiseta ('Regata',7.5, 'preta')
//camiseta.aumento(10)
console.log( camiseta);
