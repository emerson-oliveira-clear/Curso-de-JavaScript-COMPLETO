
function aleatorio() {
    const numAleatorio = Math.random() * (5000 - 1000) + 1000
    return Math.floor(numAleatorio)
}


console.log(aleatorio())


function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, aleatorio())

}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, aleatorio())
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, aleatorio())
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('olá mundo');
}


/*
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        })
    })
})
*/

