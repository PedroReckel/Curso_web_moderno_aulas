const express = require('express')
const app = express()

app.get('/opa', (req, res) => {
    res.send('Estou bem!')
})

app.listen(3000, () => {
    console.log('Escultando serviço na porta 3000')
})