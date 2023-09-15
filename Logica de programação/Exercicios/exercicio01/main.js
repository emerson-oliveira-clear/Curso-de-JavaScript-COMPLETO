
// captura evento de submit
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //verifica se o peso é invalido
    if (!peso) {
        setResultado('Peso Invalido', false)
        return
    }

    //verifica se a altura é invalido
    if (!altura) {
        setResultado('Altura Invalido', false)
        return
    }

    const imc = getImc(peso, altura);
    const situationImc = getSituationImc(imc)
   
    const msg = `Seu IMC é ${imc} (${situationImc }). `

    setResultado (msg,true)
})

//condição para verificar o valor do imc

function getSituationImc(imc) {
    const situation =
        [ 
        "Abaixo do peso", "Peso normal", "Acima do peso",
        "Obesidade I", "Obesidade II(severa)", "Obesidade III(mórbida)"
        ];

        if(imc >= 39.9) return situation[5];
        if(imc >= 34.9) return situation[4];
        if(imc >= 29.9) return situation[3];
        if(imc >= 24.9) return situation[2];
        if(imc >= 18.5) return situation[1];
        if(imc < 18.5) return situation[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)

}

// cria uma teg de paragrafo no html
function criaP() {
    const p = document.createElement('p');
    return p;
}


// exibe o resultado da aplicação
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaP()

    if(isValid){
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }


   
    p.innerHTML = msg
    resultado.appendChild(p)
}



