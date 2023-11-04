exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST" >
        Nome do cliente : <input type="text name="qualquer">
        <button>Enviar</button>
        </form>
        `);
}

exports.responseForm =  (req, res) => {
    res.send(`
        recebi o formulario *POST*
    `)
}