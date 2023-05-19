const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(saudacao('Pedro'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.params.completo} ano = ${req.params.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', (parte) => {
    //     corpo += parte
    // })

    // req.on('end', () => {
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body.name))
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
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