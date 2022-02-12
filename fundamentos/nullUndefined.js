let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Eu não posso acessar nada apartir do que vem antes está nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)