//factory function
function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        nomCompleto(),

        fala: function(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura,
        peso,
        // getter
        get imc(){
            const indiceImc = this.peso /(this.altura ** 2)
            return indiceImc.toFixed(2)
        }

    };
}

const p1 = criaPessoa('gabriele', 'cristina',1.68,75)
console.log(p1.fala('o marido'))
console.log(p1.imc)

const p2 = criaPessoa('emerson', 'junior',1.72,75)
console.log(p2.fala('astrologia'))
console.log(p2.imc)
