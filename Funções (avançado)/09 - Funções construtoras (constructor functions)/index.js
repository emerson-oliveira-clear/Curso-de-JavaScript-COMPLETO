function Pessoa (nome, sobrenome){
    const ID = 123456;

    const metodoInterno = function(){

        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + 'é muluquin')
    }
}

const p1 = new Pessoa('jagunço','dias')
const p2 = new Pessoa('Maria','otavio')

console.log(p1.nome)
console.log(p1.sobrenome)
p1.metodo()

console.log(p2.nome)
console.log(p2.sobrenome)
p2.metodo()