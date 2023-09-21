
const btnRelogio = document.querySelector('.Relogio')
const btnIniciar = document.querySelector('.Iniciar');
const btnPausar = document.querySelector('.Pausar');
const btnZerar = document.querySelector('.Zerar');



/*INICIAR - inicia do 0 e de onde parar*/

/*PAUSAR - pausa o contador*/


/*
//FUNCAO PARA CRIAR O TIMER
function criaTimer() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timerInicial = setInterval( e =>{
   // console.log(criaTimer());
},1000)


//EVENTO DOS BOTOES CAPTURADOS
btnIniciar.addEventListener('click', e => {
    //alert('cliquei no iniciar')
    console.log('chega aqui')
    btnRelogio.innerHTML = timerInicial

})

btnPausar.addEventListener('click',e => {
   // alert('cliquei no pausar')
    setTimeout(()=>{
        timerInicial()
    },    console.log('chega aqui'))
    
})

btnZerar.addEventListener('click', e => {
    alert('cliquei no zerar')
})



*/