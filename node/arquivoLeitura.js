// Formas diferentes de ler informações de arquivos:

const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // __dirname é uma constante que esta presente em todos os arquivos/modulos do node que representa o diretório atual

// Sincrono...
// Não é recomendavel, pois ele vai ler o arquivo completamente para só ai liberar o envent loop
// Se for um arquivo pequeno não vai gerar nenhum tipo de impacto mas se for grande sim, principalmente em meio uma requisição
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
// Leitura assincrona passando uma função callback para ser chamada quando o arquivo for chamado 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// O require já lê o arquivo JSON e já converte para um objeto 
const config = require('./arquivo.json')
console.log(config)
console.log(config.db.pass)

// Leu o diretório e me passou como resposta uma callback com todos os arquivos que pertensem a aquele diretório
fs.readdir( __dirname, (erro, arquivo) => {
    console.log('Conteúdo da pasta:')
    console.log(arquivo)
})