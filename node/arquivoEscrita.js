const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Como escrever (criar) um arquivo JSON 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo!')
})




// __dirname é para encontrar o diretorio atual
// __dirname + '/arquivo.JSON' entra dentro do arquivo JSON
console.log(__dirname + '/arquivo.json')