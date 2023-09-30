function Pessoa (nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
}


const p1 = new Pessoa( 'marcos','leonardo')
Object.freeze(p1)
p1.nome = 'outra coisa'

const p2 = new Pessoa( 'gilson','guilherme')
p1.nome = 'outra coisa'

console.log(p1)
console.log(p2)