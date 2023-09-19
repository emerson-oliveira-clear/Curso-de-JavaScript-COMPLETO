
let alturaImg = 5;
let larguraImg = 10;


function ePaisagem(altura,largura){
    if(larguraImg > alturaImg){
        console.log(true, 'Está imagem está no modo paisagem')
    } else if(alturaImg > larguraImg){
        console.log('Está imagem está no modo retrato');
    } else{
        console.log('Está imagem está no modo quadrado');
    }

}
ePaisagem(alturaImg,larguraImg)