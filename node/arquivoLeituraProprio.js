const fileSisten = require('fs')

const caminho = __dirname + '/arquivo.json'
// console.log(caminho)

const conteudo = fileSisten.readFileSync(caminho, 'utf-8')
console.log(conteudo)

fileSisten.readFile(caminho, 'utf-8',(erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db.port)

fileSisten.readdir( __dirname, (erro, arquivo) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivo)
})