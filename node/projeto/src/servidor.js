const porta = 3030

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos/', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('./produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(res.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produtos = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar o JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na ${porta}.`)
})

