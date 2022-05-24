const express = require('express')
const app = express()
const bodyparser = require('body-parser') // Oq o body-parser vai fazer aqui é uma vez que eu envio os dados para meu formulario, ele vai fazer um parser no corpo da minha requisição, vai pegar esses dados e jogar dentro do request.body. Ou seja, quando eu acessar request.body eu vou ter acesso a todos os dados do formulario que eu enviei.

app.use(bodyparser.urlencoded({ extended: true }))

app.post('/usuarios',(req, resp) => {  // Aqui eu vou fazer uma requisição do tipo post em cima da url usuarios
    console.log(req.body)  // Para eu ver o que eu tô mandando no lodo do servidor
    resp.send('<h1>Parabéns!</h1>')  // Para ver o que eu tô mandando no lado do browser
})

app.listen(3003)