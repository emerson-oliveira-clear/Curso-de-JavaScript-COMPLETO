exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.responseForm =  (req, res) => {
    res.send(`
        recebi o formulario *POST*
    `)
}