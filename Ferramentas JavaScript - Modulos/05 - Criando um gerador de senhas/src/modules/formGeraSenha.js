import geraSenha from "./geradores"


const senhaGerada = document.querySelector('.senha-gerada')
const qntCaracteres = document.querySelector('.qnt')
const chkMai = document.querySelector('.chk-maiusculas')
const chkMin = document.querySelector('.chk-minusculas')
const chkNum = document.querySelector('.chk-numeros')
const chkSimb = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')


export default () => {

    gerarSenha.addEventListener('click',() => {
        senhaGerada.innerHTML = gera()
    })
}


function gera(){
    const senha = geraSenha(
        qntCaracteres.value,
        chkMai.checked,
        chkMin.checked,
        chkNum.checked,
        chkSimb.checked
    )
    return senha || "Selecione uma das opções"
}
