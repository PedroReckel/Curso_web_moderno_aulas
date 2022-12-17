const bodyParser = require('body-parser') // Responsavel por fazer o parser (interpretar) o corpo da requisição
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('.')) // Dentro da pasta atual na qual o arquivo server.js se encontra sirva os arquivos estaticos 
app.use(bodyParser.urlencoded({ extended: true })) // Se vinher algum formato a partir de um submit de um formulario esse código será responsável por ler os dados e transformar tudo em objeto
app.use(bodyParser.json()) // Se vinher um JSON dentro do body da requisição esse código vai transformar o JSON em objeto 

const multer = require('multer') // Vai ser usado para interpretar o formulario em que veio o arquivo do upload

const storage = multer.diskStorage({
    destination: function (req, file, callback) { // Definir o diretorio de destino
        callback(null, './upload')
    },
    filename: function (req, file, callback) { // Definir o nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')  // Na função single eu chamo o nome do arquivo que vai vir no corpo da requisição

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) { 
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))