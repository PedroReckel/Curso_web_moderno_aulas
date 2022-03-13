const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') 
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)
// const http = require('http')   // Exemplo de um modulo que já vem com o Node
// http.createServer((req, res) => {
//     res.write('Bom dia!')
// }).listen(8080)