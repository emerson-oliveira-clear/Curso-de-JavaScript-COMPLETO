
function Pessoa(nome, sobrenome) {
    this.nome =nome,
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('miguel', 'angelo')
console.log(p1.nome)