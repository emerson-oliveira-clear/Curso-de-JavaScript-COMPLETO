
class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} falou muito bem`)
    }

}

const p1 = new Pessoa('Luis', 'u')
p1.falar()


