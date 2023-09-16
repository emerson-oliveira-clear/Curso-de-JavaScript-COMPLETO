const pessoa = {
    nome:'Emerson',
    sobrenome: 'oliveira',
    idade: 22,
    endereço:{
        rua:'Aleixo garcia',
        numero: 146
    }
};

const {nome ,sobrenome, idade} = pessoa


console.log(nome, sobrenome, idade)
const{endereço:{rua,numero}} = pessoa
console.log(rua , numero)