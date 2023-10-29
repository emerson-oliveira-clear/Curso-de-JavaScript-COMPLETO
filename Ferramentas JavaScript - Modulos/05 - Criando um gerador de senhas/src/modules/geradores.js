//função para gerar numero aleatorio
const rand = (max, min) => Math.floor(Math.random() * (max - min) + min)
//função apra gerar letra mauscula 
const geraMaiuscula = () => String.fromCharCode(rand(65,91))
//função apra gerar letra minuscula
const geraMinuscula = () => String.fromCharCode(rand(97,123))
//função apra gerar letra numero
const geraNumero = () => String.fromCharCode(rand(48,58))

const geraSimbolo = () => {
    if (rand(4,1) === 1) {
        return String.fromCharCode(rand(33,48))
    }else if (rand(4,1) === 2){
        return String.fromCharCode(rand(58,65))
    }else if (rand(4,1) === 3){
        return String.fromCharCode(rand(91,97))
    }else {
        return String.fromCharCode(rand(123,127))
    }
} 


export default function geraSenha(qnt,mai,min,num,simb){
    const senhaArray = []
    qnt = Number(qnt)

    for (let i = 0; i < qnt ; i++){
        mai && senhaArray.push(geraMaiuscula( ))
        min && senhaArray.push(geraMinuscula( ))
        num && senhaArray.push(geraNumero( ))
        simb && senhaArray.push(geraSimbolo( ))
    }

    return senhaArray.join('').slice(0,qnt)
}

