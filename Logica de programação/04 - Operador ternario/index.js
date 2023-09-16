

const pontuaçãoUsuario = 1050;

if (pontuaçãoUsuario >= 1000){
    console.log('usuario VIP')
} else{
    console.log('usuario NORMAL')
};

//USANDO OPERADOR TERNARIO

const PontUser = pontuaçãoUsuario >= 1000 ? console.log('usuario VIP'):console.log('usuario NORMAL')