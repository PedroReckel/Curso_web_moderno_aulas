const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
 
const porta = 3003
 
app.use(bodyParser.urlencoded({ extended: true })) // Se os dados estiverem sendo enviados a partir do formato urlencoded, quando chegar na minha aplicação ele vai aplicar esse middleware que vai fazer um parse que vai transformar isso em obejto
 
app.get('/produtos', (req, res, next) => {  // '/produtos/' vai retornar todos os produtos
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { // '/produtos/:id' vai retornar os produtos pelo id que eu escolher. Por exemplo: /produtos/1 -> Vai retornar o produto de ID 1
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({ 
        nome: req.body.nome, 
        preco: req.body.preco })
    res.send(produto)  // vai gerar o JSON
})
 
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})