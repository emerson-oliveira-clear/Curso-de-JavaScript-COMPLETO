const elementos = [

    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const section = document.querySelector('.container')

for (i = 0; i < elementos.length; i++) {
    const { tag, texto  } = elementos[i];
    

    const tagCriada = section.createElement(tag)
   
    tagCriada.createElement(texto);

}
console.log('chega aqui', tag, texto)






