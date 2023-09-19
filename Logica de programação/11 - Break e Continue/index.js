const numeros = [1,2,3,4,5,6,7,8,9]
console.log('-----------continue------------')
for( let num of numeros){
   
    if(num === 8)continue;

    console.log(num)
}

console.log('-----------break------------')
for( let num of numeros){
   
    if(num === 8)break;

    console.log(num)
}