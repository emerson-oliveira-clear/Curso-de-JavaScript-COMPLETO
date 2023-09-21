
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)

    }
})
function criaBtnApagar(li) {
    li.innerText += ' '
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar')
    li.appendChild(btnApagar)
    salvarTarefa()

}

document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})


function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
}

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefas of liTarefas){
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }


}
btnTarefa.addEventListener('click', e => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)

})
