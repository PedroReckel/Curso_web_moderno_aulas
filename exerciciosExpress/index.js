const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Pedro'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/opa', (req, res, next) => {
    
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 1899.00,
    //     discont: 0.12
    // })

    // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')

})

app.use((req, res) => {
    console.log('Despois...')
})

app.listen(3000, () => {
    console.log('Escultando serviço na porta 3000')
})