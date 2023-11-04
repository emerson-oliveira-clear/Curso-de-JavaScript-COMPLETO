const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('hello world');
});

app.post('/', (req,res) => {
    res.send('recebidao mano, valeu');
})

app.get('/contato', (req,res) => {
    res.send('obrigado por entrar em contato');
});
 
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor execurando na porta 3000');
});
