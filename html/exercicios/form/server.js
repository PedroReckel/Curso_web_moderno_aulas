const express = require('express')
const app = express()
const bodyparser = require('body-parser') // Oq o body-parser vai fazer aqui é uma vez que eu envio os dados para meu formulario, ele vai fazer um parser no corpo da minha requisição, vai pegar esses dados e jogar dentro do request.body. Ou seja, quando eu acessar request.body eu vou ter acesso a todos os dados do formulario que eu enviei.

app.use(bodyparser.urlencoded({ extended: true }))

app.post('/usuarios',(req, resp) => {  // Aqui eu vou fazer uma requisição do tipo post em cima da url usuarios
    console.log(req.body)  // Para eu ver o que eu tô mandando no lodo do servidor
    resp.send('<h1>Parabéns! Usuário incluido</h1>')  // Para ver o que eu tô mandando no lado do browser
})

app.post('/usuarios/:id', (req, resp) => {  
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário alterado</h1>')
})

app.listen(3030)