const elementos = [

<<<<<<< HEAD
    { tag: 'p', texto: 'Qualqur coisa' },
=======
    { tag: 'p', texto: 'Frase 1' },
>>>>>>> 6767bee3558d97887e4f86079c21aa3d3d506afe
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

<<<<<<< HEAD

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; 
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto;
    div.appendChild(tagCriada)
}
container.appendChild(div)
=======
const section = document.querySelector('.container')

for (i = 0; i < elementos.length; i++) {
    const { tag, texto  } = elementos[i];
    

    const tagCriada = section.createElement(tag)
   
    tagCriada.createElement(texto);

}
console.log('chega aqui', tag, texto)

>>>>>>> 6767bee3558d97887e4f86079c21aa3d3d506afe





