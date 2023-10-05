const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'Marta'},
    {id: 1, nome: 'Loren'},
];


const novasPessoas = new Map();
for( const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)


/*
const novasPessoas = {};
for( const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa}
}
*/