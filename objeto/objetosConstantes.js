// Pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 456 -> {...}
// Pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Congela o objeto, não permitindo eu mudar ele

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})  // Criando um objeto constante
console.log(pessoaConstante)