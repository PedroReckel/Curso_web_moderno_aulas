module.exports = (app, texto) => {
    const salvar = (req, res) => {
        res.send('Produto > Salvar > ' + texto)
    }

    const obter = (req, res) => {
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }

}