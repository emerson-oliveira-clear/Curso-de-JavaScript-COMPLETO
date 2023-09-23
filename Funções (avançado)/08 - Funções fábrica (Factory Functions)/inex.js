//factory function
function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome} `
        },

        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },


        fala: function(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura,
        peso,
        // getter
        imc(){
            const indiceImc = this.peso /(this.altura ** 2)
            return indiceImc.toFixed(2)
        }

    };
}

const p1 = criaPessoa('gabriele', 'cristina',1.68,75)
console.log(p1.fala('o marido'))
console.log(p1.imc())
p1.nomeCompleto = 'luiz inacio da silva'
console.log(p1.nomeCompleto)

console.log('----------------------------------------')

const p2 = criaPessoa('emerson', 'junior',1.72,75)
console.log(p2.fala('astrologia'))
console.log(p2.imc())
p2.nomeCompleto = 'jair'
console.log(p2.nomeCompleto)