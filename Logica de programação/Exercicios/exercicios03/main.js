const elementos = [

    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

for (i = 0; i < elementos.length; i++) {
    const { tag } = elementos[i];
    const { texto } = elementos[i];

    document.createElement(tag)
    

}
console.log('chega aqui', tag, texto)





