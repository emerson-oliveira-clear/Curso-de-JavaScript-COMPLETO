const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contactController = require("./controllers/contactController") 

// ROTAS DE HOME
route.get('/',homeController.paginaInicial);
route.post('/',homeController.responseForm);


// ROTAS DE CONTATO
route.get('/contato', contactController.infoDeContato);
//route.post('/',contactController);



module.exports = route;