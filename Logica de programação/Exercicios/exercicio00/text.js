function isPalindromo(str) {

    let nomeArray = str.split('');
    let nomeAoContrario = [];

    for (i = 0; i < nomeArray.length; i++) {
        nomeAoContrario.unshift(nomeArray[i]);
    }

    let resp = '';
    let cont = 0

    for (i = 0; i < nomeArray.length; i++) {

        if (nomeArray[i] !== nomeAoContrario[i]) {
            resp = 'NÃO, este nome não é  POLINDROMO';

        } else if (nomeArray[i] === nomeAoContrario[i]) {
            cont = cont + 1
        }
    }

    if (cont === nomeArray.length) {

        resp = 'SIM, este nome é POLINDROMO'
    }

    console.log(resp)
}

isPalindromo('luis');