function criandoTimer(){
    const relogio = document.querySelector('.relogio')
const btnIniciar = document.querySelector('.Iniciar');
const btnPausar = document.querySelector('.Pausar');
const btnZerar = document.querySelector('.Zerar');

//função para iniciar o time em 00:00:00
new Date(0)
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

//função para fazer o timer rodar
let segundos = 0
let timer;

function IniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', e => {
    if (e.target == btnIniciar) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        IniciaRelogio()
    } else if (e.target == btnPausar) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    } else if(e.target == btnZerar){
        clearInterval(timer)
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado')
    }
})
}

criandoTimer();