// Novo recurso do ES2015
// Desestruturação é tirar elementos de dentro de objetos e arrays

const pessoa = {
    nome: 'Ana' ,
    idade: 5,
    endereço: {
        logradouro: 'Rua Torricelli',
        numero: 64
    }
}

const {nome, idade} = pessoa  // Chamando componentes do objeto
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Dando outros nome aos componetes do objeto
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro, numero}} = pessoa
console.log(logradouro, numero)

const {conta: {ag, num} = pessoa}
console.log(ag, num)

// O destruting no ponto de vista de objeto usa a sintaxe das chaves, pois ele está desestruturando de um objeto