// Object.preventExtensions
// Ele não permite que eu coloque mais atributos no meu objeto 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
console.log(produto)
delete produto.tag
console.log(produto)

// Object.seal
// Ele não deixa que eu coloque mais atributos no objeto e nem que eu apague
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes