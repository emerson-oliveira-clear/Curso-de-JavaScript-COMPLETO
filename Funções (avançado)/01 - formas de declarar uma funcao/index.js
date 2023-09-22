// declaração de função (function hoisting)

falaOi();
function falaOi(){
    console.log('OI')
} 
falaOi()
//-----------------------------------
//Fist-class objects(Objetos de primeira clase)
//fnction expression
const souUmDado = function(){
    console.log('Sou um dado')
}
souUmDado();
//-----------------------------------
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado)
//-----------------------------------
//arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow()

//-----------------------------------
const obj ={

}