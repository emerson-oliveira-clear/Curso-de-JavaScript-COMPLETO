
function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){

        //lancar o erro
        throw new Error('x e y precisam ser numeros')
    }

    return x + y;
}
//tenta executar um bloco de codigo
try{
    console.log(soma( 10, 9));
    console.log(soma( 10, 'j'));

}  // captura o erro
catch(err){
   console.log('alguma coisa mais amigavel para o usuario');
}
